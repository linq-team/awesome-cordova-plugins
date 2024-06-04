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

var Zeroconf = /** @class */ (function (_super) {
    tslib.__extends(Zeroconf, _super);
    function Zeroconf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zeroconf.prototype.getHostname = function () { return core.cordova(this, "getHostname", {}, arguments); };
    Zeroconf.prototype.register = function (type, domain, name, port, txtRecord) { return core.cordova(this, "register", {}, arguments); };
    Zeroconf.prototype.unregister = function (type, domain, name) { return core.cordova(this, "unregister", {}, arguments); };
    Zeroconf.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    Zeroconf.prototype.watch = function (type, domain) { return core.cordova(this, "watch", { "observable": true, "clearFunction": "unwatch", "clearWithArgs": true }, arguments); };
    Zeroconf.prototype.unwatch = function (type, domain) { return core.cordova(this, "unwatch", {}, arguments); };
    Zeroconf.prototype.close = function () { return core.cordova(this, "close", {}, arguments); };
    Zeroconf.prototype.reInit = function () { return core.cordova(this, "reInit", {}, arguments); };
    Zeroconf.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Zeroconf, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Zeroconf.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Zeroconf });
    Zeroconf.pluginName = "Zeroconf";
    Zeroconf.plugin = "cordova-plugin-zeroconf";
    Zeroconf.pluginRef = "cordova.plugins.zeroconf";
    Zeroconf.repo = "https://github.com/becvert/cordova-plugin-zeroconf";
    Zeroconf.platforms = ["Android", "iOS"];
    Zeroconf = tslib.__decorate([], Zeroconf);
    return Zeroconf;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Zeroconf, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getHostname: [], register: [], unregister: [], stop: [], watch: [], unwatch: [], close: [], reInit: [] } });

exports.Zeroconf = Zeroconf;
