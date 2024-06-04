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
var YoutubeVideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayerOriginal, _super);
    function YoutubeVideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayerOriginal.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayerOriginal.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayerOriginal.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.platforms = ["Android", "iOS"];
    return YoutubeVideoPlayerOriginal;
}(AwesomeCordovaNativePlugin));
var YoutubeVideoPlayer = new YoutubeVideoPlayerOriginal();
export { YoutubeVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMveW91dHViZS12aWRlby1wbGF5ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQ3BELHNDQUEwQjs7OztJQU9oRSxzQ0FBUyxhQUFDLE9BQWU7Ozs7Ozs2QkF6QzNCO0VBa0N3QywwQkFBMEI7U0FBckQsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbi8qKlxuICogQG5hbWUgWW91dHViZSBWaWRlbyBQbGF5ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogUGxheXMgWW91VHViZSB2aWRlb3MgaW4gTmF0aXZlIFlvdVR1YmUgQXBwXG4gKiBAdXNhZ2VcbiAqIEZvciBBbmRyb2lkIDUuMCsgeW91IHdpbGwgbmVlZCB0byBhZGQgdGhlIGZvbGxvd2luZyB0byBjb25maWcueG1sXG4gKiBgYGB4bWxcbiAqIDxwcmVmZXJlbmNlIG5hbWU9XCJZb3VUdWJlRGF0YUFwaUtleVwiIHZhbHVlPVwiW1lPVVIgWU9VVFVCRSBBUEldXCIgLz5cbiAqIGBgYFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZ2V0dGluZy1zdGFydGVkXG4gKlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFlvdXR1YmVWaWRlb1BsYXllciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy95b3V0dWJlLXZpZGVvLXBsYXllci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgeW91dHViZTogWW91dHViZVZpZGVvUGxheWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy55b3V0dWJlLm9wZW5WaWRlbygnbXl2aWRlb2lkJyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWW91dHViZVZpZGVvUGxheWVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teW91dHViZS12aWRlby1wbGF5ZXInLFxuICBwbHVnaW5SZWY6ICdZb3V0dWJlVmlkZW9QbGF5ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvQ29yZG92YVlvdXR1YmVWaWRlb1BsYXllcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBZb3V0dWJlVmlkZW9QbGF5ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQbGF5cyBhIFlvdVR1YmUgdmlkZW9cbiAgICpcbiAgICogQHBhcmFtIHZpZGVvSWQge3N0cmluZ30gVmlkZW8gSURcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvcGVuVmlkZW8odmlkZW9JZDogc3RyaW5nKTogdm9pZCB7fVxufVxuIl19