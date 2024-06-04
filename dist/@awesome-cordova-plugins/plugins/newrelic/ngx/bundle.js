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

var NewRelic = /** @class */ (function (_super) {
    tslib.__extends(NewRelic, _super);
    function NewRelic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewRelic.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", { "sync": true }, arguments); };
    NewRelic.prototype.setAttribute = function (name, value) { return core.cordova(this, "setAttribute", { "sync": true }, arguments); };
    NewRelic.prototype.removeAttribute = function (name) { return core.cordova(this, "removeAttribute", { "sync": true }, arguments); };
    NewRelic.prototype.recordBreadcrumb = function (name, eventAttributes) { return core.cordova(this, "recordBreadcrumb", { "sync": true }, arguments); };
    NewRelic.prototype.recordCustomEvent = function (eventType, eventName, eventAttributes) { return core.cordova(this, "recordCustomEvent", { "sync": true }, arguments); };
    NewRelic.prototype.startInteraction = function (name) { return core.cordova(this, "startInteraction", { "sync": true }, arguments); };
    NewRelic.prototype.endInteraction = function (name) { return core.cordova(this, "endInteraction", { "sync": true }, arguments); };
    NewRelic.prototype.crashNow = function (message) { return core.cordova(this, "crashNow", { "sync": true }, arguments); };
    NewRelic.prototype.currentSessionId = function (name) { return core.cordova(this, "currentSessionId", { "sync": true }, arguments); };
    NewRelic.prototype.incrementAttribute = function (name, value) { return core.cordova(this, "incrementAttribute", { "sync": true }, arguments); };
    NewRelic.prototype.recordMetric = function (name, category, value, countUnit, valueUnit) { return core.cordova(this, "recordMetric", { "sync": true }, arguments); };
    NewRelic.prototype.removeAllAttributes = function () { return core.cordova(this, "removeAllAttributes", { "sync": true }, arguments); };
    NewRelic.prototype.setMaxEventPoolSize = function (maxPoolSize) { return core.cordova(this, "setMaxEventPoolSize", { "sync": true }, arguments); };
    NewRelic.prototype.setMaxEventBufferTime = function (maxBufferTimeInSeconds) { return core.cordova(this, "setMaxEventBufferTime", { "sync": true }, arguments); };
    NewRelic.prototype.analyticsEventEnabled = function (enabled) { return core.cordova(this, "analyticsEventEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.networkRequestEnabled = function (enabled) { return core.cordova(this, "networkRequestEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.networkErrorRequestEnabled = function (enabled) { return core.cordova(this, "networkErrorRequestEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.httpRequestBodyCaptureEnabled = function (enabled) { return core.cordova(this, "httpRequestBodyCaptureEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.noticeHttpTransaction = function (url, method, status, startTime, endTime, bytesSent, bytesReceived, body) { return core.cordova(this, "noticeHttpTransaction", { "sync": true }, arguments); };
    NewRelic.prototype.noticeNetworkFailure = function (url, method, startTime, endTime, failure) { return core.cordova(this, "noticeNetworkFailure", { "sync": true }, arguments); };
    NewRelic.prototype.recordError = function (err) { return core.cordova(this, "recordError", { "sync": true }, arguments); };
    NewRelic.prototype.shutdown = function () { return core.cordova(this, "shutdown", { "sync": true }, arguments); };
    NewRelic.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NewRelic, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NewRelic.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NewRelic });
    NewRelic.pluginName = "NewRelic";
    NewRelic.plugin = "newrelic-cordova-plugin";
    NewRelic.pluginRef = "NewRelic";
    NewRelic.repo = "https://github.com/newrelic/newrelic-cordova-plugin";
    NewRelic.install = "ionic cordova plugin add https://github.com/newrelic/newrelic-cordova-plugin.git --variable IOS_APP_TOKEN=\"{ios-app-token}\" --variable ANDROID_APP_TOKEN=\"{android-app-token}\"";
    NewRelic.installVariables = ["IOS_APP_TOKEN", "ANDROID_APP_TOKEN"];
    NewRelic.platforms = ["Android", "iOS"];
    NewRelic = tslib.__decorate([], NewRelic);
    return NewRelic;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NewRelic, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setUserId: [], setAttribute: [], removeAttribute: [], recordBreadcrumb: [], recordCustomEvent: [], startInteraction: [], endInteraction: [], crashNow: [], currentSessionId: [], incrementAttribute: [], recordMetric: [], removeAllAttributes: [], setMaxEventPoolSize: [], setMaxEventBufferTime: [], analyticsEventEnabled: [], networkRequestEnabled: [], networkErrorRequestEnabled: [], httpRequestBodyCaptureEnabled: [], noticeHttpTransaction: [], noticeNetworkFailure: [], recordError: [], shutdown: [] } });

exports.NewRelic = NewRelic;
