import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var BatteryStatus = /** @class */ (function (_super) {
    __extends(BatteryStatus, _super);
    function BatteryStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatus.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatus.prototype.onLow = function () { return cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatus.prototype.onCritical = function () { return cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatus.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BatteryStatus, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BatteryStatus.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BatteryStatus });
    BatteryStatus.pluginName = "BatteryStatus";
    BatteryStatus.plugin = "cordova-plugin-battery-status";
    BatteryStatus.pluginRef = "navigator.battery";
    BatteryStatus.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatus.platforms = ["iOS", "Android", "Windows", "Browser"];
    BatteryStatus = __decorate([], BatteryStatus);
    return BatteryStatus;
}(AwesomeCordovaNativePlugin));
export { BatteryStatus };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BatteryStatus, decorators: [{
            type: Injectable
        }], propDecorators: { onChange: [], onLow: [], onCritical: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmF0dGVyeS1zdGF0dXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBK0NDLGlDQUEwQjs7OztJQVUzRCxnQ0FBUTtJQWFSLDZCQUFLO0lBYUwsa0NBQVU7K0dBcENDLGFBQWE7bUhBQWIsYUFBYTs7Ozs7O0lBQWIsYUFBYSxrQkFBYixhQUFhO3dCQWpEMUI7RUFpRG1DLDBCQUEwQjtTQUFoRCxhQUFhOzRGQUFiLGFBQWE7a0JBRHpCLFVBQVU7OEJBV1QsUUFBUSxNQWFSLEtBQUssTUFhTCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXR0ZXJ5U3RhdHVzUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIGJhdHRlcnkgY2hhcmdlIHBlcmNlbnRhZ2VcbiAgICovXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgcGx1Z2dlZCBpblxuICAgKi9cbiAgaXNQbHVnZ2VkOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhdHRlcnkgU3RhdHVzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5c3RhdHVzLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmF0dGVyeVN0YXR1cyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cykuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhdHRlcnlTdGF0dXMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmF0dGVyeS1zdGF0dXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhdHRlcnlTdGF0dXM6IEJhdHRlcnlTdGF0dXMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyB3YXRjaCBjaGFuZ2UgaW4gYmF0dGVyeSBzdGF0dXNcbiAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuYmF0dGVyeVN0YXR1cy5vbkNoYW5nZSgpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICogICAgY29uc29sZS5sb2coc3RhdHVzLmxldmVsLCBzdGF0dXMuaXNQbHVnZ2VkKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3Agd2F0Y2hcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhdHRlcnlTdGF0dXNSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhdHRlcnlTdGF0dXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cycsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5iYXR0ZXJ5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnLCAnV2luZG93cycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlTdGF0dXMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXYXRjaCB0aGUgY2hhbmdlIGluIGJhdHRlcnkgbGV2ZWxcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2JhdHRlcnlzdGF0dXMnLFxuICB9KVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB3aGVuIHRoZSBiYXR0ZXJ5IGxldmVsIGdvZXMgbG93XG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5bG93JyxcbiAgfSlcbiAgb25Mb3coKTogT2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggd2hlbiB0aGUgYmF0dGVyeSBsZXZlbCBnb2VzIHRvIGNyaXRpY2FsXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5Y3JpdGljYWwnLFxuICB9KVxuICBvbkNyaXRpY2FsKCk6IE9ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=