import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var InAppReview = /** @class */ (function (_super) {
    __extends(InAppReview, _super);
    function InAppReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReview.prototype.requestReview = function () { return cordova(this, "requestReview", {}, arguments); };
    InAppReview.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InAppReview, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    InAppReview.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InAppReview });
    InAppReview.pluginName = "InAppReview";
    InAppReview.plugin = "com.omarben.inappreview";
    InAppReview.pluginRef = "inappreview";
    InAppReview.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReview.platforms = ["iOS"];
    InAppReview = __decorate([], InAppReview);
    return InAppReview;
}(AwesomeCordovaNativePlugin));
export { InAppReview };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InAppReview, decorators: [{
            type: Injectable
        }], propDecorators: { requestReview: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXJldmlldy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBaUMzRCwrQkFBMEI7Ozs7SUFPekQsbUNBQWE7NkdBUEYsV0FBVztpSEFBWCxXQUFXOzs7Ozs7SUFBWCxXQUFXLGtCQUFYLFdBQVc7c0JBbEN4QjtFQWtDaUMsMEJBQTBCO1NBQTlDLFdBQVc7NEZBQVgsV0FBVztrQkFEdkIsVUFBVTs4QkFRVCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbi8qIHRzbGludDpkaXNhYmxlICovXG4vKipcbiAqIEBuYW1lIEluIEFwcCBSZXZpZXdcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyB1c2UgdGhlIGlPUyBjbGFzcyBTS1N0b3Jl4oCLUmV2aWV34oCLQ29udHJvbGxlciB0byBvcGVuIHRoZSBpbkFwcCByZXZpZXcgcG9wdXAgYXZhaWxhYmxlIHNpbmNlIGlPUyAxMC4zXG4gKlxuICogVGhpcyBmdW5jdGlvbmFsaXR5IG9ubHkgd29ya3Mgb24gaU9TIGRldmljZXNcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBSZXZpZXcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW4tYXBwLXJldmlldy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluQXBwUmV2aWV3OiBJbkFwcFJldmlldykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuaW5BcHBSZXZpZXcucmVxdWVzdFJldmlldygpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbi8qIHRzbGludDplbmFibGUgKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW5BcHBSZXZpZXcnLFxuICBwbHVnaW46ICdjb20ub21hcmJlbi5pbmFwcHJldmlldycsXG4gIHBsdWdpblJlZjogJ2luYXBwcmV2aWV3JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vbWF4bGl2ZS9jb20ub21hcmJlbi5pbmFwcHJldmlldycsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5BcHBSZXZpZXcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIHRoZSBpbkFwcCByZXZpZXcgcG9wdXBcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RSZXZpZXcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=