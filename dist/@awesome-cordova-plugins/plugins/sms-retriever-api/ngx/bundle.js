'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
var rxjs = require('rxjs');

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

exports.SmsRetrieverStatus = void 0;
(function (SmsRetrieverStatus) {
    SmsRetrieverStatus["AlreadyStarted"] = "SMS_RETRIEVER_ALREADY_STARTED";
    SmsRetrieverStatus["Started"] = "SMS_RETRIEVER_STARTED";
    SmsRetrieverStatus["Done"] = "SMS_RETRIEVER_DONE";
    SmsRetrieverStatus["Timeout"] = "TIMEOUT";
})(exports.SmsRetrieverStatus || (exports.SmsRetrieverStatus = {}));
var SmsRetrieverApi = /** @class */ (function (_super) {
    tslib.__extends(SmsRetrieverApi, _super);
    function SmsRetrieverApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetrieverApi.prototype.startWatch = function () { return core.cordova(this, "startWatch", { "observable": true }, arguments); };
    SmsRetrieverApi.prototype.stopWatch = function () { return core.cordova(this, "stopWatch", {}, arguments); };
    SmsRetrieverApi.prototype.getHashString = function () { return core.cordova(this, "getHashString", {}, arguments); };
    SmsRetrieverApi.prototype.getPhoneNumber = function () { return core.cordova(this, "getPhoneNumber", {}, arguments); };
    /**
     * Watch incoming SMS event listener
     *
     * @returns {Observable<IncomingSMS>}
     */
    SmsRetrieverApi.prototype.onSMSArrive = function () {
        return rxjs.fromEvent(document, 'onSMSArrive');
    };
    SmsRetrieverApi.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmsRetrieverApi, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SmsRetrieverApi.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmsRetrieverApi });
    SmsRetrieverApi.pluginName = "SmsRetriever";
    SmsRetrieverApi.plugin = "cordova-plugin-sms-retriever";
    SmsRetrieverApi.pluginRef = "cordova.plugins.SMSRetriever";
    SmsRetrieverApi.repo = "https://github.com/andreszs/cordova-plugin-sms-retriever";
    SmsRetrieverApi.install = "ionic cordova plugin add cordova-plugin-sms-retriever --variable PLAY_SERVICES_VERSION=\"18.0.1\"";
    SmsRetrieverApi.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetrieverApi.platforms = ["Android"];
    SmsRetrieverApi = tslib.__decorate([], SmsRetrieverApi);
    return SmsRetrieverApi;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SmsRetrieverApi, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startWatch: [], stopWatch: [], getHashString: [], getPhoneNumber: [] } });

exports.SmsRetrieverApi = SmsRetrieverApi;
