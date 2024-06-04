import { __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TapticEngine = /** @class */ (function (_super) {
    __extends(TapticEngine, _super);
    function TapticEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngine.prototype.selection = function () { return cordova(this, "selection", {}, arguments); };
    TapticEngine.prototype.notification = function (options) { return cordova(this, "notification", {}, arguments); };
    TapticEngine.prototype.impact = function (options) { return cordova(this, "impact", {}, arguments); };
    TapticEngine.prototype.gestureSelectionStart = function () { return cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngine.prototype.gestureSelectionChanged = function () { return cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngine.prototype.gestureSelectionEnd = function () { return cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngine.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TapticEngine, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    TapticEngine.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TapticEngine });
    TapticEngine.pluginName = "TapticEngine";
    TapticEngine.plugin = "cordova-plugin-taptic-engine";
    TapticEngine.pluginRef = "TapticEngine";
    TapticEngine.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngine.platforms = ["iOS"];
    TapticEngine = __decorate([], TapticEngine);
    return TapticEngine;
}(AwesomeCordovaNativePlugin));
export { TapticEngine };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TapticEngine, decorators: [{
            type: Injectable
        }], propDecorators: { selection: [], notification: [], impact: [], gestureSelectionStart: [], gestureSelectionChanged: [], gestureSelectionEnd: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGFwdGljLWVuZ2luZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBZ0NULGdDQUEwQjs7OztJQU8xRCxnQ0FBUztJQVlULG1DQUFZLGFBQUMsT0FBa0Q7SUFhL0QsNkJBQU0sYUFBQyxPQUFnRDtJQVV2RCw0Q0FBcUI7SUFVckIsOENBQXVCO0lBVXZCLDBDQUFtQjs4R0E5RFIsWUFBWTtrSEFBWixZQUFZOzs7Ozs7SUFBWixZQUFZLGtCQUFaLFlBQVk7dUJBakN6QjtFQWlDa0MsMEJBQTBCO1NBQS9DLFlBQVk7NEZBQVosWUFBWTtrQkFEeEIsVUFBVTs4QkFRVCxTQUFTLE1BWVQsWUFBWSxNQWFaLE1BQU0sTUFVTixxQkFBcUIsTUFVckIsdUJBQXVCLE1BVXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgVGFwdGljIEVuZ2luZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBbiBJb25pYyBwbHVnaW4gdG8gdXNlIFRhcHRpYyBFbmdpbmUgQVBJIG9uIGlQaG9uZSA3LCA3IFBsdXMgb3IgbmV3ZXIuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRhcHRpY0VuZ2luZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90YXB0aWMtZW5naW5lL25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0YXB0aWM6IFRhcHRpY0VuZ2luZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50YXB0aWMuc2VsZWN0aW9uKCk7XG4gKlxuICogdGhpcy50YXB0aWMubm90aWZpY2F0aW9uKCk7XG4gKlxuICogdGhpcy50YXB0aWMuaW1wYWN0KCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGFwdGljRW5naW5lJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGFwdGljLWVuZ2luZScsXG4gIHBsdWdpblJlZjogJ1RhcHRpY0VuZ2luZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tdGFwdGljLWVuZ2luZScsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFwdGljRW5naW5lIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVXNlIHNlbGVjdGlvbiBmZWVkYmFjayBnZW5lcmF0b3JzIHRvIGluZGljYXRlIGEgY2hhbmdlIGluIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIGFuZCByZWplY3RzIG9uIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbGVjdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gc2hvdWxkIGJlIG9mIHRoZSB0eXBlIHsgdHlwZTogJ3N1Y2Nlc3MnIH0gKG9yICd3YXJuaW5nJy8nZXJyb3InKVxuICAgKiBAcGFyYW0geydzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcid9IG9wdGlvbnMudHlwZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgb24gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbm90aWZpY2F0aW9uKG9wdGlvbnM6IHsgdHlwZTogJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgdG8gaW5kaWNhdGUgc3VjY2Vzcy9mYWlsdXJlL3dhcm5pbmcgdG8gdGhlIHVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IHNob3VsZCBiZSBvZiB0aGUgdHlwZSB7IHN0eWxlOiAnbGlnaHQnIH0gKG9yICdtZWRpdW0nLydoZWF2eScpXG4gICAqIEBwYXJhbSB7J2xpZ2h0JyB8ICdtZWRpdW0nIHwgJ2hlYXZ5J30gb3B0aW9ucy50eXBlXG4gICAqIEBwYXJhbSBvcHRpb25zLnN0eWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBvbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbXBhY3Qob3B0aW9uczogeyBzdHlsZTogJ2xpZ2h0JyB8ICdtZWRpdW0nIHwgJ2hlYXZ5JyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGVsbCB0aGUgdGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXN0dXJlU2VsZWN0aW9uU3RhcnQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGVsbCB0aGUgdGFwdGljIGVuZ2luZSB0aGF0IGEgc2VsZWN0aW9uIGNoYW5nZWQgZHVyaW5nIGEgZ2VzdHVyZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGVsbCB0aGUgdGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VzdHVyZVNlbGVjdGlvbkVuZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19