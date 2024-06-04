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

var LineLogin = /** @class */ (function (_super) {
    tslib.__extends(LineLogin, _super);
    function LineLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLogin.prototype.initialize = function (param) { return core.cordova(this, "initialize", {}, arguments); };
    LineLogin.prototype.login = function () { return core.cordova(this, "login", {}, arguments); };
    LineLogin.prototype.loginWeb = function () { return core.cordova(this, "loginWeb", {}, arguments); };
    LineLogin.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    LineLogin.prototype.getAccessToken = function () { return core.cordova(this, "getAccessToken", {}, arguments); };
    LineLogin.prototype.verifyAccessToken = function () { return core.cordova(this, "verifyAccessToken", {}, arguments); };
    LineLogin.prototype.refreshAccessToken = function () { return core.cordova(this, "refreshAccessToken", {}, arguments); };
    LineLogin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LineLogin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LineLogin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LineLogin });
    LineLogin.pluginName = "LineLogin";
    LineLogin.plugin = "cordova-line-login-plugin";
    LineLogin.pluginRef = "lineLogin";
    LineLogin.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLogin.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLogin.installVariables = ["LINE_CHANNEL_ID"];
    LineLogin.platforms = ["Android", "iOS"];
    LineLogin = tslib.__decorate([], LineLogin);
    return LineLogin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LineLogin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { initialize: [], login: [], loginWeb: [], logout: [], getAccessToken: [], verifyAccessToken: [], refreshAccessToken: [] } });

exports.LineLogin = LineLogin;
