# WebdriverIO sample test framework for Web and Android

### Node

This framework uses the 'import/export default' structure provided by babel, instead of the 'require/module.exports' structure.
The setup was done using the documentation from https://webdriver.io/docs/babel.html.

### Setup

To run on desktop, add the following system variable on your machine:

_**export PLATFORM=undefined**_

This will be overwritten via the run script which for desktop will set the platform as "desktop", or, for mobile, will set the platform as "mobile".

To run on an Android device, you need to follow these steps:

1. Install Android Studio
2. Download Image for Pixel 3 API 30, with Android 10+. The emulated device should look something like the screenshot below.

3a. If on Windows, add the ANDROID_HOME and ANDROID_SDK_ROOT in the System Variables.

3b. If on a Mac, add in .zprofile (Catalina OS) or .bash_profile:

    export ANDROID_HOME=~/Library/Android/sdk
    export ANDROID_SDK_ROOT=~/Library/Android/sdk
    export ANDROID_AVD_HOME=~/.android/avd

4. Restart the IDE

5. Open a terminal window and run the command `npm intall` to install all of the dependencies of the project.

6. Once the dependencies are installed, make sure you download and copy **chromedriver** 83.0.1 in the _node_modules/appium/node_modules/appium-chromedriver/chromedriver/mac_ folder, overwriting the chromedriver there.

    This is because the emulator supports chrome 83, but the latest version of appium which is used to drive mobile tests has chrome 85.

### Running the tests

To run desktop tests, open a terminal window in your IDE and type: `npm run test`.

To run mobile tests, open a terminal window in your IDE and type: `npm run mobile`.

### Reporting

To generate a report, run the `npm run report` command. These are generated using Allure and can be found in the _allure-report_ folder. Open the **index.html** file in the browser to see it.

### Linting

To check for any lint problems and fix them, run the `npm run lint` command.

### Miscellaneous

You can change the log level and other settings in the .conf.js files for both platforms.
