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

var SqliteDbCopy = /** @class */ (function (_super) {
    tslib.__extends(SqliteDbCopy, _super);
    function SqliteDbCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SqliteDbCopy.prototype.copy = function (dbname, location) { return core.cordova(this, "copy", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.checkDbOnStorage = function (dbname, source) { return core.cordova(this, "checkDbOnStorage", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.copyDbFromStorage = function (dbname, location, source, deleteolddb) { return core.cordova(this, "copyDbFromStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.copyDbToStorage = function (dbname, location, destination, overwrite) { return core.cordova(this, "copyDbToStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.remove = function (dbname, location) { return core.cordova(this, "remove", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SqliteDbCopy, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SqliteDbCopy.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SqliteDbCopy });
    SqliteDbCopy.pluginName = "cordova-plugin-dbcopy";
    SqliteDbCopy.plugin = "cordova-plugin-dbcopy";
    SqliteDbCopy.pluginRef = "window.plugins.sqlDB";
    SqliteDbCopy.repo = "https://github.com/an-rahulpandey/cordova-plugin-dbcopy";
    SqliteDbCopy.platforms = ["Android", "iOS"];
    SqliteDbCopy = tslib.__decorate([], SqliteDbCopy);
    return SqliteDbCopy;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SqliteDbCopy, decorators: [{
            type: i0.Injectable
        }], propDecorators: { copy: [], checkDbOnStorage: [], copyDbFromStorage: [], copyDbToStorage: [], remove: [] } });

exports.SqliteDbCopy = SqliteDbCopy;
