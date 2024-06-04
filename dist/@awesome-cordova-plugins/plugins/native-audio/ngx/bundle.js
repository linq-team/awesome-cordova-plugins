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

var NativeAudio = /** @class */ (function (_super) {
    tslib.__extends(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return core.cordova(this, "preloadSimple", {}, arguments); };
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return core.cordova(this, "preloadComplex", {}, arguments); };
    NativeAudio.prototype.play = function (id, completeCallback) { return core.cordova(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudio.prototype.stop = function (id) { return core.cordova(this, "stop", {}, arguments); };
    NativeAudio.prototype.loop = function (id) { return core.cordova(this, "loop", {}, arguments); };
    NativeAudio.prototype.unload = function (id) { return core.cordova(this, "unload", {}, arguments); };
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return core.cordova(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudio.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeAudio, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NativeAudio.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeAudio });
    NativeAudio.pluginName = "NativeAudio";
    NativeAudio.plugin = "cordova-plugin-nativeaudio";
    NativeAudio.pluginRef = "plugins.NativeAudio";
    NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudio.platforms = ["Android", "Browser", "iOS"];
    NativeAudio = tslib.__decorate([], NativeAudio);
    return NativeAudio;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeAudio, decorators: [{
            type: i0.Injectable
        }], propDecorators: { preloadSimple: [], preloadComplex: [], play: [], stop: [], loop: [], unload: [], setVolumeForComplexAsset: [] } });

exports.NativeAudio = NativeAudio;
