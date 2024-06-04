import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var SystemAlertWindowPermission = /** @class */ (function (_super) {
    __extends(SystemAlertWindowPermission, _super);
    function SystemAlertWindowPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermission.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.openNotificationSettings = function () { return cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermission.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemAlertWindowPermission, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SystemAlertWindowPermission.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemAlertWindowPermission });
    SystemAlertWindowPermission.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermission.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermission.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermission.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.platforms = ["Android"];
    SystemAlertWindowPermission = __decorate([], SystemAlertWindowPermission);
    return SystemAlertWindowPermission;
}(AwesomeCordovaNativePlugin));
export { SystemAlertWindowPermission };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemAlertWindowPermission, decorators: [{
            type: Injectable
        }], propDecorators: { hasPermission: [], requestPermission: [], openNotificationSettings: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFvQzNDLCtDQUEwQjs7OztJQU96RSxtREFBYTtJQVViLHVEQUFpQjtJQVVqQiw4REFBd0I7NkhBM0JiLDJCQUEyQjtpSUFBM0IsMkJBQTJCOzs7Ozs7O0lBQTNCLDJCQUEyQixrQkFBM0IsMkJBQTJCO3NDQXJDeEM7RUFxQ2lELDBCQUEwQjtTQUE5RCwyQkFBMkI7NEZBQTNCLDJCQUEyQjtrQkFEdkMsVUFBVTs4QkFRVCxhQUFhLE1BVWIsaUJBQWlCLE1BVWpCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3lzdGVtIEFsZXJ0IFdpbmRvdyBQZXJtaXNzaW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb246IFN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uLmhhc1Blcm1pc3Npb24oKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5zeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uLmdpdCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgcGVybWlzc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm4gMCB3aGVuIGRvbnQgaGF2ZSBTWVNURU1fQUxFUlRfV0lORE9XIHBlcm1pc3Npb24sIDEgd2hlbiBoYXZlIFNZU1RFTV9BTEVSVF9XSU5ET1cgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBub3RpZmljYXRpb24gU2V0dGluZ3NcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wZW5Ob3RpZmljYXRpb25TZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19