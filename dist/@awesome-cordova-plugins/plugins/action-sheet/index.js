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
var ActionSheetOriginal = /** @class */ (function (_super) {
    __extends(ActionSheetOriginal, _super);
    function ActionSheetOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience property to select an Android theme value
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    ActionSheetOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    ActionSheetOriginal.prototype.hide = function (options) { return cordova(this, "hide", {}, arguments); };
    ActionSheetOriginal.pluginName = "ActionSheet";
    ActionSheetOriginal.plugin = "cordova-plugin-actionsheet";
    ActionSheetOriginal.pluginRef = "plugins.actionsheet";
    ActionSheetOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet";
    ActionSheetOriginal.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone 8"];
    return ActionSheetOriginal;
}(AwesomeCordovaNativePlugin));
var ActionSheet = new ActionSheetOriginal();
export { ActionSheet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWN0aW9uLXNoZWV0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0czRCwrQkFBMEI7OztRQUN6RDs7V0FFRztRQUNILG9CQUFjLEdBTVY7WUFDRixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGdCQUFnQixFQUFFLENBQUM7WUFDbkIseUJBQXlCLEVBQUUsQ0FBQztZQUM1QiwwQkFBMEIsRUFBRSxDQUFDO1NBQzlCLENBQUM7OztJQVVGLDBCQUFJLGFBQUMsT0FBNEI7SUFXakMsMEJBQUksYUFBQyxPQUE0Qjs7Ozs7O3NCQXRJbkM7RUFpR2lDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25TaGVldE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGxhYmVscyBmb3IgdGhlIGJ1dHRvbnMuIFVzZXMgdGhlIGluZGV4IHhcbiAgICovXG4gIGJ1dHRvbkxhYmVsczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBmb3IgdGhlIGFjdGlvbnNoZWV0XG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN1YnRpdGxlIGZvciB0aGUgYWN0aW9uc2hlZXQgKElPUyBvbmx5KVxuICAgKi9cbiAgc3VidGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZW1lIHRvIGJlIHVzZWQgb24gQW5kcm9pZFxuICAgKi9cbiAgYW5kcm9pZFRoZW1lPzogMSB8IDIgfCAzIHwgNCB8IDU7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhIGNhbmNlbCBvbiBBbmRyb2lkXG4gICAqL1xuICBhbmRyb2lkRW5hYmxlQ2FuY2VsQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlIGEgY2FuY2VsIG9uIFdpbmRvd3MgUGhvbmVcbiAgICovXG4gIHdpbnBob25lRW5hYmxlQ2FuY2VsQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWRkIGEgY2FuY2VsIGJ1dHRvbiB3aXRoIHRleHRcbiAgICovXG4gIGFkZENhbmNlbEJ1dHRvbldpdGhMYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogQWRkIGEgZGVzdHJ1Y3RpdmUgYnV0dG9uIHdpdGggdGV4dFxuICAgKi9cbiAgYWRkRGVzdHJ1Y3RpdmVCdXR0b25XaXRoTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uIGFuIGlQYWQsIHNldCB0aGUgWCxZIHBvc2l0aW9uXG4gICAqL1xuICBwb3NpdGlvbj86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgLyoqXG4gICAqIENob29zZSBpZiBkZXN0cnVjdGl2ZSBidXR0b24gd2lsbCBiZSB0aGUgbGFzdFxuICAgKi9cbiAgZGVzdHJ1Y3RpdmVCdXR0b25MYXN0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBBY3Rpb24gU2hlZXRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEFjdGlvblNoZWV0IHBsdWdpbiBzaG93cyBhIG5hdGl2ZSBsaXN0IG9mIG9wdGlvbnMgdGhlIHVzZXIgY2FuIGNob29zZSBmcm9tLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQWN0aW9uU2hlZXQgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1hY3Rpb25zaGVldCkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFjdGlvblNoZWV0LCBBY3Rpb25TaGVldE9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYWN0aW9uLXNoZWV0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25TaGVldDogQWN0aW9uU2hlZXQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBsZXQgYnV0dG9uTGFiZWxzID0gWydTaGFyZSB2aWEgRmFjZWJvb2snLCAnU2hhcmUgdmlhIFR3aXR0ZXInXTtcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBBY3Rpb25TaGVldE9wdGlvbnMgPSB7XG4gKiAgIHRpdGxlOiAnV2hhdCBkbyB5b3Ugd2FudCB3aXRoIHRoaXMgaW1hZ2U/JyxcbiAqICAgc3VidGl0bGU6ICdDaG9vc2UgYW4gYWN0aW9uJyxcbiAqICAgYnV0dG9uTGFiZWxzOiBidXR0b25MYWJlbHMsXG4gKiAgIGFkZENhbmNlbEJ1dHRvbldpdGhMYWJlbDogJ0NhbmNlbCcsXG4gKiAgIGFkZERlc3RydWN0aXZlQnV0dG9uV2l0aExhYmVsOiAnRGVsZXRlJyxcbiAqICAgYW5kcm9pZFRoZW1lOiB0aGlzLmFjdGlvblNoZWV0LkFORFJPSURfVEhFTUVTLlRIRU1FX0hPTE9fREFSSyxcbiAqICAgZGVzdHJ1Y3RpdmVCdXR0b25MYXN0OiB0cnVlXG4gKiB9XG4gKlxuICogdGhpcy5hY3Rpb25TaGVldC5zaG93KG9wdGlvbnMpLnRoZW4oKGJ1dHRvbkluZGV4OiBudW1iZXIpID0+IHtcbiAqICAgY29uc29sZS5sb2coJ0J1dHRvbiBwcmVzc2VkOiAnICsgYnV0dG9uSW5kZXgpO1xuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBY3Rpb25TaGVldE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBY3Rpb25TaGVldCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0JyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5hY3Rpb25zaGVldCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIHByb3BlcnR5IHRvIHNlbGVjdCBhbiBBbmRyb2lkIHRoZW1lIHZhbHVlXG4gICAqL1xuICBBTkRST0lEX1RIRU1FUzoge1xuICAgIFRIRU1FX1RSQURJVElPTkFMOiBudW1iZXI7XG4gICAgVEhFTUVfSE9MT19EQVJLOiBudW1iZXI7XG4gICAgVEhFTUVfSE9MT19MSUdIVDogbnVtYmVyO1xuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IG51bWJlcjtcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVDogbnVtYmVyO1xuICB9ID0ge1xuICAgIFRIRU1FX1RSQURJVElPTkFMOiAxLFxuICAgIFRIRU1FX0hPTE9fREFSSzogMixcbiAgICBUSEVNRV9IT0xPX0xJR0hUOiAzLFxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IDQsXG4gICAgVEhFTUVfREVWSUNFX0RFRkFVTFRfTElHSFQ6IDUsXG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgYSBuYXRpdmUgQWN0aW9uU2hlZXQgY29tcG9uZW50LiBTZWUgYmVsb3cgZm9yIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aW9uU2hlZXRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBTZWUgdGFibGUgYmVsb3dcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpbmRleCBvZiB0aGVcbiAgICogICBidXR0b24gcHJlc3NlZCAoMSBiYXNlZCwgc28gMSwgMiwgMywgZXRjLilcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zPzogQWN0aW9uU2hlZXRPcHRpb25zKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBoaWRlIHRoZSBuYXRpdmUgQWN0aW9uU2hlZXRcbiAgICpcbiAgICogQHBhcmFtICB7QWN0aW9uU2hlZXRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBTZWUgdGFibGUgYmVsb3dcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhY3Rpb25zaGVldCBpcyBjbG9zZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGlkZShvcHRpb25zPzogQWN0aW9uU2hlZXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==