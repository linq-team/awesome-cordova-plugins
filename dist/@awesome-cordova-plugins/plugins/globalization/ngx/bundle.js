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

var Globalization = /** @class */ (function (_super) {
    tslib.__extends(Globalization, _super);
    function Globalization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Globalization.prototype.getPreferredLanguage = function () { return core.cordova(this, "getPreferredLanguage", {}, arguments); };
    Globalization.prototype.getLocaleName = function () { return core.cordova(this, "getLocaleName", {}, arguments); };
    Globalization.prototype.dateToString = function (date, options) { return core.cordova(this, "dateToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.stringToDate = function (dateString, options) { return core.cordova(this, "stringToDate", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.getDatePattern = function (options) { return core.cordova(this, "getDatePattern", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.getDateNames = function (options) { return core.cordova(this, "getDateNames", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.isDayLightSavingsTime = function (date) { return core.cordova(this, "isDayLightSavingsTime", {}, arguments); };
    Globalization.prototype.getFirstDayOfWeek = function () { return core.cordova(this, "getFirstDayOfWeek", {}, arguments); };
    Globalization.prototype.numberToString = function (numberToConvert, options) { return core.cordova(this, "numberToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.stringToNumber = function (stringToConvert, options) { return core.cordova(this, "stringToNumber", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.getNumberPattern = function (options) { return core.cordova(this, "getNumberPattern", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.getCurrencyPattern = function (currencyCode) { return core.cordova(this, "getCurrencyPattern", {}, arguments); };
    Globalization.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Globalization, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Globalization.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Globalization });
    Globalization.pluginName = "Globalization";
    Globalization.plugin = "cordova-plugin-globalization";
    Globalization.pluginRef = "navigator.globalization";
    Globalization.repo = "https://github.com/apache/cordova-plugin-globalization";
    Globalization.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Globalization = tslib.__decorate([], Globalization);
    return Globalization;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Globalization, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getPreferredLanguage: [], getLocaleName: [], dateToString: [], stringToDate: [], getDatePattern: [], getDateNames: [], isDayLightSavingsTime: [], getFirstDayOfWeek: [], numberToString: [], stringToNumber: [], getNumberPattern: [], getCurrencyPattern: [] } });

exports.Globalization = Globalization;
