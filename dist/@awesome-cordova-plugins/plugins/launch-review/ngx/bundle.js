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

var LaunchReview = /** @class */ (function (_super) {
    tslib.__extends(LaunchReview, _super);
    function LaunchReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaunchReview.prototype.launch = function (appId) { return core.cordova(this, "launch", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    LaunchReview.prototype.rating = function () { return core.cordova(this, "rating", { "observable": true }, arguments); };
    LaunchReview.prototype.isRatingSupported = function () { return core.cordova(this, "isRatingSupported", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    LaunchReview.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LaunchReview, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LaunchReview.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LaunchReview });
    LaunchReview.pluginName = "LaunchReview";
    LaunchReview.plugin = "cordova-launch-review";
    LaunchReview.pluginRef = "LaunchReview";
    LaunchReview.repo = "https://github.com/dpa99c/cordova-launch-review";
    LaunchReview.platforms = ["Android", "iOS"];
    LaunchReview = tslib.__decorate([], LaunchReview);
    return LaunchReview;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LaunchReview, decorators: [{
            type: i0.Injectable
        }], propDecorators: { launch: [], rating: [], isRatingSupported: [] } });

exports.LaunchReview = LaunchReview;
