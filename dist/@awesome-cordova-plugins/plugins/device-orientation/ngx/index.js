import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var DeviceOrientation = /** @class */ (function (_super) {
    __extends(DeviceOrientation, _super);
    function DeviceOrientation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceOrientation.prototype.getCurrentHeading = function () { return cordova(this, "getCurrentHeading", {}, arguments); };
    DeviceOrientation.prototype.watchHeading = function (options) { return cordova(this, "watchHeading", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceOrientation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceOrientation, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    DeviceOrientation.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceOrientation });
    DeviceOrientation.pluginName = "DeviceOrientation";
    DeviceOrientation.plugin = "cordova-plugin-device-orientation";
    DeviceOrientation.pluginRef = "navigator.compass";
    DeviceOrientation.repo = "https://github.com/apache/cordova-plugin-device-orientation";
    DeviceOrientation.platforms = ["Amazon Fire OS", "Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone"];
    DeviceOrientation = __decorate([], DeviceOrientation);
    return DeviceOrientation;
}(AwesomeCordovaNativePlugin));
export { DeviceOrientation };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceOrientation, decorators: [{
            type: Injectable
        }], propDecorators: { getCurrentHeading: [], watchHeading: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlLW9yaWVudGF0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQXNGSyxxQ0FBMEI7Ozs7SUFPL0QsNkNBQWlCO0lBaUJqQix3Q0FBWSxhQUFDLE9BQXlDO21IQXhCM0MsaUJBQWlCO3VIQUFqQixpQkFBaUI7Ozs7OztJQUFqQixpQkFBaUIsa0JBQWpCLGlCQUFpQjs0QkF4RjlCO0VBd0Z1QywwQkFBMEI7U0FBcEQsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVU7OEJBUVQsaUJBQWlCLE1BaUJqQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nIHtcbiAgLyoqXG4gICAqIFRoZSBoZWFkaW5nIGluIGRlZ3JlZXMgZnJvbSAwLTM1OS45OSBhdCBhIHNpbmdsZSBtb21lbnQgaW4gdGltZS4gKE51bWJlcilcbiAgICovXG4gIG1hZ25ldGljSGVhZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgaGVhZGluZyByZWxhdGl2ZSB0byB0aGUgZ2VvZ3JhcGhpYyBOb3J0aCBQb2xlIGluIGRlZ3JlZXMgMC0zNTkuOTkgYXQgYSBzaW5nbGUgbW9tZW50IGluIHRpbWUuIEEgbmVnYXRpdmUgdmFsdWUgaW5kaWNhdGVzIHRoYXQgdGhlIHRydWUgaGVhZGluZyBjYW4ndCBiZSBkZXRlcm1pbmVkLiAoTnVtYmVyKVxuICAgKi9cbiAgdHJ1ZUhlYWRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRldmlhdGlvbiBpbiBkZWdyZWVzIGJldHdlZW4gdGhlIHJlcG9ydGVkIGhlYWRpbmcgYW5kIHRoZSB0cnVlIGhlYWRpbmcuIChOdW1iZXIpXG4gICAqL1xuICBoZWFkaW5nQWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHRpbWUgYXQgd2hpY2ggdGhpcyBoZWFkaW5nIHdhcyBkZXRlcm1pbmVkLiAoRE9NVGltZVN0YW1wKVxuICAgKi9cbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlT3JpZW50YXRpb25Db21wYXNzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBIb3cgb2Z0ZW4gdG8gcmV0cmlldmUgdGhlIGNvbXBhc3MgaGVhZGluZyBpbiBtaWxsaXNlY29uZHMuIChOdW1iZXIpIChEZWZhdWx0OiAxMDApXG4gICAqL1xuICBmcmVxdWVuY3k/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBjaGFuZ2UgaW4gZGVncmVlcyByZXF1aXJlZCB0byBpbml0aWF0ZSBhIHdhdGNoSGVhZGluZyBzdWNjZXNzIGNhbGxiYWNrLiBXaGVuIHRoaXMgdmFsdWUgaXMgc2V0LCBmcmVxdWVuY3kgaXMgaWdub3JlZC4gKE51bWJlcilcbiAgICovXG4gIGZpbHRlcj86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEZXZpY2UgT3JpZW50YXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1kZXZpY2Utb3JpZW50YXRpb25gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRGV2aWNlIE9yaWVudGF0aW9uIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlLW9yaWVudGF0aW9uKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gRGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZyBpcyBhbiBpbnRlcmZhY2UgZm9yIGNvbXBhc3NcbiAqIGltcG9ydCB7IERldmljZU9yaWVudGF0aW9uLCBEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RldmljZS1vcmllbnRhdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlT3JpZW50YXRpb246IERldmljZU9yaWVudGF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBHZXQgdGhlIGRldmljZSBjdXJyZW50IGNvbXBhc3MgaGVhZGluZ1xuICogdGhpcy5kZXZpY2VPcmllbnRhdGlvbi5nZXRDdXJyZW50SGVhZGluZygpLnRoZW4oXG4gKiAgIChkYXRhOiBEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogKTtcbiAqXG4gKiAvLyBXYXRjaCB0aGUgZGV2aWNlIGNvbXBhc3MgaGVhZGluZyBjaGFuZ2VcbiAqIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLmRldmljZU9yaWVudGF0aW9uLndhdGNoSGVhZGluZygpLnN1YnNjcmliZShcbiAqICAgKGRhdGE6IERldmljZU9yaWVudGF0aW9uQ29tcGFzc0hlYWRpbmcpID0+IGNvbnNvbGUubG9nKGRhdGEpXG4gKiApO1xuICpcbiAqIC8vIFN0b3Agd2F0Y2hpbmcgaGVhZGluZyBjaGFuZ2VcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRGV2aWNlT3JpZW50YXRpb25Db21wYXNzT3B0aW9uc1xuICogRGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZ1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RldmljZU9yaWVudGF0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlLW9yaWVudGF0aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNvbXBhc3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kZXZpY2Utb3JpZW50YXRpb24nLFxuICBwbGF0Zm9ybXM6IFtcbiAgICAnQW1hem9uIEZpcmUgT1MnLFxuICAgICdBbmRyb2lkJyxcbiAgICAnQmxhY2tCZXJyeSAxMCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdGaXJlZm94IE9TJyxcbiAgICAnaU9TJyxcbiAgICAnVGl6ZW4nLFxuICAgICdVYnVudHUnLFxuICAgICdXaW5kb3dzJyxcbiAgICAnV2luZG93cyBQaG9uZScsXG4gIF0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERldmljZU9yaWVudGF0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGNvbXBhc3MgaGVhZGluZy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRIZWFkaW5nKCk6IFByb21pc2U8RGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSBjdXJyZW50IGhlYWRpbmcgYXQgYSByZWd1bGFyIGludGVydmFsXG4gICAqXG4gICAqIFN0b3AgdGhlIHdhdGNoIGJ5IHVuc3Vic2NyaWJpbmcgZnJvbSB0aGUgb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAcGFyYW0ge0RldmljZU9yaWVudGF0aW9uQ29tcGFzc09wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIGZvciBjb21wYXNzLiBGcmVxdWVuY3kgYW5kIEZpbHRlci4gT3B0aW9uYWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZz59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIHRoZSBjb21wYXNzIGhlYWRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnY2xlYXJXYXRjaCcsXG4gIH0pXG4gIHdhdGNoSGVhZGluZyhvcHRpb25zPzogRGV2aWNlT3JpZW50YXRpb25Db21wYXNzT3B0aW9ucyk6IE9ic2VydmFibGU8RGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19