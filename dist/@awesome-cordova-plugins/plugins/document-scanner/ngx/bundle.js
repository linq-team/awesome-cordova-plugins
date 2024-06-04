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

exports.DocumentScannerSourceType = void 0;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(exports.DocumentScannerSourceType || (exports.DocumentScannerSourceType = {}));
var DocumentScanner = /** @class */ (function (_super) {
    tslib.__extends(DocumentScanner, _super);
    function DocumentScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScanner.prototype.scanDoc = function (opts) { return core.cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScanner.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentScanner, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DocumentScanner.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentScanner });
    DocumentScanner.pluginName = "DocumentScanner";
    DocumentScanner.plugin = "cordova-plugin-document-scanner";
    DocumentScanner.pluginRef = "scan";
    DocumentScanner.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScanner.platforms = ["Android", "iOS"];
    DocumentScanner = tslib.__decorate([], DocumentScanner);
    return DocumentScanner;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentScanner, decorators: [{
            type: i0.Injectable
        }], propDecorators: { scanDoc: [] } });

exports.DocumentScanner = DocumentScanner;
