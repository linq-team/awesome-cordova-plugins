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
export var DocumentScannerSourceType;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(DocumentScannerSourceType || (DocumentScannerSourceType = {}));
var DocumentScannerOriginal = /** @class */ (function (_super) {
    __extends(DocumentScannerOriginal, _super);
    function DocumentScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScannerOriginal.prototype.scanDoc = function (opts) { return cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScannerOriginal.pluginName = "DocumentScanner";
    DocumentScannerOriginal.plugin = "cordova-plugin-document-scanner";
    DocumentScannerOriginal.pluginRef = "scan";
    DocumentScannerOriginal.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScannerOriginal.platforms = ["Android", "iOS"];
    return DocumentScannerOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentScanner = new DocumentScannerOriginal();
export { DocumentScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtc2Nhbm5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBRTVGLE1BQU0sQ0FBTixJQUFZLHlCQVdYO0FBWEQsV0FBWSx5QkFBeUI7SUFDbkM7OztPQUdHO0lBQ0gsNkVBQVUsQ0FBQTtJQUVWOztPQUVHO0lBQ0gsK0VBQVcsQ0FBQTtBQUNiLENBQUMsRUFYVyx5QkFBeUIsS0FBekIseUJBQXlCLFFBV3BDOztJQWdFb0MsbUNBQTBCOzs7O0lBVTdELGlDQUFPLGFBQUMsSUFBNkI7Ozs7OzswQkF4RnZDO0VBOEVxQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50U2Nhbm5lclNvdXJjZVR5cGUge1xuICAvKipcbiAgICogU2NhbiBkaXJlY3RseSBmcm9tIGRldmljZSBjYW1lcmEuXG4gICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gICAqL1xuICBDQU1FUkEgPSAxLFxuXG4gIC8qKlxuICAgKiBTY2FuIGZyb20gYW4gaW1hZ2UgYWxyZWFkeSBzdG9yZWQgb24gZGV2aWNlLlxuICAgKi9cbiAgR0FMTEVSWSA9IDAsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRTY2FubmVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBDaG9vc2UgdG8gc2NhbiBmcm9tIGNhbWVyYSBvciBleGlzdGluZyBpbWFnZSBmaWxlLiBPbmx5IHZhbGlkIGZvciBBbmRyb2lkLlxuICAgKi9cbiAgc291cmNlVHlwZT86IERvY3VtZW50U2Nhbm5lclNvdXJjZVR5cGU7XG5cbiAgLyoqXG4gICAqIEZpbGVuYW1lIHRvIHNhdmUgc2Nhbm5lZCBpbWFnZSB0byAobWludXMgZXh0ZW5zaW9uLCB3aGljaCBpcyBhbHdheXMgXCIucG5nXCIpLlxuICAgKiBPbmx5IHZhbGlkIGZvciBpT1MuIENhbGxlciBpcyByZXNwb25zaWJsZSBmb3IgY2xlYW5pbmcgdXAgYW55IGZpbGVzIGNyZWF0ZWRcbiAgICogaWYgdGhpcyBwYXJhbWV0ZXIgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gdGhlIGRlZmF1bHQgdmFsdWUsXG4gICAqIHdoaWNoIGlzIFwiaW1hZ2VcIi5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBRdWFsaXR5IHRvIHVzZSB3aGVuIGNhcHR1cmluZyB0aGUgaW1hZ2UsIG11c3QgYmUgYSBmbG9hdCB2YWx1ZVxuICAgKiBmcm9tIDEuMChkZWZhdWx0IC0gSGlnaGVzdCBxdWFsaXR5KSB0byA1LjAoTG93ZXN0IFF1YWxpdHkpLiBBbnkgdmFsdWVcbiAgICogaW4gYmV0d2VlbiB3aWxsIGJlIGFjY2VwdGVkLiBBbnkgdmFsdWUgbm90IGVxdWFsIHRvIG9yIG5vdCBiZXR3ZWVuIHRoZXNlIHZhbHVlc1xuICAgKiAgd2lsbCBkZWZhdWx0IHRvIHRoZSBoaWdoZXN0IHF1YWxpdHkgb2YgMS4wLlxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogSWYgdGhlIGltYWdlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBhIGJhc2U2NCBlbmNvZGluZyBpbnN0ZWFkIG9mIGFzIGEgZmlsZSBVUkwuXG4gICAqIElmIHRydWUsIHRoZSBwbHVnaW4gd2lsbCByZXR1cm4gdGhlIHNjYW5uZWQgaW1hZ2UgYXMgYmFzZTY0LiBJZiBmYWxzZSxcbiAgICogdGhlIHBsdWdpbiB3aWxsIHJldHVybiB0aGUgaW1hZ2UgVVJMIG9mIHRoZSBpbWFnZS5cbiAgICovXG4gIHJldHVybkJhc2U2ND86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgRG9jdW1lbnQgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm9jZXNzZXMgaW1hZ2VzIG9mIGRvY3VtZW50cywgY29tcGVuc2F0aW5nIGZvciBwZXJzcGVjdGl2ZS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRTY2FubmVyLCBEb2N1bWVudFNjYW5uZXJPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RvY3VtZW50LXNjYW5uZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudFNjYW5uZXI6IERvY3VtZW50U2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IG9wdHM6IERvY3VtZW50U2Nhbm5lck9wdGlvbnMgPSB7fTtcbiAqIHRoaXMuZG9jdW1lbnRTY2FubmVyLnNjYW5Eb2N1bWVudChvcHRzKVxuICogICAudGhlbigocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERvY3VtZW50U2Nhbm5lck9wdGlvbnNcbiAqIEBlbnVtc1xuICogRG9jdW1lbnRTY2FubmVyU291cmNlVHlwZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RvY3VtZW50U2Nhbm5lcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXNjYW5uZXInLFxuICBwbHVnaW5SZWY6ICdzY2FuJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZXV0cmlub3NQbGF0Zm9ybS9jb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1zY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2Nhbm5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNjYW4gYSBkb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyB7RG9jdW1lbnRTY2FubmVyT3B0aW9uc30gb3B0aW9uYWwgcGFyYW1ldGVyIGZvciBjb250cm9sbGluZyBzY2FubmluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBmaWxlIFVSTCBvZiBzY2FubmVkIGRvY3VtZW50IGltYWdlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzY2FuRG9jKG9wdHM/OiBEb2N1bWVudFNjYW5uZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==