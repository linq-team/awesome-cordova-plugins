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

var GoogleNearby = /** @class */ (function (_super) {
    tslib.__extends(GoogleNearby, _super);
    function GoogleNearby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearby.prototype.publish = function (message) { return core.cordova(this, "publish", {}, arguments); };
    GoogleNearby.prototype.subscribe = function () { return core.cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearby.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GoogleNearby, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    GoogleNearby.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GoogleNearby });
    GoogleNearby.pluginName = "GoogleNearby";
    GoogleNearby.plugin = "cordova-plugin-google-nearby";
    GoogleNearby.pluginRef = "window.nearby";
    GoogleNearby.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearby.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearby.installVariables = ["API_KEY"];
    GoogleNearby.platforms = ["Android"];
    GoogleNearby = tslib.__decorate([], GoogleNearby);
    return GoogleNearby;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GoogleNearby, decorators: [{
            type: i0.Injectable
        }], propDecorators: { publish: [], subscribe: [] } });

exports.GoogleNearby = GoogleNearby;
