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
var AndroidNotchOriginal = /** @class */ (function (_super) {
    __extends(AndroidNotchOriginal, _super);
    function AndroidNotchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidNotchOriginal.prototype.hasCutout = function () { return cordova(this, "hasCutout", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetTop = function () { return cordova(this, "getInsetTop", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetRight = function () { return cordova(this, "getInsetRight", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetBottom = function () { return cordova(this, "getInsetBottom", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetLeft = function () { return cordova(this, "getInsetLeft", {}, arguments); };
    AndroidNotchOriginal.pluginName = "AndroidNotch";
    AndroidNotchOriginal.plugin = "cordova-plugin-android-notch";
    AndroidNotchOriginal.pluginRef = "AndroidNotch";
    AndroidNotchOriginal.repo = "https://github.com/tobspr/cordova-plugin-android-notch.git";
    AndroidNotchOriginal.platforms = ["Android"];
    return AndroidNotchOriginal;
}(AwesomeCordovaNativePlugin));
var AndroidNotch = new AndroidNotchOriginal();
export { AndroidNotch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1ub3RjaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdEMUQsZ0NBQTBCOzs7O0lBTzFELGdDQUFTO0lBVVQsa0NBQVc7SUFVWCxvQ0FBYTtJQVViLHFDQUFjO0lBVWQsbUNBQVk7Ozs7Ozt1QkFoR2Q7RUFpRGtDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBbmRyb2lkIE5vdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGVuYWJsZXMgZGV2ZWxvcGVycyB0byBnZXQgdGhlIGN1dG91dCBhbmQgYW5kcm9pZCBkZXZpY2VzIGluc2V0IHNpemVzXG4gKiBJdCBpcyBiYXNlZCBvbiB0aGUgY29yZG92YSBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEB0b2JzcHI6IGh0dHBzOi8vZ2l0aHViLmNvbS90b2JzcHIvY29yZG92YS1wbHVnaW4tYW5kcm9pZC1ub3RjaFxuICogVGhpcyBwbHVnaW4gd29ya3Mgb24gYWxsIGFuZHJvaWQgdmVyc2lvbnMsIGJ1dCB3ZSBjYW4gb25seSBkZXRlY3Qgbm90Y2hlcyBzdGFydGluZyBmcm9tIEFuZHJvaWQgOS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQW5kcm9pZE5vdGNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FuZHJvaWQtbm90Y2gvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbmRyb2lkTm90Y2g6IEFuZHJvaWROb3RjaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmhhc0N1dG91dCgpXG4gKiAgICAudGhlbigocHg6IG51bWJlcikgPT4gY29uc29sZS5sb2coJ0luc2V0IHNpemU6ICcpLCBweClcbiAqICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcikpXG4gKlxuICogdGhpcy5hbmRyb2lkTm90Y2guZ2V0SW5zZXRUb3AoKVxuICogICAgLnRoZW4oKHB4OiBudW1iZXIpID0+IGNvbnNvbGUubG9nKCdJbnNldCBzaXplOiAnKSwgcHgpXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxuICpcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmdldEluc2V0UmlnaHQoKVxuICogICAgLnRoZW4oKHB4OiBudW1iZXIpID0+IGNvbnNvbGUubG9nKCdJbnNldCBzaXplOiAnKSwgcHgpXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxuICpcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmdldEluc2V0Qm90dG9tKClcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxuICogICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKSlcbiAqXG4gKiB0aGlzLmFuZHJvaWROb3RjaC5nZXRJbnNldExlZnQoKVxuICogICAgLnRoZW4oKHB4OiBudW1iZXIpID0+IGNvbnNvbGUubG9nKCdJbnNldCBzaXplOiAnKSwgcHgpXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FuZHJvaWROb3RjaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFuZHJvaWQtbm90Y2gnLFxuICBwbHVnaW5SZWY6ICdBbmRyb2lkTm90Y2gnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvYnNwci9jb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLW5vdGNoLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZHJvaWROb3RjaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYW5kcm9pZCBkZXZpY2UgaGFzIGN1dG91dFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzQ3V0b3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlndGggb2YgdGhlIHRvcCBpbnNldFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnNldFRvcCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlndGggb2YgdGhlIHJpZ2h0IGluc2V0XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEluc2V0UmlnaHQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ3RoIG9mIHRoZSBib3R0b20gaW5zZXRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zZXRCb3R0b20oKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ3RoIG9mIHRoZSBsZWZ0IGluc2V0XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEluc2V0TGVmdCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19