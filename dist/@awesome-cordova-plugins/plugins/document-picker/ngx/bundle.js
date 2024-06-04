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

var DocumentPicker = /** @class */ (function (_super) {
    tslib.__extends(DocumentPicker, _super);
    function DocumentPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPicker.prototype.getFile = function (option) { return core.cordova(this, "getFile", {}, arguments); };
    DocumentPicker.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentPicker, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DocumentPicker.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentPicker });
    DocumentPicker.pluginName = "IOSDocumentPicker";
    DocumentPicker.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPicker.pluginRef = "DocumentPicker";
    DocumentPicker.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPicker.platforms = ["iOS"];
    DocumentPicker = tslib.__decorate([], DocumentPicker);
    return DocumentPicker;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentPicker, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getFile: [] } });

exports.DocumentPicker = DocumentPicker;
