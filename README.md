# UOttahacks2018_PyRemote

PyRemote is the android application that allows you to get full remote access to your computer by voice recognition only over a secure internet channel.

# Inspiration

Remember the Amazon Alexa and the Amazon Echo? We thought: What if we had that, except cheaper and more convenient.
While the Amazon Alexa has several pros that can never be matched, we always wondered why its functionalities were never ported to mobile. Sure, some google phones can connect to toasters and a few other IoT devices, but never a computer or a tv. The google mini is also too exxpensive, and even it isn't the definition of "portable".

# Our Solution

We have created PyRemote, which requires some server-side set up on a wireless computer using NodeJs and an application for android devices.

# Try It Out

Requirements:
- NodeJs 8.9.4 or later with npm

1. Download all of the files in zip format.
2. Go to the install directory and type the following commands: 
- "npm install socket.io"
- "npm install express"
3. Download the android app, and change the ip configuration to point to the correct ipv4 address.
4. Say some commands!
~ "open <Youtube or Google ...> <search>" - Searches Google/Youtube for <search>
~ "pause/resume" - Pauses/Resumes video
~ "skip/back" - Skips/Back a video
~ "fullscreen/normal" - Makes a video fullscreen/reduces it back to normal size
  
# What's Next?

Since we essentially have complete access over a computer, we can control basically anything. Why not configure it to a tv using a chromecast? Or hook it up to a raspberry pi and open your garage door!

We made it play tetris remotely!
