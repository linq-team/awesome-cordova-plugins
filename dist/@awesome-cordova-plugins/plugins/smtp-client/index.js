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
var SmtpClientOriginal = /** @class */ (function (_super) {
    __extends(SmtpClientOriginal, _super);
    function SmtpClientOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmtpClientOriginal.prototype.sendMail = function (mailSettings, successCallback, errorCallback) { return cordova(this, "sendMail", {}, arguments); };
    SmtpClientOriginal.prototype.isLoaded = function () { return cordova(this, "isLoaded", {}, arguments); };
    SmtpClientOriginal.pluginName = "SMTPClient";
    SmtpClientOriginal.plugin = "cordova-plugin-smtp-client";
    SmtpClientOriginal.pluginRef = "smtpClient";
    SmtpClientOriginal.repo = "https://github.com/CWBudde/cordova-plugin-smtp-client";
    SmtpClientOriginal.install = "ionic cordova plugin add cordova-plugin-smtp-client";
    SmtpClientOriginal.platforms = ["Android", "iOS"];
    return SmtpClientOriginal;
}(AwesomeCordovaNativePlugin));
var SmtpClient = new SmtpClientOriginal();
export { SmtpClient };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc210cC1jbGllbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUEwQjVELDhCQUEwQjs7OztJQTZCeEQsNkJBQVEsYUFBQyxZQUFpQixFQUFFLGVBQW9CLEVBQUUsYUFBa0I7SUFVcEUsNkJBQVE7Ozs7Ozs7cUJBbEVWO0VBMkJnQywwQkFBMEI7U0FBN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU210cCBDbGllbnRcbiAqIEBkZXNjcmlwdGlvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTbXRwQ2xpZW50IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NtdHAtY2xpZW50L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzbXRwQ2xpZW50OiBTbXRwQ2xpZW50KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNtdHBDbGllbnQuc2VuZE1haWwobWFpbFNldHRpbmdzLCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTTVRQQ2xpZW50JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc210cC1jbGllbnQnLFxuICBwbHVnaW5SZWY6ICdzbXRwQ2xpZW50JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9DV0J1ZGRlL2NvcmRvdmEtcGx1Z2luLXNtdHAtY2xpZW50JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1zbXRwLWNsaWVudCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTbXRwQ2xpZW50IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhlIHNlbmRNYWlsIGZ1bmN0aW9uLlxuICAgKlxuICAgKiB2YXIgbWFpbFNldHRpbmdzID0ge1xuICAgKiAgIGVtYWlsRnJvbTogXCJlbWFpbEZyb21AZG9tYWluLmNvbVwiLFxuICAgKiAgIGVtYWlsVG86IFwiZW1haWxUb0Bkb21haW4uY29tXCIsXG4gICAqICAgc210cDogXCJzbXRwLW1haWwuZG9tYWluLmNvbVwiLFxuICAgKiAgIHNtdHBVc2VyTmFtZTogXCJhdXRodXNlckBkb21haW4uY29tXCIsXG4gICAqICAgc210cFBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXG4gICAqICAgYXR0YWNobWVudHM6IFtcImF0dGFjaG1lbnQxXCIsIFwiYXR0YWNobWVudDJcIl0sXG4gICAqICAgc3ViamVjdDogXCJlbWFpbCBzdWJqZWN0XCIsXG4gICAqICAgdGV4dEJvZHk6IFwid3JpdGUgc29tZXRoaW5nIHdpdGhpbiB0aGUgYm9keSBvZiB0aGUgZW1haWxcIlxuICAgKiB9O1xuICAgKlxuICAgKiB2YXIgc3VjY2Vzc0NhbGxiYWNrID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgKiAgYWxlcnQobWVzc2FnZSk7XG4gICAqIH1cbiAgICpcbiAgICogdmFyIGVycm9yQ2FsbGJhY2sgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAqICAgYWxlcnQoXCJFcnJvciBzZW5kaW5nIHRoZSBlbWFpbFwiKTtcbiAgICogfVxuICAgKlxuICAgKiBAcGFyYW0gbWFpbFNldHRpbmdzXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2tcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZE1haWwobWFpbFNldHRpbmdzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjazogYW55LCBlcnJvckNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNhbGwgaXNMb2FkZWQgdG8gY2hlY2sgaWYgY2xpZW50IGlzIGxvYWRlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNMb2FkZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==