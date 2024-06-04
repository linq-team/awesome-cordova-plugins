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
import { AwesomeCordovaNativePlugin, cordovaInstance } from '@awesome-cordova-plugins/core';
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
var BackgroundUploadOriginal = /** @class */ (function (_super) {
    __extends(BackgroundUploadOriginal, _super);
    function BackgroundUploadOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUploadOriginal.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUploadOriginal.pluginName = "BackgroundUpload";
    BackgroundUploadOriginal.plugin = "@spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.pluginRef = "FileTransferManager";
    BackgroundUploadOriginal.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.install = "ionic cordova plugin add @spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.platforms = ["Android", "iOS"];
    return BackgroundUploadOriginal;
}(AwesomeCordovaNativePlugin));
var BackgroundUpload = new BackgroundUploadOriginal();
export { BackgroundUpload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFja2dyb3VuZC11cGxvYWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrQ0FBdUQsTUFBTSwrQkFBK0IsQ0FBQztBQUlwRyxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLG9DQUFxQixDQUFBO0lBQ3JCLGdDQUFpQixDQUFBO0lBQ2pCLHNDQUF1QixDQUFBO0lBQ3ZCLDBDQUEyQixDQUFBO0FBQzdCLENBQUMsRUFMVyxXQUFXLEtBQVgsV0FBVyxRQUt0Qjs7SUF3Q0MsNkJBQVksT0FBbUI7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFHRCx5Q0FBVyxhQUFDLE9BQTBCO0lBS3RDLDBDQUFZLGFBQUMsRUFBTztJQUtwQiw4Q0FBZ0IsYUFBQyxFQUFVO0lBSzNCLHFDQUFPOzhCQXRFVDs7OztJQXdHc0Msb0NBQTBCOzs7UUFDOUQseUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7OztJQUUxQywrQkFBSSxHQUFKLFVBQUssT0FBbUI7UUFDdEIsT0FBTyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7MkJBN0dIO0VBd0dzQywwQkFBMEI7U0FBbkQsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhSW5zdGFuY2UsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgZW51bSBVcGxvYWRTdGF0ZSB7XG4gIFVQTE9BREVEID0gJ1VQTE9BREVEJyxcbiAgRkFJTEVEID0gJ0ZBSUxFRCcsXG4gIFVQTE9BRElORyA9ICdVUExPQURJTkcnLFxuICBJTklUSUFMSVpFRCA9ICdJTklUSUFMSVpFRCcsXG59XG5cbmV4cG9ydCB0eXBlIFVwbG9hZFN0YXRlVHlwZSA9IGtleW9mIHR5cGVvZiBVcGxvYWRTdGF0ZTtcblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRFdmVudCB7XG4gIGlkPzogc3RyaW5nOyAvLyBpZCBvZiB0aGUgdXBsb2FkXG4gIHN0YXRlPzogVXBsb2FkU3RhdGVUeXBlOyAvLyBzdGF0ZSBvZiB0aGUgdXBsb2FkIChlaXRoZXIgVVBMT0FESU5HLCBVUExPQURFRCBvciBGQUlMRUQpXG4gIHN0YXR1c0NvZGU/OiBudW1iZXI7IC8vIHJlc3BvbnNlIGNvZGUgcmV0dXJuZWQgYnkgc2VydmVyIGFmdGVyIHVwbG9hZCBpcyBjb21wbGV0ZWRcbiAgc2VydmVyUmVzcG9uc2U/OiBhbnk7IC8vIHNlcnZlciByZXNwb25zZSByZWNlaXZlZCBhZnRlciB1cGxvYWQgaXMgY29tcGxldGVkXG4gIGVycm9yPzogYW55OyAvLyBlcnJvciBtZXNzYWdlIGluIGNhc2Ugb2YgZmFpbHVyZVxuICBlcnJvckNvZGU/OiBudW1iZXI7IC8vIGVycm9yIGNvZGUgZm9yIGFueSBleGNlcHRpb24gZW5jb3VudGVyZWRcbiAgcHJvZ3Jlc3M/OiBhbnk7IC8vIHByb2dyZXNzIGZvciBvbmdvaW5nIHVwbG9hZFxuICBldmVudElkPzogc3RyaW5nOyAvLyBpZCBvZiB0aGUgZXZlbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGVE1QYXlsb2FkT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIGZpbGVLZXk/OiBzdHJpbmc7XG4gIHNlcnZlclVybDogc3RyaW5nO1xuICBub3RpZmljYXRpb25UaXRsZT86IHN0cmluZztcbiAgaGVhZGVycz86IHtcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xuICBwYXJhbWV0ZXJzPzoge1xuICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG4gIH07XG4gIFtwcm9wOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRlRNT3B0aW9ucyB7XG4gIGNhbGxCYWNrOiAoZXZlbnQ6IFVwbG9hZEV2ZW50KSA9PiBhbnk7XG4gIGNvbmZpZz86IHtcbiAgICBwYXJhbGxlbFVwbG9hZHNMaW1pdD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVUcmFuc2Zlck1hbmFnZXIge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZUTU9wdGlvbnMpIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IHdpbmRvdy5GaWxlVHJhbnNmZXJNYW5hZ2VyLmluaXQob3B0aW9ucy5jb25maWcsIG9wdGlvbnMuY2FsbEJhY2spO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHN0YXJ0VXBsb2FkKHBheWxvYWQ6IEZUTVBheWxvYWRPcHRpb25zKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZVVwbG9hZChpZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYWNrbm93bGVkZ2VFdmVudChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEJhY2tncm91bmRVcGxvYWRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFja2dyb3VuZFVwbG9hZCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iYWNrZ3JvdW5kLXVwbG9hZC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRVcGxvYWQ6IEJhY2tncm91bmRVcGxvYWQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJhY2tncm91bmRVcGxvYWQuaW5pdCh7fSlcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kVXBsb2FkJyxcbiAgcGx1Z2luOiAnQHNwb29uY29uc3VsdGluZy9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLXVwbG9hZCcsXG4gIHBsdWdpblJlZjogJ0ZpbGVUcmFuc2Zlck1hbmFnZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nwb29uY29uc3VsdGluZy9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLXVwbG9hZCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgQHNwb29uY29uc3VsdGluZy9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLXVwbG9hZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kVXBsb2FkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBGaWxlVHJhbnNmZXJNYW5hZ2VyID0gRmlsZVRyYW5zZmVyTWFuYWdlcjtcblxuICBpbml0KG9wdGlvbnM6IEZUTU9wdGlvbnMpOiBGaWxlVHJhbnNmZXJNYW5hZ2VyIHtcbiAgICByZXR1cm4gbmV3IEZpbGVUcmFuc2Zlck1hbmFnZXIob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==