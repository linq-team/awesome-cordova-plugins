'use strict';

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var i0 = require('@angular/core');

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

var DocumentViewer = /** @class */ (function (_super) {
    tslib.__extends(DocumentViewer, _super);
    function DocumentViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentViewer.prototype.getSupportInfo = function () { return core.cordova(this, "getSupportInfo", {}, arguments); };
    DocumentViewer.prototype.canViewDocument = function (url, contentType, options, onPossible, onMissingApp, onImpossible, onError) { return core.cordova(this, "canViewDocument", { "sync": true }, arguments); };
    DocumentViewer.prototype.viewDocument = function (url, contentType, options, onShow, onClose, onMissingApp, onError) { return core.cordova(this, "viewDocument", { "sync": true }, arguments); };
    DocumentViewer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentViewer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DocumentViewer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentViewer });
    DocumentViewer.pluginName = "Document Viewer";
    DocumentViewer.plugin = "cordova-plugin-document-viewer";
    DocumentViewer.pluginRef = "SitewaertsDocumentViewer";
    DocumentViewer.repo = "https://github.com/sitewaerts/cordova-plugin-document-viewer";
    DocumentViewer.platforms = ["Android", "iOS", "Windows"];
    DocumentViewer = tslib.__decorate([], DocumentViewer);
    return DocumentViewer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DocumentViewer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getSupportInfo: [], canViewDocument: [], viewDocument: [] } });

exports.DocumentViewer = DocumentViewer;
