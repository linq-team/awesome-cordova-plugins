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
var KeychainOriginal = /** @class */ (function (_super) {
    __extends(KeychainOriginal, _super);
    function KeychainOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeychainOriginal.prototype.get = function (key, touchIDMessage) { return cordova(this, "get", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.set = function (key, value, useTouchID) { return cordova(this, "set", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.getJson = function (key, touchIDMessage) { return cordova(this, "getJson", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.setJson = function (key, obj, useTouchId) { return cordova(this, "setJson", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.remove = function (key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.pluginName = "Keychain";
    KeychainOriginal.plugin = "cordova-plugin-ios-keychain";
    KeychainOriginal.pluginRef = "window.Keychain";
    KeychainOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ios-keychain";
    KeychainOriginal.platforms = ["iOS"];
    return KeychainOriginal;
}(AwesomeCordovaNativePlugin));
var Keychain = new KeychainOriginal();
export { Keychain };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMva2V5Y2hhaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFrQzlELDRCQUEwQjs7OztJQVV0RCxzQkFBRyxhQUFDLEdBQVcsRUFBRSxjQUF1QjtJQWN4QyxzQkFBRyxhQUFDLEdBQVcsRUFBRSxLQUFnQyxFQUFFLFVBQW1CO0lBYXRFLDBCQUFPLGFBQUMsR0FBVyxFQUFFLGNBQXVCO0lBYzVDLDBCQUFPLGFBQUMsR0FBVyxFQUFFLEdBQVEsRUFBRSxVQUFvQjtJQVluRCx5QkFBTSxhQUFDLEdBQVc7Ozs7OzttQkFsR3BCO0VBbUM4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgS2V5Y2hhaW5cbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IGFuZCBzZXQgZGF0YSBpbiB0aGUgaU9TIEtleWNoYWluXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW5gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbS2V5Y2hhaW4gcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvcy1rZXljaGFpbikuXG4gKlxuICogU2VlIGFsc28gW1NlY3VyZSBTdG9yYWdlXShodHRwczovL2lvbmljLmlvL2RvY3Mvc2VjdXJlLXN0b3JhZ2UpIGZvciBtb3JlIHN1cHBvcnRlZCBwbGF0Zm9ybXMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEtleWNoYWluIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2tleWNoYWluL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrZXljaGFpbjogS2V5Y2hhaW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMua2V5Y2hhaW4uc2V0KGtleSwgdmFsdWUsIGZhbHNlKS50aGVuKCgpID0+IHtcbiAqICAgdGhpcy5rZXljaGFpbi5nZXQoa2V5KVxuICogICAgIC50aGVuKHZhbHVlID0+IGNvbnNvbGUubG9nKCdHb3QgdmFsdWUnLCB2YWx1ZSkpXG4gKiAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nJywgZXJyKSk7XG4gKiB9KVxuICogLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nJywgZXJyKSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdLZXljaGFpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvcy1rZXljaGFpbicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5LZXljaGFpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW4nLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtleWNoYWluIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0cmlldmVzIGEgdmFsdWUgZm9yIGEga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIGtleSB0byByZXRyaWV2ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RvdWNoSURNZXNzYWdlXSB0aGUgbWVzc2FnZSB0byBzaG93IHVuZGVybmVhdGggdGhlIFRvdWNoSUQgcHJvbXB0IChpZiBhbnkpXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXQoa2V5OiBzdHJpbmcsIHRvdWNoSURNZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHZhbHVlIGZvciBhIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxib29sZWFufSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZVRvdWNoSURdIHdoZXRoZXIgdG8gc3RvcmUgdGhlIHZhbHVlIHdpdGggc2VjdXJpdHkgc3VjaCB0aGF0IFRvdWNoSUQgd2lsbCBiZSBuZWVkZWQgdG8gZ3JhYiBpdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiwgdXNlVG91Y2hJRDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBKU09OIHZhbHVlIGZvciBhIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvdWNoSURNZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHNob3cgdW5kZXJuZWF0aCB0aGUgVG91Y2hJRCBwcm9tcHQgKGlmIGFueSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldEpzb24oa2V5OiBzdHJpbmcsIHRvdWNoSURNZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIEpTT04gdmFsdWUgZm9yIGEga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHthbnl9IG9iaiB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZVRvdWNoSWRdIFdldGhlciB0byBzdG9yZSB0aGUgdmFsdWUgd2l0aCBzZWN1cml0eSBzdWNoIHRoYXQgVG91Y2hJRCB3aWxsIGJlIG5lZWRlZCB0byBncmFiIGl0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzZXRKc29uKGtleTogc3RyaW5nLCBvYmo6IGFueSwgdXNlVG91Y2hJZD86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdmFsdWUgZm9yIGEga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIGtleSB0byByZW1vdmVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=