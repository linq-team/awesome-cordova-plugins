'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
var rxjs = require('rxjs');

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

var Airship = /** @class */ (function (_super) {
    tslib.__extends(Airship, _super);
    function Airship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Call after platform ready
     */
    Airship.prototype.initialize = function () {
        this.channel = new AirshipChannel();
        this.contact = new AirshipContact();
        this.push = new AirshipPush();
    };
    Airship.prototype.takeOff = function (config) { return core.cordova(this, "takeOff", { "sync": true }, arguments); };
    Airship.prototype.isFlying = function () { return core.cordova(this, "isFlying", {}, arguments); };
    Airship.prototype.onDeepLink = function () { return core.cordova(this, "onDeepLink", { "observable": true }, arguments); };
    Airship.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Airship, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Airship.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Airship });
    Airship.pluginName = "Airship";
    Airship.plugin = "@ua/cordova-airship";
    Airship.pluginRef = "Airship";
    Airship.repo = "https://www.npmjs.com/package/@ua/cordova-airship";
    Airship.install = "ionic cordova plugin add @ua/cordova-airship";
    Airship.platforms = ["Android", "iOS"];
    Airship = tslib.__decorate([], Airship);
    return Airship;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Airship, decorators: [{
            type: i0.Injectable
        }], propDecorators: { takeOff: [], isFlying: [], onDeepLink: [] } });
/**
 * iOS options
 */
exports.iOS = void 0;
(function (iOS) {
    (function (NotificationOption) {
        /**
         * Alerts.
         */
        NotificationOption["Alert"] = "alert";
        /**
         * Sounds.
         */
        NotificationOption["Sound"] = "sound";
        /**
         * Badges.
         */
        NotificationOption["Badge"] = "badge";
        /**
         * Car play.
         */
        NotificationOption["CarPlay"] = "car_play";
        /**
         * Critical Alert.
         */
        NotificationOption["CriticalAlert"] = "critical_alert";
        /**
         * Provides app notification settings.
         */
        NotificationOption["ProvidesAppNotificationSettings"] = "provides_app_notification_settings";
        /**
         * Provisional.
         */
        NotificationOption["Provisional"] = "provisional";
    })(iOS.NotificationOption || (iOS.NotificationOption = {}));
    (function (ForegroundPresentationOption) {
        /**
         * Play the sound associated with the notification.
         */
        ForegroundPresentationOption["Sound"] = "sound";
        /**
         * Apply the notification's badge value to the app’s icon.
         */
        ForegroundPresentationOption["Badge"] = "badge";
        /**
         * Show the notification in Notification Center. On iOS 13 an older,
         * this will also show the notification as a banner.
         */
        ForegroundPresentationOption["List"] = "list";
        /**
         * Present the notification as a banner. On iOS 13 an older,
         * this will also show the notification in the Notification Center.
         */
        ForegroundPresentationOption["Banner"] = "banner";
    })(iOS.ForegroundPresentationOption || (iOS.ForegroundPresentationOption = {}));
    (function (AuthorizedNotificationSetting) {
        /**
         * Alerts.
         */
        AuthorizedNotificationSetting["Alert"] = "alert";
        /**
         * Sounds.
         */
        AuthorizedNotificationSetting["Sound"] = "sound";
        /**
         * Badges.
         */
        AuthorizedNotificationSetting["Badge"] = "badge";
        /**
         * CarPlay.
         */
        AuthorizedNotificationSetting["CarPlay"] = "car_play";
        /**
         * Lock screen.
         */
        AuthorizedNotificationSetting["LockScreen"] = "lock_screen";
        /**
         * Notification center.
         */
        AuthorizedNotificationSetting["NotificationCenter"] = "notification_center";
        /**
         * Critical alert.
         */
        AuthorizedNotificationSetting["CriticalAlert"] = "critical_alert";
        /**
         * Announcement.
         */
        AuthorizedNotificationSetting["Announcement"] = "announcement";
        /**
         * Scheduled delivery.
         */
        AuthorizedNotificationSetting["ScheduledDelivery"] = "scheduled_delivery";
        /**
         * Time sensitive.
         */
        AuthorizedNotificationSetting["TimeSensitive"] = "time_sensitive";
    })(iOS.AuthorizedNotificationSetting || (iOS.AuthorizedNotificationSetting = {}));
    (function (AuthorizedNotificationStatus) {
        /**
         * Not determined.
         */
        AuthorizedNotificationStatus["NotDetermined"] = "not_determined";
        /**
         * Denied.
         */
        AuthorizedNotificationStatus["Denied"] = "denied";
        /**
         * Authorized.
         */
        AuthorizedNotificationStatus["Authorized"] = "authorized";
        /**
         * Provisional.
         */
        AuthorizedNotificationStatus["Provisional"] = "provisional";
        /**
         * Ephemeral.
         */
        AuthorizedNotificationStatus["Ephemeral"] = "ephemeral";
    })(iOS.AuthorizedNotificationStatus || (iOS.AuthorizedNotificationStatus = {}));
})(exports.iOS || (exports.iOS = {}));
/**
 * Enum of authorized Features.
 */
exports.Feature = void 0;
(function (Feature) {
    Feature["InAppAutomation"] = "in_app_automation";
    Feature["MessageCenter"] = "message_center";
    Feature["Push"] = "push";
    Feature["Analytics"] = "analytics";
    Feature["TagsAndAttributes"] = "tags_and_attributes";
    Feature["Contacts"] = "contacts";
})(exports.Feature || (exports.Feature = {}));
/**
 * All available features.
 */
var FEATURES_ALL = Object.values(exports.Feature);
/**
 * Subscription Scope types.
 */
exports.SubscriptionScope = void 0;
(function (SubscriptionScope) {
    SubscriptionScope["App"] = "app";
    SubscriptionScope["Web"] = "web";
    SubscriptionScope["Sms"] = "sms";
    SubscriptionScope["Email"] = "email";
})(exports.SubscriptionScope || (exports.SubscriptionScope = {}));
var AirshipPush = /** @class */ (function () {
    function AirshipPush() {
        this._objectInstance = window.Airship.push;
    }
    AirshipPush.prototype.setUserNotificationsEnabled = function (enabled) { return core.cordovaInstance(this, "setUserNotificationsEnabled", {}, arguments); };
    AirshipPush.prototype.isUserNotificationsEnabled = function () { return core.cordovaInstance(this, "isUserNotificationsEnabled", {}, arguments); };
    AirshipPush.prototype.getNotificationStatus = function () { return core.cordovaInstance(this, "getNotificationStatus", {}, arguments); };
    /**
     * Event when the notification status has changed.
     */
    AirshipPush.prototype.onNotificationStatusChanged = function () {
        return this.listenerToObservable('onNotificationStatusChanged');
    };
    AirshipPush.prototype.getPushToken = function () { return core.cordovaInstance(this, "getPushToken", {}, arguments); };
    AirshipPush.prototype.getActiveNotifications = function () { return core.cordovaInstance(this, "getActiveNotifications", {}, arguments); };
    AirshipPush.prototype.clearNotifications = function () { return core.cordovaInstance(this, "clearNotifications", {}, arguments); };
    AirshipPush.prototype.clearNotification = function (identifier) { return core.cordovaInstance(this, "clearNotification", {}, arguments); };
    /**
     * Push received listener.
     */
    AirshipPush.prototype.onPushReceived = function () {
        return this.listenerToObservable('onPushReceived');
    };
    /**
     * Notification response listener.
     */
    AirshipPush.prototype.onNotificationResponse = function () {
        return this.listenerToObservable('onNotificationResponse');
    };
    /**
     * Push token listener.
     */
    AirshipPush.prototype.onPushTokenReceived = function () {
        return this.listenerToObservable('onPushTokenReceived');
    };
    AirshipPush.prototype.listenerToObservable = function (fnName) {
        var _this = this;
        return new rxjs.Observable(function (observer) {
            var cans = _this._objectInstance[fnName](observer.next.bind(observer));
            return function () {
                console.log('cancel', fnName);
                cans.cancel();
            };
        });
    };
    Object.defineProperty(AirshipPush.prototype, "android", {
        get: function () { return core.instancePropertyGet(this, "android"); },
        set: function (value) { core.instancePropertySet(this, "android", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AirshipPush.prototype, "ios", {
        get: function () { return core.instancePropertyGet(this, "ios"); },
        set: function (value) { core.instancePropertySet(this, "ios", value); },
        enumerable: false,
        configurable: true
    });
    return AirshipPush;
}());
var AirshipContact = /** @class */ (function () {
    function AirshipContact() {
        this._objectInstance = window.Airship.contact;
    }
    AirshipContact.prototype.editAttributes = function () { return core.cordovaInstance(this, "editAttributes", { "sync": true }, arguments); };
    AirshipContact.prototype.editSubscriptionLists = function () { return core.cordovaInstance(this, "editSubscriptionLists", { "sync": true }, arguments); };
    AirshipContact.prototype.editTagGroups = function () { return core.cordovaInstance(this, "editTagGroups", { "sync": true }, arguments); };
    AirshipContact.prototype.getNamedUserId = function () { return core.cordovaInstance(this, "getNamedUserId", {}, arguments); };
    AirshipContact.prototype.getSubscriptionLists = function () { return core.cordovaInstance(this, "getSubscriptionLists", {}, arguments); };
    AirshipContact.prototype.identify = function (namedUser) { return core.cordovaInstance(this, "identify", {}, arguments); };
    AirshipContact.prototype.notifyRemoteLogin = function () { return core.cordovaInstance(this, "notifyRemoteLogin", {}, arguments); };
    AirshipContact.prototype.reset = function () { return core.cordovaInstance(this, "reset", {}, arguments); };
    return AirshipContact;
}());
var AirshipChannel = /** @class */ (function () {
    function AirshipChannel() {
        this._objectInstance = window.Airship.channel;
    }
    AirshipChannel.prototype.enableChannelCreation = function () { return core.cordovaInstance(this, "enableChannelCreation", {}, arguments); };
    AirshipChannel.prototype.editTags = function () { return core.cordovaInstance(this, "editTags", { "sync": true }, arguments); };
    AirshipChannel.prototype.getTags = function () { return core.cordovaInstance(this, "getTags", {}, arguments); };
    AirshipChannel.prototype.getChannelId = function () { return core.cordovaInstance(this, "getChannelId", {}, arguments); };
    AirshipChannel.prototype.getSubscriptionLists = function () { return core.cordovaInstance(this, "getSubscriptionLists", {}, arguments); };
    AirshipChannel.prototype.editTagGroups = function () { return core.cordovaInstance(this, "editTagGroups", { "sync": true }, arguments); };
    AirshipChannel.prototype.editAttributes = function () { return core.cordovaInstance(this, "editAttributes", { "sync": true }, arguments); };
    AirshipChannel.prototype.editSubscriptionLists = function () { return core.cordovaInstance(this, "editSubscriptionLists", { "sync": true }, arguments); };
    AirshipChannel.prototype.onChannelCreated = function () { return core.cordovaInstance(this, "onChannelCreated", { "observable": true, "successIndex": 0 }, arguments); };
    return AirshipChannel;
}());

exports.Airship = Airship;
exports.AirshipChannel = AirshipChannel;
exports.AirshipContact = AirshipContact;
exports.AirshipPush = AirshipPush;
exports.FEATURES_ALL = FEATURES_ALL;
