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

var StreamingMedia = /** @class */ (function (_super) {
    tslib.__extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { return core.cordova(this, "playVideo", { "sync": true }, arguments); };
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { return core.cordova(this, "playAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.stopAudio = function () { return core.cordova(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.pauseAudio = function () { return core.cordova(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.prototype.resumeAudio = function () { return core.cordova(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StreamingMedia, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StreamingMedia.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StreamingMedia });
    StreamingMedia.pluginName = "StreamingMedia";
    StreamingMedia.plugin = "cordova-plugin-streaming-media";
    StreamingMedia.pluginRef = "plugins.streamingMedia";
    StreamingMedia.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMedia.platforms = ["Amazon Fire OS", "Android", "iOS"];
    StreamingMedia = tslib.__decorate([], StreamingMedia);
    return StreamingMedia;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StreamingMedia, decorators: [{
            type: i0.Injectable
        }], propDecorators: { playVideo: [], playAudio: [], stopAudio: [], pauseAudio: [], resumeAudio: [] } });

exports.StreamingMedia = StreamingMedia;
