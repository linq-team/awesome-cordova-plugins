import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
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
var Adjust = /** @class */ (function (_super) {
    __extends(Adjust, _super);
    function Adjust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adjust.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    Adjust.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    Adjust.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    Adjust.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    Adjust.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    Adjust.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    Adjust.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    Adjust.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    Adjust.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    Adjust.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    Adjust.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    Adjust.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    Adjust.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    Adjust.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    Adjust.prototype.checkForNewAttStatus = function () { return cordova(this, "checkForNewAttStatus", { "sync": true }, arguments); };
    Adjust.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    Adjust.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    Adjust.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    Adjust.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    Adjust.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    Adjust.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    Adjust.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    Adjust.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    Adjust.prototype.getLastDeeplink = function () { return cordova(this, "getLastDeeplink", {}, arguments); };
    Adjust.prototype.verifyAppStorePurchase = function (purchase) { return cordova(this, "verifyAppStorePurchase", {}, arguments); };
    Adjust.prototype.verifyPlayStorePurchase = function (purchase) { return cordova(this, "verifyPlayStorePurchase", {}, arguments); };
    Adjust.prototype.processDeeplink = function (deeplink) { return cordova(this, "processDeeplink", {}, arguments); };
    Adjust.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Adjust, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Adjust.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Adjust });
    Adjust.pluginName = "Adjust";
    Adjust.plugin = "com.adjust.sdk";
    Adjust.pluginRef = "Adjust";
    Adjust.repo = "https://github.com/adjust/cordova_sdk";
    Adjust.platforms = ["Android", "iOS"];
    Adjust = __decorate([], Adjust);
    return Adjust;
}(AwesomeCordovaNativePlugin));
export { Adjust };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Adjust, decorators: [{
            type: Injectable
        }], propDecorators: { create: [], trackEvent: [], trackAppStoreSubscription: [], trackPlayStoreSubscription: [], trackThirdPartySharing: [], trackAdRevenue: [], trackMeasurementConsent: [], setOfflineMode: [], appWillOpenUrl: [], setEnabled: [], setPushToken: [], isEnabled: [], gdprForgetMe: [], disableThirdPartySharing: [], getGoogleAdId: [], getAmazonAdId: [], getIdfa: [], getAdid: [], checkForNewAttStatus: [], getAttribution: [], getSdkVersion: [], addSessionCallbackParameter: [], removeSessionCallbackParameter: [], resetSessionCallbackParameters: [], addSessionPartnerParameter: [], removeSessionPartnerParameter: [], resetSessionPartnerParameters: [], sendFirstPackages: [], requestTrackingAuthorizationWithCompletionHandler: [], updateConversionValue: [], getAppTrackingAuthorizationStatus: [], getLastDeeplink: [], verifyAppStorePurchase: [], verifyPlayStorePurchase: [], processDeeplink: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRqdXN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFjMUYscUJBQVksVUFBa0I7UUFIdEIsdUJBQWtCLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE9BQWUsRUFBRSxRQUFnQjtRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsMENBQW9CLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFhO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQW1CLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxLQUFhO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLGFBQXFCO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFB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QiwrQkFBYztJQVVkLDhCQUFhO0lBV2IsNENBQTJCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFRdEQsK0NBQThCLGFBQUMsR0FBVztJQU0xQywrQ0FBOEI7SUFTOUIsMkNBQTBCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFRckQsOENBQTZCLGFBQUMsR0FBVztJQU16Qyw4Q0FBNkI7SUFNN0Isa0NBQWlCO0lBU2pCLGtFQUFpRDtJQVVqRCxzQ0FBcUIsYUFBQyxlQUF1QjtJQVE3QyxrREFBaUM7SUFVakMsZ0NBQWU7SUFXZix1Q0FBc0IsYUFBQyxRQUFnQztJQVd2RCx3Q0FBdUIsYUFBQyxRQUFpQztJQVd6RCxnQ0FBZSxhQUFDLFFBQWdCO3dHQXpUckIsTUFBTTs0R0FBTixNQUFNOzs7Ozs7SUFBTixNQUFNLGtCQUFOLE1BQU07aUJBaG5CbkI7RUFnbkI0QiwwQkFBMEI7U0FBekMsTUFBTTs0RkFBTixNQUFNO2tCQURsQixVQUFVOzhCQVNULE1BQU0sTUFRTixVQUFVLE1BUVYseUJBQXlCLE1BUXpCLDBCQUEwQixNQVExQixzQkFBc0IsTUFtQnRCLGNBQWMsTUFRZCx1QkFBdUIsTUFRdkIsY0FBYyxNQVFkLGNBQWMsTUFRZCxVQUFVLE1BU1YsWUFBWSxNQVFaLFNBQVMsTUFTVCxZQUFZLE1BT1osd0JBQXdCLE1BUXhCLGFBQWEsTUFVYixhQUFhLE1BVWIsT0FBTyxNQVdQLE9BQU8sTUFRUCxvQkFBb0IsTUFRcEIsY0FBYyxNQVVkLGFBQWEsTUFXYiwyQkFBMkIsTUFRM0IsOEJBQThCLE1BTTlCLDhCQUE4QixNQVM5QiwwQkFBMEIsTUFRMUIsNkJBQTZCLE1BTTdCLDZCQUE2QixNQU03QixpQkFBaUIsTUFTakIsaURBQWlELE1BVWpELHFCQUFxQixNQVFyQixpQ0FBaUMsTUFVakMsZUFBZSxNQVdmLHNCQUFzQixNQVd0Qix1QkFBdUIsTUFXdkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RFdmVudCB7XG4gIHByaXZhdGUgZXZlbnRUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIHJldmVudWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHJlY2VpcHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBwcm9kdWN0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgcHVyY2hhc2VUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoZXZlbnRUb2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5ldmVudFRva2VuID0gZXZlbnRUb2tlbjtcbiAgfVxuXG4gIHNldFJldmVudWUocmV2ZW51ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgc2V0VHJhbnNhY3Rpb25JZCh0cmFuc2FjdGlvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSB0cmFuc2FjdGlvbklkO1xuICB9XG5cbiAgc2V0Q2FsbGJhY2tJZChjYWxsYmFja0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbGxiYWNrSWQgPSBjYWxsYmFja0lkO1xuICB9XG5cbiAgc2V0UmVjZWlwdChyZWNlaXB0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlY2VpcHQgPSByZWNlaXB0O1xuICB9XG5cbiAgc2V0UHJvZHVjdElkKHByb2R1Y3RJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gIH1cblxuICBzZXRQdXJjaGFzZVRva2VuKHB1cmNoYXNlVG9rZW46IHN0cmluZykge1xuICAgIHRoaXMucHVyY2hhc2VUb2tlbiA9IHB1cmNoYXNlVG9rZW47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdENvbmZpZyB7XG4gIHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQ7XG4gIHByaXZhdGUgc2RrUHJlZml4OiBzdHJpbmc7XG4gIHByaXZhdGUgZGVsYXlTdGFydCA9IDAuMDtcbiAgcHJpdmF0ZSBsb2dMZXZlbDogQWRqdXN0TG9nTGV2ZWwgPSBudWxsO1xuICBwcml2YXRlIGRlZmF1bHRUcmFja2VyOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHVybFN0cmF0ZWd5OiBBZGp1c3RVcmxTdHJhdGVneSA9IG51bGw7XG4gIHByaXZhdGUgZXh0ZXJuYWxEZXZpY2VJZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBzZW5kSW5CYWNrZ3JvdW5kOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBzaG91bGRMYXVuY2hEZWVwbGluazogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSB1c2VyQWdlbnQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgaXNEZXZpY2VLbm93bjogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgbmVlZHNDb3N0OiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBzZWNyZXRJZDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMTogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMjogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMzogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvNDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBwcm9jZXNzTmFtZTogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIHByZWluc3RhbGxGaWxlUGF0aDogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgZmJBcHBJZDogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgb2FpZFJlYWRpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgYWxsb3dJZGZhUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuICBwcml2YXRlIGNvcHBhQ29tcGxpYW50RW5hYmxlZDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgcmVhZERldmljZUluZm9PbmNlRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgcGxheVN0b3JlS2lkc0FwcEVuYWJsZWQ6IGJvb2xlYW4gPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBsaW5rTWVFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcbiAgcHJpdmF0ZSBmaW5hbEFuZHJvaWRBdHRyaWJ1dGlvbkVuYWJsZWQ6IGJvb2xlYW4gPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBhdHRDb25zZW50V2FpdGluZ0ludGVydmFsOiBudW1iZXIgPSBudWxsOyAvLyBpT1Mgb25seVxuXG4gIHByaXZhdGUgYXR0cmlidXRpb25DYWxsYmFjazogKGF0dHJpYnV0aW9uOiBBZGp1c3RBdHRyaWJ1dGlvbikgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50RmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uU3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjazogKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBza2FkNENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjazogKHNrYWQ0RGF0YTogQWRqdXN0U2thZDREYXRhKSA9PiB2b2lkID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQpIHtcbiAgICB0aGlzLmFwcFRva2VuID0gYXBwVG9rZW47XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlY3JldElkID0gc2VjcmV0SWQ7XG4gICAgdGhpcy5pbmZvMSA9IGluZm8xO1xuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcbiAgICB0aGlzLmluZm8zID0gaW5mbzM7XG4gICAgdGhpcy5pbmZvNCA9IGluZm80O1xuICB9XG5cbiAgc2V0RGVsYXlTdGFydChkZWxheVN0YXJ0OiBudW1iZXIpIHtcbiAgICB0aGlzLmRlbGF5U3RhcnQgPSBkZWxheVN0YXJ0O1xuICB9XG5cbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsKSB7XG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRyYWNrZXIoZGVmYXVsdFRyYWNrZXI6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdFRyYWNrZXIgPSBkZWZhdWx0VHJhY2tlcjtcbiAgfVxuXG4gIHNldEV4dGVybmFsRGV2aWNlSWQoZXh0ZXJuYWxEZXZpY2VJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5leHRlcm5hbERldmljZUlkID0gZXh0ZXJuYWxEZXZpY2VJZDtcbiAgfVxuXG4gIHNldFVybFN0cmF0ZWd5KHVybFN0cmF0ZWd5OiBBZGp1c3RVcmxTdHJhdGVneSkge1xuICAgIHRoaXMudXJsU3RyYXRlZ3kgPSB1cmxTdHJhdGVneTtcbiAgfVxuXG4gIHNldFNlbmRJbkJhY2tncm91bmQoc2VuZEluQmFja2dyb3VuZDogYm9vbGVhbikge1xuICAgIHRoaXMuc2VuZEluQmFja2dyb3VuZCA9IHNlbmRJbkJhY2tncm91bmQ7XG4gIH1cblxuICBzZXRTaG91bGRMYXVuY2hEZWVwbGluayhzaG91bGRMYXVuY2hEZWVwbGluazogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvdWxkTGF1bmNoRGVlcGxpbmsgPSBzaG91bGRMYXVuY2hEZWVwbGluaztcbiAgfVxuXG4gIHNldEV2ZW50QnVmZmVyaW5nRW5hYmxlZChldmVudEJ1ZmZlcmluZ0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV2ZW50QnVmZmVyaW5nRW5hYmxlZCA9IGV2ZW50QnVmZmVyaW5nRW5hYmxlZDtcbiAgfVxuXG4gIHNldENvcHBhQ29tcGxpYW50RW5hYmxlZChjb3BwYUNvbXBsaWFudEVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvcHBhQ29tcGxpYW50RW5hYmxlZCA9IGNvcHBhQ29tcGxpYW50RW5hYmxlZDtcbiAgfVxuXG4gIHNldFJlYWREZXZpY2VJbmZvT25jZUVuYWJsZWQocmVhZERldmljZUluZm9PbmNlRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMucmVhZERldmljZUluZm9PbmNlRW5hYmxlZCA9IHJlYWREZXZpY2VJbmZvT25jZUVuYWJsZWQ7XG4gIH1cblxuICBzZXRQbGF5U3RvcmVLaWRzQXBwRW5hYmxlZChwbGF5U3RvcmVLaWRzQXBwRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMucGxheVN0b3JlS2lkc0FwcEVuYWJsZWQgPSBwbGF5U3RvcmVLaWRzQXBwRW5hYmxlZDtcbiAgfVxuXG4gIHNldFVzZXJBZ2VudCh1c2VyQWdlbnQ6IHN0cmluZykge1xuICAgIHRoaXMudXNlckFnZW50ID0gdXNlckFnZW50O1xuICB9XG5cbiAgc2V0RGV2aWNlS25vd24oaXNEZXZpY2VLbm93bjogYm9vbGVhbikge1xuICAgIHRoaXMuaXNEZXZpY2VLbm93biA9IGlzRGV2aWNlS25vd247XG4gIH1cblxuICBzZXROZWVkc0Nvc3QobmVlZHNDb3N0OiBib29sZWFuKSB7XG4gICAgdGhpcy5uZWVkc0Nvc3QgPSBuZWVkc0Nvc3Q7XG4gIH1cblxuICBzZXRQcm9jZXNzTmFtZShwcm9jZXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xuICB9XG5cbiAgc2V0UHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZChwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkID0gcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDtcbiAgfVxuXG4gIHNldFByZWluc3RhbGxGaWxlUGF0aChwcmVpbnN0YWxsRmlsZVBhdGg6IHN0cmluZykge1xuICAgIHRoaXMucHJlaW5zdGFsbEZpbGVQYXRoID0gcHJlaW5zdGFsbEZpbGVQYXRoO1xuICB9XG5cbiAgc2V0RmJBcHBJZChmYkFwcElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZiQXBwSWQgPSBmYkFwcElkO1xuICB9XG5cbiAgc2V0T2FpZFJlYWRpbmdFbmFibGVkKGVuYWJsZU9haWRSZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5vYWlkUmVhZGluZ0VuYWJsZWQgPSBlbmFibGVPYWlkUmVhZGluZztcbiAgfVxuXG4gIHNldEFsbG93aUFkSW5mb1JlYWRpbmcoYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dpQWRJbmZvUmVhZGluZyA9IGFsbG93aUFkSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRBbGxvd0lkZmFSZWFkaW5nKGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93SWRmYVJlYWRpbmcgPSBhbGxvd0lkZmFSZWFkaW5nO1xuICB9XG5cbiAgc2V0QWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmcoYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nID0gYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRMaW5rTWVFbmFibGVkKGxpbmtNZUVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxpbmtNZUVuYWJsZWQgPSBsaW5rTWVFbmFibGVkO1xuICB9XG5cbiAgc2V0RmluYWxBbmRyb2lkQXR0cmlidXRpb25FbmFibGVkKGZpbmFsQW5kcm9pZEF0dHJpYnV0aW9uRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZmluYWxBbmRyb2lkQXR0cmlidXRpb25FbmFibGVkID0gZmluYWxBbmRyb2lkQXR0cmlidXRpb25FbmFibGVkO1xuICB9XG5cbiAgc2V0QXR0Q29uc2VudFdhaXRpbmdJbnRlcnZhbChhdHRDb25zZW50V2FpdGluZ0ludGVydmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLmF0dENvbnNlbnRXYWl0aW5nSW50ZXJ2YWwgPSBhdHRDb25zZW50V2FpdGluZ0ludGVydmFsO1xuICB9XG5cbiAgc2V0QXR0cmlidXRpb25DYWxsYmFja0xpc3RlbmVyKGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQpIHtcbiAgICB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgPSBhdHRyaWJ1dGlvbkNhbGxiYWNrO1xuICB9XG5cbiAgc2V0RXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrTGlzdGVuZXIoZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCkge1xuICAgIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0RXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50RmFpbHVyZSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0U2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihcbiAgICBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKHNlc3Npb246IEFkanVzdFNlc3Npb25TdWNjZXNzKSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCkge1xuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldERlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2sgPSBkZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcihjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChjb252ZXJzaW9uVmFsdWU6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrID0gY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0U2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcihza2FkNENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjazogKHNrYWQ0RGF0YTogQWRqdXN0U2thZDREYXRhKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5za2FkNENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjayA9IHNrYWQ0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGlvbkNhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuc2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGhhc0F0dHJpYnV0aW9uTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRXZlbnRUcmFja2luZ1N1Y2NlZWRlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRXZlbnRUcmFja2luZ0ZhaWxlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc1Nlc3Npb25UcmFja2luZ0ZhaWxlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNEZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0NvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFja0xpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2thZDRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5za2FkNENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb24ge1xuICBwcml2YXRlIHByaWNlOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVjZWlwdDogc3RyaW5nO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nO1xuICBwcml2YXRlIHNhbGVzUmVnaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaWNlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIHRyYW5zYWN0aW9uSWQ6IHN0cmluZywgcmVjZWlwdDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSB0cmFuc2FjdGlvbklkO1xuICAgIHRoaXMucmVjZWlwdCA9IHJlY2VpcHQ7XG4gIH1cblxuICBzZXRUcmFuc2FjdGlvbkRhdGUodHJhbnNhY3Rpb25EYXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9uRGF0ZSA9IHRyYW5zYWN0aW9uRGF0ZTtcbiAgfVxuXG4gIHNldFNhbGVzUmVnaW9uKHNhbGVzUmVnaW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNhbGVzUmVnaW9uID0gc2FsZXNSZWdpb247XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb24ge1xuICBwcml2YXRlIHByaWNlOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSBza3U6IHN0cmluZztcbiAgcHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG4gIHByaXZhdGUgc2lnbmF0dXJlOiBzdHJpbmc7XG4gIHByaXZhdGUgcHVyY2hhc2VUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIHB1cmNoYXNlVGltZTogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBza3U6IHN0cmluZywgb3JkZXJJZDogc3RyaW5nLCBzaWduYXR1cmU6IHN0cmluZywgcHVyY2hhc2VUb2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB0aGlzLnNrdSA9IHNrdTtcbiAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucHVyY2hhc2VUb2tlbiA9IHB1cmNoYXNlVG9rZW47XG4gIH1cblxuICBzZXRQdXJjaGFzZVRpbWUocHVyY2hhc2VUaW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnB1cmNoYXNlVGltZSA9IHB1cmNoYXNlVGltZTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdFRoaXJkUGFydHlTaGFyaW5nIHtcbiAgcHJpdmF0ZSBpc0VuYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgZ3JhbnVsYXJPcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJTaGFyaW5nU2V0dGluZ3M6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoaXNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gIH1cblxuICBhZGRHcmFudWxhck9wdGlvbihwYXJ0bmVyTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2gocGFydG5lck5hbWUpO1xuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2goa2V5KTtcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJTaGFyaW5nU2V0dGluZyhwYXJ0bmVyTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJTaGFyaW5nU2V0dGluZ3MucHVzaChwYXJ0bmVyTmFtZSk7XG4gICAgdGhpcy5wYXJ0bmVyU2hhcmluZ1NldHRpbmdzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJTaGFyaW5nU2V0dGluZ3MucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdEFkUmV2ZW51ZSB7XG4gIHByaXZhdGUgc291cmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmV2ZW51ZTogbnVtYmVyO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgYWRJbXByZXNzaW9uc0NvdW50OiBudW1iZXI7XG4gIHByaXZhdGUgYWRSZXZlbnVlTmV0d29yazogc3RyaW5nO1xuICBwcml2YXRlIGFkUmV2ZW51ZVVuaXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBhZFJldmVudWVQbGFjZW1lbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIHNldFJldmVudWUocmV2ZW51ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgc2V0QWRJbXByZXNzaW9uc0NvdW50KGFkSW1wcmVzc2lvbnNDb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5hZEltcHJlc3Npb25zQ291bnQgPSBhZEltcHJlc3Npb25zQ291bnQ7XG4gIH1cblxuICBzZXRBZFJldmVudWVOZXR3b3JrKGFkUmV2ZW51ZU5ldHdvcms6IHN0cmluZykge1xuICAgIHRoaXMuYWRSZXZlbnVlTmV0d29yayA9IGFkUmV2ZW51ZU5ldHdvcms7XG4gIH1cblxuICBzZXRBZFJldmVudWVVbml0KGFkUmV2ZW51ZVVuaXQ6IHN0cmluZykge1xuICAgIHRoaXMuYWRSZXZlbnVlVW5pdCA9IGFkUmV2ZW51ZVVuaXQ7XG4gIH1cblxuICBzZXRBZFJldmVudWVQbGFjZW1lbnQoYWRSZXZlbnVlUGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkUmV2ZW51ZVBsYWNlbWVudCA9IGFkUmV2ZW51ZVBsYWNlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0QXBwU3RvcmVQdXJjaGFzZSB7XG4gIHByaXZhdGUgcmVjZWlwdDogc3RyaW5nO1xuICBwcml2YXRlIHByb2R1Y3RJZDogc3RyaW5nO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihyZWNlaXB0OiBzdHJpbmcsIHByb2R1Y3RJZDogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlY2VpcHQgPSByZWNlaXB0O1xuICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgIHRoaXMudHJhbnNhY3Rpb25JZCA9IHRyYW5zYWN0aW9uSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdFBsYXlTdG9yZVB1cmNoYXNlIHtcbiAgcHJpdmF0ZSBwcm9kdWN0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBwdXJjaGFzZVRva2VuOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvZHVjdElkOiBzdHJpbmcsIHB1cmNoYXNlVG9rZW46IHN0cmluZykge1xuICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgIHRoaXMucHVyY2hhc2VUb2tlbiA9IHB1cmNoYXNlVG9rZW47XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RBdHRyaWJ1dGlvbiB7XG4gIHRyYWNrZXJUb2tlbjogc3RyaW5nO1xuICB0cmFja2VyTmFtZTogc3RyaW5nO1xuICBuZXR3b3JrOiBzdHJpbmc7XG4gIGNhbXBhaWduOiBzdHJpbmc7XG4gIGFkZ3JvdXA6IHN0cmluZztcbiAgY3JlYXRpdmU6IHN0cmluZztcbiAgY2xpY2tMYWJlbDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGNvc3RUeXBlOiBzdHJpbmc7XG4gIGNvc3RBbW91bnQ6IHN0cmluZztcbiAgY29zdEN1cnJlbmN5OiBzdHJpbmc7XG4gIGZiSW5zdGFsbFJlZmVycmVyOiBzdHJpbmc7IC8vIEFuZHJvaWQgb25seVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25TdWNjZXNzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTZXNzaW9uRmFpbHVyZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAgd2lsbFJldHJ5OiBib29sZWFuO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudFN1Y2Nlc3Mge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGV2ZW50VG9rZW46IHN0cmluZztcbiAgY2FsbGJhY2tJZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudEZhaWx1cmUge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGV2ZW50VG9rZW46IHN0cmluZztcbiAgd2lsbFJldHJ5OiBib29sZWFuO1xuICBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNrYWQ0RGF0YSB7XG4gIGZpbmVWYWx1ZTogbnVtYmVyO1xuICBjb2Fyc2VWYWx1ZTogc3RyaW5nO1xuICBsb2NrV2luZG93OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFB1cmNoYXNlVmVyaWZpY2F0aW9uSW5mbyB7XG4gIHZlcmlmaWNhdGlvblN0YXR1czogc3RyaW5nO1xuICBjb2RlOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0RW52aXJvbm1lbnQge1xuICBTYW5kYm94ID0gJ3NhbmRib3gnLFxuICBQcm9kdWN0aW9uID0gJ3Byb2R1Y3Rpb24nLFxufVxuXG5leHBvcnQgZW51bSBBZGp1c3RMb2dMZXZlbCB7XG4gIFZlcmJvc2UgPSAnVkVSQk9TRScsXG4gIERlYnVnID0gJ0RFQlVHJyxcbiAgSW5mbyA9ICdJTkZPJyxcbiAgV2FybiA9ICdXQVJOJyxcbiAgRXJyb3IgPSAnRVJST1InLFxuICBBc3NlcnQgPSAnQVNTRVJUJyxcbiAgU3VwcHJlc3MgPSAnU1VQUFJFU1MnLFxufVxuXG5leHBvcnQgZW51bSBBZGp1c3RVcmxTdHJhdGVneSB7XG4gIEluZGlhID0gJ2luZGlhJyxcbiAgQ2hpbmEgPSAnY2hpbmEnLFxuICBDbiA9ICdjbicsXG4gIENuT25seSA9ICdjbi1vbmx5JyxcbiAgRGF0YVJlc2lkZW5jeUVVID0gJ2RhdGEtcmVzaWRlbmN5LWV1JyxcbiAgRGF0YVJlc2lkZW5jeVRSID0gJ2RhdGEtcmVzaWRlbmN5LXRyJyxcbiAgRGF0YVJlc2lkZW5jeVVTID0gJ2RhdGEtcmVzaWRlbmN5LXVzJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0QWRSZXZlbnVlU291cmNlIHtcbiAgQWRSZXZlbnVlU291cmNlQXBwTG92aW5NQVggPSAnYXBwbG92aW5fbWF4X3NkaycsXG4gIEFkUmV2ZW51ZVNvdXJjZU1vcHViID0gJ21vcHViJyxcbiAgQWRSZXZlbnVlU291cmNlQWRNb2IgPSAnYWRtb2Jfc2RrJyxcbiAgQWRSZXZlbnVlU291cmNlSXJvblNvdXJjZSA9ICdpcm9uc291cmNlX3NkaycsXG4gIEFkUmV2ZW51ZVNvdXJjZUFkTW9zdCA9IFwiYWRtb3N0X3Nka1wiLFxuICBBZFJldmVudWVTb3VyY2VVbml0eSA9IFwidW5pdHlfc2RrXCIsXG4gIEFkUmV2ZW51ZVNvdXJjZUhlbGl1bUNoYXJ0Ym9vc3QgPSBcImhlbGl1bV9jaGFydGJvb3N0X3Nka1wiLFxuICBBZFJldmVudWVTb3VyY2VQdWJsaXNoZXIgPSBcInB1Ymxpc2hlcl9zZGtcIixcbiAgQWRSZXZlbnVlU291cmNlVG9wT24gPSBcInRvcG9uX3Nka1wiLFxuICBBZFJldmVudWVTb3VyY2VBZHggPSBcImFkeF9zZGtcIixcbn1cblxuLyoqXG4gKiBAbmFtZSBBZGp1c3RcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyB0aGUgSW9uaWMgQ29yZG92YSBTREsgb2YgQWRqdXN04oSiLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBBZGp1c3TihKIgYXQgYWRqdXN0LmNvbS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvbS5hZGp1c3Quc2RrYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0FkanVzdCBDb3Jkb3ZhIFNES10oaHR0cHM6Ly9naXRodWIuY29tL2FkanVzdC9jb3Jkb3ZhX3NkaylcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICBpbXBvcnQgeyBBZGp1c3QsIEFkanVzdENvbmZpZywgQWRqdXN0RW52aXJvbm1lbnQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYWRqdXN0L25neCc7XG4gKlxuICogIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRqdXN0OiBBZGp1c3QpIHsgfVxuICpcbiAqICAuLi5cbiAqXG4gKiAgY29uc3QgY29uZmlnID0gbmV3IEFkanVzdENvbmZpZygnQVBQLVRPS0VOLUhFUkUnLCBBZGp1c3RFbnZpcm9ubWVudC5TYW5kYm94KTtcbiAqICBjb25maWcubG9nTGV2ZWwgPSBBZGp1c3RMb2dMZXZlbC5WZXJib3NlO1xuICogIC8vIFNldCBvdGhlciBjb25maWcgcHJvcGVydGllcy5cbiAqICBhZGp1c3QuY3JlYXRlKGNvbmZpZyk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQWRqdXN0QXR0cmlidXRpb25cbiAqIEFkanVzdFNlc3Npb25TdWNjZXNzXG4gKiBBZGp1c3RTZXNzaW9uRmFpbHVyZVxuICogQWRqdXN0RXZlbnRTdWNjZXNzXG4gKiBBZGp1c3RFdmVudEZhaWx1cmVcbiAqIEFkanVzdFNrYWQ0RGF0YVxuICogQWRqdXN0UHVyY2hhc2VWZXJpZmljYXRpb25JbmZvXG4gKiBAY2xhc3Nlc1xuICogQWRqdXN0RXZlbnRcbiAqIEFkanVzdENvbmZpZ1xuICogQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb25cbiAqIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvblxuICogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmdcbiAqIEFkanVzdEFkUmV2ZW51ZVxuICogQWRqdXN0QXBwU3RvcmVQdXJjaGFzZVxuICogQWRqdXN0UGxheVN0b3JlUHVyY2hhc2VcbiAqIEBlbnVtc1xuICogQWRqdXN0RW52aXJvbm1lbnRcbiAqIEFkanVzdExvZ0xldmVsXG4gKiBBZGp1c3RVcmxTdHJhdGVneVxuICogQWRqdXN0QWRSZXZlbnVlU291cmNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRqdXN0JyxcbiAgcGx1Z2luOiAnY29tLmFkanVzdC5zZGsnLFxuICBwbHVnaW5SZWY6ICdBZGp1c3QnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkanVzdC9jb3Jkb3ZhX3NkaycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGp1c3QgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGluaXRpYWxpemVzIEFkanVzdCBTREtcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RDb25pZ30gY29uZmlnIEFkanVzdCBjb25maWcgb2JqZWN0IHVzZWQgYXMgc3RhcnRpbmcgb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNyZWF0ZShjb25maWc6IEFkanVzdENvbmZpZyk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFuIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0RXZlbnR9IGV2ZW50IEFkanVzdCBldmVudCBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrRXZlbnQoZXZlbnQ6IEFkanVzdEV2ZW50KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgQXBwIFN0b3JlIHN1YnNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb24gQWRqdXN0IEFwcCBTdG9yZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja0FwcFN0b3JlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBQbGF5IFN0b3JlIHN1YnNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIEFkanVzdCBQbGF5IFN0b3JlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrUGxheVN0b3JlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogQWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgdGhpcmQgcGFydHkgc2hhcmluZyBjaG9pY2VcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RUaGlyZFBhcnR5U2hhcmluZ30gdGhpcmRQYXJ0eVNoYXJpbmcgQWRqdXN0IHRoaXJkIHBhcnR5IHNoYXJpbmcgb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja1RoaXJkUGFydHlTaGFyaW5nKHRoaXJkUGFydHlTaGFyaW5nOiBBZGp1c3RUaGlyZFBhcnR5U2hhcmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFkIHJldmVudWUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdEFkUmV2ZW51ZVNvdXJjZX0gc291cmNlIEFkIHJldmVudWUgc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXlsb2FkIEFkIHJldmVudWUgSlNPTiBzdHJpbmcgcGF5bG9hZFxuICAgKi9cbiAgdHJhY2tBZFJldmVudWUoc291cmNlOiBBZGp1c3RBZFJldmVudWVTb3VyY2UsIHBheWxvYWQ6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhZCByZXZlbnVlIGRhdGFcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RBZFJldmVudWV9IGFkUmV2ZW51ZSBBZGp1c3QgYWQgcmV2ZW51ZSBvYmplY3RcbiAgICovXG4gIHRyYWNrQWRSZXZlbnVlKGFkUmV2ZW51ZTogQWRqdXN0QWRSZXZlbnVlKTogdm9pZDtcblxuICAvLyBBbmQgdHlwZXNjcmlwdCBoaWRlcyB0aGlzLCBzbyB0aGUgY2xpZW50IHdpbGwgYmUgYWJsZSBjYWxsIG9ubHkgbWV0aG9kcyBhYm92ZVxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tBZFJldmVudWUoc291cmNlT3JBZFJldmVudWU6IGFueSwgcGF5bG9hZD86IGFueSk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIG1lYXN1cmVtZW50IGNvbnNlbnQgY2hvaWNlXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWVhc3VyZW1lbnRDb25zZW50IHNldCBtZWFzdXJlbWVudCBjb25zZW50IHRvIHRydWUgb3IgZmFsc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja01lYXN1cmVtZW50Q29uc2VudChtZWFzdXJlbWVudENvbnNlbnQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHNldHMgb2ZmbGluZSBtb2RlIG9uIG9yIG9mZlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIHRydWUgZm9yIG9mZmxpbmUgbW9kZSBvblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9mZmxpbmVNb2RlKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEJ5IG1ha2luZyB0aGlzIGNhbGwsIHRoZSBBZGp1c3QgU0RLIHdpbGwgdHJ5IHRvIGZpbmQgaWYgdGhlcmUgaXMgYW55IG5ldyBhdHRyaWJ1dGlvbiBpbmZvIGluc2lkZSBvZiB0aGUgZGVlcCBsaW5rIGFuZCBpZiBhbnksIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgQWRqdXN0IGJhY2tlbmQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBkZWVwbGlua1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFwcFdpbGxPcGVuVXJsKHVybDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGRpc2FibGUvZW5hYmxlIHRoZSBBZGp1c3QgU0RLIGZyb20gdHJhY2tpbmcgYnkgaW52b2tpbmcgdGhpcyBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIHNldCB0byBmYWxzZSB0byBkaXNhYmxlIFNES1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogVG8gc2VuZCB1cyB0aGUgcHVzaCBub3RpZmljYXRpb24gdG9rZW4sIGFkZCB0aGUgZm9sbG93aW5nIGNhbGwgdG8gQWRqdXN0IHdoZW5ldmVyIHlvdSBnZXQgeW91ciB0b2tlbiBpbiB0aGUgYXBwIG9yIHdoZW4gaXQgZ2V0cyB1cGRhdGVkLlxuICAgKiBQdXNoIHRva2VucyBhcmUgdXNlZCBmb3IgQXVkaWVuY2UgQnVpbGRlciBhbmQgY2xpZW50IGNhbGxiYWNrcywgYW5kIHRoZXkgYXJlIHJlcXVpcmVkIGZvciB0aGUgdXBjb21pbmcgdW5pbnN0YWxsIHRyYWNraW5nIGZlYXR1cmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwdXNoVG9rZW4gcHVzaCB0b2tlbiB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFB1c2hUb2tlbihwdXNoVG9rZW46IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIEFkanVzdCBTREsgaXMgY3VycmVudGx5IGVuYWJsZWQgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluIGFjY29yZGFuY2Ugd2l0aCBhcnRpY2xlIDE3IG9mIHRoZSBFVSdzIEdlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24gKEdEUFIpLCB5b3UgY2FuIG5vdGlmeSBBZGp1c3Qgd2hlbiBhIHVzZXIgaGFzIGV4ZXJjaXNlZCB0aGVpciByaWdodCB0byBiZSBmb3Jnb3R0ZW4uXG4gICAqIENhbGxpbmcgdGhlIGZvbGxvd2luZyBtZXRob2Qgd2lsbCBpbnN0cnVjdCB0aGUgQWRqdXN0IFNESyB0byBjb21tdW5pY2F0ZSB0aGUgdXNlcidzIGNob2ljZSB0byBiZSBmb3Jnb3R0ZW4gdG8gdGhlIEFkanVzdCBiYWNrZW5kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2RwckZvcmdldE1lKCk6IHZvaWQge31cblxuICAvKipcbiAgICogWW91IGNhbiBub3cgbm90aWZ5IEFkanVzdCB3aGVuIGEgdXNlciBoYXMgZXhlcmNpc2VkIHRoZWlyIHJpZ2h0IHRvIHN0b3Agc2hhcmluZyB0aGVpciBkYXRhIHdpdGggcGFydG5lcnMgZm9yIG1hcmtldGluZyBwdXJwb3NlcywgYnV0IGhhcyBhbGxvd2VkIGl0IHRvIGJlIHNoYXJlZCBmb3Igc3RhdGlzdGljcyBwdXJwb3Nlcy4gXG4gICAqIENhbGxpbmcgdGhlIGZvbGxvd2luZyBtZXRob2Qgd2lsbCBpbnN0cnVjdCB0aGUgQWRqdXN0IFNESyB0byBjb21tdW5pY2F0ZSB0aGUgdXNlcidzIGNob2ljZSB0byBkaXNhYmxlIGRhdGEgc2hhcmluZyB0byB0aGUgQWRqdXN0IGJhY2tlbmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkaXNhYmxlVGhpcmRQYXJ0eVNoYXJpbmcoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB1c2VkIHRvIGdldCBHb29nbGUgQWRJZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGdvb2dsZSBBZElkIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEdvb2dsZUFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSWYgeW91IG5lZWQgdG8gb2J0YWluIHRoZSBBbWF6b24gQWR2ZXJ0aXNpbmcgSUQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbmF6aWIgYWR2LiBJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbWF6b25BZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIG9idGFpbiB0aGUgSURGQSwgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggSURGQSBzdHJpbmcgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SWRmYSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZXZlcnkgZGV2aWNlIHdpdGggeW91ciBhcHAgaW5zdGFsbGVkIG9uIGl0LCB0aGUgQWRqdXN0IGJhY2tlbmQgZ2VuZXJhdGVzIGEgdW5pcXVlIEFkanVzdCBkZXZpY2UgaWRlbnRpZmllciAoYWRpZCkuXG4gICAqIEluIG9yZGVyIHRvIG9idGFpbiB0aGlzIGlkZW50aWZpZXIsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFkaWQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWRpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnN0cnVjdCB0byBBZGp1c3QgU0RLIHRvIGNoZWNrIGN1cnJlbnQgc3RhdGUgb2YgYXR0X3N0YXR1c1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNoZWNrRm9yTmV3QXR0U3RhdHVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgeW91IHdhbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGEgdXNlcidzIGN1cnJlbnQgYXR0cmlidXRpb24gd2hlbmV2ZXIgeW91IG5lZWQgaXQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBZGp1c3RBdHRyaWJ1dGlvbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggQWRqdXN0QXR0cmlidXRpb24gb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEF0dHJpYnV0aW9uKCk6IFByb21pc2U8QWRqdXN0QXR0cmlidXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBpbmZvcm1hdGlvbiBhYm91dCB2ZXJzaW9uIG9mIHRoZSBTREsgdXNlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHNkayB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNka1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyIGJ5IHBhc3NpbmcgdGhlIGRlc2lyaW5nIGtleSB0byB0aGlzIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZVNlc3Npb25DYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgYWxsIGtleXMgYW5kIHZhbHVlcyBmcm9tIHRoZSBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlcnMgaGF2ZSB0byBiZSByZW1vdmVkLCBjYWxsIHRoaXMgbWV0aG9kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVzZXRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZFNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVyIGJ5IHBhc3NpbmcgdGhlIGRlc2lyaW5nIGtleSB0byB0aGlzIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZVNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc2V0U2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2FsbCB3aWxsIG1ha2UgdGhlIEFkanVzdCBTREsgc2VuZCB0aGUgaW5pdGlhbCBpbnN0YWxsIHNlc3Npb24gYW5kIGFueSBldmVudHMgY3JlYXRlZCwgaWYgdGhleSB3ZXJlIG5vdCBzZW50IGFmdGVyIGRlbGF5IHN0YXJ0IHdhcyBzZXQgYW5kIGl0J3MgZGVsYXkgZXhwaXJlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZW5kRmlyc3RQYWNrYWdlcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgQWRqdXN0IFNESyB0byBzaG93IHBvcCB1cCBkaWFsb2cgZm9yIGFza2luZyB1c2VyJ3MgY29uc2VudCB0byBiZSB0cmFja2VkLlxuICAgKiBJbiBvcmRlciB0byBkbyB0aGlzLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB1c2VyJ3MgY29uc2VudCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0VHJhY2tpbmdBdXRob3JpemF0aW9uV2l0aENvbXBsZXRpb25IYW5kbGVyKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gdXBkYXRlIFNLQWROZXR3b3JrIGNvbnZlcnNpb24gdmFsdWUgd2l0aCBjYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb252ZXJzaW9uVmFsdWUgY29udmVyc2lvbiB2YWx1ZSBmb3IgdGhlIHVzZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cGRhdGVDb252ZXJzaW9uVmFsdWUoY29udmVyc2lvblZhbHVlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvIG9idGFpbiB0aGUgYXBwIHRyYWNraW5nIGF1dGhvcml6YXRpb24gc3RhdHVzIGluIGlPUywgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYXBwIHRyYWNraW5nIGF1dGhvcml6YXRpb24gc3RhdHVzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFwcFRyYWNraW5nQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBvYnRhaW4gdGhlIGxhc3QgZGVlcCBsaW5rIHdoaWNoIGhhcyBvcGVuZWQgeW91ciBpT1MgYXBwLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBpT1MgZGVlcCBsaW5rIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMYXN0RGVlcGxpbmsoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB2ZXJpZnkgdGhlIEFwcCBTdG9yZSBwdXJjaGFzZVxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdEFwcFN0b3JlUHVyY2hhc2V9IHB1cmNoYXNlIEFkanVzdCBBcHAgU3RvcmUgcHVyY2hhc2Ugb2JqZWN0IHRvIGJlIHZlcmlmaWVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFkanVzdFB1cmNoYXNlVmVyaWZpY2F0aW9uSW5mbz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcHVyY2hhc2UgdmVyaWZpY2F0aW9uIG91dGNvbWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdmVyaWZ5QXBwU3RvcmVQdXJjaGFzZShwdXJjaGFzZTogQWRqdXN0QXBwU3RvcmVQdXJjaGFzZSk6IFByb21pc2U8QWRqdXN0UHVyY2hhc2VWZXJpZmljYXRpb25JbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdmVyaWZ5IHRoZSBQbGF5IFN0b3JlIHB1cmNoYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0UGxheVN0b3JlUHVyY2hhc2V9IHB1cmNoYXNlIEFkanVzdCBQbGF5IFN0b3JlIHB1cmNoYXNlIG9iamVjdCB0byBiZSB2ZXJpZmllZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBZGp1c3RQdXJjaGFzZVZlcmlmaWNhdGlvbkluZm8+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHB1cmNoYXNlIHZlcmlmaWNhdGlvbiBvdXRjb21lXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcmlmeVBsYXlTdG9yZVB1cmNoYXNlKHB1cmNoYXNlOiBBZGp1c3RQbGF5U3RvcmVQdXJjaGFzZSk6IFByb21pc2U8QWRqdXN0UHVyY2hhc2VWZXJpZmljYXRpb25JbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2VuZCBhbmQgcG90ZW50aWFsbHkgcmVzb2x2ZSBzaG9ydGVuZWQgZGVlcCBsaW5rc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVlcGxpbmsgUG90ZW50aWFsbHkgc2hvcnRlbmVkIGRlZXAgbGluayB0aGF0IGhhcyBvcGVuZWQgeW91ciBhcHBcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBlaXRoZXIgcmVzb2x2ZWQgKGlmIGl0IHdhcyByZXNvbHZlZCkgb3IgZWNob2VkIGRlZXAgbGlua1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcm9jZXNzRGVlcGxpbmsoZGVlcGxpbms6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59Il19