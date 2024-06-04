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

var MobileAccessibility = /** @class */ (function (_super) {
    tslib.__extends(MobileAccessibility, _super);
    function MobileAccessibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileAccessibility.prototype.functionName = function (arg1, arg2) { return core.cordova(this, "functionName", {}, arguments); };
    MobileAccessibility.prototype.isScreenReaderRunning = function () { return core.cordova(this, "isScreenReaderRunning", {}, arguments); };
    MobileAccessibility.prototype.isVoiceOverRunning = function () { return core.cordova(this, "isVoiceOverRunning", {}, arguments); };
    MobileAccessibility.prototype.isTalkBackRunning = function () { return core.cordova(this, "isTalkBackRunning", {}, arguments); };
    MobileAccessibility.prototype.isChromeVoxActive = function () { return core.cordova(this, "isChromeVoxActive", {}, arguments); };
    MobileAccessibility.prototype.isBoldTextEnabled = function () { return core.cordova(this, "isBoldTextEnabled", {}, arguments); };
    MobileAccessibility.prototype.isClosedCaptioningEnabled = function () { return core.cordova(this, "isClosedCaptioningEnabled", {}, arguments); };
    MobileAccessibility.prototype.isDarkerSystemColorsEnabled = function () { return core.cordova(this, "isDarkerSystemColorsEnabled", {}, arguments); };
    MobileAccessibility.prototype.isGrayscaleEnabled = function () { return core.cordova(this, "isGrayscaleEnabled", {}, arguments); };
    MobileAccessibility.prototype.isGuidedAccessEnabled = function () { return core.cordova(this, "isGuidedAccessEnabled", {}, arguments); };
    MobileAccessibility.prototype.isInvertColorsEnabled = function () { return core.cordova(this, "isInvertColorsEnabled", {}, arguments); };
    MobileAccessibility.prototype.isMonoAudioEnabled = function () { return core.cordova(this, "isMonoAudioEnabled", {}, arguments); };
    MobileAccessibility.prototype.isReduceMotionEnabled = function () { return core.cordova(this, "isReduceMotionEnabled", {}, arguments); };
    MobileAccessibility.prototype.isReduceTransparencyEnabled = function () { return core.cordova(this, "isReduceTransparencyEnabled", {}, arguments); };
    MobileAccessibility.prototype.isSpeakScreenEnabled = function () { return core.cordova(this, "isSpeakScreenEnabled", {}, arguments); };
    MobileAccessibility.prototype.isSpeakSelectionEnabled = function () { return core.cordova(this, "isSpeakSelectionEnabled", {}, arguments); };
    MobileAccessibility.prototype.isSwitchControlRunning = function () { return core.cordova(this, "isSwitchControlRunning", {}, arguments); };
    MobileAccessibility.prototype.isTouchExplorationEnabled = function () { return core.cordova(this, "isTouchExplorationEnabled", {}, arguments); };
    MobileAccessibility.prototype.getTextZoom = function () { return core.cordova(this, "getTextZoom", {}, arguments); };
    MobileAccessibility.prototype.setTextZoom = function (textZoom) { return core.cordova(this, "setTextZoom", {}, arguments); };
    MobileAccessibility.prototype.updateTextZoom = function () { return core.cordova(this, "updateTextZoom", {}, arguments); };
    MobileAccessibility.prototype.usePreferredTextZoom = function (value) { return core.cordova(this, "usePreferredTextZoom", {}, arguments); };
    MobileAccessibility.prototype.postNotification = function (mobileAccessibilityNotification, value) { return core.cordova(this, "postNotification", {}, arguments); };
    MobileAccessibility.prototype.speak = function (value, queueMode, properties) { return core.cordova(this, "speak", {}, arguments); };
    MobileAccessibility.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    MobileAccessibility.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MobileAccessibility, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MobileAccessibility.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MobileAccessibility });
    MobileAccessibility.pluginName = "MobileAccessibility";
    MobileAccessibility.plugin = "phonegap-plugin-mobile-accessibility";
    MobileAccessibility.pluginRef = "window.MobileAccessibility";
    MobileAccessibility.repo = "https://github.com/phonegap/phonegap-mobile-accessibility";
    MobileAccessibility.install = "";
    MobileAccessibility.installVariables = [];
    MobileAccessibility.platforms = ["Android", "iOS", "Amazon Fire OS"];
    MobileAccessibility = tslib.__decorate([], MobileAccessibility);
    return MobileAccessibility;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MobileAccessibility, decorators: [{
            type: i0.Injectable
        }], propDecorators: { functionName: [], isScreenReaderRunning: [], isVoiceOverRunning: [], isTalkBackRunning: [], isChromeVoxActive: [], isBoldTextEnabled: [], isClosedCaptioningEnabled: [], isDarkerSystemColorsEnabled: [], isGrayscaleEnabled: [], isGuidedAccessEnabled: [], isInvertColorsEnabled: [], isMonoAudioEnabled: [], isReduceMotionEnabled: [], isReduceTransparencyEnabled: [], isSpeakScreenEnabled: [], isSpeakSelectionEnabled: [], isSwitchControlRunning: [], isTouchExplorationEnabled: [], getTextZoom: [], setTextZoom: [], updateTextZoom: [], usePreferredTextZoom: [], postNotification: [], speak: [], stop: [] } });

exports.MobileAccessibility = MobileAccessibility;
