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
var LaunchReviewOriginal = /** @class */ (function (_super) {
    __extends(LaunchReviewOriginal, _super);
    function LaunchReviewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaunchReviewOriginal.prototype.launch = function (appId) { return cordova(this, "launch", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    LaunchReviewOriginal.prototype.rating = function () { return cordova(this, "rating", { "observable": true }, arguments); };
    LaunchReviewOriginal.prototype.isRatingSupported = function () { return cordova(this, "isRatingSupported", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    LaunchReviewOriginal.pluginName = "LaunchReview";
    LaunchReviewOriginal.plugin = "cordova-launch-review";
    LaunchReviewOriginal.pluginRef = "LaunchReview";
    LaunchReviewOriginal.repo = "https://github.com/dpa99c/cordova-launch-review";
    LaunchReviewOriginal.platforms = ["Android", "iOS"];
    return LaunchReviewOriginal;
}(AwesomeCordovaNativePlugin));
var LaunchReview = new LaunchReviewOriginal();
export { LaunchReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGF1bmNoLXJldmlldy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBa0NBLGdDQUEwQjs7OztJQVcxRCw2QkFBTSxhQUFDLEtBQWM7SUFlckIsNkJBQU07SUFXTix3Q0FBaUI7Ozs7Ozt1QkF6RW5CO0VBb0NrQywwQkFBMEI7U0FBL0MsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgTGF1bmNoIFJldmlld1xuICogQGRlc2NyaXB0aW9uXG4gKlxuICogQXNzaXN0cyBpbiBsZWF2aW5nIHVzZXIgcmV2aWV3cy9yYXRpbmdzIGluIHRoZSBBcHAgU3RvcmVzLlxuICogLSBMYXVuY2hlcyB0aGUgcGxhdGZvcm0ncyBBcHAgU3RvcmUgcGFnZSBmb3IgdGhlIGN1cnJlbnQgYXBwIGluIG9yZGVyIGZvciB0aGUgdXNlciB0byBsZWF2ZSBhIHJldmlldy5cbiAqIC0gT24gaU9TICgxMC4zIGFuZCBhYm92ZSkgaW52b2tlcyB0aGUgbmF0aXZlIGluLWFwcCByYXRpbmcgZGlhbG9nIHdoaWNoIGFsbG93cyBhIHVzZXIgdG8gcmF0ZSB5b3VyIGFwcCB3aXRob3V0IG5lZWRpbmcgdG8gb3BlbiB0aGUgQXBwIFN0b3JlLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMYXVuY2hSZXZpZXcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbGF1bmNoLXJldmlldy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbGF1bmNoUmV2aWV3OiBMYXVuY2hSZXZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubGF1bmNoUmV2aWV3LmxhdW5jaCgpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgbGF1bmNoZWQgc3RvcmUgYXBwJykpO1xuICpcbiAqIGlmKHRoaXMubGF1bmNoUmV2aWV3LmlzUmF0aW5nU3VwcG9ydGVkKCkpe1xuICogICB0aGlzLmxhdW5jaFJldmlldy5yYXRpbmcoKVxuICogICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgbGF1bmNoZWQgcmF0aW5nIGRpYWxvZycpKTtcbiAqIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xhdW5jaFJldmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtbGF1bmNoLXJldmlldycsXG4gIHBsdWdpblJlZjogJ0xhdW5jaFJldmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtbGF1bmNoLXJldmlldycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYXVuY2hSZXZpZXcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMYXVuY2hlcyBBcHAgU3RvcmUgb24gY3VycmVudCBwbGF0Zm9ybSBpbiBvcmRlciB0byBsZWF2ZSBhIHJldmlldyBmb3IgZ2l2ZW4gYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gYXBwSWQge3N0cmluZ30gLSAob3B0aW9uYWwpIHRoZSBwbGF0Zm9ybS1zcGVjaWZpYyBhcHAgSUQgdG8gdXNlIHRvIG9wZW4gdGhlIHBhZ2UgaW4gdGhlIHN0b3JlIGFwcC5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIHBsdWdpbiB3aWxsIHVzZSB0aGUgYXBwIElEIGZvciB0aGUgYXBwIGluIHdoaWNoIHRoZSBwbHVnaW4gaXMgY29udGFpbmVkLlxuICAgKiBPbiBBbmRyb2lkIHRoaXMgaXMgdGhlIGZ1bGwgcGFja2FnZSBuYW1lIG9mIHRoZSBhcHAuIEZvciBleGFtcGxlLCBmb3IgR29vZ2xlIE1hcHM6IGBjb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5tYXBzYFxuICAgKiBPbiBpT1MgdGhpcyBpcyB0aGUgQXBwbGUgSUQgb2YgdGhlIGFwcC4gRm9yIGV4YW1wbGUsIGZvciBHb29nbGUgTWFwczogYDU4NTAyNzM1NGBcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgbGF1bmNoKGFwcElkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgdGhlIG5hdGl2ZSBpbi1hcHAgcmF0aW5nIGRpYWxvZyB3aGljaCBhbGxvd3MgYSB1c2VyIHRvIHJhdGUgeW91ciBhcHAgd2l0aG91dCBuZWVkaW5nIHRvIG9wZW4gdGhlIEFwcCBTdG9yZS5cbiAgICogUmVxdWlyZXMgaU9TIDEwLjMgYW5kIGFib3ZlOiBDYWxsaW5nIHRoaXMgb24gYW55IHBsYXRmb3JtL3ZlcnNpb24gb3RoZXIgdGhhbiBpT1MgMTAuMysgd2lsbCByZXN1bHQgaW4gdGhlIGVycm9yIGNhbGxiYWNrLlxuICAgKiBTdWNjZXNzIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHVwIHRvIDMgdGltZXM6XG4gICAqIC0gRmlyc3Q6IGFmdGVyIGBMYXVuY2hSZXZpZXcucmF0aW5nKClgIGlzIGNhbGxlZCBhbmQgdGhlIHJlcXVlc3QgdG8gc2hvdyB0aGUgZGlhbG9nIGlzIHN1Y2Nlc3NmdWwuIFdpbGwgYmUgcGFzc2VkIHRoZSB2YWx1ZSBgcmVxdWVzdGVkYC5cbiAgICogLSBTZWNvbmQ6IGlmIGFuZCB3aGVuIHRoZSBSYXRpbmcgZGlhbG9nIGlzIGFjdHVhbGx5IGRpc3BsYXllZC4gIFdpbGwgYmUgcGFzc2VkIHRoZSB2YWx1ZSBgc2hvd25gLlxuICAgKiAtIFRoaXJkOiBpZiBhbmQgd2hlbiB0aGUgUmF0aW5nIGRpYWxvZyBpcyBkaXNtaXNzZWQuICBXaWxsIGJlIHBhc3NlZCB0aGUgdmFsdWUgYGRpc21pc3NlZGAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmF0aW5nKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgY3VycmVudCBwbGF0Zm9ybS92ZXJzaW9uIHN1cHBvcnRzIGluLWFwcCByYXRpbmdzIGRpYWxvZywgaS5lLiBjYWxsaW5nIExhdW5jaFJldmlldy5yYXRpbmcoKS5cbiAgICogV2lsbCByZXR1cm4gdHJ1ZSBpZiBjdXJyZW50IHBsYXRmb3JtIGlzIGlPUyAxMC4zIG9yIGFib3ZlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIHN5bmM6IHRydWUgfSlcbiAgaXNSYXRpbmdTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=