'use strict';

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');
var i0 = require('@angular/core');

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

var AppPreferences = /** @class */ (function (_super) {
    tslib.__extends(AppPreferences, _super);
    function AppPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPreferences.prototype.fetch = function (dict, key) { return core.cordova(this, "fetch", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.store = function (dict, key, value) { return core.cordova(this, "store", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.remove = function (dict, key) { return core.cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.clearAll = function () { return core.cordova(this, "clearAll", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.show = function () { return core.cordova(this, "show", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.watch = function (subscribe) { return core.cordova(this, "watch", { "observable": true }, arguments); };
    AppPreferences.prototype.suite = function (suiteName) { return core.cordova(this, "suite", { "platforms": ["Android"], "sync": true }, arguments); };
    AppPreferences.prototype.iosSuite = function (suiteName) { return core.cordova(this, "iosSuite", { "platforms": ["iOS"], "sync": true }, arguments); };
    AppPreferences.prototype.cloudSync = function () { return core.cordova(this, "cloudSync", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferences.prototype.defaults = function () { return core.cordova(this, "defaults", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferences.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppPreferences, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppPreferences.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppPreferences });
    AppPreferences.pluginName = "AppPreferences";
    AppPreferences.plugin = "cordova-plugin-app-preferences";
    AppPreferences.pluginRef = "plugins.appPreferences";
    AppPreferences.repo = "https://github.com/apla/me.apla.cordova.app-preferences";
    AppPreferences.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "macOS", "Windows 8", "Windows Phone"];
    AppPreferences = tslib.__decorate([], AppPreferences);
    return AppPreferences;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppPreferences, decorators: [{
            type: i0.Injectable
        }], propDecorators: { fetch: [], store: [], remove: [], clearAll: [], show: [], watch: [], suite: [], iosSuite: [], cloudSync: [], defaults: [] } });

exports.AppPreferences = AppPreferences;
