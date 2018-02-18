#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb 17 15:13:50 2018

@author: ericd2017
"""
import sys
key_type = sys.argv[1]
open_key = sys.argv[2]

if key_type == 'open':
    if open_key == 'Google':
        import Google
    elif open_key == 'Youtube':
        import Youtube
    elif open_key == 'video':
        import open_video
elif key_type == 'video':
    import pause
elif key_type == 'screen':
    import Screen
elif key_type == 'volume':
    import volume
    