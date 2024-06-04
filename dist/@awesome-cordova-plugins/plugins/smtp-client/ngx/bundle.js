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

var SmtpClient = /** @class */ (function (_super) {
    tslib.__extends(SmtpClient, _super);
    function SmtpClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmtpClient.prototype.sendMail = function (mailSettings, successCallback, errorCallback) { return core.cordova(this, "sendMail", {}, arguments); };
    SmtpClient.prototype.isLoaded = function () { return core.cordova(this, "isLoaded", {}, arguments); };
    SmtpClient.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmtpClient, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SmtpClient.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmtpClient });
    SmtpClient.pluginName = "SMTPClient";
    SmtpClient.plugin = "cordova-plugin-smtp-client";
    SmtpClient.pluginRef = "smtpClient";
    SmtpClient.repo = "https://github.com/CWBudde/cordova-plugin-smtp-client";
    SmtpClient.install = "ionic cordova plugin add cordova-plugin-smtp-client";
    SmtpClient.platforms = ["Android", "iOS"];
    SmtpClient = tslib.__decorate([], SmtpClient);
    return SmtpClient;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmtpClient, decorators: [{
            type: i0.Injectable
        }], propDecorators: { sendMail: [], isLoaded: [] } });

exports.SmtpClient = SmtpClient;
