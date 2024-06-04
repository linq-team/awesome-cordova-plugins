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

var LowMemory = /** @class */ (function (_super) {
    tslib.__extends(LowMemory, _super);
    function LowMemory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowMemory.prototype.generateLowMemory = function () { return core.cordova(this, "generateLowMemory", {}, arguments); };
    LowMemory.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LowMemory, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LowMemory.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LowMemory });
    LowMemory.pluginName = "LowMemory";
    LowMemory.plugin = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemory.pluginRef = "LowMemory";
    LowMemory.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemory.platforms = ["Android", "iOS"];
    LowMemory = tslib.__decorate([], LowMemory);
    return LowMemory;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LowMemory, decorators: [{
            type: i0.Injectable
        }], propDecorators: { generateLowMemory: [] } });

exports.LowMemory = LowMemory;
