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
var IsDebugOriginal = /** @class */ (function (_super) {
    __extends(IsDebugOriginal, _super);
    function IsDebugOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebugOriginal.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebugOriginal.pluginName = "IsDebug";
    IsDebugOriginal.plugin = "cordova-plugin-is-debug";
    IsDebugOriginal.pluginRef = "cordova.plugins.IsDebug";
    IsDebugOriginal.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebugOriginal.platforms = ["Android", "iOS"];
    return IsDebugOriginal;
}(AwesomeCordovaNativePlugin));
var IsDebug = new IsDebugOriginal();
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaXMtZGVidWcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE2Qi9ELDJCQUEwQjs7OztJQU9yRCw0QkFBVTs7Ozs7O2tCQXJDWjtFQThCNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElzIERlYnVnXG4gKiBAZGVzY3JpcHRpb25cbiAqIERldGVjdCBpZiB0aGUgYXBwIGlzIHJ1bm5pbmcgaW4gZGVidWcgbW9kZSBvciBub3QuXG4gKiBEZWJ1ZyBtb2RlIGlzIHdoZW4gdGhlIGFwcCBpcyBidWlsdCBhbmQgaW5zdGFsbGVkIGxvY2FsbHkgdmlhIHhjb2RlIC8gZWNsaXBzZSAvIHRoZSBjb3Jkb3ZhIGNsaSBldGMsIGNvbXBhcmVkIHRvIHJlbGVhc2UgbW9kZSB3aGVuIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSB2aWEgYW4gZW5kIHVzZXIuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IElzRGVidWcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaXMtZGVidWcvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGlzRGVidWc6IElzRGVidWcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaXNEZWJ1Zy5nZXRJc0RlYnVnKClcbiAqICAgLnRoZW4oaXNEZWJ1ZyA9PiBjb25zb2xlLmxvZygnSXMgZGVidWc6JywgaXNEZWJ1ZykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJc0RlYnVnJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taXMtZGVidWcnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuSXNEZWJ1ZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY29yZG92YS1wbHVnaW4taXMtZGVidWcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXNEZWJ1ZyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhbiBhcHAgd2FzIGluc3RhbGxlZCB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGlvbmljIENMSSBldGNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0cnVlIGlmIHRoZSBhcHAgd2FzIGluc3RhbGxlZCB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGlvbmljIENMSSBldGMuIEl0IHdpbGwgcmVzb2x2ZSB0byBmYWxzZSBpZiB0aGUgYXBwIHdhcyBkb3dubG9hZGVkIGZyb20gdGhlIGFwcCAvIHBsYXkgc3RvcmUgYnkgdGhlIGVuZCB1c2VyLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJc0RlYnVnKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19