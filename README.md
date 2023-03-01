# selenium-webdriver-js
Web test automation with Selenium WebDriver

Setup:
1. Clone repository
2. Move to the repo directory and run npm install to fetch dependencies
3. On Mac, to set up safaridriver, open your .bash_profile (or .bashrc) file and Paste the following into the bottom of your file (updating the path as it actually is on your machine):export PATH=$PATH:/usr/bin/safaridriver.
Save and close this file, then restart your Terminal/command prompt to reapply your Bash configuration. Or run "source ~/.bash_profile".
Then to enable automation on safari, you need to run command safaridriver --enable.



** Set up Chrome browser or Firefox

From this page https://www.npmjs.com/package/selenium-webdriver, get download links to the actual drivers like ChromeDriver or GeckoDriver for Firefox that Selenium uses to command different browsers. Unpack them into somewhere fairly easy to navigate to, like the root of your home user directory.

4. Add the chromedriver and geckodriver driver's location to your system PATH variable. This should be an absolute path from the root of your hard disk, to the directory containing the drivers. For example, if we were using a macOS machine, our user name was jjob, and we put our drivers in the root of our home folder, the path would be /Users/jjob.
The path you add to PATH needs to be the path to the directory containing the drivers, not the paths to the drivers themselves.

For that, open your .bash_profile (or .bashrc) file and Paste the following into the bottom of your file (updating the path as it actually is on your machine):export PATH=$PATH:/Users/jjob.
Save and close this file, then restart your Terminal/command prompt to reapply your Bash configuration.

Check that your new paths are in the PATH variable by entering the following into your terminal:
echo $PATH


FAQ:
1. Browser not opened while running test -
The installed driver version may be wrong. Remove driver and download the right version

2. Mac system alert ""macOS cannot verify the developer of “chromedriver” and blocks test run -
If there is a button to click Open, do it manually for the first time. Otherwise, manually open the driver exe file from the file manager. Then you may get another alert with an option to open."macOS cannot verify the developer of “chromedriver”. Are you sure you want to open it?" Click open button. You'll see "ChromeDriver was started successfully." in Terminal. Then run the test. This is only required for first time run. After that, chromedriver terminal can be closed and test would run normally.



** To run tests
5. In terminal, make sure you are inside your project folder, then enter the following command: "npm test<browser-name>" OR "node google-test <browser-name>

Browser name can be chrome, firefox or safari, based on the drivers installed.
