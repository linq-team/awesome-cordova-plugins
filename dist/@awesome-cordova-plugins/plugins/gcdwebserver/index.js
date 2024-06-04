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
var GCDWebServerOriginal = /** @class */ (function (_super) {
    __extends(GCDWebServerOriginal, _super);
    function GCDWebServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GCDWebServerOriginal.prototype.startServer = function (options) { return cordova(this, "startServer", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GCDWebServerOriginal.prototype.stopServer = function () { return cordova(this, "stopServer", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GCDWebServerOriginal.pluginName = "gcdwebserver";
    GCDWebServerOriginal.plugin = "cordova-plugin-gcdwebserver";
    GCDWebServerOriginal.pluginRef = "cordova.plugins.GCDServer";
    GCDWebServerOriginal.repo = "https://github.com/xulihang/cordova-plugin-gcdwebserver";
    GCDWebServerOriginal.install = "";
    GCDWebServerOriginal.installVariables = [];
    GCDWebServerOriginal.platforms = ["iOS"];
    return GCDWebServerOriginal;
}(AwesomeCordovaNativePlugin));
var GCDWebServer = new GCDWebServerOriginal();
export { GCDWebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2Nkd2Vic2VydmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBT04sTUFBTSwrQkFBK0IsQ0FBQzs7SUFxQ0wsZ0NBQTBCOzs7O0lBVTFELGtDQUFXLGFBQUMsT0FBc0I7SUFTbEMsaUNBQVU7Ozs7Ozs7O3VCQWhFWjtFQTZDa0MsMEJBQTBCO1NBQS9DLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlck9wdGlvbnMge1xuICBwb3J0PzogbnVtYmVyO1xuICBmb2xkZXI/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgZ2Nkd2Vic2VydmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGNhbiBzdGFydCBhbiBIVFRQIHNlcnZlciB1c2luZyBHQ0RXZWJTZXJ2ZXJcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEdDRFdlYlNlcnZlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9nY2R3ZWJzZXJ2ZXInO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdjZHdlYnNlcnZlcjogR0NEV2ViU2VydmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogYXdhaXQgdGhpcy5nY2R3ZWJzZXJ2ZXIuc3RhcnRTZXJ2ZXIoe30pO1xuICogXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnZ2Nkd2Vic2VydmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2Nkd2Vic2VydmVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkdDRFNlcnZlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veHVsaWhhbmcvY29yZG92YS1wbHVnaW4tZ2Nkd2Vic2VydmVyJyxcbiAgaW5zdGFsbDogJycsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdDRFdlYlNlcnZlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIHN0YXJ0IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge1NlcnZlck9wdGlvbnN9XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzdGFydFNlcnZlcihvcHRpb25zOiBTZXJ2ZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc3RvcCB0aGUgc2VydmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAxLCBlcnJvckluZGV4OiAyIH0pXG4gIHN0b3BTZXJ2ZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19