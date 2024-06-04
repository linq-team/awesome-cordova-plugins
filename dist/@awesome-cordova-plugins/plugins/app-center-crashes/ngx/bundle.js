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

var AppCenterCrashes = /** @class */ (function (_super) {
    tslib.__extends(AppCenterCrashes, _super);
    function AppCenterCrashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterCrashes.prototype.generateTestCrash = function () { return core.cordova(this, "generateTestCrash", {}, arguments); };
    AppCenterCrashes.prototype.hasCrashedInLastSession = function () { return core.cordova(this, "hasCrashedInLastSession", {}, arguments); };
    AppCenterCrashes.prototype.lastSessionCrashReport = function () { return core.cordova(this, "lastSessionCrashReport", {}, arguments); };
    AppCenterCrashes.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    AppCenterCrashes.prototype.setEnabled = function (shouldEnable) { return core.cordova(this, "setEnabled", {}, arguments); };
    AppCenterCrashes.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterCrashes, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppCenterCrashes.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterCrashes });
    AppCenterCrashes.pluginName = "AppCenterCrashes";
    AppCenterCrashes.plugin = "cordova-plugin-appcenter-crashes";
    AppCenterCrashes.pluginRef = "AppCenter.Crashes";
    AppCenterCrashes.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes";
    AppCenterCrashes.platforms = ["Android", "iOS"];
    AppCenterCrashes = tslib.__decorate([], AppCenterCrashes);
    return AppCenterCrashes;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterCrashes, decorators: [{
            type: i0.Injectable
        }], propDecorators: { generateTestCrash: [], hasCrashedInLastSession: [], lastSessionCrashReport: [], isEnabled: [], setEnabled: [] } });

exports.AppCenterCrashes = AppCenterCrashes;
