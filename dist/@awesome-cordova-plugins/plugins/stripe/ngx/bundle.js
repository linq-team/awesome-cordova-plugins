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

var Stripe = /** @class */ (function (_super) {
    tslib.__extends(Stripe, _super);
    function Stripe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stripe.prototype.setPublishableKey = function (publishableKey) { return core.cordova(this, "setPublishableKey", {}, arguments); };
    Stripe.prototype.createCardToken = function (params) { return core.cordova(this, "createCardToken", {}, arguments); };
    Stripe.prototype.createBankAccountToken = function (params) { return core.cordova(this, "createBankAccountToken", {}, arguments); };
    Stripe.prototype.validateCardNumber = function (cardNumber) { return core.cordova(this, "validateCardNumber", {}, arguments); };
    Stripe.prototype.validateCVC = function (cvc) { return core.cordova(this, "validateCVC", {}, arguments); };
    Stripe.prototype.validateExpiryDate = function (expMonth, expYear) { return core.cordova(this, "validateExpiryDate", {}, arguments); };
    Stripe.prototype.getCardType = function (cardNumber) { return core.cordova(this, "getCardType", {}, arguments); };
    Stripe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Stripe, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Stripe.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Stripe });
    Stripe.pluginName = "Stripe";
    Stripe.plugin = "cordova-plugin-stripe";
    Stripe.pluginRef = "cordova.plugins.stripe";
    Stripe.repo = "https://github.com/zyramedia/cordova-plugin-stripe";
    Stripe.platforms = ["Android", "Browser", "iOS"];
    Stripe = tslib.__decorate([], Stripe);
    return Stripe;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Stripe, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setPublishableKey: [], createCardToken: [], createBankAccountToken: [], validateCardNumber: [], validateCVC: [], validateExpiryDate: [], getCardType: [] } });

exports.Stripe = Stripe;
