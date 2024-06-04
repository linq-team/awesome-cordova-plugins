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

var EmailComposer = /** @class */ (function (_super) {
    tslib.__extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (resolve) {
                    EmailComposer.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (resolve) {
                    if (app) {
                        EmailComposer.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (resolve) {
                    EmailComposer.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.open = function (options, scope) { return core.cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return core.cordova(this, "addAlias", {}, arguments); };
    EmailComposer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComposer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EmailComposer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComposer });
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    EmailComposer = tslib.__decorate([], EmailComposer);
    return EmailComposer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComposer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { hasPermission: [], requestPermission: [], hasAccount: [], hasClient: [], getClients: [], isAvailable: [], open: [], addAlias: [] } });

exports.EmailComposer = EmailComposer;
