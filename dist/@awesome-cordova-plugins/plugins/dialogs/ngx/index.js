import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Dialogs = /** @class */ (function (_super) {
    __extends(Dialogs, _super);
    function Dialogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialogs.prototype.alert = function (message, title, buttonName) { return cordova(this, "alert", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    Dialogs.prototype.confirm = function (message, title, buttonLabels) { return cordova(this, "confirm", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    Dialogs.prototype.prompt = function (message, title, buttonLabels, defaultText) { return cordova(this, "prompt", { "successIndex": 1, "errorIndex": 5 }, arguments); };
    Dialogs.prototype.beep = function (times) { return cordova(this, "beep", { "sync": true }, arguments); };
    Dialogs.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Dialogs, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Dialogs.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Dialogs });
    Dialogs.pluginName = "Dialogs";
    Dialogs.plugin = "cordova-plugin-dialogs";
    Dialogs.pluginRef = "navigator.notification";
    Dialogs.repo = "https://github.com/apache/cordova-plugin-dialogs";
    Dialogs.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Dialogs = __decorate([], Dialogs);
    return Dialogs;
}(AwesomeCordovaNativePlugin));
export { Dialogs };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Dialogs, decorators: [{
            type: Injectable
        }], propDecorators: { alert: [], confirm: [], prompt: [], beep: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGlhbG9ncy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBOEMvRCwyQkFBMEI7Ozs7SUFhckQsdUJBQUssYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLFVBQW1CO0lBZ0IxRCx5QkFBTyxhQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsWUFBdUI7SUFpQmhFLHdCQUFNLGFBQ0osT0FBZ0IsRUFDaEIsS0FBYyxFQUNkLFlBQXVCLEVBQ3ZCLFdBQW9CO0lBYXRCLHNCQUFJLGFBQUMsS0FBYTt5R0EvRFAsT0FBTzs2R0FBUCxPQUFPOzs7Ozs7SUFBUCxPQUFPLGtCQUFQLE9BQU87a0JBL0NwQjtFQStDNkIsMEJBQTBCO1NBQTFDLE9BQU87NEZBQVAsT0FBTztrQkFEbkIsVUFBVTs4QkFjVCxLQUFLLE1BZ0JMLE9BQU8sTUFpQlAsTUFBTSxNQWlCTixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dzUHJvbXB0Q2FsbGJhY2sge1xuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBwcmVzc2VkIGJ1dHRvbi4gKE51bWJlcikgTm90ZSB0aGF0IHRoZSBpbmRleCB1c2VzIG9uZS1iYXNlZCBpbmRleGluZywgc28gdGhlIHZhbHVlIGlzIDEsIDIsIDMsIGV0Yy5cbiAgICovXG4gIGJ1dHRvbkluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGVudGVyZWQgaW4gdGhlIHByb21wdCBkaWFsb2cgYm94LiAoU3RyaW5nKVxuICAgKi9cbiAgaW5wdXQxOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRGlhbG9nc1xuICogQHByZW1pZXIgZGlhbG9nc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBnaXZlcyB5b3UgYWJpbGl0eSB0byBhY2Nlc3MgYW5kIGN1c3RvbWl6ZSB0aGUgZGV2aWNlIG5hdGl2ZSBkaWFsb2dzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tZGlhbG9nc2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtEaWFsb2dzIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRpYWxvZ3MpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEaWFsb2dzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RpYWxvZ3Mvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ3M6IERpYWxvZ3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZGlhbG9ncy5hbGVydCgnSGVsbG8gd29ybGQnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRGlhbG9nIGRpc21pc3NlZCcpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3IgZGlzcGxheWluZyBkaWFsb2cnLCBlKSk7XG4gKlxuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERpYWxvZ3NQcm9tcHRDYWxsYmFja1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RpYWxvZ3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kaWFsb2dzJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLm5vdGlmaWNhdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRpYWxvZ3MnLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERpYWxvZ3MgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93cyBhIGN1c3RvbSBhbGVydCBvciBkaWFsb2cgYm94LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBEaWFsb2cgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gRGlhbG9nIHRpdGxlLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIEFsZXJ0KVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2J1dHRvbk5hbWVdIEJ1dHRvbiBuYW1lLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIE9LKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgYmxhbmsgcHJvbWlzZSBvbmNlIHRoZSB1c2VyIGhhcyBkaXNtaXNzZWQgdGhlIGFsZXJ0LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25OYW1lPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgYSBjdXN0b21pemFibGUgY29uZmlybWF0aW9uIGRpYWxvZyBib3guXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIERpYWxvZyBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSBEaWFsb2cgdGl0bGUuIChPcHRpb25hbCwgZGVmYXVsdHMgdG8gQ29uZmlybSlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW2J1dHRvbkxhYmVsc10gQXJyYXkgb2Ygc3RyaW5ncyBzcGVjaWZ5aW5nIGJ1dHRvbiBsYWJlbHMuIChPcHRpb25hbCwgZGVmYXVsdHMgdG8gW09LLENhbmNlbF0pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGJ1dHRvbiBpbmRleCB0aGF0IHdhcyBjbGlja2VkLCBvciAwIGlmIHRoZSB1c2VyIGhhcyBkaXNtaXNzZWQgdGhlIGRpYWxvZyBieSBjbGlja2luZyBvdXRzaWRlIHRoZSBkaWFsb2cgYm94LiBOb3RlIHRoYXQgdGhlIGluZGV4IHVzZSBvbmUtYmFzZWQgaW5kZXhpbmcuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIGNvbmZpcm0obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uTGFiZWxzPzogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIG5hdGl2ZSBkaWFsb2cgYm94IHRoYXQgaXMgbW9yZSBjdXN0b21pemFibGUgdGhhbiB0aGUgYnJvd3NlcidzIHByb21wdCBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSBEaWFsb2cgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gRGlhbG9nIHRpdGxlLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIFByb21wdClcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW2J1dHRvbkxhYmVsc10gIEFycmF5IG9mIHN0cmluZ3Mgc3BlY2lmeWluZyBidXR0b24gbGFiZWxzLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIFtcIk9LXCIsXCJDYW5jZWxcIl0pXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFRleHRdIERlZmF1bHQgdGV4dCBib3ggaW5wdXQgdmFsdWUuICAoT3B0aW9uYWwsIERlZmF1bHQ6IGVtcHR5IHN0cmluZylcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlhbG9nc1Byb21wdENhbGxiYWNrPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhbiBvYmplY3Qgd2l0aCB0aGUgYnV0dG9uIGluZGV4IGNsaWNrZWQgYW5kIHRoZSB0ZXh0IGVudGVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgfSlcbiAgcHJvbXB0KFxuICAgIG1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgYnV0dG9uTGFiZWxzPzogc3RyaW5nW10sXG4gICAgZGVmYXVsdFRleHQ/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxEaWFsb2dzUHJvbXB0Q2FsbGJhY2s+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRldmljZSBwbGF5cyBhIGJlZXAgc291bmQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyc30gdGltZXMgVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIGJlZXAuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYmVlcCh0aW1lczogbnVtYmVyKTogdm9pZCB7fVxufVxuIl19