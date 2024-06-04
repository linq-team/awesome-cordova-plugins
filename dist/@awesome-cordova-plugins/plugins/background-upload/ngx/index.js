import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaInstance } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
export var UploadState;
(function (UploadState) {
    UploadState["UPLOADED"] = "UPLOADED";
    UploadState["FAILED"] = "FAILED";
    UploadState["UPLOADING"] = "UPLOADING";
    UploadState["INITIALIZED"] = "INITIALIZED";
})(UploadState || (UploadState = {}));
var FileTransferManager = /** @class */ (function () {
    function FileTransferManager(options) {
        this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
    }
    FileTransferManager.prototype.startUpload = function (payload) { return cordovaInstance(this, "startUpload", {}, arguments); };
    FileTransferManager.prototype.removeUpload = function (id) { return cordovaInstance(this, "removeUpload", {}, arguments); };
    FileTransferManager.prototype.acknowledgeEvent = function (id) { return cordovaInstance(this, "acknowledgeEvent", {}, arguments); };
    FileTransferManager.prototype.destroy = function () { return cordovaInstance(this, "destroy", {}, arguments); };
    return FileTransferManager;
}());
export { FileTransferManager };
var BackgroundUpload = /** @class */ (function (_super) {
    __extends(BackgroundUpload, _super);
    function BackgroundUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUpload.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUpload.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackgroundUpload, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BackgroundUpload.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackgroundUpload });
    BackgroundUpload.pluginName = "BackgroundUpload";
    BackgroundUpload.plugin = "@spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.pluginRef = "FileTransferManager";
    BackgroundUpload.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.install = "ionic cordova plugin add @spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.platforms = ["Android", "iOS"];
    BackgroundUpload = __decorate([], BackgroundUpload);
    return BackgroundUpload;
}(AwesomeCordovaNativePlugin));
export { BackgroundUpload };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackgroundUpload, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFja2dyb3VuZC11cGxvYWQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0NBQXVELE1BQU0sK0JBQStCLENBQUM7O0FBSXBHLE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsb0NBQXFCLENBQUE7SUFDckIsZ0NBQWlCLENBQUE7SUFDakIsc0NBQXVCLENBQUE7SUFDdkIsMENBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCOztJQXdDQyw2QkFBWSxPQUFtQjtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUdELHlDQUFXLGFBQUMsT0FBMEI7SUFLdEMsMENBQVksYUFBQyxFQUFPO0lBS3BCLDhDQUFnQixhQUFDLEVBQVU7SUFLM0IscUNBQU87OEJBdEVUOzs7O0lBd0dzQyxvQ0FBMEI7OztRQUM5RCx5QkFBbUIsR0FBRyxtQkFBbUIsQ0FBQzs7O0lBRTFDLCtCQUFJLEdBQUosVUFBSyxPQUFtQjtRQUN0QixPQUFPLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztrSEFMVSxnQkFBZ0I7c0hBQWhCLGdCQUFnQjs7Ozs7OztJQUFoQixnQkFBZ0Isa0JBQWhCLGdCQUFnQjsyQkF4RzdCO0VBd0dzQywwQkFBMEI7U0FBbkQsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmFJbnN0YW5jZSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBlbnVtIFVwbG9hZFN0YXRlIHtcbiAgVVBMT0FERUQgPSAnVVBMT0FERUQnLFxuICBGQUlMRUQgPSAnRkFJTEVEJyxcbiAgVVBMT0FESU5HID0gJ1VQTE9BRElORycsXG4gIElOSVRJQUxJWkVEID0gJ0lOSVRJQUxJWkVEJyxcbn1cblxuZXhwb3J0IHR5cGUgVXBsb2FkU3RhdGVUeXBlID0ga2V5b2YgdHlwZW9mIFVwbG9hZFN0YXRlO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZEV2ZW50IHtcbiAgaWQ/OiBzdHJpbmc7IC8vIGlkIG9mIHRoZSB1cGxvYWRcbiAgc3RhdGU/OiBVcGxvYWRTdGF0ZVR5cGU7IC8vIHN0YXRlIG9mIHRoZSB1cGxvYWQgKGVpdGhlciBVUExPQURJTkcsIFVQTE9BREVEIG9yIEZBSUxFRClcbiAgc3RhdHVzQ29kZT86IG51bWJlcjsgLy8gcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSBzZXJ2ZXIgYWZ0ZXIgdXBsb2FkIGlzIGNvbXBsZXRlZFxuICBzZXJ2ZXJSZXNwb25zZT86IGFueTsgLy8gc2VydmVyIHJlc3BvbnNlIHJlY2VpdmVkIGFmdGVyIHVwbG9hZCBpcyBjb21wbGV0ZWRcbiAgZXJyb3I/OiBhbnk7IC8vIGVycm9yIG1lc3NhZ2UgaW4gY2FzZSBvZiBmYWlsdXJlXG4gIGVycm9yQ29kZT86IG51bWJlcjsgLy8gZXJyb3IgY29kZSBmb3IgYW55IGV4Y2VwdGlvbiBlbmNvdW50ZXJlZFxuICBwcm9ncmVzcz86IGFueTsgLy8gcHJvZ3Jlc3MgZm9yIG9uZ29pbmcgdXBsb2FkXG4gIGV2ZW50SWQ/OiBzdHJpbmc7IC8vIGlkIG9mIHRoZSBldmVudFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZUTVBheWxvYWRPcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgZmlsZVBhdGg6IHN0cmluZztcbiAgZmlsZUtleT86IHN0cmluZztcbiAgc2VydmVyVXJsOiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvblRpdGxlPzogc3RyaW5nO1xuICBoZWFkZXJzPzoge1xuICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG4gIH07XG4gIHBhcmFtZXRlcnM/OiB7XG4gICAgW25hbWU6IHN0cmluZ106IHN0cmluZztcbiAgfTtcbiAgW3Byb3A6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGVE1PcHRpb25zIHtcbiAgY2FsbEJhY2s6IChldmVudDogVXBsb2FkRXZlbnQpID0+IGFueTtcbiAgY29uZmlnPzoge1xuICAgIHBhcmFsbGVsVXBsb2Fkc0xpbWl0PzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyTWFuYWdlciB7XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogRlRNT3B0aW9ucykge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gd2luZG93LkZpbGVUcmFuc2Zlck1hbmFnZXIuaW5pdChvcHRpb25zLmNvbmZpZywgb3B0aW9ucy5jYWxsQmFjayk7XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc3RhcnRVcGxvYWQocGF5bG9hZDogRlRNUGF5bG9hZE9wdGlvbnMpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlVXBsb2FkKGlkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBhY2tub3dsZWRnZUV2ZW50KGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQG5hbWUgQmFja2dyb3VuZFVwbG9hZFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYWNrZ3JvdW5kVXBsb2FkIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhY2tncm91bmQtdXBsb2FkL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2dyb3VuZFVwbG9hZDogQmFja2dyb3VuZFVwbG9hZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFja2dyb3VuZFVwbG9hZC5pbml0KHt9KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhY2tncm91bmRVcGxvYWQnLFxuICBwbHVnaW46ICdAc3Bvb25jb25zdWx0aW5nL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtdXBsb2FkJyxcbiAgcGx1Z2luUmVmOiAnRmlsZVRyYW5zZmVyTWFuYWdlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc3Bvb25jb25zdWx0aW5nL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtdXBsb2FkJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBAc3Bvb25jb25zdWx0aW5nL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtdXBsb2FkJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRVcGxvYWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEZpbGVUcmFuc2Zlck1hbmFnZXIgPSBGaWxlVHJhbnNmZXJNYW5hZ2VyO1xuXG4gIGluaXQob3B0aW9uczogRlRNT3B0aW9ucyk6IEZpbGVUcmFuc2Zlck1hbmFnZXIge1xuICAgIHJldHVybiBuZXcgRmlsZVRyYW5zZmVyTWFuYWdlcihvcHRpb25zKTtcbiAgfVxufVxuIl19