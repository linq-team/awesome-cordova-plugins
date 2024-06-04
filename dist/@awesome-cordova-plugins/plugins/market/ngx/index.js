import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Market = /** @class */ (function (_super) {
    __extends(Market, _super);
    function Market() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Market.prototype.open = function (appId) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    Market.prototype.search = function (keyword) { return cordova(this, "search", { "callbackStyle": "object", "successName": "success", "errorName": "failure", "platforms": ["Android"] }, arguments); };
    Market.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Market, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Market.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Market });
    Market.pluginName = "Market";
    Market.plugin = "cordova-plugin-market";
    Market.pluginRef = "cordova.plugins.market";
    Market.repo = "https://github.com/xmartlabs/cordova-plugin-market";
    Market.platforms = ["Android", "iOS"];
    Market = __decorate([], Market);
    return Market;
}(AwesomeCordovaNativePlugin));
export { Market };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Market, decorators: [{
            type: Injectable
        }], propDecorators: { open: [], search: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWFya2V0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUEwQmhFLDBCQUEwQjs7OztJQVdwRCxxQkFBSSxhQUFDLEtBQWE7SUFlbEIsdUJBQU0sYUFBQyxPQUFlO3dHQTFCWCxNQUFNOzRHQUFOLE1BQU07Ozs7OztJQUFOLE1BQU0sa0JBQU4sTUFBTTtpQkEzQm5CO0VBMkI0QiwwQkFBMEI7U0FBekMsTUFBTTs0RkFBTixNQUFNO2tCQURsQixVQUFVOzhCQVlULElBQUksTUFlSixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbi8qKlxuICogQG5hbWUgTWFya2V0XG4gKiBAZGVzY3JpcHRpb25cbiAqIE9wZW5zIGFuIGFwcCdzIHBhZ2UgaW4gdGhlIG1hcmtldCBwbGFjZSAoR29vZ2xlIFBsYXksIEFwcCBTdG9yZSlcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1hcmtldCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tYXJrZXQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcmtldDogTWFya2V0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm1hcmtldC5vcGVuKCd5b3VyLnBhY2thZ2UubmFtZScpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01hcmtldCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1hcmtldCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tYXJrZXQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3htYXJ0bGFicy9jb3Jkb3ZhLXBsdWdpbi1tYXJrZXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFya2V0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbnMgYW4gYXBwIGluIEdvb2dsZSBQbGF5IC8gQXBwIFN0b3JlXG4gICAqIEBwYXJhbSBhcHBJZCB7c3RyaW5nfSBQYWNrYWdlIG5hbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZScsXG4gIH0pXG4gIG9wZW4oYXBwSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhcHBzIGJ5IGtleXdvcmRcbiAgICogQHBhcmFtIGtleXdvcmQge3N0cmluZ30gS2V5d29yZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBzZWFyY2goa2V5d29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==