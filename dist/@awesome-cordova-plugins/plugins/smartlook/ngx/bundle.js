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

exports.RenderingMode = void 0;
(function (RenderingMode) {
    RenderingMode[RenderingMode["NO_RENDERING"] = 0] = "NO_RENDERING";
    RenderingMode[RenderingMode["NATIVE"] = 1] = "NATIVE";
    RenderingMode[RenderingMode["WIREFRAME"] = 2] = "WIREFRAME";
})(exports.RenderingMode || (exports.RenderingMode = {}));
exports.RecordingStatus = void 0;
(function (RecordingStatus) {
    RecordingStatus[RecordingStatus["Recording"] = 0] = "Recording";
    RecordingStatus[RecordingStatus["NotStarted"] = 1] = "NotStarted";
    RecordingStatus[RecordingStatus["Stopped"] = 2] = "Stopped";
    RecordingStatus[RecordingStatus["BellowMinSdkVersion"] = 3] = "BellowMinSdkVersion";
    RecordingStatus[RecordingStatus["ProjectLimitReached"] = 4] = "ProjectLimitReached";
    RecordingStatus[RecordingStatus["StorageLimitReached"] = 5] = "StorageLimitReached";
    RecordingStatus[RecordingStatus["InternalError"] = 6] = "InternalError";
    RecordingStatus[RecordingStatus["NotRunningInSwiftUIContext"] = 7] = "NotRunningInSwiftUIContext";
    RecordingStatus[RecordingStatus["UnsupportedPlatform"] = 8] = "UnsupportedPlatform";
})(exports.RecordingStatus || (exports.RecordingStatus = {}));
var Smartlook = /** @class */ (function (_super) {
    tslib.__extends(Smartlook, _super);
    function Smartlook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smartlook.prototype.start = function () { return core.cordova(this, "start", { "sync": true }, arguments); };
    Smartlook.prototype.stop = function () { return core.cordova(this, "stop", { "sync": true }, arguments); };
    Smartlook.prototype.reset = function () { return core.cordova(this, "reset", { "sync": true }, arguments); };
    Smartlook.prototype.trackEvent = function (options) { return core.cordova(this, "trackEvent", { "sync": true }, arguments); };
    Smartlook.prototype.trackSelector = function (options) { return core.cordova(this, "trackSelector", { "sync": true }, arguments); };
    Smartlook.prototype.trackNavigationEnter = function (options) { return core.cordova(this, "trackNavigationEnter", { "sync": true }, arguments); };
    Smartlook.prototype.trackNavigationExit = function (options) { return core.cordova(this, "trackNavigationExit", { "sync": true }, arguments); };
    Smartlook.prototype.setReferrer = function (options) { return core.cordova(this, "setReferrer", { "sync": true }, arguments); };
    Smartlook.prototype.putGlobalEventProperty = function (options) { return core.cordova(this, "putGlobalEventProperty", { "sync": true }, arguments); };
    Smartlook.prototype.getGlobalEventProperty = function (options) { return core.cordova(this, "getGlobalEventProperty", {}, arguments); };
    Smartlook.prototype.removeGlobalEventProperty = function (options) { return core.cordova(this, "removeGlobalEventProperty", { "sync": true }, arguments); };
    Smartlook.prototype.clearGlobalEventProperties = function () { return core.cordova(this, "clearGlobalEventProperties", { "sync": true }, arguments); };
    Smartlook.prototype.setUserIdentifier = function (options) { return core.cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    Smartlook.prototype.setUserName = function (options) { return core.cordova(this, "setUserName", { "sync": true }, arguments); };
    Smartlook.prototype.setUserEmail = function (options) { return core.cordova(this, "setUserEmail", { "sync": true }, arguments); };
    Smartlook.prototype.setUserProperty = function (options) { return core.cordova(this, "setUserProperty", { "sync": true }, arguments); };
    Smartlook.prototype.getUserProperty = function (options) { return core.cordova(this, "getUserProperty", {}, arguments); };
    Smartlook.prototype.removeUserProperty = function (options) { return core.cordova(this, "removeUserProperty", { "sync": true }, arguments); };
    Smartlook.prototype.openNewUser = function () { return core.cordova(this, "openNewUser", { "sync": true }, arguments); };
    Smartlook.prototype.openNewSession = function () { return core.cordova(this, "openNewSession", { "sync": true }, arguments); };
    Smartlook.prototype.getUserUrl = function () { return core.cordova(this, "getUserUrl", {}, arguments); };
    Smartlook.prototype.getSessionUrl = function () { return core.cordova(this, "getSessionUrl", {}, arguments); };
    Smartlook.prototype.getSessionUrlWithTimestamp = function () { return core.cordova(this, "getSessionUrlWithTimestamp", {}, arguments); };
    Smartlook.prototype.setRelayProxyHost = function (options) { return core.cordova(this, "setRelayProxyHost", { "sync": true }, arguments); };
    Smartlook.prototype.setFrameRate = function (options) { return core.cordova(this, "setFrameRate", { "sync": true }, arguments); };
    Smartlook.prototype.getFrameRate = function () { return core.cordova(this, "getFrameRate", {}, arguments); };
    Smartlook.prototype.setJobUploadEnabled = function (options) { return core.cordova(this, "setJobUploadEnabled", { "sync": true }, arguments); };
    Smartlook.prototype.setAdaptiveFrameRateEnabled = function (options) { return core.cordova(this, "setAdaptiveFrameRateEnabled", { "sync": true }, arguments); };
    Smartlook.prototype.getAdaptiveFrameRateEnabled = function () { return core.cordova(this, "getAdaptiveFrameRateEnabled", {}, arguments); };
    Smartlook.prototype.eventTrackingEnableAll = function () { return core.cordova(this, "eventTrackingEnableAll", { "sync": true }, arguments); };
    Smartlook.prototype.eventTrackingDisableAll = function () { return core.cordova(this, "eventTrackingDisableAll", { "sync": true }, arguments); };
    Smartlook.prototype.setProjectKey = function (options) { return core.cordova(this, "setProjectKey", { "sync": true }, arguments); };
    Smartlook.prototype.isRecording = function () { return core.cordova(this, "isRecording", {}, arguments); };
    Smartlook.prototype.getProjectKey = function () { return core.cordova(this, "getProjectKey", {}, arguments); };
    Smartlook.prototype.setEventTrackingInteractionUserStatus = function (options) { return core.cordova(this, "setEventTrackingInteractionUserStatus", { "sync": true }, arguments); };
    Smartlook.prototype.setEventTrackingInteractionRageClickStatus = function (options) { return core.cordova(this, "setEventTrackingInteractionRageClickStatus", { "sync": true }, arguments); };
    Smartlook.prototype.restoreDefault = function () { return core.cordova(this, "restoreDefault", { "sync": true }, arguments); };
    Smartlook.prototype.setWebViewSensitivity = function (options) { return core.cordova(this, "setWebViewSensitivity", { "sync": true }, arguments); };
    Smartlook.prototype.getRenderingMode = function () { return core.cordova(this, "getRenderingMode", {}, arguments); };
    Smartlook.prototype.getRecordingStatus = function () { return core.cordova(this, "getRecordingStatus", {}, arguments); };
    Smartlook.prototype.getStateFrameRate = function () { return core.cordova(this, "getStateFrameRate", {}, arguments); };
    Smartlook.prototype.setRenderingMode = function (options) { return core.cordova(this, "setRenderingMode", { "sync": true }, arguments); };
    Smartlook.prototype.registerUserUrlChangedListener = function (options) { return core.cordova(this, "registerUserUrlChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.registerSessionUrlChangedListener = function (options) { return core.cordova(this, "registerSessionUrlChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.registerRenderingModeChangedListener = function (options) { return core.cordova(this, "registerRenderingModeChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.registerRecordingStatusChangedListener = function (options) { return core.cordova(this, "registerRecordingStatusChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.removeUserUrlChangedListener = function () { return core.cordova(this, "removeUserUrlChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.removeSessionUrlChangedListener = function () { return core.cordova(this, "removeSessionUrlChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.removeRenderingModeChangedListener = function () { return core.cordova(this, "removeRenderingModeChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.removeRecordingStatusChangedListener = function () { return core.cordova(this, "removeRecordingStatusChangedListener", { "sync": true }, arguments); };
    Smartlook.prototype.setRecordingMask = function (options) { return core.cordova(this, "setRecordingMask", { "sync": true }, arguments); };
    Smartlook.prototype.enableLogs = function () { return core.cordova(this, "enableLogs", { "sync": true }, arguments); };
    Smartlook.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Smartlook, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Smartlook.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Smartlook });
    Smartlook.pluginName = "Smartlook";
    Smartlook.plugin = "https://github.com/smartlook/cordova-smartlook.git";
    Smartlook.pluginRef = "cordova.plugins.SmartlookPlugin";
    Smartlook.repo = "https://github.com/smartlook/cordova-smartlook.git";
    Smartlook.platforms = ["Android", "iOS"];
    Smartlook = tslib.__decorate([], Smartlook);
    return Smartlook;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Smartlook, decorators: [{
            type: i0.Injectable
        }], propDecorators: { start: [], stop: [], reset: [], trackEvent: [], trackSelector: [], trackNavigationEnter: [], trackNavigationExit: [], setReferrer: [], putGlobalEventProperty: [], getGlobalEventProperty: [], removeGlobalEventProperty: [], clearGlobalEventProperties: [], setUserIdentifier: [], setUserName: [], setUserEmail: [], setUserProperty: [], getUserProperty: [], removeUserProperty: [], openNewUser: [], openNewSession: [], getUserUrl: [], getSessionUrl: [], getSessionUrlWithTimestamp: [], setRelayProxyHost: [], setFrameRate: [], getFrameRate: [], setJobUploadEnabled: [], setAdaptiveFrameRateEnabled: [], getAdaptiveFrameRateEnabled: [], eventTrackingEnableAll: [], eventTrackingDisableAll: [], setProjectKey: [], isRecording: [], getProjectKey: [], setEventTrackingInteractionUserStatus: [], setEventTrackingInteractionRageClickStatus: [], restoreDefault: [], setWebViewSensitivity: [], getRenderingMode: [], getRecordingStatus: [], getStateFrameRate: [], setRenderingMode: [], registerUserUrlChangedListener: [], registerSessionUrlChangedListener: [], registerRenderingModeChangedListener: [], registerRecordingStatusChangedListener: [], removeUserUrlChangedListener: [], removeSessionUrlChangedListener: [], removeRenderingModeChangedListener: [], removeRecordingStatusChangedListener: [], setRecordingMask: [], enableLogs: [] } });

exports.Smartlook = Smartlook;
