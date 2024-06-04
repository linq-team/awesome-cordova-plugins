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

var SmsRetriever = /** @class */ (function (_super) {
    tslib.__extends(SmsRetriever, _super);
    function SmsRetriever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetriever.prototype.startWatching = function () { return core.cordova(this, "startWatching", {}, arguments); };
    SmsRetriever.prototype.getAppHash = function () { return core.cordova(this, "getAppHash", {}, arguments); };
    SmsRetriever.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmsRetriever, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SmsRetriever.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmsRetriever });
    SmsRetriever.pluginName = "SmsRetriever";
    SmsRetriever.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetriever.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetriever.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetriever.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetriever.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetriever.platforms = ["Android"];
    SmsRetriever = tslib.__decorate([], SmsRetriever);
    return SmsRetriever;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmsRetriever, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startWatching: [], getAppHash: [] } });

exports.SmsRetriever = SmsRetriever;
