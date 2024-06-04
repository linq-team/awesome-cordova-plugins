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
var NetworkInterfaceOriginal = /** @class */ (function (_super) {
    __extends(NetworkInterfaceOriginal, _super);
    function NetworkInterfaceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterfaceOriginal.prototype.getWiFiIPAddress = function () { return cordova(this, "getWiFiIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getCarrierIPAddress = function () { return cordova(this, "getCarrierIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getHttpProxyInformation = function (url) { return cordova(this, "getHttpProxyInformation", {}, arguments); };
    NetworkInterfaceOriginal.pluginName = "NetworkInterface";
    NetworkInterfaceOriginal.plugin = "cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.pluginRef = "networkinterface";
    NetworkInterfaceOriginal.repo = "https://github.com/salbahra/cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows", "Windows Phone"];
    return NetworkInterfaceOriginal;
}(AwesomeCordovaNativePlugin));
var NetworkInterface = new NetworkInterfaceOriginal();
export { NetworkInterface };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0d29yay1pbnRlcmZhY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFtQ3RELG9DQUEwQjs7OztJQU85RCwyQ0FBZ0I7SUFVaEIsOENBQW1CO0lBWW5CLGtEQUF1QixhQUFDLEdBQVc7Ozs7OzsyQkFqRXJDO0VBb0NzQywwQkFBMEI7U0FBbkQsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBOZXR3b3JrIEludGVyZmFjZVxuICogQGRlc2NyaXB0aW9uXG4gKiBOZXR3b3JrIGludGVyZmFjZSBpbmZvcm1hdGlvbiBwbHVnaW4gZm9yIENvcmRvdmEvUGhvbmVHYXAgdGhhdCBzdXBwb3J0cyBBbmRyb2lkLCBCbGFja2JlcnJ5IDEwLCBCcm93c2VyLCBpT1MsIGFuZCBXaW5kb3dzIFBob25lIDguXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbmV0d29yay1pbnRlcmZhY2Uvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3RvciggcHJpdmF0ZSBuZXR3b3JrSW50ZXJmYWNlOiBOZXR3b3JrSW50ZXJmYWNlICkge1xuICpcbiAqICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldFdpRmlJUEFkZHJlc3MoKVxuICogICAgIC50aGVuKGFkZHJlc3MgPT4gY29uc29sZS5pbmZvKGBJUDogJHthZGRyZXNzLmlwfSwgU3VibmV0OiAke2FkZHJlc3Muc3VibmV0fWApKVxuICogICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gZ2V0IElQOiAke2Vycm9yfWApKTtcbiAqXG4gKiAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRDYXJyaWVySVBBZGRyZXNzKClcbiAqICAgICAudGhlbihhZGRyZXNzID0+IGNvbnNvbGUuaW5mbyhgSVA6ICR7YWRkcmVzcy5pcH0sIFN1Ym5ldDogJHthZGRyZXNzLnN1Ym5ldH1gKSlcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBJUDogJHtlcnJvcn1gKSk7XG4gKlxuICogICBjb25zdCB1cmwgPSAnd3d3LmdpdGh1Yi5jb20nO1xuICogICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0SHR0cFByb3h5SW5mb3JtYXRpb24odXJsKVxuICogICAgIC50aGVuKHByb3h5ID0+IGNvbnNvbGUuaW5mbyhgVHlwZTogJHtwcm94eS50eXBlfSwgSG9zdDogJHtwcm94eS5ob3N0fSwgUG9ydDogJHtwcm94eS5wb3J0fWApKVxuICogICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gZ2V0IHByb3h5IGluZm86ICR7ZXJyb3J9YCkpO1xuICogfVxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmV0d29ya0ludGVyZmFjZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5ldHdvcmtpbnRlcmZhY2UnLFxuICBwbHVnaW5SZWY6ICduZXR3b3JraW50ZXJmYWNlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYWxiYWhyYS9jb3Jkb3ZhLXBsdWdpbi1uZXR3b3JraW50ZXJmYWNlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0d29ya0ludGVyZmFjZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIFdpRmkgSVAgYWRkcmVzc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIElQIGFkZHJlc3MgaW5mb3JtYXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFdpRmlJUEFkZHJlc3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgd2lyZWxlc3MgY2FycmllciBJUCBhZGRyZXNzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgSVAgYWRkcmVzcyBpbmZvcm1hdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q2FycmllcklQQWRkcmVzcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSByZWxldmFudCBwcm94aWVzIGZvciB0aGUgcGFzc2VkIFVSTCBpbiBvcmRlciBvZiBhcHBsaWNhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3VybH0gbWVzc2FnZSAgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheS5cbiAgICogQHBhcmFtIHVybFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHByb3h5IGluZm9ybWF0aW9uLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRIdHRwUHJveHlJbmZvcm1hdGlvbih1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=