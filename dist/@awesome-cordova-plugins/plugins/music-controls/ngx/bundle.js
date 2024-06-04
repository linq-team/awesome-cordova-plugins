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

var MusicControls = /** @class */ (function (_super) {
    tslib.__extends(MusicControls, _super);
    function MusicControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicControls.prototype.create = function (options) { return core.cordova(this, "create", {}, arguments); };
    MusicControls.prototype.destroy = function () { return core.cordova(this, "destroy", {}, arguments); };
    MusicControls.prototype.subscribe = function () { return core.cordova(this, "subscribe", { "observable": true }, arguments); };
    MusicControls.prototype.listen = function () { return core.cordova(this, "listen", { "sync": true }, arguments); };
    MusicControls.prototype.updateIsPlaying = function (isPlaying) { return core.cordova(this, "updateIsPlaying", {}, arguments); };
    MusicControls.prototype.updateElapsed = function (args) { return core.cordova(this, "updateElapsed", { "platforms": ["iOS"] }, arguments); };
    MusicControls.prototype.updateDismissable = function (dismissable) { return core.cordova(this, "updateDismissable", {}, arguments); };
    MusicControls.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MusicControls, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MusicControls.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MusicControls });
    MusicControls.pluginName = "MusicControls";
    MusicControls.plugin = "cordova-plugin-music-controls2";
    MusicControls.pluginRef = "MusicControls";
    MusicControls.repo = "https://github.com/ghenry22/cordova-plugin-music-controls2";
    MusicControls.platforms = ["Android", "iOS", "Windows"];
    MusicControls = tslib.__decorate([], MusicControls);
    return MusicControls;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MusicControls, decorators: [{
            type: i0.Injectable
        }], propDecorators: { create: [], destroy: [], subscribe: [], listen: [], updateIsPlaying: [], updateElapsed: [], updateDismissable: [] } });

exports.MusicControls = MusicControls;
