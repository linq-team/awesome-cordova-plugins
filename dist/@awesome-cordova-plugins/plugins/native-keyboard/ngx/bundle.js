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

var NativeKeyboard = /** @class */ (function (_super) {
    tslib.__extends(NativeKeyboard, _super);
    function NativeKeyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeKeyboard.prototype.showMessenger = function (options) { return core.cordova(this, "showMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.hideMessenger = function (options) { return core.cordova(this, "hideMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.showMessengerKeyboard = function () { return core.cordova(this, "showMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.hideMessengerKeyboard = function () { return core.cordova(this, "hideMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.updateMessenger = function (options) { return core.cordova(this, "updateMessenger", {}, arguments); };
    NativeKeyboard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeKeyboard, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NativeKeyboard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeKeyboard });
    NativeKeyboard.pluginName = "NativeKeyboard";
    NativeKeyboard.plugin = "cordova-plugin-native-keyboard";
    NativeKeyboard.pluginRef = "NativeKeyboard";
    NativeKeyboard.repo = "https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard";
    NativeKeyboard.platforms = ["Android", "iOS"];
    NativeKeyboard = tslib.__decorate([], NativeKeyboard);
    return NativeKeyboard;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeKeyboard, decorators: [{
            type: i0.Injectable
        }], propDecorators: { showMessenger: [], hideMessenger: [], showMessengerKeyboard: [], hideMessengerKeyboard: [], updateMessenger: [] } });

exports.NativeKeyboard = NativeKeyboard;
