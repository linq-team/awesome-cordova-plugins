import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var HeaderColor = /** @class */ (function (_super) {
    __extends(HeaderColor, _super);
    function HeaderColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColor.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderColor, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HeaderColor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderColor });
    HeaderColor.pluginName = "HeaderColor";
    HeaderColor.plugin = "cordova-plugin-headercolor";
    HeaderColor.pluginRef = "plugins.headerColor";
    HeaderColor.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColor.platforms = ["Android"];
    HeaderColor = __decorate([], HeaderColor);
    return HeaderColor;
}(AwesomeCordovaNativePlugin));
export { HeaderColor };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderColor, decorators: [{
            type: Injectable
        }], propDecorators: { tint: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaGVhZGVyLWNvbG9yL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUF5QjNELCtCQUEwQjs7OztJQVl6RCwwQkFBSSxhQUFDLEtBQWE7NkdBWlAsV0FBVztpSEFBWCxXQUFXOzs7Ozs7SUFBWCxXQUFXLGtCQUFYLFdBQVc7c0JBMUJ4QjtFQTBCaUMsMEJBQTBCO1NBQTlDLFdBQVc7NEZBQVgsV0FBVztrQkFEdkIsVUFBVTs4QkFhVCxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBIZWFkZXIgQ29sb3JcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gY2hhbmdlIGNvbG9yIG9mIGhlYWRlciBpbiBBbmRyb2lkIE11bHRpdGFzayBWaWV3XG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhlYWRlckNvbG9yIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2hlYWRlci1jb2xvci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyQ29sb3I6IEhlYWRlckNvbG9yKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmhlYWRlckNvbG9yLnRpbnQoJyNiZWNiMjknKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hlYWRlckNvbG9yJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taGVhZGVyY29sb3InLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmhlYWRlckNvbG9yJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b21sb3Byb2QvY29yZG92YS1wbHVnaW4taGVhZGVyY29sb3InLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb2xvciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNldCBhIGNvbG9yIHRvIHRoZSB0YXNrIGhlYWRlclxuICAgKlxuICAgKiBAcGFyYW0gY29sb3Ige3N0cmluZ30gVGhlIGhleCB2YWx1ZSBvZiB0aGUgY29sb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxuICB9KVxuICB0aW50KGNvbG9yOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19