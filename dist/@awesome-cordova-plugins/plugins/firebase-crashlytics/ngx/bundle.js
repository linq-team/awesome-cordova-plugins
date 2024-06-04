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

var FirebaseCrashlytics = /** @class */ (function (_super) {
    tslib.__extends(FirebaseCrashlytics, _super);
    function FirebaseCrashlytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashlytics.prototype.initialise = function () { return core.cordova(this, "initialise", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.crash = function () { return core.cordova(this, "crash", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.logPriority = function (priority, tag, message) { return core.cordova(this, "logPriority", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.log = function (message) { return core.cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.logException = function (message) { return core.cordova(this, "logException", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setString = function (key, value) { return core.cordova(this, "setString", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setBool = function (key, value) { return core.cordova(this, "setBool", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setDouble = function (key, value) { return core.cordova(this, "setDouble", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setFloat = function (key, value) { return core.cordova(this, "setFloat", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setInt = function (key, value) { return core.cordova(this, "setInt", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setUserIdentifier = function (identifier) { return core.cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    FirebaseCrashlytics.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseCrashlytics, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseCrashlytics.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseCrashlytics });
    FirebaseCrashlytics.pluginName = "FirebaseCrashlytics";
    FirebaseCrashlytics.plugin = "cordova-plugin-firebase-crashlytics";
    FirebaseCrashlytics.pluginRef = "FirebaseCrashlytics";
    FirebaseCrashlytics.repo = "https://github.com/ReallySmallSoftware/cordova-plugin-firebase-crashlytics";
    FirebaseCrashlytics.install = "ionic cordova plugin add cordova-plugin-firebase-crashlytics --variable ANDROID_FIREBASE_CORE_VERSION=16.0.0";
    FirebaseCrashlytics.installVariables = ["ANDROID_FIREBASE_CORE_VERSION"];
    FirebaseCrashlytics.platforms = ["Android", "iOS"];
    FirebaseCrashlytics = tslib.__decorate([], FirebaseCrashlytics);
    return FirebaseCrashlytics;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseCrashlytics, decorators: [{
            type: i0.Injectable
        }], propDecorators: { initialise: [], crash: [], logPriority: [], log: [], logException: [], setString: [], setBool: [], setDouble: [], setFloat: [], setInt: [], setUserIdentifier: [] } });

exports.FirebaseCrashlytics = FirebaseCrashlytics;
