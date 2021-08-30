#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os
import sys
import shutil

# 当前目录
current_dir = os.path.dirname(__file__)
zh_cn_dir = os.path.join(current_dir, "zh-cn")
en_dir = os.path.join(current_dir, "en")
zh_hant_dir = os.path.join(current_dir, "zh-hant")

def findAllFile(base):
    for root, ds, fs in os.walk(base):
        for f in fs:
            fullname = os.path.join(root, f)
            yield fullname

def sync_all():
    """遍历中文目录, 如果英文目录/繁体中文目录，相应文件不存在，则复制。反之，跳过已有。
    """
    zh_cn_all_files = findAllFile(zh_cn_dir)

    # 同步至英文目录
    for i in zh_cn_all_files:
        relative_path = i.replace(zh_cn_dir + '/', '')
        en_target_path = os.path.join(en_dir,relative_path)
        if not os.path.exists(en_target_path):
            en_target_dir = os.path.dirname(en_target_path)
            if not os.path.exists(en_target_dir):
                mkdir_cmd = "mkdir -p {0}".format(en_target_dir)
                os.system(mkdir_cmd)
            cp_cmd = "cp -pf {0} {1}".format(i,en_target_path)
            os.system(cp_cmd)

    # 同步至繁体中文目录
    for i in zh_cn_all_files:
        relative_path = i.replace(zh_cn_dir + '/', '')
        zh_hant_target_path = os.path.join(zh_hant_dir,relative_path)
        if not os.path.exists(zh_hant_target_path):
            zh_hant_target_dir = os.path.dirname(zh_hant_target_path)
            if not os.path.exists(zh_hant_target_dir):
                mkdir_cmd = "mkdir -p {0}".format(zh_hant_target_dir)
                os.system(mkdir_cmd)
            cp_cmd = "cp -pf {0} {1}".format(i,zh_hant_target_path)
            os.system(cp_cmd)


if __name__ == "__main__":
    sync_all()