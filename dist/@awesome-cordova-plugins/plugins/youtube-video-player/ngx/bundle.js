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

var YoutubeVideoPlayer = /** @class */ (function (_super) {
    tslib.__extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { return core.cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: YoutubeVideoPlayer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    YoutubeVideoPlayer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: YoutubeVideoPlayer });
    YoutubeVideoPlayer.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayer.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayer.platforms = ["Android", "iOS"];
    YoutubeVideoPlayer = tslib.__decorate([], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: YoutubeVideoPlayer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { openVideo: [] } });

exports.YoutubeVideoPlayer = YoutubeVideoPlayer;
