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

var FirebaseAnalytics = /** @class */ (function (_super) {
    tslib.__extends(FirebaseAnalytics, _super);
    function FirebaseAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAnalytics.prototype.logEvent = function (name, params) { return core.cordova(this, "logEvent", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setUserId = function (id) { return core.cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setUserProperty = function (name, value) { return core.cordova(this, "setUserProperty", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setEnabled = function (enabled) { return core.cordova(this, "setEnabled", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setCurrentScreen = function (name) { return core.cordova(this, "setCurrentScreen", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.resetAnalyticsData = function () { return core.cordova(this, "resetAnalyticsData", { "sync": true }, arguments); };
    FirebaseAnalytics.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseAnalytics, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseAnalytics.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseAnalytics });
    FirebaseAnalytics.pluginName = "FirebaseAnalytics";
    FirebaseAnalytics.plugin = "cordova-plugin-firebase-analytics";
    FirebaseAnalytics.pluginRef = "cordova.plugins.firebase.analytics";
    FirebaseAnalytics.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-analytics";
    FirebaseAnalytics.platforms = ["Android", "iOS"];
    FirebaseAnalytics = tslib.__decorate([], FirebaseAnalytics);
    return FirebaseAnalytics;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseAnalytics, decorators: [{
            type: i0.Injectable
        }], propDecorators: { logEvent: [], setUserId: [], setUserProperty: [], setEnabled: [], setCurrentScreen: [], resetAnalyticsData: [] } });

exports.FirebaseAnalytics = FirebaseAnalytics;
