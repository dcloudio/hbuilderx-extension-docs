# Explanation of falsely reported as a Trojan horse

Firstly, every release of HBuilderX will be individually tested by a professional security company. It will be officially updated after pass security checking. In the past few years, security companies have never detected any viruses or Trojan horses. However, if you do not submit them for testing, they will report warnings indiscriminately.

#### 360 Testing Result

<img src="/static/snapshots/tutorial/Security_1.png" style="zoom: 80%;" />

#### Microsoft Testing Result

<img src="/static/snapshots/tutorial/Security_2.png" style="zoom: 80%;" />

#### Why I still receive a virus warning from antivirus software?

`360` will be updated in real time after passing the test，but Microsoft's virus database update follows the unified mechanism of windows update with a custom caching mechanism.

According to the reply from the `Windows Defender` team (see the purple box in the figure above), you need to run the command line tool as an administrator and execute the command to clear the cache.


Microsoft's response：

```
Thank you for submitting the test.
We have reviewed the file and deleted the test results. (The previous test result is a Trojan horse. After we submitted it, Microsoft responded to delete the previous result, indicating that it is non-toxic)
Please try the following steps to clear cached detections and obtain the latest malware definitions.
1.Open the commond line as an administrator，and change the directory to c:\Program Files\Windows Defender
2.Run “MpCmdRun.exe -removedefinitions -dynamicsignatures”
The latest definition can be downloaded from here：https://www.microsoft.com/en-us/wdsi/definitions
Best Wishes，
Windows Defender Reply
```

#### The difference between individual authentication and speculation algorithm

In addition to "360" and Microsoft, there may be other security software that will falsely report Trojan horses. Don't worry about these, just add HBuilderX to "whitelist".

Reason：

Each security software has a guessing algorithm, and it reports if there is a virus, but it often misreports.

Both `360` and `windows Defender` often misreport, for example：https://www.cnbeta.com/articles/tech/758679.htm

If we specifically submit the software to the security platform for testing, it is not a speculative algorithm, but a professional security test on the software. After passing the security test, our software will be added to the whitelist.

Before HBuilderX was independently tested by 360, 360 also made the same warning. However, after the test passed and no warnings were reported.

Independent safety certification is a strict, independent, and targeted test, not a speculative algorithm. After the certification is passed, there are indeed no viruses and Trojan horses in the software. At present, some foreign security software, such as Microsoft, Symantec, etc., do not have software security certification channels. However, the guessing algorithms of these security software are not accurate, so HBuilderX is often misreported.

因为360提交方便、认证快，所以DCloud一般是等360单独认证通过后就会更新版本。在360单独认证HBuilderX无毒通过后，其他靠推测算法报警的安全软件的警告不用理睬。 Due to the convenience of 360 submission and fast security certification, DCloud will update the version after 360 independent security certification is passed. Please also ignore HBuilderX warnings from other security software, and add HBuilderX to the whitelist of these security software.
