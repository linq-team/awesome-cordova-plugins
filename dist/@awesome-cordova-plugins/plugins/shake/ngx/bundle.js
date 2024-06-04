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

var Shake = /** @class */ (function (_super) {
    tslib.__extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.startWatch = function (sensitivity) { return core.cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    Shake.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Shake, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Shake.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Shake });
    Shake.pluginName = "Shake";
    Shake.plugin = "cordova-plugin-shake";
    Shake.pluginRef = "shake";
    Shake.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    Shake.platforms = ["iOS"];
    Shake = tslib.__decorate([], Shake);
    return Shake;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Shake, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startWatch: [] } });

exports.Shake = Shake;
