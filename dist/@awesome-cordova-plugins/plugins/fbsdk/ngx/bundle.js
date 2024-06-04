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

var FbSdk = /** @class */ (function (_super) {
    tslib.__extends(FbSdk, _super);
    function FbSdk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0',
        };
        return _this;
    }
    FbSdk.prototype.getApplicationId = function () { return core.cordova(this, "getApplicationId", {}, arguments); };
    FbSdk.prototype.setApplicationId = function (id) { return core.cordova(this, "setApplicationId", {}, arguments); };
    FbSdk.prototype.getApplicationName = function () { return core.cordova(this, "getApplicationName", {}, arguments); };
    FbSdk.prototype.setApplicationName = function (name) { return core.cordova(this, "setApplicationName", {}, arguments); };
    FbSdk.prototype.login = function (permissions) { return core.cordova(this, "login", {}, arguments); };
    FbSdk.prototype.loginWithLimitedTracking = function (permissions) { return core.cordova(this, "loginWithLimitedTracking", {}, arguments); };
    FbSdk.prototype.checkHasCorrectPermissions = function (permissions) { return core.cordova(this, "checkHasCorrectPermissions", {}, arguments); };
    FbSdk.prototype.isDataAccessExpired = function () { return core.cordova(this, "isDataAccessExpired", {}, arguments); };
    FbSdk.prototype.reauthorizeDataAccess = function () { return core.cordova(this, "reauthorizeDataAccess", {}, arguments); };
    FbSdk.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    FbSdk.prototype.getLoginStatus = function () { return core.cordova(this, "getLoginStatus", {}, arguments); };
    FbSdk.prototype.getAccessToken = function () { return core.cordova(this, "getAccessToken", {}, arguments); };
    FbSdk.prototype.getCurrentProfile = function () { return core.cordova(this, "getCurrentProfile", {}, arguments); };
    FbSdk.prototype.showDialog = function (options) { return core.cordova(this, "showDialog", {}, arguments); };
    FbSdk.prototype.api = function (requestPath, permissions, httpMethod) { return core.cordova(this, "api", {}, arguments); };
    FbSdk.prototype.setDataProcessingOptions = function (options, country, state) { return core.cordova(this, "setDataProcessingOptions", {}, arguments); };
    FbSdk.prototype.setUserData = function (userData) { return core.cordova(this, "setUserData", {}, arguments); };
    FbSdk.prototype.clearUserData = function () { return core.cordova(this, "clearUserData", {}, arguments); };
    FbSdk.prototype.logEvent = function (name, params, valueToSum) { return core.cordova(this, "logEvent", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    FbSdk.prototype.setAutoLogAppEventsEnabled = function (enabled) { return core.cordova(this, "setAutoLogAppEventsEnabled", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    FbSdk.prototype.setAdvertiserIDCollectionEnabled = function (enabled) { return core.cordova(this, "setAdvertiserIDCollectionEnabled", {}, arguments); };
    FbSdk.prototype.setAdvertiserTrackingEnabled = function (enabled) { return core.cordova(this, "setAdvertiserTrackingEnabled", {}, arguments); };
    FbSdk.prototype.logPurchase = function (value, currency, params) { return core.cordova(this, "logPurchase", {}, arguments); };
    FbSdk.prototype.getDeferredApplink = function () { return core.cordova(this, "getDeferredApplink", {}, arguments); };
    FbSdk.prototype.activateApp = function () { return core.cordova(this, "activateApp", {}, arguments); };
    FbSdk.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FbSdk, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FbSdk.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FbSdk });
    FbSdk.pluginName = "Facebook";
    FbSdk.plugin = "cordova-plugin-fbsdk";
    FbSdk.pluginRef = "facebookConnectPlugin";
    FbSdk.repo = "https://github.com/MaximBelov/cordova-plugin-fbsdk";
    FbSdk.install = "ionic cordova plugin add cordova-plugin-fbsdk --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\" --variable CLIENT_TOKEN=\"abcd1234\"";
    FbSdk.installVariables = ["APP_ID", "APP_NAME", "CLIENT_TOKEN"];
    FbSdk.platforms = ["Android", "iOS", "Browser"];
    FbSdk = tslib.__decorate([], FbSdk);
    return FbSdk;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FbSdk, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getApplicationId: [], setApplicationId: [], getApplicationName: [], setApplicationName: [], login: [], loginWithLimitedTracking: [], checkHasCorrectPermissions: [], isDataAccessExpired: [], reauthorizeDataAccess: [], logout: [], getLoginStatus: [], getAccessToken: [], getCurrentProfile: [], showDialog: [], api: [], setDataProcessingOptions: [], setUserData: [], clearUserData: [], logEvent: [], setAutoLogAppEventsEnabled: [], setAdvertiserIDCollectionEnabled: [], setAdvertiserTrackingEnabled: [], logPurchase: [], getDeferredApplink: [], activateApp: [] } });

exports.FbSdk = FbSdk;
