import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var NativeStorage = /** @class */ (function (_super) {
    __extends(NativeStorage, _super);
    function NativeStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeStorage.prototype.initWithSuiteName = function (reference) { return cordova(this, "initWithSuiteName", { "platforms": ["iOS"] }, arguments); };
    NativeStorage.prototype.setItem = function (reference, value) { return cordova(this, "setItem", {}, arguments); };
    NativeStorage.prototype.getItem = function (reference) { return cordova(this, "getItem", {}, arguments); };
    NativeStorage.prototype.keys = function () { return cordova(this, "keys", {}, arguments); };
    NativeStorage.prototype.remove = function (reference) { return cordova(this, "remove", {}, arguments); };
    NativeStorage.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    NativeStorage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NativeStorage, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    NativeStorage.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NativeStorage });
    NativeStorage.pluginName = "NativeStorage";
    NativeStorage.plugin = "cordova-plugin-nativestorage";
    NativeStorage.pluginRef = "NativeStorage";
    NativeStorage.repo = "https://github.com/TheCocoaProject/cordova-plugin-nativestorage";
    NativeStorage.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    NativeStorage = __decorate([], NativeStorage);
    return NativeStorage;
}(AwesomeCordovaNativePlugin));
export { NativeStorage };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NativeStorage, decorators: [{
            type: Injectable
        }], propDecorators: { initWithSuiteName: [], setItem: [], getItem: [], keys: [], remove: [], clear: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLXN0b3JhZ2Uvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQW1DekQsaUNBQTBCOzs7O0lBVTNELHlDQUFpQixhQUFDLFNBQWlCO0lBWW5DLCtCQUFPLGFBQUMsU0FBaUIsRUFBRSxLQUFVO0lBV3JDLCtCQUFPLGFBQUMsU0FBaUI7SUFVekIsNEJBQUk7SUFXSiw4QkFBTSxhQUFDLFNBQWlCO0lBVXhCLDZCQUFLOytHQWhFTSxhQUFhO21IQUFiLGFBQWE7Ozs7OztJQUFiLGFBQWEsa0JBQWIsYUFBYTt3QkFwQzFCO0VBb0NtQywwQkFBMEI7U0FBaEQsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzhCQVdULGlCQUFpQixNQVlqQixPQUFPLE1BV1AsT0FBTyxNQVVQLElBQUksTUFXSixNQUFNLE1BVU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTmF0aXZlIFN0b3JhZ2VcbiAqIEBwcmVtaWVyIG5hdGl2ZXN0b3JhZ2VcbiAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgc3RvcmFnZSBvZiB2YXJpYWJsZXMgaW4gQW5kcm9pZCBhbmQgaU9TXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5hdGl2ZVN0b3JhZ2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbmF0aXZlLXN0b3JhZ2Uvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZVN0b3JhZ2U6IE5hdGl2ZVN0b3JhZ2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubmF0aXZlU3RvcmFnZS5zZXRJdGVtKCdteWl0ZW0nLCB7cHJvcGVydHk6ICd2YWx1ZScsIGFub3RoZXJQcm9wZXJ0eTogJ2Fub3RoZXJWYWx1ZSd9KVxuICogICAudGhlbihcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3RvcmVkIGl0ZW0hJyksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc3RvcmluZyBpdGVtJywgZXJyb3IpXG4gKiAgICk7XG4gKlxuICogdGhpcy5uYXRpdmVTdG9yYWdlLmdldEl0ZW0oJ215aXRlbScpXG4gKiAgIC50aGVuKFxuICogICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAqICAgKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZVN0b3JhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmVzdG9yYWdlJyxcbiAgcGx1Z2luUmVmOiAnTmF0aXZlU3RvcmFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGhlQ29jb2FQcm9qZWN0L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZXN0b3JhZ2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVN0b3JhZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXNlcyBzaGFyZWQgc3RvcmFnZSB3aXRoIHRoZSBzdWl0ZSBuYW1lIHdoZW4gdXNpbmcgYXBwIGdyb3VwcyBpbiBpT1NcbiAgICpcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGluaXRXaXRoU3VpdGVOYW1lKHJlZmVyZW5jZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSByZWZlcmVuY2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEl0ZW0ocmVmZXJlbmNlOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgc3RvcmVkIGl0ZW1cbiAgICpcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJdGVtKHJlZmVyZW5jZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmluZyBhbGwga2V5c1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBrZXlzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBzaW5nbGUgc3RvcmVkIGl0ZW1cbiAgICpcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW1vdmUocmVmZXJlbmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBzdG9yZWQgdmFsdWVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19