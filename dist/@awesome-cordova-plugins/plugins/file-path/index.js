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
var FilePathOriginal = /** @class */ (function (_super) {
    __extends(FilePathOriginal, _super);
    function FilePathOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePathOriginal.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePathOriginal.pluginName = "FilePath";
    FilePathOriginal.plugin = "cordova-plugin-filepath";
    FilePathOriginal.pluginRef = "window.FilePath";
    FilePathOriginal.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePathOriginal.platforms = ["Android"];
    return FilePathOriginal;
}(AwesomeCordovaNativePlugin));
var FilePath = new FilePathOriginal();
export { FilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1wYXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0M5RCw0QkFBMEI7Ozs7SUFRdEQsb0NBQWlCLGFBQUMsSUFBWTs7Ozs7O21CQXpDaEM7RUFpQzhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBGaWxlIFBhdGhcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVzb2x2ZSB0aGUgbmF0aXZlIGZpbGVzeXN0ZW0gcGF0aCBmb3IgQW5kcm9pZCBjb250ZW50IFVSSXMgYW5kIGlzIGJhc2VkIG9uIGNvZGUgaW4gdGhlIGFGaWxlQ2hvb3NlciBsaWJyYXJ5LlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlUGF0aCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maWxlLXBhdGgvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVQYXRoOiBGaWxlUGF0aCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlUGF0aC5yZXNvbHZlTmF0aXZlUGF0aChwYXRoKVxuICogICAudGhlbihmaWxlUGF0aCA9PiBjb25zb2xlLmxvZyhmaWxlUGF0aCkpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZVBhdGgnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlcGF0aCcsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5GaWxlUGF0aCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGlkZGVudGFvL2NvcmRvdmEtcGx1Z2luLWZpbGVwYXRoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVBhdGggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXNvbHZlIG5hdGl2ZSBwYXRoIGZvciBnaXZlbiBjb250ZW50IFVSTC9wYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQ29udGVudCBVUkwvcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzb2x2ZU5hdGl2ZVBhdGgocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==