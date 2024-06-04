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
var NewRelicOriginal = /** @class */ (function (_super) {
    __extends(NewRelicOriginal, _super);
    function NewRelicOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewRelicOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.setAttribute = function (name, value) { return cordova(this, "setAttribute", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.removeAttribute = function (name) { return cordova(this, "removeAttribute", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.recordBreadcrumb = function (name, eventAttributes) { return cordova(this, "recordBreadcrumb", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.recordCustomEvent = function (eventType, eventName, eventAttributes) { return cordova(this, "recordCustomEvent", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.startInteraction = function (name) { return cordova(this, "startInteraction", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.endInteraction = function (name) { return cordova(this, "endInteraction", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.crashNow = function (message) { return cordova(this, "crashNow", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.currentSessionId = function (name) { return cordova(this, "currentSessionId", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.incrementAttribute = function (name, value) { return cordova(this, "incrementAttribute", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.recordMetric = function (name, category, value, countUnit, valueUnit) { return cordova(this, "recordMetric", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.removeAllAttributes = function () { return cordova(this, "removeAllAttributes", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.setMaxEventPoolSize = function (maxPoolSize) { return cordova(this, "setMaxEventPoolSize", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.setMaxEventBufferTime = function (maxBufferTimeInSeconds) { return cordova(this, "setMaxEventBufferTime", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.analyticsEventEnabled = function (enabled) { return cordova(this, "analyticsEventEnabled", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.networkRequestEnabled = function (enabled) { return cordova(this, "networkRequestEnabled", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.networkErrorRequestEnabled = function (enabled) { return cordova(this, "networkErrorRequestEnabled", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.httpRequestBodyCaptureEnabled = function (enabled) { return cordova(this, "httpRequestBodyCaptureEnabled", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.noticeHttpTransaction = function (url, method, status, startTime, endTime, bytesSent, bytesReceived, body) { return cordova(this, "noticeHttpTransaction", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.noticeNetworkFailure = function (url, method, startTime, endTime, failure) { return cordova(this, "noticeNetworkFailure", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.recordError = function (err) { return cordova(this, "recordError", { "sync": true }, arguments); };
    NewRelicOriginal.prototype.shutdown = function () { return cordova(this, "shutdown", { "sync": true }, arguments); };
    NewRelicOriginal.pluginName = "NewRelic";
    NewRelicOriginal.plugin = "newrelic-cordova-plugin";
    NewRelicOriginal.pluginRef = "NewRelic";
    NewRelicOriginal.repo = "https://github.com/newrelic/newrelic-cordova-plugin";
    NewRelicOriginal.install = "ionic cordova plugin add https://github.com/newrelic/newrelic-cordova-plugin.git --variable IOS_APP_TOKEN=\"{ios-app-token}\" --variable ANDROID_APP_TOKEN=\"{android-app-token}\"";
    NewRelicOriginal.installVariables = ["IOS_APP_TOKEN", "ANDROID_APP_TOKEN"];
    NewRelicOriginal.platforms = ["Android", "iOS"];
    return NewRelicOriginal;
}(AwesomeCordovaNativePlugin));
var NewRelic = new NewRelicOriginal();
export { NewRelic };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV3cmVsaWMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFtQzlELDRCQUEwQjs7OztJQVF0RCw0QkFBUyxhQUFDLE1BQWM7SUFjeEIsK0JBQVksYUFBQyxJQUFZLEVBQUUsS0FBVTtJQWFyQyxrQ0FBZSxhQUFDLElBQVk7SUFZNUIsbUNBQWdCLGFBQUMsSUFBWSxFQUFFLGVBQWlDO0lBY2hFLG9DQUFpQixhQUFDLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxlQUFpQztJQWF6RixtQ0FBZ0IsYUFBQyxJQUFZO0lBWTdCLGlDQUFjLGFBQUMsSUFBWTtJQVczQiwyQkFBUSxhQUFDLE9BQWU7SUFheEIsbUNBQWdCLGFBQUMsSUFBWTtJQWU3QixxQ0FBa0IsYUFBQyxJQUFZLEVBQUUsS0FBVTtJQWUzQywrQkFBWSxhQUFDLElBQVksRUFBRSxRQUFhLEVBQUUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsU0FBaUI7SUFVN0Ysc0NBQW1CO0lBYW5CLHNDQUFtQixhQUFDLFdBQW1CO0lBY3ZDLHdDQUFxQixhQUFDLHNCQUE4QjtJQVlwRCx3Q0FBcUIsYUFBQyxPQUFnQjtJQVd0Qyx3Q0FBcUIsYUFBQyxPQUFnQjtJQVd0Qyw2Q0FBMEIsYUFBQyxPQUFnQjtJQVczQyxnREFBNkIsYUFBQyxPQUFnQjtJQWtCOUMsd0NBQXFCLGFBQ25CLEdBQVcsRUFDWCxNQUFjLEVBQ2QsTUFBYyxFQUNkLFNBQWlCLEVBQ2pCLE9BQWUsRUFDZixTQUFpQixFQUNqQixhQUFxQixFQUNyQixJQUFZO0lBa0JkLHVDQUFvQixhQUFDLEdBQVcsRUFBRSxNQUFjLEVBQUUsU0FBaUIsRUFBRSxPQUFlLEVBQUUsT0FBZTtJQVdyRyw4QkFBVyxhQUFDLEdBQVU7SUFVdEIsMkJBQVE7Ozs7Ozs7O21CQW5VVjtFQW9DOEIsMEJBQTBCO1NBQTNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIG5ld3JlbGljIG1vYmlsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIE5ld1JlbGljIHBsdWdpbiBjb2xsZWN0IGNyYXNoZXMsIG5ldHdvcmsgdHJhZmZpYywgYW5kIG90aGVyIGluZm9ybWF0aW9uIGZvciBoeWJyaWQgYXBwcyB1c2luZyBuYXRpdmUgY29tcG9uZW50cy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5ld1JlbGljIH0gZnJvbSBcIkBhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uZXdyZWxpYy9uZ3hcIjtcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXdyZWxpYzogbmV3cmVsaWMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBOZXdSZWxpYy5zdGFydEludGVyYWN0aW9uKCdHZXR0aW5nIERhdGEgRnJvbSBTZXJ2ZXInKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05ld1JlbGljJyxcbiAgcGx1Z2luOiAnbmV3cmVsaWMtY29yZG92YS1wbHVnaW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnTmV3UmVsaWMnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbmV3cmVsaWMvbmV3cmVsaWMtY29yZG92YS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBodHRwczovL2dpdGh1Yi5jb20vbmV3cmVsaWMvbmV3cmVsaWMtY29yZG92YS1wbHVnaW4uZ2l0IC0tdmFyaWFibGUgSU9TX0FQUF9UT0tFTj1cIntpb3MtYXBwLXRva2VufVwiIC0tdmFyaWFibGUgQU5EUk9JRF9BUFBfVE9LRU49XCJ7YW5kcm9pZC1hcHAtdG9rZW59XCInLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogWydJT1NfQVBQX1RPS0VOJywgJ0FORFJPSURfQVBQX1RPS0VOJ10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV3UmVsaWMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTZXRzIGEgY3VzdG9tIHVzZXIgaWRlbnRpZmllciB2YWx1ZSB0byBhc3NvY2lhdGUgbW9iaWxlIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgdXNlciBpZGVudGlmaWVyIHN0cmluZy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjdXN0b20gYXR0cmlidXRlIHdpdGggYSBzcGVjaWZpZWQgbmFtZSBhbmQgdmFsdWUuXG4gICAqIFdoZW4gY2FsbGVkLCBpdCBvdmVyd3JpdGVzIGl0cyBwcmV2aW91cyB2YWx1ZSBhbmQgdHlwZS5cbiAgICogVGhlIGNyZWF0ZWQgYXR0cmlidXRlIGlzIHNoYXJlZCBieSBtdWx0aXBsZSBNb2JpbGUgZXZlbnQgdHlwZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgY3VzdG9tIGF0dHJpYnV0ZSB3aXRoIGEgc3BlY2lmaWVkIG5hbWUgYW5kIHZhbHVlLlxuICAgKiBXaGVuIGNhbGxlZCwgaXQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlIHNwZWNpZmllZCBieSB0aGUgbmFtZSBzdHJpbmcuXG4gICAqIFRoZSByZW1vdmVkIGF0dHJpYnV0ZSBpcyBzaGFyZWQgYnkgbXVsdGlwbGUgTW9iaWxlIGV2ZW50IHR5cGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgcmVjb3JkcyBhIE1vYmlsZUJyZWFkY3J1bWIgZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIG5hbWUgeW91IHdhbnQgdG8gZ2l2ZSB0byBhIGJyZWFkY3J1bWIgZXZlbnQuXG4gICAqIEBwYXJhbSB7TWFwPHN0cmluZywgYW55Pn0gYXR0cmlidXRlcyBBIG1hcCB0aGF0IGluY2x1ZGVzIGEgbGlzdCBvZiBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHJlY29yZEJyZWFkY3J1bWIobmFtZTogc3RyaW5nLCBldmVudEF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIGFueT4pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIHJlY29yZHMgYSBjdXN0b20gZXZlbnQsIGZvciB1c2UgaW4gTmV3IFJlbGljIEluc2lnaHRzLlxuICAgKiBUaGUgZXZlbnQgaW5jbHVkZXMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMsIHNwZWNpZmllZCBhcyBhIG1hcC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgdHlwZSBvZiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSB7TWFwPHN0cmluZywgYW55Pn0gYXR0cmlidXRlcyBBIG1hcCB0aGF0IGluY2x1ZGVzIGEgbGlzdCBvZiBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHJlY29yZEN1c3RvbUV2ZW50KGV2ZW50VHlwZTogc3RyaW5nLCBldmVudE5hbWU6IHN0cmluZywgZXZlbnRBdHRyaWJ1dGVzOiBNYXA8c3RyaW5nLCBhbnk+KTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBhIG1ldGhvZCBhcyBhbiBpbnRlcmFjdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGFjdGlvbi5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgQSBzdWNjZXNzIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGNvbnRhaW5pbmcgdGhlIGludGVyYWN0aW9uSWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3RhcnRJbnRlcmFjdGlvbihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRW5kIGFuIGludGVyYWN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnRlcmFjdGlvbklkIFRoZSBzdHJpbmcgSUQgZm9yIHRoZSBpbnRlcmFjdGlvbiB5b3Ugd2FudCB0byBlbmQuIFRoaXMgc3RyaW5nIGlzIHJldHVybmVkIHdoZW4geW91IHVzZSBzdGFydEludGVyYWN0aW9uKCkuXG4gICAqL1xuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBlbmRJbnRlcmFjdGlvbihuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhIGRlbW8gcnVuLXRpbWUgZXhjZXB0aW9uIHRvIHRlc3QgTmV3IFJlbGljIGNyYXNoIHJlcG9ydGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgQW4gb3B0aW9uYWwgYXJndW1lbnQgYXR0YWNoZWQgdG8gdGhlIGV4Y2VwdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBjcmFzaE5vdyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBJRCBhcyBhIHBhcmFtZXRlciB0byB0aGUgc3VjY2Vzc2Z1bCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIGZvciBjb25zb2xpZGF0aW5nIG1vbml0b3Jpbmcgb2YgYXBwIGRhdGEgKG5vdCBqdXN0IE5ldyBSZWxpYyBkYXRhKSBiYXNlZCBvbiBhIHNpbmdsZSBzZXNzaW9uIGRlZmluaXRpb24gYW5kIGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIEEgc3VjY2VzcyBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBjb250YWluaW5nIHRoZSBjdXJyZW50IHNlc3Npb24gSUQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgY3VycmVudFNlc3Npb25JZChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogSW5jcmVtZW50cyB0aGUgY291bnQgb2YgYW4gYXR0cmlidXRlIHdpdGggYSBzcGVjaWZpZWQgbmFtZS5cbiAgICogV2hlbiBjYWxsZWQsIGl0IG92ZXJ3cml0ZXMgaXRzIHByZXZpb3VzIHZhbHVlIGFuZCB0eXBlIGVhY2ggdGltZS5cbiAgICogSWYgYXR0cmlidXRlIGRvZXMgbm90IGV4aXN0LCBpdCBjcmVhdGVzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgdmFsdWUgb2YgMS5cbiAgICogVGhlIGluY3JlbWVudGVkIGF0dHJpYnV0ZSBpcyBzaGFyZWQgYnkgbXVsdGlwbGUgTW9iaWxlIGV2ZW50IHR5cGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgT3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpbmNyZW1lbnRzIHRoZSBhdHRyaWJ1dGUgYnkgdGhpcyB2YWx1ZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBpbmNyZW1lbnRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBmb3IgdGhlIGN1c3RvbSBtZXRyaWMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeSBUaGUgbWV0cmljIGNhdGVnb3J5IG5hbWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBPcHRpb25hbC4gVGhlIHZhbHVlIG9mIHRoZSBtZXRyaWMuIFZhbHVlIHNob3VsZCBiZSBhIG5vbi16ZXJvIHBvc2l0aXZlIG51bWJlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdW50VW5pdCBPcHRpb25hbCAoYnV0IHJlcXVpcmVzIHZhbHVlIGFuZCB2YWx1ZVVuaXQgdG8gYmUgc2V0KS4gVW5pdCBvZiBtZWFzdXJlbWVudCBmb3IgdGhlIG1ldHJpYyBjb3VudC4gU3VwcG9ydGVkIHZhbHVlcyBhcmUgJ1BFUkNFTlQnLCAnQllURVMnLCAnU0VDT05EUycsICdCWVRFU19QRVJfU0VDT05EJywgb3IgJ09QRVJBVElPTlMnLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVVbml0IE9wdGlvbmFsIChidXQgcmVxdWlyZXMgdmFsdWUgYW5kIGNvdW50VW5pdCB0byBiZSBzZXQpLiBVbml0IG9mIG1lYXN1cmVtZW50IGZvciB0aGUgbWV0cmljIHZhbHVlLiBTdXBwb3J0ZWQgdmFsdWVzIGFyZSAnUEVSQ0VOVCcsICdCWVRFUycsICdTRUNPTkRTJywgJ0JZVEVTX1BFUl9TRUNPTkQnLCBvciAnT1BFUkFUSU9OUycuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVjb3JkTWV0cmljKG5hbWU6IHN0cmluZywgY2F0ZWdvcnk6IGFueSwgdmFsdWU6IE51bWJlciwgY291bnRVbml0OiBzdHJpbmcsIHZhbHVlVW5pdDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBhdHRyaWJ1dGVzIGZyb20gdGhlIHNlc3Npb24uLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHJlbW92ZUFsbEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBtYXhpbXVtIHNpemUgb2YgdGhlIGV2ZW50IHBvb2wgc3RvcmVkIGluIG1lbW9yeSB1bnRpbCB0aGUgbmV4dCBoYXJ2ZXN0IGN5Y2xlLlxuICAgKiBXaGVuIHRoZSBwb29sIHNpemUgbGltaXQgaXMgcmVhY2hlZCwgdGhlIGFnZW50IHdpbGwgc3RhcnQgc2FtcGxpbmcgZXZlbnRzLCBkaXNjYXJkaW5nIHNvbWUgbmV3IGFuZCBvbGQsIHVudGlsIHRoZSBwb29sIG9mIGV2ZW50cyBpcyBzZW50IGluIHRoZSBuZXh0IGhhcnZlc3QgY3ljbGUuXG4gICAqIERlZmF1bHQgaXMgYSBtYXhpbXVtIG9mIDEwMDAgZXZlbnRzIHBlciBldmVudCBoYXJ2ZXN0IGN5Y2xlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4UG9vbFNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIGV2ZW50cyBwZXIgaGFydmVzdCBjeWNsZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXRNYXhFdmVudFBvb2xTaXplKG1heFBvb2xTaXplOiBOdW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGV2ZW50IGhhcnZlc3QgY3ljbGUgbGVuZ3RoLlxuICAgKiBEZWZhdWx0IGlzIDYwMCBzZWNvbmRzICgxMCBtaW51dGVzKS5cbiAgICogTWluaW11bSB2YWx1ZSBjYW5ub3QgYmUgbGVzcyB0aGFuIDYwIHNlY29uZHMuXG4gICAqIE1heGltdW0gdmFsdWUgc2hvdWxkIG5vdCBiZSBncmVhdGVyIHRoYW4gNjAwIHNlY29uZHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhCdWZmZXJUaW1lSW5TZWNvbmRzIFRoZSBtYXhpbXVtIHRpbWUgKGluIHNlY29uZHMpIHRoYXQgdGhlIGFnZW50IHNob3VsZCBzdG9yZSBldmVudHMgaW4gbWVtb3J5LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldE1heEV2ZW50QnVmZmVyVGltZShtYXhCdWZmZXJUaW1lSW5TZWNvbmRzOiBOdW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIEZPUiBBTkRST0lEIE9OTFkuXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGNvbGxlY3Rpb24gb2YgZXZlbnQgZGF0YS5cbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIEJvb2xlYW4gdmFsdWUgZm9yIGVuYWJsaW5nIGFuYWx5dGljcyBldmVudHMuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYW5hbHl0aWNzRXZlbnRFbmFibGVkKGVuYWJsZWQ6IEJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHJlcG9ydGluZyBzdWNlc3NmdWwgSFRUUCByZXF1ZXN0IHRvIHRoZSBNb2JpbGVSZXF1ZXN0IGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBCb29sZWFuIHZhbHVlIGZvciBlbmFibGUgc3VjY2Vzc2Z1bCBIVFRQIHJlcXVlc3RzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG5ldHdvcmtSZXF1ZXN0RW5hYmxlZChlbmFibGVkOiBCb29sZWFuKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSByZXBvcnRpbmcgbmV0d29yayBhbmQgSFRUUCByZXF1ZXN0IGVycm9ycyB0byB0aGUgTW9iaWxlUmVxdWVzdEVycm9yIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBCb29sZWFuIHZhbHVlIGZvciBlbmFibGluZyBuZXR3b3JrIHJlcXVlc3QgZXJyb3JzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG5ldHdvcmtFcnJvclJlcXVlc3RFbmFibGVkKGVuYWJsZWQ6IEJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGNhcHR1cmUgb2YgSFRUUCByZXNwb25zZSBib2RpZXMgZm9yIEhUVFAgZXJyb3IgdHJhY2VzLCBhbmQgTW9iaWxlUmVxdWVzdEVycm9yIGV2ZW50cy5cbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIEJvb2xlYW4gdmFsdWUgZm9yIGVuYWJsaW5nIEhUVFAgcmVzcG9uc2UgYm9kaWVzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGh0dHBSZXF1ZXN0Qm9keUNhcHR1cmVFbmFibGVkKGVuYWJsZWQ6IEJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCBvZiB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgSFRUUCBtZXRob2QgdXNlZCwgc3VjaCBhcyBHRVQgb3IgUE9TVC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1cyBUaGUgc3RhdHVzQ29kZSBvZiB0aGUgSFRUUCByZXNwb25zZSwgc3VjaCBhcyAyMDAgZm9yIE9LLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRUaW1lIFRoZSBzdGFydCB0aW1lIG9mIHRoZSByZXF1ZXN0IGluIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmRUaW1lIFRoZSBlbmQgdGltZSBvZiB0aGUgcmVxdWVzdCBpbiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNTZW50IFRoZSBudW1iZXIgb2YgYnl0ZXMgc2VudCBpbiB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzUmVjZWl2ZWQgVGhlIG51bWJlciBvZiBieXRlcyByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBib2R5IE9wdGlvbmFsLiBUaGUgcmVzcG9uc2UgYm9keSBvZiB0aGUgSFRUUCByZXNwb25zZS4gVGhlIHJlc3BvbnNlIGJvZHkgd2lsbCBiZSB0cnVuY2F0ZWQgYW5kIGluY2x1ZGVkIGluIGFuIEhUVFAgRXJyb3IgbWV0cmljIGlmIHRoZSBIVFRQIHRyYW5zYWN0aW9uIGlzIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG5vdGljZUh0dHBUcmFuc2FjdGlvbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBzdGF0dXM6IE51bWJlcixcbiAgICBzdGFydFRpbWU6IE51bWJlcixcbiAgICBlbmRUaW1lOiBOdW1iZXIsXG4gICAgYnl0ZXNTZW50OiBOdW1iZXIsXG4gICAgYnl0ZXNSZWNlaXZlZDogTnVtYmVyLFxuICAgIGJvZHk6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY29yZHMgbmV0d29yayBmYWlsdXJlcy5cbiAgICogSWYgYSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIHVzZSB0aGlzIG1ldGhvZCB0byByZWNvcmQgZGV0YWlscyBhYm91dCB0aGUgZmFpbHVyZS5cbiAgICogSW4gbW9zdCBjYXNlcywgcGxhY2UgdGhpcyBjYWxsIGluc2lkZSBleGNlcHRpb24gaGFuZGxlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCBvZiB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0dHBNZXRob2QgVGhlIEhUVFAgbWV0aG9kIHVzZWQsIHN1Y2ggYXMgR0VUIG9yIFBPU1QuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFRpbWUgVGhlIHN0YXJ0IHRpbWUgb2YgdGhlIHJlcXVlc3QgaW4gbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFRpbWUgVGhlIGVuZCB0aW1lIG9mIHRoZSByZXF1ZXN0IGluIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2guXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmYWlsdXJlIFRoZSBuYW1lIG9mIHRoZSBuZXR3b3JrIGZhaWx1cmUuIFBvc3NpYmxlIHZhbHVlcyBhcmUgJ1Vua25vd24nLCAnQmFkVVJMJywgJ1RpbWVkT3V0JywgJ0Nhbm5vdENvbm5lY3RUb0hvc3QnLCAnRE5TTG9va3VwRmFpbGVkJywgJ0JhZFNlcnZlclJlc3BvbnNlJywgJ1NlY3VyZUNvbm5lY3Rpb25GYWlsZWQnLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG5vdGljZU5ldHdvcmtGYWlsdXJlKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgc3RhcnRUaW1lOiBOdW1iZXIsIGVuZFRpbWU6IE51bWJlciwgZmFpbHVyZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvcmRzIEphdmFTY3JpcHQgZXJyb3JzIGZvciBpb25pYy5cbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvciB0byByZXBvcnQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVjb3JkRXJyb3IoZXJyOiBFcnJvcik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogU2h1dCBkb3duIHRoZSBhZ2VudCB3aXRoaW4gdGhlIGN1cnJlbnQgYXBwbGljYXRpb24gbGlmZWN5Y2xlIGR1cmluZyBydW50aW1lLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNodXRkb3duKCk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==