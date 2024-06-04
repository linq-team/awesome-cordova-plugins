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

var TapticEngine = /** @class */ (function (_super) {
    tslib.__extends(TapticEngine, _super);
    function TapticEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngine.prototype.selection = function () { return core.cordova(this, "selection", {}, arguments); };
    TapticEngine.prototype.notification = function (options) { return core.cordova(this, "notification", {}, arguments); };
    TapticEngine.prototype.impact = function (options) { return core.cordova(this, "impact", {}, arguments); };
    TapticEngine.prototype.gestureSelectionStart = function () { return core.cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngine.prototype.gestureSelectionChanged = function () { return core.cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngine.prototype.gestureSelectionEnd = function () { return core.cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngine.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TapticEngine, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TapticEngine.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TapticEngine });
    TapticEngine.pluginName = "TapticEngine";
    TapticEngine.plugin = "cordova-plugin-taptic-engine";
    TapticEngine.pluginRef = "TapticEngine";
    TapticEngine.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngine.platforms = ["iOS"];
    TapticEngine = tslib.__decorate([], TapticEngine);
    return TapticEngine;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TapticEngine, decorators: [{
            type: i0.Injectable
        }], propDecorators: { selection: [], notification: [], impact: [], gestureSelectionStart: [], gestureSelectionChanged: [], gestureSelectionEnd: [] } });

exports.TapticEngine = TapticEngine;
