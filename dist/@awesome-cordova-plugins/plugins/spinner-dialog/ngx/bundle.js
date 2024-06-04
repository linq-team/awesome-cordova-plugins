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

var SpinnerDialog = /** @class */ (function (_super) {
    tslib.__extends(SpinnerDialog, _super);
    function SpinnerDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDialog.prototype.show = function (title, message, cancelCallback, iOSOptions) { return core.cordova(this, "show", { "sync": true }, arguments); };
    SpinnerDialog.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true }, arguments); };
    SpinnerDialog.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpinnerDialog, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SpinnerDialog.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpinnerDialog });
    SpinnerDialog.pluginName = "SpinnerDialog";
    SpinnerDialog.plugin = "cordova-plugin-native-spinner";
    SpinnerDialog.pluginRef = "SpinnerDialog";
    SpinnerDialog.repo = "https://github.com/greybax/cordova-plugin-native-spinner";
    SpinnerDialog.platforms = ["Android", "iOS", "Windows Phone 8", "Windows"];
    SpinnerDialog = tslib.__decorate([], SpinnerDialog);
    return SpinnerDialog;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpinnerDialog, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], hide: [] } });

exports.SpinnerDialog = SpinnerDialog;
