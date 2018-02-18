#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb 17 23:25:47 2018

@author: ericd2017
"""

import sys
import pyautogui
pyautogui.FAILSAFE = True

if sys.argv[2] == 'increase':
    pyautogui.click()
    for i in range(int(sys.argv[3])):
        pyautogui.press('up')
elif sys.argv[2] == 'decrease':
    pyautogui.click()
    for i in range(int(sys.argv[3])):
        pyautogui.press('down')