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

var DfuUpdate = /** @class */ (function (_super) {
    tslib.__extends(DfuUpdate, _super);
    function DfuUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DfuUpdate.prototype.updateFirmware = function (options) { return core.cordova(this, "updateFirmware", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    DfuUpdate.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DfuUpdate, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DfuUpdate.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DfuUpdate });
    DfuUpdate.pluginName = "DfuUpdate";
    DfuUpdate.plugin = "cordova-plugin-dfu-update";
    DfuUpdate.pluginRef = "window.DfuUpdate";
    DfuUpdate.repo = "https://github.com/EinfachHans/cordova-plugin-dfu-update";
    DfuUpdate.install = "ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION=\"1.11.0\"";
    DfuUpdate.installVariables = ["ANDROID_NORDIC_VERSION"];
    DfuUpdate.platforms = ["Android", "iOS"];
    DfuUpdate = tslib.__decorate([], DfuUpdate);
    return DfuUpdate;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DfuUpdate, decorators: [{
            type: i0.Injectable
        }], propDecorators: { updateFirmware: [] } });

exports.DfuUpdate = DfuUpdate;
