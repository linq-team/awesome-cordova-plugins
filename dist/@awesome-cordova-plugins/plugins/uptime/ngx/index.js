import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Uptime = /** @class */ (function (_super) {
    __extends(Uptime, _super);
    function Uptime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uptime.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    Uptime.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Uptime, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Uptime.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Uptime });
    Uptime.pluginName = "Uptime";
    Uptime.plugin = "cordova-plugin-uptime";
    Uptime.pluginRef = "Uptime";
    Uptime.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    Uptime.platforms = ["Android", "iOS"];
    Uptime = __decorate([], Uptime);
    return Uptime;
}(AwesomeCordovaNativePlugin));
export { Uptime };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Uptime, decorators: [{
            type: Injectable
        }], propDecorators: { getUptime: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdXB0aW1lL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUE0QmhFLDBCQUEwQjs7OztJQVFwRCwwQkFBUyxhQUFDLGdCQUF5Qjt3R0FSeEIsTUFBTTs0R0FBTixNQUFNOzs7Ozs7SUFBTixNQUFNLGtCQUFOLE1BQU07aUJBN0JuQjtFQTZCNEIsMEJBQTBCO1NBQXpDLE1BQU07NEZBQU4sTUFBTTtrQkFEbEIsVUFBVTs4QkFTVCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBVcHRpbWVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgdGhlIHRpbWUgc3BlbnQgaW4gbWlsbGlzZWNvbmRzIHNpbmNlIGJvb3QgKHVwdGltZSkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFVwdGltZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy91cHRpbWUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwdGltZTogVXB0aW1lKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnVwdGltZS5nZXRVcHRpbWUoaW5jbHVkZURlZXBTbGVlcClcbiAqICAgLnRoZW4odXB0aW1lID0+IGNvbnNvbGUubG9nKHVwdGltZSkpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1VwdGltZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXVwdGltZScsXG4gIHBsdWdpblJlZjogJ1VwdGltZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vczFsdml1L2NvcmRvdmEtcGx1Z2luLXVwdGltZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcHRpbWUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybiBzeXN0ZW0gdXB0aW1lXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZURlZXBTbGVlcCBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHN5c3RlbSBkZWVwIHNsZWVwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmV0dXJuIHRoZSB1cHRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVwdGltZShpbmNsdWRlRGVlcFNsZWVwOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==