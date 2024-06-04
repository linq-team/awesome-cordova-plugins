import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var PowerManagement = /** @class */ (function (_super) {
    __extends(PowerManagement, _super);
    function PowerManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerManagement.prototype.acquire = function () { return cordova(this, "acquire", {}, arguments); };
    PowerManagement.prototype.dim = function () { return cordova(this, "dim", {}, arguments); };
    PowerManagement.prototype.release = function () { return cordova(this, "release", {}, arguments); };
    PowerManagement.prototype.setReleaseOnPause = function (set) { return cordova(this, "setReleaseOnPause", {}, arguments); };
    PowerManagement.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PowerManagement, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    PowerManagement.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PowerManagement });
    PowerManagement.pluginName = "PowerManagement";
    PowerManagement.plugin = "cordova-plugin-powermanagement-orig";
    PowerManagement.pluginRef = "powerManagement";
    PowerManagement.repo = "https://github.com/Viras-/cordova-plugin-powermanagement";
    PowerManagement.platforms = ["Android", "iOS"];
    PowerManagement = __decorate([], PowerManagement);
    return PowerManagement;
}(AwesomeCordovaNativePlugin));
export { PowerManagement };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PowerManagement, decorators: [{
            type: Injectable
        }], propDecorators: { acquire: [], dim: [], release: [], setReleaseOnPause: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcG93ZXItbWFuYWdlbWVudC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBNEJ2RCxtQ0FBMEI7Ozs7SUFNN0QsaUNBQU87SUFTUCw2QkFBRztJQVNILGlDQUFPO0lBV1AsMkNBQWlCLGFBQUMsR0FBWTtpSEFuQ25CLGVBQWU7cUhBQWYsZUFBZTs7Ozs7O0lBQWYsZUFBZSxrQkFBZixlQUFlOzBCQTdCNUI7RUE2QnFDLDBCQUEwQjtTQUFsRCxlQUFlOzRGQUFmLGVBQWU7a0JBRDNCLFVBQVU7OEJBT1QsT0FBTyxNQVNQLEdBQUcsTUFTSCxPQUFPLE1BV1AsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbi8qKlxuICogQG5hbWUgUG93ZXIgTWFuYWdlbWVudFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgUG93ZXJNYW5hZ2VtZW50IHBsdWdpbiBvZmZlcnMgYWNjZXNzIHRvIHRoZSBkZXZpY2VzIHBvd2VyLW1hbmFnZW1lbnQgZnVuY3Rpb25hbGl0eS5cbiAqIEl0IHNob3VsZCBiZSB1c2VkIGZvciBhcHBsaWNhdGlvbnMgd2hpY2gga2VlcCBydW5uaW5nIGZvciBhIGxvbmcgdGltZSB3aXRob3V0IGFueSB1c2VyIGludGVyYWN0aW9uLlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IFBvd2VyTWFuYWdlbWVudCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9wb3dlci1tYW5hZ2VtZW50L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwb3dlck1hbmFnZW1lbnQ6IFBvd2VyTWFuYWdlbWVudCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5wb3dlck1hbmFnZW1lbnQuYWNxdWlyZSgpXG4gKiAgIC50aGVuKG9uU3VjY2VzcylcbiAqICAgLmNhdGNoKG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Bvd2VyTWFuYWdlbWVudCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXBvd2VybWFuYWdlbWVudC1vcmlnJyxcbiAgcGx1Z2luUmVmOiAncG93ZXJNYW5hZ2VtZW50JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WaXJhcy0vY29yZG92YS1wbHVnaW4tcG93ZXJtYW5hZ2VtZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvd2VyTWFuYWdlbWVudCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEFjcXVpcmUgYSB3YWtlbG9jayBieSBjYWxsaW5nIHRoaXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjcXVpcmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBhY3F1aXJlcyBhIHBhcnRpYWwgd2FrZWxvY2ssIGFsbG93aW5nIHRoZSBzY3JlZW4gdG8gYmUgZGltbWVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaW0oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVsZWFzZSB0aGUgd2FrZWxvY2suIEl0J3MgaW1wb3J0YW50IHRvIGRvIHRoaXMgd2hlbiB5b3UncmUgZmluaXNoZWQgd2l0aCB0aGUgd2FrZWxvY2ssIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGJhdHRlcnkgZHJhaW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbGVhc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIHBsdWdpbiB3aWxsIGF1dG9tYXRpY2FsbHkgcmVsZWFzZSBhIHdha2Vsb2NrIHdoZW4geW91ciBhcHAgaXMgcGF1c2VkIChlLmcuIHdoZW4gdGhlIHNjcmVlbiBpcyB0dXJuZWQgb2ZmLCBvciB0aGUgdXNlciBzd2l0Y2hlcyB0byBhbm90aGVyIGFwcCkuXG4gICAqIEl0IHdpbGwgcmVhY3F1aXJlIHRoZSB3YWtlbG9jayB1cG9uIGFwcCByZXN1bWUuIElmIHlvdSB3b3VsZCBwcmVmZXIgdG8gZGlzYWJsZSB0aGlzIGJlaGF2aW91ciwgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHNldCB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmVsZWFzZU9uUGF1c2Uoc2V0OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==