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

var CropPluginPrivacy = /** @class */ (function (_super) {
    tslib.__extends(CropPluginPrivacy, _super);
    function CropPluginPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CropPluginPrivacy.prototype.cropImage = function (arg1, arg2) { return core.cordova(this, "cropImage", {}, arguments); };
    CropPluginPrivacy.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CropPluginPrivacy, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CropPluginPrivacy.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CropPluginPrivacy });
    CropPluginPrivacy.pluginName = "CropPluginPrivacy";
    CropPluginPrivacy.plugin = "cordova-plugin-crop-privacy";
    CropPluginPrivacy.pluginRef = "crop";
    CropPluginPrivacy.repo = "https://github.com/BaraAksayeth25/cordova-plugin-crop-privacy";
    CropPluginPrivacy.platforms = ["Android"];
    CropPluginPrivacy = tslib.__decorate([], CropPluginPrivacy);
    return CropPluginPrivacy;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CropPluginPrivacy, decorators: [{
            type: i0.Injectable
        }], propDecorators: { cropImage: [] } });

exports.CropPluginPrivacy = CropPluginPrivacy;
