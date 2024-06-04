import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var BackgroundMode = /** @class */ (function (_super) {
    __extends(BackgroundMode, _super);
    function BackgroundMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundMode.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    BackgroundMode.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    BackgroundMode.prototype.setEnabled = function (enable) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.fireEvent = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return cordova(this, "fireEvent", { "sync": true }, arguments);
    };
    BackgroundMode.prototype.isEnabled = function () { return cordova(this, "isEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.isActive = function () { return cordova(this, "isActive", { "sync": true }, arguments); };
    BackgroundMode.prototype.setDefaults = function (overrides) { return cordova(this, "setDefaults", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.configure = function (options) { return cordova(this, "configure", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.on = function (event) { return cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    BackgroundMode.prototype.un = function (event, callback) { return cordova(this, "un", {}, arguments); };
    BackgroundMode.prototype.moveToBackground = function () { return cordova(this, "moveToBackground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableWebViewOptimizations = function () { return cordova(this, "disableWebViewOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.moveToForeground = function () { return cordova(this, "moveToForeground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.overrideBackButton = function () { return cordova(this, "overrideBackButton", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.excludeFromTaskList = function () { return cordova(this, "excludeFromTaskList", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.isScreenOff = function (fn) { return cordova(this, "isScreenOff", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.wakeUp = function () { return cordova(this, "wakeUp", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.unlock = function () { return cordova(this, "unlock", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableBatteryOptimizations = function () { return cordova(this, "disableBatteryOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackgroundMode, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BackgroundMode.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackgroundMode });
    BackgroundMode.pluginName = "BackgroundMode";
    BackgroundMode.plugin = "cordova-plugin-background-mode";
    BackgroundMode.pluginRef = "cordova.plugins.backgroundMode";
    BackgroundMode.repo = "https://github.com/katzer/cordova-plugin-background-mode";
    BackgroundMode.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "Windows"];
    BackgroundMode = __decorate([], BackgroundMode);
    return BackgroundMode;
}(AwesomeCordovaNativePlugin));
export { BackgroundMode };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackgroundMode, decorators: [{
            type: Injectable
        }], propDecorators: { enable: [], disable: [], setEnabled: [], fireEvent: [], isEnabled: [], isActive: [], setDefaults: [], configure: [], on: [], un: [], moveToBackground: [], disableWebViewOptimizations: [], moveToForeground: [], overrideBackButton: [], excludeFromTaskList: [], isScreenOff: [], wakeUp: [], unlock: [], disableBatteryOptimizations: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFja2dyb3VuZC1tb2RlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQTRFRSxrQ0FBMEI7Ozs7SUFRNUQsK0JBQU07SUFTTixnQ0FBTztJQWFQLG1DQUFVLGFBQUMsTUFBZTtJQVkxQixrQ0FBUyxhQUFDLEtBQWE7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7O0lBWXZDLGtDQUFTO0lBWVQsaUNBQVE7SUFjUixvQ0FBVyxhQUFDLFNBQXVDO0lBWW5ELGtDQUFTLGFBQUMsT0FBcUM7SUFjL0MsMkJBQUUsYUFBQyxLQUFhO0lBWWhCLDJCQUFFLGFBQUMsS0FBYSxFQUFFLFFBQWtDO0lBV3BELHlDQUFnQjtJQVNoQixvREFBMkI7SUFTM0IseUNBQWdCO0lBU2hCLDJDQUFrQjtJQVNsQiw0Q0FBbUI7SUFXbkIsb0NBQVcsYUFBQyxFQUEyQjtJQVN2QywrQkFBTTtJQVNOLCtCQUFNO0lBU04sb0RBQTJCO2dIQTNNaEIsY0FBYztvSEFBZCxjQUFjOzs7Ozs7SUFBZCxjQUFjLGtCQUFkLGNBQWM7eUJBOUUzQjtFQThFb0MsMEJBQTBCO1NBQWpELGNBQWM7NEZBQWQsY0FBYztrQkFEMUIsVUFBVTs4QkFTVCxNQUFNLE1BU04sT0FBTyxNQWFQLFVBQVUsTUFZVixTQUFTLE1BWVQsU0FBUyxNQVlULFFBQVEsTUFjUixXQUFXLE1BWVgsU0FBUyxNQWNULEVBQUUsTUFZRixFQUFFLE1BV0YsZ0JBQWdCLE1BU2hCLDJCQUEyQixNQVMzQixnQkFBZ0IsTUFTaEIsa0JBQWtCLE1BU2xCLG1CQUFtQixNQVduQixXQUFXLE1BU1gsTUFBTSxNQVNOLE1BQU0sTUFTTiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb25zIGl0ZW1zIHRoYXQgY2FuIGJlIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSBiYWNrZ3JvdW5kIHRhc2tcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiBiYWNrZ3JvdW5kIHRhc2tcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBsb29rIGZvciBgPGljb24gbmFtZT4ucG5nYCBpbiBwbGF0Zm9ybXMvYW5kcm9pZC9yZXMvZHJhd2FibGV8bWlwbWFwXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIG5vdGlmaWNhdGlvbiBjaXJjbGVcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBhcHAgd2lsbCBjb21lIHRvIGZvcmVncm91bmQgd2hlbiB0YXBwaW5nIG9uIHRoZSBub3RpZmljYXRpb24uIElmIGZhbHNlLCBwbHVnaW4gd29uJ3QgY29tZSB0byBmb3JlZ3JvdW5kIHdoZW4gdGFwcGVkLlxuICAgKi9cbiAgcmVzdW1lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hlbiBzZXQgdG8gZmFsc2UgbWFrZXMgdGhlIG5vdGlmaWNhdGlvbnMgdmlzaWJsZSBvbiBsb2NrIHNjcmVlbiAoQW5kcm9pZCA1LjArKVxuICAgKi9cbiAgaGlkZGVuPzogYm9vbGVhbjtcblxuICAvKiogQmlnIHRleHQgKi9cbiAgYmlnVGV4dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRoYXQgc2Nyb2xscyBpdHNlbGYgb24gc3RhdHVzYmFyXG4gICAqL1xuICB0aWNrZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlmIHRydWUgcGx1Z2luIHdpbGwgbm90IGRpc3BsYXkgYSBub3RpZmljYXRpb24uIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqL1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhY2tncm91bmQgTW9kZVxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBwcmV2ZW50IHRoZSBhcHAgZnJvbSBnb2luZyB0byBzbGVlcCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZS4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc2l0OiBodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYWNrZ3JvdW5kTW9kZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iYWNrZ3JvdW5kLW1vZGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRNb2RlOiBCYWNrZ3JvdW5kTW9kZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5iYWNrZ3JvdW5kTW9kZS5lbmFibGUoKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhY2tncm91bmRNb2RlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJhY2tncm91bmRNb2RlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbkZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRNb2RlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRW5hYmxlIHRoZSBiYWNrZ3JvdW5kIG1vZGUuXG4gICAqIE9uY2UgY2FsbGVkLCBwcmV2ZW50cyB0aGUgYXBwIGZyb20gYmVpbmcgcGF1c2VkIHdoaWxlIGluIGJhY2tncm91bmQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZW5hYmxlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKiBPbmNlIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaGFzIGJlZW4gZGlzYWJsZWQsIHRoZSBhcHAgd2lsbCBiZSBwYXVzZWQgd2hlbiBpbiBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGRpc2FibGUoKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBiYWNrZ3JvdW5kIG1vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBlbmFibGUge2Jvb2xlYW59IFRoZSBzdGF0dXMgdG8gc2V0IGZvci5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0RW5hYmxlZChlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZpcmUgZXZlbnQgd2l0aCBnaXZlbiBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQncyBuYW1lLlxuICAgKiBAcGFyYW0gYXJncyB7YXJyYXl9IFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50cy5cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBmaXJlRXZlbnQoZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYmFja2dyb3VuZCBtb2RlIGlzIGVuYWJsZWQgb3Igbm90LlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJhY2tncm91bmQgbW9kZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSBpbmZvcm1hdGlvbiBpZiB0aGUgYmFja2dyb3VuZCBtb2RlIGlzIGFjdGl2ZS5cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybnMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgYWN0aXZlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVyd3JpdGUgdGhlIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAqIEF2YWlsYWJsZSBvbmx5IGZvciBBbmRyb2lkIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gb3ZlcnJpZGVzIHtCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb259IERpY3Qgb2Ygb3B0aW9ucyB0byBiZSBvdmVycmlkZGVuLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIH0pXG4gIHNldERlZmF1bHRzKG92ZXJyaWRlcz86IEJhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogTW9kaWZ5IHRoZSBkaXNwbGF5ZWQgaW5mb3JtYXRpb24uXG4gICAqIEF2YWlsYWJsZSBvbmx5IGZvciBBbmRyb2lkIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0ge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gW29wdGlvbnNdIEFueSBvcHRpb25zIHlvdSB3YW50IHRvIHVwZGF0ZS4gU2VlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgY29uZmlndXJlKG9wdGlvbnM/OiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGNhbGxiYWNrIGZvciBnaXZlbiBldmVudC5cbiAgICogPiBBdmFpbGFibGUgZXZlbnRzIGFyZSBgZW5hYmxlYCwgYGRpc2FibGVgLCBgYWN0aXZhdGVgLCBgZGVhY3RpdmF0ZWAgYW5kIGBmYWlsdXJlYC5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiBmb3IgZXZlbnRzIHRoYXQgdGhlIHBsdWdpbiBmaXJlcy4gQXZhaWxhYmxlIGV2ZW50cyBhcmUgYGVuYWJsZWAsIGBkaXNhYmxlYCwgYGFjdGl2YXRlYCwgYGRlYWN0aXZhdGVgIGFuZCBgZmFpbHVyZWAuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259IFRoZSBmdW5jdGlvbiB0byBiZSBleGVjIGFzIGNhbGxiYWNrLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQgYWxsb3dzIHRvIHByb2dyYW1tYXRpY2FsbHkgbW92ZSBmcm9tIGZvcmVncm91bmQgdG8gYmFja2dyb3VuZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG1vdmVUb0JhY2tncm91bmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBFbmFibGUgR1BTLXRyYWNraW5nIGluIGJhY2tncm91bmQgKEFuZHJvaWQpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZGlzYWJsZVdlYlZpZXdPcHRpbWl6YXRpb25zKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQW5kcm9pZCBhbGxvd3MgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZyb20gYmFja2dyb3VuZCB0byBmb3JlZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbW92ZVRvRm9yZWdyb3VuZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIHRvIGdvIHRvIGJhY2tncm91bmQgaW5zdGVhZCBvZiBjbG9zaW5nIHRoZSBhcHAuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBvdmVycmlkZUJhY2tCdXR0b24oKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBFeGNsdWRlIHRoZSBhcHAgZnJvbSB0aGUgcmVjZW50IHRhc2sgbGlzdC4gV29ya3Mgb24gQW5kcm9pZCA1LjArLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZXhjbHVkZUZyb21UYXNrTGlzdCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIHRoZSBzY3JlZW4gaXMgb2ZmLlxuICAgKlxuICAgKiBAcGFyYW0gZm4ge2Z1bmN0aW9ufSBDYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2l0aCBib29sZWFuIGFyZy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgaXNTY3JlZW5PZmYoZm46IChhcmcwOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUdXJuIHNjcmVlbiBvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgd2FrZVVwKCk6IHZvaWQge31cblxuICAvKipcbiAgICogVHVybiBzY3JlZW4gb24gYW5kIHNob3cgYXBwIGV2ZW4gbG9ja2VkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB1bmxvY2soKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBiYXR0ZXJ5IG9wdGltYXphdGlvbiBtb2RlIGZvciB0aGUgYXBwIChhbmRyb2lkIG9ubHkpXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlQmF0dGVyeU9wdGltaXphdGlvbnMoKTogdm9pZCB7fVxufVxuIl19