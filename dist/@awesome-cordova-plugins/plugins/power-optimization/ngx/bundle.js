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

var PowerOptimization = /** @class */ (function (_super) {
    tslib.__extends(PowerOptimization, _super);
    function PowerOptimization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerOptimization.prototype.IsIgnoringBatteryOptimizations = function () { return core.cordova(this, "IsIgnoringBatteryOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizations = function () { return core.cordova(this, "RequestOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizationsMenu = function () { return core.cordova(this, "RequestOptimizationsMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.IsIgnoringDataSaver = function () { return core.cordova(this, "IsIgnoringDataSaver", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestDataSaverMenu = function () { return core.cordova(this, "RequestDataSaverMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.HaveProtectedAppsCheck = function () { return core.cordova(this, "HaveProtectedAppsCheck", { "sync": true }, arguments); };
    PowerOptimization.prototype.ProtectedAppCheck = function () { return core.cordova(this, "ProtectedAppCheck", { "sync": true }, arguments); };
    PowerOptimization.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PowerOptimization, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PowerOptimization.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PowerOptimization });
    PowerOptimization.pluginName = "PowerOptimization";
    PowerOptimization.plugin = "cordova-plugin-power-optimization";
    PowerOptimization.pluginRef = "cordova.plugins.PowerOptimization";
    PowerOptimization.repo = "https://github.com/snt1017/cordova-plugin-power-optimization";
    PowerOptimization.platforms = ["Android"];
    PowerOptimization = tslib.__decorate([], PowerOptimization);
    return PowerOptimization;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PowerOptimization, decorators: [{
            type: i0.Injectable
        }], propDecorators: { IsIgnoringBatteryOptimizations: [], RequestOptimizations: [], RequestOptimizationsMenu: [], IsIgnoringDataSaver: [], RequestDataSaverMenu: [], HaveProtectedAppsCheck: [], ProtectedAppCheck: [] } });

exports.PowerOptimization = PowerOptimization;
