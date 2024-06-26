import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Chooser = /** @class */ (function (_super) {
    __extends(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFile = function (options) { return cordova(this, "getFile", {}, arguments); };
    Chooser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Chooser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Chooser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Chooser });
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/MaximBelov/cordova-plugin-chooser";
    Chooser.platforms = ["Android", "iOS"];
    Chooser.install = "ionic cordova plugin add http://github.com/MaximBelov/cordova-plugin-chooser.git";
    Chooser = __decorate([], Chooser);
    return Chooser;
}(AwesomeCordovaNativePlugin));
export { Chooser };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Chooser, decorators: [{
            type: Injectable
        }], propDecorators: { getFile: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBaUUvRCwyQkFBMEI7Ozs7SUFXckQseUJBQU8sYUFBQyxPQUF3Qjt5R0FYckIsT0FBTzs2R0FBUCxPQUFPOzs7Ozs7O0lBQVAsT0FBTyxrQkFBUCxPQUFPO2tCQWxFcEI7RUFrRTZCLDBCQUEwQjtTQUExQyxPQUFPOzRGQUFQLE9BQU87a0JBRG5CLFVBQVU7OEJBWVQsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3Nlck9wdGlvbnMge1xuICBtaW1lVHlwZXM/OiBzdHJpbmc7XG4gIG1heEZpbGVTaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENob29zZXJSZXN1bHQge1xuICBwYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB3aXRob3V0IGV4dGVuc2lvblxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogd2l0aCBleHRlbnNpb25cbiAgICovXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIG1pbWVUeXBlOiBzdHJpbmc7XG4gIGV4dGVuc2lvbjogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgQ2hvb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKiBGaWxlIGNob29zZXIgcGx1Z2luIGZvciBDb3Jkb3ZhLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgbXVzdCBiZSBhZGRlZCB0byBjb25maWcueG1sIHRvIHByZXZlbnQgY3Jhc2hpbmcgd2hlbiBzZWxlY3RpbmcgbGFyZ2UgZmlsZXMgb24gQW5kcm9pZDpcbiAqIGBgYHhtbFxuICogPHBsYXRmb3JtIG5hbWU9XCJhbmRyb2lkXCI+XG4gKiAgPGVkaXQtY29uZmlnXG4gKiAgICBmaWxlPVwiYXBwL3NyYy9tYWluL0FuZHJvaWRNYW5pZmVzdC54bWxcIlxuICogICAgbW9kZT1cIm1lcmdlXCJcbiAqICAgIHRhcmdldD1cIi9tYW5pZmVzdC9hcHBsaWNhdGlvblwiPlxuICogICAgPGFwcGxpY2F0aW9uIGFuZHJvaWQ6bGFyZ2VIZWFwPVwidHJ1ZVwiIC8+XG4gKiAgPC9lZGl0LWNvbmZpZz5cbiAqIDwvcGxhdGZvcm0+XG4gKiBgYGBcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2hvb3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jaG9vc2VyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hvb3NlcjogQ2hvb3NlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2hvb3Nlci5nZXRGaWxlKClcbiAqICAgLnRoZW4oZmlsZSA9PiBjb25zb2xlLmxvZyhmaWxlID8gZmlsZS5uYW1lIDogJ2NhbmNlbGVkJykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENob29zZXJSZXN1bHRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDaG9vc2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2hvb3NlcicsXG4gIHBsdWdpblJlZjogJ2Nob29zZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tY2hvb3NlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHA6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tY2hvb3Nlci5naXQnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaG9vc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRGlzcGxheXMgbmF0aXZlIHByb21wdCBmb3IgdXNlciB0byBzZWxlY3QgYSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5taW1lVHlwZXMgT3B0aW9uYWwgTUlNRSB0eXBlIGZpbHRlciAoZS5nLiAnaW1hZ2UvZ2lmLHZpZGVvLyonKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWF4RmlsZVNpemUgT3B0aW9uYWwgTWF4IGZpbGUgc2l6ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSBjb250YWluaW5nIHNlbGVjdGVkIGZpbGUnc1xuICAgKiBkYXRhOiBNSU1FIHR5cGUsIGRpc3BsYXkgbmFtZSwgYW5kIG9yaWdpbmFsIFVSSS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RmlsZShvcHRpb25zPzogQ2hvb3Nlck9wdGlvbnMpOiBQcm9taXNlPENob29zZXJSZXN1bHQgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==