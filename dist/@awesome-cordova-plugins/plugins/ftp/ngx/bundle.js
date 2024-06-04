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

var FTP = /** @class */ (function (_super) {
    tslib.__extends(FTP, _super);
    function FTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FTP.prototype.connect = function (hostname, username, password) { return core.cordova(this, "connect", {}, arguments); };
    FTP.prototype.ls = function (path) { return core.cordova(this, "ls", {}, arguments); };
    FTP.prototype.mkdir = function (path) { return core.cordova(this, "mkdir", {}, arguments); };
    FTP.prototype.rmdir = function (path) { return core.cordova(this, "rmdir", {}, arguments); };
    FTP.prototype.rm = function (file) { return core.cordova(this, "rm", {}, arguments); };
    FTP.prototype.upload = function (localFile, remoteFile) { return core.cordova(this, "upload", { "observable": true }, arguments); };
    FTP.prototype.download = function (localFile, remoteFile) { return core.cordova(this, "download", { "observable": true }, arguments); };
    FTP.prototype.cancel = function () { return core.cordova(this, "cancel", {}, arguments); };
    FTP.prototype.disconnect = function () { return core.cordova(this, "disconnect", {}, arguments); };
    FTP.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FTP, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FTP.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FTP });
    FTP.pluginName = "FTP";
    FTP.plugin = "cordova-plugin-ftp";
    FTP.pluginRef = "cordova.plugin.ftp";
    FTP.repo = "https://github.com/xfally/cordova-plugin-ftp";
    FTP.platforms = ["Android", "iOS"];
    FTP = tslib.__decorate([], FTP);
    return FTP;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FTP, decorators: [{
            type: i0.Injectable
        }], propDecorators: { connect: [], ls: [], mkdir: [], rmdir: [], rm: [], upload: [], download: [], cancel: [], disconnect: [] } });

exports.FTP = FTP;
