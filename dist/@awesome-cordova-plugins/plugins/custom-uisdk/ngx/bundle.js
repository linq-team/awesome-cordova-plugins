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

var CustomUISDK = /** @class */ (function (_super) {
    tslib.__extends(CustomUISDK, _super);
    function CustomUISDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomUISDK.prototype.fetchAuthCode = function (clientId, mid) { return core.cordova(this, "fetchAuthCode", {}, arguments); };
    CustomUISDK.prototype.isPaytmAppInstalled = function () { return core.cordova(this, "isPaytmAppInstalled", {}, arguments); };
    CustomUISDK.prototype.checkHasInstrument = function (mid) { return core.cordova(this, "checkHasInstrument", {}, arguments); };
    CustomUISDK.prototype.initPaytmSDK = function (mid, orderId, txnToken, amount, isStaging, callbackUrl) { return core.cordova(this, "initPaytmSDK", {}, arguments); };
    CustomUISDK.prototype.goForWalletTransaction = function (paymentFlow) { return core.cordova(this, "goForWalletTransaction", {}, arguments); };
    CustomUISDK.prototype.appInvoke = function () { return core.cordova(this, "appInvoke", {}, arguments); };
    CustomUISDK.prototype.goForNewCardTransaction = function (cardNumber, cardExpiry, cardCvv, cardType, paymentFlow, channelCode, issuingBankCode, emiChannelId, authMode, saveCard) { return core.cordova(this, "goForNewCardTransaction", {}, arguments); };
    CustomUISDK.prototype.goForSavedCardTransaction = function (cardId, cardCvv, cardType, paymentFlow, channelCode, issuingBankCode, emiChannelId, authMode) { return core.cordova(this, "goForSavedCardTransaction", {}, arguments); };
    CustomUISDK.prototype.goForNetBankingTransaction = function (netBankingCode, paymentFlow) { return core.cordova(this, "goForNetBankingTransaction", {}, arguments); };
    CustomUISDK.prototype.goForUpiCollectTransaction = function (upiCode, paymentFlow, saveVPA) { return core.cordova(this, "goForUpiCollectTransaction", {}, arguments); };
    CustomUISDK.prototype.getUpiIntentList = function () { return core.cordova(this, "getUpiIntentList", {}, arguments); };
    CustomUISDK.prototype.goForUpiIntentTransaction = function (appName, paymentFlow) { return core.cordova(this, "goForUpiIntentTransaction", {}, arguments); };
    CustomUISDK.prototype.goForUpiPushTransaction = function (paymentFlow, bankAccountJson, vpaName, merchantDetailsJson) { return core.cordova(this, "goForUpiPushTransaction", {}, arguments); };
    CustomUISDK.prototype.fetchUpiBalance = function (bankAccountJson, vpaName) { return core.cordova(this, "fetchUpiBalance", {}, arguments); };
    CustomUISDK.prototype.setUpiMpin = function (bankAccountJson, vpaName) { return core.cordova(this, "setUpiMpin", {}, arguments); };
    CustomUISDK.prototype.getBin = function (cardSixDigit, tokenType, token, mid, referenceId) { return core.cordova(this, "getBin", {}, arguments); };
    CustomUISDK.prototype.fetchNBList = function (tokenType, token, mid, orderId, referenceId) { return core.cordova(this, "fetchNBList", {}, arguments); };
    CustomUISDK.prototype.fetchEmiDetails = function (channelCode, cardType) { return core.cordova(this, "fetchEmiDetails", {}, arguments); };
    CustomUISDK.prototype.getLastNBSavedBank = function () { return core.cordova(this, "getLastNBSavedBank", {}, arguments); };
    CustomUISDK.prototype.getLastSavedVPA = function () { return core.cordova(this, "getLastSavedVPA", {}, arguments); };
    CustomUISDK.prototype.isAuthCodeValid = function (clientId, authCode) { return core.cordova(this, "isAuthCodeValid", {}, arguments); };
    CustomUISDK.prototype.getEnvironment = function () { return core.cordova(this, "getEnvironment", {}, arguments); };
    CustomUISDK.prototype.setEnvironment = function (environment) { return core.cordova(this, "setEnvironment", {}, arguments); };
    CustomUISDK.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CustomUISDK, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CustomUISDK.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CustomUISDK });
    CustomUISDK.pluginName = "cordova-paytm-customuisdk";
    CustomUISDK.plugin = "cordova-paytm-customuisdk";
    CustomUISDK.pluginRef = "paytm.customuisdk";
    CustomUISDK.repo = "https://github.com/paytm/paytm-customuisdk-cordova";
    CustomUISDK.install = "";
    CustomUISDK.installVariables = [];
    CustomUISDK.platforms = ["Android, iOS"];
    CustomUISDK = tslib.__decorate([], CustomUISDK);
    return CustomUISDK;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CustomUISDK, decorators: [{
            type: i0.Injectable
        }], propDecorators: { fetchAuthCode: [], isPaytmAppInstalled: [], checkHasInstrument: [], initPaytmSDK: [], goForWalletTransaction: [], appInvoke: [], goForNewCardTransaction: [], goForSavedCardTransaction: [], goForNetBankingTransaction: [], goForUpiCollectTransaction: [], getUpiIntentList: [], goForUpiIntentTransaction: [], goForUpiPushTransaction: [], fetchUpiBalance: [], setUpiMpin: [], getBin: [], fetchNBList: [], fetchEmiDetails: [], getLastNBSavedBank: [], getLastSavedVPA: [], isAuthCodeValid: [], getEnvironment: [], setEnvironment: [] } });

exports.CustomUISDK = CustomUISDK;
