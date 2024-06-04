import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var GCDWebServer = /** @class */ (function (_super) {
    __extends(GCDWebServer, _super);
    function GCDWebServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GCDWebServer.prototype.startServer = function (options) { return cordova(this, "startServer", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GCDWebServer.prototype.stopServer = function () { return cordova(this, "stopServer", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GCDWebServer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GCDWebServer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    GCDWebServer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GCDWebServer });
    GCDWebServer.pluginName = "gcdwebserver";
    GCDWebServer.plugin = "cordova-plugin-gcdwebserver";
    GCDWebServer.pluginRef = "cordova.plugins.GCDServer";
    GCDWebServer.repo = "https://github.com/xulihang/cordova-plugin-gcdwebserver";
    GCDWebServer.install = "";
    GCDWebServer.installVariables = [];
    GCDWebServer.platforms = ["iOS"];
    GCDWebServer = __decorate([], GCDWebServer);
    return GCDWebServer;
}(AwesomeCordovaNativePlugin));
export { GCDWebServer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GCDWebServer, decorators: [{
            type: Injectable
        }], propDecorators: { startServer: [], stopServer: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2Nkd2Vic2VydmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQU9OLE1BQU0sK0JBQStCLENBQUM7OztJQXFDTCxnQ0FBMEI7Ozs7SUFVMUQsa0NBQVcsYUFBQyxPQUFzQjtJQVNsQyxpQ0FBVTs4R0FuQkMsWUFBWTtrSEFBWixZQUFZOzs7Ozs7OztJQUFaLFlBQVksa0JBQVosWUFBWTt1QkE3Q3pCO0VBNkNrQywwQkFBMEI7U0FBL0MsWUFBWTs0RkFBWixZQUFZO2tCQUR4QixVQUFVOzhCQVdULFdBQVcsTUFTWCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJPcHRpb25zIHtcbiAgcG9ydD86IG51bWJlcjtcbiAgZm9sZGVyPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIGdjZHdlYnNlcnZlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBjYW4gc3RhcnQgYW4gSFRUUCBzZXJ2ZXIgdXNpbmcgR0NEV2ViU2VydmVyXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHQ0RXZWJTZXJ2ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ2Nkd2Vic2VydmVyJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnY2R3ZWJzZXJ2ZXI6IEdDRFdlYlNlcnZlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGF3YWl0IHRoaXMuZ2Nkd2Vic2VydmVyLnN0YXJ0U2VydmVyKHt9KTtcbiAqIFxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2djZHdlYnNlcnZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdjZHdlYnNlcnZlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5HQ0RTZXJ2ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3h1bGloYW5nL2NvcmRvdmEtcGx1Z2luLWdjZHdlYnNlcnZlcicsXG4gIGluc3RhbGw6ICcnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHQ0RXZWJTZXJ2ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBzdGFydCB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTZXJ2ZXJPcHRpb25zfVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc3RhcnRTZXJ2ZXIob3B0aW9uczogU2VydmVyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0b3AgdGhlIHNlcnZlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMSwgZXJyb3JJbmRleDogMiB9KVxuICBzdG9wU2VydmVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==