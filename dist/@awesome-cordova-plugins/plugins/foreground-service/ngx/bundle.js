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

var ForegroundService = /** @class */ (function (_super) {
    tslib.__extends(ForegroundService, _super);
    function ForegroundService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForegroundService.prototype.start = function (title, text, icon, importance, id) {
        if (importance === void 0) { importance = 1; }
        if (id === void 0) { id = 0; }
        return core.cordova(this, "start", { "sync": true }, arguments);
    };
    ForegroundService.prototype.stop = function () { return core.cordova(this, "stop", { "sync": true }, arguments); };
    ForegroundService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ForegroundService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ForegroundService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ForegroundService });
    ForegroundService.pluginName = "ForegroundService";
    ForegroundService.plugin = "cordova-plugin-foreground-service";
    ForegroundService.pluginRef = "cordova.plugins.foregroundService";
    ForegroundService.repo = "https://github.com/DavidBriglio/cordova-plugin-foreground-service";
    ForegroundService.platforms = ["Android"];
    ForegroundService = tslib.__decorate([], ForegroundService);
    return ForegroundService;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ForegroundService, decorators: [{
            type: i0.Injectable
        }], propDecorators: { start: [], stop: [] } });

exports.ForegroundService = ForegroundService;
