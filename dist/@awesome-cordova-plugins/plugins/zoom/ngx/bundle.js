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

var Zoom = /** @class */ (function (_super) {
    tslib.__extends(Zoom, _super);
    function Zoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zoom.prototype.initialize = function (appKey, appSecret) { return core.cordova(this, "initialize", {}, arguments); };
    Zoom.prototype.login = function (username, password) { return core.cordova(this, "login", {}, arguments); };
    Zoom.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    Zoom.prototype.isLoggedIn = function () { return core.cordova(this, "isLoggedIn", {}, arguments); };
    Zoom.prototype.joinMeeting = function (meetingNo, meetingPassword, displayName, options) { return core.cordova(this, "joinMeeting", {}, arguments); };
    Zoom.prototype.startMeetingWithZAK = function (meetingNo, displayName, zoomToken, zoomAccessToken, userId, options) { return core.cordova(this, "startMeetingWithZAK", {}, arguments); };
    Zoom.prototype.startMeeting = function (meetingNo, options) { return core.cordova(this, "startMeeting", {}, arguments); };
    Zoom.prototype.startInstantMeeting = function (options) { return core.cordova(this, "startInstantMeeting", {}, arguments); };
    Zoom.prototype.setLocale = function (languageTag) { return core.cordova(this, "setLocale", {}, arguments); };
    Zoom.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Zoom, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Zoom.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Zoom });
    Zoom.pluginName = "Zoom";
    Zoom.plugin = "cordova.plugin.zoom";
    Zoom.pluginRef = "cordova.plugins.Zoom";
    Zoom.repo = "https://github.com/zoom/zoom-sdk-ionic";
    Zoom.platforms = ["Android", "iOS"];
    Zoom = tslib.__decorate([], Zoom);
    return Zoom;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Zoom, decorators: [{
            type: i0.Injectable
        }], propDecorators: { initialize: [], login: [], logout: [], isLoggedIn: [], joinMeeting: [], startMeetingWithZAK: [], startMeeting: [], startInstantMeeting: [], setLocale: [] } });

exports.Zoom = Zoom;
