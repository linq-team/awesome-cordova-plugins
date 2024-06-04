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

var Anyline = /** @class */ (function (_super) {
    tslib.__extends(Anyline, _super);
    function Anyline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anyline.prototype.checkLicense = function (licenseKey) { return core.cordova(this, "checkLicense", {}, arguments); };
    Anyline.prototype.initAnylineSDK = function (licenseKey) { return core.cordova(this, "initAnylineSDK", {}, arguments); };
    Anyline.prototype.getSDKVersion = function () { return core.cordova(this, "getSDKVersion", {}, arguments); };
    Anyline.prototype.scan = function (config) { return core.cordova(this, "scan", {}, arguments); };
    Anyline.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Anyline, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Anyline.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Anyline });
    Anyline.pluginName = "Anyline";
    Anyline.plugin = "io-anyline-cordova";
    Anyline.pluginRef = "Anyline";
    Anyline.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    Anyline.platforms = ["Android", "iOS"];
    Anyline = tslib.__decorate([], Anyline);
    return Anyline;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Anyline, decorators: [{
            type: i0.Injectable
        }], propDecorators: { checkLicense: [], initAnylineSDK: [], getSDKVersion: [], scan: [] } });

exports.Anyline = Anyline;
