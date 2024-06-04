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

var ServiceDiscovery = /** @class */ (function (_super) {
    tslib.__extends(ServiceDiscovery, _super);
    function ServiceDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscovery.prototype.getNetworkServices = function (service) { return core.cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscovery.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ServiceDiscovery, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ServiceDiscovery.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ServiceDiscovery });
    ServiceDiscovery.pluginName = "ServiceDiscovery";
    ServiceDiscovery.plugin = "cordova-plugin-discovery";
    ServiceDiscovery.pluginRef = "serviceDiscovery";
    ServiceDiscovery.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscovery.platforms = ["Android", "iOS"];
    ServiceDiscovery = tslib.__decorate([], ServiceDiscovery);
    return ServiceDiscovery;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ServiceDiscovery, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getNetworkServices: [] } });

exports.ServiceDiscovery = ServiceDiscovery;
