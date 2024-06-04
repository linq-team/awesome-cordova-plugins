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

var Chooser = /** @class */ (function (_super) {
    tslib.__extends(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFiles = function (accept) { return core.cordova(this, "getFiles", {}, arguments); };
    Chooser.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Chooser, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Chooser.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Chooser });
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-simple-file-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/hc-oss/cordova-plugin-simple-file-chooser";
    Chooser.platforms = ["Android", "iOS"];
    Chooser = tslib.__decorate([], Chooser);
    return Chooser;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Chooser, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getFiles: [] } });

exports.Chooser = Chooser;
