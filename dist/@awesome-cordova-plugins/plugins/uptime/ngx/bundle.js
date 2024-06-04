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

var Uptime = /** @class */ (function (_super) {
    tslib.__extends(Uptime, _super);
    function Uptime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uptime.prototype.getUptime = function (includeDeepSleep) { return core.cordova(this, "getUptime", {}, arguments); };
    Uptime.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Uptime, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Uptime.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Uptime });
    Uptime.pluginName = "Uptime";
    Uptime.plugin = "cordova-plugin-uptime";
    Uptime.pluginRef = "Uptime";
    Uptime.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    Uptime.platforms = ["Android", "iOS"];
    Uptime = tslib.__decorate([], Uptime);
    return Uptime;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Uptime, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getUptime: [] } });

exports.Uptime = Uptime;
