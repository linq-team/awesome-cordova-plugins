import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var LowMemory = /** @class */ (function (_super) {
    __extends(LowMemory, _super);
    function LowMemory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowMemory.prototype.generateLowMemory = function () { return cordova(this, "generateLowMemory", {}, arguments); };
    LowMemory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LowMemory, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    LowMemory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LowMemory });
    LowMemory.pluginName = "LowMemory";
    LowMemory.plugin = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemory.pluginRef = "LowMemory";
    LowMemory.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemory.platforms = ["Android", "iOS"];
    LowMemory = __decorate([], LowMemory);
    return LowMemory;
}(AwesomeCordovaNativePlugin));
export { LowMemory };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LowMemory, decorators: [{
            type: Injectable
        }], propDecorators: { generateLowMemory: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1sb3ctbWVtb3J5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUE0QjdELDZCQUEwQjs7OztJQVF2RCxxQ0FBaUI7MkdBUk4sU0FBUzsrR0FBVCxTQUFTOzs7Ozs7SUFBVCxTQUFTLGtCQUFULFNBQVM7b0JBN0J0QjtFQTZCK0IsMEJBQTBCO1NBQTVDLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTs4QkFTVCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEFwcCBDZW50ZXIgTG93IE1lbW9yeVxuICogQGRlc2NyaXB0aW9uXG4gKiBHZW5lcmF0ZXMgYSBsb3cgbWVtb3J5IHdhcm5pbmcuXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb3dNZW1vcnkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWNlbnRlci1sb3ctbWVtb3J5L25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb3dNZW1vcnk6IExvd01lbW9yeSkgeyB9XG4gKlxuICogYXN5bmMgd2FybmluZygpIHtcbiAqICAgYXdhaXQgdGhpcy5sb3dNZW1vcnkuZ2VuZXJhdGVMb3dNZW1vcnkoKTtcbiAqIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvd01lbW9yeScsXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1nZW5lcmF0ZS1sb3ctbWVtb3J5JyxcbiAgcGx1Z2luUmVmOiAnTG93TWVtb3J5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1nZW5lcmF0ZS1sb3ctbWVtb3J5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvd01lbW9yeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIGxvdyBtZW1vcnkgd2FybmluZy5cbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWdlbmVyYXRlLWxvdy1tZW1vcnlcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlbmVyYXRlTG93TWVtb3J5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19