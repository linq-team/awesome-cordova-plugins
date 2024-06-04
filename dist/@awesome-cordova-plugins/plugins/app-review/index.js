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
var AppReviewOriginal = /** @class */ (function (_super) {
    __extends(AppReviewOriginal, _super);
    function AppReviewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppReviewOriginal.prototype.requestReview = function () { return cordova(this, "requestReview", { "sync": true }, arguments); };
    AppReviewOriginal.prototype.openStoreScreen = function (packageName) { return cordova(this, "openStoreScreen", { "sync": true }, arguments); };
    AppReviewOriginal.pluginName = "AppReview";
    AppReviewOriginal.plugin = "cordova-plugin-app-review";
    AppReviewOriginal.pluginRef = "cordova.plugins.AppReview";
    AppReviewOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-app-review";
    AppReviewOriginal.platforms = ["Android", "iOS"];
    return AppReviewOriginal;
}(AwesomeCordovaNativePlugin));
var AppReview = new AppReviewOriginal();
export { AppReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLXJldmlldy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCN0QsNkJBQTBCOzs7O0lBT3ZELGlDQUFhO0lBWWIsbUNBQWUsYUFBQyxXQUFvQjs7Ozs7O29CQW5EdEM7RUFnQytCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgUmV2aWV3XG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIHJldmlldyBhcHBcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcFJldmlldyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hcHAtcmV2aWV3L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwUmV2aWV3OiBBcHBSZXZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFwcFJldmlldy5yZXF1ZXN0UmV2aWV3KClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3MnKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwUmV2aWV3JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwLXJldmlldycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5BcHBSZXZpZXcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tYXBwLXJldmlldycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBSZXZpZXcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMYXVuY2hlcyBpbi1hcHAgcmV2aWV3IGRpYWxvZy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IENhbGxiYWNrIHdoZW4gb3BlcmF0aW9uIGlzIGNvbXBsZXRlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlcXVlc3RSZXZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIEFwcC9QbGF5IHN0b3JlIHBhZ2Ugd2l0aCBhIHJldmlldyBmb3JtLiBCeSBkZWZhdWx0IGN1cnJlbnQgYXBwIHNjcmVlblxuICAgKiBpcyBkaXNwbGF5ZWQgYnV0IHlvdSBjYW4gcGFzcyBhIHBhY2thZ2UgbmFtZSBzdHJpbmcgdG8gc2hvdyBhbm90aGVyIGFwcCBkZXRhaWxzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3BhY2thZ2VOYW1lXSBQYWNrYWdlIG5hbWUgdG8gc2hvdyBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IGFwcC5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IENhbGxiYWNrIHdoZW4gb3BlcmF0aW9uIGlzIGNvbXBsZXRlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG9wZW5TdG9yZVNjcmVlbihwYWNrYWdlTmFtZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19