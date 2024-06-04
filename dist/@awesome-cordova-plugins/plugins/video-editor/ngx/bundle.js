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

var VideoEditor = /** @class */ (function (_super) {
    tslib.__extends(VideoEditor, _super);
    function VideoEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OptimizeForNetworkUse = {
            NO: 0,
            YES: 1,
        };
        _this.OutputFileType = {
            M4V: 0,
            MPEG4: 1,
            M4A: 2,
            QUICK_TIME: 3,
        };
        return _this;
    }
    VideoEditor.prototype.transcodeVideo = function (options) { return core.cordova(this, "transcodeVideo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.prototype.trim = function (options) { return core.cordova(this, "trim", { "callbackOrder": "reverse", "platforms": ["iOS"] }, arguments); };
    VideoEditor.prototype.createThumbnail = function (options) { return core.cordova(this, "createThumbnail", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.prototype.getVideoInfo = function (options) { return core.cordova(this, "getVideoInfo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VideoEditor, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    VideoEditor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VideoEditor });
    VideoEditor.pluginName = "VideoEditor";
    VideoEditor.plugin = "cordova-plugin-video-editor";
    VideoEditor.pluginRef = "VideoEditor";
    VideoEditor.repo = "https://github.com/jbavari/cordova-plugin-video-editor";
    VideoEditor.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    VideoEditor = tslib.__decorate([], VideoEditor);
    return VideoEditor;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VideoEditor, decorators: [{
            type: i0.Injectable
        }], propDecorators: { transcodeVideo: [], trim: [], createThumbnail: [], getVideoInfo: [] } });

exports.VideoEditor = VideoEditor;
