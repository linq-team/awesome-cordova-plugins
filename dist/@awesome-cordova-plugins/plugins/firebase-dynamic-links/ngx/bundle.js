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

var FirebaseDynamicLinks = /** @class */ (function (_super) {
    tslib.__extends(FirebaseDynamicLinks, _super);
    function FirebaseDynamicLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseDynamicLinks.prototype.getDynamicLink = function () { return core.cordova(this, "getDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.onDynamicLink = function () { return core.cordova(this, "onDynamicLink", { "callbackOrder": "reverse", "observable": true }, arguments); };
    FirebaseDynamicLinks.prototype.createDynamicLink = function (opts) { return core.cordova(this, "createDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.createShortDynamicLink = function (opts) { return core.cordova(this, "createShortDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.createUnguessableDynamicLink = function (opts) { return core.cordova(this, "createUnguessableDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseDynamicLinks, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseDynamicLinks.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseDynamicLinks });
    FirebaseDynamicLinks.pluginName = "FirebaseDynamicLinks";
    FirebaseDynamicLinks.plugin = " cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.pluginRef = "cordova.plugins.firebase.dynamiclinks";
    FirebaseDynamicLinks.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.install = "ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN=\"example.com\" --variable APP_PATH=\"/\"";
    FirebaseDynamicLinks.installVariables = ["APP_DOMAIN", "APP_PATH"];
    FirebaseDynamicLinks.platforms = ["Android", "iOS"];
    FirebaseDynamicLinks = tslib.__decorate([], FirebaseDynamicLinks);
    return FirebaseDynamicLinks;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseDynamicLinks, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getDynamicLink: [], onDynamicLink: [], createDynamicLink: [], createShortDynamicLink: [], createUnguessableDynamicLink: [] } });

exports.FirebaseDynamicLinks = FirebaseDynamicLinks;
