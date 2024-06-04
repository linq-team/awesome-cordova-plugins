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

var BioCatch = /** @class */ (function (_super) {
    tslib.__extends(BioCatch, _super);
    function BioCatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatch.prototype.start = function (customerSessionID, wupUrl, publicKey) { return core.cordova(this, "start", {}, arguments); };
    BioCatch.prototype.pause = function () { return core.cordova(this, "pause", {}, arguments); };
    BioCatch.prototype.resume = function () { return core.cordova(this, "resume", {}, arguments); };
    BioCatch.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    BioCatch.prototype.resetSession = function () { return core.cordova(this, "resetSession", {}, arguments); };
    BioCatch.prototype.changeContext = function (contextName) { return core.cordova(this, "changeContext", {}, arguments); };
    BioCatch.prototype.updateCustomerSessionID = function (customerSessionID) { return core.cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatch.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BioCatch, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BioCatch.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BioCatch });
    BioCatch.pluginName = "BioCatch";
    BioCatch.plugin = "cordova-plugin-biocatch";
    BioCatch.pluginRef = "BioCatch";
    BioCatch.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatch.platforms = ["iOS", "Android"];
    BioCatch = tslib.__decorate([], BioCatch);
    return BioCatch;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BioCatch, decorators: [{
            type: i0.Injectable
        }], propDecorators: { start: [], pause: [], resume: [], stop: [], resetSession: [], changeContext: [], updateCustomerSessionID: [] } });

exports.BioCatch = BioCatch;
