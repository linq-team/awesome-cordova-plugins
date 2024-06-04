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
var WebengageOriginal = /** @class */ (function (_super) {
    __extends(WebengageOriginal, _super);
    function WebengageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageOriginal.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    WebengageOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageOriginal.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    WebengageOriginal.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    WebengageOriginal.pluginName = "Webengage";
    WebengageOriginal.plugin = "cordova-plugin-webengage";
    WebengageOriginal.pluginRef = "webengage";
    WebengageOriginal.repo = "https://github.com/WebEngage/cordova-plugin";
    WebengageOriginal.platforms = ["Android", "iOS"];
    return WebengageOriginal;
}(AwesomeCordovaNativePlugin));
var Webengage = new WebengageOriginal();
export { Webengage };
var WebengageUserOriginal = /** @class */ (function (_super) {
    __extends(WebengageUserOriginal, _super);
    function WebengageUserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUserOriginal.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUserOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUserOriginal.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUserOriginal.pluginName = "Webengage";
    WebengageUserOriginal.plugin = "cordova-plugin-webengage";
    WebengageUserOriginal.pluginRef = "webengage.user";
    return WebengageUserOriginal;
}(AwesomeCordovaNativePlugin));
var WebengageUser = new WebengageUserOriginal();
export { WebengageUser };
var WebengagePushOriginal = /** @class */ (function (_super) {
    __extends(WebengagePushOriginal, _super);
    function WebengagePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePushOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePushOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePushOriginal.pluginName = "Webengage";
    WebengagePushOriginal.plugin = "cordova-plugin-webengage";
    WebengagePushOriginal.pluginRef = "webengage.push";
    return WebengagePushOriginal;
}(AwesomeCordovaNativePlugin));
var WebengagePush = new WebengagePushOriginal();
export { WebengagePush };
var WebengageNotificationOriginal = /** @class */ (function (_super) {
    __extends(WebengageNotificationOriginal, _super);
    function WebengageNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotificationOriginal.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotificationOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotificationOriginal.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotificationOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotificationOriginal.pluginName = "Webengage";
    WebengageNotificationOriginal.plugin = "cordova-plugin-webengage";
    WebengageNotificationOriginal.pluginRef = "webengage.notification";
    return WebengageNotificationOriginal;
}(AwesomeCordovaNativePlugin));
var WebengageNotification = new WebengageNotificationOriginal();
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViZW5nYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBMEI3RCw2QkFBMEI7Ozs7SUFRdkQsMEJBQU0sYUFBQyxNQUFZO0lBWW5CLDJCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7SUFZL0IseUJBQUssYUFBQyxTQUFpQixFQUFFLFVBQWdCO0lBYXpDLDBCQUFNLGFBQUMsVUFBa0IsRUFBRSxVQUFnQjs7Ozs7O29CQXhFN0M7RUEyQitCLDBCQUEwQjtTQUE1QyxTQUFTOztJQTJEYSxpQ0FBMEI7Ozs7SUFRM0QsNkJBQUssYUFBQyxNQUFjO0lBVXBCLDhCQUFNO0lBWU4sb0NBQVksYUFBQyxHQUFXLEVBQUUsS0FBVTs7Ozt3QkFwSHRDO0VBc0ZtQywwQkFBMEI7U0FBaEQsYUFBYTs7SUE0Q1MsaUNBQTBCOzs7O0lBUTNELCtCQUFPLGFBQUMsUUFBYTtJQVlyQiwrQkFBTyxhQUFDLEdBQVcsRUFBRSxLQUFVOzs7O3dCQXRKakM7RUFrSW1DLDBCQUEwQjtTQUFoRCxhQUFhOztJQWtDaUIseUNBQTBCOzs7O0lBUW5FLHVDQUFPLGFBQUMsUUFBYTtJQVdyQix1Q0FBTyxhQUFDLFFBQWE7SUFXckIseUNBQVMsYUFBQyxRQUFhO0lBWXZCLHVDQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7Z0NBOU1qQztFQW9LMkMsMEJBQTBCO1NBQXhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgV2ViZW5nYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEF3ZXNvbWUgQ29yZG92YSBQbHVnaW5zIHdyYXBwZXIgdGhhdCB3cmFwcyBXZWJlbmdhZ2UgQ29yZG92YSBwbHVnaW4gZm9yIEFuZHJvaWQgYW5kIGlPU1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJlbmdhZ2UsIFdlYmVuZ2FnZVVzZXIsIFdlYmVuZ2FnZVB1c2gsIFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy93ZWJlbmdhZ2Uvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJlbmdhZ2U6IFdlYmVuZ2FnZSwgcHJpdmF0ZSB3ZWJlbmdhZ2VVc2VyOiBXZWJlbmdhZ2VVc2VyLCBwcml2YXRlIHdlYmVuZ2FnZVB1c2g6IFdlYmVuZ2FnZVB1c2gsIHByaXZhdGUgd2ViZW5nYWdlTm90aWZpY2F0aW9uOiBXZWJlbmdhZ2VOb3RpZmljYXRpb24gKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLndlYmVuZ2FnZS5lbmdhZ2UoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vV2ViRW5nYWdlL2NvcmRvdmEtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIFdlYkVuZ2FnZSBTREtcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IFtjb25maWddXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuZ2FnZShjb25maWc/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFdlYkVuZ2FnZSBTREsgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHthbnl9IFthdHRyaWJ1dGVzXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZywgYXR0cmlidXRlcz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBzY3JlZW5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0gc2NyZWVuTmFtZVxuICAgKiBAcGFyYW0ge2FueX0gW3NjcmVlbkRhdGFdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjcmVlbihzY3JlZW5OYW1lOiBzdHJpbmcsIHNjcmVlbkRhdGE/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UudXNlcicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVVzZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgaW5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbih1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgdXNlciBvdXRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBhdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QXR0cmlidXRlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnB1c2gnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgcHVzaCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25DbGljayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBwdXNoIG5vdGlmaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2Uubm90aWZpY2F0aW9uJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlTm90aWZpY2F0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBzaG93blxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25TaG93bihjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkNsaWNrKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIGRpc21pc3NlZFxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25EaXNtaXNzKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGluLWFwcCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==