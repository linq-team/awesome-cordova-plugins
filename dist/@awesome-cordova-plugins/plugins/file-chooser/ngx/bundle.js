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

var FileChooser = /** @class */ (function (_super) {
    tslib.__extends(FileChooser, _super);
    function FileChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileChooser.prototype.open = function (filter) { return core.cordova(this, "open", {}, arguments); };
    FileChooser.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileChooser, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FileChooser.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileChooser });
    FileChooser.pluginName = "FileChooser";
    FileChooser.plugin = "cordova-plugin-filechooser";
    FileChooser.pluginRef = "fileChooser";
    FileChooser.repo = "https://github.com/ihadeed/cordova-filechooser";
    FileChooser.platforms = ["Android"];
    FileChooser = tslib.__decorate([], FileChooser);
    return FileChooser;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileChooser, decorators: [{
            type: i0.Injectable
        }], propDecorators: { open: [] } });

exports.FileChooser = FileChooser;
