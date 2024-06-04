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
import { Observable } from 'rxjs';
var DefaultMessageStorage = /** @class */ (function () {
    function DefaultMessageStorage() {
    }
    DefaultMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.delete = function (messageId, callback) { return cordova(this, "delete", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.deleteAll = function (callback) { return cordova(this, "deleteAll", { "sync": true }, arguments); };
    return DefaultMessageStorage;
}());
export { DefaultMessageStorage };
var CustomMessageStorage = /** @class */ (function () {
    function CustomMessageStorage() {
    }
    CustomMessageStorage.prototype.save = function (messages) { return cordova(this, "save", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.start = function () { return cordova(this, "start", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.stop = function () { return cordova(this, "stop", { "sync": true }, arguments); };
    return CustomMessageStorage;
}());
export { CustomMessageStorage };
var MobileMessagingOriginal = /** @class */ (function (_super) {
    __extends(MobileMessagingOriginal, _super);
    function MobileMessagingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileMessagingOriginal.prototype.init = function (config, onInitError) { return cordova(this, "init", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.register = function (event, handler) { return cordova(this, "register", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.on = function (event, handler) { return cordova(this, "on", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.unregister = function (event, handler) { return cordova(this, "unregister", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.off = function (event, handler) { return cordova(this, "off", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEvent = function (event) { return cordova(this, "submitEvent", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEventImmediately = function (event) { return cordova(this, "submitEventImmediately", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.saveUser = function (userData) { return cordova(this, "saveUser", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchUser = function () { return cordova(this, "fetchUser", {}, arguments); };
    MobileMessagingOriginal.prototype.getUser = function () { return cordova(this, "getUser", {}, arguments); };
    MobileMessagingOriginal.prototype.saveInstallation = function (installation) { return cordova(this, "saveInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchInstallation = function () { return cordova(this, "fetchInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.getInstallation = function () { return cordova(this, "getInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.setInstallationAsPrimary = function (pushRegistrationId, primary) { return cordova(this, "setInstallationAsPrimary", {}, arguments); };
    MobileMessagingOriginal.prototype.personalize = function (context) { return cordova(this, "personalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalize = function () { return cordova(this, "depersonalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalizeInstallation = function (pushRegistrationId) { return cordova(this, "depersonalizeInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.markMessagesSeen = function (messageIds) { return cordova(this, "markMessagesSeen", {}, arguments); };
    MobileMessagingOriginal.prototype.showDialogForError = function (errorCode) { return cordova(this, "showDialogForError", {}, arguments); };
    MobileMessagingOriginal.prototype.defaultMessageStorage = function () { return cordova(this, "defaultMessageStorage", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.showChat = function (config) { return cordova(this, "showChat", {}, arguments); };
    MobileMessagingOriginal.prototype.setupiOSChatSettings = function (settings) { return cordova(this, "setupiOSChatSettings", {}, arguments); };
    MobileMessagingOriginal.prototype.getMessageCounter = function (onResult) { return cordova(this, "getMessageCounter", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.resetMessageCounter = function () { return cordova(this, "resetMessageCounter", {}, arguments); };
    MobileMessagingOriginal.pluginName = "MobileMessaging";
    MobileMessagingOriginal.plugin = "com-infobip-plugins-mobilemessaging";
    MobileMessagingOriginal.pluginRef = "MobileMessaging";
    MobileMessagingOriginal.repo = "https://github.com/infobip/mobile-messaging-cordova-plugin";
    MobileMessagingOriginal.platforms = ["Android", "iOS"];
    return MobileMessagingOriginal;
}(AwesomeCordovaNativePlugin));
var MobileMessaging = new MobileMessagingOriginal();
export { MobileMessaging };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbW9iaWxlLW1lc3NhZ2luZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7SUF1TGhDLG9DQUFJLGFBQUMsU0FBaUIsRUFBRSxRQUFvQztJQUs1RCx1Q0FBTyxhQUFDLFFBQXVDO0lBSy9DLHNDQUFNLGFBQUMsU0FBaUIsRUFBRSxRQUFvQjtJQUs5Qyx5Q0FBUyxhQUFDLFFBQW9CO2dDQXhNaEM7Ozs7OztJQW9ORSxtQ0FBSSxhQUFDLFFBQW1CO0lBVXhCLG1DQUFJLGFBQUMsU0FBaUIsRUFBRSxRQUFvQztJQVU1RCxzQ0FBTyxhQUFDLFFBQXVDO0lBUS9DLG9DQUFLO0lBUUwsbUNBQUk7K0JBeFBOOzs7O0lBb1RxQyxtQ0FBMEI7Ozs7SUFXN0QsOEJBQUksYUFBQyxNQUFxQixFQUFFLFdBQW1EO0lBYS9FLGtDQUFRLGFBQUMsS0FBWSxFQUFFLE9BQWlCO0lBVXhDLDRCQUFFLGFBQUMsS0FBWSxFQUFFLE9BQWlCO0lBZWxDLG9DQUFVLGFBQUMsS0FBWSxFQUFFLE9BQWlCO0lBVTFDLDZCQUFHLGFBQUMsS0FBWSxFQUFFLE9BQWlCO0lBdUJuQyxxQ0FBVyxhQUFDLEtBQWtCO0lBeUI5QixnREFBc0IsYUFBQyxLQUFrQjtJQVl6QyxrQ0FBUSxhQUFDLFFBQWtCO0lBVTNCLG1DQUFTO0lBVVQsaUNBQU87SUFZUCwwQ0FBZ0IsYUFBQyxZQUEwQjtJQVUzQywyQ0FBaUI7SUFVakIseUNBQWU7SUFZZixrREFBd0IsYUFBQyxrQkFBMEIsRUFBRSxPQUFnQjtJQVlyRSxxQ0FBVyxhQUFDLE9BQTJCO0lBVXZDLHVDQUFhO0lBVWIsbURBQXlCLGFBQUMsa0JBQTBCO0lBV3BELDBDQUFnQixhQUFDLFVBQW9CO0lBV3JDLDRDQUFrQixhQUFDLFNBQWlCO0lBS3BDLCtDQUFxQjtJQVlyQixrQ0FBUSxhQUFDLE1BQW1CO0lBVTVCLDhDQUFvQixhQUFDLFFBQXlCO0lBVTlDLDJDQUFpQixhQUFDLFFBQW1DO0lBU3JELDZDQUFtQjs7Ozs7OzBCQS9rQnJCO0VBb1RxQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIE9TID0gJ0FuZHJvaWQnIHwgJ2lPUyc7XG5leHBvcnQgdHlwZSBHZW5kZXIgPSAnTWFsZScgfCAnRmVtYWxlJztcbmV4cG9ydCB0eXBlIEV2ZW50ID1cbiAgfCAnbWVzc2FnZVJlY2VpdmVkJ1xuICB8ICdub3RpZmljYXRpb25UYXBwZWQnXG4gIHwgJ3Rva2VuUmVjZWl2ZWQnXG4gIHwgJ3JlZ2lzdHJhdGlvblVwZGF0ZWQnXG4gIHwgJ2dlb2ZlbmNlRW50ZXJlZCdcbiAgfCAnYWN0aW9uVGFwcGVkJ1xuICB8ICdpbnN0YWxsYXRpb25VcGRhdGVkJ1xuICB8ICd1c2VyVXBkYXRlZCdcbiAgfCAncGVyc29uYWxpemVkJ1xuICB8ICdkZXBlcnNvbmFsaXplZCdcbiAgfCAnaW5BcHBDaGF0LmF2YWlsYWJpbGl0eVVwZGF0ZWQnXG4gIHwgJ2luQXBwQ2hhdC51bnJlYWRNZXNzYWdlQ291bnRlclVwZGF0ZWQnXG4gIHwgJ2RlZXBsaW5rJztcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21FdmVudCB7XG4gIGRlZmluaXRpb25JZDogc3RyaW5nO1xuICBwcm9wZXJ0aWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBhcHBsaWNhdGlvbiBjb2RlIG9mIHlvdXIgQXBwbGljYXRpb24gZnJvbSBQdXNoIFBvcnRhbCB3ZWJzaXRlXG4gICAqL1xuICBhcHBsaWNhdGlvbkNvZGU6IHN0cmluZztcbiAgZ2VvZmVuY2luZ0VuYWJsZWQ/OiBib29sZWFuO1xuICBpbkFwcENoYXRFbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE1lc3NhZ2Ugc3RvcmFnZSBzYXZlIGNhbGxiYWNrXG4gICAqL1xuICBtZXNzYWdlU3RvcmFnZT86IEN1c3RvbU1lc3NhZ2VTdG9yYWdlO1xuICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2U/OiBib29sZWFuO1xuICBpb3M/OiB7XG4gICAgbm90aWZpY2F0aW9uVHlwZXM/OiBzdHJpbmdbXTsgLy8gWydhbGVydCcsICdiYWRnZScsICdzb3VuZCddXG4gICAgZm9yY2VDbGVhbnVwPzogYm9vbGVhbjtcbiAgICBsb2dnaW5nPzogYm9vbGVhbjtcbiAgfTtcbiAgYW5kcm9pZD86IHtcbiAgICBub3RpZmljYXRpb25JY29uPzogc3RyaW5nOyAvLyBhIHJlc291cmNlIG5hbWUgZm9yIGEgc3RhdHVzIGJhciBpY29uICh3aXRob3V0IGV4dGVuc2lvbiksIGxvY2F0ZWQgaW4gJy9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL21pcG1hcCdcbiAgICBtdWx0aXBsZU5vdGlmaWNhdGlvbnM/OiBib29sZWFuOyAvLyBzZXQgdG8gJ3RydWUnIHRvIGVuYWJsZSBtdWx0aXBsZSBub3RpZmljYXRpb25zXG4gICAgbm90aWZpY2F0aW9uQWNjZW50Q29sb3I/OiBzdHJpbmc7IC8vIHNldCB0byBoZXggY29sb3IgdmFsdWUgaW4gZm9ybWF0ICcjUlJHR0JCJyBvciAnI0FBUlJHR0JCJ1xuICAgIGZpcmViYXNlT3B0aW9ucz86IHtcbiAgICAgIGFwaUtleTogc3RyaW5nO1xuICAgICAgYXBwbGljYXRpb25JZDogc3RyaW5nO1xuICAgICAgZGF0YWJhc2VVcmw/OiBzdHJpbmc7XG4gICAgICBnYVRyYWNraW5nSWQ/OiBzdHJpbmc7XG4gICAgICBnY21TZW5kZXJJZD86IHN0cmluZztcbiAgICAgIHN0b3JhZ2VCdWNrZXQ/OiBzdHJpbmc7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBwcml2YWN5U2V0dGluZ3M/OiB7XG4gICAgYXBwbGljYXRpb25Db2RlUGVyc2lzdGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgICB1c2VyRGF0YVBlcnNpc3RpbmdEaXNhYmxlZD86IGJvb2xlYW47XG4gICAgY2FycmllckluZm9TZW5kaW5nRGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIHN5c3RlbUluZm9TZW5kaW5nRGlzYWJsZWQ/OiBib29sZWFuO1xuICB9O1xuICBub3RpZmljYXRpb25DYXRlZ29yaWVzPzogW1xuICAgIHtcbiAgICAgIGlkZW50aWZpZXI6IHN0cmluZztcbiAgICAgIGFjdGlvbnM/OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgICAgZm9yZWdyb3VuZD86IGJvb2xlYW47XG4gICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZD86IGJvb2xlYW47XG4gICAgICAgICAgbW9SZXF1aXJlZD86IGJvb2xlYW47XG4gICAgICAgICAgZGVzdHJ1Y3RpdmU/OiBib29sZWFuO1xuICAgICAgICAgIGljb24/OiBzdHJpbmc7XG4gICAgICAgICAgdGV4dElucHV0QWN0aW9uQnV0dG9uVGl0bGU/OiBzdHJpbmc7XG4gICAgICAgICAgdGV4dElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICBdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgZXh0ZXJuYWxVc2VySWQ/OiBzdHJpbmc7XG4gIGZpcnN0TmFtZT86IHN0cmluZztcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU/OiBzdHJpbmc7XG4gIGdlbmRlcj86IEdlbmRlcjtcbiAgYmlydGhkYXk/OiBzdHJpbmc7XG4gIHBob25lcz86IHN0cmluZ1tdO1xuICBlbWFpbHM/OiBzdHJpbmdbXTtcbiAgdGFncz86IHN0cmluZ1tdO1xuICBjdXN0b21BdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IGFueVtdPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnN0YWxsYXRpb24ge1xuICBpc1ByaW1hcnlEZXZpY2U/OiBib29sZWFuO1xuICBpc1B1c2hSZWdpc3RyYXRpb25FbmFibGVkPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uc0VuYWJsZWQ/OiBib29sZWFuO1xuICBnZW9FbmFibGVkPzogYm9vbGVhbjtcbiAgc2RrVmVyc2lvbj86IHN0cmluZztcbiAgYXBwVmVyc2lvbj86IHN0cmluZztcbiAgb3M/OiBPUztcbiAgb3NWZXJzaW9uPzogc3RyaW5nO1xuICBkZXZpY2VNYW51ZmFjdHVyZXI/OiBzdHJpbmc7XG4gIGRldmljZU1vZGVsPzogc3RyaW5nO1xuICBkZXZpY2VTZWN1cmU/OiBib29sZWFuO1xuICBsYW5ndWFnZT86IHN0cmluZztcbiAgZGV2aWNlVGltZXpvbmVJZD86IHN0cmluZztcbiAgYXBwbGljYXRpb25Vc2VySWQ/OiBzdHJpbmc7XG4gIGRldmljZU5hbWU/OiBzdHJpbmc7XG4gIGN1c3RvbUF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcbn1cblxuLyoqXG4gKiBVc2VyJ3MgdW5pcXVlIElELiBPbmUgVXNlcklkZW50aXR5IHBhcmFtZXRlciBtdXN0IGJlIHByb3ZpZGVkIGlmIHVzZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlcklkZW50aXR5IHtcbiAgcGhvbmVzPzogc3RyaW5nW107XG4gIGVtYWlscz86IHN0cmluZ1tdO1xuICBleHRlcm5hbFVzZXJJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25hbGl6ZUNvbnRleHQge1xuICB1c2VySWRlbnRpdHk6IFVzZXJJZGVudGl0eTtcbiAgdXNlckF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgYW55W10+O1xuICBmb3JjZURlcGVyc29uYWxpemU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb0RhdGEge1xuICBhcmVhOiBHZW9BcmVhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb0FyZWEge1xuICBpZDogc3RyaW5nO1xuICBjZW50ZXI6IEdlb0NlbnRlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvQ2VudGVyIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJvZHk/OiBzdHJpbmc7XG4gIHNvdW5kPzogc3RyaW5nO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICBjdXN0b21QYXlsb2FkPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgaW50ZXJuYWxEYXRhPzogc3RyaW5nO1xuICByZWNlaXZlZFRpbWVzdGFtcD86IG51bWJlcjtcbiAgc2VlbkRhdGU/OiBudW1iZXI7XG4gIGNvbnRlbnRVcmw/OiBzdHJpbmc7XG4gIHNlZW4/OiBib29sZWFuO1xuICBnZW8/OiBib29sZWFuO1xuICBvcmlnaW5hbFBheWxvYWQ/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+OyAvLyBpT1Mgb25seVxuICB2aWJyYXRlPzogYm9vbGVhbjsgLy8gQW5kcm9pZCBvbmx5XG4gIGljb24/OiBzdHJpbmc7IC8vIEFuZHJvaWQgb25seVxuICBjYXRlZ29yeT86IHN0cmluZzsgLy8gQW5kcm9pZCBvbmx5XG4gIGNoYXQ/OiBzdHJpbmc7XG4gIGJyb3dzZXJVcmw/OiBzdHJpbmc7XG4gIGRlZXBsaW5rPzogc3RyaW5nO1xuICB3ZWJWaWV3VXJsPzogc3RyaW5nO1xuICBpbkFwcE9wZW5UaXRsZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaW5BcHBEaXNtaXNzVGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9iaWxlTWVzc2FnaW5nRXJyb3Ige1xuICBjb2RlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRvbWFpbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGF0Q29uZmlnIHtcbiAgaW9zPzoge1xuICAgIHNob3dNb2RhbGx5OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdE1lc3NhZ2VTdG9yYWdlIHtcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGZpbmQobWVzc2FnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBmaW5kQWxsKGNhbGxiYWNrOiAobWVzc2FnZXM6IE1lc3NhZ2VbXSkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWxldGUobWVzc2FnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlbGV0ZUFsbChjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tTWVzc2FnZVN0b3JhZ2Uge1xuICAvKipcbiAgICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHBsdWdpbiB3aGVuIG1lc3NhZ2VzIGFyZSByZWNlaXZlZCBhbmQgaXQncyB0aW1lIHRvIHNhdmUgdGhlbSB0byB0aGUgc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0gYXJyYXkgb2YgbWVzc2FnZSBvYmplY3RzIHRvIHNhdmUgdG8gc3RvcmFnZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNhdmUobWVzc2FnZXM6IE1lc3NhZ2VbXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgcGx1Z2luIHRvIGZpbmQgYSBtZXNzYWdlIGJ5IG1lc3NhZ2UgaWRcbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIGhhcyB0byBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIG9uZSBwYXJhbWV0ZXIgLSBmb3VuZCBtZXNzYWdlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGZpbmQobWVzc2FnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgcGx1Z2luIHRvIGZpbmQgYWxsIG1lc3NhZ2VzIGluIHRoZSBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayBoYXMgdG8gYmUgY2FsbGVkIG9uIGNvbXBsZXRpb24gd2l0aCBvbmUgcGFyYW1ldGVyIC0gYW4gYXJyYXkgb2YgYXZhaWxhYmxlIG1lc3NhZ2VzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZmluZEFsbChjYWxsYmFjazogKG1lc3NhZ2VzOiBNZXNzYWdlW10pID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHBsdWdpbiB3aGVuIGl0cyB0aW1lIHRvIGluaXRpYWxpemUgdGhlIHN0b3JhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydCgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHBsdWdpbiB3aGVuIGl0cyB0aW1lIHRvIGRlaW5pdGlhbGl6ZSB0aGUgc3RvcmFnZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3AoKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdFNldHRpbmdzSU9TIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc2VuZEJ1dHRvbkNvbG9yOiBzdHJpbmc7XG4gIG5hdmlnYXRpb25CYXJJdGVtc0NvbG9yOiBzdHJpbmc7XG4gIG5hdmlnYXRpb25CYXJDb2xvcjogc3RyaW5nO1xuICBuYXZpZ2F0aW9uQmFyVGl0bGVDb2xvcjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIE1vYmlsZSBNZXNzYWdpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogTW9iaWxlIE1lc3NhZ2luZyBTREsgaXMgZGVzaWduZWQgYW5kIGRldmVsb3BlZCB0byBlYXNpbHkgZW5hYmxlIHB1c2ggbm90aWZpY2F0aW9uIGNoYW5uZWwgaW4geW91ciBtb2JpbGUgYXBwbGljYXRpb24uXG4gKiBJbiBhbG1vc3Qgbm8gdGltZSBvZiBpbXBsZW1lbnRhdGlvbiB5b3UgZ2V0IHB1c2ggbm90aWZpY2F0aW9uIGluIHlvdXIgYXBwbGljYXRpb24gYW5kIGFjY2VzcyB0byB0aGUgZmVhdHVyZXMgb2YgW0luZm9iaXAgSVAgTWVzc2FnaW5nIFBsYXRmb3JtXShodHRwczovL3BvcnRhbC5pbmZvYmlwLmNvbS9wdXNoLykuXG4gKiBUaGlzIGRvY3VtZW50IGRlc2NyaWJlcyBsaWJyYXJ5IGludGVncmF0aW9uIHN0ZXBzIGZvciB5b3VyIENvcmRvdmEgcHJvamVjdC5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvIHNlZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2luZm9iaXAvbW9iaWxlLW1lc3NhZ2luZy1jb3Jkb3ZhLXBsdWdpbilcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTW9iaWxlTWVzc2FnaW5nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21vYmlsZS1tZXNzYWdpbmcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtb2JpbGVNZXNzYWdpbmc6IE1vYmlsZU1lc3NhZ2luZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqICB0aGlzLm1vYmlsZU1lc3NhZ2luZy5pbml0KHtcbiAqICAgIGFwcGxpY2F0aW9uQ29kZTogJzx5b3VyX2FwcGxpY2F0aW9uX2NvZGU+JyxcbiAqICAgIGdlb2ZlbmNpbmdFbmFibGVkOiAnPHRydWUvZmFsc2U+JyxcbiAqICAgIGRlZmF1bHRNZXNzYWdlU3RvcmFnZTogJzx0cnVlL2ZhbHNlPicsXG4gKiAgICBpb3M6IHtcbiAqICAgICAgbm90aWZpY2F0aW9uVHlwZXM6IFsnYWxlcnQnLCAnYmFkZ2UnLCAnc291bmQnXVxuICogICAgfSxcbiAqICAgIGFuZHJvaWQ6IHtcbiAqICAgICAgbm90aWZpY2F0aW9uSWNvbjogPFN0cmluZzsgYSByZXNvdXJjZSBuYW1lIGZvciBhIHN0YXR1cyBiYXIgaWNvbiAod2l0aG91dCBleHRlbnNpb24pLCBsb2NhdGVkIGluICcvcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL3Jlcy9taXBtYXAnPixcbiAqICAgICAgbXVsdGlwbGVOb3RpZmljYXRpb25zOiA8Qm9vbGVhbjsgc2V0IHRvICd0cnVlJyB0byBlbmFibGUgbXVsdGlwbGUgbm90aWZpY2F0aW9ucz4sXG4gKiAgICAgIG5vdGlmaWNhdGlvbkFjY2VudENvbG9yOiA8U3RyaW5nOyBzZXQgdG8gaGV4IGNvbG9yIHZhbHVlIGluIGZvcm1hdCAnI1JSR0dCQicgb3IgJyNBQVJSR0dCQic+XG4gKiAgICAgfX0sIChlcnIpID0+IHtcbiAqICAgICAgLi4uXG4gKiAgICB9KTtcbiAqXG4gKiAgdGhpcy5tb2JpbGVNZXNzYWdpbmcucmVnaXN0ZXIoJ21lc3NhZ2VSZWNlaXZlZCcpLnN1YnNjcmliZSgobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xuICogICAgLi4uXG4gKiAgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTW9iaWxlTWVzc2FnaW5nJyxcbiAgcGx1Z2luOiAnY29tLWluZm9iaXAtcGx1Z2lucy1tb2JpbGVtZXNzYWdpbmcnLFxuICBwbHVnaW5SZWY6ICdNb2JpbGVNZXNzYWdpbmcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2luZm9iaXAvbW9iaWxlLW1lc3NhZ2luZy1jb3Jkb3ZhLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2JpbGVNZXNzYWdpbmcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydHMgYSBuZXcgTW9iaWxlIE1lc3NhZ2luZyBzZXNzaW9uLlxuICAgKlxuICAgKiBAbmFtZSBpbml0XG4gICAqIEBwYXJhbSBjb25maWcuIENvbmZpZ3VyYXRpb24gZm9yIE1vYmlsZSBNZXNzYWdpbmdcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0gb25Jbml0RXJyb3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Jbml0RXJyb3IuIEVycm9yIGNhbGxiYWNrXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaW5pdChjb25maWc6IENvbmZpZ3VyYXRpb24sIG9uSW5pdEVycm9yPzogKGVycm9yOiBNb2JpbGVNZXNzYWdpbmdFcnJvcikgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0byBldmVudCBjb21pbmcgZnJvbSBNb2JpbGVNZXNzYWdpbmcgbGlicmFyeS5cbiAgICpcbiAgICogQG5hbWUgcmVnaXN0ZXJcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVnaXN0ZXIoZXZlbnQ6IEV2ZW50LCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBmb3IgYHJlZ2lzdGVyYC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBvbihldmVudDogRXZlbnQsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuIHJlZ2lzdGVyIGZyb20gTW9iaWxlTWVzc2FnaW5nIGxpYnJhcnkgZXZlbnQuXG4gICAqXG4gICAqIEBuYW1lIHVucmVnaXN0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciB3aWxsIGJlIHVucmVnaXN0ZXJlZCBmcm9tIGV2ZW50XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgdW5yZWdpc3RlcihldmVudDogRXZlbnQsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsaWFzIGZvciBgdW5yZWdpc3RlcmAuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgb2ZmKGV2ZW50OiBFdmVudCwgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gZXZlbnQgdG8gdGhlIHNlcnZlciBldmVudHVhbGx5LCBoYW5kbGVzIHBvc3NpYmxlIGVycm9ycyBhbmQgZG8gcmV0cmllcyBmb3IgeW91LlxuICAgKlxuICAgKiBAbmFtZSBzdWJtaXRFdmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnREYXRhLiBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhXG4gICAqIHtcbiAgICogICBkZWZpbml0aW9uSWQ6IFwiZXZlbnREZWZpbml0aW9uSWRcIlxuICAgKiAgIHByb3BlcnRpZXM6IHtcbiAgICogICAgIFwic3RyaW5nQXR0cmlidXRlXCI6IFwic3RyaW5nXCIsXG4gICAqICAgICBcIm51bWJlckF0dHJpYnV0ZVwiOiAxLFxuICAgKiAgICAgXCJkYXRlQXR0cmlidXRlXCI6IFwiMjAyMC0wMi0yNlQwOTo0MTo1N1pcIixcbiAgICogICAgIFwiYm9vbGVhbkF0dHJpYnV0ZVwiOiB0cnVlXG4gICAqICAgfVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN1Ym1pdEV2ZW50KGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhbiBldmVudCB0byB0aGUgc2VydmVyIGltbWVkaWF0ZWx5LlxuICAgKiBZb3UgaGF2ZSB0byBoYW5kbGUgcG9zc2libGUgY29ubmVjdGlvbiBvciBzZXJ2ZXIgZXJyb3JzLCBkbyByZXRyaWVzIHlvdXJzZWxmLlxuICAgKlxuICAgKiBAbmFtZSBzdWJtaXRFdmVudEltbWVkaWF0ZWx5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEuIEFuIG9iamVjdCBjb250YWluaW5nIGV2ZW50IGRhdGFcbiAgICoge1xuICAgKiAgIGRlZmluaXRpb25JZDogXCJldmVudERlZmluaXRpb25JZFwiXG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgXCJzdHJpbmdBdHRyaWJ1dGVcIjogXCJzdHJpbmdcIixcbiAgICogICAgIFwibnVtYmVyQXR0cmlidXRlXCI6IDEsXG4gICAqICAgICBcImRhdGVBdHRyaWJ1dGVcIjogXCIyMDIwLTAyLTI2VDA5OjQxOjU3WlwiLFxuICAgKiAgICAgXCJib29sZWFuQXR0cmlidXRlXCI6IHRydWVcbiAgICogICB9XG4gICAqIH1cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uIHJlc3VsdCwgeW91IGhhdmUgdG8gaGFuZGxlIGVycm9yIGFuZCBkbyByZXRyaWVzIHlvdXJzZWxmXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgc3VibWl0RXZlbnRJbW1lZGlhdGVseShldmVudDogQ3VzdG9tRXZlbnQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB1c2VyIGRhdGEgdG8gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQG5hbWUgc2F2ZVVzZXJcbiAgICogQHBhcmFtIHVzZXJEYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyRGF0YS4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdXNlciBkYXRhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVVc2VyKHVzZXJEYXRhOiBVc2VyRGF0YSk6IFByb21pc2U8VXNlckRhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggdXNlciBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQG5hbWUgZmV0Y2hVc2VyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZldGNoVXNlcigpOiBQcm9taXNlPFVzZXJEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdXNlciBkYXRhIGZyb20gdGhlIGxvY2FsbHkgc3RvcmVkIGNhY2hlLlxuICAgKlxuICAgKiBAbmFtZSBnZXRVc2VyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVzZXIoKTogUHJvbWlzZTxVc2VyRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBpbnN0YWxsYXRpb24gdG8gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQG5hbWUgc2F2ZUluc3RhbGxhdGlvblxuICAgKiBAcGFyYW0gaW5zdGFsbGF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YWxsYXRpb24uIEFuIG9iamVjdCBjb250YWluaW5nIGluc3RhbGxhdGlvbiBkYXRhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9uOiBJbnN0YWxsYXRpb24pOiBQcm9taXNlPEluc3RhbGxhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGluc3RhbGxhdGlvbiBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBuYW1lIGZldGNoSW5zdGFsbGF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZldGNoSW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SW5zdGFsbGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgbG9jYWxseSBjYWNoZWQgaW5zdGFsbGF0aW9uLlxuICAgKlxuICAgKiBAbmFtZSBnZXRJbnN0YWxsYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SW5zdGFsbGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW55IGluc3RhbGxhdGlvbiBhcyBwcmltYXJ5IGZvciB0aGlzIHVzZXIuXG4gICAqXG4gICAqIEBuYW1lIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHVzaFJlZ2lzdHJhdGlvbklkIG9mIGFuIGluc3RhbGxhdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByaW1hcnkgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeShwdXNoUmVnaXN0cmF0aW9uSWQ6IHN0cmluZywgcHJpbWFyeTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIHBlcnNvbmFsaXphdGlvbiBvZiB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24gb24gdGhlIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAbmFtZSBwZXJzb25hbGl6ZVxuICAgKiBAcGFyYW0gY29udGV4dFxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dC4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdXNlciBpZGVudGl0eSBpbmZvcm1hdGlvbiBhcyB3ZWxsIGFzIGFkZGl0aW9uYWwgdXNlciBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwZXJzb25hbGl6ZShjb250ZXh0OiBQZXJzb25hbGl6ZUNvbnRleHQpOiBQcm9taXNlPFBlcnNvbmFsaXplQ29udGV4dD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBkZXBlcnNvbmFsaXphdGlvbiBvZiB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24gb24gdGhlIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAbmFtZSBkZXBlcnNvbmFsaXplXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlcGVyc29uYWxpemUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgZGVwZXJzb25hbGl6YXRpb24gb2YgdGhlIGluc3RhbGxhdGlvbiByZWZlcmVuY2VkIGJ5IHB1c2hSZWdpc3RyYXRpb25JZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHB1c2hSZWdpc3RyYXRpb25JZCBvZiB0aGUgcmVtb3RlIGluc3RhbGxhdGlvbiB0byBkZXBlcnNvbmFsaXplXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlcGVyc29uYWxpemVJbnN0YWxsYXRpb24ocHVzaFJlZ2lzdHJhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIG1lc3NhZ2VzIGFzIHNlZW5cbiAgICpcbiAgICogQG5hbWUgbWFya01lc3NhZ2VzU2VlblxuICAgKiBAcGFyYW0ge0FycmF5fSBtZXNzYWdlSWRzIG9mIGlkZW50aWZpZXJzIG9mIG1lc3NhZ2UgdG8gbWFyayBhcyBzZWVuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1hcmtNZXNzYWdlc1NlZW4obWVzc2FnZUlkczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBidWlsdC1pbiBlcnJvciBkaWFsb2cgc28gdGhhdCB1c2VyIGNhbiByZXNvbHZlIGVycm9ycyBkdXJpbmcgc2RrIGluaXRpYWxpemF0aW9uLlxuICAgKlxuICAgKiBAbmFtZSBzaG93RGlhbG9nRm9yRXJyb3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVycm9yQ29kZSB0byBkaXNwbGF5IGRpYWxvZyBmb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd0RpYWxvZ0ZvckVycm9yKGVycm9yQ29kZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGVmYXVsdE1lc3NhZ2VTdG9yYWdlKCk6IERlZmF1bHRNZXNzYWdlU3RvcmFnZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGNoYXQgdmlldy5cbiAgICpcbiAgICogQG5hbWUgc2hvd0NoYXRcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0ge0NoYXRDb25maWd9IGNoYXQgY29uZmlnXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dDaGF0KGNvbmZpZz86IENoYXRDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBjaGF0IHNldHRpbmdzIGZvciBpT1Mgb25seVxuICAgKlxuICAgKiBAcGFyYW0gc2V0dGluZ3NcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0dXBpT1NDaGF0U2V0dGluZ3Moc2V0dGluZ3M6IENoYXRTZXR0aW5nc0lPUyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdW5yZWFkIGluLWFwcCBjaGF0IHB1c2ggbWVzc2FnZXMgY291bnRlci5cbiAgICogVGhlIGNvdW50ZXIgaW5jcmVtZW50cyBlYWNoIHRpbWUgdGhlIGFwcGxpY2F0aW9uIHJlY2VpdmVzIGluLWFwcCBjaGF0IHB1c2ggbWVzc2FnZVxuICAgKiAodGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiBjaGF0IHNjcmVlbiBpcyBpbmFjdGl2ZSBvciB0aGUgYXBwbGljYXRpb24gaXMgaW4gYmFja2dyb3VuZC90ZXJtaW5hdGVkIHN0YXRlKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRNZXNzYWdlQ291bnRlcihvblJlc3VsdDogKGNvdW50ZXI6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2JpbGVNZXNzYWdpbmcgcGx1Z2luIGF1dG9tYXRpY2FsbHkgcmVzZXRzIHRoZSBjb3VudGVyIHRvIDAgd2hlbmV2ZXIgdXNlciBvcGVucyB0aGUgaW4tYXBwIGNoYXQgc2NyZWVuLlxuICAgKiBIb3dldmVyLCB1c2UgdGhlIGZvbGxvd2luZyBBUEkgaW4gY2FzZSB5b3UgbmVlZCB0byBtYW51YWxseSByZXNldCB0aGUgY291bnRlci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRNZXNzYWdlQ291bnRlcigpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==