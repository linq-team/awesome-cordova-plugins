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

var BranchIo = /** @class */ (function (_super) {
    tslib.__extends(BranchIo, _super);
    function BranchIo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchIo.prototype.setDebug = function (enable) { return core.cordova(this, "setDebug", { "otherPromise": true }, arguments); };
    BranchIo.prototype.disableTracking = function (disable) { return core.cordova(this, "disableTracking", { "otherPromise": true }, arguments); };
    BranchIo.prototype.initSession = function () { return core.cordova(this, "initSession", { "otherPromise": true }, arguments); };
    BranchIo.prototype.initSessionWithCallback = function () { return core.cordova(this, "initSessionWithCallback", { "observable": true }, arguments); };
    BranchIo.prototype.setRequestMetadata = function () { return core.cordova(this, "setRequestMetadata", { "otherPromise": true }, arguments); };
    BranchIo.prototype.setCookieBasedMatching = function (linkDomain) { return core.cordova(this, "setCookieBasedMatching", { "otherPromise": true }, arguments); };
    BranchIo.prototype.getFirstReferringParams = function () { return core.cordova(this, "getFirstReferringParams", { "otherPromise": true }, arguments); };
    BranchIo.prototype.getLatestReferringParams = function () { return core.cordova(this, "getLatestReferringParams", { "otherPromise": true }, arguments); };
    BranchIo.prototype.setIdentity = function (userId) { return core.cordova(this, "setIdentity", { "otherPromise": true }, arguments); };
    BranchIo.prototype.logout = function () { return core.cordova(this, "logout", { "otherPromise": true }, arguments); };
    BranchIo.prototype.userCompletedAction = function (eventName, metaData) { return core.cordova(this, "userCompletedAction", { "otherPromise": true }, arguments); };
    BranchIo.prototype.sendCommerceEvent = function (event, metaData) { return core.cordova(this, "sendCommerceEvent", { "otherPromise": true }, arguments); };
    BranchIo.prototype.sendBranchEvent = function (event, metaData) { return core.cordova(this, "sendBranchEvent", { "otherPromise": true }, arguments); };
    BranchIo.prototype.createBranchUniversalObject = function (properties) { return core.cordova(this, "createBranchUniversalObject", { "otherPromise": true }, arguments); };
    BranchIo.prototype.loadRewards = function (bucket) { return core.cordova(this, "loadRewards", { "otherPromise": true }, arguments); };
    BranchIo.prototype.redeemRewards = function (value, bucket) { return core.cordova(this, "redeemRewards", { "otherPromise": true }, arguments); };
    BranchIo.prototype.creditHistory = function () { return core.cordova(this, "creditHistory", { "otherPromise": true }, arguments); };
    BranchIo.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BranchIo, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BranchIo.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BranchIo });
    BranchIo.pluginName = "BranchIo";
    BranchIo.plugin = "branch-cordova-sdk";
    BranchIo.pluginRef = "Branch";
    BranchIo.repo = "https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking";
    BranchIo.platforms = ["iOS", "Android"];
    BranchIo = tslib.__decorate([], BranchIo);
    return BranchIo;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BranchIo, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setDebug: [], disableTracking: [], initSession: [], initSessionWithCallback: [], setRequestMetadata: [], setCookieBasedMatching: [], getFirstReferringParams: [], getLatestReferringParams: [], setIdentity: [], logout: [], userCompletedAction: [], sendCommerceEvent: [], sendBranchEvent: [], createBranchUniversalObject: [], loadRewards: [], redeemRewards: [], creditHistory: [] } });

exports.BranchIo = BranchIo;
