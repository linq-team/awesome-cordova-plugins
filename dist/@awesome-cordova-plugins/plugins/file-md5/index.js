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
var FileMD5Original = /** @class */ (function (_super) {
    __extends(FileMD5Original, _super);
    function FileMD5Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileMD5Original.prototype.file = function (fileEntry) { return cordova(this, "file", {}, arguments); };
    FileMD5Original.pluginName = "FileMD5";
    FileMD5Original.plugin = "cordova-plugin-file-md5";
    FileMD5Original.pluginRef = "md5chksum";
    FileMD5Original.repo = "https://github.com/mramonlopez/cordova-plugin-file-md5";
    FileMD5Original.platforms = ["Android", "iOS"];
    return FileMD5Original;
}(AwesomeCordovaNativePlugin));
var FileMD5 = new FileMD5Original();
export { FileMD5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1tZDUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE4Qi9ELDJCQUEwQjs7OztJQVFyRCxzQkFBSSxhQUFDLFNBQWM7Ozs7OztrQkF2Q3JCO0VBK0I2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRmlsZSBNRDVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcmVhZHMgbGFyZ2UgZmlsZXMgaW4gY2h1bmtzIGFuZCBidWlsZCB0aGUgbWQ1c3VtIGluY3JlbWVudGFsbHkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVNRDUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZS1tZDUvbngnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVNRDU6IEZpbGVNRDUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpbGVNRDUuZmlsZShmaWxlRW50cnkpXG4gKiAgIC50aGVuKChtZDVzdW06IHN0cmluZykgPT4gY29uc29sZS5sb2cobWQ1c3VtKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZU1ENScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtbWQ1JyxcbiAgcGx1Z2luUmVmOiAnbWQ1Y2hrc3VtJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tcmFtb25sb3Blei9jb3Jkb3ZhLXBsdWdpbi1maWxlLW1kNScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTUQ1IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IE1ENSBjaGVja3N1bSBmcm9tIGEgZmlsZVxuICAgKlxuICAgKiBAcGFyYW0gZmlsZUVudHJ5IHtGaWxlRW50cnl9IEZpbGUgZW50cnkgaXMgYSBvcmcuYXBhY2hlLmNvcmRvdmEuZmlsZS5GaWxlRW50cnlcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSB3aXRoIG1kNXN1bVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaWxlKGZpbGVFbnRyeTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==