'use strict';

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var i0 = require('@angular/core');

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

var BackgroundFetch = /** @class */ (function (_super) {
    tslib.__extends(BackgroundFetch, _super);
    function BackgroundFetch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundFetch.prototype.configure = function (config) { return core.cordova(this, "configure", { "callbackOrder": "reverse" }, arguments); };
    BackgroundFetch.prototype.start = function () { return core.cordova(this, "start", {}, arguments); };
    BackgroundFetch.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    BackgroundFetch.prototype.finish = function (taskId) { return core.cordova(this, "finish", { "sync": true }, arguments); };
    BackgroundFetch.prototype.status = function () { return core.cordova(this, "status", {}, arguments); };
    BackgroundFetch.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackgroundFetch, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BackgroundFetch.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackgroundFetch });
    BackgroundFetch.pluginName = "BackgroundFetch";
    BackgroundFetch.plugin = "cordova-plugin-background-fetch";
    BackgroundFetch.pluginRef = "BackgroundFetch";
    BackgroundFetch.repo = "https://github.com/transistorsoft/cordova-plugin-background-fetch";
    BackgroundFetch.platforms = ["iOS"];
    BackgroundFetch = tslib.__decorate([], BackgroundFetch);
    return BackgroundFetch;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackgroundFetch, decorators: [{
            type: i0.Injectable
        }], propDecorators: { configure: [], start: [], stop: [], finish: [], status: [] } });

exports.BackgroundFetch = BackgroundFetch;
