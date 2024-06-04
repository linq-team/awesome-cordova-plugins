import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var SMS = /** @class */ (function (_super) {
    __extends(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.send = function (phoneNumber, message, options) { return cordova(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMS.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMS.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SMS, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SMS.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SMS });
    SMS.pluginName = "SMS";
    SMS.plugin = "cordova-sms-plugin";
    SMS.pluginRef = "sms";
    SMS.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMS.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    SMS = __decorate([], SMS);
    return SMS;
}(AwesomeCordovaNativePlugin));
export { SMS };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SMS, decorators: [{
            type: Injectable
        }], propDecorators: { send: [], hasPermission: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFtRG5FLHVCQUEwQjs7OztJQWFqRCxrQkFBSSxhQUFDLFdBQThCLEVBQUUsT0FBZSxFQUFFLE9BQW9CO0lBWTFFLDJCQUFhO3FHQXpCRixHQUFHO3lHQUFILEdBQUc7Ozs7OztJQUFILEdBQUcsa0JBQUgsR0FBRztjQXBEaEI7RUFvRHlCLDBCQUEwQjtTQUF0QyxHQUFHOzRGQUFILEdBQUc7a0JBRGYsVUFBVTs4QkFjVCxJQUFJLE1BWUosYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogT3B0aW9ucyBmb3Igc2VuZGluZyBhbiBTTVNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbXNPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlcGxhY2UgXFxuIGJ5IGEgbmV3IGxpbmUuIERlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICByZXBsYWNlTGluZUJyZWFrcz86IGJvb2xlYW47XG5cbiAgYW5kcm9pZD86IFNtc09wdGlvbnNBbmRyb2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNtc09wdGlvbnNBbmRyb2lkIHtcbiAgLyoqXG4gICAqIFNldCB0byBcIklOVEVOVFwiIHRvIHNlbmQgU01TIHdpdGggdGhlIG5hdGl2ZSBhbmRyb2lkIFNNUyBtZXNzYWdpbmcuIExlYXZpbmcgaXQgZW1wdHkgd2lsbCBzZW5kIHRoZSBTTVMgd2l0aG91dCBvcGVuaW5nIGFueSBhcHAuXG4gICAqL1xuICBpbnRlbnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgU01TXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1zbXMtcGx1Z2luLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU01TIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU01TIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3Ntcy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc21zOiBTTVMpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gU2VuZCBhIHRleHQgbWVzc2FnZSB1c2luZyBkZWZhdWx0IG9wdGlvbnNcbiAqIHRoaXMuc21zLnNlbmQoJzQxNjEyMzQ1NicsICdIZWxsbyB3b3JsZCEnKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFNtc09wdGlvbnNcbiAqIFNtc09wdGlvbnNBbmRyb2lkXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU01TJyxcbiAgcGx1Z2luOiAnY29yZG92YS1zbXMtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnc21zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXNtcy9jb3Jkb3ZhLXNtcy1wbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU01TIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2VuZHMgc21zIHRvIGEgbnVtYmVyXG4gICAqXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfHN0cmluZ1tdfSBQaG9uZSBudW1iZXJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7U21zT3B0aW9uc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIFNNUyBoYXMgYmVlbiBzZW50XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIHNlbmQocGhvbmVOdW1iZXI6IHN0cmluZyB8IHN0cmluZ1tdLCBtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBTbXNPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBsZXRzIHlvdSBrbm93IGlmIHRoZSBhcHAgaGFzIHBlcm1pc3Npb24gdG8gc2VuZCBTTVNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==