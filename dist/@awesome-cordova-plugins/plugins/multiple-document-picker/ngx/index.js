import { __decorate, __extends } from "tslib";
/**
 * This is a wrapper for MultipleDocumentsPicker plugin
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var MultipleDocumentsPicker = /** @class */ (function (_super) {
    __extends(MultipleDocumentsPicker, _super);
    function MultipleDocumentsPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleDocumentsPicker.prototype.pick = function (type) { return cordova(this, "pick", {}, arguments); };
    MultipleDocumentsPicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MultipleDocumentsPicker, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    MultipleDocumentsPicker.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MultipleDocumentsPicker });
    MultipleDocumentsPicker.pluginName = "MultipleDocumentsPicker";
    MultipleDocumentsPicker.plugin = "cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPicker.pluginRef = "multipleDocumentsPicker";
    MultipleDocumentsPicker.repo = "https://github.com/akeotech/cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPicker.platforms = ["Android", "iOS"];
    MultipleDocumentsPicker = __decorate([], MultipleDocumentsPicker);
    return MultipleDocumentsPicker;
}(AwesomeCordovaNativePlugin));
export { MultipleDocumentsPicker };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MultipleDocumentsPicker, decorators: [{
            type: Injectable
        }], propDecorators: { pick: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbXVsdGlwbGUtZG9jdW1lbnQtcGlja2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUE4Qi9DLDJDQUEwQjs7OztJQVFyRSxzQ0FBSSxhQUFDLElBQVk7eUhBUk4sdUJBQXVCOzZIQUF2Qix1QkFBdUI7Ozs7OztJQUF2Qix1QkFBdUIsa0JBQXZCLHVCQUF1QjtrQ0FuQ3BDO0VBbUM2QywwQkFBMEI7U0FBMUQsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVU7OEJBU1QsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHdyYXBwZXIgZm9yIE11bHRpcGxlRG9jdW1lbnRzUGlja2VyIHBsdWdpblxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBNdWx0aXBsZSBEb2N1bWVudHMgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB1c2VycyB0byBwaWNrIG11bHRpcGxlIGRvY3VtZW50cy9pbWFnZXMgYXQgb25jZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNdWx0aXBsZURvY3VtZW50c1BpY2tlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tdWx0aXBsZS1kb2N1bWVudC1waWNrZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtdWx0aXBsZURvY3VtZW50c1BpY2tlcjogTXVsdGlwbGVEb2N1bWVudHNQaWNrZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLm11bHRpcGxlRG9jdW1lbnRzUGlja2VyLnBpY2soMSlcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNdWx0aXBsZURvY3VtZW50c1BpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW11bHRpcGxlLWRvY3VtZW50cy1waWNrZXInLFxuICBwbHVnaW5SZWY6ICdtdWx0aXBsZURvY3VtZW50c1BpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWtlb3RlY2gvY29yZG92YS1wbHVnaW4tbXVsdGlwbGUtZG9jdW1lbnRzLXBpY2tlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZURvY3VtZW50c1BpY2tlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWxsb3cgdXNlciB0byBzaG93IG5hdGl2ZSBmaWxlIHBpY2tlclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSB7bnVtYmVyfSBUbyBwaWNrIHR5cGUgb2YgZmlsZXM6IGZvciBpbWFnZXMgc2VuZCAxLCBmb3IgYWxsIGZpbGVzIHNlbmQgMlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGljayh0eXBlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==