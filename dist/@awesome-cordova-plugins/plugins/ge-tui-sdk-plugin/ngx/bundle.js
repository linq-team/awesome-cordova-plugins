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

var GeTuiSdkPlugin = /** @class */ (function (_super) {
    tslib.__extends(GeTuiSdkPlugin, _super);
    function GeTuiSdkPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPlugin.prototype.callback_init = function (callback) { return core.cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPlugin.prototype.initialize = function () { return core.cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPlugin.prototype.getClientId = function () { return core.cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPlugin.prototype.getVersion = function () { return core.cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeTuiSdkPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    GeTuiSdkPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeTuiSdkPlugin });
    GeTuiSdkPlugin.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPlugin.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPlugin.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPlugin.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPlugin.platforms = ["Android", "iOS"];
    GeTuiSdkPlugin = tslib.__decorate([], GeTuiSdkPlugin);
    return GeTuiSdkPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeTuiSdkPlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { callback_init: [], initialize: [], getClientId: [], getVersion: [] } });

exports.GeTuiSdkPlugin = GeTuiSdkPlugin;
