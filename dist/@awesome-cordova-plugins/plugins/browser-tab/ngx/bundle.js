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

var BrowserTab = /** @class */ (function (_super) {
    tslib.__extends(BrowserTab, _super);
    function BrowserTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTab.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    BrowserTab.prototype.openUrl = function (url) { return core.cordova(this, "openUrl", {}, arguments); };
    BrowserTab.prototype.close = function () { return core.cordova(this, "close", {}, arguments); };
    BrowserTab.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BrowserTab, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BrowserTab.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BrowserTab });
    BrowserTab.pluginName = "BrowserTab";
    BrowserTab.plugin = "cordova-plugin-browsertab";
    BrowserTab.pluginRef = "cordova.plugins.browsertab";
    BrowserTab.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTab.platforms = ["Android", "iOS"];
    BrowserTab = tslib.__decorate([], BrowserTab);
    return BrowserTab;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BrowserTab, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], openUrl: [], close: [] } });

exports.BrowserTab = BrowserTab;
