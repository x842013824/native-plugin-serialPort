var exec = require("cordova/exec");

module.exports = {
  open: function (name, baudrate, success, error) {
    exec(success, error, "serialPort", "open", [name, baudrate]);
  },
  close: function (name, success, error) {
    exec(success, error, "serialPort", "close", [name]);
  },
  send: function (name, value, success, error) {
    exec(success, error, "serialPort", "send", [name, value]);
  },
};
