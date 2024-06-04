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
var TapticEngineOriginal = /** @class */ (function (_super) {
    __extends(TapticEngineOriginal, _super);
    function TapticEngineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngineOriginal.prototype.selection = function () { return cordova(this, "selection", {}, arguments); };
    TapticEngineOriginal.prototype.notification = function (options) { return cordova(this, "notification", {}, arguments); };
    TapticEngineOriginal.prototype.impact = function (options) { return cordova(this, "impact", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionStart = function () { return cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionChanged = function () { return cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionEnd = function () { return cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngineOriginal.pluginName = "TapticEngine";
    TapticEngineOriginal.plugin = "cordova-plugin-taptic-engine";
    TapticEngineOriginal.pluginRef = "TapticEngine";
    TapticEngineOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngineOriginal.platforms = ["iOS"];
    return TapticEngineOriginal;
}(AwesomeCordovaNativePlugin));
var TapticEngine = new TapticEngineOriginal();
export { TapticEngine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGFwdGljLWVuZ2luZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWlDMUQsZ0NBQTBCOzs7O0lBTzFELGdDQUFTO0lBWVQsbUNBQVksYUFBQyxPQUFrRDtJQWEvRCw2QkFBTSxhQUFDLE9BQWdEO0lBVXZELDRDQUFxQjtJQVVyQiw4Q0FBdUI7SUFVdkIsMENBQW1COzs7Ozs7dUJBL0ZyQjtFQWlDa0MsMEJBQTBCO1NBQS9DLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFRhcHRpYyBFbmdpbmVcbiAqIEBkZXNjcmlwdGlvblxuICogQW4gSW9uaWMgcGx1Z2luIHRvIHVzZSBUYXB0aWMgRW5naW5lIEFQSSBvbiBpUGhvbmUgNywgNyBQbHVzIG9yIG5ld2VyLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUYXB0aWNFbmdpbmUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdGFwdGljLWVuZ2luZS9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFwdGljOiBUYXB0aWNFbmdpbmUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMudGFwdGljLnNlbGVjdGlvbigpO1xuICpcbiAqIHRoaXMudGFwdGljLm5vdGlmaWNhdGlvbigpO1xuICpcbiAqIHRoaXMudGFwdGljLmltcGFjdCgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RhcHRpY0VuZ2luZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRhcHRpYy1lbmdpbmUnLFxuICBwbHVnaW5SZWY6ICdUYXB0aWNFbmdpbmUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLXRhcHRpYy1lbmdpbmUnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhcHRpY0VuZ2luZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFVzZSBzZWxlY3Rpb24gZmVlZGJhY2sgZ2VuZXJhdG9ycyB0byBpbmRpY2F0ZSBhIGNoYW5nZSBpbiBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBvbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWxlY3Rpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgdG8gaW5kaWNhdGUgc3VjY2Vzcy9mYWlsdXJlL3dhcm5pbmcgdG8gdGhlIHVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IHNob3VsZCBiZSBvZiB0aGUgdHlwZSB7IHR5cGU6ICdzdWNjZXNzJyB9IChvciAnd2FybmluZycvJ2Vycm9yJylcbiAgICogQHBhcmFtIHsnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InfSBvcHRpb25zLnR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIGFuZCByZWplY3RzIG9uIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG5vdGlmaWNhdGlvbihvcHRpb25zOiB7IHR5cGU6ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIHRvIGluZGljYXRlIHN1Y2Nlc3MvZmFpbHVyZS93YXJuaW5nIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBzaG91bGQgYmUgb2YgdGhlIHR5cGUgeyBzdHlsZTogJ2xpZ2h0JyB9IChvciAnbWVkaXVtJy8naGVhdnknKVxuICAgKiBAcGFyYW0geydsaWdodCcgfCAnbWVkaXVtJyB8ICdoZWF2eSd9IG9wdGlvbnMudHlwZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5zdHlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgb24gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW1wYWN0KG9wdGlvbnM6IHsgc3R5bGU6ICdsaWdodCcgfCAnbWVkaXVtJyB8ICdoZWF2eScgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGwgdGhlIHRhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGwgdGhlIHRhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGwgdGhlIHRhcHRpYyBlbmdpbmUgd2UgYXJlIGRvbmUgd2l0aCBhIGdlc3R1cmUuIFRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlc3R1cmVTZWxlY3Rpb25FbmQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==