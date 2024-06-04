'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

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

var WifiWizard2 = /** @class */ (function (_super) {
    tslib.__extends(WifiWizard2, _super);
    function WifiWizard2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WifiWizard2.prototype.iOSConnectNetwork = function (ssid, ssidPassword) { return core.cordova(this, "iOSConnectNetwork", { "otherPromise": true, "platforms": ["iOS"] }, arguments); };
    WifiWizard2.prototype.iOSDisconnectNetwork = function (ssid) { return core.cordova(this, "iOSDisconnectNetwork", { "otherPromise": true, "platforms": ["iOS"] }, arguments); };
    WifiWizard2.prototype.add = function (wifiConfig) { return core.cordova(this, "add", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.remove = function (ssid) { return core.cordova(this, "remove", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.connect = function (ssid, bindAll, password, algorithm) { return core.cordova(this, "connect", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.disconnect = function (ssid) { return core.cordova(this, "disconnect", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.enable = function (ssid, bindAll, waitForConnection) { return core.cordova(this, "enable", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.disable = function (ssid) { return core.cordova(this, "disable", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.reassociate = function () { return core.cordova(this, "reassociate", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.reconnect = function () { return core.cordova(this, "reconnect", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.listNetworks = function () { return core.cordova(this, "listNetworks", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.scan = function (options) { return core.cordova(this, "scan", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.startScan = function () { return core.cordova(this, "startScan", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getScanResults = function (options) { return core.cordova(this, "getScanResults", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.isWifiEnabled = function () { return core.cordova(this, "isWifiEnabled", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.setWifiEnabled = function (enabled) { return core.cordova(this, "setWifiEnabled", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.enableWifi = function () { return core.cordova(this, "enableWifi", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.disableWifi = function () { return core.cordova(this, "disableWifi", { "otherPromise": true, "platforms": ["Android"] }, arguments); };
    WifiWizard2.prototype.resetBindAll = function () { return core.cordova(this, "resetBindAll", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.setBindAll = function () { return core.cordova(this, "setBindAll", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getWifiRouterIP = function () { return core.cordova(this, "getWifiRouterIP", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getWifiIP = function () { return core.cordova(this, "getWifiIP", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getWifiIPInfo = function () { return core.cordova(this, "getWifiIPInfo", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getSSIDNetworkID = function (ssid) { return core.cordova(this, "getSSIDNetworkID", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getConnectedNetworkID = function () { return core.cordova(this, "getConnectedNetworkID", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getConnectedSSID = function () { return core.cordova(this, "getConnectedSSID", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.getConnectedBSSID = function () { return core.cordova(this, "getConnectedBSSID", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.isConnectedToInternet = function () { return core.cordova(this, "isConnectedToInternet", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.canPingWifiRouter = function () { return core.cordova(this, "canPingWifiRouter", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.canConnectToRouter = function () { return core.cordova(this, "canConnectToRouter", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.canConnectToInternet = function () { return core.cordova(this, "canConnectToInternet", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    WifiWizard2.prototype.formatWifiConfig = function (ssid, password, algorithm, isHiddenSSID) { return core.cordovaFunctionOverride(this, "formatWifiConfig", {}, arguments); };
    WifiWizard2.prototype.formatWPAConfig = function (ssid, password, isHiddenSSID) { return core.cordovaFunctionOverride(this, "formatWPAConfig", {}, arguments); };
    WifiWizard2.prototype.formatWifiString = function (ssid) { return core.cordovaFunctionOverride(this, "formatWifiString", {}, arguments); };
    WifiWizard2.prototype.timeout = function (delay) { return core.cordovaFunctionOverride(this, "timeout", {}, arguments); };
    WifiWizard2.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WifiWizard2, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WifiWizard2.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WifiWizard2 });
    WifiWizard2.pluginName = "WifiWizard2";
    WifiWizard2.plugin = "cordova-plugin-wifiwizard2";
    WifiWizard2.pluginRef = "WifiWizard2";
    WifiWizard2.repo = "https://github.com/tripflex/WifiWizard2";
    WifiWizard2.platforms = ["Android", "iOS"];
    WifiWizard2 = tslib.__decorate([], WifiWizard2);
    return WifiWizard2;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WifiWizard2, decorators: [{
            type: i0.Injectable
        }], propDecorators: { iOSConnectNetwork: [], iOSDisconnectNetwork: [], add: [], remove: [], connect: [], disconnect: [], enable: [], disable: [], reassociate: [], reconnect: [], listNetworks: [], scan: [], startScan: [], getScanResults: [], isWifiEnabled: [], setWifiEnabled: [], enableWifi: [], disableWifi: [], resetBindAll: [], setBindAll: [], getWifiRouterIP: [], getWifiIP: [], getWifiIPInfo: [], getSSIDNetworkID: [], getConnectedNetworkID: [], getConnectedSSID: [], getConnectedBSSID: [], isConnectedToInternet: [], canPingWifiRouter: [], canConnectToRouter: [], canConnectToInternet: [], requestPermission: [], formatWifiConfig: [], formatWPAConfig: [], formatWifiString: [], timeout: [] } });

exports.WifiWizard2 = WifiWizard2;
