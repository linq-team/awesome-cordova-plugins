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

var GCDWebServer = /** @class */ (function (_super) {
    tslib.__extends(GCDWebServer, _super);
    function GCDWebServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GCDWebServer.prototype.startServer = function (options) { return core.cordova(this, "startServer", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GCDWebServer.prototype.stopServer = function () { return core.cordova(this, "stopServer", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GCDWebServer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GCDWebServer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    GCDWebServer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GCDWebServer });
    GCDWebServer.pluginName = "gcdwebserver";
    GCDWebServer.plugin = "cordova-plugin-gcdwebserver";
    GCDWebServer.pluginRef = "cordova.plugins.GCDServer";
    GCDWebServer.repo = "https://github.com/xulihang/cordova-plugin-gcdwebserver";
    GCDWebServer.install = "";
    GCDWebServer.installVariables = [];
    GCDWebServer.platforms = ["iOS"];
    GCDWebServer = tslib.__decorate([], GCDWebServer);
    return GCDWebServer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GCDWebServer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startServer: [], stopServer: [] } });

exports.GCDWebServer = GCDWebServer;
