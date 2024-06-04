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
import { Plugin, Cordova, IonicNativePlugin, } from '@ionic-native/core';
import { Observable } from 'rxjs';
export var FirebaseModelStatus;
(function (FirebaseModelStatus) {
    FirebaseModelStatus["downloading"] = "downloading";
    FirebaseModelStatus["completed"] = "completed";
})(FirebaseModelStatus || (FirebaseModelStatus = {}));
export var FirebaseModelInputType;
(function (FirebaseModelInputType) {
    FirebaseModelInputType["path"] = "path";
    FirebaseModelInputType["base64string"] = "base64string";
    FirebaseModelInputType["blob"] = "blob";
})(FirebaseModelInputType || (FirebaseModelInputType = {}));
var FirebaseModelConfigResult = /** @class */ (function () {
    function FirebaseModelConfigResult() {
    }
    return FirebaseModelConfigResult;
}());
export { FirebaseModelConfigResult };
var FirebaseModelClassifyResult = /** @class */ (function () {
    function FirebaseModelClassifyResult() {
    }
    return FirebaseModelClassifyResult;
}());
export { FirebaseModelClassifyResult };
var FirebaseModelInput = /** @class */ (function () {
    function FirebaseModelInput() {
    }
    return FirebaseModelInput;
}());
export { FirebaseModelInput };
var FirebaseModelOriginal = /** @class */ (function (_super) {
    __extends(FirebaseModelOriginal, _super);
    function FirebaseModelOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseModelOriginal.prototype.configure = function (arg1) { return cordova(this, "configure", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    FirebaseModelOriginal.prototype.classify = function (arg1) { return cordova(this, "classify", {}, arguments); };
    FirebaseModelOriginal.pluginName = "FirebaseModel";
    FirebaseModelOriginal.plugin = "cordova-plugin-firebase-model";
    FirebaseModelOriginal.pluginRef = "FirebaseModel";
    FirebaseModelOriginal.repo = "";
    FirebaseModelOriginal.install = "ionic cordova plugin add cordova-plugin-firebase-model";
    FirebaseModelOriginal.installVariables = [];
    FirebaseModelOriginal.platforms = ["iOS"];
    return FirebaseModelOriginal;
}(IonicNativePlugin));
var FirebaseModel = new FirebaseModelOriginal();
export { FirebaseModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtbW9kZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUNMLE1BQU0sRUFDTixPQUFPLEVBSVAsaUJBQWlCLEdBQ2xCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNLENBQU4sSUFBWSxtQkFHWDtBQUhELFdBQVksbUJBQW1CO0lBQzdCLGtEQUEyQixDQUFBO0lBQzNCLDhDQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCO0FBRUQsTUFBTSxDQUFOLElBQVksc0JBSVg7QUFKRCxXQUFZLHNCQUFzQjtJQUNoQyx1Q0FBYSxDQUFBO0lBQ2IsdURBQTZCLENBQUE7SUFDN0IsdUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBSWpDOzs7O29DQXBCRDs7Ozs7O3NDQUFBOzs7Ozs7NkJBQUE7Ozs7SUErRm1DLGlDQUFpQjs7OztJQVlsRCxpQ0FBUyxhQUFDLElBQVk7SUFXdEIsZ0NBQVEsYUFBQyxJQUF3Qjs7Ozs7Ozs7d0JBdEhuQztFQStGbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gRmlyZWJhc2VNb2RlbFN0YXR1cyB7XG4gIGRvd25sb2FkaW5nID0gJ2Rvd25sb2FkaW5nJyxcbiAgY29tcGxldGVkID0gJ2NvbXBsZXRlZCcsXG59XG5cbmV4cG9ydCBlbnVtIEZpcmViYXNlTW9kZWxJbnB1dFR5cGUge1xuICBwYXRoID0gJ3BhdGgnLFxuICBiYXNlNjRzdHJpbmcgPSAnYmFzZTY0c3RyaW5nJyxcbiAgYmxvYiA9ICdibG9iJyxcbn1cblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlTW9kZWxDb25maWdSZXN1bHQge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG1vZGVsLlxuICAgKi9cbiAgc3RhdHVzOiBGaXJlYmFzZU1vZGVsU3RhdHVzO1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgZG93bmxvYWRpbmcgbW9kZWwuXG4gICAqL1xuICBwcm9ncmVzczogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VNb2RlbENsYXNzaWZ5UmVzdWx0IHtcbiAgLyoqXG4gICAqIFJldHVybiB0aGUgaWRlbnRpZmllZCBpbWFnZSBsYWJlbCBuYW1lLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbmZpZGVuY2Ugc2NvcmUgb2YgdGhlIGlkZW50aWZpZWQgaW1hZ2UuXG4gICAqL1xuICBzY29yZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VNb2RlbElucHV0IHtcbiAgLyoqXG4gICAqIFNldCB0aGUgb25lIG9mIHRoZSBpbnB1dCB0eXBlcyBkZWZpbmVkIGluIEZpcmViYXNlTW9kZWxJbnB1dFR5cGUgZW51bS5cbiAgICovXG4gIGlucHV0VHlwZTogRmlyZWJhc2VNb2RlbElucHV0VHlwZTtcbiAgLyoqXG4gICAqIFNldCB0aGUgaW5wdXQgYXMgc3RyaW5nIHwgQmxvYiBiYXNlZCBvbiB0aGUgYGlucHV0VHlwZWBcbiAgICovXG4gIGlucHV0OiBzdHJpbmcgfCBCbG9iO1xufVxuXG4vKipcbiAqIEBuYW1lIEZpcmViYXNlIE1vZGVsXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZG93bmxvYWRzIHRoZSBUZW5zb3JGbG93IG1vZGVsIGZyb20gZmlyZWJhc2UgYW5kIGNsYXNzaWZ5IHRoZSBpbWFnZXMuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlyZWJhc2VNb2RlbCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtbmF0aXZlLWZpcmViYXNlLW1vZGVsJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZU1vZGVsOiBGaXJlYmFzZU1vZGVsKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5maXJlYmFzZU1vZGVsLmNvbmZpZ3VyZSgnU2FtcGxlX01vZGVsJylcbiAqICAgLnN1YnNjcmliZSgocmVzOiBGaXJlYmFzZU1vZGVsQ29uZmlnUmVzdWx0KSA9PiBjb25zb2xlLmxvZyhyZXMuc3RhdHVzICsgXCIgLSBcIiArIHJlcy5wcm9ncmVzcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqXG4gKiB0cnkge1xuICogICAgdmFyIHJlc3VsdDpGaXJlYmFzZU1vZGVsQ2xhc3NpZnlSZXN1bHQgPSBhd2FpdCB0aGlzLmZpcmViYXNlTW9kZWwuY2xhc3NpZnkoXCIvRG9jdW1lbnRzL2lucHV0X2ltYWdlLnBuZ1wiKVxuICogICAgY29uc29sZS5sb2cocmVzdWx0LmxhYmVsICsgXCIgLSBcIiArIHJlc3VsdC5zY29yZSlcbiAqXG4gKiB9XG4gKiBjYXRjaCAoZSkge1xuICogICAgY29uc29sZS5sb2coZSlcbiAqIH1cbiAqXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VNb2RlbCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLW1vZGVsJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0ZpcmViYXNlTW9kZWwnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbW9kZWwnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlTW9kZWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNvbmZpZ3VyZSB0aGUgRmlyZWJhc2UgVEZMaXRlIG1vZGVsIGFuZCBkb3dubG9hZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcmcxIE5hbWUgb2YgdGhlIFRGTGl0ZSBtb2RlbCB3aGljaCBpcyB1cGxvYWRlZCBpbiB0aGUgRmlyZWJhc2UgY29uc29sZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGaXJlYmFzZU1vZGVsQ29uZmlnUmVzdWx0Pn0gUmV0dXJucyBhIG9ic2VydmFibGUgdGhhdCBnaXZlcyB0aGUgY2FsbGJhY2sgZm9yIGRvd25sb2FkaW5nIHByb2dyZXNzIGFuZCBzdGF0dXMuXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgY29uZmlndXJlKGFyZzE6IHN0cmluZyk6IE9ic2VydmFibGU8RmlyZWJhc2VNb2RlbENvbmZpZ1Jlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlkZW50aWZ5IHRoZSBpbWFnZSB1c2luZyB0aGUgRmlyZWJhc2UgVEZMaXRlIG1vZGVsIHdoaWNoIGlzIGNvbmZpZ3VyZWQuXG4gICAqIEBwYXJhbSB7RmlyZWJhc2VNb2RlbElucHV0fSBhcmcxICBCYXNlNjQgc3RyaW5nIG9mIHRoZSBpbnB1dCBpbWFnZSBvciAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpcmViYXNlTW9kZWxDbGFzc2lmeVJlc3VsdD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGNsYXNzaWZpY2F0aW9uIHJlc3VsdC5cbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xhc3NpZnkoYXJnMTogRmlyZWJhc2VNb2RlbElucHV0KTogUHJvbWlzZTxGaXJlYmFzZU1vZGVsQ2xhc3NpZnlSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==