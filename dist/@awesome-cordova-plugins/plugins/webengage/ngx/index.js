import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Webengage = /** @class */ (function (_super) {
    __extends(Webengage, _super);
    function Webengage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webengage.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    Webengage.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    Webengage.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    Webengage.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    Webengage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Webengage, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Webengage.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Webengage });
    Webengage.pluginName = "Webengage";
    Webengage.plugin = "cordova-plugin-webengage";
    Webengage.pluginRef = "webengage";
    Webengage.repo = "https://github.com/WebEngage/cordova-plugin";
    Webengage.platforms = ["Android", "iOS"];
    Webengage = __decorate([], Webengage);
    return Webengage;
}(AwesomeCordovaNativePlugin));
export { Webengage };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Webengage, decorators: [{
            type: Injectable
        }], propDecorators: { engage: [], options: [], track: [], screen: [] } });
var WebengageUser = /** @class */ (function (_super) {
    __extends(WebengageUser, _super);
    function WebengageUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUser.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUser.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUser.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengageUser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    WebengageUser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengageUser });
    WebengageUser.pluginName = "Webengage";
    WebengageUser.plugin = "cordova-plugin-webengage";
    WebengageUser.pluginRef = "webengage.user";
    WebengageUser = __decorate([], WebengageUser);
    return WebengageUser;
}(AwesomeCordovaNativePlugin));
export { WebengageUser };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengageUser, decorators: [{
            type: Injectable
        }], propDecorators: { login: [], logout: [], setAttribute: [] } });
var WebengagePush = /** @class */ (function (_super) {
    __extends(WebengagePush, _super);
    function WebengagePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePush.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePush.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePush.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengagePush, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    WebengagePush.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengagePush });
    WebengagePush.pluginName = "Webengage";
    WebengagePush.plugin = "cordova-plugin-webengage";
    WebengagePush.pluginRef = "webengage.push";
    WebengagePush = __decorate([], WebengagePush);
    return WebengagePush;
}(AwesomeCordovaNativePlugin));
export { WebengagePush };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengagePush, decorators: [{
            type: Injectable
        }], propDecorators: { onClick: [], options: [] } });
var WebengageNotification = /** @class */ (function (_super) {
    __extends(WebengageNotification, _super);
    function WebengageNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotification.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotification.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotification.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotification.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotification.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengageNotification, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    WebengageNotification.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengageNotification });
    WebengageNotification.pluginName = "Webengage";
    WebengageNotification.plugin = "cordova-plugin-webengage";
    WebengageNotification.pluginRef = "webengage.notification";
    WebengageNotification = __decorate([], WebengageNotification);
    return WebengageNotification;
}(AwesomeCordovaNativePlugin));
export { WebengageNotification };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebengageNotification, decorators: [{
            type: Injectable
        }], propDecorators: { onShown: [], onClick: [], onDismiss: [], options: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViZW5nYWdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUEwQjdELDZCQUEwQjs7OztJQVF2RCwwQkFBTSxhQUFDLE1BQVk7SUFZbkIsMkJBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTtJQVkvQix5QkFBSyxhQUFDLFNBQWlCLEVBQUUsVUFBZ0I7SUFhekMsMEJBQU0sYUFBQyxVQUFrQixFQUFFLFVBQWdCOzJHQTdDaEMsU0FBUzsrR0FBVCxTQUFTOzs7Ozs7SUFBVCxTQUFTLGtCQUFULFNBQVM7b0JBM0J0QjtFQTJCK0IsMEJBQTBCO1NBQTVDLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTs4QkFTVCxNQUFNLE1BWU4sT0FBTyxNQVlQLEtBQUssTUFhTCxNQUFNOztJQWMyQixpQ0FBMEI7Ozs7SUFRM0QsNkJBQUssYUFBQyxNQUFjO0lBVXBCLDhCQUFNO0lBWU4sb0NBQVksYUFBQyxHQUFXLEVBQUUsS0FBVTsrR0E5QnpCLGFBQWE7bUhBQWIsYUFBYTs7OztJQUFiLGFBQWEsa0JBQWIsYUFBYTt3QkF0RjFCO0VBc0ZtQywwQkFBMEI7U0FBaEQsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzhCQVNULEtBQUssTUFVTCxNQUFNLE1BWU4sWUFBWTs7SUFjcUIsaUNBQTBCOzs7O0lBUTNELCtCQUFPLGFBQUMsUUFBYTtJQVlyQiwrQkFBTyxhQUFDLEdBQVcsRUFBRSxLQUFVOytHQXBCcEIsYUFBYTttSEFBYixhQUFhOzs7O0lBQWIsYUFBYSxrQkFBYixhQUFhO3dCQWxJMUI7RUFrSW1DLDBCQUEwQjtTQUFoRCxhQUFhOzRGQUFiLGFBQWE7a0JBRHpCLFVBQVU7OEJBU1QsT0FBTyxNQVlQLE9BQU87O0lBY2tDLHlDQUEwQjs7OztJQVFuRSx1Q0FBTyxhQUFDLFFBQWE7SUFXckIsdUNBQU8sYUFBQyxRQUFhO0lBV3JCLHlDQUFTLGFBQUMsUUFBYTtJQVl2Qix1Q0FBTyxhQUFDLEdBQVcsRUFBRSxLQUFVO3VIQTFDcEIscUJBQXFCOzJIQUFyQixxQkFBcUI7Ozs7SUFBckIscUJBQXFCLGtCQUFyQixxQkFBcUI7Z0NBcEtsQztFQW9LMkMsMEJBQTBCO1NBQXhELHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQURqQyxVQUFVOzhCQVNULE9BQU8sTUFXUCxPQUFPLE1BV1AsU0FBUyxNQVlULE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFdlYmVuZ2FnZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBd2Vzb21lIENvcmRvdmEgUGx1Z2lucyB3cmFwcGVyIHRoYXQgd3JhcHMgV2ViZW5nYWdlIENvcmRvdmEgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1NcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViZW5nYWdlLCBXZWJlbmdhZ2VVc2VyLCBXZWJlbmdhZ2VQdXNoLCBXZWJlbmdhZ2VOb3RpZmljYXRpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2ViZW5nYWdlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViZW5nYWdlOiBXZWJlbmdhZ2UsIHByaXZhdGUgd2ViZW5nYWdlVXNlcjogV2ViZW5nYWdlVXNlciwgcHJpdmF0ZSB3ZWJlbmdhZ2VQdXNoOiBXZWJlbmdhZ2VQdXNoLCBwcml2YXRlIHdlYmVuZ2FnZU5vdGlmaWNhdGlvbjogV2ViZW5nYWdlTm90aWZpY2F0aW9uICkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy53ZWJlbmdhZ2UuZW5nYWdlKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1dlYkVuZ2FnZS9jb3Jkb3ZhLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBXZWJFbmdhZ2UgU0RLXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBbY29uZmlnXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmdhZ2UoY29uZmlnPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBXZWJFbmdhZ2UgU0RLIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbYXR0cmlidXRlc11cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2soZXZlbnROYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3Mgc2NyZWVuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHNjcmVlbk5hbWVcbiAgICogQHBhcmFtIHthbnl9IFtzY3JlZW5EYXRhXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY3JlZW4oc2NyZWVuTmFtZTogc3RyaW5nLCBzY3JlZW5EYXRhPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnVzZXInLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VVc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTG9ncyB1c2VyIGluXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4odXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgb3V0XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZS5wdXNoJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlUHVzaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIHB1c2ggbm90aWZpY2F0aW9uIGlzIGNsaWNrZWRcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQ2xpY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcHVzaCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLm5vdGlmaWNhdGlvbicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgc2hvd25cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uU2hvd24oY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25DbGljayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBkaXNtaXNzZWRcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uRGlzbWlzcyhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBpbi1hcHAgbm90aWZpY2F0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=