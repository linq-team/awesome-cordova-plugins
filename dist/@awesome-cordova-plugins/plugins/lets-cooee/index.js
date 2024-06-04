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
var CooeeOriginal = /** @class */ (function (_super) {
    __extends(CooeeOriginal, _super);
    function CooeeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CooeeOriginal.prototype.sendEvent = function (eventName, eventProperties) { return cordova(this, "sendEvent", {}, arguments); };
    CooeeOriginal.prototype.updateUserProfile = function (userProfile) { return cordova(this, "updateUserProfile", {}, arguments); };
    CooeeOriginal.prototype.setCurrentScreen = function (screenName) { return cordova(this, "setCurrentScreen", {}, arguments); };
    CooeeOriginal.prototype.getUserID = function () { return cordova(this, "getUserID", {}, arguments); };
    CooeeOriginal.prototype.addCooeeCTAListener = function () { return cordova(this, "addCooeeCTAListener", { "eventObservable": true, "event": "onCooeeCTAListener", "element": "document" }, arguments); };
    CooeeOriginal.pluginName = "Cooee";
    CooeeOriginal.plugin = "@letscooee/cordova-plugin";
    CooeeOriginal.pluginRef = "cordova.plugins.Cooee";
    CooeeOriginal.repo = "https://github.com/letscooee/cordova-plugin-cooee";
    CooeeOriginal.install = "ionic cordova plugin add @letscooee/cordova-plugin --variable COOEE_APP_ID=appId";
    CooeeOriginal.installVariables = ["COOEE_APP_ID"];
    CooeeOriginal.platforms = ["Android", "iOS"];
    return CooeeOriginal;
}(AwesomeCordovaNativePlugin));
var Cooee = new CooeeOriginal();
export { Cooee };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGV0cy1jb29lZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUNQLHlCQUEwQjs7OztJQVFuRCx5QkFBUyxhQUFDLFNBQWlCLEVBQUUsZUFBb0M7SUFVakUsaUNBQWlCLGFBQUMsV0FBZ0M7SUFVbEQsZ0NBQWdCLGFBQUMsVUFBa0I7SUFTbkMseUJBQVM7SUFhVCxtQ0FBbUI7Ozs7Ozs7O2dCQXJGckI7RUFtQzJCLDBCQUEwQjtTQUF4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBMZXRzIENvb2VlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFJIGRyaXZlbiBQZXJzb25hbGlzZWQgTm90aWZpY2F0aW9ucyBmb3IgQmV0dGVyIEN1c3RvbWVyIEVuZ2FnZW1lbnRcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvb2VlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xldHMtY29vZWUvbngnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2VlOiBDb29lZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY29vZWUuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDb29lZScsXG4gIHBsdWdpbjogJ0BsZXRzY29vZWUvY29yZG92YS1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQ29vZWUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xldHNjb29lZS9jb3Jkb3ZhLXBsdWdpbi1jb29lZScsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgQGxldHNjb29lZS9jb3Jkb3ZhLXBsdWdpbiAtLXZhcmlhYmxlIENPT0VFX0FQUF9JRD1hcHBJZCcsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQ09PRUVfQVBQX0lEJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29lZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNlbmQgdGhlIGdpdmVuIHVzZXIgZGF0YSBhbmQgdXNlciBwcm9wZXJ0aWVzIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugc28gdXNlciBjYW4gYmUgbm90aWZpZWQuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50UHJvcGVydGllcyB7UmVjb3JkPHN0cmluZywgYW55Pn0gUHJvcGVydGllcyBvZiB0aGUgZXZlbnRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBnaXZlbiB1c2VyIGRhdGEgYW5kIHVzZXIgcHJvcGVydGllcyB0byB0aGUgc2VydmVyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHNvIHVzZXIgY2FuIGJlIG5vdGlmaWVkLlxuICAgKiBAcGFyYW0gdXNlclByb2ZpbGUge1JlY29yZDxzdHJpbmcsIGFueT59IFVzZXIgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlVXNlclByb2ZpbGUodXNlclByb2ZpbGU6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBnaXZlbiBzY3JlZW4gbmFtZSB3aXRoIGV2ZXJ5IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHNvIHVzZXIgY2FuIGJlIG5vdGlmaWVkLlxuICAgKiBAcGFyYW0gc2NyZWVuTmFtZSB7c3RyaW5nfSBTY3JlZW4gbmFtZSB0byBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q3VycmVudFNjcmVlbihzY3JlZW5OYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlIENvb2VlJ3MgdXNlcklEIGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50IHVzZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB1c2VySWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVzZXJJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBjYWxsYmFjayBmb3IgdGhlIG9uQ29vZWVDVEFMaXN0ZW5lciBldmVudC5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxBbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgcmVjb3JkLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ29uQ29vZWVDVEFMaXN0ZW5lcicsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIGFkZENvb2VlQ1RBTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==