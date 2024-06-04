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

var BuildInfo = /** @class */ (function (_super) {
    tslib.__extends(BuildInfo, _super);
    function BuildInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuildInfo.prototype, "baseUrl", {
        get: function () { return core.cordovaPropertyGet(this, "baseUrl"); },
        set: function (value) { core.cordovaPropertySet(this, "baseUrl", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "packageName", {
        get: function () { return core.cordovaPropertyGet(this, "packageName"); },
        set: function (value) { core.cordovaPropertySet(this, "packageName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "basePackageName", {
        get: function () { return core.cordovaPropertyGet(this, "basePackageName"); },
        set: function (value) { core.cordovaPropertySet(this, "basePackageName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "displayName", {
        get: function () { return core.cordovaPropertyGet(this, "displayName"); },
        set: function (value) { core.cordovaPropertySet(this, "displayName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "name", {
        get: function () { return core.cordovaPropertyGet(this, "name"); },
        set: function (value) { core.cordovaPropertySet(this, "name", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "version", {
        get: function () { return core.cordovaPropertyGet(this, "version"); },
        set: function (value) { core.cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "versionCode", {
        get: function () { return core.cordovaPropertyGet(this, "versionCode"); },
        set: function (value) { core.cordovaPropertySet(this, "versionCode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "debug", {
        get: function () { return core.cordovaPropertyGet(this, "debug"); },
        set: function (value) { core.cordovaPropertySet(this, "debug", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "buildType", {
        get: function () { return core.cordovaPropertyGet(this, "buildType"); },
        set: function (value) { core.cordovaPropertySet(this, "buildType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "flavor", {
        get: function () { return core.cordovaPropertyGet(this, "flavor"); },
        set: function (value) { core.cordovaPropertySet(this, "flavor", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "buildDate", {
        get: function () { return core.cordovaPropertyGet(this, "buildDate"); },
        set: function (value) { core.cordovaPropertySet(this, "buildDate", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "installDate", {
        get: function () { return core.cordovaPropertyGet(this, "installDate"); },
        set: function (value) { core.cordovaPropertySet(this, "installDate", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "windows", {
        get: function () { return core.cordovaPropertyGet(this, "windows"); },
        set: function (value) { core.cordovaPropertySet(this, "windows", value); },
        enumerable: false,
        configurable: true
    });
    BuildInfo.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BuildInfo, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BuildInfo.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BuildInfo });
    BuildInfo.pluginName = "BuildInfo";
    BuildInfo.plugin = "cordova-plugin-buildinfo";
    BuildInfo.pluginRef = "BuildInfo";
    BuildInfo.repo = "https://github.com/lynrin/cordova-plugin-buildinfo";
    BuildInfo.platforms = ["Android", "iOS", "Windows", "macOS", "browser", "Electron"];
    BuildInfo = tslib.__decorate([], BuildInfo);
    return BuildInfo;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BuildInfo, decorators: [{
            type: i0.Injectable
        }], propDecorators: { baseUrl: [], packageName: [], basePackageName: [], displayName: [], name: [], version: [], versionCode: [], debug: [], buildType: [], flavor: [], buildDate: [], installDate: [], windows: [] } });

exports.BuildInfo = BuildInfo;
