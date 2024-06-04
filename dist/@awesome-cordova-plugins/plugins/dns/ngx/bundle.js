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

var DNS = /** @class */ (function (_super) {
    tslib.__extends(DNS, _super);
    function DNS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNS.prototype.resolve = function (hostname) { return core.cordova(this, "resolve", {}, arguments); };
    DNS.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DNS, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DNS.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DNS });
    DNS.pluginName = "DNS";
    DNS.plugin = "cordova-plugin-dns";
    DNS.pluginRef = "cordova.plugins.dns";
    DNS.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNS.platforms = ["Android"];
    DNS = tslib.__decorate([], DNS);
    return DNS;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DNS, decorators: [{
            type: i0.Injectable
        }], propDecorators: { resolve: [] } });

exports.DNS = DNS;
