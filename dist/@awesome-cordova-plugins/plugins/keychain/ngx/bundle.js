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

var Keychain = /** @class */ (function (_super) {
    tslib.__extends(Keychain, _super);
    function Keychain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keychain.prototype.get = function (key, touchIDMessage) { return core.cordova(this, "get", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.set = function (key, value, useTouchID) { return core.cordova(this, "set", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.getJson = function (key, touchIDMessage) { return core.cordova(this, "getJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.setJson = function (key, obj, useTouchId) { return core.cordova(this, "setJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.remove = function (key) { return core.cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    Keychain.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Keychain, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Keychain.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Keychain });
    Keychain.pluginName = "Keychain";
    Keychain.plugin = "cordova-plugin-ios-keychain";
    Keychain.pluginRef = "window.Keychain";
    Keychain.repo = "https://github.com/ionic-team/cordova-plugin-ios-keychain";
    Keychain.platforms = ["iOS"];
    Keychain = tslib.__decorate([], Keychain);
    return Keychain;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Keychain, decorators: [{
            type: i0.Injectable
        }], propDecorators: { get: [], set: [], getJson: [], setJson: [], remove: [] } });

exports.Keychain = Keychain;
