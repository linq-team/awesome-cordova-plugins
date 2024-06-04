import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var UniqueDeviceID = /** @class */ (function (_super) {
    __extends(UniqueDeviceID, _super);
    function UniqueDeviceID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniqueDeviceID.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    UniqueDeviceID.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UniqueDeviceID, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    UniqueDeviceID.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UniqueDeviceID });
    UniqueDeviceID.pluginName = "UniqueDeviceID";
    UniqueDeviceID.plugin = "cordova-plugin-uniquedeviceid";
    UniqueDeviceID.pluginRef = "window.plugins.uniqueDeviceID";
    UniqueDeviceID.repo = "https://github.com/Paldom/UniqueDeviceID";
    UniqueDeviceID.install = "";
    UniqueDeviceID.installVariables = [];
    UniqueDeviceID.platforms = ["Android", "iOS", "Windows Phone 8"];
    UniqueDeviceID = __decorate([], UniqueDeviceID);
    return UniqueDeviceID;
}(AwesomeCordovaNativePlugin));
export { UniqueDeviceID };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UniqueDeviceID, decorators: [{
            type: Injectable
        }], propDecorators: { get: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdW5pcXVlLWRldmljZS1pZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBK0J4RCxrQ0FBMEI7Ozs7SUFNNUQsNEJBQUc7Z0hBTlEsY0FBYztvSEFBZCxjQUFjOzs7Ozs7OztJQUFkLGNBQWMsa0JBQWQsY0FBYzt5QkFoQzNCO0VBZ0NvQywwQkFBMEI7U0FBakQsY0FBYzs0RkFBZCxjQUFjO2tCQUQxQixVQUFVOzhCQU9ULEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFVuaXF1ZSBEZXZpY2UgSURcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvZHVjZXMgYSB1bmlxdWUsIGNyb3NzLWluc3RhbGwsIGFwcC1zcGVjaWZpYyBkZXZpY2UgaWQuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBVbmlxdWVEZXZpY2VJRCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy91bmlxdWUtZGV2aWNlLWlkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1bmlxdWVEZXZpY2VJRDogVW5pcXVlRGV2aWNlSUQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMudW5pcXVlRGV2aWNlSUQuZ2V0KClcbiAqICAgLnRoZW4oKHV1aWQ6IGFueSkgPT4gY29uc29sZS5sb2codXVpZCkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdVbmlxdWVEZXZpY2VJRCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXVuaXF1ZWRldmljZWlkJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMudW5pcXVlRGV2aWNlSUQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1BhbGRvbS9VbmlxdWVEZXZpY2VJRCcsXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuaXF1ZURldmljZUlEIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0cyBhIHVuaXF1ZSwgY3Jvc3MtaW5zdGFsbCwgYXBwLXNwZWNpZmljIGRldmljZSBpZC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=