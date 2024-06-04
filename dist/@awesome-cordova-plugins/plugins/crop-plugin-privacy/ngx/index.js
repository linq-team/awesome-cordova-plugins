import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var CropPluginPrivacy = /** @class */ (function (_super) {
    __extends(CropPluginPrivacy, _super);
    function CropPluginPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CropPluginPrivacy.prototype.cropImage = function (arg1, arg2) { return cordova(this, "cropImage", {}, arguments); };
    CropPluginPrivacy.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CropPluginPrivacy, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    CropPluginPrivacy.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CropPluginPrivacy });
    CropPluginPrivacy.pluginName = "CropPluginPrivacy";
    CropPluginPrivacy.plugin = "cordova-plugin-crop-privacy";
    CropPluginPrivacy.pluginRef = "crop";
    CropPluginPrivacy.repo = "https://github.com/BaraAksayeth25/cordova-plugin-crop-privacy";
    CropPluginPrivacy.platforms = ["Android"];
    CropPluginPrivacy = __decorate([], CropPluginPrivacy);
    return CropPluginPrivacy;
}(AwesomeCordovaNativePlugin));
export { CropPluginPrivacy };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CropPluginPrivacy, decorators: [{
            type: Injectable
        }], propDecorators: { cropImage: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY3JvcC1wbHVnaW4tcHJpdmFjeS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBMENyRCxxQ0FBMEI7Ozs7SUFTL0QscUNBQVMsYUFBQyxJQUFZLEVBQUUsSUFBZ0I7bUhBVDdCLGlCQUFpQjt1SEFBakIsaUJBQWlCOzs7Ozs7SUFBakIsaUJBQWlCLGtCQUFqQixpQkFBaUI7NEJBM0M5QjtFQTJDdUMsMEJBQTBCO1NBQXBELGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzhCQVVULFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb3BPcHRpb24ge1xuICAvKiogVGhlIHJlc3VsdGluZyBKUEVHIHF1YWxpdHkgKGlnbm9yZWQgb24gQW5kcm9pZCkuIGRlZmF1bHQ6IDEwMCAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xuXG4gIC8qKiBUaGUgcmVzdWx0aW5nIEpQRUcgcGljdHVyZSB3aWR0aC4gZGVmYXVsdDogLTEgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSByZXN1bHRpbmcgSlBFRyBwaWN0dXJlIGhlaWdodC4gZGVmYXVsdDogLTEgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIENyb3AgUGx1Z2luIFByaXZhY3lcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENyb3BQbHVnaW5Qcml2YWN5IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Nyb3AtcGx1Z2luLXByaXZhY3kvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjcm9wUGx1Z2luUHJpdmFjeTogQ3JvcFBsdWdpblByaXZhY3kpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNyb3BQbHVnaW5Qcml2YWN5LmZ1bmN0aW9uTmFtZSgnL3BhdGgvdG8vaW1hZ2UnLCB7IHF1YWxpdHk6IDEwMCwgdGFyZ2V0V2lkdGg6IDEsIHRhcmdldEhlaWdodDogMSB9KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nyb3BQbHVnaW5Qcml2YWN5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY3JvcC1wcml2YWN5JyxcbiAgcGx1Z2luUmVmOiAnY3JvcCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQmFyYUFrc2F5ZXRoMjUvY29yZG92YS1wbHVnaW4tY3JvcC1wcml2YWN5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcm9wUGx1Z2luUHJpdmFjeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMSB7c3RyaW5nfSBwYXRoIGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSBhcmcyIHtvYmplY3R9IENyb3BwaW5nIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSByZXR1cm4gdGhlIGZpbGUgcGF0aFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcm9wSW1hZ2UoYXJnMTogc3RyaW5nLCBhcmcyOiBDcm9wT3B0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbn1cbiJdfQ==