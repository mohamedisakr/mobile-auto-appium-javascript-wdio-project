## Appium Mobile Automation using JavaScript Fundamentals

### Pre-Installation

1.

### Installation Steps

1. npm init -y
2. npm install webdriverio
3. npm i --save-dev @wdio/cli
4. npx wdio config
5. add the following configuration in wdio.config.js file

```
  port: 4723,
  host: "localhost",
  path: "/wd/hub",
```

```
capabilities: [
    {
      platformName: "Android",
      platformVersion: "11.0",
      deviceName: "Pixel_2_API_30",
      app: join(process.cwd(), "./ApiDemos-debug.apk"),
    }
]
```

### Start emulator from command line

1. type: cd C:\Users\STC\AppData\Local\Android\Sdk\emulator
2. type: emulator -avd Pixel_2_API_30 (emulator name)

### List all up and running emulator/devices

type: adb devices

```
{
  "platformName": "Android",
  "platformVersion": "11",
  "deviceName": "Pixel_2_API_30",
  "app": "E:\\Projects\\mobile-auto-appium-javascript-wdio-project\\Android-NativeDemoApp-0.2.1.apk"
}
```
