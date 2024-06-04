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
var WebServerOriginal = /** @class */ (function (_super) {
    __extends(WebServerOriginal, _super);
    function WebServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServerOriginal.prototype.start = function (port) { return cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebServerOriginal.prototype.onRequest = function () { return cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServerOriginal.prototype.sendResponse = function (requestId, responseObject) { return cordova(this, "sendResponse", {}, arguments); };
    WebServerOriginal.pluginName = "WebServer";
    WebServerOriginal.plugin = "cordova-plugin-webserver2";
    WebServerOriginal.pluginRef = "window.webserver";
    WebServerOriginal.repo = "https://github.com/nguyenthanh1995/cordova-plugin-webserver2.git";
    WebServerOriginal.platforms = ["Android", "iOS"];
    return WebServerOriginal;
}(AwesomeCordovaNativePlugin));
var WebServer = new WebServerOriginal();
export { WebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLXNlcnZlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBNkRILDZCQUEwQjs7OztJQVN2RCx5QkFBSyxhQUFDLElBQWE7SUFRbkIsd0JBQUk7SUFjSiw2QkFBUztJQVlULGdDQUFZLGFBQUMsU0FBaUIsRUFBRSxjQUF3Qjs7Ozs7O29CQTFHMUQ7RUErRCtCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBib2R5Pzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3Qge1xuICByZXF1ZXN0SWQ6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBoZWFkZXJzOiBzdHJpbmc7XG4gIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgfCAnUFVUJyB8ICdQQVRDSCcgfCAnREVMRVRFJztcbiAgcGF0aDogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFdlYiBTZXJ2ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzdGFydCBhIGxvY2FsIGR5bmFtaWMgY29udGVudCB3ZWIgc2VydmVyIGZvciBhbmRyb2lkIGFuZCBpT1MgZGV2aWNlcy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViU2VydmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3dlYi1zZXJ2ZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJTZXJ2ZXI6IFdlYlNlcnZlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy53ZWJTZXJ2ZXIub25SZXF1ZXN0KCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICogICBjb25zb2xlLmxvZyhkYXRhKTtcbiAqICAgY29uc3QgcmVzOiBSZXNwb25zZSA9IHtcbiAqICAgICBzdGF0dXM6IDIwMCxcbiAqICAgICBib2R5OiAnJyxcbiAqICAgICBoZWFkZXJzOiB7XG4gKiAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCdcbiAqICAgICB9XG4gKiAgIH07XG4gKlxuICogICB0aGlzLndlYlNlcnZlci5zZW5kUmVzcG9uc2UoZGF0YS5yZXF1ZXN0SWQsIHJlcylcbiAqICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqIH0pO1xuICpcbiAqIHRoaXMud2ViU2VydmVyLnN0YXJ0KDgwKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBSZXNwb25zZVxuICogUmVxdWVzdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYlNlcnZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYnNlcnZlcjInLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cud2Vic2VydmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uZ3V5ZW50aGFuaDE5OTUvY29yZG92YS1wbHVnaW4td2Vic2VydmVyMi5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViU2VydmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBzdGFydCB5b3VyIHdlYnNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHBvcnQge251bWJlcn0gUG9ydCBudW1iZXIgKGRlZmF1bHQgdG8gODA4MClcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHN0YXJ0KHBvcnQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHN0b3AgeW91ciB3ZWJzZXJ2ZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgc3RyZWFtcyBIVFRQIHJlcXVlc3RzIHRvIGFuIG9ic2VydmVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxSZXF1ZXN0Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRvIHJlc29sdmUgYXMgYSBSZXF1ZXN0IG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wJyxcbiAgfSlcbiAgb25SZXF1ZXN0KCk6IE9ic2VydmFibGU8UmVxdWVzdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBzZW5kcyBhIHJlc3BvbnNlIHRvIGEgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RJZCB7c3RyaW5nfSBSZXF1ZXN0IElEIHRvIHJlc3BvbmQgdG9cbiAgICogQHBhcmFtIHJlc3BvbnNlT2JqZWN0IHtSZXNwb25zZX0gUmVzcG9uc2Ugb2JqZWN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVzcG9uc2UocmVxdWVzdElkOiBzdHJpbmcsIHJlc3BvbnNlT2JqZWN0OiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=