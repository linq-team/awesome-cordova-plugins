import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var SmtpClient = /** @class */ (function (_super) {
    __extends(SmtpClient, _super);
    function SmtpClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmtpClient.prototype.sendMail = function (mailSettings, successCallback, errorCallback) { return cordova(this, "sendMail", {}, arguments); };
    SmtpClient.prototype.isLoaded = function () { return cordova(this, "isLoaded", {}, arguments); };
    SmtpClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SmtpClient, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SmtpClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SmtpClient });
    SmtpClient.pluginName = "SMTPClient";
    SmtpClient.plugin = "cordova-plugin-smtp-client";
    SmtpClient.pluginRef = "smtpClient";
    SmtpClient.repo = "https://github.com/CWBudde/cordova-plugin-smtp-client";
    SmtpClient.install = "ionic cordova plugin add cordova-plugin-smtp-client";
    SmtpClient.platforms = ["Android", "iOS"];
    SmtpClient = __decorate([], SmtpClient);
    return SmtpClient;
}(AwesomeCordovaNativePlugin));
export { SmtpClient };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SmtpClient, decorators: [{
            type: Injectable
        }], propDecorators: { sendMail: [], isLoaded: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc210cC1jbGllbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQTBCNUQsOEJBQTBCOzs7O0lBNkJ4RCw2QkFBUSxhQUFDLFlBQWlCLEVBQUUsZUFBb0IsRUFBRSxhQUFrQjtJQVVwRSw2QkFBUTs0R0F2Q0csVUFBVTtnSEFBVixVQUFVOzs7Ozs7O0lBQVYsVUFBVSxrQkFBVixVQUFVO3FCQTNCdkI7RUEyQmdDLDBCQUEwQjtTQUE3QyxVQUFVOzRGQUFWLFVBQVU7a0JBRHRCLFVBQVU7OEJBOEJULFFBQVEsTUFVUixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTbXRwIENsaWVudFxuICogQGRlc2NyaXB0aW9uXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNtdHBDbGllbnQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc210cC1jbGllbnQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtdHBDbGllbnQ6IFNtdHBDbGllbnQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc210cENsaWVudC5zZW5kTWFpbChtYWlsU2V0dGluZ3MsIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NNVFBDbGllbnQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zbXRwLWNsaWVudCcsXG4gIHBsdWdpblJlZjogJ3NtdHBDbGllbnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0NXQnVkZGUvY29yZG92YS1wbHVnaW4tc210cC1jbGllbnQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXNtdHAtY2xpZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNtdHBDbGllbnQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGUgc2VuZE1haWwgZnVuY3Rpb24uXG4gICAqXG4gICAqIHZhciBtYWlsU2V0dGluZ3MgPSB7XG4gICAqICAgZW1haWxGcm9tOiBcImVtYWlsRnJvbUBkb21haW4uY29tXCIsXG4gICAqICAgZW1haWxUbzogXCJlbWFpbFRvQGRvbWFpbi5jb21cIixcbiAgICogICBzbXRwOiBcInNtdHAtbWFpbC5kb21haW4uY29tXCIsXG4gICAqICAgc210cFVzZXJOYW1lOiBcImF1dGh1c2VyQGRvbWFpbi5jb21cIixcbiAgICogICBzbXRwUGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcbiAgICogICBhdHRhY2htZW50czogW1wiYXR0YWNobWVudDFcIiwgXCJhdHRhY2htZW50MlwiXSxcbiAgICogICBzdWJqZWN0OiBcImVtYWlsIHN1YmplY3RcIixcbiAgICogICB0ZXh0Qm9keTogXCJ3cml0ZSBzb21ldGhpbmcgd2l0aGluIHRoZSBib2R5IG9mIHRoZSBlbWFpbFwiXG4gICAqIH07XG4gICAqXG4gICAqIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAqICBhbGVydChtZXNzYWdlKTtcbiAgICogfVxuICAgKlxuICAgKiB2YXIgZXJyb3JDYWxsYmFjayA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICogICBhbGVydChcIkVycm9yIHNlbmRpbmcgdGhlIGVtYWlsXCIpO1xuICAgKiB9XG4gICAqXG4gICAqIEBwYXJhbSBtYWlsU2V0dGluZ3NcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFja1xuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kTWFpbChtYWlsU2V0dGluZ3M6IGFueSwgc3VjY2Vzc0NhbGxiYWNrOiBhbnksIGVycm9yQ2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2FsbCBpc0xvYWRlZCB0byBjaGVjayBpZiBjbGllbnQgaXMgbG9hZGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0xvYWRlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19