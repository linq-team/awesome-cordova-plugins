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
var InstagramOriginal = /** @class */ (function (_super) {
    __extends(InstagramOriginal, _super);
    function InstagramOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstagramOriginal.prototype.isInstalled = function () { return cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.share = function (canvasIdOrDataUrl, caption) { return cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.shareAsset = function (assetLocalIdentifier) { return cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    InstagramOriginal.pluginName = "Instagram";
    InstagramOriginal.plugin = "cordova-instagram-plugin";
    InstagramOriginal.pluginRef = "Instagram";
    InstagramOriginal.repo = "https://github.com/vstirbu/InstagramPlugin";
    InstagramOriginal.platforms = ["Android", "iOS"];
    return InstagramOriginal;
}(AwesomeCordovaNativePlugin));
var Instagram = new InstagramOriginal();
export { Instagram };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW5zdGFncmFtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBMkI3RCw2QkFBMEI7Ozs7SUFTdkQsK0JBQVc7SUFlWCx5QkFBSyxhQUFDLGlCQUF5QixFQUFFLE9BQWdCO0lBYWpELDhCQUFVLGFBQUMsb0JBQTRCOzs7Ozs7b0JBakV6QztFQTRCK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEluc3RhZ3JhbVxuICogQGRlc2NyaXB0aW9uIFNoYXJlIGEgcGhvdG8gd2l0aCB0aGUgaW5zdGFncmFtIGFwcFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbnN0YWdyYW0gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW5zdGFncmFtL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YWdyYW06IEluc3RhZ3JhbSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5pbnN0YWdyYW0uc2hhcmUoJ2RhdGE6aW1hZ2UvcG5nO3VoZHVoZjNoZmlmMzMnLCAnQ2FwdGlvbicpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTaGFyZWQhJykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luc3RhZ3JhbScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtaW5zdGFncmFtLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ0luc3RhZ3JhbScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdnN0aXJidS9JbnN0YWdyYW1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5zdGFncmFtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRGV0ZWN0IGlmIHRoZSBJbnN0YWdyYW0gYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW58c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXR1cm5zIGEgYm9vbGVhbiB2YWx1ZSBpZiBpbnN0YWxsZWQsIG9yIHRoZSBhcHAgdmVyc2lvbiBvbiBhbmRyb2lkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxuICB9KVxuICBpc0luc3RhbGxlZCgpOiBQcm9taXNlPGJvb2xlYW4gfCBzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgYW4gaW1hZ2Ugb24gSW5zdGFncmFtXG4gICAqIE5vdGU6IEluc3RhZ3JhbSBhcHAgc3RvcHBlZCBhY2NlcHRpbmcgcHJlLWZpbGxlZCBjYXB0aW9ucyBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZC4gQXMgYSB3b3JrLWFyb3VuZCwgdGhlIGNhcHRpb24gaXMgY29waWVkIHRvIHRoZSBjbGlwYm9hcmQuIFlvdSBoYXZlIHRvIGluZm9ybSB5b3VyIHVzZXJzIHRvIHBhc3RlIHRoZSBjYXB0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gY2FudmFzSWRPckRhdGFVcmwgVGhlIGNhbnZhcyBlbGVtZW50IGlkIG9yIHRoZSBkYXRhVVJMIG9mIHRoZSBpbWFnZSB0byBzaGFyZVxuICAgKiBAcGFyYW0gY2FwdGlvbiBUaGUgY2FwdGlvbiBvZiB0aGUgaW1hZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgaW1hZ2Ugd2FzIHNoYXJlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcbiAgfSlcbiAgc2hhcmUoY2FudmFzSWRPckRhdGFVcmw6IHN0cmluZywgY2FwdGlvbj86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGEgbGlicmFyeSBhc3NldCBvciB2aWRlb1xuICAgKlxuICAgKiBAcGFyYW0gYXNzZXRMb2NhbElkZW50aWZpZXIgQSBsb2NhbCBmaWxlVVJJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGltYWdlIHdhcyBzaGFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHNoYXJlQXNzZXQoYXNzZXRMb2NhbElkZW50aWZpZXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=