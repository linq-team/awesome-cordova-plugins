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

var GaoDeLocation = /** @class */ (function (_super) {
    tslib.__extends(GaoDeLocation, _super);
    function GaoDeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GaoDeLocation.prototype.getCurrentPosition = function (positionOptions) { return core.cordova(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocation.prototype.startSerialLocation = function (positionOptions) { return core.cordova(this, "startSerialLocation", { "callbackOrder": "reverse", "observable": true }, arguments); };
    GaoDeLocation.prototype.stopSerialLocation = function () { return core.cordova(this, "stopSerialLocation", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocation.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GaoDeLocation, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    GaoDeLocation.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GaoDeLocation });
    GaoDeLocation.pluginName = "GaoDeLocation";
    GaoDeLocation.plugin = "cordova-plugin-gaodelocation-chenyu";
    GaoDeLocation.pluginRef = "GaoDe";
    GaoDeLocation.repo = "https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git";
    GaoDeLocation.install = "ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key";
    GaoDeLocation.installVariables = ["ANDROID_API_KEY", "IOS_API_KEY"];
    GaoDeLocation.platforms = ["Android", "iOS"];
    GaoDeLocation = tslib.__decorate([], GaoDeLocation);
    return GaoDeLocation;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GaoDeLocation, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getCurrentPosition: [], startSerialLocation: [], stopSerialLocation: [] } });
/**
 * ios positioning accuracy
 * https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
 */
exports.DesiredAccuracyEnum = void 0;
(function (DesiredAccuracyEnum) {
    /**
     * The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBestForNavigation"] = 1] = "kCLLocationAccuracyBestForNavigation";
    /**
     * The best level of accuracy available.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBest"] = 2] = "kCLLocationAccuracyBest";
    /**
     * Accurate to within ten meters of the desired target.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyNearestTenMeters"] = 3] = "kCLLocationAccuracyNearestTenMeters";
    /**
     * Accurate to within one hundred meters.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyHundredMeters"] = 4] = "kCLLocationAccuracyHundredMeters";
    /**
     * Accurate to the nearest kilometer.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyKilometer"] = 5] = "kCLLocationAccuracyKilometer";
    /**
     * Accurate to the nearest three kilometers.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyThreeKilometers"] = 6] = "kCLLocationAccuracyThreeKilometers";
})(exports.DesiredAccuracyEnum || (exports.DesiredAccuracyEnum = {}));
/**
 * locationModeEnum
 */
exports.LocationModeEnum = void 0;
(function (LocationModeEnum) {
    LocationModeEnum[LocationModeEnum["Hight_Accuracy"] = 1] = "Hight_Accuracy";
    LocationModeEnum[LocationModeEnum["Battery_Saving"] = 2] = "Battery_Saving";
    LocationModeEnum[LocationModeEnum["Device_Sensors"] = 3] = "Device_Sensors";
})(exports.LocationModeEnum || (exports.LocationModeEnum = {}));
/**
 * locationProtocolEnum
 */
exports.LocationProtocolEnum = void 0;
(function (LocationProtocolEnum) {
    LocationProtocolEnum[LocationProtocolEnum["HTTP"] = 1] = "HTTP";
    LocationProtocolEnum[LocationProtocolEnum["HTTPS"] = 2] = "HTTPS";
})(exports.LocationProtocolEnum || (exports.LocationProtocolEnum = {}));

exports.GaoDeLocation = GaoDeLocation;
