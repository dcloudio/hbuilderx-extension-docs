# Login failure problem
This document is used to troubleshoot certain user login failures.

## Currently known reasons for login failure include the following:
#### 1. Network problem
Solution: If the computer has a proxy or VPN enabled, try turning it off and then trying. Try another network, such as 4G/5G mobile hotspot

#### 2. Network restrictions
Solution: ping the domain name ide.liuyingyong.cn. If the ping fails, it may be due to network restrictions. You need to release it and restart HBuilderX.

#### 3. Some windows local operating environment problems
Solution: Copy the two files bin/msvcr120.dll and bin/msvcp140.dll in the HBuilderX decompression directory to the upper directory (that is, the same level directory as HBuilderX.exe). After the copy is completed, restart HBuilderX

#### 4. Computer time problem
Solution: Some users reported that the machine time is incorrect. After calibration, it becomes normal. You can search online for the steps to automatically calibrate computer time. After calibration, restart HBuilderX and try again.

## If you have tried all of the above and still cannot solve the problem, please contact the official:
1. Email: ide@dcloud.io
2. QQ: Search the group, group keyword: HBuilderX, after joining the group, ask the group administrator to help you solve the problem.
3. Post in the forum. Forum address: http://ask.dcloud.net.cn
