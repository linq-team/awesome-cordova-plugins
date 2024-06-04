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

var SecureStorageObject = /** @class */ (function () {
    function SecureStorageObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageObject.prototype.get = function (key) { return core.cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.set = function (key, value) { return core.cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.remove = function (key) { return core.cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.keys = function () { return core.cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.clear = function () { return core.cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.secureDevice = function () { return core.cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageObject;
}());
var SecureStorage = /** @class */ (function (_super) {
    tslib.__extends(SecureStorage, _super);
    function SecureStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorage.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (res, rej) {
                    var instance = new (SecureStorage.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, function () { return rej(new SecureStorageObject(instance)); }, store);
                });
            }
        })();
    };
    SecureStorage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecureStorage, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SecureStorage.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecureStorage });
    SecureStorage.pluginName = "SecureStorage";
    SecureStorage.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorage.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorage.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorage.platforms = ["Android", "Browser", "iOS", "Windows"];
    SecureStorage = tslib.__decorate([], SecureStorage);
    return SecureStorage;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecureStorage, decorators: [{
            type: i0.Injectable
        }], propDecorators: { create: [] } });

exports.SecureStorage = SecureStorage;
exports.SecureStorageObject = SecureStorageObject;
