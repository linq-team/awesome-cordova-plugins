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

exports.OutputType = void 0;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(exports.OutputType || (exports.OutputType = {}));
var ImagePicker = /** @class */ (function (_super) {
    tslib.__extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePicker.prototype.getPictures = function (options) { return core.cordova(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePicker.prototype.hasReadPermission = function () { return core.cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.prototype.requestReadPermission = function () { return core.cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImagePicker, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ImagePicker.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImagePicker });
    ImagePicker.pluginName = "ImagePicker";
    ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePicker.pluginRef = "window.imagePicker";
    ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePicker.platforms = ["Android", "iOS"];
    ImagePicker = tslib.__decorate([], ImagePicker);
    return ImagePicker;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImagePicker, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getPictures: [], hasReadPermission: [], requestReadPermission: [] } });

exports.ImagePicker = ImagePicker;
