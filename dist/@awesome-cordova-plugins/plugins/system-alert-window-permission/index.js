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
var SystemAlertWindowPermissionOriginal = /** @class */ (function (_super) {
    __extends(SystemAlertWindowPermissionOriginal, _super);
    function SystemAlertWindowPermissionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermissionOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.openNotificationSettings = function () { return cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermissionOriginal.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermissionOriginal.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.platforms = ["Android"];
    return SystemAlertWindowPermissionOriginal;
}(AwesomeCordovaNativePlugin));
var SystemAlertWindowPermission = new SystemAlertWindowPermissionOriginal();
export { SystemAlertWindowPermission };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBb0MzQywrQ0FBMEI7Ozs7SUFPekUsbURBQWE7SUFVYix1REFBaUI7SUFVakIsOERBQXdCOzs7Ozs7O3NDQWhFMUI7RUFxQ2lELDBCQUEwQjtTQUE5RCwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFN5c3RlbSBBbGVydCBXaW5kb3cgUGVybWlzc2lvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uOiBTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbi5oYXNQZXJtaXNzaW9uKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLnN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24nLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYXhpbUJlbG92L2NvcmRvdmEtcGx1Z2luLXN5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbi5naXQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXN5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJuIDAgd2hlbiBkb250IGhhdmUgU1lTVEVNX0FMRVJUX1dJTkRPVyBwZXJtaXNzaW9uLCAxIHdoZW4gaGF2ZSBTWVNURU1fQUxFUlRfV0lORE9XIHBlcm1pc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gbm90aWZpY2F0aW9uIFNldHRpbmdzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuTm90aWZpY2F0aW9uU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==