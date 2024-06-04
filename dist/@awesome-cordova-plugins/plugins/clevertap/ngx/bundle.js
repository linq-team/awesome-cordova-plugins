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

var CleverTap = /** @class */ (function (_super) {
    tslib.__extends(CleverTap, _super);
    function CleverTap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CleverTap.prototype.notifyDeviceReady = function () { return core.cordova(this, "notifyDeviceReady", {}, arguments); };
    CleverTap.prototype.enablePersonalization = function () { return core.cordova(this, "enablePersonalization", {}, arguments); };
    CleverTap.prototype.disablePersonalization = function () { return core.cordova(this, "disablePersonalization", {}, arguments); };
    CleverTap.prototype.setOptOut = function (optOut) { return core.cordova(this, "setOptOut", {}, arguments); };
    CleverTap.prototype.setOffline = function (offline) { return core.cordova(this, "setOffline", {}, arguments); };
    CleverTap.prototype.enableDeviceNetworkInfoReporting = function (enable) { return core.cordova(this, "enableDeviceNetworkInfoReporting", {}, arguments); };
    CleverTap.prototype.setLocale = function (locale) { return core.cordova(this, "setLocale", {}, arguments); };
    CleverTap.prototype.registerPush = function () { return core.cordova(this, "registerPush", {}, arguments); };
    CleverTap.prototype.setPushToken = function (token) { return core.cordova(this, "setPushToken", {}, arguments); };
    CleverTap.prototype.setPushXiaomiToken = function (token, region) { return core.cordova(this, "setPushXiaomiToken", {}, arguments); };
    CleverTap.prototype.setPushBaiduToken = function (token) { return core.cordova(this, "setPushBaiduToken", {}, arguments); };
    CleverTap.prototype.setPushHuaweiToken = function (token) { return core.cordova(this, "setPushHuaweiToken", {}, arguments); };
    CleverTap.prototype.createNotification = function (extras) { return core.cordova(this, "createNotification", {}, arguments); };
    CleverTap.prototype.createNotificationChannel = function (channelID, channelName, channelDescription, importance, showBadge) { return core.cordova(this, "createNotificationChannel", {}, arguments); };
    CleverTap.prototype.createNotificationChannelWithSound = function (channelID, channelName, channelDescription, importance, showBadge, sound) { return core.cordova(this, "createNotificationChannelWithSound", {}, arguments); };
    CleverTap.prototype.createNotificationChannelWithGroupId = function (channelID, channelName, channelDescription, importance, groupId, showBadge) { return core.cordova(this, "createNotificationChannelWithGroupId", {}, arguments); };
    CleverTap.prototype.createNotificationChannelWithGroupIdAndSound = function (channelID, channelName, channelDescription, importance, groupId, showBadge, sound) { return core.cordova(this, "createNotificationChannelWithGroupIdAndSound", {}, arguments); };
    CleverTap.prototype.createNotificationChannelGroup = function (groupID, groupName) { return core.cordova(this, "createNotificationChannelGroup", {}, arguments); };
    CleverTap.prototype.deleteNotificationChannel = function (channelID) { return core.cordova(this, "deleteNotificationChannel", {}, arguments); };
    CleverTap.prototype.deleteNotificationChannelGroup = function (groupID) { return core.cordova(this, "deleteNotificationChannelGroup", {}, arguments); };
    CleverTap.prototype.recordScreenView = function (screenName) { return core.cordova(this, "recordScreenView", {}, arguments); };
    CleverTap.prototype.recordEventWithName = function (eventName) { return core.cordova(this, "recordEventWithName", {}, arguments); };
    CleverTap.prototype.recordEventWithNameAndProps = function (eventName, eventProps) { return core.cordova(this, "recordEventWithNameAndProps", {}, arguments); };
    CleverTap.prototype.recordChargedEventWithDetailsAndItems = function (details, items) { return core.cordova(this, "recordChargedEventWithDetailsAndItems", {}, arguments); };
    CleverTap.prototype.eventGetFirstTime = function (eventName) { return core.cordova(this, "eventGetFirstTime", {}, arguments); };
    CleverTap.prototype.eventGetLastTime = function (eventName) { return core.cordova(this, "eventGetLastTime", {}, arguments); };
    CleverTap.prototype.eventGetOccurrences = function (eventName) { return core.cordova(this, "eventGetOccurrences", {}, arguments); };
    CleverTap.prototype.eventGetDetails = function (eventName) { return core.cordova(this, "eventGetDetails", {}, arguments); };
    CleverTap.prototype.getEventHistory = function () { return core.cordova(this, "getEventHistory", {}, arguments); };
    CleverTap.prototype.getLocation = function () { return core.cordova(this, "getLocation", {}, arguments); };
    CleverTap.prototype.setLocation = function (lat, lon) { return core.cordova(this, "setLocation", {}, arguments); };
    CleverTap.prototype.onUserLogin = function (profile) { return core.cordova(this, "onUserLogin", {}, arguments); };
    CleverTap.prototype.profileSet = function (profile) { return core.cordova(this, "profileSet", {}, arguments); };
    CleverTap.prototype.profileGetProperty = function (propertyName) { return core.cordova(this, "profileGetProperty", {}, arguments); };
    CleverTap.prototype.profileGetCleverTapAttributionIdentifier = function () { return core.cordova(this, "profileGetCleverTapAttributionIdentifier", {}, arguments); };
    CleverTap.prototype.profileGetCleverTapID = function () { return core.cordova(this, "profileGetCleverTapID", {}, arguments); };
    CleverTap.prototype.getCleverTapID = function () { return core.cordova(this, "getCleverTapID", {}, arguments); };
    CleverTap.prototype.profileRemoveValueForKey = function (key) { return core.cordova(this, "profileRemoveValueForKey", {}, arguments); };
    CleverTap.prototype.profileSetMultiValues = function (key, values) { return core.cordova(this, "profileSetMultiValues", {}, arguments); };
    CleverTap.prototype.profileAddMultiValue = function (key, value) { return core.cordova(this, "profileAddMultiValue", {}, arguments); };
    CleverTap.prototype.profileAddMultiValues = function (key, values) { return core.cordova(this, "profileAddMultiValues", {}, arguments); };
    CleverTap.prototype.profileRemoveMultiValue = function (key, value) { return core.cordova(this, "profileRemoveMultiValue", {}, arguments); };
    CleverTap.prototype.profileRemoveMultiValues = function (key, values) { return core.cordova(this, "profileRemoveMultiValues", {}, arguments); };
    CleverTap.prototype.profileIncrementValueBy = function (key, value) { return core.cordova(this, "profileIncrementValueBy", {}, arguments); };
    CleverTap.prototype.profileDecrementValueBy = function (key, value) { return core.cordova(this, "profileDecrementValueBy", {}, arguments); };
    CleverTap.prototype.suspendInAppNotifications = function () { return core.cordova(this, "suspendInAppNotifications", {}, arguments); };
    CleverTap.prototype.discardInAppNotifications = function () { return core.cordova(this, "discardInAppNotifications", {}, arguments); };
    CleverTap.prototype.resumeInAppNotifications = function () { return core.cordova(this, "resumeInAppNotifications", {}, arguments); };
    CleverTap.prototype.clearInAppResources = function (expiredOnly) { return core.cordova(this, "clearInAppResources", {}, arguments); };
    CleverTap.prototype.fetchInApps = function () { return core.cordova(this, "fetchInApps", {}, arguments); };
    CleverTap.prototype.sessionGetTimeElapsed = function () { return core.cordova(this, "sessionGetTimeElapsed", {}, arguments); };
    CleverTap.prototype.sessionGetTotalVisits = function () { return core.cordova(this, "sessionGetTotalVisits", {}, arguments); };
    CleverTap.prototype.sessionGetScreenCount = function () { return core.cordova(this, "sessionGetScreenCount", {}, arguments); };
    CleverTap.prototype.sessionGetPreviousVisitTime = function () { return core.cordova(this, "sessionGetPreviousVisitTime", {}, arguments); };
    CleverTap.prototype.sessionGetUTMDetails = function () { return core.cordova(this, "sessionGetUTMDetails", {}, arguments); };
    CleverTap.prototype.pushInstallReferrer = function (source, medium, campaign) { return core.cordova(this, "pushInstallReferrer", {}, arguments); };
    CleverTap.prototype.initializeInbox = function () { return core.cordova(this, "initializeInbox", {}, arguments); };
    CleverTap.prototype.getInboxMessageUnreadCount = function () { return core.cordova(this, "getInboxMessageUnreadCount", {}, arguments); };
    CleverTap.prototype.getInboxMessageCount = function () { return core.cordova(this, "getInboxMessageCount", {}, arguments); };
    CleverTap.prototype.showInbox = function (styleConfig) { return core.cordova(this, "showInbox", {}, arguments); };
    CleverTap.prototype.getAllInboxMessages = function () { return core.cordova(this, "getAllInboxMessages", {}, arguments); };
    CleverTap.prototype.getUnreadInboxMessages = function () { return core.cordova(this, "getUnreadInboxMessages", {}, arguments); };
    CleverTap.prototype.getInboxMessageForId = function (messageId) { return core.cordova(this, "getInboxMessageForId", {}, arguments); };
    CleverTap.prototype.deleteInboxMessageForId = function (messageId) { return core.cordova(this, "deleteInboxMessageForId", {}, arguments); };
    CleverTap.prototype.deleteInboxMessagesForIds = function (messageIds) { return core.cordova(this, "deleteInboxMessagesForIds", {}, arguments); };
    CleverTap.prototype.markReadInboxMessageForId = function (messageId) { return core.cordova(this, "markReadInboxMessageForId", {}, arguments); };
    CleverTap.prototype.markReadInboxMessagesForIds = function (messageIds) { return core.cordova(this, "markReadInboxMessagesForIds", {}, arguments); };
    CleverTap.prototype.dismissInbox = function () { return core.cordova(this, "dismissInbox", {}, arguments); };
    CleverTap.prototype.pushInboxNotificationViewedEventForId = function (messageId) { return core.cordova(this, "pushInboxNotificationViewedEventForId", {}, arguments); };
    CleverTap.prototype.pushInboxNotificationClickedEventForId = function (messageId) { return core.cordova(this, "pushInboxNotificationClickedEventForId", {}, arguments); };
    CleverTap.prototype.getAllDisplayUnits = function () { return core.cordova(this, "getAllDisplayUnits", {}, arguments); };
    CleverTap.prototype.getDisplayUnitForId = function (id) { return core.cordova(this, "getDisplayUnitForId", {}, arguments); };
    CleverTap.prototype.pushDisplayUnitViewedEventForID = function (id) { return core.cordova(this, "pushDisplayUnitViewedEventForID", {}, arguments); };
    CleverTap.prototype.pushDisplayUnitClickedEventForID = function (id) { return core.cordova(this, "pushDisplayUnitClickedEventForID", {}, arguments); };
    CleverTap.prototype.getFeatureFlag = function (key, defaultValue) { return core.cordova(this, "getFeatureFlag", {}, arguments); };
    CleverTap.prototype.setDefaultsMap = function (defaults) { return core.cordova(this, "setDefaultsMap", {}, arguments); };
    CleverTap.prototype.fetch = function () { return core.cordova(this, "fetch", {}, arguments); };
    CleverTap.prototype.fetchWithMinimumFetchIntervalInSeconds = function (timeInterval) { return core.cordova(this, "fetchWithMinimumFetchIntervalInSeconds", {}, arguments); };
    CleverTap.prototype.activate = function () { return core.cordova(this, "activate", {}, arguments); };
    CleverTap.prototype.fetchAndActivate = function () { return core.cordova(this, "fetchAndActivate", {}, arguments); };
    CleverTap.prototype.setMinimumFetchIntervalInSeconds = function (timeInterval) { return core.cordova(this, "setMinimumFetchIntervalInSeconds", {}, arguments); };
    CleverTap.prototype.getLastFetchTimeStampInMillis = function () { return core.cordova(this, "getLastFetchTimeStampInMillis", {}, arguments); };
    CleverTap.prototype.getString = function (key) { return core.cordova(this, "getString", {}, arguments); };
    CleverTap.prototype.getBoolean = function (key) { return core.cordova(this, "getBoolean", {}, arguments); };
    CleverTap.prototype.getLong = function (key) { return core.cordova(this, "getLong", {}, arguments); };
    CleverTap.prototype.getDouble = function (key) { return core.cordova(this, "getDouble", {}, arguments); };
    CleverTap.prototype.reset = function () { return core.cordova(this, "reset", {}, arguments); };
    CleverTap.prototype.syncVariables = function () { return core.cordova(this, "syncVariables", {}, arguments); };
    CleverTap.prototype.syncVariablesinProd = function (isProduction) { return core.cordova(this, "syncVariablesinProd", {}, arguments); };
    CleverTap.prototype.fetchVariables = function () { return core.cordova(this, "fetchVariables", {}, arguments); };
    CleverTap.prototype.defineVariables = function (variables) { return core.cordova(this, "defineVariables", {}, arguments); };
    CleverTap.prototype.getVariable = function (name) { return core.cordova(this, "getVariable", {}, arguments); };
    CleverTap.prototype.getVariables = function () { return core.cordova(this, "getVariables", {}, arguments); };
    CleverTap.prototype.onVariablesChanged = function () { return core.cordova(this, "onVariablesChanged", {}, arguments); };
    CleverTap.prototype.onValueChanged = function (name) { return core.cordova(this, "onValueChanged", {}, arguments); };
    CleverTap.prototype.promptPushPrimer = function (localInAppObject) { return core.cordova(this, "promptPushPrimer", {}, arguments); };
    CleverTap.prototype.promptForPushPermission = function (showFallbackSettings) { return core.cordova(this, "promptForPushPermission", {}, arguments); };
    CleverTap.prototype.isPushPermissionGranted = function () { return core.cordova(this, "isPushPermissionGranted", {}, arguments); };
    CleverTap.prototype.setDebugLevel = function (level) { return core.cordova(this, "setDebugLevel", {}, arguments); };
    CleverTap.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CleverTap, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CleverTap.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CleverTap });
    CleverTap.pluginName = "CleverTap";
    CleverTap.plugin = "clevertap-cordova";
    CleverTap.pluginRef = "CleverTap";
    CleverTap.repo = "https://github.com/CleverTap/clevertap-cordova";
    CleverTap.platforms = ["Android", "iOS"];
    CleverTap = tslib.__decorate([], CleverTap);
    return CleverTap;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CleverTap, decorators: [{
            type: i0.Injectable
        }], propDecorators: { notifyDeviceReady: [], enablePersonalization: [], disablePersonalization: [], setOptOut: [], setOffline: [], enableDeviceNetworkInfoReporting: [], setLocale: [], registerPush: [], setPushToken: [], setPushXiaomiToken: [], setPushBaiduToken: [], setPushHuaweiToken: [], createNotification: [], createNotificationChannel: [], createNotificationChannelWithSound: [], createNotificationChannelWithGroupId: [], createNotificationChannelWithGroupIdAndSound: [], createNotificationChannelGroup: [], deleteNotificationChannel: [], deleteNotificationChannelGroup: [], recordScreenView: [], recordEventWithName: [], recordEventWithNameAndProps: [], recordChargedEventWithDetailsAndItems: [], eventGetFirstTime: [], eventGetLastTime: [], eventGetOccurrences: [], eventGetDetails: [], getEventHistory: [], getLocation: [], setLocation: [], onUserLogin: [], profileSet: [], profileGetProperty: [], profileGetCleverTapAttributionIdentifier: [], profileGetCleverTapID: [], getCleverTapID: [], profileRemoveValueForKey: [], profileSetMultiValues: [], profileAddMultiValue: [], profileAddMultiValues: [], profileRemoveMultiValue: [], profileRemoveMultiValues: [], profileIncrementValueBy: [], profileDecrementValueBy: [], suspendInAppNotifications: [], discardInAppNotifications: [], resumeInAppNotifications: [], clearInAppResources: [], fetchInApps: [], sessionGetTimeElapsed: [], sessionGetTotalVisits: [], sessionGetScreenCount: [], sessionGetPreviousVisitTime: [], sessionGetUTMDetails: [], pushInstallReferrer: [], initializeInbox: [], getInboxMessageUnreadCount: [], getInboxMessageCount: [], showInbox: [], getAllInboxMessages: [], getUnreadInboxMessages: [], getInboxMessageForId: [], deleteInboxMessageForId: [], deleteInboxMessagesForIds: [], markReadInboxMessageForId: [], markReadInboxMessagesForIds: [], dismissInbox: [], pushInboxNotificationViewedEventForId: [], pushInboxNotificationClickedEventForId: [], getAllDisplayUnits: [], getDisplayUnitForId: [], pushDisplayUnitViewedEventForID: [], pushDisplayUnitClickedEventForID: [], getFeatureFlag: [], setDefaultsMap: [], fetch: [], fetchWithMinimumFetchIntervalInSeconds: [], activate: [], fetchAndActivate: [], setMinimumFetchIntervalInSeconds: [], getLastFetchTimeStampInMillis: [], getString: [], getBoolean: [], getLong: [], getDouble: [], reset: [], syncVariables: [], syncVariablesinProd: [], fetchVariables: [], defineVariables: [], getVariable: [], getVariables: [], onVariablesChanged: [], onValueChanged: [], promptPushPrimer: [], promptForPushPermission: [], isPushPermissionGranted: [], setDebugLevel: [] } });

exports.CleverTap = CleverTap;
