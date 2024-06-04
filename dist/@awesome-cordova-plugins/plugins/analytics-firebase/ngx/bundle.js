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

var AnalyticsFirebase = /** @class */ (function (_super) {
    tslib.__extends(AnalyticsFirebase, _super);
    function AnalyticsFirebase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnalyticsFirebase.prototype.logEvent = function (eventName, eventParams) { return core.cordova(this, "logEvent", {}, arguments); };
    AnalyticsFirebase.prototype.resetAnalyticsData = function () { return core.cordova(this, "resetAnalyticsData", {}, arguments); };
    AnalyticsFirebase.prototype.setAnalyticsCollectionEnabled = function (enabled) { return core.cordova(this, "setAnalyticsCollectionEnabled", {}, arguments); };
    AnalyticsFirebase.prototype.setCurrentScreen = function (screenName) { return core.cordova(this, "setCurrentScreen", {}, arguments); };
    AnalyticsFirebase.prototype.setMinimumSessionDuration = function (milliseconds) { return core.cordova(this, "setMinimumSessionDuration", {}, arguments); };
    AnalyticsFirebase.prototype.setSessionTimeoutDuration = function (milliseconds) { return core.cordova(this, "setSessionTimeoutDuration", {}, arguments); };
    AnalyticsFirebase.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    AnalyticsFirebase.prototype.setUserProperty = function (userPropertyName, userPropertyValue) { return core.cordova(this, "setUserProperty", {}, arguments); };
    Object.defineProperty(AnalyticsFirebase.prototype, "DEFAULT_EVENTS", {
        get: function () { return core.cordovaPropertyGet(this, "DEFAULT_EVENTS"); },
        set: function (value) { core.cordovaPropertySet(this, "DEFAULT_EVENTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnalyticsFirebase.prototype, "DEFAULT_PARAMS", {
        get: function () { return core.cordovaPropertyGet(this, "DEFAULT_PARAMS"); },
        set: function (value) { core.cordovaPropertySet(this, "DEFAULT_PARAMS", value); },
        enumerable: false,
        configurable: true
    });
    AnalyticsFirebase.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AnalyticsFirebase, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AnalyticsFirebase.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AnalyticsFirebase });
    AnalyticsFirebase.pluginName = "AnalyticsFirebase";
    AnalyticsFirebase.plugin = "cordova-plugin-analytics";
    AnalyticsFirebase.pluginRef = "analytics";
    AnalyticsFirebase.repo = "https://github.com/appfeel/analytics-google";
    AnalyticsFirebase.platforms = ["Android", "iOS"];
    AnalyticsFirebase = tslib.__decorate([], AnalyticsFirebase);
    return AnalyticsFirebase;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AnalyticsFirebase, decorators: [{
            type: i0.Injectable
        }], propDecorators: { DEFAULT_EVENTS: [], DEFAULT_PARAMS: [], logEvent: [], resetAnalyticsData: [], setAnalyticsCollectionEnabled: [], setCurrentScreen: [], setMinimumSessionDuration: [], setSessionTimeoutDuration: [], setUserId: [], setUserProperty: [] } });

exports.AnalyticsFirebase = AnalyticsFirebase;
