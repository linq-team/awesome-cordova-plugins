var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var LocalBackupOriginal = /** @class */ (function (_super) {
    __extends(LocalBackupOriginal, _super);
    function LocalBackupOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackupOriginal.prototype.create = function (data) { return cordova(this, "create", {}, arguments); };
    LocalBackupOriginal.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    LocalBackupOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    LocalBackupOriginal.prototype.remove = function () { return cordova(this, "remove", {}, arguments); };
    LocalBackupOriginal.pluginName = "LocalBackup";
    LocalBackupOriginal.plugin = "cordova-plugin-local-backup";
    LocalBackupOriginal.pluginRef = "LocalBackup";
    LocalBackupOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackupOriginal.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackupOriginal.platforms = ["Android", "iOS"];
    return LocalBackupOriginal;
}(AwesomeCordovaNativePlugin));
var LocalBackup = new LocalBackupOriginal();
export { LocalBackup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYWwtYmFja3VwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBK0IzRCwrQkFBMEI7Ozs7SUFFekQsNEJBQU0sYUFBQyxJQUFTO0lBS2hCLDBCQUFJO0lBS0osNEJBQU07SUFLTiw0QkFBTTs7Ozs7OztzQkFqRFI7RUFnQ2lDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBMb2NhbEJhY2t1cFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB0byBjcmVhdGUgbG9jYWwgYmFja3VwXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExvY2FsQmFja3VwIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xvY2FsLWJhY2t1cC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsQmFja3VwOiBMb2NhbEJhY2t1cCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMubG9jYWxCYWNrdXAuY3JlYXRlKHtkYXRhOiB7a2V5OiAndmFsdWUnfX0pXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG9jYWxCYWNrdXAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxuICBwbHVnaW5SZWY6ICdMb2NhbEJhY2t1cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWF4aW1CZWxvdi9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWxvY2FsLWJhY2t1cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEJhY2t1cCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBjcmVhdGUoZGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZWFkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBleGlzdHMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZW1vdmUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=