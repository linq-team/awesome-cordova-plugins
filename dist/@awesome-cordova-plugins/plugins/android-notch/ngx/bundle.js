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

var AndroidNotch = /** @class */ (function (_super) {
    tslib.__extends(AndroidNotch, _super);
    function AndroidNotch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidNotch.prototype.hasCutout = function () { return core.cordova(this, "hasCutout", {}, arguments); };
    AndroidNotch.prototype.getInsetTop = function () { return core.cordova(this, "getInsetTop", {}, arguments); };
    AndroidNotch.prototype.getInsetRight = function () { return core.cordova(this, "getInsetRight", {}, arguments); };
    AndroidNotch.prototype.getInsetBottom = function () { return core.cordova(this, "getInsetBottom", {}, arguments); };
    AndroidNotch.prototype.getInsetLeft = function () { return core.cordova(this, "getInsetLeft", {}, arguments); };
    AndroidNotch.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AndroidNotch, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AndroidNotch.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AndroidNotch });
    AndroidNotch.pluginName = "AndroidNotch";
    AndroidNotch.plugin = "cordova-plugin-android-notch";
    AndroidNotch.pluginRef = "AndroidNotch";
    AndroidNotch.repo = "https://github.com/tobspr/cordova-plugin-android-notch.git";
    AndroidNotch.platforms = ["Android"];
    AndroidNotch = tslib.__decorate([], AndroidNotch);
    return AndroidNotch;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AndroidNotch, decorators: [{
            type: i0.Injectable
        }], propDecorators: { hasCutout: [], getInsetTop: [], getInsetRight: [], getInsetBottom: [], getInsetLeft: [] } });

exports.AndroidNotch = AndroidNotch;
