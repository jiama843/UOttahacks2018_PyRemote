#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb 17 22:30:56 2018

@author: ericd2017
"""
import pyautogui
import sys
pyautogui.FAILSAFE = True

if (sys.argv[2] == 'full'):
    pyautogui.click()
    pyautogui.press('f')
elif (sys.argv[2] == 'normal'):
    pyautogui.click()
    pyautogui.press('esc')