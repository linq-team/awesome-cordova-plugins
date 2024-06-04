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

var ThemeDetection = /** @class */ (function (_super) {
    tslib.__extends(ThemeDetection, _super);
    function ThemeDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetection.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    ThemeDetection.prototype.isDarkModeEnabled = function () { return core.cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetection.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ThemeDetection, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ThemeDetection.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ThemeDetection });
    ThemeDetection.pluginName = "ThemeDetection";
    ThemeDetection.plugin = "cordova-plugin-theme-detection";
    ThemeDetection.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetection.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetection.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetection.installVariables = [];
    ThemeDetection.platforms = ["iOS", "Android"];
    ThemeDetection = tslib.__decorate([], ThemeDetection);
    return ThemeDetection;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ThemeDetection, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], isDarkModeEnabled: [] } });

exports.ThemeDetection = ThemeDetection;
