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

var MultipleDocumentsPicker = /** @class */ (function (_super) {
    tslib.__extends(MultipleDocumentsPicker, _super);
    function MultipleDocumentsPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleDocumentsPicker.prototype.pick = function (type) { return core.cordova(this, "pick", {}, arguments); };
    MultipleDocumentsPicker.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MultipleDocumentsPicker, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MultipleDocumentsPicker.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MultipleDocumentsPicker });
    MultipleDocumentsPicker.pluginName = "MultipleDocumentsPicker";
    MultipleDocumentsPicker.plugin = "cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPicker.pluginRef = "multipleDocumentsPicker";
    MultipleDocumentsPicker.repo = "https://github.com/akeotech/cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPicker.platforms = ["Android", "iOS"];
    MultipleDocumentsPicker = tslib.__decorate([], MultipleDocumentsPicker);
    return MultipleDocumentsPicker;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MultipleDocumentsPicker, decorators: [{
            type: i0.Injectable
        }], propDecorators: { pick: [] } });

exports.MultipleDocumentsPicker = MultipleDocumentsPicker;
