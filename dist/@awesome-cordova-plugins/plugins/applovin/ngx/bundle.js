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

exports.AdViewPosition = void 0;
(function (AdViewPosition) {
    AdViewPosition["TOP_CENTER"] = "top_center";
    AdViewPosition["TOP_RIGHT"] = "top_right";
    AdViewPosition["CENTERED"] = "centered";
    AdViewPosition["CENTER_LEFT"] = "center_left";
    AdViewPosition["CENTER_RIGHT"] = "center_right";
    AdViewPosition["BOTTOM_LEFT"] = "bottom_left";
    AdViewPosition["BOTTOM_CENTER"] = "bottom_center";
    AdViewPosition["BOTTOM_RIGHT"] = "bottom_right";
})(exports.AdViewPosition || (exports.AdViewPosition = {}));
exports.ConsentDialogState = void 0;
(function (ConsentDialogState) {
    ConsentDialogState[ConsentDialogState["UNKNOWN"] = 0] = "UNKNOWN";
    ConsentDialogState[ConsentDialogState["APPLIES"] = 1] = "APPLIES";
    ConsentDialogState[ConsentDialogState["DOES_NOT_APPLY"] = 2] = "DOES_NOT_APPLY";
})(exports.ConsentDialogState || (exports.ConsentDialogState = {}));
var Applovin = /** @class */ (function (_super) {
    tslib.__extends(Applovin, _super);
    function Applovin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Applovin.prototype.initialize = function (sdkKey) { return core.cordova(this, "initialize", {}, arguments); };
    Applovin.prototype.showMediationDebugger = function () { return core.cordova(this, "showMediationDebugger", {}, arguments); };
    Applovin.prototype.getConsentDialogState = function () { return core.cordova(this, "getConsentDialogState", {}, arguments); };
    Applovin.prototype.setHasUserConsent = function (hasUserConsent) { return core.cordova(this, "setHasUserConsent", {}, arguments); };
    Applovin.prototype.hasUserConsent = function () { return core.cordova(this, "hasUserConsent", {}, arguments); };
    Applovin.prototype.setIsAgeRestrictedUser = function (isAgeRestrictedUser) { return core.cordova(this, "setIsAgeRestrictedUser", {}, arguments); };
    Applovin.prototype.isAgeRestrictedUser = function () { return core.cordova(this, "isAgeRestrictedUser", {}, arguments); };
    Applovin.prototype.setDoNotSell = function (isDoNotSell) { return core.cordova(this, "setDoNotSell", {}, arguments); };
    Applovin.prototype.isDoNotSell = function () { return core.cordova(this, "isDoNotSell", {}, arguments); };
    Applovin.prototype.isTablet = function () { return core.cordova(this, "isTablet", {}, arguments); };
    Applovin.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    Applovin.prototype.setMuted = function () { return core.cordova(this, "setMuted", {}, arguments); };
    Applovin.prototype.setVerboseLogging = function (verboseLoggingEnabled) { return core.cordova(this, "setVerboseLogging", {}, arguments); };
    Applovin.prototype.setTestDeviceAdvertisingIds = function (advertisingIds) { return core.cordova(this, "setTestDeviceAdvertisingIds", {}, arguments); };
    Applovin.prototype.trackEvent = function (event, parameters) { return core.cordova(this, "trackEvent", {}, arguments); };
    Applovin.prototype.createBanner = function (adUnitId, position) { return core.cordova(this, "createBanner", {}, arguments); };
    Applovin.prototype.setBannerBackgroundColor = function (adUnitId, hexColorCode) { return core.cordova(this, "setBannerBackgroundColor", {}, arguments); };
    Applovin.prototype.setBannerPlacement = function (adUnitId, placement) { return core.cordova(this, "setBannerPlacement", {}, arguments); };
    Applovin.prototype.setBannerExtraParameter = function (adUnitId, key, value) { return core.cordova(this, "setBannerExtraParameter", {}, arguments); };
    Applovin.prototype.showBanner = function (adUnitId) { return core.cordova(this, "showBanner", {}, arguments); };
    Applovin.prototype.hideBanner = function (adUnitId) { return core.cordova(this, "hideBanner", {}, arguments); };
    Applovin.prototype.destroyBanner = function (adUnitId) { return core.cordova(this, "destroyBanner", {}, arguments); };
    Applovin.prototype.createMRec = function (adUnitId, position) { return core.cordova(this, "createMRec", {}, arguments); };
    Applovin.prototype.setMRecBackgroundColor = function (adUnitId, hexColorCode) { return core.cordova(this, "setMRecBackgroundColor", {}, arguments); };
    Applovin.prototype.setMRecPlacement = function (adUnitId, placement) { return core.cordova(this, "setMRecPlacement", {}, arguments); };
    Applovin.prototype.setMRecExtraParameter = function (adUnitId, key, value) { return core.cordova(this, "setMRecExtraParameter", {}, arguments); };
    Applovin.prototype.showMRec = function (adUnitId) { return core.cordova(this, "showMRec", {}, arguments); };
    Applovin.prototype.hideMRec = function (adUnitId) { return core.cordova(this, "hideMRec", {}, arguments); };
    Applovin.prototype.destroyMRec = function (adUnitId) { return core.cordova(this, "destroyMRec", {}, arguments); };
    Applovin.prototype.loadInterstitial = function (adUnitId) { return core.cordova(this, "loadInterstitial", {}, arguments); };
    Applovin.prototype.showInterstitial = function (adUnitId, placement) { return core.cordova(this, "showInterstitial", {}, arguments); };
    Applovin.prototype.setInterstitialExtraParameter = function (adUnitId, key, value) { return core.cordova(this, "setInterstitialExtraParameter", {}, arguments); };
    Applovin.prototype.onInterstitialLoaded = function () { return core.cordova(this, "onInterstitialLoaded", { "eventObservable": true, "event": "OnInterstitialLoadedEvent" }, arguments); };
    Applovin.prototype.onInterstitialLoadFailed = function () { return core.cordova(this, "onInterstitialLoadFailed", { "eventObservable": true, "event": "OnInterstitialLoadFailedEvent" }, arguments); };
    Applovin.prototype.onInterstitialDisplayed = function () { return core.cordova(this, "onInterstitialDisplayed", { "eventObservable": true, "event": "OnInterstitialDisplayedEvent" }, arguments); };
    Applovin.prototype.onInterstitialHidden = function () { return core.cordova(this, "onInterstitialHidden", { "eventObservable": true, "event": "OnInterstitialHiddenEvent" }, arguments); };
    Applovin.prototype.onInterstitialAdFailedToDisplay = function () { return core.cordova(this, "onInterstitialAdFailedToDisplay", { "eventObservable": true, "event": "OnInterstitialAdFailedToDisplayEvent" }, arguments); };
    Applovin.prototype.loadRewardedAd = function (adUnitId) { return core.cordova(this, "loadRewardedAd", {}, arguments); };
    Applovin.prototype.showRewardedAd = function (adUnitId, placement) { return core.cordova(this, "showRewardedAd", {}, arguments); };
    Applovin.prototype.setRewardedAdExtraParameter = function (adUnitId, key, value) { return core.cordova(this, "setRewardedAdExtraParameter", {}, arguments); };
    Applovin.prototype.onRewardedAdLoaded = function () { return core.cordova(this, "onRewardedAdLoaded", { "eventObservable": true, "event": "OnRewardedAdLoadedEvent" }, arguments); };
    Applovin.prototype.onRewardedAdLoadFailed = function () { return core.cordova(this, "onRewardedAdLoadFailed", { "eventObservable": true, "event": "OnRewardedAdLoadFailedEvent" }, arguments); };
    Applovin.prototype.onRewardedAdDisplayed = function () { return core.cordova(this, "onRewardedAdDisplayed", { "eventObservable": true, "event": "OnRewardedAdDisplayedEvent" }, arguments); };
    Applovin.prototype.onRewardedAdHidden = function () { return core.cordova(this, "onRewardedAdHidden", { "eventObservable": true, "event": "OnRewardedAdHiddenEvent" }, arguments); };
    Applovin.prototype.onRewardedAdAdFailedToDisplay = function () { return core.cordova(this, "onRewardedAdAdFailedToDisplay", { "eventObservable": true, "event": "OnRewardedAdAdFailedToDisplayEvent" }, arguments); };
    Applovin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Applovin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Applovin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Applovin });
    Applovin.pluginName = "Applovin";
    Applovin.plugin = "cordova-plugin-applovin-max";
    Applovin.pluginRef = "applovin";
    Applovin.repo = "https://github.com/AppLovin/AppLovin-MAX-Cordova";
    Applovin.platforms = ["Android", "iOS"];
    Applovin = tslib.__decorate([], Applovin);
    return Applovin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Applovin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { initialize: [], showMediationDebugger: [], getConsentDialogState: [], setHasUserConsent: [], hasUserConsent: [], setIsAgeRestrictedUser: [], isAgeRestrictedUser: [], setDoNotSell: [], isDoNotSell: [], isTablet: [], setUserId: [], setMuted: [], setVerboseLogging: [], setTestDeviceAdvertisingIds: [], trackEvent: [], createBanner: [], setBannerBackgroundColor: [], setBannerPlacement: [], setBannerExtraParameter: [], showBanner: [], hideBanner: [], destroyBanner: [], createMRec: [], setMRecBackgroundColor: [], setMRecPlacement: [], setMRecExtraParameter: [], showMRec: [], hideMRec: [], destroyMRec: [], loadInterstitial: [], showInterstitial: [], setInterstitialExtraParameter: [], onInterstitialLoaded: [], onInterstitialLoadFailed: [], onInterstitialDisplayed: [], onInterstitialHidden: [], onInterstitialAdFailedToDisplay: [], loadRewardedAd: [], showRewardedAd: [], setRewardedAdExtraParameter: [], onRewardedAdLoaded: [], onRewardedAdLoadFailed: [], onRewardedAdDisplayed: [], onRewardedAdHidden: [], onRewardedAdAdFailedToDisplay: [] } });

exports.Applovin = Applovin;
