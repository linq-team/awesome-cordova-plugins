import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var BiometricWrapper = /** @class */ (function (_super) {
    __extends(BiometricWrapper, _super);
    function BiometricWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapper.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapper.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BiometricWrapper, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BiometricWrapper.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BiometricWrapper });
    BiometricWrapper.pluginName = "BiometricWrapper";
    BiometricWrapper.plugin = "cordova-plugin-biometric";
    BiometricWrapper.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapper.repo = "";
    BiometricWrapper.install = "";
    BiometricWrapper.installVariables = [];
    BiometricWrapper.platforms = ["Android"];
    BiometricWrapper = __decorate([], BiometricWrapper);
    return BiometricWrapper;
}(AwesomeCordovaNativePlugin));
export { BiometricWrapper };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BiometricWrapper, decorators: [{
            type: Injectable
        }], propDecorators: { activateIris: [], activateFingerprint: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvbWV0cmljLXdyYXBwZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQWtDdEQsb0NBQTBCOzs7O0lBUTlELHVDQUFZLGFBQUMsSUFBUztJQVd0Qiw4Q0FBbUIsYUFBQyxJQUFTO2tIQW5CbEIsZ0JBQWdCO3NIQUFoQixnQkFBZ0I7Ozs7Ozs7O0lBQWhCLGdCQUFnQixrQkFBaEIsZ0JBQWdCOzJCQW5DN0I7RUFtQ3NDLDBCQUEwQjtTQUFuRCxnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVTs4QkFTVCxZQUFZLE1BV1osbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBCaW9tZXRyaWNXcmFwcGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGNhcHR1cmUgYmlvbWV0cmljKElyaXMgYW5kIEZpbmdlcnByaW50KSBhbmQgdmFsaWRhdGUgdGhlIHVzZXIuXG4gKiBNYXkgYmUgdXNlZCBpbiBCYW5raW5nIGRvbWFpblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCaW9tZXRyaWNXcmFwcGVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Jpb21ldHJpYy13cmFwcGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmlvbWV0cmljV3JhcHBlcjogQmlvbWV0cmljV3JhcHBlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmlvbWV0cmljV3JhcHBlci5hY3RpdmF0ZUlyaXMoeydQSURfWE1MJzogJzxwaWQteG1sLz4nfSlcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiApXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jpb21ldHJpY1dyYXBwZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iaW9tZXRyaWMnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmlvbWV0cmljV3JhcHBlcicsXG4gIHJlcG86ICcnLFxuICBpbnN0YWxsOiAnJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJpb21ldHJpY1dyYXBwZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFjdGl2YXRlIGlyaXMgYWN0aXZpdHlcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGlyaXMgZGF0YSBjYXB0dXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhY3RpdmF0ZUlyaXMoYXJnczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBhY3RpdmF0ZSBmaW5nZXJwcmludCBhY3Rpdml0eVxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gRlAgZGF0YSBjYXB0dXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhY3RpdmF0ZUZpbmdlcnByaW50KGFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=