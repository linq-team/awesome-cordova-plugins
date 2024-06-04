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
var UniqueDeviceIDOriginal = /** @class */ (function (_super) {
    __extends(UniqueDeviceIDOriginal, _super);
    function UniqueDeviceIDOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniqueDeviceIDOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    UniqueDeviceIDOriginal.pluginName = "UniqueDeviceID";
    UniqueDeviceIDOriginal.plugin = "cordova-plugin-uniquedeviceid";
    UniqueDeviceIDOriginal.pluginRef = "window.plugins.uniqueDeviceID";
    UniqueDeviceIDOriginal.repo = "https://github.com/Paldom/UniqueDeviceID";
    UniqueDeviceIDOriginal.install = "";
    UniqueDeviceIDOriginal.installVariables = [];
    UniqueDeviceIDOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return UniqueDeviceIDOriginal;
}(AwesomeCordovaNativePlugin));
var UniqueDeviceID = new UniqueDeviceIDOriginal();
export { UniqueDeviceID };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdW5pcXVlLWRldmljZS1pZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCeEQsa0NBQTBCOzs7O0lBTTVELDRCQUFHOzs7Ozs7Ozt5QkF0Q0w7RUFnQ29DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBVbmlxdWUgRGV2aWNlIElEXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb2R1Y2VzIGEgdW5pcXVlLCBjcm9zcy1pbnN0YWxsLCBhcHAtc3BlY2lmaWMgZGV2aWNlIGlkLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVW5pcXVlRGV2aWNlSUQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdW5pcXVlLWRldmljZS1pZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdW5pcXVlRGV2aWNlSUQ6IFVuaXF1ZURldmljZUlEKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnVuaXF1ZURldmljZUlELmdldCgpXG4gKiAgIC50aGVuKCh1dWlkOiBhbnkpID0+IGNvbnNvbGUubG9nKHV1aWQpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVW5pcXVlRGV2aWNlSUQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi11bmlxdWVkZXZpY2VpZCcsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLnVuaXF1ZURldmljZUlEJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vVW5pcXVlRGV2aWNlSUQnLFxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbmlxdWVEZXZpY2VJRCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldHMgYSB1bmlxdWUsIGNyb3NzLWluc3RhbGwsIGFwcC1zcGVjaWZpYyBkZXZpY2UgaWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19