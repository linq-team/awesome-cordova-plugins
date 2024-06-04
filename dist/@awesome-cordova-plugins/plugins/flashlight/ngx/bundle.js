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

var Flashlight = /** @class */ (function (_super) {
    tslib.__extends(Flashlight, _super);
    function Flashlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flashlight.prototype.available = function () { return core.cordova(this, "available", {}, arguments); };
    Flashlight.prototype.switchOn = function () { return core.cordova(this, "switchOn", {}, arguments); };
    Flashlight.prototype.switchOff = function () { return core.cordova(this, "switchOff", {}, arguments); };
    Flashlight.prototype.toggle = function () { return core.cordova(this, "toggle", {}, arguments); };
    Flashlight.prototype.isSwitchedOn = function () { return core.cordova(this, "isSwitchedOn", { "sync": true }, arguments); };
    Flashlight.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Flashlight, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Flashlight.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Flashlight });
    Flashlight.pluginName = "Flashlight";
    Flashlight.plugin = "cordova-plugin-flashlight";
    Flashlight.pluginRef = "window.plugins.flashlight";
    Flashlight.repo = "https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin";
    Flashlight.platforms = ["Android", "iOS", "Windows Phone 8"];
    Flashlight = tslib.__decorate([], Flashlight);
    return Flashlight;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Flashlight, decorators: [{
            type: i0.Injectable
        }], propDecorators: { available: [], switchOn: [], switchOff: [], toggle: [], isSwitchedOn: [] } });

exports.Flashlight = Flashlight;
