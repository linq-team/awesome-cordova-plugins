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

var BatteryStatus = /** @class */ (function (_super) {
    tslib.__extends(BatteryStatus, _super);
    function BatteryStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatus.prototype.onChange = function () { return core.cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatus.prototype.onLow = function () { return core.cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatus.prototype.onCritical = function () { return core.cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatus.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BatteryStatus, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BatteryStatus.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BatteryStatus });
    BatteryStatus.pluginName = "BatteryStatus";
    BatteryStatus.plugin = "cordova-plugin-battery-status";
    BatteryStatus.pluginRef = "navigator.battery";
    BatteryStatus.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatus.platforms = ["iOS", "Android", "Windows", "Browser"];
    BatteryStatus = tslib.__decorate([], BatteryStatus);
    return BatteryStatus;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BatteryStatus, decorators: [{
            type: i0.Injectable
        }], propDecorators: { onChange: [], onLow: [], onCritical: [] } });

exports.BatteryStatus = BatteryStatus;
