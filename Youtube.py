#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb 17 14:29:41 2018

@author: ericd2017
"""
import sys
import webbrowser
import pyautogui
pyautogui.FAILSAFE = True
youtube_x , youtube_y = (265, 122)

webbrowser.open('https://www.youtube.com/')

pyautogui.moveTo(youtube_x, youtube_y, 1.5)
pyautogui.doubleClick()
pyautogui.typewrite(sys.argv[3])
pyautogui.press('enter')
