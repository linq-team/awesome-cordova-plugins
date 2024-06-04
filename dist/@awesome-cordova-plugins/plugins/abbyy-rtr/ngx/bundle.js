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

var AbbyyRTR = /** @class */ (function (_super) {
    tslib.__extends(AbbyyRTR, _super);
    function AbbyyRTR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbbyyRTR.prototype.startTextCapture = function (options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    AbbyyRtrSdk.startTextCapture(function (result) {
                        if (result.error) {
                            reject(result);
                        }
                        else {
                            resolve(result);
                        }
                    }, options);
                });
            }
        })();
    };
    AbbyyRTR.prototype.startDataCapture = function (options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    AbbyyRtrSdk.startDataCapture(function (result) {
                        if (result.error) {
                            reject(result);
                        }
                        else {
                            resolve(result);
                        }
                    }, options);
                });
            }
        })();
    };
    AbbyyRTR.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AbbyyRTR, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AbbyyRTR.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AbbyyRTR });
    AbbyyRTR.pluginName = "AbbyyRTR";
    AbbyyRTR.plugin = "cordova-plugin-abbyy-rtr-sdk";
    AbbyyRTR.pluginRef = "AbbyyRtrSdk";
    AbbyyRTR.repo = "https://github.com/abbyysdk/RTR-SDK.Cordova";
    AbbyyRTR.install = "ionic cordova plugin add cordova-plugin-abbyy-rtr-sdk";
    AbbyyRTR.platforms = ["Android", "iOS"];
    AbbyyRTR = tslib.__decorate([], AbbyyRTR);
    return AbbyyRTR;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AbbyyRTR, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startTextCapture: [], startDataCapture: [] } });

exports.AbbyyRTR = AbbyyRTR;
