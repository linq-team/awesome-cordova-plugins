import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var YoutubeVideoPlayer = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: YoutubeVideoPlayer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    YoutubeVideoPlayer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: YoutubeVideoPlayer });
    YoutubeVideoPlayer.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayer.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayer.platforms = ["Android", "iOS"];
    YoutubeVideoPlayer = __decorate([], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}(AwesomeCordovaNativePlugin));
export { YoutubeVideoPlayer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: YoutubeVideoPlayer, decorators: [{
            type: Injectable
        }], propDecorators: { openVideo: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMveW91dHViZS12aWRlby1wbGF5ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQWlDcEQsc0NBQTBCOzs7O0lBT2hFLHNDQUFTLGFBQUMsT0FBZTtvSEFQZCxrQkFBa0I7d0hBQWxCLGtCQUFrQjs7Ozs7O0lBQWxCLGtCQUFrQixrQkFBbEIsa0JBQWtCOzZCQWxDL0I7RUFrQ3dDLDBCQUEwQjtTQUFyRCxrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVTs4QkFRVCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbi8qKlxuICogQG5hbWUgWW91dHViZSBWaWRlbyBQbGF5ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogUGxheXMgWW91VHViZSB2aWRlb3MgaW4gTmF0aXZlIFlvdVR1YmUgQXBwXG4gKiBAdXNhZ2VcbiAqIEZvciBBbmRyb2lkIDUuMCsgeW91IHdpbGwgbmVlZCB0byBhZGQgdGhlIGZvbGxvd2luZyB0byBjb25maWcueG1sXG4gKiBgYGB4bWxcbiAqIDxwcmVmZXJlbmNlIG5hbWU9XCJZb3VUdWJlRGF0YUFwaUtleVwiIHZhbHVlPVwiW1lPVVIgWU9VVFVCRSBBUEldXCIgLz5cbiAqIGBgYFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZ2V0dGluZy1zdGFydGVkXG4gKlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFlvdXR1YmVWaWRlb1BsYXllciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy95b3V0dWJlLXZpZGVvLXBsYXllci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgeW91dHViZTogWW91dHViZVZpZGVvUGxheWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy55b3V0dWJlLm9wZW5WaWRlbygnbXl2aWRlb2lkJyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWW91dHViZVZpZGVvUGxheWVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teW91dHViZS12aWRlby1wbGF5ZXInLFxuICBwbHVnaW5SZWY6ICdZb3V0dWJlVmlkZW9QbGF5ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvQ29yZG92YVlvdXR1YmVWaWRlb1BsYXllcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBZb3V0dWJlVmlkZW9QbGF5ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQbGF5cyBhIFlvdVR1YmUgdmlkZW9cbiAgICpcbiAgICogQHBhcmFtIHZpZGVvSWQge3N0cmluZ30gVmlkZW8gSURcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvcGVuVmlkZW8odmlkZW9JZDogc3RyaW5nKTogdm9pZCB7fVxufVxuIl19