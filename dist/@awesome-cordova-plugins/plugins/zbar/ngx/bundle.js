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

var ZBar = /** @class */ (function (_super) {
    tslib.__extends(ZBar, _super);
    function ZBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBar.prototype.scan = function (options) { return core.cordova(this, "scan", {}, arguments); };
    ZBar.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ZBar, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ZBar.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ZBar });
    ZBar.pluginName = "ZBar";
    ZBar.plugin = "cordova-plugin-cszbar";
    ZBar.pluginRef = "cloudSky.zBar";
    ZBar.repo = "https://github.com/tjwoon/csZBar";
    ZBar.platforms = ["Android", "iOS"];
    ZBar = tslib.__decorate([], ZBar);
    return ZBar;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ZBar, decorators: [{
            type: i0.Injectable
        }], propDecorators: { scan: [] } });

exports.ZBar = ZBar;
