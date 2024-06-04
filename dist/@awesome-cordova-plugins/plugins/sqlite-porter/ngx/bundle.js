'use strict';

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var i0 = require('@angular/core');

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

var SQLitePorter = /** @class */ (function (_super) {
    tslib.__extends(SQLitePorter, _super);
    function SQLitePorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLitePorter.prototype.importSqlToDb = function (db, sql) { return core.cordova(this, "importSqlToDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.exportDbToSql = function (db) { return core.cordova(this, "exportDbToSql", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.importJsonToDb = function (db, json) { return core.cordova(this, "importJsonToDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.exportDbToJson = function (db) { return core.cordova(this, "exportDbToJson", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.wipeDb = function (db) { return core.cordova(this, "wipeDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SQLitePorter, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SQLitePorter.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SQLitePorter });
    SQLitePorter.pluginName = "SQLitePorter";
    SQLitePorter.plugin = "uk.co.workingedge.cordova.plugin.sqliteporter";
    SQLitePorter.pluginRef = "cordova.plugins.sqlitePorter";
    SQLitePorter.repo = "https://github.com/dpa99c/cordova-sqlite-porter";
    SQLitePorter.platforms = ["Amazon Fire OS", "Android", "BlackBerry 10", "Browser", "iOS", "Tizen", "Windows", "Windows Phone"];
    SQLitePorter = tslib.__decorate([], SQLitePorter);
    return SQLitePorter;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SQLitePorter, decorators: [{
            type: i0.Injectable
        }], propDecorators: { importSqlToDb: [], exportDbToSql: [], importJsonToDb: [], exportDbToJson: [], wipeDb: [] } });

exports.SQLitePorter = SQLitePorter;
