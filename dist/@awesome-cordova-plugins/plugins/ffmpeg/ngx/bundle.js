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

var FFMpeg = /** @class */ (function (_super) {
    tslib.__extends(FFMpeg, _super);
    function FFMpeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FFMpeg.prototype.exec = function (cmd) { return core.cordova(this, "exec", {}, arguments); };
    FFMpeg.prototype.probe = function (filePath) { return core.cordova(this, "probe", {}, arguments); };
    FFMpeg.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FFMpeg, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FFMpeg.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FFMpeg });
    FFMpeg.pluginName = "FFMpeg";
    FFMpeg.plugin = "cordova-plugin-ffmpeg";
    FFMpeg.pluginRef = "ffmpeg";
    FFMpeg.repo = "https://github.com/MaximBelov/cordova-plugin-ffmpeg";
    FFMpeg.platforms = ["Android", "iOS"];
    FFMpeg = tslib.__decorate([], FFMpeg);
    return FFMpeg;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FFMpeg, decorators: [{
            type: i0.Injectable
        }], propDecorators: { exec: [], probe: [] } });

exports.FFMpeg = FFMpeg;
