var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var MagnetometerOriginal = /** @class */ (function (_super) {
    __extends(MagnetometerOriginal, _super);
    function MagnetometerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagnetometerOriginal.prototype.getReading = function () { return cordova(this, "getReading", {}, arguments); };
    MagnetometerOriginal.prototype.watchReadings = function () { return cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    MagnetometerOriginal.pluginName = "Magnetometer";
    MagnetometerOriginal.plugin = "cordova-plugin-magnetometer";
    MagnetometerOriginal.pluginRef = "cordova.plugins.magnetometer";
    MagnetometerOriginal.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    MagnetometerOriginal.platforms = ["Android", "iOS"];
    return MagnetometerOriginal;
}(AwesomeCordovaNativePlugin));
var Magnetometer = new MagnetometerOriginal();
export { Magnetometer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWFnbmV0b21ldGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE0REEsZ0NBQTBCOzs7O0lBTTFELGlDQUFVO0lBZVYsb0NBQWE7Ozs7Ozt1QkFuRmY7RUE4RGtDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNYWduZXRvbWV0ZXJSZWFkaW5nIHtcbiAgLyoqXG4gICAqIFggcmVhZGluZyBvZiBtYWduZXRvbWV0ZXIuIChOdW1iZXIpXG4gICAqL1xuICB4OiBudW1iZXI7XG4gIC8qKlxuICAgKiBZIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgeTogbnVtYmVyO1xuICAvKipcbiAgICogWiByZWFkaW5nIG9mIG1hZ25ldG9tZXRlci4gKE51bWJlcilcbiAgICovXG4gIHo6IG51bWJlcjtcbiAgLyoqXG4gICAqIENhbGN1bGF0ZWQgdG90YWwgLSBhbHdheXMgcG9zaXRpdmUgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgbWFnbml0dWRlOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlIGVNYWduZXRvbWV0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1tYWduZXRvbWV0ZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRGV2aWNlIE9yaWVudGF0aW9uIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9zZGVzYWxhcy9jb3Jkb3ZhLXBsdWdpbi1tYWduZXRvbWV0ZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gTWFnbmV0b21ldGVyUmVhZGluZyBpcyBhbiBpbnRlcmZhY2UgZm9yIGNvbXBhc3NcbiAqIGltcG9ydCB7IE1hZ25ldG9tZXRlciwgTWFnbmV0b21ldGVyUmVhZGluZyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kZXZpY2Utb3JpZW50YXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hZ25ldG9tZXRlcjogTWFnbmV0b21ldGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBHZXQgdGhlIGRldmljZSBjdXJyZW50IGNvbXBhc3MgaGVhZGluZ1xuICogdGhpcy5tYWduZXRvbWV0ZXIuZ2V0UmVhZGluZygpLnRoZW4oXG4gKiAgIChkYXRhOiBNYWduZXRvbWV0ZXJSZWFkaW5nKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogKTtcbiAqXG4gKiAvLyBXYXRjaCB0aGUgZGV2aWNlIGNvbXBhc3MgaGVhZGluZyBjaGFuZ2VcbiAqIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLm1hZ25ldG9tZXRlci53YXRjaFJlYWRpbmdzKCkuc3Vic2NyaWJlKFxuICogICAoZGF0YTogTWFnbmV0b21ldGVyUmVhZGluZykgPT4gY29uc29sZS5sb2coZGF0YSlcbiAqICk7XG4gKlxuICogLy8gU3RvcCB3YXRjaGluZyBoZWFkaW5nIGNoYW5nZVxuICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBNYWduZXRvbWV0ZXJSZWFkaW5nXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWFnbmV0b21ldGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm1hZ25ldG9tZXRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2Rlc2FsYXMvY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hZ25ldG9tZXRlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjb21wYXNzIHJlYWRpbmcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1hZ25ldG9tZXRlclJlYWRpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRSZWFkaW5nKCk6IFByb21pc2U8TWFnbmV0b21ldGVyUmVhZGluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSBkZXZpY2UgY3VycmVudCBoZWFkaW5nIGF0IGEgcmVndWxhciBpbnRlcnZhbFxuICAgKlxuICAgKiBTdG9wIHRoZSB3YXRjaCBieSB1bnN1YnNjcmliaW5nIGZyb20gdGhlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHtEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgY29tcGFzcy4gRnJlcXVlbmN5IGFuZCBGaWx0ZXIuIE9wdGlvbmFsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPERldmljZU9yaWVudGF0aW9uQ29tcGFzc0hlYWRpbmc+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBjb250YWlucyB0aGUgY29tcGFzcyBoZWFkaW5nXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxuICB9KVxuICB3YXRjaFJlYWRpbmdzKCk6IE9ic2VydmFibGU8TWFnbmV0b21ldGVyUmVhZGluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19