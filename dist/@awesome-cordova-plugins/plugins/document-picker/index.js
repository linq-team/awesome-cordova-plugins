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
var DocumentPickerOriginal = /** @class */ (function (_super) {
    __extends(DocumentPickerOriginal, _super);
    function DocumentPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPickerOriginal.prototype.getFile = function (option) { return cordova(this, "getFile", {}, arguments); };
    DocumentPickerOriginal.pluginName = "IOSDocumentPicker";
    DocumentPickerOriginal.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPickerOriginal.pluginRef = "DocumentPicker";
    DocumentPickerOriginal.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPickerOriginal.platforms = ["iOS"];
    return DocumentPickerOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentPicker = new DocumentPickerOriginal();
export { DocumentPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEJ4RCxrQ0FBMEI7Ozs7SUFRNUQsZ0NBQU8sYUFBQyxNQUFlOzs7Ozs7eUJBdkN6QjtFQStCb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGlPUyBEb2N1bWVudFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogT3BlbnMgdGhlIGZpbGUgcGlja2VyIG9uIGlPUyBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGEgZmlsZSwgcmV0dXJucyBhIGZpbGUgVVJJLlxuICogQWxsb3dzIHRoZSB1c2VyIHRvIHVwbG9hZCBmaWxlcyBmcm9tIGlDbG91ZFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb2N1bWVudFBpY2tlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kb2N1bWVudC1waWNrZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY1BpY2tlcjogRG9jdW1lbnRQaWNrZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZG9jUGlja2VyLmdldEZpbGUoJ2FsbCcpXG4gKiAgIC50aGVuKHVyaSA9PiBjb25zb2xlLmxvZyh1cmkpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSU9TRG9jdW1lbnRQaWNrZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudHBpY2tlci5Eb2N1bWVudFBpY2tlcicsXG4gIHBsdWdpblJlZjogJ0RvY3VtZW50UGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pYW1wb3NzaWJsZS9Db3Jkb3ZhLURvY1BpY2tlcicsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRQaWNrZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIGEgZmlsZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbl0gZmlsZXMgYmV0d2VlbiAnaW1hZ2UnLCAncGRmJyBvciAnYWxsJ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRGaWxlKG9wdGlvbj86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=