'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var BLE = /** @class */ (function (_super) {
    tslib.__extends(BLE, _super);
    function BLE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BLE.prototype.scan = function (services, seconds) { return core.cordova(this, "scan", { "observable": true }, arguments); };
    BLE.prototype.startScan = function (services) { return core.cordova(this, "startScan", { "observable": true, "clearFunction": "stopScan", "clearWithArgs": false }, arguments); };
    BLE.prototype.startScanWithOptions = function (services, options) { return core.cordova(this, "startScanWithOptions", { "observable": true, "clearFunction": "stopScan", "clearWithArgs": false }, arguments); };
    BLE.prototype.stopScan = function () { return core.cordova(this, "stopScan", {}, arguments); };
    BLE.prototype.setPin = function (pin) { return core.cordova(this, "setPin", { "observable": true }, arguments); };
    BLE.prototype.connect = function (deviceId) { return core.cordova(this, "connect", { "observable": true, "clearFunction": "disconnect", "clearWithArgs": true }, arguments); };
    BLE.prototype.autoConnect = function (deviceId, connectCallback, disconnectCallback) { return core.cordova(this, "autoConnect", { "sync": true }, arguments); };
    BLE.prototype.requestMtu = function (deviceId, mtuSize) { return core.cordova(this, "requestMtu", {}, arguments); };
    BLE.prototype.refreshDeviceCache = function (deviceId, timeoutMillis) { return core.cordova(this, "refreshDeviceCache", {}, arguments); };
    BLE.prototype.disconnect = function (deviceId) { return core.cordova(this, "disconnect", {}, arguments); };
    BLE.prototype.read = function (deviceId, serviceUUID, characteristicUUID) { return core.cordova(this, "read", {}, arguments); };
    BLE.prototype.write = function (deviceId, serviceUUID, characteristicUUID, value) { return core.cordova(this, "write", {}, arguments); };
    BLE.prototype.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) { return core.cordova(this, "writeWithoutResponse", {}, arguments); };
    BLE.prototype.startNotification = function (deviceId, serviceUUID, characteristicUUID) { return core.cordova(this, "startNotification", { "observable": true, "destruct": true, "clearFunction": "stopNotification", "clearWithArgs": true }, arguments); };
    BLE.prototype.stopNotification = function (deviceId, serviceUUID, characteristicUUID) { return core.cordova(this, "stopNotification", {}, arguments); };
    BLE.prototype.isConnected = function (deviceId) { return core.cordova(this, "isConnected", {}, arguments); };
    BLE.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    BLE.prototype.startStateNotifications = function () { return core.cordova(this, "startStateNotifications", { "observable": true, "clearFunction": "stopStateNotifications", "clearWithArgs": false }, arguments); };
    BLE.prototype.stopStateNotifications = function () { return core.cordova(this, "stopStateNotifications", {}, arguments); };
    BLE.prototype.startLocationStateNotifications = function () { return core.cordova(this, "startLocationStateNotifications", { "observable": true, "clearFunction": "stopLocationStateNotifications", "clearWithArgs": false }, arguments); };
    BLE.prototype.stopLocationStateNotifications = function () { return core.cordova(this, "stopLocationStateNotifications", {}, arguments); };
    BLE.prototype.showBluetoothSettings = function () { return core.cordova(this, "showBluetoothSettings", {}, arguments); };
    BLE.prototype.enable = function () { return core.cordova(this, "enable", {}, arguments); };
    BLE.prototype.readRSSI = function (deviceId) { return core.cordova(this, "readRSSI", {}, arguments); };
    BLE.prototype.connectedPeripheralsWithServices = function (services) { return core.cordova(this, "connectedPeripheralsWithServices", {}, arguments); };
    BLE.prototype.peripheralsWithIdentifiers = function (uuids) { return core.cordova(this, "peripheralsWithIdentifiers", {}, arguments); };
    BLE.prototype.bondedDevices = function () { return core.cordova(this, "bondedDevices", {}, arguments); };
    BLE.prototype.isLocationEnabled = function () { return core.cordova(this, "isLocationEnabled", {}, arguments); };
    BLE.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BLE, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BLE.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BLE });
    BLE.pluginName = "BLE";
    BLE.plugin = "cordova-plugin-ble-central";
    BLE.pluginRef = "ble";
    BLE.repo = "https://github.com/don/cordova-plugin-ble-central";
    BLE.platforms = ["Android", "iOS"];
    BLE = tslib.__decorate([], BLE);
    return BLE;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BLE, decorators: [{
            type: i0.Injectable
        }], propDecorators: { scan: [], startScan: [], startScanWithOptions: [], stopScan: [], setPin: [], connect: [], autoConnect: [], requestMtu: [], refreshDeviceCache: [], disconnect: [], read: [], write: [], writeWithoutResponse: [], startNotification: [], stopNotification: [], isConnected: [], isEnabled: [], startStateNotifications: [], stopStateNotifications: [], startLocationStateNotifications: [], stopLocationStateNotifications: [], showBluetoothSettings: [], enable: [], readRSSI: [], connectedPeripheralsWithServices: [], peripheralsWithIdentifiers: [], bondedDevices: [], isLocationEnabled: [] } });

exports.BLE = BLE;
