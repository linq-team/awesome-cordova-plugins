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
var BatteryStatusOriginal = /** @class */ (function (_super) {
    __extends(BatteryStatusOriginal, _super);
    function BatteryStatusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatusOriginal.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatusOriginal.prototype.onLow = function () { return cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatusOriginal.prototype.onCritical = function () { return cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatusOriginal.pluginName = "BatteryStatus";
    BatteryStatusOriginal.plugin = "cordova-plugin-battery-status";
    BatteryStatusOriginal.pluginRef = "navigator.battery";
    BatteryStatusOriginal.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatusOriginal.platforms = ["iOS", "Android", "Windows", "Browser"];
    return BatteryStatusOriginal;
}(AwesomeCordovaNativePlugin));
var BatteryStatus = new BatteryStatusOriginal();
export { BatteryStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmF0dGVyeS1zdGF0dXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQStDQyxpQ0FBMEI7Ozs7SUFVM0QsZ0NBQVE7SUFhUiw2QkFBSztJQWFMLGtDQUFVOzs7Ozs7d0JBckZaO0VBaURtQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmF0dGVyeVN0YXR1c1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBiYXR0ZXJ5IGNoYXJnZSBwZXJjZW50YWdlXG4gICAqL1xuICBsZXZlbDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZGV2aWNlIGlzIHBsdWdnZWQgaW5cbiAgICovXG4gIGlzUGx1Z2dlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBCYXR0ZXJ5IFN0YXR1c1xuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmF0dGVyeXN0YXR1cy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhdHRlcnlTdGF0dXMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYXR0ZXJ5U3RhdHVzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhdHRlcnktc3RhdHVzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXR0ZXJ5U3RhdHVzOiBCYXR0ZXJ5U3RhdHVzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gd2F0Y2ggY2hhbmdlIGluIGJhdHRlcnkgc3RhdHVzXG4gKiBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLmJhdHRlcnlTdGF0dXMub25DaGFuZ2UoKS5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAqICAgIGNvbnNvbGUubG9nKHN0YXR1cy5sZXZlbCwgc3RhdHVzLmlzUGx1Z2dlZCk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzdG9wIHdhdGNoXG4gKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYXR0ZXJ5U3RhdHVzUmVzcG9uc2VcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXR0ZXJ5U3RhdHVzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuYmF0dGVyeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWJhdHRlcnktc3RhdHVzJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJywgJ1dpbmRvd3MnLCAnQnJvd3NlciddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5U3RhdHVzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2F0Y2ggdGhlIGNoYW5nZSBpbiBiYXR0ZXJ5IGxldmVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5c3RhdHVzJyxcbiAgfSlcbiAgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggd2hlbiB0aGUgYmF0dGVyeSBsZXZlbCBnb2VzIGxvd1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBwdXNoZXMgYSBzdGF0dXMgb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnYmF0dGVyeWxvdycsXG4gIH0pXG4gIG9uTG93KCk6IE9ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHdoZW4gdGhlIGJhdHRlcnkgbGV2ZWwgZ29lcyB0byBjcml0aWNhbFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBwdXNoZXMgYSBzdGF0dXMgb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnYmF0dGVyeWNyaXRpY2FsJyxcbiAgfSlcbiAgb25Dcml0aWNhbCgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19