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
var FileChooserOriginal = /** @class */ (function (_super) {
    __extends(FileChooserOriginal, _super);
    function FileChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileChooserOriginal.prototype.open = function (filter) { return cordova(this, "open", {}, arguments); };
    FileChooserOriginal.pluginName = "FileChooser";
    FileChooserOriginal.plugin = "cordova-plugin-filechooser";
    FileChooserOriginal.pluginRef = "fileChooser";
    FileChooserOriginal.repo = "https://github.com/ihadeed/cordova-filechooser";
    FileChooserOriginal.platforms = ["Android"];
    return FileChooserOriginal;
}(AwesomeCordovaNativePlugin));
var FileChooser = new FileChooserOriginal();
export { FileChooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1jaG9vc2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUlBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEIzRCwrQkFBMEI7Ozs7SUFTekQsMEJBQUksYUFBQyxNQUFlOzs7Ozs7c0JBM0N0QjtFQWtDaUMsMEJBQTBCO1NBQTlDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2sgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzZG9jL2NoZWNrLXRhZy1uYW1lcyAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZpbGVDaG9vc2VyIFBsdWdpblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIEZpbGVDaG9vc2VyIFBsdWdpblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlQ2hvb3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maWxlLWNob29zZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlQ2hvb3NlcjogRmlsZUNob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpbGVDaG9vc2VyLm9wZW4oKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2VzcycpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlQ2hvb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGVjaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnZmlsZUNob29zZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1maWxlY2hvb3NlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVDaG9vc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTGF1bmNoZXMgYSBjaG9vc2VyIGRpYWxvZy4gVGhlIGZpbHRlciBwYXJhbSBhbGxvd3MgZmlsdGVyaW5nIGEgdGhlIG1pbWUgdHlwZVxuICAgKiB7IFwibWltZVwiOiBcImFwcGxpY2F0aW9uL3BkZlwiIH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmaWx0ZXJdIEZpbHRlciBhbGxvd2luZyBmaWx0ZXIgYnkgYSBtaW1lIHR5cGUgKHRleHQvcGxhaW4sIGltYWdlL3BuZywgaW1hZ2UvanBlZywgYXVkaW8vd2F2IGV0Yy4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFVSSSBvZiB0aGUgc2VsZWN0ZWQgZmlsZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuKGZpbHRlcj86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=