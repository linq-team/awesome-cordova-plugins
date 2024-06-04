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

var HeaderColor = /** @class */ (function (_super) {
    tslib.__extends(HeaderColor, _super);
    function HeaderColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColor.prototype.tint = function (color) { return core.cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderColor, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HeaderColor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderColor });
    HeaderColor.pluginName = "HeaderColor";
    HeaderColor.plugin = "cordova-plugin-headercolor";
    HeaderColor.pluginRef = "plugins.headerColor";
    HeaderColor.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColor.platforms = ["Android"];
    HeaderColor = tslib.__decorate([], HeaderColor);
    return HeaderColor;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderColor, decorators: [{
            type: i0.Injectable
        }], propDecorators: { tint: [] } });

exports.HeaderColor = HeaderColor;
