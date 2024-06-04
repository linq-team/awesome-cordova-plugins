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

var NativeView = /** @class */ (function (_super) {
    tslib.__extends(NativeView, _super);
    function NativeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeView.prototype.show = function (packageOrClass, className, extraParams, success, error) { return core.cordova(this, "show", {}, arguments); };
    NativeView.prototype.checkIfAppInstalled = function (config, success, error) { return core.cordova(this, "checkIfAppInstalled", {}, arguments); };
    NativeView.prototype.showMarket = function (config, success, error) { return core.cordova(this, "showMarket", {}, arguments); };
    NativeView.prototype.getBuildVariant = function (config, success, error) { return core.cordova(this, "getBuildVariant", { "platforms": ["android"] }, arguments); };
    NativeView.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeView, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NativeView.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeView });
    NativeView.pluginName = "NativeView";
    NativeView.plugin = "cordova-plugin-nativeview";
    NativeView.pluginRef = "cordova.plugins.NativeView";
    NativeView.repo = "https://github.com/mfdeveloper/cordova-plugin-nativeview";
    NativeView.platforms = ["Android", "iOS"];
    NativeView = tslib.__decorate([], NativeView);
    return NativeView;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeView, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], checkIfAppInstalled: [], showMarket: [], getBuildVariant: [] } });

exports.NativeView = NativeView;
