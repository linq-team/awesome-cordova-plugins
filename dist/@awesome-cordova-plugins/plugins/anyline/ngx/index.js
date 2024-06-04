import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Anyline = /** @class */ (function (_super) {
    __extends(Anyline, _super);
    function Anyline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anyline.prototype.checkLicense = function (licenseKey) { return cordova(this, "checkLicense", {}, arguments); };
    Anyline.prototype.initAnylineSDK = function (licenseKey) { return cordova(this, "initAnylineSDK", {}, arguments); };
    Anyline.prototype.getSDKVersion = function () { return cordova(this, "getSDKVersion", {}, arguments); };
    Anyline.prototype.scan = function (config) { return cordova(this, "scan", {}, arguments); };
    Anyline.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Anyline, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Anyline.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Anyline });
    Anyline.pluginName = "Anyline";
    Anyline.plugin = "io-anyline-cordova";
    Anyline.pluginRef = "Anyline";
    Anyline.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    Anyline.platforms = ["Android", "iOS"];
    Anyline = __decorate([], Anyline);
    return Anyline;
}(AwesomeCordovaNativePlugin));
export { Anyline };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Anyline, decorators: [{
            type: Injectable
        }], propDecorators: { checkLicense: [], initAnylineSDK: [], getSDKVersion: [], scan: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW55bGluZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBa0MvRCwyQkFBMEI7Ozs7SUFFckQsOEJBQVksYUFBQyxVQUFrQjtJQUsvQixnQ0FBYyxhQUFDLFVBQWtCO0lBS2pDLCtCQUFhO0lBV2Isc0JBQUksYUFBQyxNQUFxQjt5R0F2QmYsT0FBTzs2R0FBUCxPQUFPOzs7Ozs7SUFBUCxPQUFPLGtCQUFQLE9BQU87a0JBbkNwQjtFQW1DNkIsMEJBQTBCO1NBQTFDLE9BQU87NEZBQVAsT0FBTztrQkFEbkIsVUFBVTs4QkFHVCxZQUFZLE1BS1osY0FBYyxNQUtkLGFBQWEsTUFXYixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbnlsaW5lQ29uZmlnIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIEBuYW1lIEFueWxpbmVcbiAqIEBkZXNjcmlwdGlvblxuICogQW55bGluZSBwcm92aWRlcyBhbiBlYXN5LXRvLXVzZSBTREsgZm9yIGFwcGxpY2F0aW9ucyB0byBlbmFibGUgT3B0aWNhbCBDaGFyYWN0ZXIgUmVjb2duaXRpb24gKE9DUikgb24gbW9iaWxlIGRldmljZXMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFueWxpbmUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW55bGluZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFueWxpbmU6IEFueWxpbmUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFueWxpbmUuc2NhbihvcHRpb25zKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FueWxpbmUnLFxuICBwbHVnaW46ICdpby1hbnlsaW5lLWNvcmRvdmEnLFxuICBwbHVnaW5SZWY6ICdBbnlsaW5lJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbnlsaW5lL2FueWxpbmUtb2NyLWNvcmRvdmEtbW9kdWxlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFueWxpbmUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tMaWNlbnNlKGxpY2Vuc2VLZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpbml0QW55bGluZVNESyhsaWNlbnNlS2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U0RLVmVyc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcge0FueWxpbmVDb25maWd9IFNjYW5uaW5nIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIENvZGUgaXMgY2FwdHVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2Nhbihjb25maWc6IEFueWxpbmVDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19