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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var StatusBarOriginal = /** @class */ (function (_super) {
    __extends(StatusBarOriginal, _super);
    function StatusBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBarOriginal.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBarOriginal.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    StatusBarOriginal.pluginName = "StatusBar";
    StatusBarOriginal.plugin = "cordova-plugin-statusbar";
    StatusBarOriginal.pluginRef = "StatusBar";
    StatusBarOriginal.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBarOriginal.platforms = ["Android", "iOS", "Windows"];
    return StatusBarOriginal;
}(AwesomeCordovaNativePlugin));
var StatusBar = new StatusBarOriginal();
export { StatusBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3RhdHVzLWJhci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDOztJQWlDOUUsNkJBQTBCOzs7O0lBZ0J2RCxtQ0FBZSxhQUFDLFdBQW9CO0lBUXBDLGdDQUFZO0lBUVoscUNBQWlCO0lBUWpCLHlDQUFxQjtJQVFyQixvQ0FBZ0I7SUFhaEIseUNBQXFCLGFBQUMsU0FBaUI7SUFZdkMsOENBQTBCLGFBQUMsU0FBaUI7SUFRNUMsd0JBQUk7SUFRSix3QkFBSTswQkFwRkosZ0NBQVM7Ozs7Ozs7Ozs7O29CQXZDWDtFQWtDK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3RhdHVzIEJhclxuICogQHByZW1pZXIgc3RhdHVzYmFyXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcbiAqIEBkZXNjcmlwdGlvblxuICogTWFuYWdlIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXRpdmUgc3RhdHVzIGJhci5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTdGF0dXNCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3N0YXR1cy1iYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXR1c0JhcjogU3RhdHVzQmFyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBsZXQgc3RhdHVzIGJhciBvdmVybGF5IHdlYnZpZXdcbiAqIHRoaXMuc3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyh0cnVlKTtcbiAqXG4gKiAvLyBzZXQgc3RhdHVzIGJhciB0byB3aGl0ZVxuICogdGhpcy5zdGF0dXNCYXIuYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoJyNmZmZmZmYnKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0YXR1c0JhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcicsXG4gIHBsdWdpblJlZjogJ1N0YXR1c0JhcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIFN0YXR1c0JhciBpcyBjdXJyZW50bHkgdmlzaWJsZSBvciBub3QuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgc3RhdHVzIGJhciBvdmVybGF5cyB0aGUgbWFpbiBhcHAgdmlldy4gVGhlIGRlZmF1bHRcbiAgICogaXMgdHJ1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBkb2VzT3ZlcmxheSAgV2hldGhlciB0aGUgc3RhdHVzIGJhciBvdmVybGF5cyB0aGUgbWFpbiBhcHAgdmlldy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBvdmVybGF5c1dlYlZpZXcoZG9lc092ZXJsYXk6IGJvb2xlYW4pIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgZGVmYXVsdCBzdGF0dXNiYXIgKGRhcmsgdGV4dCwgZm9yIGxpZ2h0IGJhY2tncm91bmRzKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdHlsZURlZmF1bHQoKSB7fVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGxpZ2h0Q29udGVudCBzdGF0dXNiYXIgKGxpZ2h0IHRleHQsIGZvciBkYXJrIGJhY2tncm91bmRzKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdHlsZUxpZ2h0Q29udGVudCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgYmxhY2tUcmFuc2x1Y2VudCBzdGF0dXNiYXIgKGxpZ2h0IHRleHQsIGZvciBkYXJrIGJhY2tncm91bmRzKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdHlsZUJsYWNrVHJhbnNsdWNlbnQoKSB7fVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGJsYWNrT3BhcXVlIHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlQmxhY2tPcGFxdWUoKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0YXR1cyBiYXIgdG8gYSBzcGVjaWZpYyBuYW1lZCBjb2xvci4gVmFsaWQgb3B0aW9uczpcbiAgICogYmxhY2ssIGRhcmtHcmF5LCBsaWdodEdyYXksIHdoaXRlLCBncmF5LCByZWQsIGdyZWVuLCBibHVlLCBjeWFuLCB5ZWxsb3csIG1hZ2VudGEsIG9yYW5nZSwgcHVycGxlLCBicm93bi5cbiAgICpcbiAgICogaU9TIG5vdGU6IHlvdSBtdXN0IGNhbGwgU3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyhmYWxzZSkgdG8gZW5hYmxlIGNvbG9yIGNoYW5naW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3JOYW1lICBUaGUgbmFtZSBvZiB0aGUgY29sb3IgKGZyb20gYWJvdmUpXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYmFja2dyb3VuZENvbG9yQnlOYW1lKGNvbG9yTmFtZTogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0YXR1cyBiYXIgdG8gYSBzcGVjaWZpYyBoZXggY29sb3IgKENTUyBzaG9ydGhhbmQgc3VwcG9ydGVkISkuXG4gICAqXG4gICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0cmluZyAgVGhlIGhleCB2YWx1ZSBvZiB0aGUgY29sb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoaGV4U3RyaW5nOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIFN0YXR1c0JhclxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGhpZGUoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBTdGF0dXNCYXJcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzaG93KCkge31cbn1cbiJdfQ==