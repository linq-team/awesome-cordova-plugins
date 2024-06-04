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

var VideoPlayer = /** @class */ (function (_super) {
    tslib.__extends(VideoPlayer, _super);
    function VideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoPlayer.prototype.play = function (fileUrl, options) { return core.cordova(this, "play", {}, arguments); };
    VideoPlayer.prototype.close = function () { return core.cordova(this, "close", { "sync": true }, arguments); };
    VideoPlayer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VideoPlayer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    VideoPlayer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VideoPlayer });
    VideoPlayer.pluginName = "VideoPlayer";
    VideoPlayer.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
    VideoPlayer.pluginRef = "VideoPlayer";
    VideoPlayer.repo = "https://github.com/moust/cordova-plugin-videoplayer";
    VideoPlayer.platforms = ["Android"];
    VideoPlayer = tslib.__decorate([], VideoPlayer);
    return VideoPlayer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VideoPlayer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { play: [], close: [] } });

exports.VideoPlayer = VideoPlayer;
