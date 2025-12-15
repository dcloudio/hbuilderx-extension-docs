#!/usr/bin/env python
#-*- coding:utf-8 -*-

"""
简体转繁体
"""

import os
import sys
import json
from opencc import OpenCC

source_file = "/Users/hx/DCloud/hbuilderx-extension-docs/zh-hant/Tutorial/Other/themes_param.md"

# s2t 简体 -> 繁体
# s2tw 简体 -> 台湾繁体
# s2hk 简体 -> 香港繁体

cc = OpenCC('s2t')
# cc.convert(to_convert)

with open(source_file, "r") as f:
    source_data = f.read()

last_result = cc.convert(source_data)

with open(source_file, "w") as f:
    f.write(last_result)
