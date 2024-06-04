import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var ThemeDetection = /** @class */ (function (_super) {
    __extends(ThemeDetection, _super);
    function ThemeDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetection.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThemeDetection.prototype.isDarkModeEnabled = function () { return cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetection.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeDetection, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    ThemeDetection.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeDetection });
    ThemeDetection.pluginName = "ThemeDetection";
    ThemeDetection.plugin = "cordova-plugin-theme-detection";
    ThemeDetection.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetection.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetection.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetection.installVariables = [];
    ThemeDetection.platforms = ["iOS", "Android"];
    ThemeDetection = __decorate([], ThemeDetection);
    return ThemeDetection;
}(AwesomeCordovaNativePlugin));
export { ThemeDetection };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeDetection, decorators: [{
            type: Injectable
        }], propDecorators: { isAvailable: [], isDarkModeEnabled: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGhlbWUtZGV0ZWN0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUErQ3hELGtDQUEwQjs7OztJQU81RCxvQ0FBVztJQVVYLDBDQUFpQjtnSEFqQk4sY0FBYztvSEFBZCxjQUFjOzs7Ozs7OztJQUFkLGNBQWMsa0JBQWQsY0FBYzt5QkFoRDNCO0VBZ0RvQywwQkFBMEI7U0FBakQsY0FBYzs0RkFBZCxjQUFjO2tCQUQxQixVQUFVOzhCQVFULFdBQVcsTUFVWCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2Uge1xuICAvLyBCb29sZWFuIHZhbHVlIGFib3V0IHRoZSBzdGF0dXMgb2YgdGhlIHJlcXVlc3RcbiAgdmFsdWU6IGJvb2xlYW47XG5cbiAgLy8gTWVzc2FnZSBmb3IgcmVhZGFibGUgdXNhZ2VcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBUaGVtZSBEZXRlY3Rpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gZGV0ZWN0IHdoZXRoZXIgZGFyayBtb2RlIGlzIGVuYWJsZWQgb3Igbm90XG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRoZW1lRGV0ZWN0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RoZW1lLWRldGVjdGlvbic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWVEZXRlY3Rpb246IFRoZW1lRGV0ZWN0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnRoZW1lRGV0ZWN0aW9uLmlzQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xuICogICAgICBpZihyZXMudmFsdWUpIHtcbiAqICAgICAgICB0aGlzLnRoZW1lRGV0ZWN0aW9uLmlzRGFya01vZGVFbmFibGVkKCkudGhlbigocmVzOiBUaGVtZURldGVjdGlvblJlc3BvbnNlKSA9PiB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICogICAgICAgIH0pXG4gKiAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiAgICAgIH1cbiAqICAgfSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGhlbWVEZXRlY3Rpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuVGhlbWVEZXRlY3Rpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcml1c2JhY2tlcy9jb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXRoZW1lLWRldGVjdGlvbicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGhlbWVEZXRlY3Rpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPn1cbiAgICogIFJldHVybnMgYSBwcm9taXNlIHdpdGggYW4gb2JqZWN0IHRoYXQgaGFzIGEgYm9vbGVhbiBwcm9wZXJ0eSB3aGljaCBnaXZlcyBpbmZvcm1hdGlvbiBpZiB0aGUgZGV0ZWN0aW9uIGlzIGF2YWlsYWJsZSBvciBub3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+fVxuICAgKiAgUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbiBvYmplY3QgdGhhdCBoYXMgYSBib29sZWFuIHByb3BlcnR5IHdoaWNoIGdpdmVzIGluZm9ybWF0aW9uIGlmIGRhcmsgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0RhcmtNb2RlRW5hYmxlZCgpOiBQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==