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

var AppCenter = /** @class */ (function (_super) {
    tslib.__extends(AppCenter, _super);
    function AppCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenter.prototype.getInstallId = function () { return core.cordova(this, "getInstallId", {}, arguments); };
    AppCenter.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    AppCenter.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenter, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppCenter.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenter });
    AppCenter.pluginName = "AppCenter";
    AppCenter.plugin = "cordova-plugin-appcenter-shared";
    AppCenter.pluginRef = "AppCenter";
    AppCenter.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-shared";
    AppCenter.platforms = ["Android", "iOS"];
    AppCenter = tslib.__decorate([], AppCenter);
    return AppCenter;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenter, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getInstallId: [], setUserId: [] } });

exports.AppCenter = AppCenter;
