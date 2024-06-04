import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var DocumentPicker = /** @class */ (function (_super) {
    __extends(DocumentPicker, _super);
    function DocumentPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPicker.prototype.getFile = function (option) { return cordova(this, "getFile", {}, arguments); };
    DocumentPicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentPicker, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    DocumentPicker.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentPicker });
    DocumentPicker.pluginName = "IOSDocumentPicker";
    DocumentPicker.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPicker.pluginRef = "DocumentPicker";
    DocumentPicker.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPicker.platforms = ["iOS"];
    DocumentPicker = __decorate([], DocumentPicker);
    return DocumentPicker;
}(AwesomeCordovaNativePlugin));
export { DocumentPicker };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentPicker, decorators: [{
            type: Injectable
        }], propDecorators: { getFile: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcGlja2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUE4QnhELGtDQUEwQjs7OztJQVE1RCxnQ0FBTyxhQUFDLE1BQWU7Z0hBUlosY0FBYztvSEFBZCxjQUFjOzs7Ozs7SUFBZCxjQUFjLGtCQUFkLGNBQWM7eUJBL0IzQjtFQStCb0MsMEJBQTBCO1NBQWpELGNBQWM7NEZBQWQsY0FBYztrQkFEMUIsVUFBVTs4QkFTVCxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBpT1MgRG9jdW1lbnRQaWNrZXJcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIE9wZW5zIHRoZSBmaWxlIHBpY2tlciBvbiBpT1MgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGZpbGUsIHJldHVybnMgYSBmaWxlIFVSSS5cbiAqIEFsbG93cyB0aGUgdXNlciB0byB1cGxvYWQgZmlsZXMgZnJvbSBpQ2xvdWRcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRQaWNrZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZG9jdW1lbnQtcGlja2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb2NQaWNrZXI6IERvY3VtZW50UGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmRvY1BpY2tlci5nZXRGaWxlKCdhbGwnKVxuICogICAudGhlbih1cmkgPT4gY29uc29sZS5sb2codXJpKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0lPU0RvY3VtZW50UGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG9jdW1lbnRwaWNrZXIuRG9jdW1lbnRQaWNrZXInLFxuICBwbHVnaW5SZWY6ICdEb2N1bWVudFBpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWFtcG9zc2libGUvQ29yZG92YS1Eb2NQaWNrZXInLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGlja2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBhIGZpbGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25dIGZpbGVzIGJldHdlZW4gJ2ltYWdlJywgJ3BkZicgb3IgJ2FsbCdcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RmlsZShvcHRpb24/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19