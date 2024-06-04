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

exports.EnumResolution = void 0;
(function (EnumResolution) {
    EnumResolution[EnumResolution["RESOLUTION_AUTO"] = 0] = "RESOLUTION_AUTO";
    EnumResolution[EnumResolution["RESOLUTION_480P"] = 1] = "RESOLUTION_480P";
    EnumResolution[EnumResolution["RESOLUTION_720P"] = 2] = "RESOLUTION_720P";
    EnumResolution[EnumResolution["RESOLUTION_1080P"] = 3] = "RESOLUTION_1080P";
    EnumResolution[EnumResolution["RESOLUTION_2K"] = 4] = "RESOLUTION_2K";
    EnumResolution[EnumResolution["RESOLUTION_4K"] = 5] = "RESOLUTION_4K";
})(exports.EnumResolution || (exports.EnumResolution = {}));
var BarcodeScanner = /** @class */ (function (_super) {
    tslib.__extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeScanner.prototype.init = function (license) { return core.cordova(this, "init", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.initRuntimeSettingsWithString = function (settings) { return core.cordova(this, "initRuntimeSettingsWithString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.outputSettingsToString = function () { return core.cordova(this, "outputSettingsToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.destroy = function () { return core.cordova(this, "destroy", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.startScanning = function (options) { return core.cordova(this, "startScanning", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    BarcodeScanner.prototype.stopScanning = function () { return core.cordova(this, "stopScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.resumeScanning = function () { return core.cordova(this, "resumeScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.pauseScanning = function () { return core.cordova(this, "pauseScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.getResolution = function () { return core.cordova(this, "getResolution", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.switchTorch = function (desiredStatus) { return core.cordova(this, "switchTorch", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.setZoom = function (factor) { return core.cordova(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.setFocus = function (point) { return core.cordova(this, "setFocus", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarcodeScanner, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BarcodeScanner.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarcodeScanner });
    BarcodeScanner.pluginName = "dynamsoft-barcode-scanner";
    BarcodeScanner.plugin = "cordova-plugin-dynamsoft-barcode-reader";
    BarcodeScanner.pluginRef = "cordova.plugins.DBR";
    BarcodeScanner.repo = "https://github.com/xulihang/cordova-plugin-dynamsoft-barcode-reader";
    BarcodeScanner.install = "";
    BarcodeScanner.installVariables = [];
    BarcodeScanner.platforms = ["Android", "iOS"];
    BarcodeScanner = tslib.__decorate([], BarcodeScanner);
    return BarcodeScanner;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarcodeScanner, decorators: [{
            type: i0.Injectable
        }], propDecorators: { init: [], initRuntimeSettingsWithString: [], outputSettingsToString: [], destroy: [], startScanning: [], stopScanning: [], resumeScanning: [], pauseScanning: [], getResolution: [], switchTorch: [], setZoom: [], setFocus: [] } });

exports.BarcodeScanner = BarcodeScanner;
