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

var NativePageTransitions = /** @class */ (function (_super) {
    tslib.__extends(NativePageTransitions, _super);
    function NativePageTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativePageTransitions.prototype.slide = function (options) { return core.cordova(this, "slide", {}, arguments); };
    NativePageTransitions.prototype.flip = function (options) { return core.cordova(this, "flip", {}, arguments); };
    NativePageTransitions.prototype.fade = function (options) { return core.cordova(this, "fade", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.drawer = function (options) { return core.cordova(this, "drawer", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.curl = function (options) { return core.cordova(this, "curl", { "platforms": ["iOS"] }, arguments); };
    NativePageTransitions.prototype.executePendingTransition = function () { return core.cordova(this, "executePendingTransition", {}, arguments); };
    NativePageTransitions.prototype.cancelPendingTransition = function () { return core.cordova(this, "cancelPendingTransition", {}, arguments); };
    NativePageTransitions.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativePageTransitions, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NativePageTransitions.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativePageTransitions });
    NativePageTransitions.pluginName = "NativePageTransitions";
    NativePageTransitions.plugin = "com.telerik.plugins.nativepagetransitions";
    NativePageTransitions.pluginRef = "plugins.nativepagetransitions";
    NativePageTransitions.repo = "https://github.com/Telerik-Verified-Plugins/NativePageTransitions";
    NativePageTransitions.platforms = ["Android", "iOS", "Windows Phone 8"];
    NativePageTransitions = tslib.__decorate([], NativePageTransitions);
    return NativePageTransitions;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativePageTransitions, decorators: [{
            type: i0.Injectable
        }], propDecorators: { slide: [], flip: [], fade: [], drawer: [], curl: [], executePendingTransition: [], cancelPendingTransition: [] } });

exports.NativePageTransitions = NativePageTransitions;
