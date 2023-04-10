'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var SerialPortPlugin = /** @class */ (function (_super) {
    tslib.__extends(SerialPortPlugin, _super);
    function SerialPortPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SerialPortPlugin.prototype.open = function (name, baudrate) { return core.cordova(this, "open", { "observable": true }, arguments); };
    SerialPortPlugin.prototype.close = function (name) { return core.cordova(this, "close", {}, arguments); };
    SerialPortPlugin.prototype.send = function (name, data) { return core.cordova(this, "send", {}, arguments); };
    SerialPortPlugin.pluginName = "SerialPortPlugin";
    SerialPortPlugin.plugin = "";
    SerialPortPlugin.pluginRef = "native.serialPort";
    SerialPortPlugin.repo = "";
    SerialPortPlugin.install = "";
    SerialPortPlugin.installVariables = [];
    SerialPortPlugin.platforms = ["Android"];
    SerialPortPlugin.decorators = [
        { type: core$1.Injectable }
    ];
    return SerialPortPlugin;
}(core.AwesomeCordovaNativePlugin));

exports.SerialPortPlugin = SerialPortPlugin;
