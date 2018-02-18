package com.example.taehyunlee.videoremote;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Color;
import android.speech.RecognizerIntent;
import android.support.constraint.ConstraintLayout;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.ToggleButton;

import com.github.nkzawa.emitter.Emitter;
import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;

import org.json.JSONException;
import org.json.JSONObject;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Locale;

import static android.speech.SpeechRecognizer.createSpeechRecognizer;



    public class MainActivity extends Activity {

        private ConstraintLayout background;
        private Button speechButton;
        private TextView voiceText;
        private ToggleButton helpToggle;
        private ScrollView scrollView;
        private static String host = "http://192.168.43.122:8080";
        private Socket mSocket;
        {
            try {
                mSocket = IO.socket(host);
            } catch (URISyntaxException e) {}
        }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Window window = this.getWindow();
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(ContextCompat.getColor(this,R.color.colorPrimary));

        background = (ConstraintLayout) findViewById(R.id.background);
        speechButton = (Button) findViewById(R.id.speechBtn);
        voiceText = (TextView) findViewById(R.id.voiceText);
        helpToggle = (ToggleButton) findViewById(R.id.helpToggle);
        scrollView = (ScrollView) findViewById(R.id.scrollView);

        speechButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startSpeechRec();
            }
        });
        helpToggle.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean b) {
                if(b){
                    scrollView.setVisibility(scrollView.VISIBLE);
                    speechButton.setVisibility(speechButton.INVISIBLE);
                    background.setBackgroundColor(Color.parseColor("#e1f2ff"));
                } else {
                    scrollView.setVisibility(scrollView.INVISIBLE);
                    speechButton.setVisibility(speechButton.VISIBLE);
                    background.setBackgroundColor(Color.parseColor("#FDFDFF"));
                }
            }
        });
        mSocket.on("No Command", new Emitter.Listener() {
            @Override
            public void call(final Object... args) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast toast = Toast.makeText(getApplicationContext(), "Invalud Command. Please Try Again.", Toast.LENGTH_SHORT);
                        toast.show();
                        }
                    });

                }
            }
        );
        mSocket.connect();
    }



    private void startSpeechRec() {
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.getDefault());
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "Listening...");

        try {
            startActivityForResult(intent, 143);

        } catch (ActivityNotFoundException time) {

        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if(requestCode == 143 && resultCode == RESULT_OK && data != null) {
            ArrayList<String> speechTexts = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            //runSSH(speechTexts.get(0));
            //voiceText.setText(speechTexts.get(0));
            attemptSend(speechTexts.get(0));
        }
    }
/*
    private void runSSH(String s) {
        String [] splitStr = s.split("\\s+");
        String [] target = {"google", "youtube"};
        String [] action = {"find", "search","play", "pause", "resume", "skip"};
        String [] googleOptions = {"Image", "Map", "Video"};
        String [][] specialWords = {target, action, googleOptions};
        String [] filteredWords = new String [2];
        String keyWord = "";

        for(int i = 0; i < splitStr.length; i++){
            for(int j = 0; j < specialWords.length; j++){
                for(int k = 0; k < specialWords[j].length; k++){
                    if(splitStr[i].equalsIgnoreCase(specialWords[j][k])){
                        filteredWords[j] = specialWords[j][k];
                    }
                }
            }
        }

        switch(filteredWords[0]){
            case "google" :

                break;
            case "youtube" :

                break;
        }
    }
*/
    private void attemptSend(String message) {
        if(!TextUtils.isEmpty(message)){
            mSocket.emit("Voice Detected", message);
        }
    }




}
