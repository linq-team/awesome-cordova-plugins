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

var BiometricWrapper = /** @class */ (function (_super) {
    tslib.__extends(BiometricWrapper, _super);
    function BiometricWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapper.prototype.activateIris = function (args) { return core.cordova(this, "activateIris", {}, arguments); };
    BiometricWrapper.prototype.activateFingerprint = function (args) { return core.cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapper.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BiometricWrapper, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BiometricWrapper.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BiometricWrapper });
    BiometricWrapper.pluginName = "BiometricWrapper";
    BiometricWrapper.plugin = "cordova-plugin-biometric";
    BiometricWrapper.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapper.repo = "";
    BiometricWrapper.install = "";
    BiometricWrapper.installVariables = [];
    BiometricWrapper.platforms = ["Android"];
    BiometricWrapper = tslib.__decorate([], BiometricWrapper);
    return BiometricWrapper;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BiometricWrapper, decorators: [{
            type: i0.Injectable
        }], propDecorators: { activateIris: [], activateFingerprint: [] } });

exports.BiometricWrapper = BiometricWrapper;
