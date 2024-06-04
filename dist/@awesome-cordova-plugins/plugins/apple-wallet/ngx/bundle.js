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

var AppleWallet = /** @class */ (function (_super) {
    tslib.__extends(AppleWallet, _super);
    function AppleWallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleWallet.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    AppleWallet.prototype.checkCardEligibility = function (primaryAccountIdentifier) { return core.cordova(this, "checkCardEligibility", {}, arguments); };
    AppleWallet.prototype.checkCardEligibilityBySuffix = function (cardSuffix) { return core.cordova(this, "checkCardEligibilityBySuffix", {}, arguments); };
    AppleWallet.prototype.checkPairedDevices = function () { return core.cordova(this, "checkPairedDevices", {}, arguments); };
    AppleWallet.prototype.checkPairedDevicesBySuffix = function (cardSuffix) { return core.cordova(this, "checkPairedDevicesBySuffix", {}, arguments); };
    AppleWallet.prototype.startAddPaymentPass = function (data) { return core.cordova(this, "startAddPaymentPass", {}, arguments); };
    AppleWallet.prototype.completeAddPaymentPass = function (data) { return core.cordova(this, "completeAddPaymentPass", {}, arguments); };
    AppleWallet.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppleWallet, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppleWallet.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppleWallet });
    AppleWallet.pluginName = "AppleWallet";
    AppleWallet.plugin = "cordova-apple-wallet";
    AppleWallet.pluginRef = "AppleWallet";
    AppleWallet.repo = "https://github.com/tomavic/cordova-apple-wallet";
    AppleWallet.platforms = ["iOS"];
    AppleWallet = tslib.__decorate([], AppleWallet);
    return AppleWallet;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppleWallet, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], checkCardEligibility: [], checkCardEligibilityBySuffix: [], checkPairedDevices: [], checkPairedDevicesBySuffix: [], startAddPaymentPass: [], completeAddPaymentPass: [] } });

exports.AppleWallet = AppleWallet;
