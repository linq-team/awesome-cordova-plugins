'use strict';

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var i0 = require('@angular/core');

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

var TealiumInstallReferrer = /** @class */ (function (_super) {
    tslib.__extends(TealiumInstallReferrer, _super);
    function TealiumInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrer.prototype.setPersistent = function (instanceName) { return core.cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrer.prototype.setVolatile = function (instanceName) { return core.cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TealiumInstallReferrer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TealiumInstallReferrer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TealiumInstallReferrer });
    TealiumInstallReferrer.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrer.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrer.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrer.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrer.platforms = ["Android"];
    TealiumInstallReferrer.install = "";
    TealiumInstallReferrer = tslib.__decorate([], TealiumInstallReferrer);
    return TealiumInstallReferrer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TealiumInstallReferrer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setPersistent: [], setVolatile: [] } });

exports.TealiumInstallReferrer = TealiumInstallReferrer;
