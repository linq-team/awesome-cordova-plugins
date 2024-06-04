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

exports.AppRateReviewTypeIos = void 0;
(function (AppRateReviewTypeIos) {
    /**
     * Write review directly in your application (iOS 10.3+), limited to 3 prompts per year.
     * Will fallback to 'AppStoreReview' for other iOS versions
     */
    AppRateReviewTypeIos["InAppReview"] = "InAppReview";
    /**
     * Open the store within the app. Use this option as an alternative to inAppReview to avoid the rate action from doing nothing
     */
    AppRateReviewTypeIos["AppStoreReview"] = "AppStoreReview";
    /**
     * Open the store using the openUrl preference (defaults to InAppBrowser). Be advised that WKWebView might not open the app store links
     */
    AppRateReviewTypeIos["InAppBrowser"] = "InAppBrowser";
})(exports.AppRateReviewTypeIos || (exports.AppRateReviewTypeIos = {}));
exports.AppRateReviewTypeAndroid = void 0;
(function (AppRateReviewTypeAndroid) {
    /**
     * Write review directly in your application. Will fallback to InAppBrowser if not available
     */
    AppRateReviewTypeAndroid["InAppReview"] = "InAppReview";
    /**
     *  Open the store using the openUrl preference (defaults to InAppBrowser)
     */
    AppRateReviewTypeAndroid["InAppBrowser"] = "InAppBrowser";
})(exports.AppRateReviewTypeAndroid || (exports.AppRateReviewTypeAndroid = {}));
exports.AppRatePromptType = void 0;
(function (AppRatePromptType) {
    /**
     * Prompt asking to rate the app.
     */
    AppRatePromptType["AppRatingPrompt"] = "AppRatingPrompt";
    /**
     * Prompt asking to rate the app within the store.
     */
    AppRatePromptType["StoreRatingPrompt"] = "StoreRatingPrompt";
    /**
     * Prompt asking to give feedback.
     */
    AppRatePromptType["FeedbackPrompt"] = "FeedbackPrompt";
})(exports.AppRatePromptType || (exports.AppRatePromptType = {}));
var AppRate = /** @class */ (function (_super) {
    tslib.__extends(AppRate, _super);
    function AppRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppRate.prototype.setPreferences = function (pref) { return core.cordova(this, "setPreferences", {}, arguments); };
    AppRate.prototype.getPreferences = function () { return core.cordova(this, "getPreferences", {}, arguments); };
    AppRate.prototype.promptForRating = function (immediately) { return core.cordova(this, "promptForRating", {}, arguments); };
    AppRate.prototype.navigateToAppStore = function () { return core.cordova(this, "navigateToAppStore", {}, arguments); };
    Object.defineProperty(AppRate.prototype, "locales", {
        get: function () { return core.cordovaPropertyGet(this, "locales"); },
        set: function (value) { core.cordovaPropertySet(this, "locales", value); },
        enumerable: false,
        configurable: true
    });
    AppRate.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppRate, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppRate.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppRate });
    AppRate.pluginName = "AppRate";
    AppRate.plugin = "cordova-plugin-apprate";
    AppRate.pluginRef = "AppRate";
    AppRate.repo = "https://github.com/pushandplay/cordova-plugin-apprate";
    AppRate.platforms = ["Android", "BlackBerry 10", "iOS", "Windows"];
    AppRate = tslib.__decorate([], AppRate);
    return AppRate;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppRate, decorators: [{
            type: i0.Injectable
        }], propDecorators: { locales: [], setPreferences: [], getPreferences: [], promptForRating: [], navigateToAppStore: [] } });

exports.AppRate = AppRate;
