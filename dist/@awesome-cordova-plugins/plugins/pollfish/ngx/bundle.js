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

var Pollfish = /** @class */ (function (_super) {
    tslib.__extends(Pollfish, _super);
    function Pollfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pollfish.prototype.init = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode) { return core.cordova(this, "init", {}, arguments); };
    Pollfish.prototype.initWithUserAttributes = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode, userAttributes) { return core.cordova(this, "initWithUserAttributes", {}, arguments); };
    Pollfish.prototype.showPollfish = function () { return core.cordova(this, "showPollfish", {}, arguments); };
    Pollfish.prototype.hidePollfish = function () { return core.cordova(this, "hidePollfish", {}, arguments); };
    Pollfish.prototype.setEventCallback = function (eventName, callback) { return core.cordova(this, "setEventCallback", { "sync": true }, arguments); };
    Object.defineProperty(Pollfish.prototype, "EventListener", {
        get: function () { return core.cordovaPropertyGet(this, "EventListener"); },
        set: function (value) { core.cordovaPropertySet(this, "EventListener", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pollfish.prototype, "Position", {
        get: function () { return core.cordovaPropertyGet(this, "Position"); },
        set: function (value) { core.cordovaPropertySet(this, "Position", value); },
        enumerable: false,
        configurable: true
    });
    Pollfish.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Pollfish, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Pollfish.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Pollfish });
    Pollfish.pluginName = "Pollfish";
    Pollfish.plugin = "com.pollfish.cordova_plugin";
    Pollfish.pluginRef = "pollfishplugin";
    Pollfish.repo = "https://github.com/pollfish/cordova-plugin-pollfish";
    Pollfish.platforms = ["Android", "iOS"];
    Pollfish = tslib.__decorate([], Pollfish);
    return Pollfish;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Pollfish, decorators: [{
            type: i0.Injectable
        }], propDecorators: { EventListener: [], Position: [], init: [], initWithUserAttributes: [], showPollfish: [], hidePollfish: [], setEventCallback: [] } });

exports.Pollfish = Pollfish;
