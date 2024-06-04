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

var IamportCordova = /** @class */ (function (_super) {
    tslib.__extends(IamportCordova, _super);
    function IamportCordova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IamportCordova.prototype.payment = function (paymentObject) { return core.cordova(this, "payment", {}, arguments); };
    IamportCordova.prototype.certification = function (certificationObject) { return core.cordova(this, "certification", {}, arguments); };
    IamportCordova.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IamportCordova, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    IamportCordova.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IamportCordova });
    IamportCordova.pluginName = "IamportCordova";
    IamportCordova.plugin = "iamport-cordova";
    IamportCordova.pluginRef = "cordova.plugins.IamportCordova";
    IamportCordova.repo = "https://github.com/iamport/iamport-cordova";
    IamportCordova.platforms = ["ios", "android"];
    IamportCordova = tslib.__decorate([], IamportCordova);
    return IamportCordova;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IamportCordova, decorators: [{
            type: i0.Injectable
        }], propDecorators: { payment: [], certification: [] } });

exports.IamportCordova = IamportCordova;
