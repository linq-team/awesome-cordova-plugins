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
var BioCatchOriginal = /** @class */ (function (_super) {
    __extends(BioCatchOriginal, _super);
    function BioCatchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatchOriginal.prototype.start = function (customerSessionID, wupUrl, publicKey) { return cordova(this, "start", {}, arguments); };
    BioCatchOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    BioCatchOriginal.prototype.resume = function () { return cordova(this, "resume", {}, arguments); };
    BioCatchOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BioCatchOriginal.prototype.resetSession = function () { return cordova(this, "resetSession", {}, arguments); };
    BioCatchOriginal.prototype.changeContext = function (contextName) { return cordova(this, "changeContext", {}, arguments); };
    BioCatchOriginal.prototype.updateCustomerSessionID = function (customerSessionID) { return cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatchOriginal.pluginName = "BioCatch";
    BioCatchOriginal.plugin = "cordova-plugin-biocatch";
    BioCatchOriginal.pluginRef = "BioCatch";
    BioCatchOriginal.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatchOriginal.platforms = ["iOS", "Android"];
    return BioCatchOriginal;
}(AwesomeCordovaNativePlugin));
var BioCatch = new BioCatchOriginal();
export { BioCatch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvY2F0Y2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE4QjlELDRCQUEwQjs7OztJQVV0RCx3QkFBSyxhQUFDLGlCQUFnQyxFQUFFLE1BQWMsRUFBRSxTQUF3QjtJQVVoRix3QkFBSztJQVVMLHlCQUFNO0lBVU4sdUJBQUk7SUFVSiwrQkFBWTtJQVdaLGdDQUFhLGFBQUMsV0FBbUI7SUFXakMsMENBQXVCLGFBQUMsaUJBQWdDOzs7Ozs7bUJBdkcxRDtFQStCOEIsMEJBQTBCO1NBQTNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJpb0NhdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJpb0NhdGNoIFNESyBDb3Jkb3ZhIHN1cHBvcnRcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmlvQ2F0Y2ggfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmlvY2F0Y2gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpb2NhdGNoOiBCaW9DYXRjaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmlvY2F0Y2guc3RhcnQoJ2N1c3RvbWVyLXNlc3Npb24tMScsICdodHRwOi8vZXhhbXBsZS5jb20nLCAnc29tZS1wdWJsaWMta2V5JylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCaW9DYXRjaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJpb2NhdGNoJyxcbiAgcGx1Z2luUmVmOiAnQmlvQ2F0Y2gnLFxuICByZXBvOiAnaHR0cHM6Ly9iaXRidWNrZXQub3JnL2Nhcmxvc19vcmVsbGFuYS9pb25pYy1wbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmlvQ2F0Y2ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydCBhIHNlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIGN1c3RvbWVyU2Vzc2lvbklEIHtTdHJpbmd9IEN1c3RvbWVyIHNlc3Npb24gaWRcbiAgICogQHBhcmFtIHd1cFVybCB7U3RyaW5nfSBXVVAgc2VydmVyIFVSTFxuICAgKiBAcGFyYW0gcHVibGljS2V5IHtTdHJpbmd9IFB1YmxpYyBLZXlcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0KGN1c3RvbWVyU2Vzc2lvbklEOiBzdHJpbmcgfCBudWxsLCB3dXBVcmw6IHN0cmluZywgcHVibGljS2V5OiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlIHRoZSBzZXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHRoZSBzZXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHNlc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzZXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNldFNlc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgc2Vzc2lvbiBjb250ZXh0XG4gICAqXG4gICAqIEBwYXJhbSBjb250ZXh0TmFtZSB7U3RyaW5nfSBDb250ZXh0IG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoYW5nZUNvbnRleHQoY29udGV4dE5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1c3RvbWVyIHNlc3Npb24gSURcbiAgICpcbiAgICogQHBhcmFtIGN1c3RvbWVyU2Vzc2lvbklEIHtTdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVDdXN0b21lclNlc3Npb25JRChjdXN0b21lclNlc3Npb25JRDogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19