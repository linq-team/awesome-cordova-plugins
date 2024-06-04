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

exports.BIOMETRIC_ERRORS = void 0;
(function (BIOMETRIC_ERRORS) {
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_UNKNOWN_ERROR"] = -100] = "BIOMETRIC_UNKNOWN_ERROR";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_UNAVAILABLE"] = -101] = "BIOMETRIC_UNAVAILABLE";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_AUTHENTICATION_FAILED"] = -102] = "BIOMETRIC_AUTHENTICATION_FAILED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_SDK_NOT_SUPPORTED"] = -103] = "BIOMETRIC_SDK_NOT_SUPPORTED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_HARDWARE_NOT_SUPPORTED"] = -104] = "BIOMETRIC_HARDWARE_NOT_SUPPORTED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_PERMISSION_NOT_GRANTED"] = -105] = "BIOMETRIC_PERMISSION_NOT_GRANTED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_NOT_ENROLLED"] = -106] = "BIOMETRIC_NOT_ENROLLED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_INTERNAL_PLUGIN_ERROR"] = -107] = "BIOMETRIC_INTERNAL_PLUGIN_ERROR";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_DISMISSED"] = -108] = "BIOMETRIC_DISMISSED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_PIN_OR_PATTERN_DISMISSED"] = -109] = "BIOMETRIC_PIN_OR_PATTERN_DISMISSED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_SCREEN_GUARD_UNSECURED"] = -110] = "BIOMETRIC_SCREEN_GUARD_UNSECURED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_LOCKED_OUT"] = -111] = "BIOMETRIC_LOCKED_OUT";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_LOCKED_OUT_PERMANENT"] = -112] = "BIOMETRIC_LOCKED_OUT_PERMANENT";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_SECRET_NOT_FOUND"] = -113] = "BIOMETRIC_SECRET_NOT_FOUND";
})(exports.BIOMETRIC_ERRORS || (exports.BIOMETRIC_ERRORS = {}));
var FingerprintAIO = /** @class */ (function (_super) {
    tslib.__extends(FingerprintAIO, _super);
    function FingerprintAIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FingerprintAIO.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.registerBiometricSecret = function (options) { return core.cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.loadBiometricSecret = function (options) { return core.cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return core.cordova(this, "show", {}, arguments); };
    FingerprintAIO.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FingerprintAIO, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FingerprintAIO.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FingerprintAIO });
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO = tslib.__decorate([], FingerprintAIO);
    return FingerprintAIO;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FingerprintAIO, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], registerBiometricSecret: [], loadBiometricSecret: [], show: [] } });

exports.FingerprintAIO = FingerprintAIO;
