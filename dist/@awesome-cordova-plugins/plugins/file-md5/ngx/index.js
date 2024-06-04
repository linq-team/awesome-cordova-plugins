import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var FileMD5 = /** @class */ (function (_super) {
    __extends(FileMD5, _super);
    function FileMD5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileMD5.prototype.file = function (fileEntry) { return cordova(this, "file", {}, arguments); };
    FileMD5.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileMD5, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FileMD5.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileMD5 });
    FileMD5.pluginName = "FileMD5";
    FileMD5.plugin = "cordova-plugin-file-md5";
    FileMD5.pluginRef = "md5chksum";
    FileMD5.repo = "https://github.com/mramonlopez/cordova-plugin-file-md5";
    FileMD5.platforms = ["Android", "iOS"];
    FileMD5 = __decorate([], FileMD5);
    return FileMD5;
}(AwesomeCordovaNativePlugin));
export { FileMD5 };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileMD5, decorators: [{
            type: Injectable
        }], propDecorators: { file: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1tZDUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQThCL0QsMkJBQTBCOzs7O0lBUXJELHNCQUFJLGFBQUMsU0FBYzt5R0FSUixPQUFPOzZHQUFQLE9BQU87Ozs7OztJQUFQLE9BQU8sa0JBQVAsT0FBTztrQkEvQnBCO0VBK0I2QiwwQkFBMEI7U0FBMUMsT0FBTzs0RkFBUCxPQUFPO2tCQURuQixVQUFVOzhCQVNULElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZpbGUgTUQ1XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHJlYWRzIGxhcmdlIGZpbGVzIGluIGNodW5rcyBhbmQgYnVpbGQgdGhlIG1kNXN1bSBpbmNyZW1lbnRhbGx5LlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlTUQ1IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUtbWQ1L254JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlTUQ1OiBGaWxlTUQ1KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5maWxlTUQ1LmZpbGUoZmlsZUVudHJ5KVxuICogICAudGhlbigobWQ1c3VtOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKG1kNXN1bSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVNRDUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLW1kNScsXG4gIHBsdWdpblJlZjogJ21kNWNoa3N1bScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbXJhbW9ubG9wZXovY29yZG92YS1wbHVnaW4tZmlsZS1tZDUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1ENSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCBNRDUgY2hlY2tzdW0gZnJvbSBhIGZpbGVcbiAgICpcbiAgICogQHBhcmFtIGZpbGVFbnRyeSB7RmlsZUVudHJ5fSBGaWxlIGVudHJ5IGlzIGEgb3JnLmFwYWNoZS5jb3Jkb3ZhLmZpbGUuRmlsZUVudHJ5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2Ugd2l0aCBtZDVzdW1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmlsZShmaWxlRW50cnk6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=