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
var TealiumAdIdentifierOriginal = /** @class */ (function (_super) {
    __extends(TealiumAdIdentifierOriginal, _super);
    function TealiumAdIdentifierOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifierOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifierOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifierOriginal.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifierOriginal.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifierOriginal.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifierOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifierOriginal.platforms = ["Android", "iOS"];
    TealiumAdIdentifierOriginal.install = "";
    return TealiumAdIdentifierOriginal;
}(AwesomeCordovaNativePlugin));
var TealiumAdIdentifier = new TealiumAdIdentifierOriginal();
export { TealiumAdIdentifier };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS1hZGlkZW50aWZpZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFrQ25ELHVDQUEwQjs7OztJQVFqRSwyQ0FBYSxhQUFDLFlBQW9CO0lBV2xDLHlDQUFXLGFBQUMsWUFBb0I7Ozs7Ozs7OEJBckRsQztFQWtDeUMsMEJBQTBCO1NBQXRELG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHBhaWRcbiAqIEBuYW1lIFRlYWxpdW1BZElkZW50aWZpZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgW1RlYWxpdW0gQ29yZG92YSBQbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS90ZWFsaXVtL2NvcmRvdmEtcGx1Z2luKS4gV2l0aG91dCBpdCwgdGhpcyBtb2R1bGUgd2lsbCBub3QgZG8gYW55dGhpbmcuXG4gKiBNYWtlcyB0aGUgSURGQSBhbmQgR29vZ2xlIEFkIElkZW50aWZpZXIgYXZhaWxhYmxlIGluIHRoZSBUZWFsaXVtIGRhdGEgbGF5ZXIuXG4gKiBAdXNhZ2VcbiAqIGBgYFxuICogaW1wb3J0IHsgVGVhbGl1bUFkSWRlbnRpZmllciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90ZWFsaXVtLWFkaWRlbnRpZmllci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkSWRlbnRpZmllcjogVGVhbGl1bUFkSWRlbnRpZmllcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYWRJZGVudGlmaWVyLnNldFBlcnNpc3RlbnQoXCJtYWluXCIpO1xuICogdGhpcy5hZElkZW50aWZpZXIuc2V0Vm9sYXRpbGUoXCJtYWluXCIpO1xuICpcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGVhbGl1bUFkSWRlbnRpZmllcicsXG4gIHBsdWdpbjogJ3RlYWxpdW0tY29yZG92YS1hZGlkZW50aWZpZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnd2luZG93LnRlYWxpdW1BZElkZW50aWZpZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVhbGl1bS9jb3Jkb3ZhLXBsdWdpbicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlYWxpdW1BZElkZW50aWZpZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgYWQgaWRlbnRpZmllciBpbmZvcm1hdGlvbiBhcyBwZXJzaXN0ZW50IGRhdGFcbiAgICpcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRQZXJzaXN0ZW50KGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGFkIGlkZW50aWZpZXIgaW5mb3JtYXRpb24gYXMgdm9sYXRpbGUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFZvbGF0aWxlKGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==