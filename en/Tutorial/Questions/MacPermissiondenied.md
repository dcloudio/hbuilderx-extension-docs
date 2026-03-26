# Insufficient Permissions During macOS User Switching for Upgrade

After switching users on macOS, insufficient permissions may occur in the HBuilderX installation directory, preventing proper write operations during the upgrade process, leading to upgrade failure or functional abnormalities.

Solution

Please execute the following command in Terminal to repair directory permissions (replace the path with your actual installation path on your machine):

```bash osascript -e 'do shell script "chmod 3777 \"/Applications/HBuilderX-Alpha.app/Contents/HBuilderX\"" with administrator privileges'

```

During execution, the system will prompt for authorization, requiring you to enter your administrator account and password.

Note: The example path is: /Applications/HBuilderX-Alpha.app/Contents/HBuilderX. If your HBuilderX is installed in a different directory, please replace it with the corresponding actual path.

After the repair is complete, please restart HBuilderX and try upgrading again.
