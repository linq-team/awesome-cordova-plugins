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

var LottieSplashScreen = /** @class */ (function (_super) {
    tslib.__extends(LottieSplashScreen, _super);
    function LottieSplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreen.prototype.show = function (location, remote, width, height) { return core.cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreen.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreen.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LottieSplashScreen, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LottieSplashScreen.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LottieSplashScreen });
    LottieSplashScreen.pluginName = "LottieSplashScreen";
    LottieSplashScreen.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreen.pluginRef = "lottie.splashscreen";
    LottieSplashScreen.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreen.install = "";
    LottieSplashScreen.installVariables = [];
    LottieSplashScreen.platforms = ["Android", "iOS"];
    LottieSplashScreen = tslib.__decorate([], LottieSplashScreen);
    return LottieSplashScreen;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LottieSplashScreen, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], hide: [] } });

exports.LottieSplashScreen = LottieSplashScreen;
