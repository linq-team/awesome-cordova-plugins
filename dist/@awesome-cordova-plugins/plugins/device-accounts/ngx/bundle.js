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

var DeviceAccounts = /** @class */ (function (_super) {
    tslib.__extends(DeviceAccounts, _super);
    function DeviceAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccounts.prototype.get = function () { return core.cordova(this, "get", {}, arguments); };
    DeviceAccounts.prototype.getByType = function (type) { return core.cordova(this, "getByType", {}, arguments); };
    DeviceAccounts.prototype.getEmails = function () { return core.cordova(this, "getEmails", {}, arguments); };
    DeviceAccounts.prototype.getEmail = function () { return core.cordova(this, "getEmail", {}, arguments); };
    DeviceAccounts.prototype.getPermissions = function () { return core.cordova(this, "getPermissions", {}, arguments); };
    DeviceAccounts.prototype.getPermissionsByType = function (type) { return core.cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccounts.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceAccounts, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DeviceAccounts.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceAccounts });
    DeviceAccounts.pluginName = "DeviceAccounts";
    DeviceAccounts.plugin = "cordova-device-accounts-v2";
    DeviceAccounts.pluginRef = "DeviceAccounts";
    DeviceAccounts.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccounts.platforms = ["Android"];
    DeviceAccounts = tslib.__decorate([], DeviceAccounts);
    return DeviceAccounts;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceAccounts, decorators: [{
            type: i0.Injectable
        }], propDecorators: { get: [], getByType: [], getEmails: [], getEmail: [], getPermissions: [], getPermissionsByType: [] } });

exports.DeviceAccounts = DeviceAccounts;
