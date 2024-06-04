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
var BiometricWrapperOriginal = /** @class */ (function (_super) {
    __extends(BiometricWrapperOriginal, _super);
    function BiometricWrapperOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapperOriginal.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapperOriginal.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapperOriginal.pluginName = "BiometricWrapper";
    BiometricWrapperOriginal.plugin = "cordova-plugin-biometric";
    BiometricWrapperOriginal.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapperOriginal.repo = "";
    BiometricWrapperOriginal.install = "";
    BiometricWrapperOriginal.installVariables = [];
    BiometricWrapperOriginal.platforms = ["Android"];
    return BiometricWrapperOriginal;
}(AwesomeCordovaNativePlugin));
var BiometricWrapper = new BiometricWrapperOriginal();
export { BiometricWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvbWV0cmljLXdyYXBwZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFrQ3RELG9DQUEwQjs7OztJQVE5RCx1Q0FBWSxhQUFDLElBQVM7SUFXdEIsOENBQW1CLGFBQUMsSUFBUzs7Ozs7Ozs7MkJBdEQvQjtFQW1Dc0MsMEJBQTBCO1NBQW5ELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQmlvbWV0cmljV3JhcHBlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBjYXB0dXJlIGJpb21ldHJpYyhJcmlzIGFuZCBGaW5nZXJwcmludCkgYW5kIHZhbGlkYXRlIHRoZSB1c2VyLlxuICogTWF5IGJlIHVzZWQgaW4gQmFua2luZyBkb21haW5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmlvbWV0cmljV3JhcHBlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iaW9tZXRyaWMtd3JhcHBlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpb21ldHJpY1dyYXBwZXI6IEJpb21ldHJpY1dyYXBwZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJpb21ldHJpY1dyYXBwZXIuYWN0aXZhdGVJcmlzKHsnUElEX1hNTCc6ICc8cGlkLXhtbC8+J30pXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+ICk7XG4gKlxuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCaW9tZXRyaWNXcmFwcGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmlvbWV0cmljJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJpb21ldHJpY1dyYXBwZXInLFxuICByZXBvOiAnJyxcbiAgaW5zdGFsbDogJycsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCaW9tZXRyaWNXcmFwcGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBhY3RpdmF0ZSBpcmlzIGFjdGl2aXR5XG4gICAqXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBpcmlzIGRhdGEgY2FwdHVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWN0aXZhdGVJcmlzKGFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWN0aXZhdGUgZmluZ2VycHJpbnQgYWN0aXZpdHlcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIEZQIGRhdGEgY2FwdHVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWN0aXZhdGVGaW5nZXJwcmludChhcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19