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

var UniqueDeviceID = /** @class */ (function (_super) {
    tslib.__extends(UniqueDeviceID, _super);
    function UniqueDeviceID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniqueDeviceID.prototype.get = function () { return core.cordova(this, "get", {}, arguments); };
    UniqueDeviceID.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UniqueDeviceID, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UniqueDeviceID.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UniqueDeviceID });
    UniqueDeviceID.pluginName = "UniqueDeviceID";
    UniqueDeviceID.plugin = "cordova-plugin-uniquedeviceid";
    UniqueDeviceID.pluginRef = "window.plugins.uniqueDeviceID";
    UniqueDeviceID.repo = "https://github.com/Paldom/UniqueDeviceID";
    UniqueDeviceID.install = "";
    UniqueDeviceID.installVariables = [];
    UniqueDeviceID.platforms = ["Android", "iOS", "Windows Phone 8"];
    UniqueDeviceID = tslib.__decorate([], UniqueDeviceID);
    return UniqueDeviceID;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UniqueDeviceID, decorators: [{
            type: i0.Injectable
        }], propDecorators: { get: [] } });

exports.UniqueDeviceID = UniqueDeviceID;
