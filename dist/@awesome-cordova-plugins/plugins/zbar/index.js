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
var ZBarOriginal = /** @class */ (function (_super) {
    __extends(ZBarOriginal, _super);
    function ZBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBarOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    ZBarOriginal.pluginName = "ZBar";
    ZBarOriginal.plugin = "cordova-plugin-cszbar";
    ZBarOriginal.pluginRef = "cloudSky.zBar";
    ZBarOriginal.repo = "https://github.com/tjwoon/csZBar";
    ZBarOriginal.platforms = ["Android", "iOS"];
    return ZBarOriginal;
}(AwesomeCordovaNativePlugin));
var ZBar = new ZBarOriginal();
export { ZBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemJhci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTJFbEUsd0JBQTBCOzs7O0lBUWxELG1CQUFJLGFBQUMsT0FBb0I7Ozs7OztlQXBGM0I7RUE0RTBCLDBCQUEwQjtTQUF2QyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBaQmFyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRpdGxlIHRleHQgKEFuZHJvaWQgb25seSkuXG4gICAqIERlZmF1bHQ6IFwiU2NhbiBRUiBDb2RlXCJcbiAgICovXG4gIHRleHRfdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgaW5zdHJ1Y3Rpb24gdGV4dCAoQW5kcm9pZCBvbmx5KS5cbiAgICogRGVmYXVsdDogXCJQbGVhc2UgcG9pbnQgeW91ciBjYW1lcmEgYXQgdGhlIFFSIGNvZGUuXCJcbiAgICovXG4gIHRleHRfaW5zdHJ1Y3Rpb25zPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgYWN0aXZlIGNhbWVyYSB3aGVuIG9wZW5pbmcgdGhlIHNjYW5uZXIuXG4gICAqIFBvc3NpYmxlIHZhbHVlczogXCJmcm9udFwiLCBcImJhY2tcIlxuICAgKiBEZWZhdWx0OiBcImJhY2tcIlxuICAgKi9cbiAgY2FtZXJhPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IFwib25cIiwgXCJvZmZcIiwgXCJhdXRvXCJcbiAgICogRGVmYXVsdDogXCJhdXRvXCJcbiAgICovXG4gIGZsYXNoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIGEgbGluZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzY2FubmVyLlxuICAgKiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBkcmF3U2lnaHQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIFpCYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFpCYXIgU2Nhbm5lciBQbHVnaW4gYWxsb3dzIHlvdSB0byBzY2FuIDJkIGJhcmNvZGVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY3N6YmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW3pCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS90andvb24vY3NaQmFyKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgWkJhciwgWkJhck9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvemJhci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgemJhcjogWkJhcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IG9wdGlvbnM6IFpCYXJPcHRpb25zID0ge1xuICogICAgICAgZmxhc2g6ICdvZmYnLFxuICogICAgICAgZHJhd1NpZ2h0OiBmYWxzZVxuICogICAgIH1cbiAqXG4gKiB0aGlzLnpiYXIuc2NhbihvcHRpb25zKVxuICogICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAqICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFNjYW5uZWQgY29kZVxuICogICAgfSlcbiAqICAgIC5jYXRjaChlcnJvciA9PiB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vIEVycm9yIG1lc3NhZ2VcbiAqICAgIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFpCYXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWkJhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNzemJhcicsXG4gIHBsdWdpblJlZjogJ2Nsb3VkU2t5LnpCYXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Rqd29vbi9jc1pCYXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWkJhciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gdGhlIHNjYW5uZXJcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgeyBaQmFyT3B0aW9ucyB9IFNjYW4gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHNjYW5uZWQgc3RyaW5nLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjYW4ob3B0aW9uczogWkJhck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19