import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var LocalBackup = /** @class */ (function (_super) {
    __extends(LocalBackup, _super);
    function LocalBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackup.prototype.create = function (data) { return cordova(this, "create", {}, arguments); };
    LocalBackup.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    LocalBackup.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    LocalBackup.prototype.remove = function () { return cordova(this, "remove", {}, arguments); };
    LocalBackup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalBackup, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    LocalBackup.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalBackup });
    LocalBackup.pluginName = "LocalBackup";
    LocalBackup.plugin = "cordova-plugin-local-backup";
    LocalBackup.pluginRef = "LocalBackup";
    LocalBackup.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackup.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackup.platforms = ["Android", "iOS"];
    LocalBackup = __decorate([], LocalBackup);
    return LocalBackup;
}(AwesomeCordovaNativePlugin));
export { LocalBackup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalBackup, decorators: [{
            type: Injectable
        }], propDecorators: { create: [], read: [], exists: [], remove: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYWwtYmFja3VwL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUErQjNELCtCQUEwQjs7OztJQUV6RCw0QkFBTSxhQUFDLElBQVM7SUFLaEIsMEJBQUk7SUFLSiw0QkFBTTtJQUtOLDRCQUFNOzZHQWpCSyxXQUFXO2lIQUFYLFdBQVc7Ozs7Ozs7SUFBWCxXQUFXLGtCQUFYLFdBQVc7c0JBaEN4QjtFQWdDaUMsMEJBQTBCO1NBQTlDLFdBQVc7NEZBQVgsV0FBVztrQkFEdkIsVUFBVTs4QkFHVCxNQUFNLE1BS04sSUFBSSxNQUtKLE1BQU0sTUFLTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBMb2NhbEJhY2t1cFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB0byBjcmVhdGUgbG9jYWwgYmFja3VwXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExvY2FsQmFja3VwIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xvY2FsLWJhY2t1cC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsQmFja3VwOiBMb2NhbEJhY2t1cCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMubG9jYWxCYWNrdXAuY3JlYXRlKHtkYXRhOiB7a2V5OiAndmFsdWUnfX0pXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG9jYWxCYWNrdXAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxuICBwbHVnaW5SZWY6ICdMb2NhbEJhY2t1cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWF4aW1CZWxvdi9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWxvY2FsLWJhY2t1cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEJhY2t1cCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBjcmVhdGUoZGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZWFkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBleGlzdHMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZW1vdmUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=