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

var Printer = /** @class */ (function (_super) {
    tslib.__extends(Printer, _super);
    function Printer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether the device is capable of printing (uses `check()` internally)
     *
     * @returns {Promise<boolean>}
     */
    Printer.prototype.isAvailable = function () {
        return this.check().then(function (res) { return Promise.resolve(res.avail); });
    };
    Printer.prototype.check = function () {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (resolve) {
                    Printer.getPlugin().canPrintItem(function (avail, count) {
                        resolve({ avail: avail, count: count });
                    });
                });
            }
        })();
    };
    Printer.prototype.pick = function () { return core.cordova(this, "pick", {}, arguments); };
    Printer.prototype.print = function (content, options) { return core.cordova(this, "print", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Printer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Printer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Printer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Printer });
    Printer.pluginName = "Printer";
    Printer.plugin = "cordova-plugin-printer";
    Printer.pluginRef = "cordova.plugins.printer";
    Printer.repo = "https://github.com/katzer/cordova-plugin-printer";
    Printer.platforms = ["Android", "iOS", "Windows"];
    Printer = tslib.__decorate([], Printer);
    return Printer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Printer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { check: [], pick: [], print: [] } });

exports.Printer = Printer;
