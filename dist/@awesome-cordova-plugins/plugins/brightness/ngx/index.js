import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Brightness = /** @class */ (function (_super) {
    __extends(Brightness, _super);
    function Brightness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brightness.prototype.setBrightness = function (value) { return cordova(this, "setBrightness", {}, arguments); };
    Brightness.prototype.getBrightness = function () { return cordova(this, "getBrightness", {}, arguments); };
    Brightness.prototype.setKeepScreenOn = function (value) { return cordova(this, "setKeepScreenOn", {}, arguments); };
    Brightness.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Brightness, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Brightness.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Brightness });
    Brightness.pluginName = "Brightness";
    Brightness.plugin = "cordova-plugin-brightness";
    Brightness.pluginRef = "cordova.plugins.brightness";
    Brightness.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
    Brightness.platforms = ["Android", "iOS"];
    Brightness = __decorate([], Brightness);
    return Brightness;
}(AwesomeCordovaNativePlugin));
export { Brightness };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Brightness, decorators: [{
            type: Injectable
        }], propDecorators: { setBrightness: [], getBrightness: [], setKeepScreenOn: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnJpZ2h0bmVzcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBK0I1RCw4QkFBMEI7Ozs7SUFPeEQsa0NBQWEsYUFBQyxLQUFhO0lBVTNCLGtDQUFhO0lBU2Isb0NBQWUsYUFBQyxLQUFjOzRHQTFCbkIsVUFBVTtnSEFBVixVQUFVOzs7Ozs7SUFBVixVQUFVLGtCQUFWLFVBQVU7cUJBaEN2QjtFQWdDZ0MsMEJBQTBCO1NBQTdDLFVBQVU7NEZBQVYsVUFBVTtrQkFEdEIsVUFBVTs4QkFRVCxhQUFhLE1BVWIsYUFBYSxNQVNiLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJyaWdodG5lc3NcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEJyaWdodG5lc3MgcGx1Z2luIGxldCB5b3UgY29udHJvbCB0aGUgZGlzcGxheSBicmlnaHRuZXNzIG9mIHlvdXIgZGV2aWNlLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYnJpZ2h0bmVzc2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtCcmlnaHRuZXNzIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vbWdjcmVhL2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQnJpZ2h0bmVzcyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9icmlnaHRuZXNzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJpZ2h0bmVzczogQnJpZ2h0bmVzcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGxldCBicmlnaHRuZXNzVmFsdWUgPSAwLjg7XG4gKiB0aGlzLmJyaWdodG5lc3Muc2V0QnJpZ2h0bmVzcyhicmlnaHRuZXNzVmFsdWUpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQnJpZ2h0bmVzcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYnJpZ2h0bmVzcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWdjcmVhL2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJpZ2h0bmVzcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIGJyaWdodG5lc3Mgb2YgdGhlIGRpc3BsYXkuXG4gICAqIEBwYXJhbSB2YWx1ZSB7bnVtYmVyfSBGbG9hdGluZyBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluIHdoaWNoIGNhc2UgMSBtZWFucyAxMDAlIGJyaWdodG5lc3MgYW5kIDAgbWVhbnMgMCUgYnJpZ2h0bmVzcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBpZiBzZXR0aW5nIGJyaWdodG5lc3Mgd2FzIHN1Y2Nlc3NmdWwuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEJyaWdodG5lc3ModmFsdWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBjdXJyZW50IGJyaWdodG5lc3Mgb2YgdGhlIGRldmljZSBkaXNwbGF5LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlXG4gICAqIGJyaWdodG5lc3MgdmFsdWUgb2YgdGhlIGRldmljZSBkaXNwbGF5IChmbG9hdGluZyBudW1iZXIgYmV0d2VlbiAwIGFuZCAxKS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QnJpZ2h0bmVzcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgc2NyZWVuIG9uLiBQcmV2ZW50cyB0aGUgZGV2aWNlIGZyb20gc2V0dGluZyB0aGUgc2NyZWVuIHRvIHNsZWVwLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEtlZXBTY3JlZW5Pbih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19