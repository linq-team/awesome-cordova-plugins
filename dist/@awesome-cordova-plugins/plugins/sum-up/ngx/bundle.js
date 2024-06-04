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

var SumUpKeys = /** @class */ (function () {
    function SumUpKeys() {
        this.accessToken = '';
        this.affiliateKey = '';
    }
    return SumUpKeys;
}());
var SumUp = /** @class */ (function (_super) {
    tslib.__extends(SumUp, _super);
    function SumUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumUp.prototype.login = function (sumUpKeys) { return core.cordova(this, "login", {}, arguments); };
    SumUp.prototype.auth = function (accessToken) { return core.cordova(this, "auth", {}, arguments); };
    SumUp.prototype.getSettings = function () { return core.cordova(this, "getSettings", {}, arguments); };
    SumUp.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    SumUp.prototype.isLoggedIn = function () { return core.cordova(this, "isLoggedIn", {}, arguments); };
    SumUp.prototype.prepare = function () { return core.cordova(this, "prepare", {}, arguments); };
    SumUp.prototype.closeConnection = function () { return core.cordova(this, "closeConnection", {}, arguments); };
    SumUp.prototype.setup = function () { return core.cordova(this, "setup", {}, arguments); };
    SumUp.prototype.test = function () { return core.cordova(this, "test", {}, arguments); };
    SumUp.prototype.pay = function (amount, title, currencyCode) { return core.cordova(this, "pay", {}, arguments); };
    SumUp.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SumUp, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SumUp.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SumUp });
    SumUp.pluginName = "SumUp";
    SumUp.plugin = "cordova-sumup-plugin";
    SumUp.pluginRef = "window.SumUp";
    SumUp.repo = "https://github.com/mariusbackes/cordova-plugin-sumup";
    SumUp.install = "cordova plugin add cordova-sumup-plugin --variable SUMUP_API_KEY=INSERT_YOUR_KEY";
    SumUp.installVariables = ["SUMUP_API_KEY"];
    SumUp.platforms = ["Android", "iOS"];
    SumUp = tslib.__decorate([], SumUp);
    return SumUp;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SumUp, decorators: [{
            type: i0.Injectable
        }], propDecorators: { login: [], auth: [], getSettings: [], logout: [], isLoggedIn: [], prepare: [], closeConnection: [], setup: [], test: [], pay: [] } });

exports.SumUp = SumUp;
exports.SumUpKeys = SumUpKeys;
