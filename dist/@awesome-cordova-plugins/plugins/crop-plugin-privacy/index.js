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
var CropPluginPrivacyOriginal = /** @class */ (function (_super) {
    __extends(CropPluginPrivacyOriginal, _super);
    function CropPluginPrivacyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CropPluginPrivacyOriginal.prototype.cropImage = function (arg1, arg2) { return cordova(this, "cropImage", {}, arguments); };
    CropPluginPrivacyOriginal.pluginName = "CropPluginPrivacy";
    CropPluginPrivacyOriginal.plugin = "cordova-plugin-crop-privacy";
    CropPluginPrivacyOriginal.pluginRef = "crop";
    CropPluginPrivacyOriginal.repo = "https://github.com/BaraAksayeth25/cordova-plugin-crop-privacy";
    CropPluginPrivacyOriginal.platforms = ["Android"];
    return CropPluginPrivacyOriginal;
}(AwesomeCordovaNativePlugin));
var CropPluginPrivacy = new CropPluginPrivacyOriginal();
export { CropPluginPrivacy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY3JvcC1wbHVnaW4tcHJpdmFjeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTBDckQscUNBQTBCOzs7O0lBUy9ELHFDQUFTLGFBQUMsSUFBWSxFQUFFLElBQWdCOzs7Ozs7NEJBcEQxQztFQTJDdUMsMEJBQTBCO1NBQXBELGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcE9wdGlvbiB7XG4gIC8qKiBUaGUgcmVzdWx0aW5nIEpQRUcgcXVhbGl0eSAoaWdub3JlZCBvbiBBbmRyb2lkKS4gZGVmYXVsdDogMTAwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSByZXN1bHRpbmcgSlBFRyBwaWN0dXJlIHdpZHRoLiBkZWZhdWx0OiAtMSAqL1xuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcblxuICAvKiogVGhlIHJlc3VsdGluZyBKUEVHIHBpY3R1cmUgaGVpZ2h0LiBkZWZhdWx0OiAtMSAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgQ3JvcCBQbHVnaW4gUHJpdmFjeVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ3JvcFBsdWdpblByaXZhY3kgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY3JvcC1wbHVnaW4tcHJpdmFjeS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNyb3BQbHVnaW5Qcml2YWN5OiBDcm9wUGx1Z2luUHJpdmFjeSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY3JvcFBsdWdpblByaXZhY3kuZnVuY3Rpb25OYW1lKCcvcGF0aC90by9pbWFnZScsIHsgcXVhbGl0eTogMTAwLCB0YXJnZXRXaWR0aDogMSwgdGFyZ2V0SGVpZ2h0OiAxIH0pXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ3JvcFBsdWdpblByaXZhY3knLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jcm9wLXByaXZhY3knLFxuICBwbHVnaW5SZWY6ICdjcm9wJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CYXJhQWtzYXlldGgyNS9jb3Jkb3ZhLXBsdWdpbi1jcm9wLXByaXZhY3knLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb3BQbHVnaW5Qcml2YWN5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IHBhdGggZGVzdGluYXRpb25cbiAgICogQHBhcmFtIGFyZzIge29iamVjdH0gQ3JvcHBpbmcgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybiB0aGUgZmlsZSBwYXRoXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNyb3BJbWFnZShhcmcxOiBzdHJpbmcsIGFyZzI6IENyb3BPcHRpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxufVxuIl19