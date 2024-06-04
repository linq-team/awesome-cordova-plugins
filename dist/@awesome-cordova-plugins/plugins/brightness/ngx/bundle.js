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

var Brightness = /** @class */ (function (_super) {
    tslib.__extends(Brightness, _super);
    function Brightness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brightness.prototype.setBrightness = function (value) { return core.cordova(this, "setBrightness", {}, arguments); };
    Brightness.prototype.getBrightness = function () { return core.cordova(this, "getBrightness", {}, arguments); };
    Brightness.prototype.setKeepScreenOn = function (value) { return core.cordova(this, "setKeepScreenOn", {}, arguments); };
    Brightness.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Brightness, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Brightness.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Brightness });
    Brightness.pluginName = "Brightness";
    Brightness.plugin = "cordova-plugin-brightness";
    Brightness.pluginRef = "cordova.plugins.brightness";
    Brightness.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
    Brightness.platforms = ["Android", "iOS"];
    Brightness = tslib.__decorate([], Brightness);
    return Brightness;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Brightness, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setBrightness: [], getBrightness: [], setKeepScreenOn: [] } });

exports.Brightness = Brightness;
