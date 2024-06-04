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
var LowMemoryOriginal = /** @class */ (function (_super) {
    __extends(LowMemoryOriginal, _super);
    function LowMemoryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowMemoryOriginal.prototype.generateLowMemory = function () { return cordova(this, "generateLowMemory", {}, arguments); };
    LowMemoryOriginal.pluginName = "LowMemory";
    LowMemoryOriginal.plugin = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.pluginRef = "LowMemory";
    LowMemoryOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.platforms = ["Android", "iOS"];
    return LowMemoryOriginal;
}(AwesomeCordovaNativePlugin));
var LowMemory = new LowMemoryOriginal();
export { LowMemory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1sb3ctbWVtb3J5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNEI3RCw2QkFBMEI7Ozs7SUFRdkQscUNBQWlCOzs7Ozs7b0JBckNuQjtFQTZCK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEFwcCBDZW50ZXIgTG93IE1lbW9yeVxuICogQGRlc2NyaXB0aW9uXG4gKiBHZW5lcmF0ZXMgYSBsb3cgbWVtb3J5IHdhcm5pbmcuXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb3dNZW1vcnkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWNlbnRlci1sb3ctbWVtb3J5L25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb3dNZW1vcnk6IExvd01lbW9yeSkgeyB9XG4gKlxuICogYXN5bmMgd2FybmluZygpIHtcbiAqICAgYXdhaXQgdGhpcy5sb3dNZW1vcnkuZ2VuZXJhdGVMb3dNZW1vcnkoKTtcbiAqIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvd01lbW9yeScsXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1nZW5lcmF0ZS1sb3ctbWVtb3J5JyxcbiAgcGx1Z2luUmVmOiAnTG93TWVtb3J5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1nZW5lcmF0ZS1sb3ctbWVtb3J5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvd01lbW9yeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIGxvdyBtZW1vcnkgd2FybmluZy5cbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWdlbmVyYXRlLWxvdy1tZW1vcnlcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlbmVyYXRlTG93TWVtb3J5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19