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
var MixpanelOriginal = /** @class */ (function (_super) {
    __extends(MixpanelOriginal, _super);
    function MixpanelOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixpanelOriginal.prototype.alias = function (aliasId, originalId) { return cordova(this, "alias", {}, arguments); };
    MixpanelOriginal.prototype.distinctId = function () { return cordova(this, "distinctId", {}, arguments); };
    MixpanelOriginal.prototype.flush = function () { return cordova(this, "flush", {}, arguments); };
    MixpanelOriginal.prototype.identify = function (distinctId, usePeople) { return cordova(this, "identify", {}, arguments); };
    MixpanelOriginal.prototype.init = function (token) { return cordova(this, "init", {}, arguments); };
    MixpanelOriginal.prototype.getSuperProperties = function () { return cordova(this, "getSuperProperties", {}, arguments); };
    MixpanelOriginal.prototype.registerSuperProperties = function (superProperties) { return cordova(this, "registerSuperProperties", {}, arguments); };
    MixpanelOriginal.prototype.registerSuperPropertiesOnce = function (superProperties) { return cordova(this, "registerSuperPropertiesOnce", {}, arguments); };
    MixpanelOriginal.prototype.unregisterSuperProperty = function (superPropertyName) { return cordova(this, "unregisterSuperProperty", {}, arguments); };
    MixpanelOriginal.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    MixpanelOriginal.prototype.timeEvent = function (eventName) { return cordova(this, "timeEvent", {}, arguments); };
    MixpanelOriginal.prototype.track = function (eventName, eventProperties) { return cordova(this, "track", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    MixpanelOriginal.pluginName = "Mixpanel";
    MixpanelOriginal.plugin = "cordova-plugin-mixpanel";
    MixpanelOriginal.pluginRef = "mixpanel";
    MixpanelOriginal.repo = "https://github.com/samzilverberg/cordova-mixpanel-plugin";
    MixpanelOriginal.platforms = ["Android", "Browser", "iOS"];
    return MixpanelOriginal;
}(AwesomeCordovaNativePlugin));
var Mixpanel = new MixpanelOriginal();
export { Mixpanel };
var MixpanelPeopleOriginal = /** @class */ (function (_super) {
    __extends(MixpanelPeopleOriginal, _super);
    function MixpanelPeopleOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixpanelPeopleOriginal.prototype.append = function (appendObject) { return cordova(this, "append", {}, arguments); };
    MixpanelPeopleOriginal.prototype.deleteUser = function () { return cordova(this, "deleteUser", {}, arguments); };
    MixpanelPeopleOriginal.prototype.identify = function (distinctId) { return cordova(this, "identify", {}, arguments); };
    MixpanelPeopleOriginal.prototype.increment = function (peopleProperties) { return cordova(this, "increment", {}, arguments); };
    MixpanelPeopleOriginal.prototype.setPushId = function (pushId) { return cordova(this, "setPushId", {}, arguments); };
    MixpanelPeopleOriginal.prototype.set = function (peopleProperties) { return cordova(this, "set", {}, arguments); };
    MixpanelPeopleOriginal.prototype.setOnce = function (peopleProperties) { return cordova(this, "setOnce", {}, arguments); };
    MixpanelPeopleOriginal.prototype.trackCharge = function (amount, chargeProperties) { return cordova(this, "trackCharge", {}, arguments); };
    MixpanelPeopleOriginal.prototype.unset = function (propertiesArray) { return cordova(this, "unset", {}, arguments); };
    MixpanelPeopleOriginal.prototype.union = function (unionObject) { return cordova(this, "union", {}, arguments); };
    MixpanelPeopleOriginal.plugin = "cordova-plugin-mixpanel";
    MixpanelPeopleOriginal.pluginRef = "mixpanel.people";
    MixpanelPeopleOriginal.pluginName = "Mixpanel";
    return MixpanelPeopleOriginal;
}(AwesomeCordovaNativePlugin));
var MixpanelPeople = new MixpanelPeopleOriginal();
export { MixpanelPeople };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWl4cGFuZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnQzlELDRCQUEwQjs7OztJQVN0RCx3QkFBSyxhQUFDLE9BQWUsRUFBRSxVQUFtQjtJQVMxQyw2QkFBVTtJQVFWLHdCQUFLO0lBWUwsMkJBQVEsYUFBQyxVQUFrQixFQUFFLFNBQW1CO0lBVWhELHVCQUFJLGFBQUMsS0FBYTtJQVNsQixxQ0FBa0I7SUFVbEIsMENBQXVCLGFBQUMsZUFBb0I7SUFVNUMsOENBQTJCLGFBQUMsZUFBb0I7SUFVaEQsMENBQXVCLGFBQUMsaUJBQXlCO0lBU2pELHdCQUFLO0lBVUwsNEJBQVMsYUFBQyxTQUFpQjtJQWMzQix3QkFBSyxhQUFDLFNBQWlCLEVBQUUsZUFBcUI7Ozs7OzttQkF6SmhEO0VBaUM4QiwwQkFBMEI7U0FBM0MsUUFBUTs7SUFzSWUsa0NBQTBCOzs7O0lBTzVELCtCQUFNLGFBQUMsWUFBaUI7SUFTeEIsbUNBQVU7SUFXVixpQ0FBUSxhQUFDLFVBQWtCO0lBVTNCLGtDQUFTLGFBQUMsZ0JBQXFCO0lBVS9CLGtDQUFTLGFBQUMsTUFBYztJQVV4Qiw0QkFBRyxhQUFDLGdCQUFxQjtJQVV6QixnQ0FBTyxhQUFDLGdCQUFxQjtJQVc3QixvQ0FBVyxhQUFDLE1BQWMsRUFBRSxnQkFBcUI7SUFVakQsOEJBQUssYUFBQyxlQUF5QjtJQVUvQiw4QkFBSyxhQUFDLFdBQWdCOzs7O3lCQXpReEI7RUF1S29DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZGVjbGFyZSBsZXQgbWl4cGFuZWw6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBNaXhwYW5lbFxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIFBsdWdpbiB0aGF0IHdyYXBzIE1peHBhbmVsIFNESyBmb3IgQW5kcm9pZCBhbmQgaU9TXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1peHBhbmVsIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21peHBhbmVsL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtaXhwYW5lbDogTWl4cGFuZWwsIHByaXZhdGUgbWl4cGFuZWxQZW9wbGU6IE1peHBhbmVsUGVvcGxlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm1peHBhbmVsLmluaXQodG9rZW4pXG4gKiAgIC50aGVuKG9uU3VjY2VzcylcbiAqICAgLmNhdGNoKG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIE1peHBhbmVsUGVvcGxlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWl4cGFuZWwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1taXhwYW5lbCcsXG4gIHBsdWdpblJlZjogJ21peHBhbmVsJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYW16aWx2ZXJiZXJnL2NvcmRvdmEtbWl4cGFuZWwtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWl4cGFuZWwgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJZiBvcmlnaW5hbElkIGlzIG9taXR0ZWQsIGFsaWFzSWQgd2lsbCBiZSB1c2VkIGFzIG9yaWdpbmFsSWQuXG4gICAqXG4gICAqIEBwYXJhbSBhbGlhc0lkIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcmlnaW5hbElkIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFsaWFzKGFsaWFzSWQ6IHN0cmluZywgb3JpZ2luYWxJZD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc3RpbmN0SWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmx1c2goKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVzZVBlb3BsZSBwYXJhbWV0ZXIgaXMgdXNlZCBmb3IgdGhlIGlPUyBNaXhwYW5lbCBTREsuXG4gICAqXG4gICAqIEBwYXJhbSBkaXN0aW5jdElkIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1c2VQZW9wbGUge2Jvb2xlYW59XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlkZW50aWZ5KGRpc3RpbmN0SWQ6IHN0cmluZywgdXNlUGVvcGxlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b2tlbiB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTdXBlclByb3BlcnRpZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHN1cGVyUHJvcGVydGllcyB7YW55fVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWdpc3RlclN1cGVyUHJvcGVydGllcyhzdXBlclByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdXBlclByb3BlcnRpZXMge2FueX1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJTdXBlclByb3BlcnRpZXNPbmNlKHN1cGVyUHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHN1cGVyUHJvcGVydHlOYW1lIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVucmVnaXN0ZXJTdXBlclByb3BlcnR5KHN1cGVyUHJvcGVydHlOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNldCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRpbWVFdmVudChldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ31cbiAgICogQHBhcmFtIGV2ZW50UHJvcGVydGllcyB7YW55fSBvcHRpb25hbFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzLFxuICB9KVxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZywgZXZlbnRQcm9wZXJ0aWVzPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1taXhwYW5lbCcsXG4gIHBsdWdpblJlZjogJ21peHBhbmVsLnBlb3BsZScsXG4gIHBsdWdpbk5hbWU6ICdNaXhwYW5lbCcsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1peHBhbmVsUGVvcGxlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFwcGVuZE9iamVjdCB7YW55fVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhcHBlbmQoYXBwZW5kT2JqZWN0OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVVc2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkaXN0aW5jdElkIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIwMTYtMTEtMjEgLSBVc2UgTWl4cGFuZWwuaWRlbnRpZnkgaW5zdGVhZC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaWRlbnRpZnkoZGlzdGluY3RJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHBlb3BsZVByb3BlcnRpZXMge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5jcmVtZW50KHBlb3BsZVByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwdXNoSWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UHVzaElkKHB1c2hJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHBlb3BsZVByb3BlcnRpZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0KHBlb3BsZVByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwZW9wbGVQcm9wZXJ0aWVzIHthbnl9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldE9uY2UocGVvcGxlUHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gY2hhcmdlUHJvcGVydGllc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0NoYXJnZShhbW91bnQ6IG51bWJlciwgY2hhcmdlUHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHByb3BlcnRpZXNBcnJheVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bnNldChwcm9wZXJ0aWVzQXJyYXk6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVuaW9uT2JqZWN0IHthbnl9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuaW9uKHVuaW9uT2JqZWN0OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19