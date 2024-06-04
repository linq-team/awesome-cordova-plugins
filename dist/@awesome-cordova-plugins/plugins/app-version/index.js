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
var AppVersionOriginal = /** @class */ (function (_super) {
    __extends(AppVersionOriginal, _super);
    function AppVersionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppVersionOriginal.prototype.getAppName = function () { return cordova(this, "getAppName", {}, arguments); };
    AppVersionOriginal.prototype.getPackageName = function () { return cordova(this, "getPackageName", {}, arguments); };
    AppVersionOriginal.prototype.getVersionCode = function () { return cordova(this, "getVersionCode", {}, arguments); };
    AppVersionOriginal.prototype.getVersionNumber = function () { return cordova(this, "getVersionNumber", {}, arguments); };
    AppVersionOriginal.pluginName = "AppVersion";
    AppVersionOriginal.plugin = "cordova-plugin-app-version";
    AppVersionOriginal.pluginRef = "cordova.getAppVersion";
    AppVersionOriginal.repo = "https://github.com/whiteoctober/cordova-plugin-app-version";
    AppVersionOriginal.platforms = ["Android", "iOS", "Windows"];
    return AppVersionOriginal;
}(AwesomeCordovaNativePlugin));
var AppVersion = new AppVersionOriginal();
export { AppVersion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLXZlcnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzVELDhCQUEwQjs7OztJQU94RCwrQkFBVTtJQVVWLG1DQUFjO0lBWWQsbUNBQWM7SUFVZCxxQ0FBZ0I7Ozs7OztxQkF6RWxCO0VBa0NnQywwQkFBMEI7U0FBN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXBwIFZlcnNpb25cbiAqIEBwcmVtaWVyIGFwcC12ZXJzaW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlYWRzIHRoZSB2ZXJzaW9uIG9mIHlvdXIgYXBwIGZyb20gdGhlIHRhcmdldCBidWlsZCBzZXR0aW5ncy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQXBwIFZlcnNpb24gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3doaXRlb2N0b2Jlci9jb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcFZlcnNpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLXZlcnNpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFZlcnNpb246IEFwcFZlcnNpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0QXBwTmFtZSgpO1xuICogdGhpcy5hcHBWZXJzaW9uLmdldFBhY2thZ2VOYW1lKCk7XG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0VmVyc2lvbkNvZGUoKTtcbiAqIHRoaXMuYXBwVmVyc2lvbi5nZXRWZXJzaW9uTnVtYmVyKCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwVmVyc2lvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5nZXRBcHBWZXJzaW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS93aGl0ZW9jdG9iZXIvY29yZG92YS1wbHVnaW4tYXBwLXZlcnNpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBWZXJzaW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgYXBwLCBlLmcuOiBcIk15IEF3ZXNvbWUgQXBwXCJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwTmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYWNrYWdlIG5hbWUgb2YgdGhlIGFwcCwgZS5nLjogXCJjb20uZXhhbXBsZS5teWF3ZXNvbWVhcHBcIlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQYWNrYWdlTmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBidWlsZCBpZGVudGlmaWVyIG9mIHRoZSBhcHAuXG4gICAqIEluIGlPUyBhIHN0cmluZyB3aXRoIHRoZSBidWlsZCB2ZXJzaW9uIGxpa2UgXCIxLjYwOTVcIlxuICAgKiBJbiBBbmRyb2lkIGEgbnVtYmVyIGdlbmVyYXRlZCBmcm9tIHRoZSB2ZXJzaW9uIHN0cmluZywgbGlrZSAxMDIwMyBmb3IgdmVyc2lvbiBcIjEuMi4zXCJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nIHwgbnVtYmVyPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VmVyc2lvbkNvZGUoKTogUHJvbWlzZTxzdHJpbmcgfCBudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmVyc2lvbiBvZiB0aGUgYXBwLCBlLmcuOiBcIjEuMi4zXCJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VmVyc2lvbk51bWJlcigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19