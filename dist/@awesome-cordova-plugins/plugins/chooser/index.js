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
var ChooserOriginal = /** @class */ (function (_super) {
    __extends(ChooserOriginal, _super);
    function ChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooserOriginal.prototype.getFile = function (options) { return cordova(this, "getFile", {}, arguments); };
    ChooserOriginal.pluginName = "Chooser";
    ChooserOriginal.plugin = "cordova-plugin-chooser";
    ChooserOriginal.pluginRef = "chooser";
    ChooserOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-chooser";
    ChooserOriginal.platforms = ["Android", "iOS"];
    ChooserOriginal.install = "ionic cordova plugin add http://github.com/MaximBelov/cordova-plugin-chooser.git";
    return ChooserOriginal;
}(AwesomeCordovaNativePlugin));
var Chooser = new ChooserOriginal();
export { Chooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWlFL0QsMkJBQTBCOzs7O0lBV3JELHlCQUFPLGFBQUMsT0FBd0I7Ozs7Ozs7a0JBN0VsQztFQWtFNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENob29zZXJPcHRpb25zIHtcbiAgbWltZVR5cGVzPzogc3RyaW5nO1xuICBtYXhGaWxlU2l6ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaG9vc2VyUmVzdWx0IHtcbiAgcGF0aDogc3RyaW5nO1xuICAvKipcbiAgICogd2l0aG91dCBleHRlbnNpb25cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIHdpdGggZXh0ZW5zaW9uXG4gICAqL1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBtaW1lVHlwZTogc3RyaW5nO1xuICBleHRlbnNpb246IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIENob29zZXJcbiAqIEBkZXNjcmlwdGlvblxuICogRmlsZSBjaG9vc2VyIHBsdWdpbiBmb3IgQ29yZG92YS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIG11c3QgYmUgYWRkZWQgdG8gY29uZmlnLnhtbCB0byBwcmV2ZW50IGNyYXNoaW5nIHdoZW4gc2VsZWN0aW5nIGxhcmdlIGZpbGVzIG9uIEFuZHJvaWQ6XG4gKiBgYGB4bWxcbiAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICogIDxlZGl0LWNvbmZpZ1xuICogICAgZmlsZT1cImFwcC9zcmMvbWFpbi9BbmRyb2lkTWFuaWZlc3QueG1sXCJcbiAqICAgIG1vZGU9XCJtZXJnZVwiXG4gKiAgICB0YXJnZXQ9XCIvbWFuaWZlc3QvYXBwbGljYXRpb25cIj5cbiAqICAgIDxhcHBsaWNhdGlvbiBhbmRyb2lkOmxhcmdlSGVhcD1cInRydWVcIiAvPlxuICogIDwvZWRpdC1jb25maWc+XG4gKiA8L3BsYXRmb3JtPlxuICogYGBgXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENob29zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2hvb3Nlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNob29zZXIuZ2V0RmlsZSgpXG4gKiAgIC50aGVuKGZpbGUgPT4gY29uc29sZS5sb2coZmlsZSA/IGZpbGUubmFtZSA6ICdjYW5jZWxlZCcpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDaG9vc2VyUmVzdWx0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2hvb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNob29zZXInLFxuICBwbHVnaW5SZWY6ICdjaG9vc2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYXhpbUJlbG92L2NvcmRvdmEtcGx1Z2luLWNob29zZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBodHRwOi8vZ2l0aHViLmNvbS9NYXhpbUJlbG92L2NvcmRvdmEtcGx1Z2luLWNob29zZXIuZ2l0Jyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWltZVR5cGVzIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1heEZpbGVTaXplIE9wdGlvbmFsIE1heCBmaWxlIHNpemUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgY29udGFpbmluZyBzZWxlY3RlZCBmaWxlJ3NcbiAgICogZGF0YTogTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZpbGUob3B0aW9ucz86IENob29zZXJPcHRpb25zKTogUHJvbWlzZTxDaG9vc2VyUmVzdWx0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=