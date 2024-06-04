'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@ionic-native/core');
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

exports.FirebaseModelStatus = void 0;
(function (FirebaseModelStatus) {
    FirebaseModelStatus["downloading"] = "downloading";
    FirebaseModelStatus["completed"] = "completed";
})(exports.FirebaseModelStatus || (exports.FirebaseModelStatus = {}));
exports.FirebaseModelInputType = void 0;
(function (FirebaseModelInputType) {
    FirebaseModelInputType["path"] = "path";
    FirebaseModelInputType["base64string"] = "base64string";
    FirebaseModelInputType["blob"] = "blob";
})(exports.FirebaseModelInputType || (exports.FirebaseModelInputType = {}));
var FirebaseModelConfigResult = /** @class */ (function () {
    function FirebaseModelConfigResult() {
    }
    return FirebaseModelConfigResult;
}());
var FirebaseModelClassifyResult = /** @class */ (function () {
    function FirebaseModelClassifyResult() {
    }
    return FirebaseModelClassifyResult;
}());
var FirebaseModelInput = /** @class */ (function () {
    function FirebaseModelInput() {
    }
    return FirebaseModelInput;
}());
var FirebaseModel = /** @class */ (function (_super) {
    tslib.__extends(FirebaseModel, _super);
    function FirebaseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseModel.prototype.configure = function (arg1) { return cordova(this, "configure", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    FirebaseModel.prototype.classify = function (arg1) { return cordova(this, "classify", {}, arguments); };
    FirebaseModel.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseModel, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseModel.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseModel });
    FirebaseModel.pluginName = "FirebaseModel";
    FirebaseModel.plugin = "cordova-plugin-firebase-model";
    FirebaseModel.pluginRef = "FirebaseModel";
    FirebaseModel.repo = "";
    FirebaseModel.install = "ionic cordova plugin add cordova-plugin-firebase-model";
    FirebaseModel.installVariables = [];
    FirebaseModel.platforms = ["iOS"];
    FirebaseModel = tslib.__decorate([], FirebaseModel);
    return FirebaseModel;
}(core.IonicNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FirebaseModel, decorators: [{
            type: i0.Injectable
        }], propDecorators: { configure: [], classify: [] } });

exports.FirebaseModel = FirebaseModel;
exports.FirebaseModelClassifyResult = FirebaseModelClassifyResult;
exports.FirebaseModelConfigResult = FirebaseModelConfigResult;
exports.FirebaseModelInput = FirebaseModelInput;
