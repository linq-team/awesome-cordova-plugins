import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
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
var DocumentScanner = /** @class */ (function (_super) {
    __extends(DocumentScanner, _super);
    function DocumentScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScanner.prototype.scanDoc = function (opts) { return cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScanner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentScanner, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    DocumentScanner.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentScanner });
    DocumentScanner.pluginName = "DocumentScanner";
    DocumentScanner.plugin = "cordova-plugin-document-scanner";
    DocumentScanner.pluginRef = "scan";
    DocumentScanner.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScanner.platforms = ["Android", "iOS"];
    DocumentScanner = __decorate([], DocumentScanner);
    return DocumentScanner;
}(AwesomeCordovaNativePlugin));
export { DocumentScanner };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentScanner, decorators: [{
            type: Injectable
        }], propDecorators: { scanDoc: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFNUYsTUFBTSxDQUFOLElBQVkseUJBV1g7QUFYRCxXQUFZLHlCQUF5QjtJQUNuQzs7O09BR0c7SUFDSCw2RUFBVSxDQUFBO0lBRVY7O09BRUc7SUFDSCwrRUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQVhXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFXcEM7O0lBZ0VvQyxtQ0FBMEI7Ozs7SUFVN0QsaUNBQU8sYUFBQyxJQUE2QjtpSEFWMUIsZUFBZTtxSEFBZixlQUFlOzs7Ozs7SUFBZixlQUFlLGtCQUFmLGVBQWU7MEJBOUU1QjtFQThFcUMsMEJBQTBCO1NBQWxELGVBQWU7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVTs4QkFXVCxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGVudW0gRG9jdW1lbnRTY2FubmVyU291cmNlVHlwZSB7XG4gIC8qKlxuICAgKiBTY2FuIGRpcmVjdGx5IGZyb20gZGV2aWNlIGNhbWVyYS5cbiAgICogVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAgICovXG4gIENBTUVSQSA9IDEsXG5cbiAgLyoqXG4gICAqIFNjYW4gZnJvbSBhbiBpbWFnZSBhbHJlYWR5IHN0b3JlZCBvbiBkZXZpY2UuXG4gICAqL1xuICBHQUxMRVJZID0gMCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFNjYW5uZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIENob29zZSB0byBzY2FuIGZyb20gY2FtZXJhIG9yIGV4aXN0aW5nIGltYWdlIGZpbGUuIE9ubHkgdmFsaWQgZm9yIEFuZHJvaWQuXG4gICAqL1xuICBzb3VyY2VUeXBlPzogRG9jdW1lbnRTY2FubmVyU291cmNlVHlwZTtcblxuICAvKipcbiAgICogRmlsZW5hbWUgdG8gc2F2ZSBzY2FubmVkIGltYWdlIHRvIChtaW51cyBleHRlbnNpb24sIHdoaWNoIGlzIGFsd2F5cyBcIi5wbmdcIikuXG4gICAqIE9ubHkgdmFsaWQgZm9yIGlPUy4gQ2FsbGVyIGlzIHJlc3BvbnNpYmxlIGZvciBjbGVhbmluZyB1cCBhbnkgZmlsZXMgY3JlYXRlZFxuICAgKiBpZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gYW55dGhpbmcgb3RoZXIgdGhhbiB0aGUgZGVmYXVsdCB2YWx1ZSxcbiAgICogd2hpY2ggaXMgXCJpbWFnZVwiLlxuICAgKi9cbiAgZmlsZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFF1YWxpdHkgdG8gdXNlIHdoZW4gY2FwdHVyaW5nIHRoZSBpbWFnZSwgbXVzdCBiZSBhIGZsb2F0IHZhbHVlXG4gICAqIGZyb20gMS4wKGRlZmF1bHQgLSBIaWdoZXN0IHF1YWxpdHkpIHRvIDUuMChMb3dlc3QgUXVhbGl0eSkuIEFueSB2YWx1ZVxuICAgKiBpbiBiZXR3ZWVuIHdpbGwgYmUgYWNjZXB0ZWQuIEFueSB2YWx1ZSBub3QgZXF1YWwgdG8gb3Igbm90IGJldHdlZW4gdGhlc2UgdmFsdWVzXG4gICAqICB3aWxsIGRlZmF1bHQgdG8gdGhlIGhpZ2hlc3QgcXVhbGl0eSBvZiAxLjAuXG4gICAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgaW1hZ2Ugc2hvdWxkIGJlIHJldHVybmVkIGFzIGEgYmFzZTY0IGVuY29kaW5nIGluc3RlYWQgb2YgYXMgYSBmaWxlIFVSTC5cbiAgICogSWYgdHJ1ZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiB0aGUgc2Nhbm5lZCBpbWFnZSBhcyBiYXNlNjQuIElmIGZhbHNlLFxuICAgKiB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIHRoZSBpbWFnZSBVUkwgb2YgdGhlIGltYWdlLlxuICAgKi9cbiAgcmV0dXJuQmFzZTY0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudCBTY2FubmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb2Nlc3NlcyBpbWFnZXMgb2YgZG9jdW1lbnRzLCBjb21wZW5zYXRpbmcgZm9yIHBlcnNwZWN0aXZlLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb2N1bWVudFNjYW5uZXIsIERvY3VtZW50U2Nhbm5lck9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZG9jdW1lbnQtc2Nhbm5lci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50U2Nhbm5lcjogRG9jdW1lbnRTY2FubmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgb3B0czogRG9jdW1lbnRTY2FubmVyT3B0aW9ucyA9IHt9O1xuICogdGhpcy5kb2N1bWVudFNjYW5uZXIuc2NhbkRvY3VtZW50KG9wdHMpXG4gKiAgIC50aGVuKChyZXM6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRG9jdW1lbnRTY2FubmVyT3B0aW9uc1xuICogQGVudW1zXG4gKiBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRTY2FubmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG9jdW1lbnQtc2Nhbm5lcicsXG4gIHBsdWdpblJlZjogJ3NjYW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05ldXRyaW5vc1BsYXRmb3JtL2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXNjYW5uZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRTY2FubmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2NhbiBhIGRvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSBvcHRzIHtEb2N1bWVudFNjYW5uZXJPcHRpb25zfSBvcHRpb25hbCBwYXJhbWV0ZXIgZm9yIGNvbnRyb2xsaW5nIHNjYW5uaW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IGZpbGUgVVJMIG9mIHNjYW5uZWQgZG9jdW1lbnQgaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHNjYW5Eb2Mob3B0cz86IERvY3VtZW50U2Nhbm5lck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19