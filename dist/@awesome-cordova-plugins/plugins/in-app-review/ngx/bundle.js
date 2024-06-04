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

var InAppReview = /** @class */ (function (_super) {
    tslib.__extends(InAppReview, _super);
    function InAppReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReview.prototype.requestReview = function () { return core.cordova(this, "requestReview", {}, arguments); };
    InAppReview.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InAppReview, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    InAppReview.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InAppReview });
    InAppReview.pluginName = "InAppReview";
    InAppReview.plugin = "com.omarben.inappreview";
    InAppReview.pluginRef = "inappreview";
    InAppReview.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReview.platforms = ["iOS"];
    InAppReview = tslib.__decorate([], InAppReview);
    return InAppReview;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InAppReview, decorators: [{
            type: i0.Injectable
        }], propDecorators: { requestReview: [] } });

exports.InAppReview = InAppReview;
