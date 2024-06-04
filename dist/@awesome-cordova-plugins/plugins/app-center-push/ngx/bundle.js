'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

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

var AppCenterPush = /** @class */ (function (_super) {
    tslib.__extends(AppCenterPush, _super);
    function AppCenterPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPush.prototype.addEventListener = function (eventName) { return core.cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPush.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    AppCenterPush.prototype.setEnabled = function (shouldEnable) { return core.cordova(this, "setEnabled", {}, arguments); };
    AppCenterPush.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterPush, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppCenterPush.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterPush });
    AppCenterPush.pluginName = "AppCenterPush";
    AppCenterPush.plugin = "cordova-plugin-appcenter-push";
    AppCenterPush.pluginRef = "AppCenter.Push";
    AppCenterPush.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPush.platforms = ["Android", "iOS"];
    AppCenterPush = tslib.__decorate([], AppCenterPush);
    return AppCenterPush;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppCenterPush, decorators: [{
            type: i0.Injectable
        }], propDecorators: { addEventListener: [], isEnabled: [], setEnabled: [] } });

exports.AppCenterPush = AppCenterPush;
