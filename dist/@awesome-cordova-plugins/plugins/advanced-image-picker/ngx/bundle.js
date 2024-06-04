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

exports.ErrorCodes = void 0;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["UnsupportedAction"] = 1] = "UnsupportedAction";
    ErrorCodes[ErrorCodes["WrongJsonObject"] = 2] = "WrongJsonObject";
    ErrorCodes[ErrorCodes["PickerCanceled"] = 3] = "PickerCanceled";
    ErrorCodes[ErrorCodes["UnknownError"] = 10] = "UnknownError";
})(exports.ErrorCodes || (exports.ErrorCodes = {}));
var AdvancedImagePicker = /** @class */ (function (_super) {
    tslib.__extends(AdvancedImagePicker, _super);
    function AdvancedImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedImagePicker.prototype.present = function (options) { return core.cordova(this, "present", {}, arguments); };
    AdvancedImagePicker.prototype.cleanup = function () { return core.cordova(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    AdvancedImagePicker.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdvancedImagePicker, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AdvancedImagePicker.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdvancedImagePicker });
    AdvancedImagePicker.pluginName = "AdvancedImagePicker";
    AdvancedImagePicker.plugin = "cordova-plugin-advanced-imagepicker";
    AdvancedImagePicker.pluginRef = "AdvancedImagePicker";
    AdvancedImagePicker.repo = "https://github.com/EinfachHans/cordova-plugin-advanced-imagepicker";
    AdvancedImagePicker.install = "ionic cordova plugin add cordova-plugin-advanced-imagepicker";
    AdvancedImagePicker.installVariables = ["ANDROID_IMAGE_PICKER_VERSION"];
    AdvancedImagePicker.platforms = ["Android", "iOS"];
    AdvancedImagePicker = tslib.__decorate([], AdvancedImagePicker);
    return AdvancedImagePicker;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdvancedImagePicker, decorators: [{
            type: i0.Injectable
        }], propDecorators: { present: [], cleanup: [] } });

exports.AdvancedImagePicker = AdvancedImagePicker;
