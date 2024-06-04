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
import { Observable } from 'rxjs';
var DfuUpdateOriginal = /** @class */ (function (_super) {
    __extends(DfuUpdateOriginal, _super);
    function DfuUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DfuUpdateOriginal.prototype.updateFirmware = function (options) { return cordova(this, "updateFirmware", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    DfuUpdateOriginal.pluginName = "DfuUpdate";
    DfuUpdateOriginal.plugin = "cordova-plugin-dfu-update";
    DfuUpdateOriginal.pluginRef = "window.DfuUpdate";
    DfuUpdateOriginal.repo = "https://github.com/EinfachHans/cordova-plugin-dfu-update";
    DfuUpdateOriginal.install = "ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION=\"1.11.0\"";
    DfuUpdateOriginal.installVariables = ["ANDROID_NORDIC_VERSION"];
    DfuUpdateOriginal.platforms = ["Android", "iOS"];
    return DfuUpdateOriginal;
}(AwesomeCordovaNativePlugin));
var DfuUpdate = new DfuUpdateOriginal();
export { DfuUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGZ1LXVwZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaURILDZCQUEwQjs7OztJQVd2RCxrQ0FBYyxhQUFDLE9BQXNCOzs7Ozs7OztvQkE5RHZDO0VBbUQrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBpZGVudGlmaWVyIGZvciB0aGUgQmx1ZXRvb3RoIExFIGRldmljZSB0byB1cGRhdGUuIEl0IHdpbGwgZWl0aGVyIGJlIGEgTUFDIGFkZHJlc3MgKG9uIEFuZHJvaWQpIG9yIGEgVVVJRCAob24gaU9TKS5cbiAgICovXG4gIGRldmljZUlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIHRoYXQgaXMgdGhlIHBhdGggdG8gdGhlIGZpbGUgdG8gdXNlIGluIHRoZSB1cGRhdGUuIEl0IGNhbiBiZSBlaXRoZXIgaW4gZWl0aGVyIGBjZHZmaWxlOi8vYCBvciBgZmlsZTovL2AgZm9ybWF0LlxuICAgKi9cbiAgZmlsZVVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgUGFja2V0UmVjZWlwdE5vdGlmaWNhdGlvbnNWYWx1ZSAoRGVmYXVsdCB0byAxMClcbiAgICovXG4gIHBhY2tldFJlY2VpcHROb3RpZmljYXRpb25zVmFsdWU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgRGZ1IFVwZGF0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpcyBhIFdyYXBwZXIgdG8gdXNlIE5vcmRpYyBTZW1pY29uZHVjdG9yJ3MgRGV2aWNlIEZpcm13YXJlIFVwZGF0ZSAoREZVKSBzZXJ2aWNlIHRvIHVwZGF0ZSBhIEJsdWV0b290aCBMRSBkZXZpY2UuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERmdVVwZGF0ZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kZnUtdXBkYXRlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGZ1VXBkYXRlOiBEZnVVcGRhdGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmRmdVVwZGF0ZS51cGRhdGVGaXJtd2FyZSgnZmlsZVVSTCcsICdkZXZpY2VJZGVudGlmaWVyJylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZnVVcGRhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZnUtdXBkYXRlJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LkRmdVVwZGF0ZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWluZmFjaEhhbnMvY29yZG92YS1wbHVnaW4tZGZ1LXVwZGF0ZScsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZGZ1LXVwZGF0ZSAtLXZhcmlhYmxlIEFORFJPSURfTk9SRElDX1ZFUlNJT049XCIxLjExLjBcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQU5EUk9JRF9OT1JESUNfVkVSU0lPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGZ1VXBkYXRlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnQgdGhlIEZpcm13YXJlLVVwZGF0ZS1Qcm9jZXNzXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHByb2Nlc3NcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhIE9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHVwZGF0ZUZpcm13YXJlKG9wdGlvbnM6IFVwZGF0ZU9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19