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

var SaveDialog = /** @class */ (function (_super) {
    tslib.__extends(SaveDialog, _super);
    function SaveDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveDialog.prototype.saveFile = function (blob, fileName) { return core.cordova(this, "saveFile", { "otherPromise": true }, arguments); };
    SaveDialog.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SaveDialog, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SaveDialog.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SaveDialog, providedIn: 'root' });
    SaveDialog.pluginName = "SaveDialog";
    SaveDialog.plugin = "cordova-plugin-save-dialog";
    SaveDialog.pluginRef = "SaveDialog";
    SaveDialog.repo = "https://github.com/Amphiluke/cordova-plugin-save-dialog";
    SaveDialog.platforms = ["Android", "iOS"];
    SaveDialog = tslib.__decorate([], SaveDialog);
    return SaveDialog;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SaveDialog, decorators: [{
            type: i0.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], propDecorators: { saveFile: [] } });

exports.SaveDialog = SaveDialog;
