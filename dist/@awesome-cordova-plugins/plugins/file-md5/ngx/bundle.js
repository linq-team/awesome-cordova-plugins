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

var FileMD5 = /** @class */ (function (_super) {
    tslib.__extends(FileMD5, _super);
    function FileMD5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileMD5.prototype.file = function (fileEntry) { return core.cordova(this, "file", {}, arguments); };
    FileMD5.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileMD5, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FileMD5.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileMD5 });
    FileMD5.pluginName = "FileMD5";
    FileMD5.plugin = "cordova-plugin-file-md5";
    FileMD5.pluginRef = "md5chksum";
    FileMD5.repo = "https://github.com/mramonlopez/cordova-plugin-file-md5";
    FileMD5.platforms = ["Android", "iOS"];
    FileMD5 = tslib.__decorate([], FileMD5);
    return FileMD5;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileMD5, decorators: [{
            type: i0.Injectable
        }], propDecorators: { file: [] } });

exports.FileMD5 = FileMD5;
