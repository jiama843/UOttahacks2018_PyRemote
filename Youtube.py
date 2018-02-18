#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb 17 14:29:41 2018

@author: ericd2017
"""
import pyautogui
import sys
import webbrowser
url = 'https://www.youtube.com/results?search_query='

webbrowser.open(url + sys.argv[3])
pyautogui.moveTo(300, 300, 4.0)
pyautogui.click()
