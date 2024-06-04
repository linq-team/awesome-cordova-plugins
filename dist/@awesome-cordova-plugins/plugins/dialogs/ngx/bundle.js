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

var Dialogs = /** @class */ (function (_super) {
    tslib.__extends(Dialogs, _super);
    function Dialogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialogs.prototype.alert = function (message, title, buttonName) { return core.cordova(this, "alert", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    Dialogs.prototype.confirm = function (message, title, buttonLabels) { return core.cordova(this, "confirm", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    Dialogs.prototype.prompt = function (message, title, buttonLabels, defaultText) { return core.cordova(this, "prompt", { "successIndex": 1, "errorIndex": 5 }, arguments); };
    Dialogs.prototype.beep = function (times) { return core.cordova(this, "beep", { "sync": true }, arguments); };
    Dialogs.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Dialogs, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Dialogs.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Dialogs });
    Dialogs.pluginName = "Dialogs";
    Dialogs.plugin = "cordova-plugin-dialogs";
    Dialogs.pluginRef = "navigator.notification";
    Dialogs.repo = "https://github.com/apache/cordova-plugin-dialogs";
    Dialogs.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Dialogs = tslib.__decorate([], Dialogs);
    return Dialogs;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Dialogs, decorators: [{
            type: i0.Injectable
        }], propDecorators: { alert: [], confirm: [], prompt: [], beep: [] } });

exports.Dialogs = Dialogs;
