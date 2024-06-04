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

var IsDebug = /** @class */ (function (_super) {
    tslib.__extends(IsDebug, _super);
    function IsDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebug.prototype.getIsDebug = function () { return core.cordova(this, "getIsDebug", {}, arguments); };
    IsDebug.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsDebug, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    IsDebug.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsDebug });
    IsDebug.pluginName = "IsDebug";
    IsDebug.plugin = "cordova-plugin-is-debug";
    IsDebug.pluginRef = "cordova.plugins.IsDebug";
    IsDebug.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebug.platforms = ["Android", "iOS"];
    IsDebug = tslib.__decorate([], IsDebug);
    return IsDebug;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsDebug, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getIsDebug: [] } });

exports.IsDebug = IsDebug;
