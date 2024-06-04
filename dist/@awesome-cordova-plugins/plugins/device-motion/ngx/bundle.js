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

var DeviceMotion = /** @class */ (function (_super) {
    tslib.__extends(DeviceMotion, _super);
    function DeviceMotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceMotion.prototype.getCurrentAcceleration = function () { return core.cordova(this, "getCurrentAcceleration", {}, arguments); };
    DeviceMotion.prototype.watchAcceleration = function (options) { return core.cordova(this, "watchAcceleration", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceMotion.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMotion, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DeviceMotion.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMotion });
    DeviceMotion.pluginName = "DeviceMotion";
    DeviceMotion.plugin = "cordova-plugin-device-motion";
    DeviceMotion.pluginRef = "navigator.accelerometer";
    DeviceMotion.repo = "https://github.com/apache/cordova-plugin-device-motion";
    DeviceMotion.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone 8"];
    DeviceMotion = tslib.__decorate([], DeviceMotion);
    return DeviceMotion;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMotion, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getCurrentAcceleration: [], watchAcceleration: [] } });

exports.DeviceMotion = DeviceMotion;
