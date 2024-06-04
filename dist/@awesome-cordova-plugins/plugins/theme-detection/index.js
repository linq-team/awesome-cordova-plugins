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
var ThemeDetectionOriginal = /** @class */ (function (_super) {
    __extends(ThemeDetectionOriginal, _super);
    function ThemeDetectionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetectionOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThemeDetectionOriginal.prototype.isDarkModeEnabled = function () { return cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetectionOriginal.pluginName = "ThemeDetection";
    ThemeDetectionOriginal.plugin = "cordova-plugin-theme-detection";
    ThemeDetectionOriginal.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetectionOriginal.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetectionOriginal.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetectionOriginal.installVariables = [];
    ThemeDetectionOriginal.platforms = ["iOS", "Android"];
    return ThemeDetectionOriginal;
}(AwesomeCordovaNativePlugin));
var ThemeDetection = new ThemeDetectionOriginal();
export { ThemeDetection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGhlbWUtZGV0ZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBK0N4RCxrQ0FBMEI7Ozs7SUFPNUQsb0NBQVc7SUFVWCwwQ0FBaUI7Ozs7Ozs7O3lCQWpFbkI7RUFnRG9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZURldGVjdGlvblJlc3BvbnNlIHtcbiAgLy8gQm9vbGVhbiB2YWx1ZSBhYm91dCB0aGUgc3RhdHVzIG9mIHRoZSByZXF1ZXN0XG4gIHZhbHVlOiBib29sZWFuO1xuXG4gIC8vIE1lc3NhZ2UgZm9yIHJlYWRhYmxlIHVzYWdlXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgVGhlbWUgRGV0ZWN0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIGRldGVjdCB3aGV0aGVyIGRhcmsgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGVtZURldGVjdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90aGVtZS1kZXRlY3Rpb24nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lRGV0ZWN0aW9uOiBUaGVtZURldGVjdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50aGVtZURldGVjdGlvbi5pc0F2YWlsYWJsZSgpXG4gKiAgIC50aGVuKChyZXM6IFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2UpID0+IHtcbiAqICAgICAgaWYocmVzLnZhbHVlKSB7XG4gKiAgICAgICAgdGhpcy50aGVtZURldGVjdGlvbi5pc0RhcmtNb2RlRW5hYmxlZCgpLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xuICogICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAqICAgICAgICB9KVxuICogICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogICAgICB9XG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RoZW1lRGV0ZWN0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGhlbWUtZGV0ZWN0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlRoZW1lRGV0ZWN0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJpdXNiYWNrZXMvY29yZG92YS1wbHVnaW4tdGhlbWUtZGV0ZWN0aW9uJyxcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRoZW1lRGV0ZWN0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT59XG4gICAqICBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuIG9iamVjdCB0aGF0IGhhcyBhIGJvb2xlYW4gcHJvcGVydHkgd2hpY2ggZ2l2ZXMgaW5mb3JtYXRpb24gaWYgdGhlIGRldGVjdGlvbiBpcyBhdmFpbGFibGUgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPn1cbiAgICogIFJldHVybnMgYSBwcm9taXNlIHdpdGggYW4gb2JqZWN0IHRoYXQgaGFzIGEgYm9vbGVhbiBwcm9wZXJ0eSB3aGljaCBnaXZlcyBpbmZvcm1hdGlvbiBpZiBkYXJrIG1vZGUgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNEYXJrTW9kZUVuYWJsZWQoKTogUHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=