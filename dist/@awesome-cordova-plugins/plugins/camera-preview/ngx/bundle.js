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

var CameraPreview = /** @class */ (function (_super) {
    tslib.__extends(CameraPreview, _super);
    function CameraPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CONTINUOUS_PICTURE: 'continuous-picture',
            CONTINUOUS_VIDEO: 'continuous-video',
            EDOF: 'edof',
            INFINITY: 'infinity',
            MACRO: 'macro', // Android Only
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom',
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch', // Android Only
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            BLACKBOARD: 'blackboard',
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            WHITEBOARD: 'whiteboard', // Android Only
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front',
        };
        return _this;
    }
    CameraPreview.prototype.startCamera = function (options) { return core.cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.startRecordVideo = function (options) { return core.cordova(this, "startRecordVideo", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.stopCamera = function () { return core.cordova(this, "stopCamera", {}, arguments); };
    CameraPreview.prototype.stopRecordVideo = function () { return core.cordova(this, "stopRecordVideo", {}, arguments); };
    CameraPreview.prototype.switchCamera = function () { return core.cordova(this, "switchCamera", {}, arguments); };
    CameraPreview.prototype.hide = function () { return core.cordova(this, "hide", {}, arguments); };
    CameraPreview.prototype.show = function () { return core.cordova(this, "show", {}, arguments); };
    CameraPreview.prototype.takePicture = function (options) { return core.cordova(this, "takePicture", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.takeSnapshot = function (options) { return core.cordova(this, "takeSnapshot", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setColorEffect = function (effect) { return core.cordova(this, "setColorEffect", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setZoom = function (zoom) { return core.cordova(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getMaxZoom = function () { return core.cordova(this, "getMaxZoom", {}, arguments); };
    CameraPreview.prototype.getZoom = function () { return core.cordova(this, "getZoom", {}, arguments); };
    CameraPreview.prototype.setPreviewSize = function (dimensions) { return core.cordova(this, "setPreviewSize", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getFocusMode = function () { return core.cordova(this, "getFocusMode", {}, arguments); };
    CameraPreview.prototype.setFocusMode = function (focusMode) { return core.cordova(this, "setFocusMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFocusModes = function () { return core.cordova(this, "getSupportedFocusModes", {}, arguments); };
    CameraPreview.prototype.getFlashMode = function () { return core.cordova(this, "getFlashMode", {}, arguments); };
    CameraPreview.prototype.setFlashMode = function (flashMode) { return core.cordova(this, "setFlashMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFlashModes = function () { return core.cordova(this, "getSupportedFlashModes", {}, arguments); };
    CameraPreview.prototype.getSupportedPictureSizes = function () { return core.cordova(this, "getSupportedPictureSizes", {}, arguments); };
    CameraPreview.prototype.getExposureMode = function () { return core.cordova(this, "getExposureMode", {}, arguments); };
    CameraPreview.prototype.getExposureModes = function () { return core.cordova(this, "getExposureModes", {}, arguments); };
    CameraPreview.prototype.setExposureMode = function (lock) { return core.cordova(this, "setExposureMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensation = function () { return core.cordova(this, "getExposureCompensation", {}, arguments); };
    CameraPreview.prototype.setExposureCompensation = function (exposureCompensation) { return core.cordova(this, "setExposureCompensation", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensationRange = function () { return core.cordova(this, "getExposureCompensationRange", {}, arguments); };
    CameraPreview.prototype.tapToFocus = function (xPoint, yPoint) { return core.cordova(this, "tapToFocus", {}, arguments); };
    CameraPreview.prototype.onBackButton = function () { return core.cordova(this, "onBackButton", {}, arguments); };
    CameraPreview.prototype.getHorizontalFOV = function () { return core.cordova(this, "getHorizontalFOV", {}, arguments); };
    CameraPreview.prototype.getCameraCharacteristics = function () { return core.cordova(this, "getCameraCharacteristics", {}, arguments); };
    CameraPreview.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CameraPreview, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CameraPreview.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CameraPreview });
    CameraPreview.pluginName = "CameraPreview";
    CameraPreview.plugin = "cordova-plugin-camera-preview";
    CameraPreview.pluginRef = "CameraPreview";
    CameraPreview.repo = "https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview";
    CameraPreview.platforms = ["Android", "iOS"];
    CameraPreview = tslib.__decorate([], CameraPreview);
    return CameraPreview;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CameraPreview, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startCamera: [], startRecordVideo: [], stopCamera: [], stopRecordVideo: [], switchCamera: [], hide: [], show: [], takePicture: [], takeSnapshot: [], setColorEffect: [], setZoom: [], getMaxZoom: [], getZoom: [], setPreviewSize: [], getFocusMode: [], setFocusMode: [], getSupportedFocusModes: [], getFlashMode: [], setFlashMode: [], getSupportedFlashModes: [], getSupportedPictureSizes: [], getExposureMode: [], getExposureModes: [], setExposureMode: [], getExposureCompensation: [], setExposureCompensation: [], getExposureCompensationRange: [], tapToFocus: [], onBackButton: [], getHorizontalFOV: [], getCameraCharacteristics: [] } });

exports.CameraPreview = CameraPreview;
