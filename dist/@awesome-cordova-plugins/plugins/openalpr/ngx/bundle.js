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

var OpenALPR = /** @class */ (function (_super) {
    tslib.__extends(OpenALPR, _super);
    function OpenALPR() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Country = {
            AU: 'au',
            BR: 'br',
            BR2: 'br2',
            EU: 'eu',
            IN: 'in',
            KR2: 'kr2',
            US: 'us',
            VN2: 'vn2',
        };
        return _this;
    }
    OpenALPR.prototype.scan = function (imageData, options) { return core.cordova(this, "scan", {}, arguments); };
    OpenALPR.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OpenALPR, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OpenALPR.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OpenALPR });
    OpenALPR.pluginName = "OpenALPR";
    OpenALPR.plugin = "cordova-plugin-openalpr";
    OpenALPR.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPR.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPR.platforms = ["Android", "iOS"];
    OpenALPR = tslib.__decorate([], OpenALPR);
    return OpenALPR;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OpenALPR, decorators: [{
            type: i0.Injectable
        }], propDecorators: { scan: [] } });

exports.OpenALPR = OpenALPR;
