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

var AppVersion = /** @class */ (function (_super) {
    tslib.__extends(AppVersion, _super);
    function AppVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppVersion.prototype.getAppName = function () { return core.cordova(this, "getAppName", {}, arguments); };
    AppVersion.prototype.getPackageName = function () { return core.cordova(this, "getPackageName", {}, arguments); };
    AppVersion.prototype.getVersionCode = function () { return core.cordova(this, "getVersionCode", {}, arguments); };
    AppVersion.prototype.getVersionNumber = function () { return core.cordova(this, "getVersionNumber", {}, arguments); };
    AppVersion.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppVersion, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppVersion.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppVersion });
    AppVersion.pluginName = "AppVersion";
    AppVersion.plugin = "cordova-plugin-app-version";
    AppVersion.pluginRef = "cordova.getAppVersion";
    AppVersion.repo = "https://github.com/whiteoctober/cordova-plugin-app-version";
    AppVersion.platforms = ["Android", "iOS", "Windows"];
    AppVersion = tslib.__decorate([], AppVersion);
    return AppVersion;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppVersion, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getAppName: [], getPackageName: [], getVersionCode: [], getVersionNumber: [] } });

exports.AppVersion = AppVersion;
