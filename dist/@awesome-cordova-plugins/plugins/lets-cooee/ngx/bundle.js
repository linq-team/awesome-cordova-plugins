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

var Cooee = /** @class */ (function (_super) {
    tslib.__extends(Cooee, _super);
    function Cooee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cooee.prototype.sendEvent = function (eventName, eventProperties) { return core.cordova(this, "sendEvent", {}, arguments); };
    Cooee.prototype.updateUserProfile = function (userProfile) { return core.cordova(this, "updateUserProfile", {}, arguments); };
    Cooee.prototype.setCurrentScreen = function (screenName) { return core.cordova(this, "setCurrentScreen", {}, arguments); };
    Cooee.prototype.getUserID = function () { return core.cordova(this, "getUserID", {}, arguments); };
    Cooee.prototype.addCooeeCTAListener = function () { return core.cordova(this, "addCooeeCTAListener", { "eventObservable": true, "event": "onCooeeCTAListener", "element": "document" }, arguments); };
    Cooee.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Cooee, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Cooee.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Cooee });
    Cooee.pluginName = "Cooee";
    Cooee.plugin = "@letscooee/cordova-plugin";
    Cooee.pluginRef = "cordova.plugins.Cooee";
    Cooee.repo = "https://github.com/letscooee/cordova-plugin-cooee";
    Cooee.install = "ionic cordova plugin add @letscooee/cordova-plugin --variable COOEE_APP_ID=appId";
    Cooee.installVariables = ["COOEE_APP_ID"];
    Cooee.platforms = ["Android", "iOS"];
    Cooee = tslib.__decorate([], Cooee);
    return Cooee;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Cooee, decorators: [{
            type: i0.Injectable
        }], propDecorators: { sendEvent: [], updateUserProfile: [], setCurrentScreen: [], getUserID: [], addCooeeCTAListener: [] } });

exports.Cooee = Cooee;
