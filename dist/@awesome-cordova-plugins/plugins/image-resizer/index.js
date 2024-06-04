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
var ImageResizerOriginal = /** @class */ (function (_super) {
    __extends(ImageResizerOriginal, _super);
    function ImageResizerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResizerOriginal.prototype.resize = function (options) { return cordova(this, "resize", {}, arguments); };
    ImageResizerOriginal.pluginName = "ImageResizer";
    ImageResizerOriginal.plugin = "cordova-plugin-image-resizer";
    ImageResizerOriginal.pluginRef = "ImageResizer";
    ImageResizerOriginal.repo = "https://github.com/JoschkaSchulz/cordova-plugin-image-resizer";
    ImageResizerOriginal.platforms = ["Android", "iOS"];
    return ImageResizerOriginal;
}(AwesomeCordovaNativePlugin));
var ImageResizer = new ImageResizerOriginal();
export { ImageResizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW1hZ2UtcmVzaXplci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXdFMUQsZ0NBQTBCOzs7O0lBUzFELDZCQUFNLGFBQUMsT0FBNEI7Ozs7Ozt1QkFyRnJDO0VBNEVrQywwQkFBMEI7U0FBL0MsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzZG9jL3JlcXVpcmUtcGFyYW0tdHlwZSAqL1xuLyogZXNsaW50LWRpc2FibGUganNkb2MvY2hlY2stdGFnLW5hbWVzICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VSZXNpemVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgVVJJIGZvciB0aGUgaW1hZ2Ugb24gdGhlIGRldmljZSB0byBnZXQgc2NhbGVkXG4gICAqL1xuICB1cmk6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBmb2xkZXIgdGhlIGltYWdlIHNob3VsZCBiZSBwdXRcbiAgICogKEFuZHJvaWQgb25seSlcbiAgICovXG4gIGZvbGRlck5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIGN1c3RvbSBuYW1lIGZvciB0aGUgZmlsZS4gRGVmYXVsdCBuYW1lIGlzIGEgdGltZXN0YW1wLiBZb3UgaGF2ZSB0byBzZXQgdGhpcyB2YWx1ZSBvbiBpT1NcbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICpcbiAgICogUXVhbGl0eSBnaXZlbiBhcyBOdW1iZXIgZm9yIHRoZSBxdWFsaXR5IG9mIHRoZSBuZXcgaW1hZ2VcbiAgICogKEFuZHJvaWQgYW5kIGlPUyBvbmx5KVxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbmV3IGltYWdlXG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgbmV3IGltYWdlXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHJldHVybiBhIGJhc2U2NCBlbmNvZGVkIGltYWdlIHN0cmluZyBpbnN0ZWFkIG9mIHRoZSBwYXRoIHRvIHRoZSByZXNpemVkIGltYWdlLlxuICAgKiBpT1Mgb25seVxuICAgKi9cbiAgYmFzZTY0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBJbWFnZVJlc2l6ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBQbHVnaW4gRm9yIEltYWdlIFJlc2l6ZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbWFnZVJlc2l6ZXIsIEltYWdlUmVzaXplck9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW1hZ2UtcmVzaXplci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VSZXNpemVyOiBJbWFnZVJlc2l6ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBvcHRpb25zID0ge1xuICogIHVyaTogdXJpLFxuICogIGZvbGRlck5hbWU6ICdQcm90b25ldCcsXG4gKiAgcXVhbGl0eTogOTAsXG4gKiAgd2lkdGg6IDEyODAsXG4gKiAgaGVpZ2h0OiAxMjgwXG4gKiB9IGFzIEltYWdlUmVzaXplck9wdGlvbnM7XG4gKlxuICogdGhpcy5pbWFnZVJlc2l6ZXJcbiAqICAgLnJlc2l6ZShvcHRpb25zKVxuICogICAudGhlbigoZmlsZVBhdGg6IHN0cmluZykgPT4gY29uc29sZS5sb2coJ0ZpbGVQYXRoJywgZmlsZVBhdGgpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW1hZ2VSZXNpemVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW1hZ2UtcmVzaXplcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdJbWFnZVJlc2l6ZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSm9zY2hrYVNjaHVsei9jb3Jkb3ZhLXBsdWdpbi1pbWFnZS1yZXNpemVyJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VSZXNpemVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZXNpemVzIHRoZSBpbWFnZSBiYXNlZCBvbiB0aGUgb3B0aW9ucyBwcm92aWRlZFxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW1hZ2VSZXNpemVyT3B0aW9uc30gaW1hZ2UgcmVzaXplIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRoZSByZXNpemVkIGltYWdlIGZpbGUgVVJJXG4gICAqIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc2l6ZShvcHRpb25zOiBJbWFnZVJlc2l6ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==