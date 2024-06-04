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

var SSLCertificateChecker = /** @class */ (function (_super) {
    tslib.__extends(SSLCertificateChecker, _super);
    function SSLCertificateChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSLCertificateChecker.prototype.check = function (serverURL, allowedFingerprint) { return core.cordova(this, "check", {}, arguments); };
    SSLCertificateChecker.prototype.checkInCertChain = function (serverURL, allowedFingerprint) { return core.cordova(this, "checkInCertChain", {}, arguments); };
    SSLCertificateChecker.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SSLCertificateChecker, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SSLCertificateChecker.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SSLCertificateChecker });
    SSLCertificateChecker.pluginName = "SSLCertificateChecker";
    SSLCertificateChecker.plugin = "SSLCertificateChecker-PhoneGap-Plugin";
    SSLCertificateChecker.pluginRef = "SSLCertificateChecker";
    SSLCertificateChecker.repo = "https://github.com/EddyVerbruggen/SSLCertificateChecker-PhoneGap-Plugin";
    SSLCertificateChecker.platforms = ["Android", "iOS"];
    SSLCertificateChecker = tslib.__decorate([], SSLCertificateChecker);
    return SSLCertificateChecker;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SSLCertificateChecker, decorators: [{
            type: i0.Injectable
        }], propDecorators: { check: [], checkInCertChain: [] } });

exports.SSLCertificateChecker = SSLCertificateChecker;
