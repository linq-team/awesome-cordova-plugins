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

var CloudSettings = /** @class */ (function (_super) {
    tslib.__extends(CloudSettings, _super);
    function CloudSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettings.prototype.exists = function () { return core.cordova(this, "exists", {}, arguments); };
    CloudSettings.prototype.save = function (settings, overwrite) { return core.cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettings.prototype.load = function () { return core.cordova(this, "load", {}, arguments); };
    CloudSettings.prototype.onRestore = function (handler) { return core.cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettings.prototype.enableDebug = function () { return core.cordova(this, "enableDebug", {}, arguments); };
    CloudSettings.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CloudSettings, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CloudSettings.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CloudSettings });
    CloudSettings.pluginName = "CloudSettings";
    CloudSettings.plugin = "@marysuon/cordova-plugin-cloud-settings";
    CloudSettings.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettings.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettings.install = "ionic cordova plugin add @marysuon/cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettings.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettings.platforms = ["Android", "iOS"];
    CloudSettings = tslib.__decorate([], CloudSettings);
    return CloudSettings;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CloudSettings, decorators: [{
            type: i0.Injectable
        }], propDecorators: { exists: [], save: [], load: [], onRestore: [], enableDebug: [] } });

exports.CloudSettings = CloudSettings;
