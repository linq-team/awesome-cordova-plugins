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
var FFMpegOriginal = /** @class */ (function (_super) {
    __extends(FFMpegOriginal, _super);
    function FFMpegOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FFMpegOriginal.prototype.exec = function (cmd) { return cordova(this, "exec", {}, arguments); };
    FFMpegOriginal.prototype.probe = function (filePath) { return cordova(this, "probe", {}, arguments); };
    FFMpegOriginal.pluginName = "FFMpeg";
    FFMpegOriginal.plugin = "cordova-plugin-ffmpeg";
    FFMpegOriginal.pluginRef = "ffmpeg";
    FFMpegOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-ffmpeg";
    FFMpegOriginal.platforms = ["Android", "iOS"];
    return FFMpegOriginal;
}(AwesomeCordovaNativePlugin));
var FFMpeg = new FFMpegOriginal();
export { FFMpeg };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmZtcGVnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBb0RoRSwwQkFBMEI7Ozs7SUFPcEQscUJBQUksYUFBQyxHQUFXO0lBVWhCLHNCQUFLLGFBQUMsUUFBZ0I7Ozs7OztpQkF0RXhCO0VBcUQ0QiwwQkFBMEI7U0FBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9JbmZvcm1hdGlvbiB7XG4gIGZvcm1hdDoge1xuICAgIGJpdF9yYXRlOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IHN0cmluZztcbiAgICBmaWxlbmFtZTogc3RyaW5nO1xuICAgIGZvcm1hdF9uYW1lOiBzdHJpbmc7XG4gICAgbmJfcHJvZ3JhbXM6IHN0cmluZztcbiAgICBuYl9zdHJlYW1zOiBzdHJpbmc7XG4gICAgcHJvYmVfc2NvcmU6IHN0cmluZztcbiAgICBzaXplOiBzdHJpbmc7XG4gICAgc3RhcnRfdGltZTogc3RyaW5nO1xuICB9O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQG5hbWUgRkZNcGVnXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpbXBsZSBwbHVnaW4gdGhhdCBiaW5kcyBtb2JpbGUgZmZtcGVnIHRvIGV4ZWN1dGUgZmZtcGVnIGNvbW1hbmRzXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGRk1wZWcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmZtcGVnL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmZNcGVnOiBGRk1wZWcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZGTXBlZy5leGVjKCctaSBzb21laW5wdXQubXA0IC12biAtYzphIGNvcHkgb3V0Lm1wMycpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICpcbiAqIHRoaXMuZkZNcGVnLnByb2JlKCdzb21lZmlsZS5tcDRcIicpXG4gKiAgIC50aGVuKChyZXM6IFZpZGVvSW5mb3JtYXRpb24pID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGRk1wZWcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mZm1wZWcnLFxuICBwbHVnaW5SZWY6ICdmZm1wZWcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tZmZtcGVnJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZGTXBlZyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEV4ZWN1dGUgZmZtcGVnIGNvbW1hbmRcbiAgICogQHBhcmFtIGNtZCB7c3RyaW5nfSBjb21tYW5kXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGV4ZWN1dGUgZmluaXNoZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZXhlYyhjbWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIG1lZGlhIGluZm9ybWF0aW9uIGZvciB0aGUgZmlsZSBzcGVjaWZpZWQgd2l0aCBwYXRoXG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBmaWxlIHBhdGhcbiAgICogQHJldHVybiB7UHJvbWlzZTxWaWRlb0luZm9ybWF0aW9uPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG1lZGlhIGluZm9ybWF0aW9uIHJlY2VpdmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByb2JlKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPFZpZGVvSW5mb3JtYXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==