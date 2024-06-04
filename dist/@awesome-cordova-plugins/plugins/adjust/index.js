var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
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
export { AdjustEvent };
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
export { AdjustConfig };
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
export { AdjustAppStoreSubscription };
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
export { AdjustPlayStoreSubscription };
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
export { AdjustThirdPartySharing };
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
export { AdjustAdRevenue };
var AdjustAppStorePurchase = /** @class */ (function () {
    function AdjustAppStorePurchase(receipt, productId, transactionId) {
        this.receipt = receipt;
        this.productId = productId;
        this.transactionId = transactionId;
    }
    return AdjustAppStorePurchase;
}());
export { AdjustAppStorePurchase };
var AdjustPlayStorePurchase = /** @class */ (function () {
    function AdjustPlayStorePurchase(productId, purchaseToken) {
        this.productId = productId;
        this.purchaseToken = purchaseToken;
    }
    return AdjustPlayStorePurchase;
}());
export { AdjustPlayStorePurchase };
export var AdjustEnvironment;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(AdjustEnvironment || (AdjustEnvironment = {}));
export var AdjustLogLevel;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(AdjustLogLevel || (AdjustLogLevel = {}));
export var AdjustUrlStrategy;
(function (AdjustUrlStrategy) {
    AdjustUrlStrategy["India"] = "india";
    AdjustUrlStrategy["China"] = "china";
    AdjustUrlStrategy["Cn"] = "cn";
    AdjustUrlStrategy["CnOnly"] = "cn-only";
    AdjustUrlStrategy["DataResidencyEU"] = "data-residency-eu";
    AdjustUrlStrategy["DataResidencyTR"] = "data-residency-tr";
    AdjustUrlStrategy["DataResidencyUS"] = "data-residency-us";
})(AdjustUrlStrategy || (AdjustUrlStrategy = {}));
export var AdjustAdRevenueSource;
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
})(AdjustAdRevenueSource || (AdjustAdRevenueSource = {}));
var AdjustOriginal = /** @class */ (function (_super) {
    __extends(AdjustOriginal, _super);
    function AdjustOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdjustOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    AdjustOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    AdjustOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AdjustOriginal.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    AdjustOriginal.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    AdjustOriginal.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    AdjustOriginal.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    AdjustOriginal.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    AdjustOriginal.prototype.checkForNewAttStatus = function () { return cordova(this, "checkForNewAttStatus", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    AdjustOriginal.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    AdjustOriginal.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    AdjustOriginal.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    AdjustOriginal.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    AdjustOriginal.prototype.getLastDeeplink = function () { return cordova(this, "getLastDeeplink", {}, arguments); };
    AdjustOriginal.prototype.verifyAppStorePurchase = function (purchase) { return cordova(this, "verifyAppStorePurchase", {}, arguments); };
    AdjustOriginal.prototype.verifyPlayStorePurchase = function (purchase) { return cordova(this, "verifyPlayStorePurchase", {}, arguments); };
    AdjustOriginal.prototype.processDeeplink = function (deeplink) { return cordova(this, "processDeeplink", {}, arguments); };
    AdjustOriginal.pluginName = "Adjust";
    AdjustOriginal.plugin = "com.adjust.sdk";
    AdjustOriginal.pluginRef = "Adjust";
    AdjustOriginal.repo = "https://github.com/adjust/cordova_sdk";
    AdjustOriginal.platforms = ["Android", "iOS"];
    return AdjustOriginal;
}(AwesomeCordovaNativePlugin));
var Adjust = new AdjustOriginal();
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRqdXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBYzFGLHFCQUFZLFVBQWtCO1FBSHRCLHVCQUFrQixHQUFhLEVBQUUsQ0FBQztRQUNsQyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFHdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxPQUFlLEVBQUUsUUFBZ0I7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELDBDQUFvQixHQUFwQixVQUFxQixHQUFXLEVBQUUsS0FBYTtRQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHlDQUFtQixHQUFuQixVQUFvQixHQUFXLEVBQUUsS0FBYTtRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHNDQUFnQixHQUFoQixVQUFpQixhQUFxQjtRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENB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LEdBQVcsRUFBRSxLQUFhO0lBUXRELCtDQUE4QixhQUFDLEdBQVc7SUFNMUMsK0NBQThCO0lBUzlCLDJDQUEwQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBUXJELDhDQUE2QixhQUFDLEdBQVc7SUFNekMsOENBQTZCO0lBTTdCLGtDQUFpQjtJQVNqQixrRUFBaUQ7SUFVakQsc0NBQXFCLGFBQUMsZUFBdUI7SUFRN0Msa0RBQWlDO0lBVWpDLGdDQUFlO0lBV2YsdUNBQXNCLGFBQUMsUUFBZ0M7SUFXdkQsd0NBQXVCLGFBQUMsUUFBaUM7SUFXekQsZ0NBQWUsYUFBQyxRQUFnQjs7Ozs7O2lCQXo2QmxDO0VBZ25CNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQWRqdXN0RXZlbnQge1xuICBwcml2YXRlIGV2ZW50VG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSByZWNlaXB0OiBzdHJpbmc7XG4gIHByaXZhdGUgcHJvZHVjdElkOiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhbnNhY3Rpb25JZDogc3RyaW5nO1xuICBwcml2YXRlIHB1cmNoYXNlVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGV2ZW50VG9rZW46IHN0cmluZykge1xuICAgIHRoaXMuZXZlbnRUb2tlbiA9IGV2ZW50VG9rZW47XG4gIH1cblxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldFRyYW5zYWN0aW9uSWQodHJhbnNhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcbiAgfVxuXG4gIHNldENhbGxiYWNrSWQoY2FsbGJhY2tJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jYWxsYmFja0lkID0gY2FsbGJhY2tJZDtcbiAgfVxuXG4gIHNldFJlY2VpcHQocmVjZWlwdDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZWNlaXB0ID0gcmVjZWlwdDtcbiAgfVxuXG4gIHNldFByb2R1Y3RJZChwcm9kdWN0SWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICB9XG5cbiAgc2V0UHVyY2hhc2VUb2tlbihwdXJjaGFzZVRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLnB1cmNoYXNlVG9rZW4gPSBwdXJjaGFzZVRva2VuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RDb25maWcge1xuICBwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XG4gIHByaXZhdGUgZW52aXJvbm1lbnQ6IEFkanVzdEVudmlyb25tZW50O1xuICBwcml2YXRlIHNka1ByZWZpeDogc3RyaW5nO1xuICBwcml2YXRlIGRlbGF5U3RhcnQgPSAwLjA7XG4gIHByaXZhdGUgbG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0VHJhY2tlcjogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSB1cmxTdHJhdGVneTogQWRqdXN0VXJsU3RyYXRlZ3kgPSBudWxsO1xuICBwcml2YXRlIGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgc2VuZEluQmFja2dyb3VuZDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIGV2ZW50QnVmZmVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgdXNlckFnZW50OiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIGlzRGV2aWNlS25vd246IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIG5lZWRzQ29zdDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgc2VjcmV0SWQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzE6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzI6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzM6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgcHJvY2Vzc05hbWU6IHN0cmluZyA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIHByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQ6IGJvb2xlYW4gPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBwcmVpbnN0YWxsRmlsZVBhdGg6IHN0cmluZyA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIGZiQXBwSWQ6IHN0cmluZyA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIG9haWRSZWFkaW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIGFsbG93aUFkSW5mb1JlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuICBwcml2YXRlIGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuICBwcml2YXRlIGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcbiAgcHJpdmF0ZSBjb3BwYUNvbXBsaWFudEVuYWJsZWQ6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHJlYWREZXZpY2VJbmZvT25jZUVuYWJsZWQ6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHBsYXlTdG9yZUtpZHNBcHBFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgbGlua01lRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgZmluYWxBbmRyb2lkQXR0cmlidXRpb25FbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgYXR0Q29uc2VudFdhaXRpbmdJbnRlcnZhbDogbnVtYmVyID0gbnVsbDsgLy8gaU9TIG9ubHlcblxuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudFN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChjb252ZXJzaW9uVmFsdWU6IG51bWJlcikgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgc2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChza2FkNERhdGE6IEFkanVzdFNrYWQ0RGF0YSkgPT4gdm9pZCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXBwVG9rZW46IHN0cmluZywgZW52aXJvbm1lbnQ6IEFkanVzdEVudmlyb25tZW50KSB7XG4gICAgdGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgfVxuXG4gIHNldEFwcFNlY3JldChzZWNyZXRJZDogbnVtYmVyLCBpbmZvMTogbnVtYmVyLCBpbmZvMjogbnVtYmVyLCBpbmZvMzogbnVtYmVyLCBpbmZvNDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWNyZXRJZCA9IHNlY3JldElkO1xuICAgIHRoaXMuaW5mbzEgPSBpbmZvMTtcbiAgICB0aGlzLmluZm8yID0gaW5mbzI7XG4gICAgdGhpcy5pbmZvMyA9IGluZm8zO1xuICAgIHRoaXMuaW5mbzQgPSBpbmZvNDtcbiAgfVxuXG4gIHNldERlbGF5U3RhcnQoZGVsYXlTdGFydDogbnVtYmVyKSB7XG4gICAgdGhpcy5kZWxheVN0YXJ0ID0gZGVsYXlTdGFydDtcbiAgfVxuXG4gIHNldExvZ0xldmVsKGxvZ0xldmVsOiBBZGp1c3RMb2dMZXZlbCkge1xuICAgIHRoaXMubG9nTGV2ZWwgPSBsb2dMZXZlbDtcbiAgfVxuXG4gIHNldERlZmF1bHRUcmFja2VyKGRlZmF1bHRUcmFja2VyOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRUcmFja2VyID0gZGVmYXVsdFRyYWNrZXI7XG4gIH1cblxuICBzZXRFeHRlcm5hbERldmljZUlkKGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZXh0ZXJuYWxEZXZpY2VJZCA9IGV4dGVybmFsRGV2aWNlSWQ7XG4gIH1cblxuICBzZXRVcmxTdHJhdGVneSh1cmxTdHJhdGVneTogQWRqdXN0VXJsU3RyYXRlZ3kpIHtcbiAgICB0aGlzLnVybFN0cmF0ZWd5ID0gdXJsU3RyYXRlZ3k7XG4gIH1cblxuICBzZXRTZW5kSW5CYWNrZ3JvdW5kKHNlbmRJbkJhY2tncm91bmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbmRJbkJhY2tncm91bmQgPSBzZW5kSW5CYWNrZ3JvdW5kO1xuICB9XG5cbiAgc2V0U2hvdWxkTGF1bmNoRGVlcGxpbmsoc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XG4gIH1cblxuICBzZXRFdmVudEJ1ZmZlcmluZ0VuYWJsZWQoZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5ldmVudEJ1ZmZlcmluZ0VuYWJsZWQgPSBldmVudEJ1ZmZlcmluZ0VuYWJsZWQ7XG4gIH1cblxuICBzZXRDb3BwYUNvbXBsaWFudEVuYWJsZWQoY29wcGFDb21wbGlhbnRFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb3BwYUNvbXBsaWFudEVuYWJsZWQgPSBjb3BwYUNvbXBsaWFudEVuYWJsZWQ7XG4gIH1cblxuICBzZXRSZWFkRGV2aWNlSW5mb09uY2VFbmFibGVkKHJlYWREZXZpY2VJbmZvT25jZUVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlYWREZXZpY2VJbmZvT25jZUVuYWJsZWQgPSByZWFkRGV2aWNlSW5mb09uY2VFbmFibGVkO1xuICB9XG5cbiAgc2V0UGxheVN0b3JlS2lkc0FwcEVuYWJsZWQocGxheVN0b3JlS2lkc0FwcEVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnBsYXlTdG9yZUtpZHNBcHBFbmFibGVkID0gcGxheVN0b3JlS2lkc0FwcEVuYWJsZWQ7XG4gIH1cblxuICBzZXRVc2VyQWdlbnQodXNlckFnZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVzZXJBZ2VudCA9IHVzZXJBZ2VudDtcbiAgfVxuXG4gIHNldERldmljZUtub3duKGlzRGV2aWNlS25vd246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRGV2aWNlS25vd24gPSBpc0RldmljZUtub3duO1xuICB9XG5cbiAgc2V0TmVlZHNDb3N0KG5lZWRzQ29zdDogYm9vbGVhbikge1xuICAgIHRoaXMubmVlZHNDb3N0ID0gbmVlZHNDb3N0O1xuICB9XG5cbiAgc2V0UHJvY2Vzc05hbWUocHJvY2Vzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMucHJvY2Vzc05hbWUgPSBwcm9jZXNzTmFtZTtcbiAgfVxuXG4gIHNldFByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQocHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMucHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZCA9IHByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQ7XG4gIH1cblxuICBzZXRQcmVpbnN0YWxsRmlsZVBhdGgocHJlaW5zdGFsbEZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByZWluc3RhbGxGaWxlUGF0aCA9IHByZWluc3RhbGxGaWxlUGF0aDtcbiAgfVxuXG4gIHNldEZiQXBwSWQoZmJBcHBJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5mYkFwcElkID0gZmJBcHBJZDtcbiAgfVxuXG4gIHNldE9haWRSZWFkaW5nRW5hYmxlZChlbmFibGVPYWlkUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMub2FpZFJlYWRpbmdFbmFibGVkID0gZW5hYmxlT2FpZFJlYWRpbmc7XG4gIH1cblxuICBzZXRBbGxvd2lBZEluZm9SZWFkaW5nKGFsbG93aUFkSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93aUFkSW5mb1JlYWRpbmcgPSBhbGxvd2lBZEluZm9SZWFkaW5nO1xuICB9XG5cbiAgc2V0QWxsb3dJZGZhUmVhZGluZyhhbGxvd0lkZmFSZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxvd0lkZmFSZWFkaW5nID0gYWxsb3dJZGZhUmVhZGluZztcbiAgfVxuXG4gIHNldEFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nKGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZyA9IGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nO1xuICB9XG5cbiAgc2V0TGlua01lRW5hYmxlZChsaW5rTWVFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5saW5rTWVFbmFibGVkID0gbGlua01lRW5hYmxlZDtcbiAgfVxuXG4gIHNldEZpbmFsQW5kcm9pZEF0dHJpYnV0aW9uRW5hYmxlZChmaW5hbEFuZHJvaWRBdHRyaWJ1dGlvbkVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbmFsQW5kcm9pZEF0dHJpYnV0aW9uRW5hYmxlZCA9IGZpbmFsQW5kcm9pZEF0dHJpYnV0aW9uRW5hYmxlZDtcbiAgfVxuXG4gIHNldEF0dENvbnNlbnRXYWl0aW5nSW50ZXJ2YWwoYXR0Q29uc2VudFdhaXRpbmdJbnRlcnZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5hdHRDb25zZW50V2FpdGluZ0ludGVydmFsID0gYXR0Q29uc2VudFdhaXRpbmdJbnRlcnZhbDtcbiAgfVxuXG4gIHNldEF0dHJpYnV0aW9uQ2FsbGJhY2tMaXN0ZW5lcihhdHRyaWJ1dGlvbkNhbGxiYWNrOiAoYXR0cmlidXRpb246IEFkanVzdEF0dHJpYnV0aW9uKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGlvbkNhbGxiYWNrID0gYXR0cmlidXRpb25DYWxsYmFjaztcbiAgfVxuXG4gIHNldEV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFja0xpc3RlbmVyKGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudFN1Y2Nlc3MpID0+IHZvaWQpIHtcbiAgICB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayA9IGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFja0xpc3RlbmVyKGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQpIHtcbiAgICB0aGlzLmV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjayA9IGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrTGlzdGVuZXIoXG4gICAgc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uU3VjY2VzcykgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrID0gc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFja0xpc3RlbmVyKHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQpIHtcbiAgICB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrID0gc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXREZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcihkZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s6ICh1cmk6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrID0gZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrO1xuICB9XG5cbiAgc2V0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrTGlzdGVuZXIoY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrOiAoY29udmVyc2lvblZhbHVlOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjayA9IGNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldFNrYWQ0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrTGlzdGVuZXIoc2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChza2FkNERhdGE6IEFkanVzdFNrYWQ0RGF0YSkgPT4gdm9pZCkge1xuICAgIHRoaXMuc2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2sgPSBza2FkNENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXR0cmlidXRpb25DYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFdmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFdmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmVycmVkRGVlcGxpbmtDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldFNrYWQ0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNrYWQ0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNBdHRyaWJ1dGlvbkxpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0V2ZW50VHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0V2ZW50VHJhY2tpbmdGYWlsZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc1Nlc3Npb25UcmFja2luZ1N1Y2NlZWRlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdGYWlsZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc1NrYWQ0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uIHtcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhbnNhY3Rpb25JZDogc3RyaW5nO1xuICBwcml2YXRlIHJlY2VpcHQ6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbkRhdGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzYWxlc1JlZ2lvbjogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmcsIHJlY2VpcHQ6IHN0cmluZykge1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcbiAgICB0aGlzLnJlY2VpcHQgPSByZWNlaXB0O1xuICB9XG5cbiAgc2V0VHJhbnNhY3Rpb25EYXRlKHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2FjdGlvbkRhdGUgPSB0cmFuc2FjdGlvbkRhdGU7XG4gIH1cblxuICBzZXRTYWxlc1JlZ2lvbihzYWxlc1JlZ2lvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zYWxlc1JlZ2lvbiA9IHNhbGVzUmVnaW9uO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9uIHtcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgc2t1OiBzdHJpbmc7XG4gIHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIHNpZ25hdHVyZTogc3RyaW5nO1xuICBwcml2YXRlIHB1cmNoYXNlVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBwdXJjaGFzZVRpbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgc2t1OiBzdHJpbmcsIG9yZGVySWQ6IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcsIHB1cmNoYXNlVG9rZW46IHN0cmluZykge1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5za3UgPSBza3U7XG4gICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLnB1cmNoYXNlVG9rZW4gPSBwdXJjaGFzZVRva2VuO1xuICB9XG5cbiAgc2V0UHVyY2hhc2VUaW1lKHB1cmNoYXNlVGltZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wdXJjaGFzZVRpbWUgPSBwdXJjaGFzZVRpbWU7XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RUaGlyZFBhcnR5U2hhcmluZyB7XG4gIHByaXZhdGUgaXNFbmFibGVkOiBib29sZWFuO1xuICBwcml2YXRlIGdyYW51bGFyT3B0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyU2hhcmluZ1NldHRpbmdzOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICB9XG5cbiAgYWRkR3JhbnVsYXJPcHRpb24ocGFydG5lck5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKHBhcnRuZXJOYW1lKTtcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKGtleSk7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyU2hhcmluZ1NldHRpbmcocGFydG5lck5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyU2hhcmluZ1NldHRpbmdzLnB1c2gocGFydG5lck5hbWUpO1xuICAgIHRoaXMucGFydG5lclNoYXJpbmdTZXR0aW5ncy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyU2hhcmluZ1NldHRpbmdzLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RBZFJldmVudWUge1xuICBwcml2YXRlIHNvdXJjZTogc3RyaW5nO1xuICBwcml2YXRlIHJldmVudWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIGFkSW1wcmVzc2lvbnNDb3VudDogbnVtYmVyO1xuICBwcml2YXRlIGFkUmV2ZW51ZU5ldHdvcms6IHN0cmluZztcbiAgcHJpdmF0ZSBhZFJldmVudWVVbml0OiBzdHJpbmc7XG4gIHByaXZhdGUgYWRSZXZlbnVlUGxhY2VtZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIH1cblxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldEFkSW1wcmVzc2lvbnNDb3VudChhZEltcHJlc3Npb25zQ291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuYWRJbXByZXNzaW9uc0NvdW50ID0gYWRJbXByZXNzaW9uc0NvdW50O1xuICB9XG5cbiAgc2V0QWRSZXZlbnVlTmV0d29yayhhZFJldmVudWVOZXR3b3JrOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkUmV2ZW51ZU5ldHdvcmsgPSBhZFJldmVudWVOZXR3b3JrO1xuICB9XG5cbiAgc2V0QWRSZXZlbnVlVW5pdChhZFJldmVudWVVbml0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkUmV2ZW51ZVVuaXQgPSBhZFJldmVudWVVbml0O1xuICB9XG5cbiAgc2V0QWRSZXZlbnVlUGxhY2VtZW50KGFkUmV2ZW51ZVBsYWNlbWVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZFJldmVudWVQbGFjZW1lbnQgPSBhZFJldmVudWVQbGFjZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdEFwcFN0b3JlUHVyY2hhc2Uge1xuICBwcml2YXRlIHJlY2VpcHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBwcm9kdWN0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocmVjZWlwdDogc3RyaW5nLCBwcm9kdWN0SWQ6IHN0cmluZywgdHJhbnNhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZWNlaXB0ID0gcmVjZWlwdDtcbiAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSB0cmFuc2FjdGlvbklkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RQbGF5U3RvcmVQdXJjaGFzZSB7XG4gIHByaXZhdGUgcHJvZHVjdElkOiBzdHJpbmc7XG4gIHByaXZhdGUgcHVyY2hhc2VUb2tlbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb2R1Y3RJZDogc3RyaW5nLCBwdXJjaGFzZVRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICB0aGlzLnB1cmNoYXNlVG9rZW4gPSBwdXJjaGFzZVRva2VuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0QXR0cmlidXRpb24ge1xuICB0cmFja2VyVG9rZW46IHN0cmluZztcbiAgdHJhY2tlck5hbWU6IHN0cmluZztcbiAgbmV0d29yazogc3RyaW5nO1xuICBjYW1wYWlnbjogc3RyaW5nO1xuICBhZGdyb3VwOiBzdHJpbmc7XG4gIGNyZWF0aXZlOiBzdHJpbmc7XG4gIGNsaWNrTGFiZWw6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBjb3N0VHlwZTogc3RyaW5nO1xuICBjb3N0QW1vdW50OiBzdHJpbmc7XG4gIGNvc3RDdXJyZW5jeTogc3RyaW5nO1xuICBmYkluc3RhbGxSZWZlcnJlcjogc3RyaW5nOyAvLyBBbmRyb2lkIG9ubHlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTZXNzaW9uU3VjY2VzcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0U2Vzc2lvbkZhaWx1cmUge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0RXZlbnRTdWNjZXNzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBldmVudFRva2VuOiBzdHJpbmc7XG4gIGNhbGxiYWNrSWQ6IHN0cmluZztcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0RXZlbnRGYWlsdXJlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBldmVudFRva2VuOiBzdHJpbmc7XG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcbiAgY2FsbGJhY2tJZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTa2FkNERhdGEge1xuICBmaW5lVmFsdWU6IG51bWJlcjtcbiAgY29hcnNlVmFsdWU6IHN0cmluZztcbiAgbG9ja1dpbmRvdzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RQdXJjaGFzZVZlcmlmaWNhdGlvbkluZm8ge1xuICB2ZXJpZmljYXRpb25TdGF0dXM6IHN0cmluZztcbiAgY29kZTogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdEVudmlyb25tZW50IHtcbiAgU2FuZGJveCA9ICdzYW5kYm94JyxcbiAgUHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0TG9nTGV2ZWwge1xuICBWZXJib3NlID0gJ1ZFUkJPU0UnLFxuICBEZWJ1ZyA9ICdERUJVRycsXG4gIEluZm8gPSAnSU5GTycsXG4gIFdhcm4gPSAnV0FSTicsXG4gIEVycm9yID0gJ0VSUk9SJyxcbiAgQXNzZXJ0ID0gJ0FTU0VSVCcsXG4gIFN1cHByZXNzID0gJ1NVUFBSRVNTJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0VXJsU3RyYXRlZ3kge1xuICBJbmRpYSA9ICdpbmRpYScsXG4gIENoaW5hID0gJ2NoaW5hJyxcbiAgQ24gPSAnY24nLFxuICBDbk9ubHkgPSAnY24tb25seScsXG4gIERhdGFSZXNpZGVuY3lFVSA9ICdkYXRhLXJlc2lkZW5jeS1ldScsXG4gIERhdGFSZXNpZGVuY3lUUiA9ICdkYXRhLXJlc2lkZW5jeS10cicsXG4gIERhdGFSZXNpZGVuY3lVUyA9ICdkYXRhLXJlc2lkZW5jeS11cycsXG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdEFkUmV2ZW51ZVNvdXJjZSB7XG4gIEFkUmV2ZW51ZVNvdXJjZUFwcExvdmluTUFYID0gJ2FwcGxvdmluX21heF9zZGsnLFxuICBBZFJldmVudWVTb3VyY2VNb3B1YiA9ICdtb3B1YicsXG4gIEFkUmV2ZW51ZVNvdXJjZUFkTW9iID0gJ2FkbW9iX3NkaycsXG4gIEFkUmV2ZW51ZVNvdXJjZUlyb25Tb3VyY2UgPSAnaXJvbnNvdXJjZV9zZGsnLFxuICBBZFJldmVudWVTb3VyY2VBZE1vc3QgPSBcImFkbW9zdF9zZGtcIixcbiAgQWRSZXZlbnVlU291cmNlVW5pdHkgPSBcInVuaXR5X3Nka1wiLFxuICBBZFJldmVudWVTb3VyY2VIZWxpdW1DaGFydGJvb3N0ID0gXCJoZWxpdW1fY2hhcnRib29zdF9zZGtcIixcbiAgQWRSZXZlbnVlU291cmNlUHVibGlzaGVyID0gXCJwdWJsaXNoZXJfc2RrXCIsXG4gIEFkUmV2ZW51ZVNvdXJjZVRvcE9uID0gXCJ0b3Bvbl9zZGtcIixcbiAgQWRSZXZlbnVlU291cmNlQWR4ID0gXCJhZHhfc2RrXCIsXG59XG5cbi8qKlxuICogQG5hbWUgQWRqdXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgdGhlIElvbmljIENvcmRvdmEgU0RLIG9mIEFkanVzdOKEoi4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgQWRqdXN04oSiIGF0IGFkanVzdC5jb20uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb20uYWRqdXN0LnNka2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBZGp1c3QgQ29yZG92YSBTREtdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGspXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgaW1wb3J0IHsgQWRqdXN0LCBBZGp1c3RDb25maWcsIEFkanVzdEVudmlyb25tZW50IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FkanVzdC9uZ3gnO1xuICpcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkanVzdDogQWRqdXN0KSB7IH1cbiAqXG4gKiAgLi4uXG4gKlxuICogIGNvbnN0IGNvbmZpZyA9IG5ldyBBZGp1c3RDb25maWcoJ0FQUC1UT0tFTi1IRVJFJywgQWRqdXN0RW52aXJvbm1lbnQuU2FuZGJveCk7XG4gKiAgY29uZmlnLmxvZ0xldmVsID0gQWRqdXN0TG9nTGV2ZWwuVmVyYm9zZTtcbiAqICAvLyBTZXQgb3RoZXIgY29uZmlnIHByb3BlcnRpZXMuXG4gKiAgYWRqdXN0LmNyZWF0ZShjb25maWcpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEFkanVzdEF0dHJpYnV0aW9uXG4gKiBBZGp1c3RTZXNzaW9uU3VjY2Vzc1xuICogQWRqdXN0U2Vzc2lvbkZhaWx1cmVcbiAqIEFkanVzdEV2ZW50U3VjY2Vzc1xuICogQWRqdXN0RXZlbnRGYWlsdXJlXG4gKiBBZGp1c3RTa2FkNERhdGFcbiAqIEFkanVzdFB1cmNoYXNlVmVyaWZpY2F0aW9uSW5mb1xuICogQGNsYXNzZXNcbiAqIEFkanVzdEV2ZW50XG4gKiBBZGp1c3RDb25maWdcbiAqIEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uXG4gKiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb25cbiAqIEFkanVzdFRoaXJkUGFydHlTaGFyaW5nXG4gKiBBZGp1c3RBZFJldmVudWVcbiAqIEFkanVzdEFwcFN0b3JlUHVyY2hhc2VcbiAqIEFkanVzdFBsYXlTdG9yZVB1cmNoYXNlXG4gKiBAZW51bXNcbiAqIEFkanVzdEVudmlyb25tZW50XG4gKiBBZGp1c3RMb2dMZXZlbFxuICogQWRqdXN0VXJsU3RyYXRlZ3lcbiAqIEFkanVzdEFkUmV2ZW51ZVNvdXJjZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FkanVzdCcsXG4gIHBsdWdpbjogJ2NvbS5hZGp1c3Quc2RrJyxcbiAgcGx1Z2luUmVmOiAnQWRqdXN0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGsnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRqdXN0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyBBZGp1c3QgU0RLXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0Q29uaWd9IGNvbmZpZyBBZGp1c3QgY29uZmlnIG9iamVjdCB1c2VkIGFzIHN0YXJ0aW5nIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjcmVhdGUoY29uZmlnOiBBZGp1c3RDb25maWcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhbiBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdEV2ZW50fSBldmVudCBBZGp1c3QgZXZlbnQgb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja0V2ZW50KGV2ZW50OiBBZGp1c3RFdmVudCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIEFwcCBTdG9yZSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIEFkanVzdCBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tBcHBTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgUGxheSBTdG9yZSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgUGxheSBTdG9yZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja1BsYXlTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIHRoaXJkIHBhcnR5IHNoYXJpbmcgY2hvaWNlXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmd9IHRoaXJkUGFydHlTaGFyaW5nIEFkanVzdCB0aGlyZCBwYXJ0eSBzaGFyaW5nIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tUaGlyZFBhcnR5U2hhcmluZyh0aGlyZFBhcnR5U2hhcmluZzogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhZCByZXZlbnVlIGRhdGFcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RBZFJldmVudWVTb3VyY2V9IHNvdXJjZSBBZCByZXZlbnVlIHNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZCBBZCByZXZlbnVlIEpTT04gc3RyaW5nIHBheWxvYWRcbiAgICovXG4gIHRyYWNrQWRSZXZlbnVlKHNvdXJjZTogQWRqdXN0QWRSZXZlbnVlU291cmNlLCBwYXlsb2FkOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYWQgcmV2ZW51ZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0QWRSZXZlbnVlfSBhZFJldmVudWUgQWRqdXN0IGFkIHJldmVudWUgb2JqZWN0XG4gICAqL1xuICB0cmFja0FkUmV2ZW51ZShhZFJldmVudWU6IEFkanVzdEFkUmV2ZW51ZSk6IHZvaWQ7XG5cbiAgLy8gQW5kIHR5cGVzY3JpcHQgaGlkZXMgdGhpcywgc28gdGhlIGNsaWVudCB3aWxsIGJlIGFibGUgY2FsbCBvbmx5IG1ldGhvZHMgYWJvdmVcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrQWRSZXZlbnVlKHNvdXJjZU9yQWRSZXZlbnVlOiBhbnksIHBheWxvYWQ/OiBhbnkpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBtZWFzdXJlbWVudCBjb25zZW50IGNob2ljZVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1lYXN1cmVtZW50Q29uc2VudCBzZXQgbWVhc3VyZW1lbnQgY29uc2VudCB0byB0cnVlIG9yIGZhbHNlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tNZWFzdXJlbWVudENvbnNlbnQobWVhc3VyZW1lbnRDb25zZW50OiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBzZXRzIG9mZmxpbmUgbW9kZSBvbiBvciBvZmZcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIHNldCB0byB0cnVlIGZvciBvZmZsaW5lIG1vZGUgb25cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPZmZsaW5lTW9kZShlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBCeSBtYWtpbmcgdGhpcyBjYWxsLCB0aGUgQWRqdXN0IFNESyB3aWxsIHRyeSB0byBmaW5kIGlmIHRoZXJlIGlzIGFueSBuZXcgYXR0cmlidXRpb24gaW5mbyBpbnNpZGUgb2YgdGhlIGRlZXAgbGluayBhbmQgaWYgYW55LCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIEFkanVzdCBiYWNrZW5kLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCBvZiB0aGUgZGVlcGxpbmtcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhcHBXaWxsT3BlblVybCh1cmw6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogWW91IGNhbiBkaXNhYmxlL2VuYWJsZSB0aGUgQWRqdXN0IFNESyBmcm9tIHRyYWNraW5nIGJ5IGludm9raW5nIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBTREtcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvIHNlbmQgdXMgdGhlIHB1c2ggbm90aWZpY2F0aW9uIHRva2VuLCBhZGQgdGhlIGZvbGxvd2luZyBjYWxsIHRvIEFkanVzdCB3aGVuZXZlciB5b3UgZ2V0IHlvdXIgdG9rZW4gaW4gdGhlIGFwcCBvciB3aGVuIGl0IGdldHMgdXBkYXRlZC5cbiAgICogUHVzaCB0b2tlbnMgYXJlIHVzZWQgZm9yIEF1ZGllbmNlIEJ1aWxkZXIgYW5kIGNsaWVudCBjYWxsYmFja3MsIGFuZCB0aGV5IGFyZSByZXF1aXJlZCBmb3IgdGhlIHVwY29taW5nIHVuaW5zdGFsbCB0cmFja2luZyBmZWF0dXJlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHVzaFRva2VuIHB1c2ggdG9rZW4gdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQdXNoVG9rZW4ocHVzaFRva2VuOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBBZGp1c3QgU0RLIGlzIGN1cnJlbnRseSBlbmFibGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBhY2NvcmRhbmNlIHdpdGggYXJ0aWNsZSAxNyBvZiB0aGUgRVUncyBHZW5lcmFsIERhdGEgUHJvdGVjdGlvbiBSZWd1bGF0aW9uIChHRFBSKSwgeW91IGNhbiBub3RpZnkgQWRqdXN0IHdoZW4gYSB1c2VyIGhhcyBleGVyY2lzZWQgdGhlaXIgcmlnaHQgdG8gYmUgZm9yZ290dGVuLlxuICAgKiBDYWxsaW5nIHRoZSBmb2xsb3dpbmcgbWV0aG9kIHdpbGwgaW5zdHJ1Y3QgdGhlIEFkanVzdCBTREsgdG8gY29tbXVuaWNhdGUgdGhlIHVzZXIncyBjaG9pY2UgdG8gYmUgZm9yZ290dGVuIHRvIHRoZSBBZGp1c3QgYmFja2VuZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdkcHJGb3JnZXRNZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gbm93IG5vdGlmeSBBZGp1c3Qgd2hlbiBhIHVzZXIgaGFzIGV4ZXJjaXNlZCB0aGVpciByaWdodCB0byBzdG9wIHNoYXJpbmcgdGhlaXIgZGF0YSB3aXRoIHBhcnRuZXJzIGZvciBtYXJrZXRpbmcgcHVycG9zZXMsIGJ1dCBoYXMgYWxsb3dlZCBpdCB0byBiZSBzaGFyZWQgZm9yIHN0YXRpc3RpY3MgcHVycG9zZXMuIFxuICAgKiBDYWxsaW5nIHRoZSBmb2xsb3dpbmcgbWV0aG9kIHdpbGwgaW5zdHJ1Y3QgdGhlIEFkanVzdCBTREsgdG8gY29tbXVuaWNhdGUgdGhlIHVzZXIncyBjaG9pY2UgdG8gZGlzYWJsZSBkYXRhIHNoYXJpbmcgdG8gdGhlIEFkanVzdCBiYWNrZW5kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzYWJsZVRoaXJkUGFydHlTaGFyaW5nKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRnVuY3Rpb24gdXNlZCB0byBnZXQgR29vZ2xlIEFkSWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBnb29nbGUgQWRJZCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRHb29nbGVBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHlvdSBuZWVkIHRvIG9idGFpbiB0aGUgQW1hem9uIEFkdmVydGlzaW5nIElELCB5b3UgY2FuIG1ha2UgYSBjYWxsIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYW5hemliIGFkdi4gSURcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QW1hem9uQWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBvYnRhaW4gdGhlIElERkEsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIElERkEgc3RyaW5nIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElkZmEoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRm9yIGV2ZXJ5IGRldmljZSB3aXRoIHlvdXIgYXBwIGluc3RhbGxlZCBvbiBpdCwgdGhlIEFkanVzdCBiYWNrZW5kIGdlbmVyYXRlcyBhIHVuaXF1ZSBBZGp1c3QgZGV2aWNlIGlkZW50aWZpZXIgKGFkaWQpLlxuICAgKiBJbiBvcmRlciB0byBvYnRhaW4gdGhpcyBpZGVudGlmaWVyLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhZGlkIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFkaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5zdHJ1Y3QgdG8gQWRqdXN0IFNESyB0byBjaGVjayBjdXJyZW50IHN0YXRlIG9mIGF0dF9zdGF0dXNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjaGVja0Zvck5ld0F0dFN0YXR1cygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIHlvdSB3YW50IHRvIGFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCBhIHVzZXIncyBjdXJyZW50IGF0dHJpYnV0aW9uIHdoZW5ldmVyIHlvdSBuZWVkIGl0LCB5b3UgY2FuIG1ha2UgYSBjYWxsIHRvIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QWRqdXN0QXR0cmlidXRpb24+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIEFkanVzdEF0dHJpYnV0aW9uIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBdHRyaWJ1dGlvbigpOiBQcm9taXNlPEFkanVzdEF0dHJpYnV0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdmVyc2lvbiBvZiB0aGUgU0RLIHVzZWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBzZGsgdmVyc2lvbiBpbmZvcm1hdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTZGtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB1c2VkIHRvIGFkZCBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkU2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIGFsbCBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgc2Vzc2lvbiBjYWxsYmFjayBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc2V0U2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVycygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB1c2VkIHRvIGFkZCBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRTZXNzaW9uUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc3BlY2lmaWMgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVTZXNzaW9uUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgYWxsIGtleXMgYW5kIHZhbHVlcyBmcm9tIHRoZSBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVycyBoYXZlIHRvIGJlIHJlbW92ZWQsIGNhbGwgdGhpcyBtZXRob2RcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZXNldFNlc3Npb25QYXJ0bmVyUGFyYW1ldGVycygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNhbGwgd2lsbCBtYWtlIHRoZSBBZGp1c3QgU0RLIHNlbmQgdGhlIGluaXRpYWwgaW5zdGFsbCBzZXNzaW9uIGFuZCBhbnkgZXZlbnRzIGNyZWF0ZWQsIGlmIHRoZXkgd2VyZSBub3Qgc2VudCBhZnRlciBkZWxheSBzdGFydCB3YXMgc2V0IGFuZCBpdCdzIGRlbGF5IGV4cGlyZWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2VuZEZpcnN0UGFja2FnZXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IEFkanVzdCBTREsgdG8gc2hvdyBwb3AgdXAgZGlhbG9nIGZvciBhc2tpbmcgdXNlcidzIGNvbnNlbnQgdG8gYmUgdHJhY2tlZC5cbiAgICogSW4gb3JkZXIgdG8gZG8gdGhpcywgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdXNlcidzIGNvbnNlbnQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFRyYWNraW5nQXV0aG9yaXphdGlvbldpdGhDb21wbGV0aW9uSGFuZGxlcigpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIHVwZGF0ZSBTS0FkTmV0d29yayBjb252ZXJzaW9uIHZhbHVlIHdpdGggY2FsbGluZyB0aGlzIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY29udmVyc2lvblZhbHVlIGNvbnZlcnNpb24gdmFsdWUgZm9yIHRoZSB1c2VyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXBkYXRlQ29udmVyc2lvblZhbHVlKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUbyBvYnRhaW4gdGhlIGFwcCB0cmFja2luZyBhdXRob3JpemF0aW9uIHN0YXR1cyBpbiBpT1MsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFwcCB0cmFja2luZyBhdXRob3JpemF0aW9uIHN0YXR1c1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBcHBUcmFja2luZ0F1dGhvcml6YXRpb25TdGF0dXMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVG8gb2J0YWluIHRoZSBsYXN0IGRlZXAgbGluayB3aGljaCBoYXMgb3BlbmVkIHlvdXIgaU9TIGFwcCwgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggaU9TIGRlZXAgbGluayBzdHJpbmcgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TGFzdERlZXBsaW5rKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdmVyaWZ5IHRoZSBBcHAgU3RvcmUgcHVyY2hhc2VcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RBcHBTdG9yZVB1cmNoYXNlfSBwdXJjaGFzZSBBZGp1c3QgQXBwIFN0b3JlIHB1cmNoYXNlIG9iamVjdCB0byBiZSB2ZXJpZmllZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBZGp1c3RQdXJjaGFzZVZlcmlmaWNhdGlvbkluZm8+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHB1cmNoYXNlIHZlcmlmaWNhdGlvbiBvdXRjb21lXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcmlmeUFwcFN0b3JlUHVyY2hhc2UocHVyY2hhc2U6IEFkanVzdEFwcFN0b3JlUHVyY2hhc2UpOiBQcm9taXNlPEFkanVzdFB1cmNoYXNlVmVyaWZpY2F0aW9uSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHZlcmlmeSB0aGUgUGxheSBTdG9yZSBwdXJjaGFzZVxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdFBsYXlTdG9yZVB1cmNoYXNlfSBwdXJjaGFzZSBBZGp1c3QgUGxheSBTdG9yZSBwdXJjaGFzZSBvYmplY3QgdG8gYmUgdmVyaWZpZWRcbiAgICogQHJldHVybnMge1Byb21pc2U8QWRqdXN0UHVyY2hhc2VWZXJpZmljYXRpb25JbmZvPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBwdXJjaGFzZSB2ZXJpZmljYXRpb24gb3V0Y29tZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2ZXJpZnlQbGF5U3RvcmVQdXJjaGFzZShwdXJjaGFzZTogQWRqdXN0UGxheVN0b3JlUHVyY2hhc2UpOiBQcm9taXNlPEFkanVzdFB1cmNoYXNlVmVyaWZpY2F0aW9uSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHNlbmQgYW5kIHBvdGVudGlhbGx5IHJlc29sdmUgc2hvcnRlbmVkIGRlZXAgbGlua3NcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZXBsaW5rIFBvdGVudGlhbGx5IHNob3J0ZW5lZCBkZWVwIGxpbmsgdGhhdCBoYXMgb3BlbmVkIHlvdXIgYXBwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggZWl0aGVyIHJlc29sdmVkIChpZiBpdCB3YXMgcmVzb2x2ZWQpIG9yIGVjaG9lZCBkZWVwIGxpbmtcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJvY2Vzc0RlZXBsaW5rKGRlZXBsaW5rOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufSJdfQ==