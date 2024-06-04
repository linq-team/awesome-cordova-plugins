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

var Wechat = /** @class */ (function (_super) {
    tslib.__extends(Wechat, _super);
    function Wechat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wechat.prototype.isInstalled = function () { return core.cordova(this, "isInstalled", {}, arguments); };
    Wechat.prototype.share = function (params) { return core.cordova(this, "share", {}, arguments); };
    Wechat.prototype.auth = function (scope, state) { return core.cordova(this, "auth", {}, arguments); };
    Wechat.prototype.sendPaymentRequest = function (params) { return core.cordova(this, "sendPaymentRequest", {}, arguments); };
    Wechat.prototype.jumpToWechat = function (url) { return core.cordova(this, "jumpToWechat", {}, arguments); };
    Wechat.prototype.chooseInvoiceFromWX = function (params) { return core.cordova(this, "chooseInvoiceFromWX", {}, arguments); };
    Wechat.prototype.openMiniProgram = function (params) { return core.cordova(this, "openMiniProgram", {}, arguments); };
    Wechat.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Wechat, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Wechat.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Wechat });
    Wechat.pluginName = "Wechat";
    Wechat.plugin = "cordova-plugin-wechat";
    Wechat.pluginRef = "Wechat";
    Wechat.repo = "https://github.com/xu-li/cordova-plugin-wechat.git";
    Wechat.install = "cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID";
    Wechat.installVariables = ["wechatappid"];
    Wechat.platforms = ["Android", "iOS"];
    Wechat = tslib.__decorate([], Wechat);
    return Wechat;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Wechat, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isInstalled: [], share: [], auth: [], sendPaymentRequest: [], jumpToWechat: [], chooseInvoiceFromWX: [], openMiniProgram: [] } });

exports.Wechat = Wechat;
