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
var MultipleDocumentsPickerOriginal = /** @class */ (function (_super) {
    __extends(MultipleDocumentsPickerOriginal, _super);
    function MultipleDocumentsPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleDocumentsPickerOriginal.prototype.pick = function (type) { return cordova(this, "pick", {}, arguments); };
    MultipleDocumentsPickerOriginal.pluginName = "MultipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.plugin = "cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.pluginRef = "multipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.repo = "https://github.com/akeotech/cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.platforms = ["Android", "iOS"];
    return MultipleDocumentsPickerOriginal;
}(AwesomeCordovaNativePlugin));
var MultipleDocumentsPicker = new MultipleDocumentsPickerOriginal();
export { MultipleDocumentsPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbXVsdGlwbGUtZG9jdW1lbnQtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUtBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEIvQywyQ0FBMEI7Ozs7SUFRckUsc0NBQUksYUFBQyxJQUFZOzs7Ozs7a0NBM0NuQjtFQW1DNkMsMEJBQTBCO1NBQTFELHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHdyYXBwZXIgZm9yIE11bHRpcGxlRG9jdW1lbnRzUGlja2VyIHBsdWdpblxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBNdWx0aXBsZSBEb2N1bWVudHMgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB1c2VycyB0byBwaWNrIG11bHRpcGxlIGRvY3VtZW50cy9pbWFnZXMgYXQgb25jZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNdWx0aXBsZURvY3VtZW50c1BpY2tlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tdWx0aXBsZS1kb2N1bWVudC1waWNrZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtdWx0aXBsZURvY3VtZW50c1BpY2tlcjogTXVsdGlwbGVEb2N1bWVudHNQaWNrZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLm11bHRpcGxlRG9jdW1lbnRzUGlja2VyLnBpY2soMSlcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNdWx0aXBsZURvY3VtZW50c1BpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW11bHRpcGxlLWRvY3VtZW50cy1waWNrZXInLFxuICBwbHVnaW5SZWY6ICdtdWx0aXBsZURvY3VtZW50c1BpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWtlb3RlY2gvY29yZG92YS1wbHVnaW4tbXVsdGlwbGUtZG9jdW1lbnRzLXBpY2tlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZURvY3VtZW50c1BpY2tlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWxsb3cgdXNlciB0byBzaG93IG5hdGl2ZSBmaWxlIHBpY2tlclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSB7bnVtYmVyfSBUbyBwaWNrIHR5cGUgb2YgZmlsZXM6IGZvciBpbWFnZXMgc2VuZCAxLCBmb3IgYWxsIGZpbGVzIHNlbmQgMlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGljayh0eXBlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==