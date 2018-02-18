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

url = "http://google.com/?#q="
webbrowser.open(url + sys.argv[3])
