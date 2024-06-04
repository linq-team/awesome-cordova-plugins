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

var Admob = /** @class */ (function (_super) {
    tslib.__extends(Admob, _super);
    function Admob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admob.prototype.setOptions = function (options) { return core.cordova(this, "setOptions", {}, arguments); };
    Admob.prototype.createBannerView = function (options) { return core.cordova(this, "createBannerView", {}, arguments); };
    Admob.prototype.showBannerAd = function (show) { return core.cordova(this, "showBannerAd", {}, arguments); };
    Admob.prototype.destroyBannerView = function () { return core.cordova(this, "destroyBannerView", {}, arguments); };
    Admob.prototype.requestInterstitialAd = function (options) { return core.cordova(this, "requestInterstitialAd", {}, arguments); };
    Admob.prototype.showInterstitialAd = function () { return core.cordova(this, "showInterstitialAd", {}, arguments); };
    Admob.prototype.requestRewardedAd = function (options) { return core.cordova(this, "requestRewardedAd", {}, arguments); };
    Admob.prototype.showRewardedAd = function () { return core.cordova(this, "showRewardedAd", {}, arguments); };
    Admob.prototype.onAdLoaded = function () { return core.cordova(this, "onAdLoaded", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdLoaded", "element": "document" }, arguments); };
    Admob.prototype.onAdFailedToLoad = function () { return core.cordova(this, "onAdFailedToLoad", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdFailedToLoad", "element": "document" }, arguments); };
    Admob.prototype.onAdOpened = function () { return core.cordova(this, "onAdOpened", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdOpened", "element": "document" }, arguments); };
    Admob.prototype.onAdClosed = function () { return core.cordova(this, "onAdClosed", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdClosed", "element": "document" }, arguments); };
    Admob.prototype.onAdLeftApplication = function () { return core.cordova(this, "onAdLeftApplication", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdLeftApplication", "element": "document" }, arguments); };
    Admob.prototype.onRewardedAd = function () { return core.cordova(this, "onRewardedAd", { "eventObservable": true, "event": "appfeel.cordova.admob.onRewardedAd", "element": "document" }, arguments); };
    Admob.prototype.onRewardedAdVideoStarted = function () { return core.cordova(this, "onRewardedAdVideoStarted", { "eventObservable": true, "event": "appfeel.cordova.admob.onRewardedAdVideoStarted", "element": "document" }, arguments); };
    Admob.prototype.onRewardedAdVideoCompleted = function () { return core.cordova(this, "onRewardedAdVideoCompleted", { "eventObservable": true, "event": "appfeel.cordova.admob.onRewardedAdVideoCompleted", "element": "document" }, arguments); };
    Object.defineProperty(Admob.prototype, "AD_SIZE", {
        get: function () { return core.cordovaPropertyGet(this, "AD_SIZE"); },
        set: function (value) { core.cordovaPropertySet(this, "AD_SIZE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Admob.prototype, "AD_TYPE", {
        get: function () { return core.cordovaPropertyGet(this, "AD_TYPE"); },
        set: function (value) { core.cordovaPropertySet(this, "AD_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    Admob.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Admob, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Admob.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Admob });
    Admob.pluginName = "AdMob";
    Admob.plugin = "cordova-admob";
    Admob.pluginRef = "admob";
    Admob.repo = "https://github.com/appfeel/admob-google-cordova";
    Admob.platforms = ["Android", "iOS", "Browser"];
    Admob = tslib.__decorate([], Admob);
    return Admob;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Admob, decorators: [{
            type: i0.Injectable
        }], propDecorators: { AD_SIZE: [], AD_TYPE: [], setOptions: [], createBannerView: [], showBannerAd: [], destroyBannerView: [], requestInterstitialAd: [], showInterstitialAd: [], requestRewardedAd: [], showRewardedAd: [], onAdLoaded: [], onAdFailedToLoad: [], onAdOpened: [], onAdClosed: [], onAdLeftApplication: [], onRewardedAd: [], onRewardedAdVideoStarted: [], onRewardedAdVideoCompleted: [] } });

exports.Admob = Admob;
