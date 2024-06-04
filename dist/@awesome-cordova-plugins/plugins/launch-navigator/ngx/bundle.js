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

var LaunchNavigator = /** @class */ (function (_super) {
    tslib.__extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit',
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit',
        };
        return _this;
    }
    LaunchNavigator.prototype.navigate = function (destination, options) { return core.cordova(this, "navigate", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    LaunchNavigator.prototype.isAppAvailable = function (app) { return core.cordova(this, "isAppAvailable", {}, arguments); };
    LaunchNavigator.prototype.availableApps = function () { return core.cordova(this, "availableApps", {}, arguments); };
    LaunchNavigator.prototype.getAppDisplayName = function (app) { return core.cordova(this, "getAppDisplayName", { "sync": true }, arguments); };
    LaunchNavigator.prototype.getAppsForPlatform = function (platform) { return core.cordova(this, "getAppsForPlatform", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsTransportMode = function (app, platform) { return core.cordova(this, "supportsTransportMode", { "sync": true }, arguments); };
    LaunchNavigator.prototype.getTransportModes = function (app, platform) { return core.cordova(this, "getTransportModes", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsDestName = function (app, platform) { return core.cordova(this, "supportsDestName", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsStart = function (app, platform) { return core.cordova(this, "supportsStart", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsStartName = function (app, platform) { return core.cordova(this, "supportsStartName", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsLaunchMode = function (app, platform) { return core.cordova(this, "supportsLaunchMode", { "sync": true }, arguments); };
    LaunchNavigator.prototype.userSelect = function (destination, options) { return core.cordova(this, "userSelect", { "sync": true }, arguments); };
    Object.defineProperty(LaunchNavigator.prototype, "appSelection", {
        get: function () { return core.cordovaPropertyGet(this, "appSelection"); },
        set: function (value) { core.cordovaPropertySet(this, "appSelection", value); },
        enumerable: false,
        configurable: true
    });
    LaunchNavigator.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LaunchNavigator, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LaunchNavigator.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LaunchNavigator });
    LaunchNavigator.pluginName = "LaunchNavigator";
    LaunchNavigator.plugin = "uk.co.workingedge.phonegap.plugin.launchnavigator";
    LaunchNavigator.pluginRef = "launchnavigator";
    LaunchNavigator.repo = "https://github.com/dpa99c/phonegap-launch-navigator";
    LaunchNavigator.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    LaunchNavigator = tslib.__decorate([], LaunchNavigator);
    return LaunchNavigator;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LaunchNavigator, decorators: [{
            type: i0.Injectable
        }], propDecorators: { appSelection: [], navigate: [], isAppAvailable: [], availableApps: [], getAppDisplayName: [], getAppsForPlatform: [], supportsTransportMode: [], getTransportModes: [], supportsDestName: [], supportsStart: [], supportsStartName: [], supportsLaunchMode: [], userSelect: [] } });

exports.LaunchNavigator = LaunchNavigator;
