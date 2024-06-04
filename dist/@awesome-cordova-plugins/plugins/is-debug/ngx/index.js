import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var IsDebug = /** @class */ (function (_super) {
    __extends(IsDebug, _super);
    function IsDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebug.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebug.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsDebug, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    IsDebug.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsDebug });
    IsDebug.pluginName = "IsDebug";
    IsDebug.plugin = "cordova-plugin-is-debug";
    IsDebug.pluginRef = "cordova.plugins.IsDebug";
    IsDebug.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebug.platforms = ["Android", "iOS"];
    IsDebug = __decorate([], IsDebug);
    return IsDebug;
}(AwesomeCordovaNativePlugin));
export { IsDebug };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsDebug, decorators: [{
            type: Injectable
        }], propDecorators: { getIsDebug: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaXMtZGVidWcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQTZCL0QsMkJBQTBCOzs7O0lBT3JELDRCQUFVO3lHQVBDLE9BQU87NkdBQVAsT0FBTzs7Ozs7O0lBQVAsT0FBTyxrQkFBUCxPQUFPO2tCQTlCcEI7RUE4QjZCLDBCQUEwQjtTQUExQyxPQUFPOzRGQUFQLE9BQU87a0JBRG5CLFVBQVU7OEJBUVQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgSXMgRGVidWdcbiAqIEBkZXNjcmlwdGlvblxuICogRGV0ZWN0IGlmIHRoZSBhcHAgaXMgcnVubmluZyBpbiBkZWJ1ZyBtb2RlIG9yIG5vdC5cbiAqIERlYnVnIG1vZGUgaXMgd2hlbiB0aGUgYXBwIGlzIGJ1aWx0IGFuZCBpbnN0YWxsZWQgbG9jYWxseSB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGNvcmRvdmEgY2xpIGV0YywgY29tcGFyZWQgdG8gcmVsZWFzZSBtb2RlIHdoZW4gdGhlIGFwcCB3YXMgZG93bmxvYWRlZCBmcm9tIHRoZSBhcHAgLyBwbGF5IHN0b3JlIHZpYSBhbiBlbmQgdXNlci5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSXNEZWJ1ZyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pcy1kZWJ1Zy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaXNEZWJ1ZzogSXNEZWJ1ZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5pc0RlYnVnLmdldElzRGVidWcoKVxuICogICAudGhlbihpc0RlYnVnID0+IGNvbnNvbGUubG9nKCdJcyBkZWJ1ZzonLCBpc0RlYnVnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0lzRGVidWcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pcy1kZWJ1ZycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Jc0RlYnVnJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jb3Jkb3ZhLXBsdWdpbi1pcy1kZWJ1ZycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJc0RlYnVnIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Y1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRydWUgaWYgdGhlIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Yy4gSXQgd2lsbCByZXNvbHZlIHRvIGZhbHNlIGlmIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSBieSB0aGUgZW5kIHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElzRGVidWcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=