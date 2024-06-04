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

var FirebaseMessaging = /** @class */ (function (_super) {
    tslib.__extends(FirebaseMessaging, _super);
    function FirebaseMessaging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseMessaging.prototype.onMessage = function () { return core.cordova(this, "onMessage", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.onBackgroundMessage = function () { return core.cordova(this, "onBackgroundMessage", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.requestPermission = function (options) { return core.cordova(this, "requestPermission", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getInstanceId = function () { return core.cordova(this, "getInstanceId", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getToken = function (type) { return core.cordova(this, "getToken", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.onTokenRefresh = function () { return core.cordova(this, "onTokenRefresh", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.subscribe = function (topic) { return core.cordova(this, "subscribe", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.unsubscribe = function (topic) { return core.cordova(this, "unsubscribe", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getBadge = function () { return core.cordova(this, "getBadge", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.setBadge = function (value) { return core.cordova(this, "setBadge", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.deleteToken = function () { return core.cordova(this, "deleteToken", { "sync": true }, arguments); };
    FirebaseMessaging.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseMessaging, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseMessaging.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseMessaging });
    FirebaseMessaging.pluginName = "FirebaseMessaging";
    FirebaseMessaging.plugin = "cordova-plugin-firebase-messaging";
    FirebaseMessaging.pluginRef = "cordova.plugins.firebase.messaging";
    FirebaseMessaging.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-messaging";
    FirebaseMessaging.platforms = ["Android", "iOS"];
    FirebaseMessaging = tslib.__decorate([], FirebaseMessaging);
    return FirebaseMessaging;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseMessaging, decorators: [{
            type: i0.Injectable
        }], propDecorators: { onMessage: [], onBackgroundMessage: [], requestPermission: [], getInstanceId: [], getToken: [], onTokenRefresh: [], subscribe: [], unsubscribe: [], getBadge: [], setBadge: [], deleteToken: [] } });

exports.FirebaseMessaging = FirebaseMessaging;
