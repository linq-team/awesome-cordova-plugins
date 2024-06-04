import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var NativeView = /** @class */ (function (_super) {
    __extends(NativeView, _super);
    function NativeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeView.prototype.show = function (packageOrClass, className, extraParams, success, error) { return cordova(this, "show", {}, arguments); };
    NativeView.prototype.checkIfAppInstalled = function (config, success, error) { return cordova(this, "checkIfAppInstalled", {}, arguments); };
    NativeView.prototype.showMarket = function (config, success, error) { return cordova(this, "showMarket", {}, arguments); };
    NativeView.prototype.getBuildVariant = function (config, success, error) { return cordova(this, "getBuildVariant", { "platforms": ["android"] }, arguments); };
    NativeView.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NativeView, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    NativeView.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NativeView });
    NativeView.pluginName = "NativeView";
    NativeView.plugin = "cordova-plugin-nativeview";
    NativeView.pluginRef = "cordova.plugins.NativeView";
    NativeView.repo = "https://github.com/mfdeveloper/cordova-plugin-nativeview";
    NativeView.platforms = ["Android", "iOS"];
    NativeView = __decorate([], NativeView);
    return NativeView;
}(AwesomeCordovaNativePlugin));
export { NativeView };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NativeView, decorators: [{
            type: Injectable
        }], propDecorators: { show: [], checkIfAppInstalled: [], showMarket: [], getBuildVariant: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLXZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQXlENUQsOEJBQTBCOzs7O0lBbUN4RCx5QkFBSSxhQUNGLGNBQXFDLEVBQ3JDLFNBQWtCLEVBQ2xCLFdBQWlCLEVBQ2pCLE9BQWtCLEVBQ2xCLEtBQWdCO0lBY2xCLHdDQUFtQixhQUFDLE1BQW9CLEVBQUUsT0FBa0IsRUFBRSxLQUFnQjtJQWE5RSwrQkFBVSxhQUFDLE1BQTBCLEVBQUUsT0FBa0IsRUFBRSxLQUFnQjtJQW1CM0Usb0NBQWUsYUFBQyxNQUFnQyxFQUFFLE9BQWtCLEVBQUUsS0FBZ0I7NEdBdEYzRSxVQUFVO2dIQUFWLFVBQVU7Ozs7OztJQUFWLFVBQVUsa0JBQVYsVUFBVTtxQkExRHZCO0VBMERnQywwQkFBMEI7U0FBN0MsVUFBVTs0RkFBVixVQUFVO2tCQUR0QixVQUFVOzhCQW9DVCxJQUFJLE1BbUJKLG1CQUFtQixNQWFuQixVQUFVLE1BbUJWLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIE5hdGl2ZVZpZXdcbiAqIEBkZXNjcmlwdGlvbiBTaG93cyB0aGUgbmF0aXZlIHZpZXcuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5hdGl2ZVZpZXcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbmF0aXZlLXZpZXcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuYXRpdmVWaWV3OiBOYXRpdmVWaWV3KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5uYXRpdmVWaWV3LmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0VmlldyB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG5hbWU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHVyaT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdEFwcEluc3RhbGxlZCBleHRlbmRzIFJlc3VsdFZpZXcge1xuICBwYWNrYWdlTmFtZT86IHN0cmluZztcbiAgYXBwbGljYXRpb25JbmZvPzogc3RyaW5nO1xuICBhY3Rpdml0eU5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlUGFyYW1zIHtcbiAgcGFja2FnZT86IHN0cmluZztcbiAgcGFja2FnZU5hbWU/OiBzdHJpbmc7XG4gIHBhY2thZ2VBcHA/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdXJpPzogc3RyaW5nO1xuICBzdG9yeWJvYXJkTmFtZT86IHN0cmluZztcbiAgdmlld0NvbnRyb2xsZXJOYW1lPzogc3RyaW5nO1xuICBwYXJhbXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlTWFya2V0UGFyYW1zIGV4dGVuZHMgTmF0aXZlUGFyYW1zIHtcbiAgbWFya2V0SWQ/OiBzdHJpbmc7XG59XG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZVZpZXcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmV2aWV3JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLk5hdGl2ZVZpZXcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21mZGV2ZWxvcGVyL2NvcmRvdmEtcGx1Z2luLW5hdGl2ZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF0aXZlVmlldyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBuYXRpdmUgdmlldy5cbiAgICpcbiAgICogRGVmaW5lIHRoZSBgcGFja2FnZU9yQ2xhc3NgIHBhcmFtIHRvIGEgcGFja2FnZSAoQW5kcm9pZCkgb3IgYVxuICAgKiBzdG9yeWJvYXJkL2NsYXNzbmFtZSAoSU9TKVxuICAgKlxuICAgKiBgYGB0c1xuICAgKlxuICAgKiAvL0FuZHJvaWRcbiAgICogY29yZG92YS5wbHVnaW5zLk5hdGl2ZVZpZXcuc2hvdygnY29tLm15Y29tcGFueScsICdNeUFjdGl2aXR5JylcbiAgICogLnRoZW4oKCkgPT4ge1xuICAgKiAgICAvLyBEbyBzb21ldGhpbmdcbiAgICogfSk7XG4gICAqXG4gICAqIC8vSU9TXG4gICAqIGNvcmRvdmEucGx1Z2lucy5OYXRpdmVWaWV3LnNob3coJ015U3Rvcnlib2FyZCcsICdNeVVJVmlld0NvbnRyb2xsZXInKVxuICAgKiAudGhlbigoKSA9PiB7XG4gICAqICAgIC8vIERvIHNvbWV0aGluZ1xuICAgKiB9KTtcbiAgICpcbiAgICogLy9PUiBCYWNrIHRvIHByZXZpb3VzIFZpZXcgKElPUyBvbmx5KVxuICAgKiBjb3Jkb3ZhLnBsdWdpbnMuTmF0aXZlVmlldy5zaG93KCkudGhlbigoKSA9PiB7XG4gICAqICAgIC8vIERvIHNvbWV0aGluZ1xuICAgKiB9KTtcbiAgICpcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7TmF0aXZlUGFyYW1zfHN0cmluZ30gcGFja2FnZU9yQ2xhc3MgUGFja2FnZSBvciBjbGFzcyBuYW1lIG9mIHZpZXcgdG8gb3BlblxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIENsYXNzIG5hbWUgb2YgdmlldyB0byBvcGVuXG4gICAqIEBwYXJhbSB7YW55fSBbZXh0cmFQYXJhbXNdIFtPcHRpb25hbF0gUGFyYW1zIHRvIHNlbmQgdG8gYSBOYXRpdmUgdmlldyB0aGF0IHdpbGwgYmUgb3BlbmVkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtzdWNjZXNzXSBbT3B0aW9uYWxdIENhbGxiYWNrIHdoZW4gc3VjY2VzcywgaWYgeW91IGRvbid0IHdhbnQgdXNlIHByb21pc2UgXCJ0aGVuKClcIlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZXJyb3JdIFtPcHRpb25hbF0gQ2FsbGJhY2sgd2hlbiBlcnJvciBoYXBwZW5zLCBpZiB5b3UgZG9uJ3Qgd2FudCB1c2UgcHJvbWlzZSBcImNhdGNoKClcIlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KFxuICAgIHBhY2thZ2VPckNsYXNzOiBOYXRpdmVQYXJhbXMgfCBzdHJpbmcsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIGV4dHJhUGFyYW1zPzogYW55LFxuICAgIHN1Y2Nlc3M/OiBGdW5jdGlvbixcbiAgICBlcnJvcj86IEZ1bmN0aW9uXG4gICk6IFByb21pc2U8UmVzdWx0Vmlldz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHNwZWNpZmljIGFwcCBpcyBpbnN0YWxsZWRcbiAgICpcbiAgICogQHBhcmFtIHtOYXRpdmVQYXJhbXN9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc3VjY2Vzc10gQ2FsbGJhY2sgd2hlbiBzdWNjZXNzLiBVc2UgYC50aGVuKClgIFByb21pc2UgbWV0aG9kLCBpbnN0ZWFkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlcnJvcl0gQ2FsbGJhY2sgY2FsbGJlZCB3aGVuIGFuIGVycm9yIGhhcHBlbnMuIFVzZSBgLmNhdGNoKClgIFByb21pc2UgbWV0aG9kLCBpbnN0ZWFkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3VsdEFwcEluc3RhbGxlZD59IFJldHVybnMgZGF0YSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5zdGFsbGVkIGFwcFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVja0lmQXBwSW5zdGFsbGVkKGNvbmZpZzogTmF0aXZlUGFyYW1zLCBzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24pOiBQcm9taXNlPFJlc3VsdEFwcEluc3RhbGxlZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhIHN0b3JlL21hcmtldCBmbyBpbnN0YWxsIGEgc3BlY2lmaWMgYXBwXG4gICAqXG4gICAqIEBwYXJhbSB7TmF0aXZlTWFya2V0UGFyYW1zfSBjb25maWcgTmF0aXZlIHBhY2thZ2UgYW5kL29yIG1hcmtldElkIHRvIHNob3cgaW4gR29vZ2xlIFBsYXkvQXBwbGUgU3RvcmVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3N1Y2Nlc3NdIENhbGxiYWNrIHdoZW4gc3VjY2Vzcy4gVXNlIGAudGhlbigpYCBQcm9taXNlIG1ldGhvZCwgaW5zdGVhZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZXJyb3JdIENhbGxiYWNrIGNhbGxiZWQgd2hlbiBhbiBlcnJvciBoYXBwZW5zLiBVc2UgYC5jYXRjaCgpYCBQcm9taXNlIG1ldGhvZCwgaW5zdGVhZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZXN1bHRWaWV3Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd01hcmtldChjb25maWc6IE5hdGl2ZU1hcmtldFBhcmFtcywgc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKTogUHJvbWlzZTxSZXN1bHRWaWV3PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBBTkRST0lEIE9OTFlcbiAgICpcbiAgICogR2V0IHRoZSAqKkFuZHJvaWQqKiBjdXJyZW50IGJ1aWxkIHZhcmlhbnQgRkxBVk9SXG4gICAqIFRoaXMgaXMgZ3JlYXQgaWYgeW91IGNoYW5nZSB0aGUgRkxBVk9SIGluIGNvbXBpbGUgdGltZVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcuY2F0Y2hFcnJvcl0gYGNvbmZpZy5jYXRjaEVycm9yYCBUcnVlLCBpZiB5b3Ugd2lzaCBjYXRjaCBhIEpTT04gd2l0aCBlcnJvciBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtzdWNjZXNzXSBDYWxsYmFjayB3aGVuIHN1Y2Nlc3MuIFVzZSBgLnRoZW4oKWAgUHJvbWlzZSBtZXRob2QsIGluc3RlYWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vycm9yXSBDYWxsYmFjayBjYWxsYmVkIHdoZW4gYW4gZXJyb3IgaGFwcGVucy4gVXNlIGAuY2F0Y2goKWAgUHJvbWlzZSBtZXRob2QsIGluc3RlYWRcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIGN1cnJlbnQgRkxBVk9SIHN0cmluZ1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydhbmRyb2lkJ10sXG4gIH0pXG4gIGdldEJ1aWxkVmFyaWFudChjb25maWc6IHsgY2F0Y2hFcnJvcj86IGJvb2xlYW4gfSwgc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==