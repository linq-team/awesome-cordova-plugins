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

var ActionSheet = /** @class */ (function (_super) {
    tslib.__extends(ActionSheet, _super);
    function ActionSheet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience property to select an Android theme value
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    ActionSheet.prototype.show = function (options) { return core.cordova(this, "show", {}, arguments); };
    ActionSheet.prototype.hide = function (options) { return core.cordova(this, "hide", {}, arguments); };
    ActionSheet.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ActionSheet, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ActionSheet.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ActionSheet });
    ActionSheet.pluginName = "ActionSheet";
    ActionSheet.plugin = "cordova-plugin-actionsheet";
    ActionSheet.pluginRef = "plugins.actionsheet";
    ActionSheet.repo = "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet";
    ActionSheet.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone 8"];
    ActionSheet = tslib.__decorate([], ActionSheet);
    return ActionSheet;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ActionSheet, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], hide: [] } });

exports.ActionSheet = ActionSheet;
