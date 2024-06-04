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
var ChooserOriginal = /** @class */ (function (_super) {
    __extends(ChooserOriginal, _super);
    function ChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooserOriginal.prototype.getFiles = function (accept) { return cordova(this, "getFiles", {}, arguments); };
    ChooserOriginal.pluginName = "Chooser";
    ChooserOriginal.plugin = "cordova-plugin-simple-file-chooser";
    ChooserOriginal.pluginRef = "chooser";
    ChooserOriginal.repo = "https://github.com/hc-oss/cordova-plugin-simple-file-chooser";
    ChooserOriginal.platforms = ["Android", "iOS"];
    return ChooserOriginal;
}(AwesomeCordovaNativePlugin));
var Chooser = new ChooserOriginal();
export { Chooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci1zaW1wbGUtZmlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWtEL0QsMkJBQTBCOzs7O0lBU3JELDBCQUFRLGFBQUMsTUFBZTs7Ozs7O2tCQTVEMUI7RUFtRDZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaG9vc2VyUmVzdWx0IHtcbiAgbWVkaWFUeXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJpOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQ2hvb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKiBGaWxlIGNob29zZXIgcGx1Z2luIGZvciBDb3Jkb3ZhLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgbXVzdCBiZSBhZGRlZCB0byBjb25maWcueG1sIHRvIHByZXZlbnQgY3Jhc2hpbmcgd2hlbiBzZWxlY3RpbmcgbGFyZ2UgZmlsZXMgb24gQW5kcm9pZDpcbiAqIGBgYHhtbFxuICogPHBsYXRmb3JtIG5hbWU9XCJhbmRyb2lkXCI+XG4gKiAgPGVkaXQtY29uZmlnXG4gKiAgICBmaWxlPVwiYXBwL3NyYy9tYWluL0FuZHJvaWRNYW5pZmVzdC54bWxcIlxuICogICAgbW9kZT1cIm1lcmdlXCJcbiAqICAgIHRhcmdldD1cIi9tYW5pZmVzdC9hcHBsaWNhdGlvblwiPlxuICogICAgPGFwcGxpY2F0aW9uIGFuZHJvaWQ6bGFyZ2VIZWFwPVwidHJ1ZVwiIC8+XG4gKiAgPC9lZGl0LWNvbmZpZz5cbiAqIDwvcGxhdGZvcm0+XG4gKiBgYGBcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2hvb3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jaG9vc2VyLXNpbXBsZS1maWxlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hvb3NlcjogQ2hvb3NlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2hvb3Nlci5nZXRGaWxlcygpXG4gKiAgIC50aGVuKGZpbGVzID0+IGNvbnNvbGUubG9nKGZpbGVzID8gZmlsZXMubmFtZSA6ICdjYW5jZWxlZCcpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDaG9vc2VyUmVzdWx0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2hvb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNpbXBsZS1maWxlLWNob29zZXInLFxuICBwbHVnaW5SZWY6ICdjaG9vc2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYy1vc3MvY29yZG92YS1wbHVnaW4tc2ltcGxlLWZpbGUtY2hvb3NlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaG9vc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRGlzcGxheXMgbmF0aXZlIHByb21wdCBmb3IgdXNlciB0byBzZWxlY3QgYSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2VwdF0gT3B0aW9uYWwgTUlNRSB0eXBlIGZpbHRlciAoZS5nLiAnaW1hZ2UvZ2lmLHZpZGVvLyonKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSBjb250YWluaW5nIHNlbGVjdGVkIGZpbGUnc1xuICAgKiBkYXRhOiBNSU1FIHR5cGUsIGRpc3BsYXkgbmFtZSwgYW5kIG9yaWdpbmFsIFVSSS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RmlsZXMoYWNjZXB0Pzogc3RyaW5nKTogUHJvbWlzZTxDaG9vc2VyUmVzdWx0W10gfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==