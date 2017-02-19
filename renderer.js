(function() {
  var accountSid = ''; // Your Account SID from www.twilio.com/console
  var authToken = '';   // Your Auth Token from www.twilio.com/console
  var from_phone_number = ''; // From a valid Twilio number
  var twilio = require('twilio');
  var client = new twilio.RestClient(accountSid, authToken);
  var form = document.getElementById('sms'),
      reset = document.getElementById('reset'),
      error = document.getElementById('error'),
      success = document.getElementById('success'),
      warning = document.getElementById('warning'),
      info = document.getElementById('info'),
      phone_number = document.getElementById('phone_number'),
      message = document.getElementById('message');


  form.onsubmit = function() {
    hideAlerts();
    if(phone_number.value != '' && message.value != '') {
      info.style.display = 'block';
      client.messages.create({
        body: message.value,
        to: phone_number.value,
        from: from_phone_number
      }, function(err, message) {
        if(err) {
          info.style.display = 'none';
          error.style.display = 'block';
          error.innerHTML = err;
        } else {
          info.style.display = 'none';
          success.style.display = 'block';
        }
        //console.log(err);
        //console.log(message);
      });
    } else {
      warning.style.display = 'block';
    }
    return false;
  };

  reset.onclick = function() {
    phone_number.value = '';
    message.value = '';
    hideAlerts();
    return false;
  }

  function hideAlerts() {
    success.style.display = 'none';
    error.style.display = 'none';
    warning.style.display = 'none';
    info.style.display = 'none';
  }
})();
