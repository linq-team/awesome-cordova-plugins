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

var MLKitTranslate = /** @class */ (function (_super) {
    tslib.__extends(MLKitTranslate, _super);
    function MLKitTranslate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MLKitTranslate.prototype.translate = function (text, targetLanguage, sourceLanguage) { return core.cordova(this, "translate", {}, arguments); };
    MLKitTranslate.prototype.identifyLanguage = function (text) { return core.cordova(this, "identifyLanguage", {}, arguments); };
    MLKitTranslate.prototype.getDownloadedModels = function () { return core.cordova(this, "getDownloadedModels", {}, arguments); };
    MLKitTranslate.prototype.getAvailableModels = function () { return core.cordova(this, "getAvailableModels", {}, arguments); };
    MLKitTranslate.prototype.downloadModel = function (code) { return core.cordova(this, "downloadModel", {}, arguments); };
    MLKitTranslate.prototype.deleteModel = function (code) { return core.cordova(this, "deleteModel", {}, arguments); };
    MLKitTranslate.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MLKitTranslate, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MLKitTranslate.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MLKitTranslate });
    MLKitTranslate.pluginName = "MLKitTranslate";
    MLKitTranslate.plugin = "cordova-plugin-mlkit-translate";
    MLKitTranslate.pluginRef = "MLKitTranslate";
    MLKitTranslate.repo = "https://github.com/rigelglen/cordova-plugin-mlkit-translate";
    MLKitTranslate.platforms = ["Android", "iOS"];
    MLKitTranslate = tslib.__decorate([], MLKitTranslate);
    return MLKitTranslate;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MLKitTranslate, decorators: [{
            type: i0.Injectable
        }], propDecorators: { translate: [], identifyLanguage: [], getDownloadedModels: [], getAvailableModels: [], downloadModel: [], deleteModel: [] } });

exports.MLKitTranslate = MLKitTranslate;
