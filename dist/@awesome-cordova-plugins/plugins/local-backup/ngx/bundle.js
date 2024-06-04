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

var LocalBackup = /** @class */ (function (_super) {
    tslib.__extends(LocalBackup, _super);
    function LocalBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackup.prototype.create = function (data) { return core.cordova(this, "create", {}, arguments); };
    LocalBackup.prototype.read = function () { return core.cordova(this, "read", {}, arguments); };
    LocalBackup.prototype.exists = function () { return core.cordova(this, "exists", {}, arguments); };
    LocalBackup.prototype.remove = function () { return core.cordova(this, "remove", {}, arguments); };
    LocalBackup.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalBackup, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocalBackup.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalBackup });
    LocalBackup.pluginName = "LocalBackup";
    LocalBackup.plugin = "cordova-plugin-local-backup";
    LocalBackup.pluginRef = "LocalBackup";
    LocalBackup.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackup.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackup.platforms = ["Android", "iOS"];
    LocalBackup = tslib.__decorate([], LocalBackup);
    return LocalBackup;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalBackup, decorators: [{
            type: i0.Injectable
        }], propDecorators: { create: [], read: [], exists: [], remove: [] } });

exports.LocalBackup = LocalBackup;
