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
var FlashlightOriginal = /** @class */ (function (_super) {
    __extends(FlashlightOriginal, _super);
    function FlashlightOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlashlightOriginal.prototype.available = function () { return cordova(this, "available", {}, arguments); };
    FlashlightOriginal.prototype.switchOn = function () { return cordova(this, "switchOn", {}, arguments); };
    FlashlightOriginal.prototype.switchOff = function () { return cordova(this, "switchOff", {}, arguments); };
    FlashlightOriginal.prototype.toggle = function () { return cordova(this, "toggle", {}, arguments); };
    FlashlightOriginal.prototype.isSwitchedOn = function () { return cordova(this, "isSwitchedOn", { "sync": true }, arguments); };
    FlashlightOriginal.pluginName = "Flashlight";
    FlashlightOriginal.plugin = "cordova-plugin-flashlight";
    FlashlightOriginal.pluginRef = "window.plugins.flashlight";
    FlashlightOriginal.repo = "https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin";
    FlashlightOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return FlashlightOriginal;
}(AwesomeCordovaNativePlugin));
var Flashlight = new FlashlightOriginal();
export { Flashlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmxhc2hsaWdodC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTJCNUQsOEJBQTBCOzs7O0lBT3hELDhCQUFTO0lBVVQsNkJBQVE7SUFVUiw4QkFBUztJQVVULDJCQUFNO0lBWU4saUNBQVk7Ozs7OztxQkE3RWQ7RUE0QmdDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBGbGFzaGxpZ2h0XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzd2l0Y2ggdGhlIGZsYXNobGlnaHQgLyB0b3JjaCBvZiB0aGUgZGV2aWNlIG9uIGFuZCBvZmYuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1mbGFzaGxpZ2h0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0ZsYXNobGlnaHQgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9GbGFzaGxpZ2h0LVBob25lR2FwLVBsdWdpbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZsYXNobGlnaHQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmxhc2hsaWdodC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmxhc2hsaWdodDogRmxhc2hsaWdodCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mbGFzaGxpZ2h0LnN3aXRjaE9uKCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmxhc2hsaWdodCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZsYXNobGlnaHQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5mbGFzaGxpZ2h0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9GbGFzaGxpZ2h0LVBob25lR2FwLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmxhc2hsaWdodCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZmxhc2hsaWdodCBpcyBhdmFpbGFibGVcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gc3RhdGluZyBpZiB0aGUgZmxhc2hsaWdodCBpcyBhdmFpbGFibGUuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGF2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoZXMgdGhlIGZsYXNobGlnaHQgb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN3aXRjaE9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2hlcyB0aGUgZmxhc2hsaWdodCBvZmZcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN3aXRjaE9mZigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZmxhc2hsaWdodFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0b2dnbGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBmbGFzaGxpZ2h0IGlzIHR1cm5lZCBvbi5cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaXNTd2l0Y2hlZE9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19