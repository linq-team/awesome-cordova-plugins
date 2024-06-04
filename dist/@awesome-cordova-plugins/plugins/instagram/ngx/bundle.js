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

var Instagram = /** @class */ (function (_super) {
    tslib.__extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.isInstalled = function () { return core.cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.share = function (canvasIdOrDataUrl, caption) { return core.cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.shareAsset = function (assetLocalIdentifier) { return core.cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    Instagram.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Instagram, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Instagram.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Instagram });
    Instagram.pluginName = "Instagram";
    Instagram.plugin = "cordova-instagram-plugin";
    Instagram.pluginRef = "Instagram";
    Instagram.repo = "https://github.com/vstirbu/InstagramPlugin";
    Instagram.platforms = ["Android", "iOS"];
    Instagram = tslib.__decorate([], Instagram);
    return Instagram;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Instagram, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isInstalled: [], share: [], shareAsset: [] } });

exports.Instagram = Instagram;
