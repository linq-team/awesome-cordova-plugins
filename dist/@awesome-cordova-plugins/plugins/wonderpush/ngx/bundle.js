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

var NestedObject = /** @class */ (function () {
    function NestedObject(pluginObj) {
        this.pluginObj = pluginObj;
    }
    NestedObject.prototype.wrap = function (functionName, args) {
        var plugin = WonderPush.getPlugin();
        var userPreferences = plugin ? plugin.UserPreferences : null;
        if (!plugin || !userPreferences || !userPreferences[functionName]) {
            return core.getPromise(function (res, rej) {
                rej(new Error('Could not find plugin'));
            });
        }
        return core.getPromise(function (res, rej) {
            userPreferences[functionName].apply(userPreferences, tslib.__spreadArray(tslib.__spreadArray([], args), [res]));
        });
    };
    return NestedObject;
}());
var UserPreferencesMethods = /** @class */ (function (_super) {
    tslib.__extends(UserPreferencesMethods, _super);
    function UserPreferencesMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the default channel id
     *
     * @returns {Promise<string>}
     */
    UserPreferencesMethods.prototype.getDefaultChannelId = function () {
        return this.wrap('getDefaultChannelId', []);
    };
    /**
     * Set the default channel id
     *
     * @param {string} id
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setDefaultChannelId = function (id) {
        return this.wrap('setDefaultChannelId', [id]);
    };
    /**
     * Get a channel group
     *
     * @param {string} groupId
     * @returns {Promise<WonderPushChannelGroup | null>}
     */
    UserPreferencesMethods.prototype.getChannelGroup = function (groupId) {
        return this.wrap('getChannelGroup', [groupId]);
    };
    /**
     * Get a channel
     *
     * @param {string} channelId
     * @returns {Promise<WonderPushChannel | null>}
     */
    UserPreferencesMethods.prototype.getChannel = function (channelId) {
        return this.wrap('getChannel', [channelId]);
    };
    /**
     * Create, update and remove channel existing groups to match the given channel groups
     *
     * @param {WonderPushChannelGroup[]} channelGroups
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setChannelGroups = function (channelGroups) {
        return this.wrap('setChannelGroups', [channelGroups]);
    };
    /**
     * Create, update and remove channels to match the given channels
     *
     * @param {WonderPushChannel[]} channels
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setChannels = function (channels) {
        return this.wrap('setChannels', [channels]);
    };
    /**
     * Create or update a channel group
     *
     * @param {WonderPushChannelGroup} channelGroup
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.putChannelGroup = function (channelGroup) {
        return this.wrap('putChannelGroup', [channelGroup]);
    };
    /**
     * Create or update a channel
     *
     * @param {WonderPushChannel} channel
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.putChannel = function (channel) {
        return this.wrap('putChannel', [channel]);
    };
    /**
     * Remove a channel group
     *
     * @param {string} groupId
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.removeChannelGroup = function (groupId) {
        return this.wrap('removeChannelGroup', [groupId]);
    };
    /**
     * Remove a channel
     *
     * @param {string} channelId
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.removeChannel = function (channelId) {
        return this.wrap('removeChannel', [channelId]);
    };
    return UserPreferencesMethods;
}(NestedObject));
var WonderPush = /** @class */ (function (_super) {
    tslib.__extends(WonderPush, _super);
    function WonderPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UserPreferences = new UserPreferencesMethods(_this);
        return _this;
    }
    WonderPush.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    WonderPush.prototype.setLogging = function (enabled) { return core.cordova(this, "setLogging", {}, arguments); };
    WonderPush.prototype.setDelegate = function (delegate) { return core.cordova(this, "setDelegate", {}, arguments); };
    WonderPush.prototype.getDelegate = function () { return core.cordova(this, "getDelegate", {}, arguments); };
    WonderPush.prototype.getUserId = function () { return core.cordova(this, "getUserId", {}, arguments); };
    WonderPush.prototype.getInstallationId = function () { return core.cordova(this, "getInstallationId", {}, arguments); };
    WonderPush.prototype.getDeviceId = function () { return core.cordova(this, "getDeviceId", {}, arguments); };
    WonderPush.prototype.getPushToken = function () { return core.cordova(this, "getPushToken", {}, arguments); };
    WonderPush.prototype.getAccessToken = function () { return core.cordova(this, "getAccessToken", {}, arguments); };
    WonderPush.prototype.trackEvent = function (type, attributes) { return core.cordova(this, "trackEvent", {}, arguments); };
    WonderPush.prototype.addTag = function (tag) { return core.cordova(this, "addTag", {}, arguments); };
    WonderPush.prototype.removeTag = function (tag) { return core.cordova(this, "removeTag", {}, arguments); };
    WonderPush.prototype.removeAllTags = function () { return core.cordova(this, "removeAllTags", {}, arguments); };
    WonderPush.prototype.getTags = function () { return core.cordova(this, "getTags", {}, arguments); };
    WonderPush.prototype.hasTag = function (tag) { return core.cordova(this, "hasTag", {}, arguments); };
    WonderPush.prototype.setProperty = function (field, value) { return core.cordova(this, "setProperty", {}, arguments); };
    WonderPush.prototype.unsetProperty = function (field) { return core.cordova(this, "unsetProperty", {}, arguments); };
    WonderPush.prototype.addProperty = function (field, value) { return core.cordova(this, "addProperty", {}, arguments); };
    WonderPush.prototype.removeProperty = function (field, value) { return core.cordova(this, "removeProperty", {}, arguments); };
    WonderPush.prototype.getPropertyValue = function (field) { return core.cordova(this, "getPropertyValue", {}, arguments); };
    WonderPush.prototype.getPropertyValues = function (field) { return core.cordova(this, "getPropertyValues", {}, arguments); };
    WonderPush.prototype.getProperties = function () { return core.cordova(this, "getProperties", {}, arguments); };
    WonderPush.prototype.putProperties = function (properties) { return core.cordova(this, "putProperties", {}, arguments); };
    WonderPush.prototype.subscribeToNotifications = function () { return core.cordova(this, "subscribeToNotifications", {}, arguments); };
    WonderPush.prototype.isSubscribedToNotifications = function () { return core.cordova(this, "isSubscribedToNotifications", {}, arguments); };
    WonderPush.prototype.unsubscribeFromNotifications = function () { return core.cordova(this, "unsubscribeFromNotifications", {}, arguments); };
    WonderPush.prototype.getUserConsent = function () { return core.cordova(this, "getUserConsent", {}, arguments); };
    WonderPush.prototype.setUserConsent = function (consent) { return core.cordova(this, "setUserConsent", {}, arguments); };
    WonderPush.prototype.clearAllData = function () { return core.cordova(this, "clearAllData", {}, arguments); };
    WonderPush.prototype.clearEventsHistory = function () { return core.cordova(this, "clearEventsHistory", {}, arguments); };
    WonderPush.prototype.clearPreferences = function () { return core.cordova(this, "clearPreferences", {}, arguments); };
    WonderPush.prototype.downloadAllData = function () { return core.cordova(this, "downloadAllData", {}, arguments); };
    WonderPush.prototype.getCountry = function () { return core.cordova(this, "getCountry", {}, arguments); };
    WonderPush.prototype.setCountry = function (country) { return core.cordova(this, "setCountry", {}, arguments); };
    WonderPush.prototype.getCurrency = function () { return core.cordova(this, "getCurrency", {}, arguments); };
    WonderPush.prototype.setCurrency = function (currency) { return core.cordova(this, "setCurrency", {}, arguments); };
    WonderPush.prototype.getLocale = function () { return core.cordova(this, "getLocale", {}, arguments); };
    WonderPush.prototype.setLocale = function (locale) { return core.cordova(this, "setLocale", {}, arguments); };
    WonderPush.prototype.getTimeZone = function () { return core.cordova(this, "getTimeZone", {}, arguments); };
    WonderPush.prototype.setTimeZone = function (timeZone) { return core.cordova(this, "setTimeZone", {}, arguments); };
    WonderPush.prototype.enableGeolocation = function () { return core.cordova(this, "enableGeolocation", {}, arguments); };
    WonderPush.prototype.disableGeolocation = function () { return core.cordova(this, "disableGeolocation", {}, arguments); };
    WonderPush.prototype.setGeolocation = function (latitude, longitude) { return core.cordova(this, "setGeolocation", {}, arguments); };
    WonderPush.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WonderPush, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WonderPush.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WonderPush });
    WonderPush.pluginName = "WonderPush";
    WonderPush.plugin = "wonderpush-cordova-sdk";
    WonderPush.pluginRef = "WonderPush";
    WonderPush.repo = "https://github.com/wonderpush/wonderpush-cordova-sdk";
    WonderPush.install = "ionic cordova plugin add wonderpush-cordova-sdk --variable CLIENT_ID=YOUR_CLIENT_ID --variable CLIENT_SECRET=YOUR_CLIENT_SECRET ";
    WonderPush.installVariables = ["CLIENT_ID", "CLIENT_SECRET"];
    WonderPush.platforms = ["Android", "iOS"];
    WonderPush = tslib.__decorate([], WonderPush);
    return WonderPush;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WonderPush, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setUserId: [], setLogging: [], setDelegate: [], getDelegate: [], getUserId: [], getInstallationId: [], getDeviceId: [], getPushToken: [], getAccessToken: [], trackEvent: [], addTag: [], removeTag: [], removeAllTags: [], getTags: [], hasTag: [], setProperty: [], unsetProperty: [], addProperty: [], removeProperty: [], getPropertyValue: [], getPropertyValues: [], getProperties: [], putProperties: [], subscribeToNotifications: [], isSubscribedToNotifications: [], unsubscribeFromNotifications: [], getUserConsent: [], setUserConsent: [], clearAllData: [], clearEventsHistory: [], clearPreferences: [], downloadAllData: [], getCountry: [], setCountry: [], getCurrency: [], setCurrency: [], getLocale: [], setLocale: [], getTimeZone: [], setTimeZone: [], enableGeolocation: [], disableGeolocation: [], setGeolocation: [] } });

exports.NestedObject = NestedObject;
exports.UserPreferencesMethods = UserPreferencesMethods;
exports.WonderPush = WonderPush;
