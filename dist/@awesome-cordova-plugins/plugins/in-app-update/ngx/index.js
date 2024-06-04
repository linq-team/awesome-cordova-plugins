import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var UpdateType;
(function (UpdateType) {
    UpdateType[UpdateType["FLEXIBLE"] = 0] = "FLEXIBLE";
    UpdateType[UpdateType["IMMEDIATE"] = 1] = "IMMEDIATE";
})(UpdateType || (UpdateType = {}));
var InstallStatus;
(function (InstallStatus) {
    InstallStatus[InstallStatus["CANCELED"] = 0] = "CANCELED";
    InstallStatus[InstallStatus["DOWNLOADED"] = 1] = "DOWNLOADED";
    InstallStatus[InstallStatus["DOWNLOADING"] = 2] = "DOWNLOADING";
    InstallStatus[InstallStatus["FAILED"] = 3] = "FAILED";
    InstallStatus[InstallStatus["INSTALLED"] = 4] = "INSTALLED";
    InstallStatus[InstallStatus["INSTALLING"] = 5] = "INSTALLING";
    InstallStatus[InstallStatus["PENDING"] = 6] = "PENDING";
    InstallStatus[InstallStatus["UNKNOWN"] = 7] = "UNKNOWN";
})(InstallStatus || (InstallStatus = {}));
var UpdateAvailability;
(function (UpdateAvailability) {
    UpdateAvailability[UpdateAvailability["DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS"] = 0] = "DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS";
    UpdateAvailability[UpdateAvailability["UNKNOWN"] = 1] = "UNKNOWN";
    UpdateAvailability[UpdateAvailability["UPDATE_AVAILABLE"] = 2] = "UPDATE_AVAILABLE";
    UpdateAvailability[UpdateAvailability["UPDATE_NOT_AVAILABLE"] = 3] = "UPDATE_NOT_AVAILABLE";
})(UpdateAvailability || (UpdateAvailability = {}));
var AppUpdateInfo = /** @class */ (function () {
    function AppUpdateInfo() {
    }
    return AppUpdateInfo;
}());
export { AppUpdateInfo };
var InAppUpdate = /** @class */ (function (_super) {
    __extends(InAppUpdate, _super);
    function InAppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppUpdate.prototype.check = function () { return cordova(this, "check", {}, arguments); };
    InAppUpdate.prototype.update = function (config) { return cordova(this, "update", { "observable": true }, arguments); };
    InAppUpdate.prototype.completeFlexibleUpdate = function () { return cordova(this, "completeFlexibleUpdate", {}, arguments); };
    InAppUpdate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InAppUpdate, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    InAppUpdate.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InAppUpdate });
    InAppUpdate.pluginName = "InAppUpdate";
    InAppUpdate.plugin = "cordova-in-app-update";
    InAppUpdate.pluginRef = "window.plugins.InAppUpdate";
    InAppUpdate.repo = "https://github.com/itsLucario/cordova-app-update-plugin";
    InAppUpdate.platforms = ["Android"];
    InAppUpdate = __decorate([], InAppUpdate);
    return InAppUpdate;
}(AwesomeCordovaNativePlugin));
export { InAppUpdate };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InAppUpdate, decorators: [{
            type: Injectable
        }], propDecorators: { check: [], update: [], completeFlexibleUpdate: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXVwZGF0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRWxDLElBQUssVUFHSjtBQUhELFdBQUssVUFBVTtJQUNiLG1EQUFRLENBQUE7SUFDUixxREFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUhJLFVBQVUsS0FBVixVQUFVLFFBR2Q7QUFFRCxJQUFLLGFBU0o7QUFURCxXQUFLLGFBQWE7SUFDaEIseURBQVEsQ0FBQTtJQUNSLDZEQUFVLENBQUE7SUFDViwrREFBVyxDQUFBO0lBQ1gscURBQU0sQ0FBQTtJQUNOLDJEQUFTLENBQUE7SUFDVCw2REFBVSxDQUFBO0lBQ1YsdURBQU8sQ0FBQTtJQUNQLHVEQUFPLENBQUE7QUFDVCxDQUFDLEVBVEksYUFBYSxLQUFiLGFBQWEsUUFTakI7QUFFRCxJQUFLLGtCQUtKO0FBTEQsV0FBSyxrQkFBa0I7SUFDckIsK0hBQXNDLENBQUE7SUFDdEMsaUVBQU8sQ0FBQTtJQUNQLG1GQUFnQixDQUFBO0lBQ2hCLDJGQUFvQixDQUFBO0FBQ3RCLENBQUMsRUFMSSxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBS3RCOzs7O3dCQWhDRDs7OztJQTJEaUMsK0JBQTBCOzs7O0lBT3pELDJCQUFLO0lBWUwsNEJBQU0sYUFBQyxNQUFnRDtJQVV2RCw0Q0FBc0I7NkdBN0JYLFdBQVc7aUhBQVgsV0FBVzs7Ozs7O0lBQVgsV0FBVyxrQkFBWCxXQUFXO3NCQTNEeEI7RUEyRGlDLDBCQUEwQjtTQUE5QyxXQUFXOzRGQUFYLFdBQVc7a0JBRHZCLFVBQVU7OEJBUVQsS0FBSyxNQVlMLE1BQU0sTUFVTixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5lbnVtIFVwZGF0ZVR5cGUge1xuICBGTEVYSUJMRSxcbiAgSU1NRURJQVRFLFxufVxuXG5lbnVtIEluc3RhbGxTdGF0dXMge1xuICBDQU5DRUxFRCxcbiAgRE9XTkxPQURFRCxcbiAgRE9XTkxPQURJTkcsXG4gIEZBSUxFRCxcbiAgSU5TVEFMTEVELFxuICBJTlNUQUxMSU5HLFxuICBQRU5ESU5HLFxuICBVTktOT1dOLFxufVxuXG5lbnVtIFVwZGF0ZUF2YWlsYWJpbGl0eSB7XG4gIERFVkVMT1BFUl9UUklHR0VSRURfVVBEQVRFX0lOX1BST0dSRVNTLFxuICBVTktOT1dOLFxuICBVUERBVEVfQVZBSUxBQkxFLFxuICBVUERBVEVfTk9UX0FWQUlMQUJMRSxcbn1cblxuY2xhc3MgQXBwVXBkYXRlSW5mbyB7XG4gIHVwZGF0ZVR5cGU6IFVwZGF0ZVR5cGU7XG4gIGluc3RhbGxTdGF0dXM6IEluc3RhbGxTdGF0dXM7XG4gIGF2YWlsYWJsZVZlcnNpb25Db2RlOiBudW1iZXI7XG4gIGJ5dGVzRG93bmxvYWRlZDogbnVtYmVyO1xuICB0b3RhbEJ5dGVzVG9Eb3dubG9hZDogbnVtYmVyO1xuICBjbGllbnRWZXJzaW9uU3RhbGVuZXNzRGF5czogbnVtYmVyO1xuICBwYWNrYWdlTmFtZTogc3RyaW5nO1xuICB1cGRhdGVBdmFpbGFiaWxpdHk6IFVwZGF0ZUF2YWlsYWJpbGl0eTtcbiAgaW5zdGFsbEVycm9yQ29kZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBVcGRhdGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW5nIGVuYWJlbHMgSW4gYXBwIHVwZGF0ZSBGb3IgY29yZG92YS5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcFVwZGF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtaW4tYXBwLXVwZGF0ZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5JbkFwcFVwZGF0ZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pdHNMdWNhcmlvL2NvcmRvdmEtYXBwLXVwZGF0ZS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbkFwcFVwZGF0ZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIElmIHlvdSB3YW50IHRoZSB1c2VyIHRvIGJlIHByb21wdGVkIGFib3V0IG5ldyB2ZXJzaW9uIGluZm9ybWF0aW9uIGJlZm9yZSBpbml0aWF0aW5nIHRoZSB1cGRhdGUsIHlvdSBjYW4gdXNlIGBjaGVja2AgdG8gcmV0cml2ZSB0aGUgbmV3IGFwcCB2ZXJzaW9uIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcHBVcGRhdGVJbmZvPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5ldyBhcHAgdmVyc2lvbiB1cGRhdGUgZGV0YWlsc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVjaygpOiBQcm9taXNlPEFwcFVwZGF0ZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhdGUgVXBkYXRlIEZsb3cgd2l0aCBcIkZMRVhJQkxFXCIgfCBcIklNTUVESUFURVwiIHVwZGF0ZVR5cGVcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0gY29uZmlnLnVwZGF0ZVR5cGVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QXBwVXBkYXRlSW5mbz59IFJldHVybnMgYSBPYnNlcnZhYmxlIGNhbiBiZSBzdWJzY3JpYmVkIHRvIGdldCB1cGRhdGUgaW5zdGFsbCBzdGF0ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHVwZGF0ZShjb25maWc6IHsgdXBkYXRlVHlwZTogJ0ZMRVhJQkxFJyB8ICdJTU1FRElBVEUnIH0pOiBPYnNlcnZhYmxlPEFwcFVwZGF0ZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmxleGlibGUgdXBkYXRlcyBwcm92aWRlIGJhY2tncm91bmQgZG93bmxvYWQuIE9uY2UgZmxleGlibGUgdXBkYXRlIGNvbXBsZXRlcyB0aGUgZG93bmxvYWQgaW4gYmFja2dyb3VuZCwgY29tcGxldGlvbiBvZiB1cGdyYWRlIGNhbiBiZSBpbml0aWF0ZWQgYnkgY2FsbGluZyBgY29tcGxldGVGbGV4aWJsZVVwZGF0ZWAuXG4gICAqXG4gICAqIEByZXR1cm5zIFJldHVybnMgZW1wdHkgcmVzcG9uc2UsIGZpcmUgYW5kIGZvcmdldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb21wbGV0ZUZsZXhpYmxlVXBkYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=