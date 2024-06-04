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
export var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePickerOriginal = /** @class */ (function (_super) {
    __extends(ImagePickerOriginal, _super);
    function ImagePickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePickerOriginal.prototype.getPictures = function (options) { return cordova(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePickerOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePickerOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePickerOriginal.pluginName = "ImagePicker";
    ImagePickerOriginal.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePickerOriginal.pluginRef = "window.imagePicker";
    ImagePickerOriginal.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePickerOriginal.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePickerOriginal.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePickerOriginal.platforms = ["Android", "iOS"];
    return ImagePickerOriginal;
}(AwesomeCordovaNativePlugin));
var ImagePicker = new ImagePickerOriginal();
export { ImagePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW1hZ2UtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFvRDVGLE1BQU0sQ0FBTixJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsbURBQVksQ0FBQTtJQUNaLG1EQUFRLENBQUE7QUFDVixDQUFDLEVBSFcsVUFBVSxLQUFWLFVBQVUsUUFHckI7O0lBdUNnQywrQkFBMEI7Ozs7SUFXekQsaUNBQVcsYUFBQyxPQUEyQjtJQVl2Qyx1Q0FBaUI7SUFZakIsMkNBQXFCOzs7Ozs7OztzQkFsSXZCO0VBK0ZpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIG1heCBpbWFnZXMgdG8gYmUgc2VsZWN0ZWQsIGRlZmF1bHRzIHRvIDE1LiBJZiB0aGlzIGlzIHNldCB0byAxLCB1cG9uIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpbWFnZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiBpdC4gKEFuZHJvaWQgb25seSlcbiAgICovXG4gIG1heGltdW1JbWFnZXNDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heCBoZWlnaHQgdG8gYWxsb3cgaW1hZ2VzIHRvIGJlXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFF1YWxpdHkgb2YgaW1hZ2VzLCBkZWZhdWx0cyB0byAxMDBcbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZpZGVvcyBhbGxvd2VkP1xuICAgKi9cbiAgYWxsb3dfdmlkZW8/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiB0aGUgZGVmYXVsdCBpcyB0aGUgbWVzc2FnZSBvZiB0aGUgb2xkIHBsdWdpbiBpbXBsXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIG9sZCBwbHVnaW4gaW1wbCBkaWRuJ3QgaGF2ZSBpdCwgc28gcGFzc2luZyBudWxsIGJ5IGRlZmF1bHRcbiAgICovXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gSW1hZ2VQaWNrZXIuT3V0cHV0VHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBGSUxFX1VSSSA6IDAsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIERBVEFfVVJMIDogMSwgICBSZXR1cm4gaW1hZ2UgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gICAqL1xuICBvdXRwdXRUeXBlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBpT1MgcG9wb3ZlciBhcyBzZWVuIG9uIGlQYWRcbiAgICovXG4gIGRpc2FibGVfcG9wb3Zlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIE91dHB1dFR5cGUge1xuICBGSUxFX1VSTCA9IDAsXG4gIERBVEFfVVJMLFxufVxuXG4vKipcbiAqIEBuYW1lIEltYWdlIFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIFBsdWdpbiBGb3IgTXVsdGlwbGUgSW1hZ2UgU2VsZWN0aW9uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pbWFnZS1waWNrZXJgLlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgaHR0cHM6Ly9naXRodWIuY29tL1RlbGVyaWstVmVyaWZpZWQtUGx1Z2lucy9JbWFnZVBpY2tlclxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbWFnZVBpY2tlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbWFnZS1waWNrZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVBpY2tlcjogSW1hZ2VQaWNrZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucykudGhlbigocmVzdWx0cykgPT4ge1xuICogICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBVUkk6ICcgKyByZXN1bHRzW2ldKTtcbiAqICAgfVxuICogfSwgKGVycikgPT4geyB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBJbWFnZVBpY2tlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbWFnZVBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXInLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuaW1hZ2VQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlbGVyaWstVmVyaWZpZWQtUGx1Z2lucy9JbWFnZVBpY2tlcicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi10ZWxlcmlrLWltYWdlcGlja2VyIC0tdmFyaWFibGUgUEhPVE9fTElCUkFSWV9VU0FHRV9ERVNDUklQVElPTj1cInlvdXIgdXNhZ2UgbWVzc2FnZVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQSE9UT19MSUJSQVJZX1VTQUdFX0RFU0NSSVBUSU9OJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZVBpY2tlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBpY2sgcGljdHVyZXMgZnJvbSB0aGUgbGlicmFyeS5cbiAgICpcbiAgICogQHBhcmFtIHtJbWFnZVBpY2tlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0aGUgaW1hZ2UgZmlsZSBVUklcbiAgICogb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldFBpY3R1cmVzKG9wdGlvbnM6IEltYWdlUGlja2VyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgcGVybWlzc2lvbiB0byByZWFkIGltYWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHdlIGhhdmUgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIH0pXG4gIGhhc1JlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gcmVhZCBpbWFnZXNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICByZXF1ZXN0UmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==