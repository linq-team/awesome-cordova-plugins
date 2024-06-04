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

var WheelSelector = /** @class */ (function (_super) {
    tslib.__extends(WheelSelector, _super);
    function WheelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WheelSelector.prototype.show = function (options) { return core.cordova(this, "show", {}, arguments); };
    WheelSelector.prototype.hideSelector = function () { return core.cordova(this, "hideSelector", { "platforms": ["iOS"] }, arguments); };
    WheelSelector.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WheelSelector, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WheelSelector.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WheelSelector });
    WheelSelector.pluginName = "WheelSelector";
    WheelSelector.plugin = "cordova-wheel-selector-plugin";
    WheelSelector.pluginRef = "SelectorCordovaPlugin";
    WheelSelector.repo = "https://github.com/jasonmamy/cordova-wheel-selector-plugin";
    WheelSelector.platforms = ["Android", "iOS"];
    WheelSelector = tslib.__decorate([], WheelSelector);
    return WheelSelector;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WheelSelector, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], hideSelector: [] } });

exports.WheelSelector = WheelSelector;
