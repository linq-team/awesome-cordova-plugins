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
var TealiumInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(TealiumInstallReferrerOriginal, _super);
    function TealiumInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrerOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrerOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrerOriginal.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrerOriginal.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrerOriginal.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrerOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrerOriginal.platforms = ["Android"];
    TealiumInstallReferrerOriginal.install = "";
    return TealiumInstallReferrerOriginal;
}(AwesomeCordovaNativePlugin));
var TealiumInstallReferrer = new TealiumInstallReferrerOriginal();
export { TealiumInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS1pbnN0YWxscmVmZXJyZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFrQ2hELDBDQUEwQjs7OztJQVFwRSw4Q0FBYSxhQUFDLFlBQW9CO0lBV2xDLDRDQUFXLGFBQUMsWUFBb0I7Ozs7Ozs7aUNBckRsQztFQWtDNEMsMEJBQTBCO1NBQXpELHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHBhaWRcbiAqIEBuYW1lIFRlYWxpdW1JbnN0YWxsUmVmZXJyZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgW1RlYWxpdW0gQ29yZG92YSBQbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS90ZWFsaXVtL2NvcmRvdmEtcGx1Z2luKS4gV2l0aG91dCBpdCwgdGhpcyBtb2R1bGUgd2lsbCBub3QgZG8gYW55dGhpbmcuXG4gKiBJbXBsZW1lbnRzIGEgQnJvYWRjYXN0IFJlY2VpdmVyIGZvciB0aGUgSU5TVEFMTF9SRUZFUlJFUiBpbnRlbnQuXG4gKiBAdXNhZ2VcbiAqIGBgYFxuICogaW1wb3J0IHsgVGVhbGl1bUluc3RhbGxSZWZlcnJlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90ZWFsaXVtLWluc3RhbGxyZWZlcnJlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbGxSZWZlcnJlcjogVGVhbGl1bUluc3RhbGxSZWZlcnJlcikgeyB9XG4gKlxuICpcbiAqIHRoaXMuaW5zdGFsbFJlZmVycmVyLnNldFBlcnNpc3RlbnQoXCJtYWluXCIpO1xuICogdGhpcy5pbnN0YWxsUmVmZXJyZXIuc2V0Vm9sYXRpbGUoXCJtYWluXCIpO1xuICpcbiAqXG4gKlxuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZWFsaXVtSW5zdGFsbFJlZmVycmVyJyxcbiAgcGx1Z2luOiAndGVhbGl1bS1jb3Jkb3ZhLWluc3RhbGxyZWZlcnJlcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd3aW5kb3cudGVhbGl1bUluc3RhbGxSZWZlcnJlcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZWFsaXVtSW5zdGFsbFJlZmVycmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGluc3RhbGwgcmVmZXJyZXIgaW5mb3JtYXRpb24gYXMgcGVyc2lzdGVudCBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UGVyc2lzdGVudChpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBpbnN0YWxsIHJlZmVycmVyIGluZm9ybWF0aW9uIGFzIHZvbGF0aWxlIGRhdGFcbiAgICpcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRWb2xhdGlsZShpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=