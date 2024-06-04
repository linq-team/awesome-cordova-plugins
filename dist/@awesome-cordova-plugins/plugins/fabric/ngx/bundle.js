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

var Crashlytics = /** @class */ (function (_super) {
    tslib.__extends(Crashlytics, _super);
    function Crashlytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crashlytics.prototype.addLog = function (message) { return core.cordova(this, "addLog", { "sync": true }, arguments); };
    Crashlytics.prototype.sendCrash = function () { return core.cordova(this, "sendCrash", { "sync": true }, arguments); };
    Crashlytics.prototype.sendNonFatalCrash = function (message, stacktrace) { return core.cordova(this, "sendNonFatalCrash", { "sync": true }, arguments); };
    Crashlytics.prototype.recordError = function (message, code) { return core.cordova(this, "recordError", { "sync": true }, arguments); };
    Crashlytics.prototype.setUserIdentifier = function (userId) { return core.cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    Crashlytics.prototype.setUserName = function (userName) { return core.cordova(this, "setUserName", { "sync": true }, arguments); };
    Crashlytics.prototype.setUserEmail = function (email) { return core.cordova(this, "setUserEmail", { "sync": true }, arguments); };
    Crashlytics.prototype.setStringValueForKey = function (value, key) { return core.cordova(this, "setStringValueForKey", { "sync": true }, arguments); };
    Crashlytics.prototype.setIntValueForKey = function (value, key) { return core.cordova(this, "setIntValueForKey", { "sync": true }, arguments); };
    Crashlytics.prototype.setBoolValueForKey = function (value, key) { return core.cordova(this, "setBoolValueForKey", { "sync": true }, arguments); };
    Crashlytics.prototype.setFloatValueForKey = function (value, key) { return core.cordova(this, "setFloatValueForKey", { "sync": true }, arguments); };
    Crashlytics.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Crashlytics, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Crashlytics.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Crashlytics });
    Crashlytics.pluginName = "Crashlytics";
    Crashlytics.plugin = "cordova-fabric-plugin";
    Crashlytics.pluginRef = "window.fabric.Crashlytics";
    Crashlytics.repo = "https://www.npmjs.com/package/cordova-fabric-plugin";
    Crashlytics.install = "ionic cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx";
    Crashlytics.installVariables = ["FABRIC_API_KEY", "FABRIC_API_SECRET"];
    Crashlytics.platforms = ["Android", "iOS"];
    Crashlytics = tslib.__decorate([], Crashlytics);
    return Crashlytics;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Crashlytics, decorators: [{
            type: i0.Injectable
        }], propDecorators: { addLog: [], sendCrash: [], sendNonFatalCrash: [], recordError: [], setUserIdentifier: [], setUserName: [], setUserEmail: [], setStringValueForKey: [], setIntValueForKey: [], setBoolValueForKey: [], setFloatValueForKey: [] } });
var Answers = /** @class */ (function (_super) {
    tslib.__extends(Answers, _super);
    function Answers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Answers.prototype.sendPurchase = function (itemPrice, currency, success, itemName, itemType, itemId, attributes) { return core.cordova(this, "sendPurchase", { "sync": true }, arguments); };
    Answers.prototype.sendAddToCart = function (itemPrice, currency, itemName, itemType, itemId, attributes) { return core.cordova(this, "sendAddToCart", { "sync": true }, arguments); };
    Answers.prototype.sendStartCheckout = function (totalPrice, currency, itemCount, attributes) { return core.cordova(this, "sendStartCheckout", { "sync": true }, arguments); };
    Answers.prototype.sendSearch = function (query, attributes) { return core.cordova(this, "sendSearch", { "sync": true }, arguments); };
    Answers.prototype.sendShare = function (method, contentName, contentType, contentId, attributes) { return core.cordova(this, "sendShare", { "sync": true }, arguments); };
    Answers.prototype.sendRatedContent = function (rating, contentName, contentType, contentId, attributes) { return core.cordova(this, "sendRatedContent", { "sync": true }, arguments); };
    Answers.prototype.sendSignUp = function (method, success, attributes) { return core.cordova(this, "sendSignUp", { "sync": true }, arguments); };
    Answers.prototype.sendLogIn = function (method, success, attributes) { return core.cordova(this, "sendLogIn", { "sync": true }, arguments); };
    Answers.prototype.sendInvite = function (method, attributes) { return core.cordova(this, "sendInvite", { "sync": true }, arguments); };
    Answers.prototype.sendLevelStart = function (levelName, attributes) { return core.cordova(this, "sendLevelStart", { "sync": true }, arguments); };
    Answers.prototype.sendLevelEnd = function (levelName, score, success, attributes) { return core.cordova(this, "sendLevelEnd", { "sync": true }, arguments); };
    Answers.prototype.sendContentView = function (name, type, id, attributes) { return core.cordova(this, "sendContentView", { "sync": true }, arguments); };
    Answers.prototype.sendScreenView = function (name, id, attributes) { return core.cordova(this, "sendScreenView", { "sync": true }, arguments); };
    Answers.prototype.sendCustomEvent = function (name, attributes) { return core.cordova(this, "sendCustomEvent", { "sync": true }, arguments); };
    Answers.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Answers, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Answers.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Answers });
    Answers.pluginName = "Answers";
    Answers.plugin = "cordova-fabric-plugin";
    Answers.pluginRef = "window.fabric.Answers";
    Answers.repo = "https://www.npmjs.com/package/cordova-fabric-plugin";
    Answers.install = "ionic cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx";
    Answers.installVariables = ["FABRIC_API_KEY", "FABRIC_API_SECRET"];
    Answers.platforms = ["Android", "iOS"];
    Answers = tslib.__decorate([], Answers);
    return Answers;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Answers, decorators: [{
            type: i0.Injectable
        }], propDecorators: { sendPurchase: [], sendAddToCart: [], sendStartCheckout: [], sendSearch: [], sendShare: [], sendRatedContent: [], sendSignUp: [], sendLogIn: [], sendInvite: [], sendLevelStart: [], sendLevelEnd: [], sendContentView: [], sendScreenView: [], sendCustomEvent: [] } });

exports.Answers = Answers;
exports.Crashlytics = Crashlytics;
