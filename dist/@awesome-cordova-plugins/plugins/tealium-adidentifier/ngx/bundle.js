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

var TealiumAdIdentifier = /** @class */ (function (_super) {
    tslib.__extends(TealiumAdIdentifier, _super);
    function TealiumAdIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifier.prototype.setPersistent = function (instanceName) { return core.cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifier.prototype.setVolatile = function (instanceName) { return core.cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifier.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TealiumAdIdentifier, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TealiumAdIdentifier.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TealiumAdIdentifier });
    TealiumAdIdentifier.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifier.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifier.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifier.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifier.platforms = ["Android", "iOS"];
    TealiumAdIdentifier.install = "";
    TealiumAdIdentifier = tslib.__decorate([], TealiumAdIdentifier);
    return TealiumAdIdentifier;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TealiumAdIdentifier, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setPersistent: [], setVolatile: [] } });

exports.TealiumAdIdentifier = TealiumAdIdentifier;
