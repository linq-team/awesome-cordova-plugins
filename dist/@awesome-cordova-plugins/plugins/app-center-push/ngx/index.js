import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var AppCenterPush = /** @class */ (function (_super) {
    __extends(AppCenterPush, _super);
    function AppCenterPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPush.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPush.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterPush.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterPush.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppCenterPush, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AppCenterPush.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppCenterPush });
    AppCenterPush.pluginName = "AppCenterPush";
    AppCenterPush.plugin = "cordova-plugin-appcenter-push";
    AppCenterPush.pluginRef = "AppCenter.Push";
    AppCenterPush.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPush.platforms = ["Android", "iOS"];
    AppCenterPush = __decorate([], AppCenterPush);
    return AppCenterPush;
}(AwesomeCordovaNativePlugin));
export { AppCenterPush };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppCenterPush, decorators: [{
            type: Injectable
        }], propDecorators: { addEventListener: [], isEnabled: [], setEnabled: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQWdDQyxpQ0FBMEI7Ozs7SUFXM0Qsd0NBQWdCLGFBQUMsU0FBaUI7SUFTbEMsaUNBQVM7SUFXVCxrQ0FBVSxhQUFDLFlBQXFCOytHQS9CckIsYUFBYTttSEFBYixhQUFhOzs7Ozs7SUFBYixhQUFhLGtCQUFiLGFBQWE7d0JBbEMxQjtFQWtDbUMsMEJBQTBCO1NBQWhELGFBQWE7NEZBQWIsYUFBYTtrQkFEekIsVUFBVTs4QkFZVCxnQkFBZ0IsTUFTaEIsU0FBUyxNQVdULFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEFwcCBDZW50ZXIgUHVzaFxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL3B1c2gvY29yZG92YVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBDZW50ZXJQdXNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC1jZW50ZXItcHVzaC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENlbnRlclB1c2g6IEFwcENlbnRlclB1c2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYXBwQ2VudGVyUHVzaC5zZXRFbmFibGVkKHRydWUpLnRoZW4oKCkgPT4ge1xuICogICAgdGhpcy5hcHBDZW50ZXJQdXNoLmFkZEV2ZW50TGlzdGVuZXIoJ015IEV2ZW50Jykuc3Vic2NyaWJlKHB1c2hOb3RpZmljYXRpb24gPT4ge1xuICogICAgICAgIGNvbnNvbGUubG9nKCdSZWNpdmVkIHB1c2ggbm90aWZpY2F0aW9uJywgcHVzaE5vdGlmaWNhdGlvbik7XG4gKiAgICB9KTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcENlbnRlclB1c2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItcHVzaCcsXG4gIHBsdWdpblJlZjogJ0FwcENlbnRlci5QdXNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1wdXNoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcENlbnRlclB1c2ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYW4gZXZlbnRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICB9KVxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIEFwcCBDZW50ZXIgUHVzaCBpcyBlbmFibGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIEFwcCBDZW50ZXIgUHVzaCBhdCBydW50aW1lXG4gICAqXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IHNob3VsZEVuYWJsZSBTZXQgdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEVuYWJsZWQoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=