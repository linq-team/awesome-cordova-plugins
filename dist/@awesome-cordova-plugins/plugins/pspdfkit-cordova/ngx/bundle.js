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

var PSPDFKit = /** @class */ (function (_super) {
    tslib.__extends(PSPDFKit, _super);
    function PSPDFKit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PSPDFKit.prototype.setLicenseKey = function (licenseKey) { return core.cordova(this, "setLicenseKey", {}, arguments); };
    PSPDFKit.prototype.present = function (path, options) { return core.cordova(this, "present", {}, arguments); };
    PSPDFKit.prototype.presentFromAssets = function (assetFile, options) { return core.cordova(this, "presentFromAssets", {}, arguments); };
    PSPDFKit.prototype.presentWithXFDF = function (path, xfdfPath, options) { return core.cordova(this, "presentWithXFDF", {}, arguments); };
    PSPDFKit.prototype.dismiss = function () { return core.cordova(this, "dismiss", {}, arguments); };
    PSPDFKit.prototype.reload = function () { return core.cordova(this, "reload", {}, arguments); };
    PSPDFKit.prototype.saveDocument = function () { return core.cordova(this, "saveDocument", {}, arguments); };
    PSPDFKit.prototype.saveAnnotations = function () { return core.cordova(this, "saveAnnotations", {}, arguments); };
    PSPDFKit.prototype.getHasDirtyAnnotations = function () { return core.cordova(this, "getHasDirtyAnnotations", {}, arguments); };
    PSPDFKit.prototype.search = function (query, animated, headless) { return core.cordova(this, "search", {}, arguments); };
    PSPDFKit.prototype.setOptions = function (options, animated) { return core.cordova(this, "setOptions", {}, arguments); };
    PSPDFKit.prototype.getOptions = function (names) { return core.cordova(this, "getOptions", {}, arguments); };
    PSPDFKit.prototype.setOption = function (name, value, animated) { return core.cordova(this, "setOption", {}, arguments); };
    PSPDFKit.prototype.getOption = function (name) { return core.cordova(this, "getOption", {}, arguments); };
    PSPDFKit.prototype.setPage = function (page, animated) { return core.cordova(this, "setPage", {}, arguments); };
    PSPDFKit.prototype.getPage = function () { return core.cordova(this, "getPage", {}, arguments); };
    PSPDFKit.prototype.getPageCount = function () { return core.cordova(this, "getPageCount", {}, arguments); };
    PSPDFKit.prototype.scrollToNextPage = function (animated) { return core.cordova(this, "scrollToNextPage", {}, arguments); };
    PSPDFKit.prototype.scrollToPreviousPage = function (animated) { return core.cordova(this, "scrollToPreviousPage", {}, arguments); };
    PSPDFKit.prototype.setAppearanceMode = function (appearanceMode) { return core.cordova(this, "setAppearanceMode", {}, arguments); };
    PSPDFKit.prototype.clearCache = function (clearDiskCache) { return core.cordova(this, "clearCache", {}, arguments); };
    PSPDFKit.prototype.removeCacheForPresentedDocument = function () { return core.cordova(this, "removeCacheForPresentedDocument", {}, arguments); };
    PSPDFKit.prototype.clearCacheForPage = function (pageIndex) { return core.cordova(this, "clearCacheForPage", {}, arguments); };
    PSPDFKit.prototype.hideAnnotationToolbar = function () { return core.cordova(this, "hideAnnotationToolbar", {}, arguments); };
    PSPDFKit.prototype.showAnnotationToolbar = function () { return core.cordova(this, "showAnnotationToolbar", {}, arguments); };
    PSPDFKit.prototype.toggleAnnotationToolbar = function () { return core.cordova(this, "toggleAnnotationToolbar", {}, arguments); };
    PSPDFKit.prototype.applyInstantJSON = function (jsonValue) { return core.cordova(this, "applyInstantJSON", {}, arguments); };
    PSPDFKit.prototype.addAnnotation = function (jsonAnnotation) { return core.cordova(this, "addAnnotation", {}, arguments); };
    PSPDFKit.prototype.removeAnnotation = function (jsonAnnotation) { return core.cordova(this, "removeAnnotation", {}, arguments); };
    PSPDFKit.prototype.getAnnotations = function (pageIndex, type) { return core.cordova(this, "getAnnotations", {}, arguments); };
    PSPDFKit.prototype.getAllUnsavedAnnotations = function () { return core.cordova(this, "getAllUnsavedAnnotations", {}, arguments); };
    PSPDFKit.prototype.setFormFieldValue = function (value, fullyQualifiedName) { return core.cordova(this, "setFormFieldValue", {}, arguments); };
    PSPDFKit.prototype.getFormFieldValue = function (fullyQualifiedName) { return core.cordova(this, "getFormFieldValue", {}, arguments); };
    PSPDFKit.prototype.importXFDF = function (xfdfPath) { return core.cordova(this, "importXFDF", {}, arguments); };
    PSPDFKit.prototype.exportXFDF = function (xfdfPath) { return core.cordova(this, "exportXFDF", {}, arguments); };
    PSPDFKit.prototype.processAnnotations = function (annotationChange, processedDocumentPath, annotationType) { return core.cordova(this, "processAnnotations", {}, arguments); };
    PSPDFKit.prototype.convertPDFFromHTMLString = function (html, fileName, options) { return core.cordova(this, "convertPDFFromHTMLString", {}, arguments); };
    PSPDFKit.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PSPDFKit, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PSPDFKit.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PSPDFKit });
    PSPDFKit.pluginName = "PSPDFKit";
    PSPDFKit.plugin = "pspdfkit-cordova";
    PSPDFKit.pluginRef = "PSPDFKit";
    PSPDFKit.repo = "https://github.com/PSPDFKit/PSPDFKit-Cordova";
    PSPDFKit.install = "ionic cordova plugin add pspdfkit-cordova";
    PSPDFKit.platforms = ["Android", "iOS"];
    PSPDFKit = tslib.__decorate([], PSPDFKit);
    return PSPDFKit;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PSPDFKit, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setLicenseKey: [], present: [], presentFromAssets: [], presentWithXFDF: [], dismiss: [], reload: [], saveDocument: [], saveAnnotations: [], getHasDirtyAnnotations: [], search: [], setOptions: [], getOptions: [], setOption: [], getOption: [], setPage: [], getPage: [], getPageCount: [], scrollToNextPage: [], scrollToPreviousPage: [], setAppearanceMode: [], clearCache: [], removeCacheForPresentedDocument: [], clearCacheForPage: [], hideAnnotationToolbar: [], showAnnotationToolbar: [], toggleAnnotationToolbar: [], applyInstantJSON: [], addAnnotation: [], removeAnnotation: [], getAnnotations: [], getAllUnsavedAnnotations: [], setFormFieldValue: [], getFormFieldValue: [], importXFDF: [], exportXFDF: [], processAnnotations: [], convertPDFFromHTMLString: [] } });

exports.PSPDFKit = PSPDFKit;
