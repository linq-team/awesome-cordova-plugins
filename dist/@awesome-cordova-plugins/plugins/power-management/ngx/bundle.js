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

var PowerManagement = /** @class */ (function (_super) {
    tslib.__extends(PowerManagement, _super);
    function PowerManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerManagement.prototype.acquire = function () { return core.cordova(this, "acquire", {}, arguments); };
    PowerManagement.prototype.dim = function () { return core.cordova(this, "dim", {}, arguments); };
    PowerManagement.prototype.release = function () { return core.cordova(this, "release", {}, arguments); };
    PowerManagement.prototype.setReleaseOnPause = function (set) { return core.cordova(this, "setReleaseOnPause", {}, arguments); };
    PowerManagement.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PowerManagement, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PowerManagement.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PowerManagement });
    PowerManagement.pluginName = "PowerManagement";
    PowerManagement.plugin = "cordova-plugin-powermanagement-orig";
    PowerManagement.pluginRef = "powerManagement";
    PowerManagement.repo = "https://github.com/Viras-/cordova-plugin-powermanagement";
    PowerManagement.platforms = ["Android", "iOS"];
    PowerManagement = tslib.__decorate([], PowerManagement);
    return PowerManagement;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PowerManagement, decorators: [{
            type: i0.Injectable
        }], propDecorators: { acquire: [], dim: [], release: [], setReleaseOnPause: [] } });

exports.PowerManagement = PowerManagement;
