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

var CallDirectory = /** @class */ (function (_super) {
    tslib.__extends(CallDirectory, _super);
    function CallDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallDirectory.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    CallDirectory.prototype.addIdentification = function (items) { return core.cordova(this, "addIdentification", {}, arguments); };
    CallDirectory.prototype.removeIdentification = function (items) { return core.cordova(this, "removeIdentification", {}, arguments); };
    CallDirectory.prototype.removeAllIdentification = function () { return core.cordova(this, "removeAllIdentification", {}, arguments); };
    CallDirectory.prototype.getAllItems = function () { return core.cordova(this, "getAllItems", {}, arguments); };
    CallDirectory.prototype.reloadExtension = function () { return core.cordova(this, "reloadExtension", {}, arguments); };
    CallDirectory.prototype.getLog = function () { return core.cordova(this, "getLog", {}, arguments); };
    CallDirectory.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CallDirectory, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CallDirectory.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CallDirectory });
    CallDirectory.pluginName = "CallDirectory";
    CallDirectory.plugin = "cordova-plugin-call-directory";
    CallDirectory.pluginRef = "CallDirectory";
    CallDirectory.repo = "https://github.com/GEDYSIntraWare/cordova-plugin-call-directory";
    CallDirectory.install = "cordova plugin add cordova-plugin-call-directory --variable EXT_NAME=\"Cordova-Directory\" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=\"NO\"";
    CallDirectory.installVariables = ["EXT_NAME", "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES"];
    CallDirectory.platforms = ["iOS"];
    CallDirectory = tslib.__decorate([], CallDirectory);
    return CallDirectory;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CallDirectory, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], addIdentification: [], removeIdentification: [], removeAllIdentification: [], getAllItems: [], reloadExtension: [], getLog: [] } });

exports.CallDirectory = CallDirectory;
