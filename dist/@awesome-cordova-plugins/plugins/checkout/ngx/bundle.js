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

var Checkout = /** @class */ (function (_super) {
    tslib.__extends(Checkout, _super);
    function Checkout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkout.prototype.initSandboxClient = function (publicKey) { return core.cordova(this, "initSandboxClient", {}, arguments); };
    Checkout.prototype.initLiveClient = function (publicKey) { return core.cordova(this, "initLiveClient", {}, arguments); };
    Checkout.prototype.generateToken = function (ckoCardTokenRequest) { return core.cordova(this, "generateToken", {}, arguments); };
    Checkout.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Checkout, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Checkout.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Checkout });
    Checkout.pluginName = "Checkout";
    Checkout.plugin = "@checkout.com/cordova-plugin-checkout";
    Checkout.pluginRef = "cordova.plugins.Checkout";
    Checkout.repo = "https://github.com/checkout/frames-cordova";
    Checkout.install = "";
    Checkout.installVariables = [];
    Checkout.platforms = ["Android", "iOS"];
    Checkout = tslib.__decorate([], Checkout);
    return Checkout;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Checkout, decorators: [{
            type: i0.Injectable
        }], propDecorators: { initSandboxClient: [], initLiveClient: [], generateToken: [] } });

exports.Checkout = Checkout;
