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

var AppReview = /** @class */ (function (_super) {
    tslib.__extends(AppReview, _super);
    function AppReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppReview.prototype.requestReview = function () { return core.cordova(this, "requestReview", { "sync": true }, arguments); };
    AppReview.prototype.openStoreScreen = function (packageName) { return core.cordova(this, "openStoreScreen", { "sync": true }, arguments); };
    AppReview.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppReview, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppReview.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppReview });
    AppReview.pluginName = "AppReview";
    AppReview.plugin = "cordova-plugin-app-review";
    AppReview.pluginRef = "cordova.plugins.AppReview";
    AppReview.repo = "https://github.com/chemerisuk/cordova-plugin-app-review";
    AppReview.platforms = ["Android", "iOS"];
    AppReview = tslib.__decorate([], AppReview);
    return AppReview;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppReview, decorators: [{
            type: i0.Injectable
        }], propDecorators: { requestReview: [], openStoreScreen: [] } });

exports.AppReview = AppReview;
