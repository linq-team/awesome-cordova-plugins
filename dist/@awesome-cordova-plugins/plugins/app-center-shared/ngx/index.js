import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var AppCenter = /** @class */ (function (_super) {
    __extends(AppCenter, _super);
    function AppCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenter.prototype.getInstallId = function () { return cordova(this, "getInstallId", {}, arguments); };
    AppCenter.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AppCenter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppCenter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AppCenter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppCenter });
    AppCenter.pluginName = "AppCenter";
    AppCenter.plugin = "cordova-plugin-appcenter-shared";
    AppCenter.pluginRef = "AppCenter";
    AppCenter.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-shared";
    AppCenter.platforms = ["Android", "iOS"];
    AppCenter = __decorate([], AppCenter);
    return AppCenter;
}(AwesomeCordovaNativePlugin));
export { AppCenter };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppCenter, decorators: [{
            type: Injectable
        }], propDecorators: { getInstallId: [], setUserId: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1zaGFyZWQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQXNDN0QsNkJBQTBCOzs7O0lBUXZELGdDQUFZO0lBWVosNkJBQVMsYUFBQyxNQUFjOzJHQXBCYixTQUFTOytHQUFULFNBQVM7Ozs7OztJQUFULFNBQVMsa0JBQVQsU0FBUztvQkF2Q3RCO0VBdUMrQiwwQkFBMEI7U0FBNUMsU0FBUzs0RkFBVCxTQUFTO2tCQURyQixVQUFVOzhCQVNULFlBQVksTUFZWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIFNoYXJlZFxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEV4cG9zZXMgYWRkaXRpb25hbCBzaGFyZWQgQVBJcyBmb3IgQXBwIENlbnRlci5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvb3RoZXItYXBpcy9jb3Jkb3ZhXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcENlbnRlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hcHAtY2VudGVyLXNoYXJlZC9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQ2VudGVyU2hhcmVkOiBBcHBDZW50ZXIpIHsgfVxuICpcbiAqIGFzeW5jIGdldEluc3RhbGxJZCgpIHtcbiAqICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmFwcENlbnRlci5nZXRJbnN0YWxsSWQoKTtcbiAqIH1cbiAqXG4gKiBhc3luYyBzZXRVc2VySWQoKSB7XG4gKiAgIHRyeXtcbiAqICAgICBhd2FpdCB0aGlzLmFwcENlbnRlci5zZXRVc2VySWQoJ2ktYW0tam9obicpO1xuICogICB9IGNhdGNoIChlKXtcbiAqICAgICBjb25zb2xlLmxvZyhlKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXNoYXJlZCcsXG4gIHBsdWdpblJlZjogJ0FwcENlbnRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItc2hhcmVkJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcENlbnRlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybnMgQXBwQ2VudGVyIFVVSUQuXG4gICAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6IGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvb3RoZXItYXBpcy9jb3Jkb3ZhI2lkZW50aWZ5LWluc3RhbGxhdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gSW5zdGFsbCBJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnN0YWxsSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgdXNlciBJRCB0aGF0J3MgdXNlZCB0byBhdWdtZW50IGNyYXNoIHJlcG9ydHMuXG4gICAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6IGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvb3RoZXItYXBpcy9jb3Jkb3ZhI2lkZW50aWZ5LXVzZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgRXguIFwieW91ci11c2VyLWlkXCJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19