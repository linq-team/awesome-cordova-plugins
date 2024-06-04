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
var PowerManagementOriginal = /** @class */ (function (_super) {
    __extends(PowerManagementOriginal, _super);
    function PowerManagementOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerManagementOriginal.prototype.acquire = function () { return cordova(this, "acquire", {}, arguments); };
    PowerManagementOriginal.prototype.dim = function () { return cordova(this, "dim", {}, arguments); };
    PowerManagementOriginal.prototype.release = function () { return cordova(this, "release", {}, arguments); };
    PowerManagementOriginal.prototype.setReleaseOnPause = function (set) { return cordova(this, "setReleaseOnPause", {}, arguments); };
    PowerManagementOriginal.pluginName = "PowerManagement";
    PowerManagementOriginal.plugin = "cordova-plugin-powermanagement-orig";
    PowerManagementOriginal.pluginRef = "powerManagement";
    PowerManagementOriginal.repo = "https://github.com/Viras-/cordova-plugin-powermanagement";
    PowerManagementOriginal.platforms = ["Android", "iOS"];
    return PowerManagementOriginal;
}(AwesomeCordovaNativePlugin));
var PowerManagement = new PowerManagementOriginal();
export { PowerManagement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcG93ZXItbWFuYWdlbWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCdkQsbUNBQTBCOzs7O0lBTTdELGlDQUFPO0lBU1AsNkJBQUc7SUFTSCxpQ0FBTztJQVdQLDJDQUFpQixhQUFDLEdBQVk7Ozs7OzswQkFoRWhDO0VBNkJxQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKipcbiAqIEBuYW1lIFBvd2VyIE1hbmFnZW1lbnRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFBvd2VyTWFuYWdlbWVudCBwbHVnaW4gb2ZmZXJzIGFjY2VzcyB0byB0aGUgZGV2aWNlcyBwb3dlci1tYW5hZ2VtZW50IGZ1bmN0aW9uYWxpdHkuXG4gKiBJdCBzaG91bGQgYmUgdXNlZCBmb3IgYXBwbGljYXRpb25zIHdoaWNoIGtlZXAgcnVubmluZyBmb3IgYSBsb25nIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnRlcmFjdGlvbi5cbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBQb3dlck1hbmFnZW1lbnQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcG93ZXItbWFuYWdlbWVudC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcG93ZXJNYW5hZ2VtZW50OiBQb3dlck1hbmFnZW1lbnQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucG93ZXJNYW5hZ2VtZW50LmFjcXVpcmUoKVxuICogICAudGhlbihvblN1Y2Nlc3MpXG4gKiAgIC5jYXRjaChvbkVycm9yKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQb3dlck1hbmFnZW1lbnQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wb3dlcm1hbmFnZW1lbnQtb3JpZycsXG4gIHBsdWdpblJlZjogJ3Bvd2VyTWFuYWdlbWVudCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVmlyYXMtL2NvcmRvdmEtcGx1Z2luLXBvd2VybWFuYWdlbWVudCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3dlck1hbmFnZW1lbnQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBBY3F1aXJlIGEgd2FrZWxvY2sgYnkgY2FsbGluZyB0aGlzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhY3F1aXJlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgYWNxdWlyZXMgYSBwYXJ0aWFsIHdha2Vsb2NrLCBhbGxvd2luZyB0aGUgc2NyZWVuIHRvIGJlIGRpbW1lZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGltKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgdGhlIHdha2Vsb2NrLiBJdCdzIGltcG9ydGFudCB0byBkbyB0aGlzIHdoZW4geW91J3JlIGZpbmlzaGVkIHdpdGggdGhlIHdha2Vsb2NrLCB0byBhdm9pZCB1bm5lY2Vzc2FyeSBiYXR0ZXJ5IGRyYWluLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWxlYXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBwbHVnaW4gd2lsbCBhdXRvbWF0aWNhbGx5IHJlbGVhc2UgYSB3YWtlbG9jayB3aGVuIHlvdXIgYXBwIGlzIHBhdXNlZCAoZS5nLiB3aGVuIHRoZSBzY3JlZW4gaXMgdHVybmVkIG9mZiwgb3IgdGhlIHVzZXIgc3dpdGNoZXMgdG8gYW5vdGhlciBhcHApLlxuICAgKiBJdCB3aWxsIHJlYWNxdWlyZSB0aGUgd2FrZWxvY2sgdXBvbiBhcHAgcmVzdW1lLiBJZiB5b3Ugd291bGQgcHJlZmVyIHRvIGRpc2FibGUgdGhpcyBiZWhhdmlvdXIsIHlvdSBjYW4gdXNlIHRoaXMgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBzZXQge2Jvb2xlYW59XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFJlbGVhc2VPblBhdXNlKHNldDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=