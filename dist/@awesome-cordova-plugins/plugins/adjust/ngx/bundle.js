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

var AdjustEvent = /** @class */ (function () {
    function AdjustEvent(eventToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.eventToken = eventToken;
    }
    AdjustEvent.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustEvent.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustEvent.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustEvent.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
    };
    AdjustEvent.prototype.setCallbackId = function (callbackId) {
        this.callbackId = callbackId;
    };
    AdjustEvent.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
    };
    AdjustEvent.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    AdjustEvent.prototype.setPurchaseToken = function (purchaseToken) {
        this.purchaseToken = purchaseToken;
    };
    return AdjustEvent;
}());
var AdjustConfig = /** @class */ (function () {
    function AdjustConfig(appToken, environment) {
        this.delayStart = 0.0;
        this.logLevel = null;
        this.defaultTracker = null;
        this.urlStrategy = null;
        this.externalDeviceId = null;
        this.sendInBackground = null;
        this.shouldLaunchDeeplink = null;
        this.eventBufferingEnabled = null;
        this.userAgent = null;
        this.isDeviceKnown = null;
        this.needsCost = null;
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.processName = null; // Android only
        this.preinstallTrackingEnabled = null; // Android only
        this.preinstallFilePath = null; // Android only
        this.fbAppId = null; // Android only
        this.oaidReadingEnabled = null; // Android only
        this.allowiAdInfoReading = null; // iOS only
        this.allowIdfaReading = null; // iOS only
        this.allowAdServicesInfoReading = null; // iOS only
        this.coppaCompliantEnabled = null;
        this.readDeviceInfoOnceEnabled = null;
        this.playStoreKidsAppEnabled = null; // Android only
        this.linkMeEnabled = null; // iOS only
        this.finalAndroidAttributionEnabled = null; // Android only
        this.attConsentWaitingInterval = null; // iOS only
        this.attributionCallback = null;
        this.eventTrackingSucceededCallback = null;
        this.eventTrackingFailedCallback = null;
        this.sessionTrackingSucceededCallback = null;
        this.sessionTrackingFailedCallback = null;
        this.deferredDeeplinkCallback = null;
        this.conversionValueUpdatedCallback = null;
        this.skad4ConversionValueUpdatedCallback = null;
        this.appToken = appToken;
        this.environment = environment;
    }
    AdjustConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    AdjustConfig.prototype.setDelayStart = function (delayStart) {
        this.delayStart = delayStart;
    };
    AdjustConfig.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    AdjustConfig.prototype.setDefaultTracker = function (defaultTracker) {
        this.defaultTracker = defaultTracker;
    };
    AdjustConfig.prototype.setExternalDeviceId = function (externalDeviceId) {
        this.externalDeviceId = externalDeviceId;
    };
    AdjustConfig.prototype.setUrlStrategy = function (urlStrategy) {
        this.urlStrategy = urlStrategy;
    };
    AdjustConfig.prototype.setSendInBackground = function (sendInBackground) {
        this.sendInBackground = sendInBackground;
    };
    AdjustConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    AdjustConfig.prototype.setEventBufferingEnabled = function (eventBufferingEnabled) {
        this.eventBufferingEnabled = eventBufferingEnabled;
    };
    AdjustConfig.prototype.setCoppaCompliantEnabled = function (coppaCompliantEnabled) {
        this.coppaCompliantEnabled = coppaCompliantEnabled;
    };
    AdjustConfig.prototype.setReadDeviceInfoOnceEnabled = function (readDeviceInfoOnceEnabled) {
        this.readDeviceInfoOnceEnabled = readDeviceInfoOnceEnabled;
    };
    AdjustConfig.prototype.setPlayStoreKidsAppEnabled = function (playStoreKidsAppEnabled) {
        this.playStoreKidsAppEnabled = playStoreKidsAppEnabled;
    };
    AdjustConfig.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    AdjustConfig.prototype.setDeviceKnown = function (isDeviceKnown) {
        this.isDeviceKnown = isDeviceKnown;
    };
    AdjustConfig.prototype.setNeedsCost = function (needsCost) {
        this.needsCost = needsCost;
    };
    AdjustConfig.prototype.setProcessName = function (processName) {
        this.processName = processName;
    };
    AdjustConfig.prototype.setPreinstallTrackingEnabled = function (preinstallTrackingEnabled) {
        this.preinstallTrackingEnabled = preinstallTrackingEnabled;
    };
    AdjustConfig.prototype.setPreinstallFilePath = function (preinstallFilePath) {
        this.preinstallFilePath = preinstallFilePath;
    };
    AdjustConfig.prototype.setFbAppId = function (fbAppId) {
        this.fbAppId = fbAppId;
    };
    AdjustConfig.prototype.setOaidReadingEnabled = function (enableOaidReading) {
        this.oaidReadingEnabled = enableOaidReading;
    };
    AdjustConfig.prototype.setAllowiAdInfoReading = function (allowiAdInfoReading) {
        this.allowiAdInfoReading = allowiAdInfoReading;
    };
    AdjustConfig.prototype.setAllowIdfaReading = function (allowIdfaReading) {
        this.allowIdfaReading = allowIdfaReading;
    };
    AdjustConfig.prototype.setAllowAdServicesInfoReading = function (allowAdServicesInfoReading) {
        this.allowAdServicesInfoReading = allowAdServicesInfoReading;
    };
    AdjustConfig.prototype.setLinkMeEnabled = function (linkMeEnabled) {
        this.linkMeEnabled = linkMeEnabled;
    };
    AdjustConfig.prototype.setFinalAndroidAttributionEnabled = function (finalAndroidAttributionEnabled) {
        this.finalAndroidAttributionEnabled = finalAndroidAttributionEnabled;
    };
    AdjustConfig.prototype.setAttConsentWaitingInterval = function (attConsentWaitingInterval) {
        this.attConsentWaitingInterval = attConsentWaitingInterval;
    };
    AdjustConfig.prototype.setAttributionCallbackListener = function (attributionCallback) {
        this.attributionCallback = attributionCallback;
    };
    AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function (eventTrackingSucceededCallback) {
        this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function (eventTrackingFailedCallback) {
        this.eventTrackingFailedCallback = eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function (sessionTrackingSucceededCallback) {
        this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function (sessionTrackingFailedCallback) {
        this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function (deferredDeeplinkCallback) {
        this.deferredDeeplinkCallback = deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.setConversionValueUpdatedCallbackListener = function (conversionValueUpdatedCallback) {
        this.conversionValueUpdatedCallback = conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.setSkad4ConversionValueUpdatedCallbackListener = function (skad4ConversionValueUpdatedCallback) {
        this.skad4ConversionValueUpdatedCallback = skad4ConversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.getAttributionCallback = function () {
        return this.attributionCallback;
    };
    AdjustConfig.prototype.getEventTrackingSucceededCallback = function () {
        return this.eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getEventTrackingFailedCallback = function () {
        return this.eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.getSessionTrackingSucceededCallback = function () {
        return this.sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getSessionTrackingFailedCallback = function () {
        return this.sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.getDeferredDeeplinkCallback = function () {
        return this.deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.getConversionValueUpdatedCallback = function () {
        return this.conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.getSkad4ConversionValueUpdatedCallback = function () {
        return this.skad4ConversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.hasAttributionListener = function () {
        return this.attributionCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingSucceededListener = function () {
        return this.eventTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingFailedListener = function () {
        return this.eventTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingSucceededListener = function () {
        return this.sessionTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingFailedListener = function () {
        return this.sessionTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasDeferredDeeplinkCallbackListener = function () {
        return this.deferredDeeplinkCallback !== null;
    };
    AdjustConfig.prototype.hasConversionValueUpdatedCallbackListener = function () {
        return this.conversionValueUpdatedCallback !== null;
    };
    AdjustConfig.prototype.hasSkad4ConversionValueUpdatedCallbackListener = function () {
        return this.skad4ConversionValueUpdatedCallback !== null;
    };
    return AdjustConfig;
}());
var AdjustAppStoreSubscription = /** @class */ (function () {
    function AdjustAppStoreSubscription(price, currency, transactionId, receipt) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.transactionId = transactionId;
        this.receipt = receipt;
    }
    AdjustAppStoreSubscription.prototype.setTransactionDate = function (transactionDate) {
        this.transactionDate = transactionDate;
    };
    AdjustAppStoreSubscription.prototype.setSalesRegion = function (salesRegion) {
        this.salesRegion = salesRegion;
    };
    AdjustAppStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAppStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustAppStoreSubscription;
}());
var AdjustPlayStoreSubscription = /** @class */ (function () {
    function AdjustPlayStoreSubscription(price, currency, sku, orderId, signature, purchaseToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.sku = sku;
        this.orderId = orderId;
        this.signature = signature;
        this.purchaseToken = purchaseToken;
    }
    AdjustPlayStoreSubscription.prototype.setPurchaseTime = function (purchaseTime) {
        this.purchaseTime = purchaseTime;
    };
    AdjustPlayStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustPlayStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustPlayStoreSubscription;
}());
var AdjustThirdPartySharing = /** @class */ (function () {
    function AdjustThirdPartySharing(isEnabled) {
        this.granularOptions = [];
        this.partnerSharingSettings = [];
        this.isEnabled = isEnabled;
    }
    AdjustThirdPartySharing.prototype.addGranularOption = function (partnerName, key, value) {
        this.granularOptions.push(partnerName);
        this.granularOptions.push(key);
        this.granularOptions.push(value);
    };
    AdjustThirdPartySharing.prototype.addPartnerSharingSetting = function (partnerName, key, value) {
        this.partnerSharingSettings.push(partnerName);
        this.partnerSharingSettings.push(key);
        this.partnerSharingSettings.push(value);
    };
    return AdjustThirdPartySharing;
}());
var AdjustAdRevenue = /** @class */ (function () {
    function AdjustAdRevenue(source) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.source = source;
    }
    AdjustAdRevenue.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustAdRevenue.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAdRevenue.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustAdRevenue.prototype.setAdImpressionsCount = function (adImpressionsCount) {
        this.adImpressionsCount = adImpressionsCount;
    };
    AdjustAdRevenue.prototype.setAdRevenueNetwork = function (adRevenueNetwork) {
        this.adRevenueNetwork = adRevenueNetwork;
    };
    AdjustAdRevenue.prototype.setAdRevenueUnit = function (adRevenueUnit) {
        this.adRevenueUnit = adRevenueUnit;
    };
    AdjustAdRevenue.prototype.setAdRevenuePlacement = function (adRevenuePlacement) {
        this.adRevenuePlacement = adRevenuePlacement;
    };
    return AdjustAdRevenue;
}());
var AdjustAppStorePurchase = /** @class */ (function () {
    function AdjustAppStorePurchase(receipt, productId, transactionId) {
        this.receipt = receipt;
        this.productId = productId;
        this.transactionId = transactionId;
    }
    return AdjustAppStorePurchase;
}());
var AdjustPlayStorePurchase = /** @class */ (function () {
    function AdjustPlayStorePurchase(productId, purchaseToken) {
        this.productId = productId;
        this.purchaseToken = purchaseToken;
    }
    return AdjustPlayStorePurchase;
}());
exports.AdjustEnvironment = void 0;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(exports.AdjustEnvironment || (exports.AdjustEnvironment = {}));
exports.AdjustLogLevel = void 0;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(exports.AdjustLogLevel || (exports.AdjustLogLevel = {}));
exports.AdjustUrlStrategy = void 0;
(function (AdjustUrlStrategy) {
    AdjustUrlStrategy["India"] = "india";
    AdjustUrlStrategy["China"] = "china";
    AdjustUrlStrategy["Cn"] = "cn";
    AdjustUrlStrategy["CnOnly"] = "cn-only";
    AdjustUrlStrategy["DataResidencyEU"] = "data-residency-eu";
    AdjustUrlStrategy["DataResidencyTR"] = "data-residency-tr";
    AdjustUrlStrategy["DataResidencyUS"] = "data-residency-us";
})(exports.AdjustUrlStrategy || (exports.AdjustUrlStrategy = {}));
exports.AdjustAdRevenueSource = void 0;
(function (AdjustAdRevenueSource) {
    AdjustAdRevenueSource["AdRevenueSourceAppLovinMAX"] = "applovin_max_sdk";
    AdjustAdRevenueSource["AdRevenueSourceMopub"] = "mopub";
    AdjustAdRevenueSource["AdRevenueSourceAdMob"] = "admob_sdk";
    AdjustAdRevenueSource["AdRevenueSourceIronSource"] = "ironsource_sdk";
    AdjustAdRevenueSource["AdRevenueSourceAdMost"] = "admost_sdk";
    AdjustAdRevenueSource["AdRevenueSourceUnity"] = "unity_sdk";
    AdjustAdRevenueSource["AdRevenueSourceHeliumChartboost"] = "helium_chartboost_sdk";
    AdjustAdRevenueSource["AdRevenueSourcePublisher"] = "publisher_sdk";
    AdjustAdRevenueSource["AdRevenueSourceTopOn"] = "topon_sdk";
    AdjustAdRevenueSource["AdRevenueSourceAdx"] = "adx_sdk";
})(exports.AdjustAdRevenueSource || (exports.AdjustAdRevenueSource = {}));
var Adjust = /** @class */ (function (_super) {
    tslib.__extends(Adjust, _super);
    function Adjust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adjust.prototype.create = function (config) { return core.cordova(this, "create", { "sync": true }, arguments); };
    Adjust.prototype.trackEvent = function (event) { return core.cordova(this, "trackEvent", { "sync": true }, arguments); };
    Adjust.prototype.trackAppStoreSubscription = function (subscription) { return core.cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackPlayStoreSubscription = function (subscription) { return core.cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackThirdPartySharing = function (thirdPartySharing) { return core.cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return core.cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    Adjust.prototype.trackMeasurementConsent = function (measurementConsent) { return core.cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    Adjust.prototype.setOfflineMode = function (enabled) { return core.cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    Adjust.prototype.appWillOpenUrl = function (url) { return core.cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    Adjust.prototype.setEnabled = function (enabled) { return core.cordova(this, "setEnabled", { "sync": true }, arguments); };
    Adjust.prototype.setPushToken = function (pushToken) { return core.cordova(this, "setPushToken", { "sync": true }, arguments); };
    Adjust.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    Adjust.prototype.gdprForgetMe = function () { return core.cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    Adjust.prototype.disableThirdPartySharing = function () { return core.cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.getGoogleAdId = function () { return core.cordova(this, "getGoogleAdId", {}, arguments); };
    Adjust.prototype.getAmazonAdId = function () { return core.cordova(this, "getAmazonAdId", {}, arguments); };
    Adjust.prototype.getIdfa = function () { return core.cordova(this, "getIdfa", {}, arguments); };
    Adjust.prototype.getAdid = function () { return core.cordova(this, "getAdid", {}, arguments); };
    Adjust.prototype.checkForNewAttStatus = function () { return core.cordova(this, "checkForNewAttStatus", { "sync": true }, arguments); };
    Adjust.prototype.getAttribution = function () { return core.cordova(this, "getAttribution", {}, arguments); };
    Adjust.prototype.getSdkVersion = function () { return core.cordova(this, "getSdkVersion", {}, arguments); };
    Adjust.prototype.addSessionCallbackParameter = function (key, value) { return core.cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionCallbackParameter = function (key) { return core.cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionCallbackParameters = function () { return core.cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    Adjust.prototype.addSessionPartnerParameter = function (key, value) { return core.cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionPartnerParameter = function (key) { return core.cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionPartnerParameters = function () { return core.cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    Adjust.prototype.sendFirstPackages = function () { return core.cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    Adjust.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return core.cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    Adjust.prototype.updateConversionValue = function (conversionValue) { return core.cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    Adjust.prototype.getAppTrackingAuthorizationStatus = function () { return core.cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    Adjust.prototype.getLastDeeplink = function () { return core.cordova(this, "getLastDeeplink", {}, arguments); };
    Adjust.prototype.verifyAppStorePurchase = function (purchase) { return core.cordova(this, "verifyAppStorePurchase", {}, arguments); };
    Adjust.prototype.verifyPlayStorePurchase = function (purchase) { return core.cordova(this, "verifyPlayStorePurchase", {}, arguments); };
    Adjust.prototype.processDeeplink = function (deeplink) { return core.cordova(this, "processDeeplink", {}, arguments); };
    Adjust.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Adjust, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Adjust.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Adjust });
    Adjust.pluginName = "Adjust";
    Adjust.plugin = "com.adjust.sdk";
    Adjust.pluginRef = "Adjust";
    Adjust.repo = "https://github.com/adjust/cordova_sdk";
    Adjust.platforms = ["Android", "iOS"];
    Adjust = tslib.__decorate([], Adjust);
    return Adjust;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Adjust, decorators: [{
            type: i0.Injectable
        }], propDecorators: { create: [], trackEvent: [], trackAppStoreSubscription: [], trackPlayStoreSubscription: [], trackThirdPartySharing: [], trackAdRevenue: [], trackMeasurementConsent: [], setOfflineMode: [], appWillOpenUrl: [], setEnabled: [], setPushToken: [], isEnabled: [], gdprForgetMe: [], disableThirdPartySharing: [], getGoogleAdId: [], getAmazonAdId: [], getIdfa: [], getAdid: [], checkForNewAttStatus: [], getAttribution: [], getSdkVersion: [], addSessionCallbackParameter: [], removeSessionCallbackParameter: [], resetSessionCallbackParameters: [], addSessionPartnerParameter: [], removeSessionPartnerParameter: [], resetSessionPartnerParameters: [], sendFirstPackages: [], requestTrackingAuthorizationWithCompletionHandler: [], updateConversionValue: [], getAppTrackingAuthorizationStatus: [], getLastDeeplink: [], verifyAppStorePurchase: [], verifyPlayStorePurchase: [], processDeeplink: [] } });

exports.Adjust = Adjust;
exports.AdjustAdRevenue = AdjustAdRevenue;
exports.AdjustAppStorePurchase = AdjustAppStorePurchase;
exports.AdjustAppStoreSubscription = AdjustAppStoreSubscription;
exports.AdjustConfig = AdjustConfig;
exports.AdjustEvent = AdjustEvent;
exports.AdjustPlayStorePurchase = AdjustPlayStorePurchase;
exports.AdjustPlayStoreSubscription = AdjustPlayStoreSubscription;
exports.AdjustThirdPartySharing = AdjustThirdPartySharing;
