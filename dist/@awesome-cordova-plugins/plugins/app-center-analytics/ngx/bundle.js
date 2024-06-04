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

var AppCenterAnalytics = /** @class */ (function (_super) {
    tslib.__extends(AppCenterAnalytics, _super);
    function AppCenterAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalytics.prototype.trackEvent = function (eventName, properties) { return core.cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalytics.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalytics.prototype.setEnabled = function (shouldEnable) { return core.cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalytics.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterAnalytics, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppCenterAnalytics.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterAnalytics });
    AppCenterAnalytics.pluginName = "AppCenterAnalytics";
    AppCenterAnalytics.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalytics.pluginRef = "AppCenter.Analytics";
    AppCenterAnalytics.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalytics.platforms = ["Android", "iOS"];
    AppCenterAnalytics = tslib.__decorate([], AppCenterAnalytics);
    return AppCenterAnalytics;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterAnalytics, decorators: [{
            type: i0.Injectable
        }], propDecorators: { trackEvent: [], isEnabled: [], setEnabled: [] } });

exports.AppCenterAnalytics = AppCenterAnalytics;
