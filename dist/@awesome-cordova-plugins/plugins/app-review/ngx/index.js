import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var AppReview = /** @class */ (function (_super) {
    __extends(AppReview, _super);
    function AppReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppReview.prototype.requestReview = function () { return cordova(this, "requestReview", { "sync": true }, arguments); };
    AppReview.prototype.openStoreScreen = function (packageName) { return cordova(this, "openStoreScreen", { "sync": true }, arguments); };
    AppReview.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppReview, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AppReview.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppReview });
    AppReview.pluginName = "AppReview";
    AppReview.plugin = "cordova-plugin-app-review";
    AppReview.pluginRef = "cordova.plugins.AppReview";
    AppReview.repo = "https://github.com/chemerisuk/cordova-plugin-app-review";
    AppReview.platforms = ["Android", "iOS"];
    AppReview = __decorate([], AppReview);
    return AppReview;
}(AwesomeCordovaNativePlugin));
export { AppReview };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppReview, decorators: [{
            type: Injectable
        }], propDecorators: { requestReview: [], openStoreScreen: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLXJldmlldy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBK0I3RCw2QkFBMEI7Ozs7SUFPdkQsaUNBQWE7SUFZYixtQ0FBZSxhQUFDLFdBQW9COzJHQW5CekIsU0FBUzsrR0FBVCxTQUFTOzs7Ozs7SUFBVCxTQUFTLGtCQUFULFNBQVM7b0JBaEN0QjtFQWdDK0IsMEJBQTBCO1NBQTVDLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTs4QkFRVCxhQUFhLE1BWWIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXBwIFJldmlld1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byByZXZpZXcgYXBwXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBSZXZpZXcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLXJldmlldy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFJldmlldzogQXBwUmV2aWV3KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hcHBSZXZpZXcucmVxdWVzdFJldmlldygpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzJykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcFJldmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcC1yZXZpZXcnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQXBwUmV2aWV3JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWFwcC1yZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwUmV2aWV3IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTGF1bmNoZXMgaW4tYXBwIHJldmlldyBkaWFsb2cuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBDYWxsYmFjayB3aGVuIG9wZXJhdGlvbiBpcyBjb21wbGV0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZXF1ZXN0UmV2aWV3KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBBcHAvUGxheSBzdG9yZSBwYWdlIHdpdGggYSByZXZpZXcgZm9ybS4gQnkgZGVmYXVsdCBjdXJyZW50IGFwcCBzY3JlZW5cbiAgICogaXMgZGlzcGxheWVkIGJ1dCB5b3UgY2FuIHBhc3MgYSBwYWNrYWdlIG5hbWUgc3RyaW5nIHRvIHNob3cgYW5vdGhlciBhcHAgZGV0YWlscy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtwYWNrYWdlTmFtZV0gUGFja2FnZSBuYW1lIHRvIHNob3cgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBhcHAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBDYWxsYmFjayB3aGVuIG9wZXJhdGlvbiBpcyBjb21wbGV0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvcGVuU3RvcmVTY3JlZW4ocGFja2FnZU5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==