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

var Broadcaster = /** @class */ (function (_super) {
    tslib.__extends(Broadcaster, _super);
    function Broadcaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Broadcaster.prototype.addEventListener = function (eventName, isGlobal) {
        if (isGlobal === void 0) { isGlobal = false; }
        return core.cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments);
    };
    Broadcaster.prototype.fireNativeEvent = function (eventName, isGlobalOrEventData, data) { return core.cordova(this, "fireNativeEvent", {}, arguments); };
    Broadcaster.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Broadcaster, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Broadcaster.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Broadcaster });
    Broadcaster.pluginName = "Broadcaster";
    Broadcaster.plugin = "cordova-plugin-broadcaster";
    Broadcaster.pluginRef = "broadcaster";
    Broadcaster.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    Broadcaster.platforms = ["Android", "iOS", "Browser"];
    Broadcaster = tslib.__decorate([], Broadcaster);
    return Broadcaster;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Broadcaster, decorators: [{
            type: i0.Injectable
        }], propDecorators: { addEventListener: [], fireNativeEvent: [] } });

exports.Broadcaster = Broadcaster;
