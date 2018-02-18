#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Feb 18 09:43:59 2018

@author: ericd2017
"""

import pyautogui
parameter = 200

figure_location = pyautogui.locateOnScreen('search_button.png')
figure_x , figure_y = pyautogui.center(figure_location)
pyautogui.moveTo(figure_x, figure_y + parameter)
pyautogui.doubleClick()