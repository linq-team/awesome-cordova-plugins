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

var AdMobPro = /** @class */ (function (_super) {
    tslib.__extends(AdMobPro, _super);
    function AdMobPro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AD_POSITION = {
            NO_CHANGE: 0,
            TOP_LEFT: 1,
            TOP_CENTER: 2,
            TOP_RIGHT: 3,
            LEFT: 4,
            CENTER: 5,
            RIGHT: 6,
            BOTTOM_LEFT: 7,
            BOTTOM_CENTER: 8,
            BOTTOM_RIGHT: 9,
            POS_XY: 10,
        };
        return _this;
    }
    AdMobPro.prototype.createBanner = function (adIdOrOptions) { return core.cordova(this, "createBanner", {}, arguments); };
    AdMobPro.prototype.removeBanner = function () { return core.cordova(this, "removeBanner", { "sync": true }, arguments); };
    AdMobPro.prototype.showBanner = function (position) { return core.cordova(this, "showBanner", { "sync": true }, arguments); };
    AdMobPro.prototype.showBannerAtXY = function (x, y) { return core.cordova(this, "showBannerAtXY", { "sync": true }, arguments); };
    AdMobPro.prototype.hideBanner = function () { return core.cordova(this, "hideBanner", { "sync": true }, arguments); };
    AdMobPro.prototype.prepareInterstitial = function (adIdOrOptions) { return core.cordova(this, "prepareInterstitial", {}, arguments); };
    AdMobPro.prototype.showInterstitial = function () { return core.cordova(this, "showInterstitial", { "sync": true }, arguments); };
    AdMobPro.prototype.prepareRewardVideoAd = function (adIdOrOptions) { return core.cordova(this, "prepareRewardVideoAd", {}, arguments); };
    AdMobPro.prototype.showRewardVideoAd = function () { return core.cordova(this, "showRewardVideoAd", { "sync": true }, arguments); };
    AdMobPro.prototype.setOptions = function (options) { return core.cordova(this, "setOptions", {}, arguments); };
    AdMobPro.prototype.getAdSettings = function () { return core.cordova(this, "getAdSettings", {}, arguments); };
    AdMobPro.prototype.onAdFailLoad = function () { return core.cordova(this, "onAdFailLoad", { "eventObservable": true, "event": "onAdFailLoad", "element": "document" }, arguments); };
    AdMobPro.prototype.onAdLoaded = function () { return core.cordova(this, "onAdLoaded", { "eventObservable": true, "event": "onAdLoaded", "element": "document" }, arguments); };
    AdMobPro.prototype.onAdPresent = function () { return core.cordova(this, "onAdPresent", { "eventObservable": true, "event": "onAdPresent", "element": "document" }, arguments); };
    AdMobPro.prototype.onAdLeaveApp = function () { return core.cordova(this, "onAdLeaveApp", { "eventObservable": true, "event": "onAdLeaveApp", "element": "document" }, arguments); };
    AdMobPro.prototype.onAdDismiss = function () { return core.cordova(this, "onAdDismiss", { "eventObservable": true, "event": "onAdDismiss", "element": "document" }, arguments); };
    AdMobPro.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdMobPro, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AdMobPro.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdMobPro });
    AdMobPro.pluginName = "AdMob Pro";
    AdMobPro.plugin = "cordova-plugin-admobpro";
    AdMobPro.pluginRef = "AdMob";
    AdMobPro.repo = "https://github.com/floatinghotpot/cordova-admob-pro";
    AdMobPro.platforms = ["Android", "iOS", "Windows Phone 8"];
    AdMobPro = tslib.__decorate([], AdMobPro);
    return AdMobPro;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdMobPro, decorators: [{
            type: i0.Injectable
        }], propDecorators: { createBanner: [], removeBanner: [], showBanner: [], showBannerAtXY: [], hideBanner: [], prepareInterstitial: [], showInterstitial: [], prepareRewardVideoAd: [], showRewardVideoAd: [], setOptions: [], getAdSettings: [], onAdFailLoad: [], onAdLoaded: [], onAdPresent: [], onAdLeaveApp: [], onAdDismiss: [] } });

exports.AdMobPro = AdMobPro;
