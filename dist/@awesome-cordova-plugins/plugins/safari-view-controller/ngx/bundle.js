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

var SafariViewController = /** @class */ (function (_super) {
    tslib.__extends(SafariViewController, _super);
    function SafariViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewController.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    SafariViewController.prototype.show = function (options) { return core.cordova(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewController.prototype.hide = function () { return core.cordova(this, "hide", {}, arguments); };
    SafariViewController.prototype.connectToService = function () { return core.cordova(this, "connectToService", {}, arguments); };
    SafariViewController.prototype.warmUp = function () { return core.cordova(this, "warmUp", {}, arguments); };
    SafariViewController.prototype.mayLaunchUrl = function (url) { return core.cordova(this, "mayLaunchUrl", {}, arguments); };
    SafariViewController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SafariViewController, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SafariViewController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SafariViewController });
    SafariViewController.pluginName = "SafariViewController";
    SafariViewController.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewController.pluginRef = "SafariViewController";
    SafariViewController.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewController.platforms = ["Android", "iOS"];
    SafariViewController = tslib.__decorate([], SafariViewController);
    return SafariViewController;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SafariViewController, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], show: [], hide: [], connectToService: [], warmUp: [], mayLaunchUrl: [] } });

exports.SafariViewController = SafariViewController;
