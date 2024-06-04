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
var VideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(VideoPlayerOriginal, _super);
    function VideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoPlayerOriginal.prototype.play = function (fileUrl, options) { return cordova(this, "play", {}, arguments); };
    VideoPlayerOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    VideoPlayerOriginal.pluginName = "VideoPlayer";
    VideoPlayerOriginal.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
    VideoPlayerOriginal.pluginRef = "VideoPlayer";
    VideoPlayerOriginal.repo = "https://github.com/moust/cordova-plugin-videoplayer";
    VideoPlayerOriginal.platforms = ["Android"];
    return VideoPlayerOriginal;
}(AwesomeCordovaNativePlugin));
var VideoPlayer = new VideoPlayerOriginal();
export { VideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlkZW8tcGxheWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUQzRCwrQkFBMEI7Ozs7SUFTekQsMEJBQUksYUFBQyxPQUFlLEVBQUUsT0FBc0I7SUFRNUMsMkJBQUs7Ozs7OztzQkFyRVA7RUFvRGlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciB0aGUgdmlkZW8gcGxheWJhY2sgdXNpbmcgdGhlIGBwbGF5YCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWRlb09wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHZvbHVtZSBvZiB0aGUgdmlkZW8gcGxheWJhY2ssIHdoZXJlIDAuMCBpcyAwJSB2b2x1bWUgYW5kIDEuMCBpcyAxMDAlLlxuICAgKiBGb3IgZXhhbXBsZTogZm9yIGEgdm9sdW1lIG9mIDMwJSBzZXQgdGhlIHZhbHVlIHRvIDAuMy5cbiAgICovXG4gIHZvbHVtZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZXJlIGFyZSB0d28gb3B0aW9ucyBmb3IgdGhlIHNjYWxpbmcgbW9kZS4gU0NBTEVfVE9fRklUIHdoaWNoIGlzIGRlZmF1bHQgYW5kIFNDQUxFX1RPX0ZJVF9XSVRIX0NST1BQSU5HLlxuICAgKiBUaGVzZSBzdHJpbmdzIGFyZSB0aGUgb25seSBvbmVzIHdoaWNoIGNhbiBiZSBwYXNzZWQgYXMgb3B0aW9uLlxuICAgKi9cbiAgc2NhbGluZ01vZGU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgVmlkZW8gUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgQ29yZG92YSBwbHVnaW4gdGhhdCBzaW1wbHkgYWxsb3dzIHlvdSB0byBpbW1lZGlhdGVseSBwbGF5IGEgdmlkZW8gaW4gZnVsbHNjcmVlbiBtb2RlLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29tLm1vdXN0LmNvcmRvdmEudmlkZW9wbGF5ZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbVmlkZW9QbGF5ZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllcikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFZpZGVvUGxheWVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3ZpZGVvLXBsYXllci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlkZW9QbGF5ZXI6IFZpZGVvUGxheWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBQbGF5aW5nIGEgdmlkZW8uXG4gKiB0aGlzLnZpZGVvUGxheWVyLnBsYXkoJ2ZpbGU6Ly8vYW5kcm9pZF9hc3NldC93d3cvbW92aWUubXA0JykudGhlbigoKSA9PiB7XG4gKiAgY29uc29sZS5sb2coJ3ZpZGVvIGNvbXBsZXRlZCcpO1xuICogfSkuY2F0Y2goZXJyID0+IHtcbiAqICBjb25zb2xlLmxvZyhlcnIpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogVmlkZW9PcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVmlkZW9QbGF5ZXInLFxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vbW91c3QvY29yZG92YS1wbHVnaW4tdmlkZW9wbGF5ZXIuZ2l0JyxcbiAgcGx1Z2luUmVmOiAnVmlkZW9QbGF5ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21vdXN0L2NvcmRvdmEtcGx1Z2luLXZpZGVvcGxheWVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQbGF5cyB0aGUgdmlkZW8gZnJvbSB0aGUgcGFzc2VkIHVybC5cbiAgICpcbiAgICogQHBhcmFtIGZpbGVVcmwge3N0cmluZ30gRmlsZSB1cmwgdG8gdGhlIHZpZGVvLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7VmlkZW9PcHRpb25zP30gT3B0aW9uYWwgdmlkZW8gcGxheWJhY2sgc2V0dGluZ3MuIFNlZSBvcHRpb25zIGFib3ZlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIHZpZGVvIHdhcyBwbGF5ZWQgc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwbGF5KGZpbGVVcmw6IHN0cmluZywgb3B0aW9ucz86IFZpZGVvT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSB2aWRlbyBwbGF5YmFjayBpbW1lZGlhdGx5LlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cbn1cbiJdfQ==