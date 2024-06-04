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
var DeviceAccountsOriginal = /** @class */ (function (_super) {
    __extends(DeviceAccountsOriginal, _super);
    function DeviceAccountsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccountsOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    DeviceAccountsOriginal.prototype.getByType = function (type) { return cordova(this, "getByType", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmails = function () { return cordova(this, "getEmails", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmail = function () { return cordova(this, "getEmail", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissions = function () { return cordova(this, "getPermissions", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissionsByType = function (type) { return cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccountsOriginal.pluginName = "DeviceAccounts";
    DeviceAccountsOriginal.plugin = "cordova-device-accounts-v2";
    DeviceAccountsOriginal.pluginRef = "DeviceAccounts";
    DeviceAccountsOriginal.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccountsOriginal.platforms = ["Android"];
    return DeviceAccountsOriginal;
}(AwesomeCordovaNativePlugin));
var DeviceAccounts = new DeviceAccountsOriginal();
export { DeviceAccounts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlLWFjY291bnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBeUN4RCxrQ0FBMEI7Ozs7SUFPNUQsNEJBQUc7SUFXSCxrQ0FBUyxhQUFDLElBQVk7SUFVdEIsa0NBQVM7SUFVVCxpQ0FBUTtJQVVSLHVDQUFjO0lBV2QsNkNBQW9CLGFBQUMsSUFBWTs7Ozs7O3lCQXJHbkM7RUEwQ29DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkQWNjb3VudCB7XG4gIC8qKiBBY2NvdW50IGNyZWF0b3IgKi9cbiAgQ1JFQVRPUjogQW5kcm9pZEFjY291bnQ7XG5cbiAgLyoqIEFjY291bnQgbmFtZSAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIEFjY291bnQgdHlwZSAqL1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlIEFjY291bnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldHMgdGhlIEdvb2dsZSBhY2NvdW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIEFuZHJvaWQgZGV2aWNlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERldmljZUFjY291bnRzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RldmljZS1hY2NvdW50cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlQWNjb3VudHM6IERldmljZUFjY291bnRzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmRldmljZUFjY291bnRzLmdldCgpXG4gKiAgIC50aGVuKGFjY291bnRzID0+IGNvbnNvbGUubG9nKGFjY291bnRzKSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBbmRyb2lkQWNjb3VudFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RldmljZUFjY291bnRzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1kZXZpY2UtYWNjb3VudHMtdjInLFxuICBwbHVnaW5SZWY6ICdEZXZpY2VBY2NvdW50cycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veFVuaG9seS9jb3Jkb3ZhLWRldmljZS1hY2NvdW50cy12MicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERldmljZUFjY291bnRzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIEdldHMgYWxsIGFjY291bnRzIHJlZ2lzdGVyZWQgb24gdGhlIEFuZHJvaWQgRGV2aWNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQoKTogUHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgYWxsIGFjY291bnRzIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgZm9yIHJlcXVlc3RlZCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRCeVR5cGUodHlwZTogc3RyaW5nKTogUHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgYWxsIGVtYWlscyByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIChhY2NvdW50cyB3aXRoICdjb20uZ29vZ2xlJyB0eXBlKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEVtYWlscygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgdGhlIGZpcnN0IGVtYWlsIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2VcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RW1haWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogIEdldCBwZXJtaXNzaW9ucyBmb3IgYWNjZXNzIHRvIGVtYWlsIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgOC4wK1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQZXJtaXNzaW9ucygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAgR2V0IHBlcm1pc3Npb25zIGZvciBhY2Nlc3MgdG8gZW1haWwgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZSA4LjArIGZvciByZXF1ZXN0ZWQgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQZXJtaXNzaW9uc0J5VHlwZSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19