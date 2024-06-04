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
var BrowserTabOriginal = /** @class */ (function (_super) {
    __extends(BrowserTabOriginal, _super);
    function BrowserTabOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTabOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    BrowserTabOriginal.prototype.openUrl = function (url) { return cordova(this, "openUrl", {}, arguments); };
    BrowserTabOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    BrowserTabOriginal.pluginName = "BrowserTab";
    BrowserTabOriginal.plugin = "cordova-plugin-browsertab";
    BrowserTabOriginal.pluginRef = "cordova.plugins.browsertab";
    BrowserTabOriginal.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTabOriginal.platforms = ["Android", "iOS"];
    return BrowserTabOriginal;
}(AwesomeCordovaNativePlugin));
var BrowserTab = new BrowserTabOriginal();
export { BrowserTab };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnJvd3Nlci10YWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzVELDhCQUEwQjs7OztJQU10RCxnQ0FBVztJQVVYLDRCQUFPLGFBQUMsR0FBVztJQVNuQiwwQkFBSzs7Ozs7O3FCQTNEVDtFQWtDZ0MsMEJBQTBCO1NBQTdDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJyb3dzZXIgVGFiXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0byBpbi1hcHAgYnJvd3NlciB0YWJzIHRoYXQgZXhpc3Qgb24gc29tZSBtb2JpbGUgcGxhdGZvcm1zLCBzcGVjaWZpY2FsbHkgW0N1c3RvbSBUYWJzXShodHRwOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3Rvb2xzL3N1cHBvcnQtbGlicmFyeS9mZWF0dXJlcy5odG1sI2N1c3RvbS10YWJzKSBvbiBBbmRyb2lkIChpbmNsdWRpbmcgdGhlIFtDaHJvbWUgQ3VzdG9tIFRhYnNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vbXVsdGlkZXZpY2UvYW5kcm9pZC9jdXN0b210YWJzKSBpbXBsZW1lbnRhdGlvbiksIGFuZCBbU0ZTYWZhcmlWaWV3Q29udHJvbGxlcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvaW9zL2RvY3VtZW50YXRpb24vU2FmYXJpU2VydmljZXMvUmVmZXJlbmNlL1NGU2FmYXJpVmlld0NvbnRyb2xsZXJfUmVmLykgb24gaU9TLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQnJvd3NlclRhYiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9icm93c2VyLXRhYi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJvd3NlclRhYjogQnJvd3NlclRhYikge1xuICpcbiAqICAgYnJvd3NlclRhYi5pc0F2YWlsYWJsZSgpXG4gKiAgICAgLnRoZW4oaXNBdmFpbGFibGUgPT4ge1xuICogICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gKiAgICAgICAgIGJyb3dzZXJUYWIub3BlblVybCgnaHR0cHM6Ly9pb25pYy5pbycpO1xuICogICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgLy8gb3BlbiBVUkwgd2l0aCBJbkFwcEJyb3dzZXIgaW5zdGVhZCBvciBTYWZhcmlWaWV3Q29udHJvbGxlclxuICogICAgICAgfVxuICogICAgIH0pO1xuICogfVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnQnJvd3NlclRhYicsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnJvd3NlcnRhYicsXG4gICAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWInLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2NvcmRvdmEtcGx1Z2luLWJyb3dzZXJ0YWInLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm93c2VyVGFiIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIEJyb3dzZXJUYWIgb3B0aW9uIGlzIGF2YWlsYWJsZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNoZWNrIGlzIHN1Y2Nlc3NmdWwgYW5kIHJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIHByb3ZpZGVkIFVSTCB1c2luZyBhIGJyb3dzZXIgdGFiXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgVGhlIFVSTCB5b3Ugd2FudCB0byBvcGVuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2hlY2sgb3BlbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBvcGVuVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBicm93c2VyIHRhYlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNsb3NlIHdhcyBmaW5pc2hlZFxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuIl19