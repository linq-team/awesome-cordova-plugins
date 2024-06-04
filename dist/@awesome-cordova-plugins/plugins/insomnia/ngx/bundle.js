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

var Insomnia = /** @class */ (function (_super) {
    tslib.__extends(Insomnia, _super);
    function Insomnia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insomnia.prototype.keepAwake = function () { return core.cordova(this, "keepAwake", {}, arguments); };
    Insomnia.prototype.allowSleepAgain = function () { return core.cordova(this, "allowSleepAgain", {}, arguments); };
    Insomnia.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Insomnia, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Insomnia.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Insomnia });
    Insomnia.pluginName = "Insomnia";
    Insomnia.plugin = "cordova-plugin-insomnia";
    Insomnia.pluginRef = "plugins.insomnia";
    Insomnia.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    Insomnia.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    Insomnia = tslib.__decorate([], Insomnia);
    return Insomnia;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Insomnia, decorators: [{
            type: i0.Injectable
        }], propDecorators: { keepAwake: [], allowSleepAgain: [] } });

exports.Insomnia = Insomnia;
