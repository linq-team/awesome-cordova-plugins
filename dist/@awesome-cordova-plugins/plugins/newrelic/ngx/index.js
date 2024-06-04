import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var NewRelic = /** @class */ (function (_super) {
    __extends(NewRelic, _super);
    function NewRelic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewRelic.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    NewRelic.prototype.setAttribute = function (name, value) { return cordova(this, "setAttribute", { "sync": true }, arguments); };
    NewRelic.prototype.removeAttribute = function (name) { return cordova(this, "removeAttribute", { "sync": true }, arguments); };
    NewRelic.prototype.recordBreadcrumb = function (name, eventAttributes) { return cordova(this, "recordBreadcrumb", { "sync": true }, arguments); };
    NewRelic.prototype.recordCustomEvent = function (eventType, eventName, eventAttributes) { return cordova(this, "recordCustomEvent", { "sync": true }, arguments); };
    NewRelic.prototype.startInteraction = function (name) { return cordova(this, "startInteraction", { "sync": true }, arguments); };
    NewRelic.prototype.endInteraction = function (name) { return cordova(this, "endInteraction", { "sync": true }, arguments); };
    NewRelic.prototype.crashNow = function (message) { return cordova(this, "crashNow", { "sync": true }, arguments); };
    NewRelic.prototype.currentSessionId = function (name) { return cordova(this, "currentSessionId", { "sync": true }, arguments); };
    NewRelic.prototype.incrementAttribute = function (name, value) { return cordova(this, "incrementAttribute", { "sync": true }, arguments); };
    NewRelic.prototype.recordMetric = function (name, category, value, countUnit, valueUnit) { return cordova(this, "recordMetric", { "sync": true }, arguments); };
    NewRelic.prototype.removeAllAttributes = function () { return cordova(this, "removeAllAttributes", { "sync": true }, arguments); };
    NewRelic.prototype.setMaxEventPoolSize = function (maxPoolSize) { return cordova(this, "setMaxEventPoolSize", { "sync": true }, arguments); };
    NewRelic.prototype.setMaxEventBufferTime = function (maxBufferTimeInSeconds) { return cordova(this, "setMaxEventBufferTime", { "sync": true }, arguments); };
    NewRelic.prototype.analyticsEventEnabled = function (enabled) { return cordova(this, "analyticsEventEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.networkRequestEnabled = function (enabled) { return cordova(this, "networkRequestEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.networkErrorRequestEnabled = function (enabled) { return cordova(this, "networkErrorRequestEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.httpRequestBodyCaptureEnabled = function (enabled) { return cordova(this, "httpRequestBodyCaptureEnabled", { "sync": true }, arguments); };
    NewRelic.prototype.noticeHttpTransaction = function (url, method, status, startTime, endTime, bytesSent, bytesReceived, body) { return cordova(this, "noticeHttpTransaction", { "sync": true }, arguments); };
    NewRelic.prototype.noticeNetworkFailure = function (url, method, startTime, endTime, failure) { return cordova(this, "noticeNetworkFailure", { "sync": true }, arguments); };
    NewRelic.prototype.recordError = function (err) { return cordova(this, "recordError", { "sync": true }, arguments); };
    NewRelic.prototype.shutdown = function () { return cordova(this, "shutdown", { "sync": true }, arguments); };
    NewRelic.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NewRelic, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    NewRelic.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NewRelic });
    NewRelic.pluginName = "NewRelic";
    NewRelic.plugin = "newrelic-cordova-plugin";
    NewRelic.pluginRef = "NewRelic";
    NewRelic.repo = "https://github.com/newrelic/newrelic-cordova-plugin";
    NewRelic.install = "ionic cordova plugin add https://github.com/newrelic/newrelic-cordova-plugin.git --variable IOS_APP_TOKEN=\"{ios-app-token}\" --variable ANDROID_APP_TOKEN=\"{android-app-token}\"";
    NewRelic.installVariables = ["IOS_APP_TOKEN", "ANDROID_APP_TOKEN"];
    NewRelic.platforms = ["Android", "iOS"];
    NewRelic = __decorate([], NewRelic);
    return NewRelic;
}(AwesomeCordovaNativePlugin));
export { NewRelic };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NewRelic, decorators: [{
            type: Injectable
        }], propDecorators: { setUserId: [], setAttribute: [], removeAttribute: [], recordBreadcrumb: [], recordCustomEvent: [], startInteraction: [], endInteraction: [], crashNow: [], currentSessionId: [], incrementAttribute: [], recordMetric: [], removeAllAttributes: [], setMaxEventPoolSize: [], setMaxEventBufferTime: [], analyticsEventEnabled: [], networkRequestEnabled: [], networkErrorRequestEnabled: [], httpRequestBodyCaptureEnabled: [], noticeHttpTransaction: [], noticeNetworkFailure: [], recordError: [], shutdown: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV3cmVsaWMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQW1DOUQsNEJBQTBCOzs7O0lBUXRELDRCQUFTLGFBQUMsTUFBYztJQWN4QiwrQkFBWSxhQUFDLElBQVksRUFBRSxLQUFVO0lBYXJDLGtDQUFlLGFBQUMsSUFBWTtJQVk1QixtQ0FBZ0IsYUFBQyxJQUFZLEVBQUUsZUFBaUM7SUFjaEUsb0NBQWlCLGFBQUMsU0FBaUIsRUFBRSxTQUFpQixFQUFFLGVBQWlDO0lBYXpGLG1DQUFnQixhQUFDLElBQVk7SUFZN0IsaUNBQWMsYUFBQyxJQUFZO0lBVzNCLDJCQUFRLGFBQUMsT0FBZTtJQWF4QixtQ0FBZ0IsYUFBQyxJQUFZO0lBZTdCLHFDQUFrQixhQUFDLElBQVksRUFBRSxLQUFVO0lBZTNDLCtCQUFZLGFBQUMsSUFBWSxFQUFFLFFBQWEsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxTQUFpQjtJQVU3RixzQ0FBbUI7SUFhbkIsc0NBQW1CLGFBQUMsV0FBbUI7SUFjdkMsd0NBQXFCLGFBQUMsc0JBQThCO0lBWXBELHdDQUFxQixhQUFDLE9BQWdCO0lBV3RDLHdDQUFxQixhQUFDLE9BQWdCO0lBV3RDLDZDQUEwQixhQUFDLE9BQWdCO0lBVzNDLGdEQUE2QixhQUFDLE9BQWdCO0lBa0I5Qyx3Q0FBcUIsYUFDbkIsR0FBVyxFQUNYLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUIsRUFDakIsT0FBZSxFQUNmLFNBQWlCLEVBQ2pCLGFBQXFCLEVBQ3JCLElBQVk7SUFrQmQsdUNBQW9CLGFBQUMsR0FBVyxFQUFFLE1BQWMsRUFBRSxTQUFpQixFQUFFLE9BQWUsRUFBRSxPQUFlO0lBV3JHLDhCQUFXLGFBQUMsR0FBVTtJQVV0QiwyQkFBUTswR0EvUkcsUUFBUTs4R0FBUixRQUFROzs7Ozs7OztJQUFSLFFBQVEsa0JBQVIsUUFBUTttQkFwQ3JCO0VBb0M4QiwwQkFBMEI7U0FBM0MsUUFBUTs0RkFBUixRQUFRO2tCQURwQixVQUFVOzhCQVNULFNBQVMsTUFjVCxZQUFZLE1BYVosZUFBZSxNQVlmLGdCQUFnQixNQWNoQixpQkFBaUIsTUFhakIsZ0JBQWdCLE1BWWhCLGNBQWMsTUFXZCxRQUFRLE1BYVIsZ0JBQWdCLE1BZWhCLGtCQUFrQixNQWVsQixZQUFZLE1BVVosbUJBQW1CLE1BYW5CLG1CQUFtQixNQWNuQixxQkFBcUIsTUFZckIscUJBQXFCLE1BV3JCLHFCQUFxQixNQVdyQiwwQkFBMEIsTUFXMUIsNkJBQTZCLE1Ba0I3QixxQkFBcUIsTUEwQnJCLG9CQUFvQixNQVdwQixXQUFXLE1BVVgsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgbmV3cmVsaWMgbW9iaWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgTmV3UmVsaWMgcGx1Z2luIGNvbGxlY3QgY3Jhc2hlcywgbmV0d29yayB0cmFmZmljLCBhbmQgb3RoZXIgaW5mb3JtYXRpb24gZm9yIGh5YnJpZCBhcHBzIHVzaW5nIG5hdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmV3UmVsaWMgfSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25ld3JlbGljL25neFwiO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ld3JlbGljOiBuZXdyZWxpYykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIE5ld1JlbGljLnN0YXJ0SW50ZXJhY3Rpb24oJ0dldHRpbmcgRGF0YSBGcm9tIFNlcnZlcicpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmV3UmVsaWMnLFxuICBwbHVnaW46ICduZXdyZWxpYy1jb3Jkb3ZhLXBsdWdpbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdOZXdSZWxpYycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uZXdyZWxpYy9uZXdyZWxpYy1jb3Jkb3ZhLXBsdWdpbicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9uZXdyZWxpYy9uZXdyZWxpYy1jb3Jkb3ZhLXBsdWdpbi5naXQgLS12YXJpYWJsZSBJT1NfQVBQX1RPS0VOPVwie2lvcy1hcHAtdG9rZW59XCIgLS12YXJpYWJsZSBBTkRST0lEX0FQUF9UT0tFTj1cInthbmRyb2lkLWFwcC10b2tlbn1cIicsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0lPU19BUFBfVE9LRU4nLCAnQU5EUk9JRF9BUFBfVE9LRU4nXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXdSZWxpYyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b20gdXNlciBpZGVudGlmaWVyIHZhbHVlIHRvIGFzc29jaWF0ZSBtb2JpbGUgdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSB1c2VyIGlkZW50aWZpZXIgc3RyaW5nLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCBhIHNwZWNpZmllZCBuYW1lIGFuZCB2YWx1ZS5cbiAgICogV2hlbiBjYWxsZWQsIGl0IG92ZXJ3cml0ZXMgaXRzIHByZXZpb3VzIHZhbHVlIGFuZCB0eXBlLlxuICAgKiBUaGUgY3JlYXRlZCBhdHRyaWJ1dGUgaXMgc2hhcmVkIGJ5IG11bHRpcGxlIE1vYmlsZSBldmVudCB0eXBlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgTmFtZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBjdXN0b20gYXR0cmlidXRlIHdpdGggYSBzcGVjaWZpZWQgbmFtZSBhbmQgdmFsdWUuXG4gICAqIFdoZW4gY2FsbGVkLCBpdCByZW1vdmVzIHRoZSBhdHRyaWJ1dGUgc3BlY2lmaWVkIGJ5IHRoZSBuYW1lIHN0cmluZy5cbiAgICogVGhlIHJlbW92ZWQgYXR0cmlidXRlIGlzIHNoYXJlZCBieSBtdWx0aXBsZSBNb2JpbGUgZXZlbnQgdHlwZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCByZWNvcmRzIGEgTW9iaWxlQnJlYWRjcnVtYiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSB5b3Ugd2FudCB0byBnaXZlIHRvIGEgYnJlYWRjcnVtYiBldmVudC5cbiAgICogQHBhcmFtIHtNYXA8c3RyaW5nLCBhbnk+fSBhdHRyaWJ1dGVzIEEgbWFwIHRoYXQgaW5jbHVkZXMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVjb3JkQnJlYWRjcnVtYihuYW1lOiBzdHJpbmcsIGV2ZW50QXR0cmlidXRlczogTWFwPHN0cmluZywgYW55Pik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgcmVjb3JkcyBhIGN1c3RvbSBldmVudCwgZm9yIHVzZSBpbiBOZXcgUmVsaWMgSW5zaWdodHMuXG4gICAqIFRoZSBldmVudCBpbmNsdWRlcyBhIGxpc3Qgb2YgYXR0cmlidXRlcywgc3BlY2lmaWVkIGFzIGEgbWFwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSB0eXBlIG9mIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICogQHBhcmFtIHtNYXA8c3RyaW5nLCBhbnk+fSBhdHRyaWJ1dGVzIEEgbWFwIHRoYXQgaW5jbHVkZXMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVjb3JkQ3VzdG9tRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudEF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIGFueT4pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIGEgbWV0aG9kIGFzIGFuIGludGVyYWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgYWN0aW9uLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBBIHN1Y2Nlc3MgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgY29udGFpbmluZyB0aGUgaW50ZXJhY3Rpb25JZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdGFydEludGVyYWN0aW9uKG5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmQgYW4gaW50ZXJhY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGludGVyYWN0aW9uSWQgVGhlIHN0cmluZyBJRCBmb3IgdGhlIGludGVyYWN0aW9uIHlvdSB3YW50IHRvIGVuZC4gVGhpcyBzdHJpbmcgaXMgcmV0dXJuZWQgd2hlbiB5b3UgdXNlIHN0YXJ0SW50ZXJhY3Rpb24oKS5cbiAgICovXG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGVuZEludGVyYWN0aW9uKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGEgZGVtbyBydW4tdGltZSBleGNlcHRpb24gdG8gdGVzdCBOZXcgUmVsaWMgY3Jhc2ggcmVwb3J0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBbiBvcHRpb25hbCBhcmd1bWVudCBhdHRhY2hlZCB0byB0aGUgZXhjZXB0aW9uLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGNyYXNoTm93KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzZXNzaW9uIElEIGFzIGEgcGFyYW1ldGVyIHRvIHRoZSBzdWNjZXNzZnVsIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VmdWwgZm9yIGNvbnNvbGlkYXRpbmcgbW9uaXRvcmluZyBvZiBhcHAgZGF0YSAobm90IGp1c3QgTmV3IFJlbGljIGRhdGEpIGJhc2VkIG9uIGEgc2luZ2xlIHNlc3Npb24gZGVmaW5pdGlvbiBhbmQgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgQSBzdWNjZXNzIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgc2Vzc2lvbiBJRC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBjdXJyZW50U2Vzc2lvbklkKG5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBjb3VudCBvZiBhbiBhdHRyaWJ1dGUgd2l0aCBhIHNwZWNpZmllZCBuYW1lLlxuICAgKiBXaGVuIGNhbGxlZCwgaXQgb3ZlcndyaXRlcyBpdHMgcHJldmlvdXMgdmFsdWUgYW5kIHR5cGUgZWFjaCB0aW1lLlxuICAgKiBJZiBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3QsIGl0IGNyZWF0ZXMgYW4gYXR0cmlidXRlIHdpdGggYSB2YWx1ZSBvZiAxLlxuICAgKiBUaGUgaW5jcmVtZW50ZWQgYXR0cmlidXRlIGlzIHNoYXJlZCBieSBtdWx0aXBsZSBNb2JpbGUgZXZlbnQgdHlwZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBPcHRpb25hbCBhcmd1bWVudCB0aGF0IGluY3JlbWVudHMgdGhlIGF0dHJpYnV0ZSBieSB0aGlzIHZhbHVlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGluY3JlbWVudEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIGZvciB0aGUgY3VzdG9tIG1ldHJpYy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5IFRoZSBtZXRyaWMgY2F0ZWdvcnkgbmFtZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIE9wdGlvbmFsLiBUaGUgdmFsdWUgb2YgdGhlIG1ldHJpYy4gVmFsdWUgc2hvdWxkIGJlIGEgbm9uLXplcm8gcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291bnRVbml0IE9wdGlvbmFsIChidXQgcmVxdWlyZXMgdmFsdWUgYW5kIHZhbHVlVW5pdCB0byBiZSBzZXQpLiBVbml0IG9mIG1lYXN1cmVtZW50IGZvciB0aGUgbWV0cmljIGNvdW50LiBTdXBwb3J0ZWQgdmFsdWVzIGFyZSAnUEVSQ0VOVCcsICdCWVRFUycsICdTRUNPTkRTJywgJ0JZVEVTX1BFUl9TRUNPTkQnLCBvciAnT1BFUkFUSU9OUycuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVVuaXQgT3B0aW9uYWwgKGJ1dCByZXF1aXJlcyB2YWx1ZSBhbmQgY291bnRVbml0IHRvIGJlIHNldCkuIFVuaXQgb2YgbWVhc3VyZW1lbnQgZm9yIHRoZSBtZXRyaWMgdmFsdWUuIFN1cHBvcnRlZCB2YWx1ZXMgYXJlICdQRVJDRU5UJywgJ0JZVEVTJywgJ1NFQ09ORFMnLCAnQllURVNfUEVSX1NFQ09ORCcsIG9yICdPUEVSQVRJT05TJy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICByZWNvcmRNZXRyaWMobmFtZTogc3RyaW5nLCBjYXRlZ29yeTogYW55LCB2YWx1ZTogTnVtYmVyLCBjb3VudFVuaXQ6IHN0cmluZywgdmFsdWVVbml0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGF0dHJpYnV0ZXMgZnJvbSB0aGUgc2Vzc2lvbi4uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVtb3ZlQWxsQXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG1heGltdW0gc2l6ZSBvZiB0aGUgZXZlbnQgcG9vbCBzdG9yZWQgaW4gbWVtb3J5IHVudGlsIHRoZSBuZXh0IGhhcnZlc3QgY3ljbGUuXG4gICAqIFdoZW4gdGhlIHBvb2wgc2l6ZSBsaW1pdCBpcyByZWFjaGVkLCB0aGUgYWdlbnQgd2lsbCBzdGFydCBzYW1wbGluZyBldmVudHMsIGRpc2NhcmRpbmcgc29tZSBuZXcgYW5kIG9sZCwgdW50aWwgdGhlIHBvb2wgb2YgZXZlbnRzIGlzIHNlbnQgaW4gdGhlIG5leHQgaGFydmVzdCBjeWNsZS5cbiAgICogRGVmYXVsdCBpcyBhIG1heGltdW0gb2YgMTAwMCBldmVudHMgcGVyIGV2ZW50IGhhcnZlc3QgY3ljbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhQb29sU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZXZlbnRzIHBlciBoYXJ2ZXN0IGN5Y2xlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldE1heEV2ZW50UG9vbFNpemUobWF4UG9vbFNpemU6IE51bWJlcik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZXZlbnQgaGFydmVzdCBjeWNsZSBsZW5ndGguXG4gICAqIERlZmF1bHQgaXMgNjAwIHNlY29uZHMgKDEwIG1pbnV0ZXMpLlxuICAgKiBNaW5pbXVtIHZhbHVlIGNhbm5vdCBiZSBsZXNzIHRoYW4gNjAgc2Vjb25kcy5cbiAgICogTWF4aW11bSB2YWx1ZSBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhhbiA2MDAgc2Vjb25kcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heEJ1ZmZlclRpbWVJblNlY29uZHMgVGhlIG1heGltdW0gdGltZSAoaW4gc2Vjb25kcykgdGhhdCB0aGUgYWdlbnQgc2hvdWxkIHN0b3JlIGV2ZW50cyBpbiBtZW1vcnkuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0TWF4RXZlbnRCdWZmZXJUaW1lKG1heEJ1ZmZlclRpbWVJblNlY29uZHM6IE51bWJlcik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRk9SIEFORFJPSUQgT05MWS5cbiAgICogRW5hYmxlIG9yIGRpc2FibGUgY29sbGVjdGlvbiBvZiBldmVudCBkYXRhLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgQm9vbGVhbiB2YWx1ZSBmb3IgZW5hYmxpbmcgYW5hbHl0aWNzIGV2ZW50cy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBhbmFseXRpY3NFdmVudEVuYWJsZWQoZW5hYmxlZDogQm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgcmVwb3J0aW5nIHN1Y2Vzc2Z1bCBIVFRQIHJlcXVlc3QgdG8gdGhlIE1vYmlsZVJlcXVlc3QgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIEJvb2xlYW4gdmFsdWUgZm9yIGVuYWJsZSBzdWNjZXNzZnVsIEhUVFAgcmVxdWVzdHMuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbmV0d29ya1JlcXVlc3RFbmFibGVkKGVuYWJsZWQ6IEJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHJlcG9ydGluZyBuZXR3b3JrIGFuZCBIVFRQIHJlcXVlc3QgZXJyb3JzIHRvIHRoZSBNb2JpbGVSZXF1ZXN0RXJyb3IgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIEJvb2xlYW4gdmFsdWUgZm9yIGVuYWJsaW5nIG5ldHdvcmsgcmVxdWVzdCBlcnJvcnMuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbmV0d29ya0Vycm9yUmVxdWVzdEVuYWJsZWQoZW5hYmxlZDogQm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgY2FwdHVyZSBvZiBIVFRQIHJlc3BvbnNlIGJvZGllcyBmb3IgSFRUUCBlcnJvciB0cmFjZXMsIGFuZCBNb2JpbGVSZXF1ZXN0RXJyb3IgZXZlbnRzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgQm9vbGVhbiB2YWx1ZSBmb3IgZW5hYmxpbmcgSFRUUCByZXNwb25zZSBib2RpZXMuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaHR0cFJlcXVlc3RCb2R5Q2FwdHVyZUVuYWJsZWQoZW5hYmxlZDogQm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIG9mIHRoZSByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFRoZSBIVFRQIG1ldGhvZCB1c2VkLCBzdWNoIGFzIEdFVCBvciBQT1NULlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzIFRoZSBzdGF0dXNDb2RlIG9mIHRoZSBIVFRQIHJlc3BvbnNlLCBzdWNoIGFzIDIwMCBmb3IgT0suXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFRpbWUgVGhlIHN0YXJ0IHRpbWUgb2YgdGhlIHJlcXVlc3QgaW4gbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFRpbWUgVGhlIGVuZCB0aW1lIG9mIHRoZSByZXF1ZXN0IGluIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2guXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlc1NlbnQgVGhlIG51bWJlciBvZiBieXRlcyBzZW50IGluIHRoZSByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNSZWNlaXZlZCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGJvZHkgT3B0aW9uYWwuIFRoZSByZXNwb25zZSBib2R5IG9mIHRoZSBIVFRQIHJlc3BvbnNlLiBUaGUgcmVzcG9uc2UgYm9keSB3aWxsIGJlIHRydW5jYXRlZCBhbmQgaW5jbHVkZWQgaW4gYW4gSFRUUCBFcnJvciBtZXRyaWMgaWYgdGhlIEhUVFAgdHJhbnNhY3Rpb24gaXMgYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbm90aWNlSHR0cFRyYW5zYWN0aW9uKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHN0YXR1czogTnVtYmVyLFxuICAgIHN0YXJ0VGltZTogTnVtYmVyLFxuICAgIGVuZFRpbWU6IE51bWJlcixcbiAgICBieXRlc1NlbnQ6IE51bWJlcixcbiAgICBieXRlc1JlY2VpdmVkOiBOdW1iZXIsXG4gICAgYm9keTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkcyBuZXR3b3JrIGZhaWx1cmVzLlxuICAgKiBJZiBhIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgdXNlIHRoaXMgbWV0aG9kIHRvIHJlY29yZCBkZXRhaWxzIGFib3V0IHRoZSBmYWlsdXJlLlxuICAgKiBJbiBtb3N0IGNhc2VzLCBwbGFjZSB0aGlzIGNhbGwgaW5zaWRlIGV4Y2VwdGlvbiBoYW5kbGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIG9mIHRoZSByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHR0cE1ldGhvZCBUaGUgSFRUUCBtZXRob2QgdXNlZCwgc3VjaCBhcyBHRVQgb3IgUE9TVC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0VGltZSBUaGUgc3RhcnQgdGltZSBvZiB0aGUgcmVxdWVzdCBpbiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kVGltZSBUaGUgZW5kIHRpbWUgb2YgdGhlIHJlcXVlc3QgaW4gbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZhaWx1cmUgVGhlIG5hbWUgb2YgdGhlIG5ldHdvcmsgZmFpbHVyZS4gUG9zc2libGUgdmFsdWVzIGFyZSAnVW5rbm93bicsICdCYWRVUkwnLCAnVGltZWRPdXQnLCAnQ2Fubm90Q29ubmVjdFRvSG9zdCcsICdETlNMb29rdXBGYWlsZWQnLCAnQmFkU2VydmVyUmVzcG9uc2UnLCAnU2VjdXJlQ29ubmVjdGlvbkZhaWxlZCcuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbm90aWNlTmV0d29ya0ZhaWx1cmUodXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBzdGFydFRpbWU6IE51bWJlciwgZW5kVGltZTogTnVtYmVyLCBmYWlsdXJlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY29yZHMgSmF2YVNjcmlwdCBlcnJvcnMgZm9yIGlvbmljLlxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yIHRvIHJlcG9ydC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICByZWNvcmRFcnJvcihlcnI6IEVycm9yKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBTaHV0IGRvd24gdGhlIGFnZW50IHdpdGhpbiB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBsaWZlY3ljbGUgZHVyaW5nIHJ1bnRpbWUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2h1dGRvd24oKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19