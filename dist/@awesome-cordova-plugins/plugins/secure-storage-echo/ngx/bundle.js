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

var SecureStorageEchoObject = /** @class */ (function () {
    function SecureStorageEchoObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageEchoObject.prototype.get = function (key) { return core.cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.set = function (key, value) { return core.cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.remove = function (key) { return core.cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.keys = function () { return core.cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.clear = function () { return core.cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.secureDevice = function () { return core.cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageEchoObject;
}());
var SecureStorageEcho = /** @class */ (function (_super) {
    tslib.__extends(SecureStorageEcho, _super);
    function SecureStorageEcho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageEcho.prototype.create = function (store, options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (res, rej) {
                    var instance = new (SecureStorageEcho.getPlugin())(function () { return res(new SecureStorageEchoObject(instance)); }, function () { return rej(new SecureStorageEchoObject(instance)); }, store, options);
                });
            }
        })();
    };
    SecureStorageEcho.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecureStorageEcho, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SecureStorageEcho.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecureStorageEcho });
    SecureStorageEcho.pluginName = "SecureStorageEcho";
    SecureStorageEcho.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageEcho.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageEcho.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageEcho.platforms = ["Android", "Browser", "iOS", "Windows"];
    SecureStorageEcho = tslib.__decorate([], SecureStorageEcho);
    return SecureStorageEcho;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecureStorageEcho, decorators: [{
            type: i0.Injectable
        }], propDecorators: { create: [] } });

exports.SecureStorageEcho = SecureStorageEcho;
exports.SecureStorageEchoObject = SecureStorageEchoObject;
