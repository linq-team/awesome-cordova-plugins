import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var CloudSettings = /** @class */ (function (_super) {
    __extends(CloudSettings, _super);
    function CloudSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettings.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    CloudSettings.prototype.save = function (settings, overwrite) { return cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettings.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CloudSettings.prototype.onRestore = function (handler) { return cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettings.prototype.enableDebug = function () { return cordova(this, "enableDebug", {}, arguments); };
    CloudSettings.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CloudSettings, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    CloudSettings.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CloudSettings });
    CloudSettings.pluginName = "CloudSettings";
    CloudSettings.plugin = "@marysuon/cordova-plugin-cloud-settings";
    CloudSettings.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettings.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettings.install = "ionic cordova plugin add @marysuon/cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettings.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettings.platforms = ["Android", "iOS"];
    CloudSettings = __decorate([], CloudSettings);
    return CloudSettings;
}(AwesomeCordovaNativePlugin));
export { CloudSettings };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CloudSettings, decorators: [{
            type: Injectable
        }], propDecorators: { exists: [], save: [], load: [], onRestore: [], enableDebug: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2xvdWQtc2V0dGluZ3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQXVDekQsaUNBQTBCOzs7O0lBTzNELDhCQUFNO0lBZ0JOLDRCQUFJLGFBQUMsUUFBYSxFQUFFLFNBQW1CO0lBVXZDLDRCQUFJO0lBVUosaUNBQVMsYUFBQyxPQUFpQjtJQVEzQixtQ0FBVzsrR0FuREEsYUFBYTttSEFBYixhQUFhOzs7Ozs7OztJQUFiLGFBQWEsa0JBQWIsYUFBYTt3QkF4QzFCO0VBd0NtQywwQkFBMEI7U0FBaEQsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzhCQVFULE1BQU0sTUFnQk4sSUFBSSxNQVVKLElBQUksTUFVSixTQUFTLE1BUVQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2xvdWQgU2V0dGluZ3NcbiAqIEBkZXNjcmlwdGlvblxuICogU3RvcmVzIGFwcCBzZXR0aW5ncyBpbiBjbG91ZCBzdG9yYWdlIHNvIGlmIHRoZSB1c2VyIHJlLWluc3RhbGxzIHRoZSBhcHAgb3IgaW5zdGFsbHMgaXQgb24gYSBkaWZmZXJlbnQgZGV2aWNlLCB0aGUgc2V0dGluZ3Mgd2lsbCBiZSByZXN0b3JlZCBhbmQgYXZhaWxhYmxlIGluIHRoZSBuZXcgaW5zdGFsbGF0aW9uLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDbG91ZFNldHRpbmdzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Nsb3VkLXNldHRpbmdzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xvdWRTZXR0aW5nczogQ2xvdWRTZXR0aW5ncykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5jbG91ZFNldHRpbmdzLmV4aXN0cygpXG4gKiAgIC50aGVuKChleGlzdHM6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKFwiU2F2ZWQgc2V0dGluZ3MgZXhpc3Q6IFwiICsgZXhpc3RzKSApXG4gKlxuICogdGhpcy5jbG91ZFNldHRpbmdzLmxvYWQoKVxuICogICAudGhlbigoc2V0dGluZ3M6IGFueSkgPT4gdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmNsb3VkU2V0dGluZ3Muc2F2ZSh0aGlzLnNldHRpbmdzKVxuICogICAudGhlbigoc2F2ZWRTZXR0aW5nczogYW55KSA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHNldHRpbmdzOiBcIiArIEpTT04uc3RyaW5naWZ5KHNhdmVkU2V0dGluZ3MpKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2xvdWRTZXR0aW5ncycsXG4gIHBsdWdpbjogJ0BtYXJ5c3Vvbi9jb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2luLmNsb3Vkc2V0dGluZ3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncycsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBAbWFyeXN1b24vY29yZG92YS1wbHVnaW4tY2xvdWQtc2V0dGluZ3MgLS12YXJpYWJsZSBBTkRST0lEX0JBQ0tVUF9TRVJWSUNFX0tFWT1teWFwaWtleScsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQU5EUk9JRF9CQUNLVVBfU0VSVklDRV9LRVknXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsb3VkU2V0dGluZ3MgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYW55IHN0b3JlZCBjbG91ZCBzZXR0aW5ncyBjdXJyZW50bHkgZXhpc3QgZm9yIHRoZSBjdXJyZW50IHVzZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBXaWxsIGJlIHBhc3NlZCBhIGJvb2xlYW4gZmxhZyB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhbiBzdG9yZSBzZXR0aW5ncyBleGlzdCBmb3IgdGhlIHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGV4aXN0cygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHNldHRpbmdzIHRvIGNsb3VkIGJhY2t1cC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzIC0gYSBKU09OIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgdGhlIHVzZXIgc2V0dGluZ3MgdG8gc2F2ZSB0byBjbG91ZCBiYWNrdXAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZV0gLSAob3B0aW9uYWwpIGlmIHRydWUsIGV4aXN0aW5nIHNldHRpbmdzIHdpbGwgYmUgcmVwbGFjZWQgcmF0aGVyIHRoYW4gdXBkYXRlZC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqIElmIGZhbHNlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBuZXcgc2V0dGluZ3MgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2F2ZShzZXR0aW5nczogYW55LCBvdmVyd3JpdGU/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIGN1cnJlbnQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpZi93aGVuIHNldHRpbmdzIG9uIHRoZSBkZXZpY2UgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiBkZXZpY2Ugc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25SZXN0b3JlKGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBPdXRwdXRzIHZlcmJvc2UgbG9nIG1lc3NhZ2VzIGZyb20gdGhlIG5hdGl2ZSBwbHVnaW4gY29tcG9uZW50cyB0byB0aGUgSlMgY29uc29sZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZURlYnVnKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19