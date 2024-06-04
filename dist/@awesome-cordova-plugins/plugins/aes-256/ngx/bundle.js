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

var AES256 = /** @class */ (function (_super) {
    tslib.__extends(AES256, _super);
    function AES256() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AES256.prototype.encrypt = function (secureKey, secureIV, data) { return core.cordova(this, "encrypt", {}, arguments); };
    AES256.prototype.decrypt = function (secureKey, secureIV, data) { return core.cordova(this, "decrypt", {}, arguments); };
    AES256.prototype.generateSecureKey = function (password) { return core.cordova(this, "generateSecureKey", {}, arguments); };
    AES256.prototype.generateSecureIV = function (password) { return core.cordova(this, "generateSecureIV", {}, arguments); };
    AES256.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AES256, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AES256.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AES256 });
    AES256.pluginName = "AES256";
    AES256.plugin = "cordova-plugin-aes256-encryption";
    AES256.pluginRef = "cordova.plugins.AES256";
    AES256.repo = "https://github.com/Ideas2IT/cordova-aes256";
    AES256.platforms = ["Android", "iOS"];
    AES256.install = "ionic cordova plugin add cordova-plugin-aes256-encryption";
    AES256 = tslib.__decorate([], AES256);
    return AES256;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AES256, decorators: [{
            type: i0.Injectable
        }], propDecorators: { encrypt: [], decrypt: [], generateSecureKey: [], generateSecureIV: [] } });

exports.AES256 = AES256;
