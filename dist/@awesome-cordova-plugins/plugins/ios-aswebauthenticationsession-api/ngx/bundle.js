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

var IosASWebauthenticationSession = /** @class */ (function (_super) {
    tslib.__extends(IosASWebauthenticationSession, _super);
    function IosASWebauthenticationSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSession.prototype.start = function (callbackUrl, authorizeURL) { return core.cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSession.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IosASWebauthenticationSession, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    IosASWebauthenticationSession.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IosASWebauthenticationSession });
    IosASWebauthenticationSession.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSession.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSession.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSession.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSession.platforms = ["iOS"];
    IosASWebauthenticationSession = tslib.__decorate([], IosASWebauthenticationSession);
    return IosASWebauthenticationSession;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IosASWebauthenticationSession, decorators: [{
            type: i0.Injectable
        }], propDecorators: { start: [] } });

exports.IosASWebauthenticationSession = IosASWebauthenticationSession;
