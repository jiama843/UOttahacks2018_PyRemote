#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb 17 13:01:17 2018

@author: ericd2017
"""

''' 
This file search the inputed key word on Google
''' 
import sys
import webbrowser
import pyautogui
pyautogui.FAILSAFE = True
search_x , search_y = (450, 437)

webbrowser.open('https://www.google.ca/')

pyautogui.moveTo(search_x, search_y, 1.2)
pyautogui.doubleClick()
pyautogui.typewrite(sys.argv[3])
pyautogui.press('enter')