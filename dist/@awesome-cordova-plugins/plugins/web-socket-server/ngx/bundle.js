'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
var rxjs = require('rxjs');

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

var WebSocketServer = /** @class */ (function (_super) {
    tslib.__extends(WebSocketServer, _super);
    function WebSocketServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebSocketServer.prototype.getInterfaces = function () { return core.cordova(this, "getInterfaces", {}, arguments); };
    WebSocketServer.prototype.start = function (port, options) { return core.cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    WebSocketServer.prototype.onFunctionToObservable = function (fnName) {
        return new rxjs.Observable(function (observer) {
            var id = window.cordova.plugins.wsserver[fnName](observer.next.bind(observer), observer.error.bind(observer));
            return function () { return window.cordova.plugins.wsserver.removeCallback(id); };
        });
    };
    /**
     * Watches for new messages
     *
     * @returns {Observable<WebSocketMessage>}
     */
    WebSocketServer.prototype.watchMessage = function () {
        return this.onFunctionToObservable('onMessage');
    };
    /**
     * Watches for new opened connections
     *
     * @returns {Observable<WebSocketConnection>}
     */
    WebSocketServer.prototype.watchOpen = function () {
        return this.onFunctionToObservable('onOpen');
    };
    /**
     * Watches for closed connections
     *
     * @returns {Observable<WebSocketClose>}
     */
    WebSocketServer.prototype.watchClose = function () {
        return this.onFunctionToObservable('onClose');
    };
    /**
     * Watches for any websocket failures
     *
     * @returns {Observable<WebSocketFailure>}
     */
    WebSocketServer.prototype.watchFailure = function () {
        return this.onFunctionToObservable('onFailure');
    };
    WebSocketServer.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    WebSocketServer.prototype.send = function (conn, msg) { return core.cordova(this, "send", {}, arguments); };
    WebSocketServer.prototype.close = function (conn, code, reason) { return core.cordova(this, "close", {}, arguments); };
    WebSocketServer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebSocketServer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WebSocketServer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebSocketServer });
    WebSocketServer.pluginName = "WebSocketServer";
    WebSocketServer.plugin = "cordova-plugin-websocket-server";
    WebSocketServer.pluginRef = "cordova.plugins.wsserver";
    WebSocketServer.repo = "https://github.com/becvert/cordova-plugin-websocket-server";
    WebSocketServer.platforms = ["Android", "iOS"];
    WebSocketServer = tslib.__decorate([], WebSocketServer);
    return WebSocketServer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebSocketServer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getInterfaces: [], start: [], stop: [], send: [], close: [] } });

exports.WebSocketServer = WebSocketServer;
