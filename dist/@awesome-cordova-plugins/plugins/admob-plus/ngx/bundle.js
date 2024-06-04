'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
var rxjs = require('rxjs');

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

var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.hide = function () { return core.cordova(this, "hide", { "otherPromise": true }, arguments); };
    Banner.prototype.show = function (opts) { return core.cordova(this, "show", { "otherPromise": true }, arguments); };
    Banner.plugin = "cordova-admob-plus";
    Banner.pluginName = "AdMob";
    Banner.pluginRef = "admob.banner";
    Banner.repo = "https://github.com/admob-plus/admob-plus";
    Banner.platforms = ["Android", "iOS"];
    Banner = tslib.__decorate([], Banner);
    return Banner;
}());
var Interstitial = /** @class */ (function () {
    function Interstitial() {
    }
    Interstitial.prototype.load = function (opts) { return core.cordova(this, "load", { "otherPromise": true }, arguments); };
    Interstitial.prototype.show = function () { return core.cordova(this, "show", { "otherPromise": true }, arguments); };
    Interstitial.plugin = "cordova-admob-plus";
    Interstitial.pluginName = "AdMob";
    Interstitial.pluginRef = "admob.interstitial";
    Interstitial = tslib.__decorate([], Interstitial);
    return Interstitial;
}());
var RewardVideo = /** @class */ (function () {
    function RewardVideo() {
    }
    RewardVideo.prototype.load = function (opts) { return core.cordova(this, "load", { "otherPromise": true }, arguments); };
    RewardVideo.prototype.show = function () { return core.cordova(this, "show", { "otherPromise": true }, arguments); };
    RewardVideo.plugin = "cordova-admob-plus";
    RewardVideo.pluginName = "AdMob";
    RewardVideo.pluginRef = "admob.rewardVideo";
    RewardVideo = tslib.__decorate([], RewardVideo);
    return RewardVideo;
}());
var AdMob = /** @class */ (function (_super) {
    tslib.__extends(AdMob, _super);
    function AdMob() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMob.prototype.setAppMuted = function (value) { return core.cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMob.prototype.setAppVolume = function (value) { return core.cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMob.prototype.setDevMode = function (value) { return core.cordova(this, "setDevMode", { "sync": true }, arguments); };
    AdMob.prototype.on = function (event) {
        return rxjs.fromEvent(document, event);
    };
    AdMob.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdMob, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AdMob.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdMob });
    AdMob.platforms = ["Android", "iOS"];
    AdMob.plugin = "cordova-admob-plus";
    AdMob.pluginName = "AdMob";
    AdMob.pluginRef = "admob";
    AdMob.repo = "https://github.com/admob-plus/admob-plus";
    AdMob = tslib.__decorate([], AdMob);
    return AdMob;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AdMob, decorators: [{
            type: i0.Injectable
        }], propDecorators: { setAppMuted: [], setAppVolume: [], setDevMode: [] } });

exports.AdMob = AdMob;
exports.Banner = Banner;
exports.Interstitial = Interstitial;
exports.RewardVideo = RewardVideo;
