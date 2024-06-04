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

var Usabilla = /** @class */ (function (_super) {
    tslib.__extends(Usabilla, _super);
    function Usabilla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Usabilla.prototype.initialize = function (appId, customVars) { return core.cordova(this, "initialize", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.loadFeedbackForm = function (formId) { return core.cordova(this, "loadFeedbackForm", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.loadFeedbackFormWithCurrentViewScreenshot = function (formId) { return core.cordova(this, "loadFeedbackFormWithCurrentViewScreenshot", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.sendEvent = function (eventId) { return core.cordova(this, "sendEvent", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.resetCampaignData = function () { return core.cordova(this, "resetCampaignData", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.dismiss = function () { return core.cordova(this, "dismiss", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.getDefaultDataMasks = function () { return core.cordova(this, "getDefaultDataMasks", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.setDataMasking = function (masks, maskCharacter) { return core.cordova(this, "setDataMasking", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Usabilla, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Usabilla.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Usabilla });
    Usabilla.pluginName = "usabilla-cordova";
    Usabilla.plugin = "usabilla-cordova";
    Usabilla.pluginRef = "Usabilla";
    Usabilla.repo = "https://github.com/usabilla/usabilla-u4a-cordova";
    Usabilla.platforms = ["Android", "iOS"];
    Usabilla = tslib.__decorate([], Usabilla);
    return Usabilla;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Usabilla, decorators: [{
            type: i0.Injectable
        }], propDecorators: { initialize: [], loadFeedbackForm: [], loadFeedbackFormWithCurrentViewScreenshot: [], sendEvent: [], resetCampaignData: [], dismiss: [], getDefaultDataMasks: [], setDataMasking: [] } });

exports.Usabilla = Usabilla;
