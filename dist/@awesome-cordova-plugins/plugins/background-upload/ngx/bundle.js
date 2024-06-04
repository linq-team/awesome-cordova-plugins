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

exports.UploadState = void 0;
(function (UploadState) {
    UploadState["UPLOADED"] = "UPLOADED";
    UploadState["FAILED"] = "FAILED";
    UploadState["UPLOADING"] = "UPLOADING";
    UploadState["INITIALIZED"] = "INITIALIZED";
})(exports.UploadState || (exports.UploadState = {}));
var FileTransferManager = /** @class */ (function () {
    function FileTransferManager(options) {
        this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
    }
    FileTransferManager.prototype.startUpload = function (payload) { return core.cordovaInstance(this, "startUpload", {}, arguments); };
    FileTransferManager.prototype.removeUpload = function (id) { return core.cordovaInstance(this, "removeUpload", {}, arguments); };
    FileTransferManager.prototype.acknowledgeEvent = function (id) { return core.cordovaInstance(this, "acknowledgeEvent", {}, arguments); };
    FileTransferManager.prototype.destroy = function () { return core.cordovaInstance(this, "destroy", {}, arguments); };
    return FileTransferManager;
}());
var BackgroundUpload = /** @class */ (function (_super) {
    tslib.__extends(BackgroundUpload, _super);
    function BackgroundUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUpload.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUpload.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackgroundUpload, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BackgroundUpload.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackgroundUpload });
    BackgroundUpload.pluginName = "BackgroundUpload";
    BackgroundUpload.plugin = "@spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.pluginRef = "FileTransferManager";
    BackgroundUpload.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.install = "ionic cordova plugin add @spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.platforms = ["Android", "iOS"];
    BackgroundUpload = tslib.__decorate([], BackgroundUpload);
    return BackgroundUpload;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackgroundUpload, decorators: [{
            type: i0.Injectable
        }] });

exports.BackgroundUpload = BackgroundUpload;
exports.FileTransferManager = FileTransferManager;
