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

var Magnetometer = /** @class */ (function (_super) {
    tslib.__extends(Magnetometer, _super);
    function Magnetometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magnetometer.prototype.getReading = function () { return core.cordova(this, "getReading", {}, arguments); };
    Magnetometer.prototype.watchReadings = function () { return core.cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    Magnetometer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Magnetometer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Magnetometer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Magnetometer });
    Magnetometer.pluginName = "Magnetometer";
    Magnetometer.plugin = "cordova-plugin-magnetometer";
    Magnetometer.pluginRef = "cordova.plugins.magnetometer";
    Magnetometer.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    Magnetometer.platforms = ["Android", "iOS"];
    Magnetometer = tslib.__decorate([], Magnetometer);
    return Magnetometer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Magnetometer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getReading: [], watchReadings: [] } });

exports.Magnetometer = Magnetometer;
