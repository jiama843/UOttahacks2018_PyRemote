#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb 17 19:56:35 2018

@author: ericd2017
"""
import sys
import pyautogui
pyautogui.FAILSAFE = True

if (sys.argv[2] == 'continue' or sys.argv[2] == 'pause'):
    pyautogui.click()
    pyautogui.press('k')
elif (sys.argv[2] == 'next'):
    pyautogui.click()
    pyautogui.hotkey('shift', 'n')
elif (sys.argv[2] == 'previous'):
    pyautogui.click()
    pyautogui.hotkey('shift', 'p')
