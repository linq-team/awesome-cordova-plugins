import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Chooser = /** @class */ (function (_super) {
    __extends(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFiles = function (accept) { return cordova(this, "getFiles", {}, arguments); };
    Chooser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Chooser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Chooser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Chooser });
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-simple-file-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/hc-oss/cordova-plugin-simple-file-chooser";
    Chooser.platforms = ["Android", "iOS"];
    Chooser = __decorate([], Chooser);
    return Chooser;
}(AwesomeCordovaNativePlugin));
export { Chooser };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Chooser, decorators: [{
            type: Injectable
        }], propDecorators: { getFiles: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci1zaW1wbGUtZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBa0QvRCwyQkFBMEI7Ozs7SUFTckQsMEJBQVEsYUFBQyxNQUFlO3lHQVRiLE9BQU87NkdBQVAsT0FBTzs7Ozs7O0lBQVAsT0FBTyxrQkFBUCxPQUFPO2tCQW5EcEI7RUFtRDZCLDBCQUEwQjtTQUExQyxPQUFPOzRGQUFQLE9BQU87a0JBRG5CLFVBQVU7OEJBVVQsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3NlclJlc3VsdCB7XG4gIG1lZGlhVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVyaTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIENob29zZXJcbiAqIEBkZXNjcmlwdGlvblxuICogRmlsZSBjaG9vc2VyIHBsdWdpbiBmb3IgQ29yZG92YS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIG11c3QgYmUgYWRkZWQgdG8gY29uZmlnLnhtbCB0byBwcmV2ZW50IGNyYXNoaW5nIHdoZW4gc2VsZWN0aW5nIGxhcmdlIGZpbGVzIG9uIEFuZHJvaWQ6XG4gKiBgYGB4bWxcbiAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICogIDxlZGl0LWNvbmZpZ1xuICogICAgZmlsZT1cImFwcC9zcmMvbWFpbi9BbmRyb2lkTWFuaWZlc3QueG1sXCJcbiAqICAgIG1vZGU9XCJtZXJnZVwiXG4gKiAgICB0YXJnZXQ9XCIvbWFuaWZlc3QvYXBwbGljYXRpb25cIj5cbiAqICAgIDxhcHBsaWNhdGlvbiBhbmRyb2lkOmxhcmdlSGVhcD1cInRydWVcIiAvPlxuICogIDwvZWRpdC1jb25maWc+XG4gKiA8L3BsYXRmb3JtPlxuICogYGBgXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENob29zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2hvb3Nlci1zaW1wbGUtZmlsZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNob29zZXIuZ2V0RmlsZXMoKVxuICogICAudGhlbihmaWxlcyA9PiBjb25zb2xlLmxvZyhmaWxlcyA/IGZpbGVzLm5hbWUgOiAnY2FuY2VsZWQnKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2hvb3NlclJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaW1wbGUtZmlsZS1jaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnY2hvb3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGMtb3NzL2NvcmRvdmEtcGx1Z2luLXNpbXBsZS1maWxlLWNob29zZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2NlcHRdIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgY29udGFpbmluZyBzZWxlY3RlZCBmaWxlJ3NcbiAgICogZGF0YTogTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZpbGVzKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdFtdIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=