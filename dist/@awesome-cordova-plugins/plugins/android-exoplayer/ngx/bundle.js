'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

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

var AndroidExoplayer = /** @class */ (function (_super) {
    tslib.__extends(AndroidExoplayer, _super);
    function AndroidExoplayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidExoplayer.prototype.show = function (parameters) { return core.cordova(this, "show", { "observable": true, "clearFunction": "close", "clearWithArgs": false, "successIndex": 1, "errorIndex": 2 }, arguments); };
    AndroidExoplayer.prototype.setStream = function (url, controller) { return core.cordova(this, "setStream", {}, arguments); };
    AndroidExoplayer.prototype.playPause = function () { return core.cordova(this, "playPause", {}, arguments); };
    AndroidExoplayer.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    AndroidExoplayer.prototype.seekTo = function (milliseconds) { return core.cordova(this, "seekTo", {}, arguments); };
    AndroidExoplayer.prototype.seekBy = function (milliseconds) { return core.cordova(this, "seekBy", {}, arguments); };
    AndroidExoplayer.prototype.getState = function () { return core.cordova(this, "getState", {}, arguments); };
    AndroidExoplayer.prototype.showController = function () { return core.cordova(this, "showController", {}, arguments); };
    AndroidExoplayer.prototype.hideController = function () { return core.cordova(this, "hideController", {}, arguments); };
    AndroidExoplayer.prototype.setController = function (controller) { return core.cordova(this, "setController", {}, arguments); };
    AndroidExoplayer.prototype.close = function () { return core.cordova(this, "close", {}, arguments); };
    AndroidExoplayer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AndroidExoplayer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AndroidExoplayer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AndroidExoplayer });
    AndroidExoplayer.pluginName = "AndroidExoPlayer";
    AndroidExoplayer.plugin = "cordova-plugin-exoplayer";
    AndroidExoplayer.pluginRef = "ExoPlayer";
    AndroidExoplayer.repo = "https://github.com/frontyard/cordova-plugin-exoplayer";
    AndroidExoplayer.platforms = ["Android"];
    AndroidExoplayer = tslib.__decorate([], AndroidExoplayer);
    return AndroidExoplayer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AndroidExoplayer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], setStream: [], playPause: [], stop: [], seekTo: [], seekBy: [], getState: [], showController: [], hideController: [], setController: [], close: [] } });

exports.AndroidExoplayer = AndroidExoplayer;
