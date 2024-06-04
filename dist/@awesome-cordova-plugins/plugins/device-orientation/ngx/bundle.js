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

var DeviceOrientation = /** @class */ (function (_super) {
    tslib.__extends(DeviceOrientation, _super);
    function DeviceOrientation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceOrientation.prototype.getCurrentHeading = function () { return core.cordova(this, "getCurrentHeading", {}, arguments); };
    DeviceOrientation.prototype.watchHeading = function (options) { return core.cordova(this, "watchHeading", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceOrientation.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceOrientation, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DeviceOrientation.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceOrientation });
    DeviceOrientation.pluginName = "DeviceOrientation";
    DeviceOrientation.plugin = "cordova-plugin-device-orientation";
    DeviceOrientation.pluginRef = "navigator.compass";
    DeviceOrientation.repo = "https://github.com/apache/cordova-plugin-device-orientation";
    DeviceOrientation.platforms = ["Amazon Fire OS", "Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone"];
    DeviceOrientation = tslib.__decorate([], DeviceOrientation);
    return DeviceOrientation;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceOrientation, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getCurrentHeading: [], watchHeading: [] } });

exports.DeviceOrientation = DeviceOrientation;
