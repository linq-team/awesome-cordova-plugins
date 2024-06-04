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

var FirebaseCrash = /** @class */ (function (_super) {
    tslib.__extends(FirebaseCrash, _super);
    function FirebaseCrash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrash.prototype.log = function (message) { return core.cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrash.prototype.logError = function (message) { return core.cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrash.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrash.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseCrash, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseCrash.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseCrash });
    FirebaseCrash.pluginName = "FirebaseCrash";
    FirebaseCrash.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrash.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrash.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrash.platforms = ["Android", "iOS"];
    FirebaseCrash = tslib.__decorate([], FirebaseCrash);
    return FirebaseCrash;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseCrash, decorators: [{
            type: i0.Injectable
        }], propDecorators: { log: [], logError: [], setUserId: [] } });

exports.FirebaseCrash = FirebaseCrash;
