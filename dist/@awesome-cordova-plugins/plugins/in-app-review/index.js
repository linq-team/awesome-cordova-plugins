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
var InAppReviewOriginal = /** @class */ (function (_super) {
    __extends(InAppReviewOriginal, _super);
    function InAppReviewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReviewOriginal.prototype.requestReview = function () { return cordova(this, "requestReview", {}, arguments); };
    InAppReviewOriginal.pluginName = "InAppReview";
    InAppReviewOriginal.plugin = "com.omarben.inappreview";
    InAppReviewOriginal.pluginRef = "inappreview";
    InAppReviewOriginal.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReviewOriginal.platforms = ["iOS"];
    return InAppReviewOriginal;
}(AwesomeCordovaNativePlugin));
var InAppReview = new InAppReviewOriginal();
export { InAppReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXJldmlldy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWlDM0QsK0JBQTBCOzs7O0lBT3pELG1DQUFhOzs7Ozs7c0JBekNmO0VBa0NpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbmFtZSBJbiBBcHAgUmV2aWV3XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgdXNlIHRoZSBpT1MgY2xhc3MgU0tTdG9yZeKAi1Jldmlld+KAi0NvbnRyb2xsZXIgdG8gb3BlbiB0aGUgaW5BcHAgcmV2aWV3IHBvcHVwIGF2YWlsYWJsZSBzaW5jZSBpT1MgMTAuM1xuICpcbiAqIFRoaXMgZnVuY3Rpb25hbGl0eSBvbmx5IHdvcmtzIG9uIGlPUyBkZXZpY2VzXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwUmV2aWV3IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2luLWFwcC1yZXZpZXcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbkFwcFJldmlldzogSW5BcHBSZXZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmluQXBwUmV2aWV3LnJlcXVlc3RSZXZpZXcoKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luQXBwUmV2aWV3JyxcbiAgcGx1Z2luOiAnY29tLm9tYXJiZW4uaW5hcHByZXZpZXcnLFxuICBwbHVnaW5SZWY6ICdpbmFwcHJldmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb21heGxpdmUvY29tLm9tYXJiZW4uaW5hcHByZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwUmV2aWV3IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiB0aGUgaW5BcHAgcmV2aWV3IHBvcHVwXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UmV2aWV3KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19