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

var SMS = /** @class */ (function (_super) {
    tslib.__extends(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.send = function (phoneNumber, message, options) { return core.cordova(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMS.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMS.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SMS, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SMS.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SMS });
    SMS.pluginName = "SMS";
    SMS.plugin = "cordova-sms-plugin";
    SMS.pluginRef = "sms";
    SMS.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMS.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    SMS = tslib.__decorate([], SMS);
    return SMS;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SMS, decorators: [{
            type: i0.Injectable
        }], propDecorators: { send: [], hasPermission: [] } });

exports.SMS = SMS;
