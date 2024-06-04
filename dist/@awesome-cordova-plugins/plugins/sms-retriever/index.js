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
var SmsRetrieverOriginal = /** @class */ (function (_super) {
    __extends(SmsRetrieverOriginal, _super);
    function SmsRetrieverOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetrieverOriginal.prototype.startWatching = function () { return cordova(this, "startWatching", {}, arguments); };
    SmsRetrieverOriginal.prototype.getAppHash = function () { return cordova(this, "getAppHash", {}, arguments); };
    SmsRetrieverOriginal.pluginName = "SmsRetriever";
    SmsRetrieverOriginal.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetrieverOriginal.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetrieverOriginal.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetrieverOriginal.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetrieverOriginal.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetrieverOriginal.platforms = ["Android"];
    return SmsRetrieverOriginal;
}(AwesomeCordovaNativePlugin));
var SmsRetriever = new SmsRetrieverOriginal();
export { SmsRetriever };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zLXJldHJpZXZlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW1DMUQsZ0NBQTBCOzs7O0lBTzFELG9DQUFhO0lBVWIsaUNBQVU7Ozs7Ozs7O3VCQXJEWjtFQW9Da0MsMEJBQTBCO1NBQS9DLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNtcyBSZXRyaWV2ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcmV0cml2ZXMgdGhlIFNNUyB3aGljaCBhcnJpdmUgd2l0aG91dCByZXF1aXJpbmcgUkVBRCBwZXJtaXNzaW9ucy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU21zUmV0cmlldmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3Ntcy1yZXRyaWV2ZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzbXNSZXRyaWV2ZXI6IFNtc1JldHJpZXZlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc21zUmV0cmlldmVyLmdldEFwcEhhc2goKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogdGhpcy5zbXNSZXRyaWV2ZXIuc3RhcnRXYXRjaGluZygpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU21zUmV0cmlldmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlci1tYW5hZ2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnNtc1JldHJpZXZlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGFuYXRoYXJlc2gyNzEyL2lvbmljLW5hdGl2ZS1zbXMtcmV0cmlldmVyLXBsdWdpbi1tYXN0ZXInLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXNtcy1yZXRyaWV2ZXItbWFuYWdlciAtLXZhcmlhYmxlIFBMQVlfU0VSVklDRVNfVkVSU0lPTj1cIjE1LjAuMVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQTEFZX1NFUlZJQ0VTX1ZFUlNJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU21zUmV0cmlldmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdGFydCB3YXRoY2hpbmcgbWVzc2FnZSBhcnJpdmUgZXZlbnQgYW5kIHJldHJpdmUgbWVzc2FnZSB0ZXh0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcmV0cml2ZXMgU01TIHRleHQgb3IgVElNRU9VVCBhZnRlciA1IG1pbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRXYXRjaGluZygpOiBQcm9taXNlPHsgTWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpcyB0byBnZXQgaGFzaCBzdHJpbmcgb2YgQVBQLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlIGhhc2ggb2YgQVBQLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBcHBIYXNoKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=