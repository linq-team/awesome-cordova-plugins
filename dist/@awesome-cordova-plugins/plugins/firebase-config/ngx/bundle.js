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

var FirebaseConfig = /** @class */ (function (_super) {
    tslib.__extends(FirebaseConfig, _super);
    function FirebaseConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseConfig.prototype.fetch = function (expirationDuration) { return core.cordova(this, "fetch", { "sync": true }, arguments); };
    FirebaseConfig.prototype.activate = function () { return core.cordova(this, "activate", { "sync": true }, arguments); };
    FirebaseConfig.prototype.fetchAndActivate = function () { return core.cordova(this, "fetchAndActivate", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getBoolean = function (key) { return core.cordova(this, "getBoolean", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getString = function (key) { return core.cordova(this, "getString", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getNumber = function (key) { return core.cordova(this, "getNumber", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getBytes = function (key) { return core.cordova(this, "getBytes", { "sync": true }, arguments); };
    FirebaseConfig.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseConfig, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseConfig.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseConfig });
    FirebaseConfig.pluginName = "FirebaseConfig";
    FirebaseConfig.plugin = "cordova-plugin-firebase-config";
    FirebaseConfig.pluginRef = "cordova.plugins.firebase.config";
    FirebaseConfig.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-config";
    FirebaseConfig.platforms = ["Android", "iOS"];
    FirebaseConfig = tslib.__decorate([], FirebaseConfig);
    return FirebaseConfig;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseConfig, decorators: [{
            type: i0.Injectable
        }], propDecorators: { fetch: [], activate: [], fetchAndActivate: [], getBoolean: [], getString: [], getNumber: [], getBytes: [] } });

exports.FirebaseConfig = FirebaseConfig;
