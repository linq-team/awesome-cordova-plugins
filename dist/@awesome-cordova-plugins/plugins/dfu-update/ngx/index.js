import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var DfuUpdate = /** @class */ (function (_super) {
    __extends(DfuUpdate, _super);
    function DfuUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DfuUpdate.prototype.updateFirmware = function (options) { return cordova(this, "updateFirmware", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    DfuUpdate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DfuUpdate, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    DfuUpdate.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DfuUpdate });
    DfuUpdate.pluginName = "DfuUpdate";
    DfuUpdate.plugin = "cordova-plugin-dfu-update";
    DfuUpdate.pluginRef = "window.DfuUpdate";
    DfuUpdate.repo = "https://github.com/EinfachHans/cordova-plugin-dfu-update";
    DfuUpdate.install = "ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION=\"1.11.0\"";
    DfuUpdate.installVariables = ["ANDROID_NORDIC_VERSION"];
    DfuUpdate.platforms = ["Android", "iOS"];
    DfuUpdate = __decorate([], DfuUpdate);
    return DfuUpdate;
}(AwesomeCordovaNativePlugin));
export { DfuUpdate };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DfuUpdate, decorators: [{
            type: Injectable
        }], propDecorators: { updateFirmware: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGZ1LXVwZGF0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFpREgsNkJBQTBCOzs7O0lBV3ZELGtDQUFjLGFBQUMsT0FBc0I7MkdBWDFCLFNBQVM7K0dBQVQsU0FBUzs7Ozs7Ozs7SUFBVCxTQUFTLGtCQUFULFNBQVM7b0JBbkR0QjtFQW1EK0IsMEJBQTBCO1NBQTVDLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTs4QkFZVCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIGlkZW50aWZpZXIgZm9yIHRoZSBCbHVldG9vdGggTEUgZGV2aWNlIHRvIHVwZGF0ZS4gSXQgd2lsbCBlaXRoZXIgYmUgYSBNQUMgYWRkcmVzcyAob24gQW5kcm9pZCkgb3IgYSBVVUlEIChvbiBpT1MpLlxuICAgKi9cbiAgZGV2aWNlSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzdHJpbmcgdGhhdCBpcyB0aGUgcGF0aCB0byB0aGUgZmlsZSB0byB1c2UgaW4gdGhlIHVwZGF0ZS4gSXQgY2FuIGJlIGVpdGhlciBpbiBlaXRoZXIgYGNkdmZpbGU6Ly9gIG9yIGBmaWxlOi8vYCBmb3JtYXQuXG4gICAqL1xuICBmaWxlVXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBQYWNrZXRSZWNlaXB0Tm90aWZpY2F0aW9uc1ZhbHVlIChEZWZhdWx0IHRvIDEwKVxuICAgKi9cbiAgcGFja2V0UmVjZWlwdE5vdGlmaWNhdGlvbnNWYWx1ZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEZnUgVXBkYXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGlzIGEgV3JhcHBlciB0byB1c2UgTm9yZGljIFNlbWljb25kdWN0b3IncyBEZXZpY2UgRmlybXdhcmUgVXBkYXRlIChERlUpIHNlcnZpY2UgdG8gdXBkYXRlIGEgQmx1ZXRvb3RoIExFIGRldmljZS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGZ1VXBkYXRlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RmdS11cGRhdGUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkZnVVcGRhdGU6IERmdVVwZGF0ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZGZ1VXBkYXRlLnVwZGF0ZUZpcm13YXJlKCdmaWxlVVJMJywgJ2RldmljZUlkZW50aWZpZXInKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RmdVVwZGF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRmdS11cGRhdGUnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuRGZ1VXBkYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FaW5mYWNoSGFucy9jb3Jkb3ZhLXBsdWdpbi1kZnUtdXBkYXRlJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1kZnUtdXBkYXRlIC0tdmFyaWFibGUgQU5EUk9JRF9OT1JESUNfVkVSU0lPTj1cIjEuMTEuMFwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX05PUkRJQ19WRVJTSU9OJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZnVVcGRhdGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydCB0aGUgRmlybXdhcmUtVXBkYXRlLVByb2Nlc3NcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgcHJvY2Vzc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGEgT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgdXBkYXRlRmlybXdhcmUob3B0aW9uczogVXBkYXRlT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=