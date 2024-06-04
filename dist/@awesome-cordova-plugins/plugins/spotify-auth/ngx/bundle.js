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

var SpotifyAuth = /** @class */ (function (_super) {
    tslib.__extends(SpotifyAuth, _super);
    function SpotifyAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpotifyAuth.prototype.authorize = function (cfg) { return core.cordova(this, "authorize", { "sync": false }, arguments); };
    SpotifyAuth.prototype.forget = function () { return core.cordova(this, "forget", { "sync": true }, arguments); };
    SpotifyAuth.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpotifyAuth, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SpotifyAuth.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpotifyAuth });
    SpotifyAuth.pluginName = "SpotifyAuth";
    SpotifyAuth.plugin = "cordova-spotify-oauth";
    SpotifyAuth.pluginRef = "cordova.plugins.spotifyAuth";
    SpotifyAuth.repo = "https://github.com/Festify/cordova-spotify-oauth";
    SpotifyAuth.install = "ionic cordova plugin add cordova-spotify-oauth --variable LOCAL_STORAGE_KEY=\"SpotifyOAuthData\"";
    SpotifyAuth.installVariables = ["LOCAL_STORAGE_KEY"];
    SpotifyAuth.platforms = ["Android", "iOS"];
    SpotifyAuth = tslib.__decorate([], SpotifyAuth);
    return SpotifyAuth;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpotifyAuth, decorators: [{
            type: i0.Injectable
        }], propDecorators: { authorize: [], forget: [] } });

exports.SpotifyAuth = SpotifyAuth;
