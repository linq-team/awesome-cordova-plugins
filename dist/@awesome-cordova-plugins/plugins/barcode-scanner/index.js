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
var BarcodeScannerOriginal = /** @class */ (function (_super) {
    __extends(BarcodeScannerOriginal, _super);
    function BarcodeScannerOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE',
        };
        return _this;
    }
    BarcodeScannerOriginal.prototype.scan = function (options) { return cordova(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScannerOriginal.prototype.encode = function (type, data) { return cordova(this, "encode", {}, arguments); };
    BarcodeScannerOriginal.pluginName = "BarcodeScanner";
    BarcodeScannerOriginal.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScannerOriginal.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScannerOriginal.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScannerOriginal.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    return BarcodeScannerOriginal;
}(AwesomeCordovaNativePlugin));
var BarcodeScanner = new BarcodeScannerOriginal();
export { BarcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFyY29kZS1zY2FubmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0h4RCxrQ0FBMEI7OztRQUM1RCxZQUFNLEdBS0Y7WUFDRixTQUFTLEVBQUUsV0FBVztZQUN0QixVQUFVLEVBQUUsWUFBWTtZQUN4QixVQUFVLEVBQUUsWUFBWTtZQUN4QixRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDOzs7SUFXRiw2QkFBSSxhQUFDLE9BQStCO0lBYXBDLCtCQUFNLGFBQUMsSUFBWSxFQUFFLElBQVM7Ozs7Ozt5QkF0SmhDO0VBbUhvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5uZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFByZWZlciBmcm9udCBjYW1lcmEuIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBwcmVmZXJGcm9udENhbWVyYT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgZmxpcCBjYW1lcmEgYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd0ZsaXBDYW1lcmFCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93IHRvcmNoIGJ1dHRvbi4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHNob3dUb3JjaEJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW5pbWF0aW9ucy4gU3VwcG9ydGVkIG9uIGlPUyBvbmx5LlxuICAgKi9cbiAgZGlzYWJsZUFuaW1hdGlvbnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHN1Y2Nlc3MgYmVlcC4gU3VwcG9ydGVkIG9uIGlPUyBvbmx5LlxuICAgKi9cbiAgZGlzYWJsZVN1Y2Nlc3NCZWVwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvbXB0IHRleHQuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICBwcm9tcHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gRGVmYXVsdHMgdG8gYWxsIGZvcm1hdHMgZXhjZXB0IGBQREZfNDE3YCBhbmQgYFJTU19FWFBBTkRFRGAuXG4gICAqL1xuICBmb3JtYXRzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcmllbnRhdGlvbi4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS4gQ2FuIGJlIHNldCB0byBgcG9ydHJhaXRgIG9yIGBsYW5kc2NhcGVgLiBEZWZhdWx0cyB0byBub25lIHNvIHRoZSB1c2VyIGNhbiByb3RhdGUgdGhlIHBob25lIGFuZCBwaWNrIGFuIG9yaWVudGF0aW9uLlxuICAgKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhdW5jaCB3aXRoIHRoZSB0b3JjaCBzd2l0Y2hlZCBvbiAoaWYgYXZhaWxhYmxlKS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHRvcmNoT24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTYXZlIHNjYW4gaGlzdG9yeS4gRGVmYXVsdHMgdG8gYGZhbHNlYC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHNhdmVIaXN0b3J5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzcGxheSBzY2FubmVkIHRleHQgZm9yIFggbXMuIDAgc3VwcHJlc3NlcyBpdCBlbnRpcmVseSwgZGVmYXVsdCAxNTAwLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgcmVzdWx0RGlzcGxheUR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVTY2FuUmVzdWx0IHtcbiAgZm9ybWF0OlxuICAgIHwgJ1FSX0NPREUnXG4gICAgfCAnREFUQV9NQVRSSVgnXG4gICAgfCAnVVBDX0UnXG4gICAgfCAnVVBDX0EnXG4gICAgfCAnRUFOXzgnXG4gICAgfCAnRUFOXzEzJ1xuICAgIHwgJ0NPREVfMTI4J1xuICAgIHwgJ0NPREVfMzknXG4gICAgfCAnQ09ERV85MydcbiAgICB8ICdDT0RBQkFSJ1xuICAgIHwgJ0lURidcbiAgICB8ICdSU1MxNCdcbiAgICB8ICdSU1NfRVhQQU5ERUQnXG4gICAgfCAnUERGXzQxNydcbiAgICB8ICdBWlRFQydcbiAgICB8ICdNU0knO1xuICBjYW5jZWxsZWQ6IGJvb2xlYW47XG4gIHRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBCYXJjb2RlIFNjYW5uZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEJhcmNvZGUgU2Nhbm5lciBQbHVnaW4gb3BlbnMgYSBjYW1lcmEgdmlldyBhbmQgYXV0b21hdGljYWxseSBzY2FucyBhIGJhcmNvZGUsIHJldHVybmluZyB0aGUgZGF0YSBiYWNrIHRvIHlvdS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYHBob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtCYXJjb2RlU2Nhbm5lciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iYXJjb2RlU2Nhbm5lci5zY2FuKCkudGhlbihiYXJjb2RlRGF0YSA9PiB7XG4gKiAgY29uc29sZS5sb2coJ0JhcmNvZGUgZGF0YScsIGJhcmNvZGVEYXRhKTtcbiAqIH0pLmNhdGNoKGVyciA9PiB7XG4gKiBcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycik7XG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhcmNvZGVTY2FubmVyT3B0aW9uc1xuICogQmFyY29kZVNjYW5SZXN1bHRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXJjb2RlU2Nhbm5lcicsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYXJjb2RlU2Nhbm5lcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhcmNvZGVTY2FubmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBFbmNvZGU6IHtcbiAgICBURVhUX1RZUEU6IHN0cmluZztcbiAgICBFTUFJTF9UWVBFOiBzdHJpbmc7XG4gICAgUEhPTkVfVFlQRTogc3RyaW5nO1xuICAgIFNNU19UWVBFOiBzdHJpbmc7XG4gIH0gPSB7XG4gICAgVEVYVF9UWVBFOiAnVEVYVF9UWVBFJyxcbiAgICBFTUFJTF9UWVBFOiAnRU1BSUxfVFlQRScsXG4gICAgUEhPTkVfVFlQRTogJ1BIT05FX1RZUEUnLFxuICAgIFNNU19UWVBFOiAnU01TX1RZUEUnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBiYXJjb2RlIHNjYW5uZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7QmFyY29kZVNjYW5uZXJPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uYWwgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBzY2FubmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzY2FubmVyIGRhdGEsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHNjYW4ob3B0aW9ucz86IEJhcmNvZGVTY2FubmVyT3B0aW9ucyk6IFByb21pc2U8QmFyY29kZVNjYW5SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBkYXRhIGludG8gYSBiYXJjb2RlLlxuICAgKiBOT1RFOiBub3Qgd2VsbCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG9mIGVuY29kaW5nXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIERhdGEgdG8gZW5jb2RlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY29kZSh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=