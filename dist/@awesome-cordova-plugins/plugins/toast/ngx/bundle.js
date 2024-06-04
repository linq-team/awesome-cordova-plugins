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

var Toast = /** @class */ (function (_super) {
    tslib.__extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.show = function (message, duration, position) { return core.cordova(this, "show", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.hide = function () { return core.cordova(this, "hide", {}, arguments); };
    Toast.prototype.showWithOptions = function (options) { return core.cordova(this, "showWithOptions", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortTop = function (message) { return core.cordova(this, "showShortTop", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortCenter = function (message) { return core.cordova(this, "showShortCenter", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortBottom = function (message) { return core.cordova(this, "showShortBottom", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongTop = function (message) { return core.cordova(this, "showLongTop", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongCenter = function (message) { return core.cordova(this, "showLongCenter", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongBottom = function (message) { return core.cordova(this, "showLongBottom", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Toast, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Toast.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Toast });
    Toast.pluginName = "Toast";
    Toast.plugin = "cordova-plugin-x-toast";
    Toast.pluginRef = "plugins.toast";
    Toast.repo = "https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin";
    Toast.platforms = ["Android", "BlackBerry 10", "iOS", "Windows", "Windows Phone 8"];
    Toast = tslib.__decorate([], Toast);
    return Toast;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Toast, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], hide: [], showWithOptions: [], showShortTop: [], showShortCenter: [], showShortBottom: [], showLongTop: [], showLongCenter: [], showLongBottom: [] } });

exports.Toast = Toast;
