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

var SystemAlertWindowPermission = /** @class */ (function (_super) {
    tslib.__extends(SystemAlertWindowPermission, _super);
    function SystemAlertWindowPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermission.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.openNotificationSettings = function () { return core.cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermission.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemAlertWindowPermission, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SystemAlertWindowPermission.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemAlertWindowPermission });
    SystemAlertWindowPermission.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermission.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermission.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermission.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.platforms = ["Android"];
    SystemAlertWindowPermission = tslib.__decorate([], SystemAlertWindowPermission);
    return SystemAlertWindowPermission;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemAlertWindowPermission, decorators: [{
            type: i0.Injectable
        }], propDecorators: { hasPermission: [], requestPermission: [], openNotificationSettings: [] } });

exports.SystemAlertWindowPermission = SystemAlertWindowPermission;
