# electron-sms-app
Send SMS with Twilio and Electron

[Base: Electron](http://electron.atom.io/)

[CSS: Photonkit](http://photonkit.com/)

[SMS: Twilio](https://www.twilio.com/)



## Usage:
```bash
# Clone this repository
git clone https://github.com/webdeziner/electron-sms-app
# Go into the repository
cd electron-sms-app
# Install dependencies
npm install
```

### Settings
Open renderer.js and edit:

var accountSid = ''; // Your Account SID from www.twilio.com/console

var authToken = '';   // Your Auth Token from www.twilio.com/console

var from_phone_number = ''; // From a valid Twilio number

## To run
```bash
# Run the app
npm start
```


![screenshot](https://github.com/webdeziner/electron-sms-app/screenshot.PNG)
