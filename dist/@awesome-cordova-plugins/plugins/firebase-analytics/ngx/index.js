import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var FirebaseAnalytics = /** @class */ (function (_super) {
    __extends(FirebaseAnalytics, _super);
    function FirebaseAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAnalytics.prototype.logEvent = function (name, params) { return cordova(this, "logEvent", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setUserId = function (id) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setUserProperty = function (name, value) { return cordova(this, "setUserProperty", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.setCurrentScreen = function (name) { return cordova(this, "setCurrentScreen", { "sync": true }, arguments); };
    FirebaseAnalytics.prototype.resetAnalyticsData = function () { return cordova(this, "resetAnalyticsData", { "sync": true }, arguments); };
    FirebaseAnalytics.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FirebaseAnalytics, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FirebaseAnalytics.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FirebaseAnalytics });
    FirebaseAnalytics.pluginName = "FirebaseAnalytics";
    FirebaseAnalytics.plugin = "cordova-plugin-firebase-analytics";
    FirebaseAnalytics.pluginRef = "cordova.plugins.firebase.analytics";
    FirebaseAnalytics.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-analytics";
    FirebaseAnalytics.platforms = ["Android", "iOS"];
    FirebaseAnalytics = __decorate([], FirebaseAnalytics);
    return FirebaseAnalytics;
}(AwesomeCordovaNativePlugin));
export { FirebaseAnalytics };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FirebaseAnalytics, decorators: [{
            type: Injectable
        }], propDecorators: { logEvent: [], setUserId: [], setUserProperty: [], setEnabled: [], setCurrentScreen: [], resetAnalyticsData: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtYW5hbHl0aWNzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFrRHJELHFDQUEwQjs7OztJQVUvRCxvQ0FBUSxhQUFDLElBQVksRUFBRSxNQUFXO0lBWWxDLHFDQUFTLGFBQUMsRUFBVTtJQWFwQiwyQ0FBZSxhQUFDLElBQVksRUFBRSxLQUFhO0lBVzNDLHNDQUFVLGFBQUMsT0FBZ0I7SUFZM0IsNENBQWdCLGFBQUMsSUFBWTtJQVU3Qiw4Q0FBa0I7bUhBcEVQLGlCQUFpQjt1SEFBakIsaUJBQWlCOzs7Ozs7SUFBakIsaUJBQWlCLGtCQUFqQixpQkFBaUI7NEJBbkQ5QjtFQW1EdUMsMEJBQTBCO1NBQXBELGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzhCQVdULFFBQVEsTUFZUixTQUFTLE1BYVQsZUFBZSxNQVdmLFVBQVUsTUFZVixnQkFBZ0IsTUFVaEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgRmlyZWJhc2UgQW5hbHl0aWNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBGaXJlYmFzZSBBbmFseXRpY3NcbiAqXG4gKiBHbyB0byBmaXJlYmFzZSBjb25zb2xlIGFuZCBleHBvcnQgZ29vZ2xlLXNlcnZpY2VzLmpzb24gYW5kIEdvb2dsZVNlcnZpY2UtSW5mby5wbGlzdC4gUHV0IHRob3NlIGZpbGVzIGludG8gdGhlIHJvb3Qgb2YgeW91ciBjb3Jkb3ZhIGFwcCBmb2xkZXIuXG4gKlxuICogTk9URTogb24gaU9TIGluIG9yZGVyIHRvIGNvbGxlY3QgZGVtb2dyYXBoaWMsIGFnZSwgZ2VuZGVyIGRhdGEgZXRjLiB5b3Ugc2hvdWxkIGFkZGl0aW9uYWxseSBpbmNsdWRlIEFkU3VwcG9ydC5mcmFtZXdvcmsgaW50byB5b3VyIHByb2plY3QuXG4gKlxuICogIyMgVXNpbmcgY2FwYWNpdG9yP1xuICogRm9yIEFuZHJvaWQgeW91J2xsIGhhdmUgdG8gYWRkIGluIF9fYW5kcm9pZC9hcHAvc3JjL21haW4vQW5kcm9pZE1hbmlmZXN0LnhtbF9fIHVuZGVyIGA8YXBwbGljYXRpb24+YFxuICogYGBgXG4gKiA8bWV0YS1kYXRhXG4gKiAgICAgIHRvb2xzOnJlcGxhY2U9XCJhbmRyb2lkOnZhbHVlXCJcbiAqICAgICAgYW5kcm9pZDpuYW1lPVwiZmlyZWJhc2VfYW5hbHl0aWNzX2NvbGxlY3Rpb25fZW5hYmxlZFwiXG4gKiAgICAgIGFuZHJvaWQ6dmFsdWU9XCJ0cnVlXCIvPlxuICpcbiAqIDxtZXRhLWRhdGFcbiAqICAgICAgdG9vbHM6cmVwbGFjZT1cImFuZHJvaWQ6dmFsdWVcIlxuICogICAgICBhbmRyb2lkOm5hbWU9XCJnb29nbGVfYW5hbHl0aWNzX2F1dG9tYXRpY19zY3JlZW5fcmVwb3J0aW5nX2VuYWJsZWRcIlxuICogICAgICBhbmRyb2lkOnZhbHVlPVwiZmFsc2VcIi8+XG4gKiBgYGBcbiAqXG4gKiBBbmQgaW4gdGhlIHNhbWUgZmlsZSwgeW91J2xsIGhhdmUgdG8gYWRkIGB4bWxuczp0b29scz1cImh0dHA6Ly9zY2hlbWFzLmFuZHJvaWQuY29tL3Rvb2xzXCJgIHRvIHlvdXIgX21hbmlmZXN0XyB0YWcuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlQW5hbHl0aWNzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpcmViYXNlLWFuYWx5dGljcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlQW5hbHl0aWNzOiBGaXJlYmFzZUFuYWx5dGljcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maXJlYmFzZUFuYWx5dGljcy5sb2dFdmVudCgncGFnZV92aWV3Jywge3BhZ2U6IFwiZGFzaGJvYXJkXCJ9KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlQW5hbHl0aWNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtYW5hbHl0aWNzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmFuYWx5dGljcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1hbmFseXRpY3MnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VBbmFseXRpY3MgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2dzIGFuIGFwcCBldmVudC5cbiAgICogQmUgYXdhcmUgb2YgYXV0b21hdGljYWxseSBjb2xsZWN0ZWQgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHthbnl9IHBhcmFtcyBTb21lIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBsb2dFdmVudChuYW1lOiBzdHJpbmcsIHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlciBJRCBwcm9wZXJ0eS5cbiAgICogVGhpcyBmZWF0dXJlIG11c3QgYmUgdXNlZCBpbiBhY2NvcmRhbmNlIHdpdGggR29vZ2xlJ3MgUHJpdmFjeSBQb2xpY3kuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdXNlciBJRFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFVzZXJJZChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmZWF0dXJlIG11c3QgYmUgdXNlZCBpbiBhY2NvcmRhbmNlIHdpdGggR29vZ2xlJ3MgUHJpdmFjeSBQb2xpY3kuXG4gICAqIEJlIGF3YXJlIG9mIGF1dG9tYXRpY2FsbHkgY29sbGVjdGVkIHVzZXIgcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIHByb3BlcnR5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFVzZXJQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgYW5hbHl0aWNzIGNvbGxlY3Rpb24gaXMgZW5hYmxlZCBmb3IgdGhpcyBhcHAgb24gdGhpcyBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgc2NyZWVuIG5hbWUsIHdoaWNoIHNwZWNpZmllcyB0aGUgY3VycmVudCB2aXN1YWwgY29udGV4dCBpbiB5b3VyIGFwcC5cbiAgICogVGhpcyBoZWxwcyBpZGVudGlmeSB0aGUgYXJlYXMgaW4geW91ciBhcHAgd2hlcmUgdXNlcnMgc3BlbmQgdGhlaXIgdGltZSBhbmQgaG93IHRoZXkgaW50ZXJhY3Qgd2l0aCB5b3VyIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNjcmVlblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEN1cnJlbnRTY3JlZW4obmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBhbmFseXRpY3MgZGF0YSBmb3IgdGhpcyBpbnN0YW5jZSBmcm9tIHRoZSBkZXZpY2UgYW5kIHJlc2V0cyB0aGUgYXBwIGluc3RhbmNlIElEXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc2V0QW5hbHl0aWNzRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==