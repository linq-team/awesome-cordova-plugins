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

var PushapePush = /** @class */ (function (_super) {
    tslib.__extends(PushapePush, _super);
    function PushapePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     *
     * @param options {PushapeOptions}
     * @returns {PushObject}
     */
    PushapePush.prototype.init = function (options) {
        return new PushObject(options);
    };
    PushapePush.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    PushapePush.prototype.createChannel = function (channel) { return core.cordova(this, "createChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePush.prototype.deleteChannel = function (id) { return core.cordova(this, "deleteChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePush.prototype.listChannels = function () { return core.cordova(this, "listChannels", {}, arguments); };
    PushapePush.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PushapePush, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PushapePush.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PushapePush });
    PushapePush.pluginName = "PushapePush";
    PushapePush.plugin = "pushape-cordova-push";
    PushapePush.pluginRef = "PushNotification";
    PushapePush.repo = "https://github.com/gluelabs/pushape-cordova-push";
    PushapePush.install = "ionic cordova plugin add pushape-cordova-push";
    PushapePush.platforms = ["Android", "Browser", "iOS"];
    PushapePush = tslib.__decorate([], PushapePush);
    return PushapePush;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PushapePush, decorators: [{
            type: i0.Injectable
        }], propDecorators: { hasPermission: [], createChannel: [], deleteChannel: [], listChannels: [] } });
var PushObject = /** @class */ (function () {
    function PushObject(options) {
        if (core.checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
            if (typeof window !== 'undefined') {
                this._objectInstance = window.PushNotification.init(options);
            }
        }
    }
    PushObject.prototype.on = function (event) { return core.cordovaInstance(this, "on", { "observable": true, "clearFunction": "off", "clearWithArgs": true }, arguments); };
    PushObject.prototype.unregister = function () { return core.cordovaInstance(this, "unregister", {}, arguments); };
    PushObject.prototype.setApplicationIconBadgeNumber = function (count) { return core.cordovaInstance(this, "setApplicationIconBadgeNumber", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.getApplicationIconBadgeNumber = function () { return core.cordovaInstance(this, "getApplicationIconBadgeNumber", {}, arguments); };
    PushObject.prototype.finish = function (id) { return core.cordovaInstance(this, "finish", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.clearAllNotifications = function () { return core.cordovaInstance(this, "clearAllNotifications", {}, arguments); };
    PushObject.prototype.subscribe = function (topic) { return core.cordovaInstance(this, "subscribe", {}, arguments); };
    PushObject.prototype.unsubscribe = function (topic) { return core.cordovaInstance(this, "unsubscribe", {}, arguments); };
    var _a;
    PushObject.pluginName = "PushapePush";
    PushObject.plugin = "pushape-cordova-push";
    PushObject.pluginRef = "PushNotification";
    PushObject = tslib.__decorate([
        tslib.__metadata("design:paramtypes", [typeof (_a = typeof PushapeOptions !== "undefined" && PushapeOptions) === "function" ? _a : Object])
    ], PushObject);
    return PushObject;
}());

exports.PushObject = PushObject;
exports.PushapePush = PushapePush;
