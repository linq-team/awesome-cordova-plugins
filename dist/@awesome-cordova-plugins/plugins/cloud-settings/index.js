var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var CloudSettingsOriginal = /** @class */ (function (_super) {
    __extends(CloudSettingsOriginal, _super);
    function CloudSettingsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettingsOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    CloudSettingsOriginal.prototype.save = function (settings, overwrite) { return cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettingsOriginal.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CloudSettingsOriginal.prototype.onRestore = function (handler) { return cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettingsOriginal.prototype.enableDebug = function () { return cordova(this, "enableDebug", {}, arguments); };
    CloudSettingsOriginal.pluginName = "CloudSettings";
    CloudSettingsOriginal.plugin = "@marysuon/cordova-plugin-cloud-settings";
    CloudSettingsOriginal.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettingsOriginal.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettingsOriginal.install = "ionic cordova plugin add @marysuon/cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettingsOriginal.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettingsOriginal.platforms = ["Android", "iOS"];
    return CloudSettingsOriginal;
}(AwesomeCordovaNativePlugin));
var CloudSettings = new CloudSettingsOriginal();
export { CloudSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2xvdWQtc2V0dGluZ3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUF1Q3pELGlDQUEwQjs7OztJQU8zRCw4QkFBTTtJQWdCTiw0QkFBSSxhQUFDLFFBQWEsRUFBRSxTQUFtQjtJQVV2Qyw0QkFBSTtJQVVKLGlDQUFTLGFBQUMsT0FBaUI7SUFRM0IsbUNBQVc7Ozs7Ozs7O3dCQTNGYjtFQXdDbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIENsb3VkIFNldHRpbmdzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN0b3JlcyBhcHAgc2V0dGluZ3MgaW4gY2xvdWQgc3RvcmFnZSBzbyBpZiB0aGUgdXNlciByZS1pbnN0YWxscyB0aGUgYXBwIG9yIGluc3RhbGxzIGl0IG9uIGEgZGlmZmVyZW50IGRldmljZSwgdGhlIHNldHRpbmdzIHdpbGwgYmUgcmVzdG9yZWQgYW5kIGF2YWlsYWJsZSBpbiB0aGUgbmV3IGluc3RhbGxhdGlvbi5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2xvdWRTZXR0aW5ncyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jbG91ZC1zZXR0aW5ncy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsb3VkU2V0dGluZ3M6IENsb3VkU2V0dGluZ3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5leGlzdHMoKVxuICogICAudGhlbigoZXhpc3RzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHNldHRpbmdzIGV4aXN0OiBcIiArIGV4aXN0cykgKVxuICpcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5sb2FkKClcbiAqICAgLnRoZW4oKHNldHRpbmdzOiBhbnkpID0+IHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncylcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5jbG91ZFNldHRpbmdzLnNhdmUodGhpcy5zZXR0aW5ncylcbiAqICAgLnRoZW4oKHNhdmVkU2V0dGluZ3M6IGFueSkgPT4gY29uc29sZS5sb2coXCJTYXZlZCBzZXR0aW5nczogXCIgKyBKU09OLnN0cmluZ2lmeShzYXZlZFNldHRpbmdzKSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nsb3VkU2V0dGluZ3MnLFxuICBwbHVnaW46ICdAbWFyeXN1b24vY29yZG92YS1wbHVnaW4tY2xvdWQtc2V0dGluZ3MnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbi5jbG91ZHNldHRpbmdzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1wbHVnaW4tY2xvdWQtc2V0dGluZ3MnLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgQG1hcnlzdW9uL2NvcmRvdmEtcGx1Z2luLWNsb3VkLXNldHRpbmdzIC0tdmFyaWFibGUgQU5EUk9JRF9CQUNLVVBfU0VSVklDRV9LRVk9bXlhcGlrZXknLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FORFJPSURfQkFDS1VQX1NFUlZJQ0VfS0VZJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG91ZFNldHRpbmdzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGFueSBzdG9yZWQgY2xvdWQgc2V0dGluZ3MgY3VycmVudGx5IGV4aXN0IGZvciB0aGUgY3VycmVudCB1c2VyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gV2lsbCBiZSBwYXNzZWQgYSBib29sZWFuIGZsYWcgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYW4gc3RvcmUgc2V0dGluZ3MgZXhpc3QgZm9yIHRoZSB1c2VyLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBleGlzdHMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBzZXR0aW5ncyB0byBjbG91ZCBiYWNrdXAuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5ncyAtIGEgSlNPTiBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIHRoZSB1c2VyIHNldHRpbmdzIHRvIHNhdmUgdG8gY2xvdWQgYmFja3VwLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvdmVyd3JpdGVdIC0gKG9wdGlvbmFsKSBpZiB0cnVlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIHJlcGxhY2VkIHJhdGhlciB0aGFuIHVwZGF0ZWQuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKiBJZiBmYWxzZSwgZXhpc3Rpbmcgc2V0dGluZ3Mgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgbmV3IHNldHRpbmdzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBXaWxsIGJlIHBhc3NlZCBhIHNpbmdsZSBvYmplY3QgYXJndW1lbnQgd2hpY2ggY29udGFpbnMgdGhlIHNhdmVkIHNldHRpbmdzIGFzIGEgSlNPTiBvYmplY3QuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNhdmUoc2V0dGluZ3M6IGFueSwgb3ZlcndyaXRlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBjdXJyZW50IHNldHRpbmdzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBXaWxsIGJlIHBhc3NlZCBhIHNpbmdsZSBvYmplY3QgYXJndW1lbnQgd2hpY2ggY29udGFpbnMgdGhlIHNhdmVkIHNldHRpbmdzIGFzIGEgSlNPTiBvYmplY3QuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaWYvd2hlbiBzZXR0aW5ncyBvbiB0aGUgZGV2aWNlIGhhdmUgYmVlbiB1cGRhdGVkIGZyb20gdGhlIGNsb3VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gZGV2aWNlIHNldHRpbmdzIGhhdmUgYmVlbiB1cGRhdGVkIGZyb20gdGhlIGNsb3VkLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG9uUmVzdG9yZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogT3V0cHV0cyB2ZXJib3NlIGxvZyBtZXNzYWdlcyBmcm9tIHRoZSBuYXRpdmUgcGx1Z2luIGNvbXBvbmVudHMgdG8gdGhlIEpTIGNvbnNvbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmFibGVEZWJ1ZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==