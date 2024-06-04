import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var GoogleAnalytics = /** @class */ (function (_super) {
    __extends(GoogleAnalytics, _super);
    function GoogleAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleAnalytics.prototype.startTrackerWithId = function (id, interval) { return cordova(this, "startTrackerWithId", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    GoogleAnalytics.prototype.setAllowIDFACollection = function (allow) { return cordova(this, "setAllowIDFACollection", {}, arguments); };
    GoogleAnalytics.prototype.setUserId = function (id) { return cordova(this, "setUserId", {}, arguments); };
    GoogleAnalytics.prototype.setAnonymizeIp = function (anonymize) { return cordova(this, "setAnonymizeIp", {}, arguments); };
    GoogleAnalytics.prototype.setAppVersion = function (appVersion) { return cordova(this, "setAppVersion", {}, arguments); };
    GoogleAnalytics.prototype.getVar = function (key) { return cordova(this, "getVar", {}, arguments); };
    GoogleAnalytics.prototype.setVar = function (key, value) { return cordova(this, "setVar", {}, arguments); };
    GoogleAnalytics.prototype.setOptOut = function (optout) { return cordova(this, "setOptOut", {}, arguments); };
    GoogleAnalytics.prototype.debugMode = function () { return cordova(this, "debugMode", {}, arguments); };
    GoogleAnalytics.prototype.trackMetric = function (key, value) { return cordova(this, "trackMetric", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    GoogleAnalytics.prototype.trackView = function (title, campaignUrl, newSession) { return cordova(this, "trackView", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    GoogleAnalytics.prototype.addCustomDimension = function (key, value) { return cordova(this, "addCustomDimension", {}, arguments); };
    GoogleAnalytics.prototype.trackEvent = function (category, action, label, value, newSession) { return cordova(this, "trackEvent", { "successIndex": 5, "errorIndex": 6 }, arguments); };
    GoogleAnalytics.prototype.trackException = function (description, fatal) { return cordova(this, "trackException", {}, arguments); };
    GoogleAnalytics.prototype.trackTiming = function (category, intervalInMilliseconds, variable, label) { return cordova(this, "trackTiming", {}, arguments); };
    GoogleAnalytics.prototype.addTransaction = function (id, affiliation, revenue, tax, shipping, currencyCode) { return cordova(this, "addTransaction", {}, arguments); };
    GoogleAnalytics.prototype.addTransactionItem = function (id, name, sku, category, price, quantity, currencyCode) { return cordova(this, "addTransactionItem", {}, arguments); };
    GoogleAnalytics.prototype.enableUncaughtExceptionReporting = function (shouldEnable) { return cordova(this, "enableUncaughtExceptionReporting", {}, arguments); };
    GoogleAnalytics.prototype.dispatch = function () { return cordova(this, "dispatch", { "platforms": ["Android", "iOS", "Windows"] }, arguments); };
    GoogleAnalytics.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GoogleAnalytics, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    GoogleAnalytics.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GoogleAnalytics });
    GoogleAnalytics.pluginName = "GoogleAnalytics";
    GoogleAnalytics.plugin = "cordova-plugin-google-analytics";
    GoogleAnalytics.pluginRef = "ga";
    GoogleAnalytics.repo = "https://github.com/danwilson/google-analytics-plugin";
    GoogleAnalytics.platforms = ["Android", "Browser", "iOS", "Windows Phone 8"];
    GoogleAnalytics = __decorate([], GoogleAnalytics);
    return GoogleAnalytics;
}(AwesomeCordovaNativePlugin));
export { GoogleAnalytics };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GoogleAnalytics, decorators: [{
            type: Injectable
        }], propDecorators: { startTrackerWithId: [], setAllowIDFACollection: [], setUserId: [], setAnonymizeIp: [], setAppVersion: [], getVar: [], setVar: [], setOptOut: [], debugMode: [], trackMetric: [], trackView: [], addCustomDimension: [], trackEvent: [], trackException: [], trackTiming: [], addTransaction: [], addTransactionItem: [], enableUncaughtExceptionReporting: [], dispatch: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ29vZ2xlLWFuYWx5dGljcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBc0N2RCxtQ0FBMEI7Ozs7SUFhN0QsNENBQWtCLGFBQUMsRUFBVSxFQUFFLFFBQWlCO0lBV2hELGdEQUFzQixhQUFDLEtBQWM7SUFZckMsbUNBQVMsYUFBQyxFQUFVO0lBV3BCLHdDQUFjLGFBQUMsU0FBa0I7SUFXakMsdUNBQWEsYUFBQyxVQUFrQjtJQVdoQyxnQ0FBTSxhQUFDLEdBQVc7SUFZbEIsZ0NBQU0sYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVdqQyxtQ0FBUyxhQUFDLE1BQWU7SUFVekIsbUNBQVM7SUFlVCxxQ0FBVyxhQUFDLEdBQVcsRUFBRSxLQUFjO0lBaUJ2QyxtQ0FBUyxhQUFDLEtBQWEsRUFBRSxXQUFvQixFQUFFLFVBQW9CO0lBYW5FLDRDQUFrQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBbUI3QyxvQ0FBVSxhQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEtBQWMsRUFBRSxLQUFjLEVBQUUsVUFBb0I7SUFZakcsd0NBQWMsYUFBQyxXQUFtQixFQUFFLEtBQWM7SUFjbEQscUNBQVcsYUFBQyxRQUFnQixFQUFFLHNCQUE4QixFQUFFLFFBQWdCLEVBQUUsS0FBYTtJQWlCN0Ysd0NBQWMsYUFDWixFQUFVLEVBQ1YsV0FBbUIsRUFDbkIsT0FBZSxFQUNmLEdBQVcsRUFDWCxRQUFnQixFQUNoQixZQUFvQjtJQW1CdEIsNENBQWtCLGFBQ2hCLEVBQVUsRUFDVixJQUFZLEVBQ1osR0FBVyxFQUNYLFFBQWdCLEVBQ2hCLEtBQWEsRUFDYixRQUFnQixFQUNoQixZQUFvQjtJQVl0QiwwREFBZ0MsYUFBQyxZQUFxQjtJQWF0RCxrQ0FBUTtpSEExUUcsZUFBZTtxSEFBZixlQUFlOzs7Ozs7SUFBZixlQUFlLGtCQUFmLGVBQWU7MEJBdkM1QjtFQXVDcUMsMEJBQTBCO1NBQWxELGVBQWU7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVTs4QkFjVCxrQkFBa0IsTUFXbEIsc0JBQXNCLE1BWXRCLFNBQVMsTUFXVCxjQUFjLE1BV2QsYUFBYSxNQVdiLE1BQU0sTUFZTixNQUFNLE1BV04sU0FBUyxNQVVULFNBQVMsTUFlVCxXQUFXLE1BaUJYLFNBQVMsTUFhVCxrQkFBa0IsTUFtQmxCLFVBQVUsTUFZVixjQUFjLE1BY2QsV0FBVyxNQWlCWCxjQUFjLE1BeUJkLGtCQUFrQixNQW1CbEIsZ0NBQWdDLE1BYWhDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEdvb2dsZSBBbmFseXRpY3NcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gY29ubmVjdHMgdG8gR29vZ2xlJ3MgbmF0aXZlIFVuaXZlcnNhbCBBbmFseXRpY3MgU0RLXG4gKiBQcmVyZXF1aXNpdGVzOlxuICogLSBBIENvcmRvdmEgMy4wKyBwcm9qZWN0IGZvciBpT1MgYW5kL29yIEFuZHJvaWRcbiAqIC0gQSBNb2JpbGUgQXBwIHByb3BlcnR5IHRocm91Z2ggdGhlIEdvb2dsZSBBbmFseXRpY3MgQWRtaW4gQ29uc29sZVxuICogLSAoQW5kcm9pZCkgR29vZ2xlIFBsYXkgU2VydmljZXMgU0RLIGluc3RhbGxlZCB2aWEgW0FuZHJvaWQgU0RLIE1hbmFnZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3Nkay9pbnN0YWxsaW5nL2FkZGluZy1wYWNrYWdlcy5odG1sKVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVBbmFseXRpY3MgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ29vZ2xlLWFuYWx5dGljcy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2E6IEdvb2dsZUFuYWx5dGljcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5nYS5zdGFydFRyYWNrZXJXaXRoSWQoJ1lPVVJfVFJBQ0tFUl9JRCcpXG4gKiAgICAudGhlbigoKSA9PiB7XG4gKiAgICAgIGNvbnNvbGUubG9nKCdHb29nbGUgYW5hbHl0aWNzIGlzIHJlYWR5IG5vdycpO1xuICogICAgICAgdGhpcy5nYS50cmFja1ZpZXcoJ3Rlc3QnKTtcbiAqICAgICAgLy8gVHJhY2tlciBpcyByZWFkeVxuICogICAgICAvLyBZb3UgY2FuIG5vdyB0cmFjayBwYWdlcyBvciBzZXQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBzdWNoIGFzIEFwcFZlcnNpb24gb3IgVXNlcklkXG4gKiAgICB9KVxuICogICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIHN0YXJ0aW5nIEdvb2dsZUFuYWx5dGljcycsIGUpKTtcbiAqXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlQW5hbHl0aWNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlLWFuYWx5dGljcycsXG4gIHBsdWdpblJlZjogJ2dhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW53aWxzb24vZ29vZ2xlLWFuYWx5dGljcy1wbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQW5hbHl0aWNzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW4geW91ciAnZGV2aWNlcmVhZHknIGhhbmRsZXIsIHNldCB1cCB5b3VyIEFuYWx5dGljcyB0cmFja2VyLlxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaWQgIFlvdXIgR29vZ2xlIEFuYWx5dGljcyBNb2JpbGUgQXBwIHByb3BlcnR5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbCBPcHRpb25hbCBkaXNwYXRjaCBwZXJpb2QgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gMzAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIHN0YXJ0VHJhY2tlcldpdGhJZChpZDogc3RyaW5nLCBpbnRlcnZhbD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsaW5nIEFkdmVydGlzaW5nIEZlYXR1cmVzIGluIEdvb2dsZSBBbmFseXRpY3MgYWxsb3dzIHlvdSB0byB0YWtlIGFkdmFudGFnZSBvZiBSZW1hcmtldGluZywgRGVtb2dyYXBoaWNzICYgSW50ZXJlc3RzIHJlcG9ydHMsIGFuZCBtb3JlXG4gICAqXG4gICAqIEBwYXJhbSBhbGxvdyB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QWxsb3dJREZBQ29sbGVjdGlvbihhbGxvdzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIFVzZXJJZFxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvdXNlci1pZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVXNlciBJRFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRVc2VySWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIGFub255bWl6ZSBJcCBhZGRyZXNzXG4gICAqXG4gICAqIEBwYXJhbSBhbm9ueW1pemUge2Jvb2xlYW59IFNldCB0byB0cnVlIHRvIGFub255bWl6ZSB0aGUgSVAgQWRkcmVzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBbm9ueW1pemVJcChhbm9ueW1pemU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGFwcCB2ZXJzaW9uXG4gICAqXG4gICAqIEBwYXJhbSBhcHBWZXJzaW9uIHtzdHJpbmd9IEFwcCB2ZXJzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEFwcFZlcnNpb24oYXBwVmVyc2lvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdmFyaWFibGVcbiAgICpcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBWYXJpYWJsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRWYXIoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB2YXJpYWJsZVxuICAgKlxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFZhcmlhYmxlXG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfSBQYXJhbWV0ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VmFyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IE9wdE91dFxuICAgKlxuICAgKiBAcGFyYW0gb3B0b3V0IHtib29sZWFufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRPcHRPdXQob3B0b3V0OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHZlcmJvc2UgbG9nZ2luZ1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWJ1Z01vZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgY3VzdG9tIG1ldHJpY1xuICAgKlxuICAgKiBAcGFyYW0ga2V5IHtudW1iZXJ9XG4gICAqIEBwYXJhbSB2YWx1ZSB7YW55fVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzLFxuICB9KVxuICB0cmFja01ldHJpYyhrZXk6IG51bWJlciwgdmFsdWU/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBhIHNjcmVlblxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvc2NyZWVuc1xuICAgKlxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ30gU2NyZWVuIHRpdGxlXG4gICAqIEBwYXJhbSBjYW1wYWlnblVybCB7c3RyaW5nfSBDYW1wYWlnbiB1cmwgZm9yIG1lYXN1cmluZyByZWZlcnJhbHNcbiAgICogQHBhcmFtIG5ld1Nlc3Npb24ge2Jvb2xlYW59IFNldCB0byB0cnVlIHRvIGNyZWF0ZSBhIG5ldyBzZXNzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIHRyYWNrVmlldyh0aXRsZTogc3RyaW5nLCBjYW1wYWlnblVybD86IHN0cmluZywgbmV3U2Vzc2lvbj86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBDdXN0b20gRGltZW5zaW9uXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvcGxhdGZvcm0vY3VzdG9tZGltc21ldHNcbiAgICpcbiAgICogQHBhcmFtIGtleSB7bnVtYmVyfVxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQ3VzdG9tRGltZW5zaW9uKGtleTogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYW4gZXZlbnRcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2V2ZW50c1xuICAgKlxuICAgKiBAcGFyYW0gY2F0ZWdvcnkge3N0cmluZ31cbiAgICogQHBhcmFtIGFjdGlvbiB7c3RyaW5nfVxuICAgKiBAcGFyYW0gbGFiZWwge3N0cmluZ31cbiAgICogQHBhcmFtIHZhbHVlIHtudW1iZXJ9XG4gICAqIEBwYXJhbSBuZXdTZXNzaW9uIHtib29sZWFufSBTZXQgdG8gdHJ1ZSB0byBjcmVhdGUgYSBuZXcgc2Vzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNSxcbiAgICBlcnJvckluZGV4OiA2LFxuICB9KVxuICB0cmFja0V2ZW50KGNhdGVnb3J5OiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgdmFsdWU/OiBudW1iZXIsIG5ld1Nlc3Npb24/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYW4gZXhjZXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvbiB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZmF0YWwge2Jvb2xlYW59XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrRXhjZXB0aW9uKGRlc2NyaXB0aW9uOiBzdHJpbmcsIGZhdGFsOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgVXNlciBUaW1pbmcgKEFwcCBTcGVlZClcbiAgICpcbiAgICogQHBhcmFtIGNhdGVnb3J5IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbnRlcnZhbEluTWlsbGlzZWNvbmRzIHtudW1iZXJ9XG4gICAqIEBwYXJhbSB2YXJpYWJsZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gbGFiZWwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tUaW1pbmcoY2F0ZWdvcnk6IHN0cmluZywgaW50ZXJ2YWxJbk1pbGxpc2Vjb25kczogbnVtYmVyLCB2YXJpYWJsZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgVHJhbnNhY3Rpb24gKEVjb21tZXJjZSlcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2Vjb21tZXJjZSNhZGRUcmFuc1xuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ31cbiAgICogQHBhcmFtIGFmZmlsaWF0aW9uIHtzdHJpbmd9XG4gICAqIEBwYXJhbSByZXZlbnVlIHtudW1iZXJ9XG4gICAqIEBwYXJhbSB0YXgge251bWJlcn1cbiAgICogQHBhcmFtIHNoaXBwaW5nIHtudW1iZXJ9XG4gICAqIEBwYXJhbSBjdXJyZW5jeUNvZGUge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkVHJhbnNhY3Rpb24oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBhZmZpbGlhdGlvbjogc3RyaW5nLFxuICAgIHJldmVudWU6IG51bWJlcixcbiAgICB0YXg6IG51bWJlcixcbiAgICBzaGlwcGluZzogbnVtYmVyLFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIFRyYW5zYWN0aW9uIEl0ZW0gKEVjb21tZXJjZSlcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2Vjb21tZXJjZSNhZGRJdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgc2t1XG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY2F0ZWdvcnlcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmljZVxuICAgKiBAcGFyYW0ge251bWJlcn0gIHF1YW50aXR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY3VycmVuY3lDb2RlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZFRyYW5zYWN0aW9uSXRlbShcbiAgICBpZDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBza3U6IHN0cmluZyxcbiAgICBjYXRlZ29yeTogc3RyaW5nLFxuICAgIHByaWNlOiBudW1iZXIsXG4gICAgcXVhbnRpdHk6IG51bWJlcixcbiAgICBjdXJyZW5jeUNvZGU6IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUvZGlzYWJsZSBhdXRvbWF0aWMgcmVwb3J0aW5nIG9mIHVuY2F1Z2h0IGV4Y2VwdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIHNob3VsZEVuYWJsZSB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlVW5jYXVnaHRFeGNlcHRpb25SZXBvcnRpbmcoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgZGlzcGF0Y2ggYW55IGRhdGFcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICogQHBsYXRmb3JtXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbiAgfSlcbiAgZGlzcGF0Y2goKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==