'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

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

var PreviewAnyFile = /** @class */ (function (_super) {
    tslib.__extends(PreviewAnyFile, _super);
    function PreviewAnyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewAnyFile.prototype.preview = function (url) { return core.cordova(this, "preview", {}, arguments); };
    PreviewAnyFile.prototype.previewPath = function (path, opt) {
        if (opt === void 0) { opt = {}; }
        return core.cordova(this, "previewPath", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFile.prototype.previewBase64 = function (base64, opt) {
        if (opt === void 0) { opt = {}; }
        return core.cordova(this, "previewBase64", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFile.prototype.previewAsset = function (path, opt) {
        if (opt === void 0) { opt = {}; }
        return core.cordova(this, "previewAsset", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFile.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreviewAnyFile, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PreviewAnyFile.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreviewAnyFile });
    PreviewAnyFile.pluginName = "Preview/Open Any File";
    PreviewAnyFile.plugin = "cordova-plugin-preview-any-file";
    PreviewAnyFile.pluginRef = "PreviewAnyFile";
    PreviewAnyFile.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
    PreviewAnyFile.install = "";
    PreviewAnyFile.installVariables = [];
    PreviewAnyFile.platforms = ["Android", "iOS"];
    PreviewAnyFile = tslib.__decorate([], PreviewAnyFile);
    return PreviewAnyFile;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreviewAnyFile, decorators: [{
            type: i0.Injectable
        }], propDecorators: { preview: [], previewPath: [], previewBase64: [], previewAsset: [] } });

exports.PreviewAnyFile = PreviewAnyFile;
