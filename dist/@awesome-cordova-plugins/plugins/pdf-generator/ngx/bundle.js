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

var PDFGenerator = /** @class */ (function (_super) {
    tslib.__extends(PDFGenerator, _super);
    function PDFGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFGenerator.prototype.fromURL = function (url, options) { return core.cordova(this, "fromURL", { "otherPromise": true }, arguments); };
    PDFGenerator.prototype.fromData = function (data, options) { return core.cordova(this, "fromData", { "otherPromise": true }, arguments); };
    PDFGenerator.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PDFGenerator, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PDFGenerator.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PDFGenerator, providedIn: 'root' });
    PDFGenerator.pluginName = "PDFGenerator";
    PDFGenerator.plugin = "cordova-pdf-generator";
    PDFGenerator.pluginRef = "cordova.plugins.pdf";
    PDFGenerator.repo = "https://github.com/cesarvr/pdf-generator";
    PDFGenerator.platforms = ["Android", "iOS"];
    PDFGenerator = tslib.__decorate([], PDFGenerator);
    return PDFGenerator;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PDFGenerator, decorators: [{
            type: i0.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], propDecorators: { fromURL: [], fromData: [] } });

exports.PDFGenerator = PDFGenerator;
