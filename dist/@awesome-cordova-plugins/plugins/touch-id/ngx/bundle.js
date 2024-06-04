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

var TouchID = /** @class */ (function (_super) {
    tslib.__extends(TouchID, _super);
    function TouchID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchID.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    TouchID.prototype.verifyFingerprint = function (message) { return core.cordova(this, "verifyFingerprint", {}, arguments); };
    TouchID.prototype.verifyFingerprintWithCustomPasswordFallback = function (message) { return core.cordova(this, "verifyFingerprintWithCustomPasswordFallback", {}, arguments); };
    TouchID.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel) { return core.cordova(this, "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", {}, arguments); };
    TouchID.prototype.didFingerprintDatabaseChange = function () { return core.cordova(this, "didFingerprintDatabaseChange", {}, arguments); };
    TouchID.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TouchID, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TouchID.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TouchID });
    TouchID.pluginName = "TouchID";
    TouchID.plugin = "cordova-plugin-touch-id";
    TouchID.pluginRef = "plugins.touchid";
    TouchID.repo = "https://github.com/EddyVerbruggen/cordova-plugin-touch-id";
    TouchID.platforms = ["iOS"];
    TouchID = tslib.__decorate([], TouchID);
    return TouchID;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TouchID, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], verifyFingerprint: [], verifyFingerprintWithCustomPasswordFallback: [], verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel: [], didFingerprintDatabaseChange: [] } });

exports.TouchID = TouchID;
