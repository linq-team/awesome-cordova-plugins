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

var ImageResizer = /** @class */ (function (_super) {
    tslib.__extends(ImageResizer, _super);
    function ImageResizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResizer.prototype.resize = function (options) { return core.cordova(this, "resize", {}, arguments); };
    ImageResizer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImageResizer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ImageResizer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImageResizer });
    ImageResizer.pluginName = "ImageResizer";
    ImageResizer.plugin = "cordova-plugin-image-resizer";
    ImageResizer.pluginRef = "ImageResizer";
    ImageResizer.repo = "https://github.com/JoschkaSchulz/cordova-plugin-image-resizer";
    ImageResizer.platforms = ["Android", "iOS"];
    ImageResizer = tslib.__decorate([], ImageResizer);
    return ImageResizer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImageResizer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { resize: [] } });

exports.ImageResizer = ImageResizer;
