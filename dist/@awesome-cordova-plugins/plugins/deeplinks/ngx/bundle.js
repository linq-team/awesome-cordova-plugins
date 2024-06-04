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

var Deeplinks = /** @class */ (function (_super) {
    tslib.__extends(Deeplinks, _super);
    function Deeplinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deeplinks.prototype.route = function (paths) { return core.cordova(this, "route", { "observable": true }, arguments); };
    Deeplinks.prototype.routeWithNavController = function (navController, paths, options) { return core.cordova(this, "routeWithNavController", { "observable": true }, arguments); };
    Deeplinks.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Deeplinks, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Deeplinks.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Deeplinks });
    Deeplinks.pluginName = "Deeplinks";
    Deeplinks.plugin = "ionic-plugin-deeplinks";
    Deeplinks.pluginRef = "IonicDeeplink";
    Deeplinks.repo = "https://github.com/ionic-team/ionic-plugin-deeplinks";
    Deeplinks.install = "ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/";
    Deeplinks.installVariables = ["URL_SCHEME", "DEEPLINK_SCHEME", "DEEPLINK_HOST", "ANDROID_PATH_PREFIX"];
    Deeplinks.platforms = ["Android", "Browser", "iOS"];
    Deeplinks = tslib.__decorate([], Deeplinks);
    return Deeplinks;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Deeplinks, decorators: [{
            type: i0.Injectable
        }], propDecorators: { route: [], routeWithNavController: [] } });

exports.Deeplinks = Deeplinks;
