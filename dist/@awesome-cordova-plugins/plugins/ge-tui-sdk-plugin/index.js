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
var GeTuiSdkPluginOriginal = /** @class */ (function (_super) {
    __extends(GeTuiSdkPluginOriginal, _super);
    function GeTuiSdkPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPluginOriginal.prototype.callback_init = function (callback) { return cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.initialize = function () { return cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPluginOriginal.prototype.getClientId = function () { return cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPluginOriginal.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPluginOriginal.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPluginOriginal.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPluginOriginal.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPluginOriginal.platforms = ["Android", "iOS"];
    return GeTuiSdkPluginOriginal;
}(AwesomeCordovaNativePlugin));
var GeTuiSdkPlugin = new GeTuiSdkPluginOriginal();
export { GeTuiSdkPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2UtdHVpLXNkay1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUF1Q3hELGtDQUEwQjs7OztJQUU1RCxzQ0FBYSxhQUFDLFFBQWtCO0lBT2hDLG1DQUFVO0lBS1Ysb0NBQVc7SUFLWCxtQ0FBVTs7Ozs7Ozs7eUJBM0RaO0VBd0NvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR2UgVHVpIFNkayBQbHVnaW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2VUdWlTZGtQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ2UtdHVpLXNkay1wbHVnaW4nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlVHVpU2RrUGx1Z2luOiBHZVR1aVNka1BsdWdpbikgeyB9XG4gKlxuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uY2FsbGJhY2tfaW5pdCgocmVzKSA9PiB7IGNvbnNvbGUubG9nKHJlcyl9KTtcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmluaXRpYWxpemUoKTtcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmdldENsaWVudElkKCk7XG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiAgdGhpcy5nZVR1aVNka1BsdWdpbi5nZXRWZXJzaW9uKCk7XG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR2VUdWlTZGtQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkaycsXG4gIHBsdWdpblJlZjogJ0dlVHVpU2RrUGx1Z2luJyxcbiAgcmVwbzogJ2dpdEBnaXRodWIuY29tOkdldHVpTGFib3JhdG9yeS9jb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkay5naXQnLFxuICBpbnN0YWxsOlxuICAgICdjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ2V0dWlzZGsgLS12YXJpYWJsZSBQVVNIX0FQUElEPXlvdXIgYXBwaWQgLS12YXJpYWJsZSBQVVNIX0FQUEtFWT15b3VyIGFwcGtleSAtLXZhcmlhYmxlIFBVU0hfQVBQU0VDUkVUPXlvdXIgYXBwc2VjcmV0JyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQVVNIX0FQUElEJywgJ1BVU0hfQVBQS0VZJywgJ1BVU0hfQVBQU0VDUkVUJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZVR1aVNka1BsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBjYWxsYmFja19pbml0KGNhbGxiYWNrOiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGluaXRpYWxpemUoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDbGllbnRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19