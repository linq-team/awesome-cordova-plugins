import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var ServiceDiscovery = /** @class */ (function (_super) {
    __extends(ServiceDiscovery, _super);
    function ServiceDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscovery.prototype.getNetworkServices = function (service) { return cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscovery.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ServiceDiscovery, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    ServiceDiscovery.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ServiceDiscovery });
    ServiceDiscovery.pluginName = "ServiceDiscovery";
    ServiceDiscovery.plugin = "cordova-plugin-discovery";
    ServiceDiscovery.pluginRef = "serviceDiscovery";
    ServiceDiscovery.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscovery.platforms = ["Android", "iOS"];
    ServiceDiscovery = __decorate([], ServiceDiscovery);
    return ServiceDiscovery;
}(AwesomeCordovaNativePlugin));
export { ServiceDiscovery };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ServiceDiscovery, decorators: [{
            type: Injectable
        }], propDecorators: { getNetworkServices: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2VydmljZS1kaXNjb3Zlcnkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQThCdEQsb0NBQTBCOzs7O0lBUTlELDZDQUFrQixhQUFDLE9BQWU7a0hBUnZCLGdCQUFnQjtzSEFBaEIsZ0JBQWdCOzs7Ozs7SUFBaEIsZ0JBQWdCLGtCQUFoQixnQkFBZ0I7MkJBL0I3QjtFQStCc0MsMEJBQTBCO1NBQW5ELGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVOzhCQVNULGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU2VydmljZURpc2NvdmVyeVxuICogQGRlc2NyaXB0aW9uXG4gKiBTaW1wbGUgcGx1Z2luIHRvIGdldCBhbnkgU1NEUCAvIFVQblAgLyBETE5BIHNlcnZpY2Ugb24gYSBsb2NhbCBuZXR3b3JrXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNlcnZpY2VEaXNjb3ZlcnkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2VydmljZS1kaXNjb3ZlcnknO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2VEaXNjb3Zlcnk6IFNlcnZpY2VEaXNjb3ZlcnkpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnNlcnZpY2VEaXNjb3ZlcnkuZ2V0TmV0d29ya1NlcnZpY2VzKCdzc2RwOmFsbCcpXG4gKiAgIC50aGVuKGRldmljZXMgPT4gY29uc29sZS5sb2coZGV2aWNlcykpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2VydmljZURpc2NvdmVyeScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRpc2NvdmVyeScsXG4gIHBsdWdpblJlZjogJ3NlcnZpY2VEaXNjb3ZlcnknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0ZGVybW90dC9jb3Jkb3ZhLXBsdWdpbi1kaXNjb3ZlcnknLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmljZURpc2NvdmVyeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEZpbmRzIGFuZCByZXR1cm5zIG1ldGFkYXRhIGFib3V0IGRldmljZXMgZGlzY292ZXJlZCBvbiB0aGUgbmV0d29yayB2aWEgU1NEUCAvIFVQblAgLyBETE5BXG4gICAqXG4gICAqIEBwYXJhbSBzZXJ2aWNlIHtzdHJpbmd9IFRoZSBzZXJ2aWNlIG5hbWUgdG8gZGlzY292ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldE5ldHdvcmtTZXJ2aWNlcyhzZXJ2aWNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19