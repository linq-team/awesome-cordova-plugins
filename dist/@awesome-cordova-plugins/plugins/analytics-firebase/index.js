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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var AnalyticsFirebaseOriginal = /** @class */ (function (_super) {
    __extends(AnalyticsFirebaseOriginal, _super);
    function AnalyticsFirebaseOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnalyticsFirebaseOriginal.prototype.logEvent = function (eventName, eventParams) { return cordova(this, "logEvent", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.resetAnalyticsData = function () { return cordova(this, "resetAnalyticsData", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setAnalyticsCollectionEnabled = function (enabled) { return cordova(this, "setAnalyticsCollectionEnabled", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setCurrentScreen = function (screenName) { return cordova(this, "setCurrentScreen", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setMinimumSessionDuration = function (milliseconds) { return cordova(this, "setMinimumSessionDuration", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setSessionTimeoutDuration = function (milliseconds) { return cordova(this, "setSessionTimeoutDuration", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setUserProperty = function (userPropertyName, userPropertyValue) { return cordova(this, "setUserProperty", {}, arguments); };
    Object.defineProperty(AnalyticsFirebaseOriginal.prototype, "DEFAULT_EVENTS", {
        get: function () { return cordovaPropertyGet(this, "DEFAULT_EVENTS"); },
        set: function (value) { cordovaPropertySet(this, "DEFAULT_EVENTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnalyticsFirebaseOriginal.prototype, "DEFAULT_PARAMS", {
        get: function () { return cordovaPropertyGet(this, "DEFAULT_PARAMS"); },
        set: function (value) { cordovaPropertySet(this, "DEFAULT_PARAMS", value); },
        enumerable: false,
        configurable: true
    });
    AnalyticsFirebaseOriginal.pluginName = "AnalyticsFirebase";
    AnalyticsFirebaseOriginal.plugin = "cordova-plugin-analytics";
    AnalyticsFirebaseOriginal.pluginRef = "analytics";
    AnalyticsFirebaseOriginal.repo = "https://github.com/appfeel/analytics-google";
    AnalyticsFirebaseOriginal.platforms = ["Android", "iOS"];
    return AnalyticsFirebaseOriginal;
}(AwesomeCordovaNativePlugin));
var AnalyticsFirebase = new AnalyticsFirebaseOriginal();
export { AnalyticsFirebase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5hbHl0aWNzLWZpcmViYXNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7O0lBNkR0RSxxQ0FBMEI7Ozs7SUFnSC9ELG9DQUFRLGFBQUMsU0FBaUIsRUFBRSxXQUFvQjtJQVVoRCw4Q0FBa0I7SUFZbEIseURBQTZCLGFBQUMsT0FBZ0I7SUFZOUMsNENBQWdCLGFBQUMsVUFBa0I7SUFZbkMscURBQXlCLGFBQUMsWUFBb0I7SUFZOUMscURBQXlCLGFBQUMsWUFBb0I7SUFXOUMscUNBQVMsYUFBQyxNQUFjO0lBWXhCLDJDQUFlLGFBQUMsZ0JBQXdCLEVBQUUsaUJBQXlCOzBCQXpMMUQsNkNBQWM7Ozs7OzswQkF5Q2QsNkNBQWM7Ozs7Ozs7Ozs7OzRCQS9HekI7RUE4RHVDLDBCQUEwQjtTQUFwRCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQW5hbHl0aWNzIEZpcmViYXNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdvb2dsZSBBbmFseXRpY3MgRmlyZWJhc2UgcGx1Z2luIGZvciBJb25pYyBOYXRpdmUgYXBwcy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQW5hbHl0aWNzRmlyZWJhc2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW5hbHl0aWNzLWZpcmViYXNlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbmFseXRpY3NGaXJlYmFzZTogQW5hbHl0aWNzRmlyZWJhc2UpIHsgfVxuICpcbiAqIC8vIFRyYWNrIGFuIGV2ZW50IHdpdGggZGVmYXVsdCBldmVudHMgYW5kIHBhcmFtc1xuICogY29uc3QgZXZlbnRQYXJhbXMgPSB7fTtcbiAqIGV2ZW50UGFyYW1zW3RoaXMuYW5hbHl0aWNzRmlyZWJhc2UuREVGQVVMVF9QQVJBTVMuTEVWRUxdID0gMjk7XG4gKiB0aGlzLmFuYWx5dGljc0ZpcmViYXNlLmxvZ0V2ZW50KHRoaXMuYW5hbHl0aWNzRmlyZWJhc2UuREVGQVVMVF9FVkVOVFMuTEVWRUxfVVAsIGV2ZW50UGFyYW1zKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRXZlbnQgc3VjY2Vzc2Z1bGx5IHRyYWNrZWQnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgdHJhY2tpbmcgZXZlbnQ6JywgZXJyKSk7XG4gKlxuICogLy8gVHJhY2sgYW4gZXZlbnQgd2l0aCBjdXN0b20gZXZlbnRzIGFuZCBwYXJhbXNcbiAqIGNvbnN0IGV2ZW50UGFyYW1zID0ge307XG4gKiBldmVudFBhcmFtc1snbXktcHJvcCddID0gMjk7XG4gKiB0aGlzLmFuYWx5dGljc0ZpcmViYXNlLmxvZ0V2ZW50KCdteS1ldmVudCcsIGV2ZW50UGFyYW1zKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRXZlbnQgc3VjY2Vzc2Z1bGx5IHRyYWNrZWQnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgdHJhY2tpbmcgZXZlbnQ6JywgZXJyKSk7XG4gKlxuICpcbiAqIC8vIFJlc2V0IGFuYWx5dGljcyBkYXRhXG4gKiB0aGlzLmFuYWx5dGljc0ZpcmViYXNlLnJlc2V0QW5hbHl0aWNzRGF0YSgpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdBbmFseXRpY3MgZGF0YSBoYXZlIGJlZW4gcmVzZXQnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgcmVzZXR0aW5nIGFuYWx5dGljcyBkYXRhOicsIGVycikpO1xuICpcbiAqXG4gKiAvLyBUcmFjayBhIHNjcmVlbiB2aWV3XG4gKiB0aGlzLmFuYWx5dGljc0ZpcmViYXNlLnNldEN1cnJlbnRTY3JlZW4oJ0hvbWUnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnVmlldyBzdWNjZXNzZnVsbHkgdHJhY2tlZCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciB0cmFja2luZyB2aWV3OicsIGVycikpO1xuICpcbiAqXG4gKiAvLyBTZXQgdXNlciBpZFxuICogdGhpcy5hbmFseXRpY3NGaXJlYmFzZS5zZXRVc2VySWQoJ1VTRVItSUQnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnVXNlciBpZCBzdWNjZXNzZnVsbHkgc2V0JykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHNldHRpbmcgdXNlciBpZDonLCBlcnIpKTtcbiAqXG4gKlxuICogLy8gU2V0IHVzZXIgcHJvcGVydHkgZnJvbSBkZWZhdWx0IHByb3BlcnRpZXNcbiAqIHRoaXMuYW5hbHl0aWNzRmlyZWJhc2Uuc2V0VXNlclByb3BlcnR5KCdLRVknLCAnVkFMVUUnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnVXNlciBwcm9wZXJ0eSBzdWNjZXNzZnVsbHkgc2V0JykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHNldHRpbmcgdXNlciBwcm9wZXJ0eTonLCBlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbmFseXRpY3NGaXJlYmFzZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFuYWx5dGljcycsXG4gIHBsdWdpblJlZjogJ2FuYWx5dGljcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBwZmVlbC9hbmFseXRpY3MtZ29vZ2xlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0ZpcmViYXNlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBlbnVtIHJlcHJlc2VudHMgQW5hbHl0aWNzRmlyZWJhc2UgZGVmYXVsdCBldmVudHMuXG4gICAqIFVzZSBvbmUgb2YgdGhlc2UgZGVmYXVsdCBldmVudHMgb3IgYSBjdXN0b20gZXZlbnRcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgREVGQVVMVF9FVkVOVFM6IHtcbiAgICBBRERfUEFZTUVOVF9JTkZPOiBzdHJpbmc7XG4gICAgQUREX1RPX0NBUlQ6IHN0cmluZztcbiAgICBBRERfVE9fV0lTSExJU1Q6IHN0cmluZztcbiAgICBBUFBfT1BFTjogc3RyaW5nO1xuICAgIEJFR0lOX0NIRUNLT1VUOiBzdHJpbmc7XG4gICAgQ0FNUEFJR05fREVUQUlMUzogc3RyaW5nO1xuICAgIENIRUNLT1VUX1BST0dSRVNTOiBzdHJpbmc7XG4gICAgRUFSTl9WSVJUVUFMX0NVUlJFTkNZOiBzdHJpbmc7XG4gICAgRUNPTU1FUkNFX1BVUkNIQVNFOiBzdHJpbmc7XG4gICAgR0VORVJBVEVfTEVBRDogc3RyaW5nO1xuICAgIEpPSU5fR1JPVVA6IHN0cmluZztcbiAgICBMRVZFTF9FTkQ6IHN0cmluZztcbiAgICBMRVZFTF9TVEFSVDogc3RyaW5nO1xuICAgIExFVkVMX1VQOiBzdHJpbmc7XG4gICAgTE9HSU46IHN0cmluZztcbiAgICBQT1NUX1NDT1JFOiBzdHJpbmc7XG4gICAgUFJFU0VOVF9PRkZFUjogc3RyaW5nO1xuICAgIFBVUkNIQVNFX1JFRlVORDogc3RyaW5nO1xuICAgIFJFTU9WRV9GUk9NX0NBUlQ6IHN0cmluZztcbiAgICBTRUFSQ0g6IHN0cmluZztcbiAgICBTRUxFQ1RfQ09OVEVOVDogc3RyaW5nO1xuICAgIFNFVF9DSEVDS09VVF9PUFRJT046IHN0cmluZztcbiAgICBTSEFSRTogc3RyaW5nO1xuICAgIFNJR05fVVA6IHN0cmluZztcbiAgICBTUEVORF9WSVJUVUFMX0NVUlJFTkNZOiBzdHJpbmc7XG4gICAgVFVUT1JJQUxfQkVHSU46IHN0cmluZztcbiAgICBUVVRPUklBTF9DT01QTEVURTogc3RyaW5nO1xuICAgIFVOTE9DS19BQ0hJRVZFTUVOVDogc3RyaW5nO1xuICAgIFZJRVdfSVRFTTogc3RyaW5nO1xuICAgIFZJRVdfSVRFTV9MSVNUOiBzdHJpbmc7XG4gICAgVklFV19TRUFSQ0hfUkVTVUxUUzogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGVudW0gcmVwcmVzZW50cyBBbmFseXRpY3NGaXJlYmFzZSBkZWZhdWx0IHBhcmFtcy5cbiAgICogVXNlIG9uZSBvZiB0aGVzZSBkZWZhdWx0IHBhcmFtcyBvciBhIGN1c3RvbSBwYXJhbVxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICByZWFkb25seSBERUZBVUxUX1BBUkFNUzoge1xuICAgIEFDSElFVkVNRU5UX0lEOiBzdHJpbmc7XG4gICAgQUNMSUQ6IHN0cmluZztcbiAgICBBRkZJTElBVElPTjogc3RyaW5nO1xuICAgIENBTVBBSUdOOiBzdHJpbmc7XG4gICAgQ0hBUkFDVEVSOiBzdHJpbmc7XG4gICAgQ0hFQ0tPVVRfT1BUSU9OOiBzdHJpbmc7XG4gICAgQ0hFQ0tPVVRfU1RFUDogc3RyaW5nO1xuICAgIENPTlRFTlQ6IHN0cmluZztcbiAgICBDT05URU5UX1RZUEU6IHN0cmluZztcbiAgICBDT1VQT046IHN0cmluZztcbiAgICBDUDE6IHN0cmluZztcbiAgICBDUkVBVElWRV9OQU1FOiBzdHJpbmc7XG4gICAgQ1JFQVRJVkVfU0xPVDogc3RyaW5nO1xuICAgIENVUlJFTkNZOiBzdHJpbmc7XG4gICAgREVTVElOQVRJT046IHN0cmluZztcbiAgICBFTkRfREFURTogc3RyaW5nO1xuICAgIEZMSUdIVF9OVU1CRVI6IHN0cmluZztcbiAgICBHUk9VUF9JRDogc3RyaW5nO1xuICAgIElOREVYOiBzdHJpbmc7XG4gICAgSVRFTV9CUkFORDogc3RyaW5nO1xuICAgIElURU1fQ0FURUdPUlk6IHN0cmluZztcbiAgICBJVEVNX0lEOiBzdHJpbmc7XG4gICAgSVRFTV9MSVNUOiBzdHJpbmc7XG4gICAgSVRFTV9MT0NBVElPTl9JRDogc3RyaW5nO1xuICAgIElURU1fTkFNRTogc3RyaW5nO1xuICAgIElURU1fVkFSSUFOVDogc3RyaW5nO1xuICAgIExFVkVMOiBzdHJpbmc7XG4gICAgTEVWRUxfTkFNRTogc3RyaW5nO1xuICAgIExPQ0FUSU9OOiBzdHJpbmc7XG4gICAgTUVESVVNOiBzdHJpbmc7XG4gICAgTUVUSE9EOiBzdHJpbmc7XG4gICAgTlVNQkVSX09GX05JR0hUUzogc3RyaW5nO1xuICAgIE5VTUJFUl9PRl9QQVNTRU5HRVJTOiBzdHJpbmc7XG4gICAgTlVNQkVSX09GX1JPT01TOiBzdHJpbmc7XG4gICAgT1JJR0lOOiBzdHJpbmc7XG4gICAgUFJJQ0U6IHN0cmluZztcbiAgICBRVUFOVElUWTogc3RyaW5nO1xuICAgIFNDT1JFOiBzdHJpbmc7XG4gICAgU0VBUkNIX1RFUk06IHN0cmluZztcbiAgICBTSElQUElORzogc3RyaW5nO1xuICAgIFNPVVJDRTogc3RyaW5nO1xuICAgIFNUQVJUX0RBVEU6IHN0cmluZztcbiAgICBTVUNDRVNTOiBzdHJpbmc7XG4gICAgVEFYOiBzdHJpbmc7XG4gICAgVEVSTTogc3RyaW5nO1xuICAgIFRSQU5TQUNUSU9OX0lEOiBzdHJpbmc7XG4gICAgVFJBVkVMX0NMQVNTOiBzdHJpbmc7XG4gICAgVkFMVUU6IHN0cmluZztcbiAgICBWSVJUVUFMX0NVUlJFTkNZX05BTUU6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogTG9ncyBhbiBhcHAgZXZlbnQuIFRoZSBldmVudCBjYW4gaGF2ZSB1cCB0byAyNSBwYXJhbWV0ZXJzLlxuICAgKiBFdmVudHMgd2l0aCB0aGUgc2FtZSBuYW1lIG11c3QgaGF2ZSB0aGUgc2FtZSBwYXJhbWV0ZXJzLlxuICAgKiBVcCB0byA1MDAgZXZlbnQgbmFtZXMgYXJlIHN1cHBvcnRlZC5cbiAgICogVXNpbmcgcHJlZGVmaW5lZCBbRmlyZWJhc2VBbmFseXRpY3MuRXZlbnRdKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3JlZmVyZW5jZS9hbmRyb2lkL2NvbS9nb29nbGUvZmlyZWJhc2UvYW5hbHl0aWNzL0ZpcmViYXNlQW5hbHl0aWNzLkV2ZW50Lmh0bWwpIGFuZC9vciBbRmlyZWJhc2VBbmFseXRpY3MuUGFyYW1dKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3JlZmVyZW5jZS9hbmRyb2lkL2NvbS9nb29nbGUvZmlyZWJhc2UvYW5hbHl0aWNzL0ZpcmViYXNlQW5hbHl0aWNzLlBhcmFtLmh0bWwpIGlzIHJlY29tbWVuZGVkIGZvciBvcHRpbWFsIHJlcG9ydGluZy5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBUaGUgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gZXZlbnRQYXJhbXMge29iamVjdH0gKE9wdGlvbmFsKSBUaGUgZXZlbnQgcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZXZlbnQgaXMgbG9nZ2VkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFBhcmFtcz86IG9iamVjdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgYW5hbHl0aWNzIGRhdGEgZm9yIHRoaXMgYXBwIGZyb20gdGhlIGRldmljZSBhbmQgcmVzZXRzIHRoZSBhcHAgaW5zdGFuY2UgaWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbmFseXRpY3MgZGF0YSBpcyBjbGVhcmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc2V0QW5hbHl0aWNzRGF0YSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgYW5hbHl0aWNzIGNvbGxlY3Rpb24gaXMgZW5hYmxlZCBmb3IgdGhpcyBhcHAgb24gdGhpcyBkZXZpY2UuIFRoaXMgc2V0dGluZyBpcyBwZXJzaXN0ZWQgYWNyb3NzIGFwcCBzZXNzaW9ucy4gQnkgZGVmYXVsdCBpdCBpcyBlbmFibGVkXG4gICAqXG4gICAqIEBwYXJhbSBzY3JlZW5OYW1lIHtib29sZWFufSBUaGUgdmFsdWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICogQHBhcmFtIGVuYWJsZWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjb2xsZWN0aW9uIGlzIGVuYWJsZWQvZGlzYWJsZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgc2NyZWVuIG5hbWUsIHdoaWNoIHNwZWNpZmllcyB0aGUgY3VycmVudCB2aXN1YWwgY29udGV4dCBpbiB5b3VyIGFwcC5cbiAgICogVGhpcyBoZWxwcyBpZGVudGlmeSB0aGUgYXJlYXMgaW4geW91ciBhcHAgd2hlcmUgdXNlcnMgc3BlbmQgdGhlaXIgdGltZSBhbmQgaG93IHRoZXkgaW50ZXJhY3Qgd2l0aCB5b3VyIGFwcFxuICAgKlxuICAgKiBAcGFyYW0gc2NyZWVuTmFtZSB7c3RyaW5nfSBUaGUgc2NyZWVuIG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjdXJyZW50IHNjcmVlbiBpcyBzZXR0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q3VycmVudFNjcmVlbihzY3JlZW5OYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBtaW5pbXVtIGVuZ2FnZW1lbnQgdGltZSByZXF1aXJlZCBiZWZvcmUgc3RhcnRpbmcgYSBzZXNzaW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxMDAwMCAoMTAgc2Vjb25kcylcbiAgICpcbiAgICogQHBhcmFtIHNjcmVlbk5hbWUge251bWJlcn0gVGhlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbWluaW11bSBzZXNzaW9uIGR1cmF0aW9uIGlzIHNldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRNaW5pbXVtU2Vzc2lvbkR1cmF0aW9uKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZHVyYXRpb24gb2YgaW5hY3Rpdml0eSB0aGF0IHRlcm1pbmF0ZXMgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMTgwMDAwMCAoMzAgbWludXRlcylcbiAgICpcbiAgICogQHBhcmFtIHNjcmVlbk5hbWUge251bWJlcn0gVGhlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc2Vzc2lvbiB0aW1lb3V0IGR1cmF0aW9uIGlzIHNldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTZXNzaW9uVGltZW91dER1cmF0aW9uKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlciBJRCBwcm9wZXJ0eS4gVGhpcyBmZWF0dXJlIG11c3QgYmUgdXNlZCBpbiBhY2NvcmRhbmNlIHdpdGggR29vZ2xlJ3MgUHJpdmFjeSBQb2xpY3lcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCB7c3RyaW5nfSBUaGUgdXNlciBpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXIgaWQgaXMgc2V0dGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB1c2VyIHByb3BlcnR5IHRvIGEgZ2l2ZW4gdmFsdWUuIFVwIHRvIDI1IHVzZXIgcHJvcGVydHkgbmFtZXMgYXJlIHN1cHBvcnRlZC4gT25jZSBzZXQsIHVzZXIgcHJvcGVydHkgdmFsdWVzIHBlcnNpc3QgdGhyb3VnaG91dCB0aGUgYXBwIGxpZmVjeWNsZSBhbmQgYWNyb3NzIHNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSB1c2VyUHJvcGVydHlOYW1lIHtzdHJpbmd9IFRoZSB1c2VyIHByb3BlcnR5IG5hbWVcbiAgICogQHBhcmFtIHVzZXJQcm9wZXJ0eVZhbHVlIHtzdHJpbmd9IFRoZSB1c2VyIHByb3BlcnR5IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdXNlciBwcm9wZXJ0eSBzZXR0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VXNlclByb3BlcnR5KHVzZXJQcm9wZXJ0eU5hbWU6IHN0cmluZywgdXNlclByb3BlcnR5VmFsdWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=