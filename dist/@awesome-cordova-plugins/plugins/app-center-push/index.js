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
import { Observable } from 'rxjs';
var AppCenterPushOriginal = /** @class */ (function (_super) {
    __extends(AppCenterPushOriginal, _super);
    function AppCenterPushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPushOriginal.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPushOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterPushOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterPushOriginal.pluginName = "AppCenterPush";
    AppCenterPushOriginal.plugin = "cordova-plugin-appcenter-push";
    AppCenterPushOriginal.pluginRef = "AppCenter.Push";
    AppCenterPushOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPushOriginal.platforms = ["Android", "iOS"];
    return AppCenterPushOriginal;
}(AwesomeCordovaNativePlugin));
var AppCenterPush = new AppCenterPushOriginal();
export { AppCenterPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFnQ0MsaUNBQTBCOzs7O0lBVzNELHdDQUFnQixhQUFDLFNBQWlCO0lBU2xDLGlDQUFTO0lBV1Qsa0NBQVUsYUFBQyxZQUFxQjs7Ozs7O3dCQWpFbEM7RUFrQ21DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIFB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9wdXNoL2NvcmRvdmFcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwQ2VudGVyUHVzaCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hcHAtY2VudGVyLXB1c2gvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBDZW50ZXJQdXNoOiBBcHBDZW50ZXJQdXNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmFwcENlbnRlclB1c2guc2V0RW5hYmxlZCh0cnVlKS50aGVuKCgpID0+IHtcbiAqICAgIHRoaXMuYXBwQ2VudGVyUHVzaC5hZGRFdmVudExpc3RlbmVyKCdNeSBFdmVudCcpLnN1YnNjcmliZShwdXNoTm90aWZpY2F0aW9uID0+IHtcbiAqICAgICAgICBjb25zb2xlLmxvZygnUmVjaXZlZCBwdXNoIG5vdGlmaWNhdGlvbicsIHB1c2hOb3RpZmljYXRpb24pO1xuICogICAgfSk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBDZW50ZXJQdXNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXB1c2gnLFxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuUHVzaCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItcHVzaCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXJQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVFdmVudExpc3RlbmVyJyxcbiAgfSlcbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiBBcHAgQ2VudGVyIFB1c2ggaXMgZW5hYmxlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBBcHAgQ2VudGVyIFB1c2ggYXQgcnVudGltZVxuICAgKlxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG91bGRFbmFibGUgU2V0IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRFbmFibGVkKHNob3VsZEVuYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19