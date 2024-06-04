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

var NetworkInterface = /** @class */ (function (_super) {
    tslib.__extends(NetworkInterface, _super);
    function NetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterface.prototype.getWiFiIPAddress = function () { return core.cordova(this, "getWiFiIPAddress", {}, arguments); };
    NetworkInterface.prototype.getCarrierIPAddress = function () { return core.cordova(this, "getCarrierIPAddress", {}, arguments); };
    NetworkInterface.prototype.getHttpProxyInformation = function (url) { return core.cordova(this, "getHttpProxyInformation", {}, arguments); };
    NetworkInterface.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetworkInterface, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NetworkInterface.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetworkInterface });
    NetworkInterface.pluginName = "NetworkInterface";
    NetworkInterface.plugin = "cordova-plugin-networkinterface";
    NetworkInterface.pluginRef = "networkinterface";
    NetworkInterface.repo = "https://github.com/salbahra/cordova-plugin-networkinterface";
    NetworkInterface.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows", "Windows Phone"];
    NetworkInterface = tslib.__decorate([], NetworkInterface);
    return NetworkInterface;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetworkInterface, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getWiFiIPAddress: [], getCarrierIPAddress: [], getHttpProxyInformation: [] } });

exports.NetworkInterface = NetworkInterface;
