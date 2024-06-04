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

var WebServer = /** @class */ (function (_super) {
    tslib.__extends(WebServer, _super);
    function WebServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServer.prototype.start = function (port) { return core.cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServer.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    WebServer.prototype.onRequest = function () { return core.cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServer.prototype.sendResponse = function (requestId, responseObject) { return core.cordova(this, "sendResponse", {}, arguments); };
    WebServer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebServer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WebServer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebServer });
    WebServer.pluginName = "WebServer";
    WebServer.plugin = "cordova-plugin-webserver2";
    WebServer.pluginRef = "window.webserver";
    WebServer.repo = "https://github.com/nguyenthanh1995/cordova-plugin-webserver2.git";
    WebServer.platforms = ["Android", "iOS"];
    WebServer = tslib.__decorate([], WebServer);
    return WebServer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebServer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { start: [], stop: [], onRequest: [], sendResponse: [] } });

exports.WebServer = WebServer;
