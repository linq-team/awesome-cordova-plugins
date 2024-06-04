import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var MediaCapture = /** @class */ (function (_super) {
    __extends(MediaCapture, _super);
    function MediaCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaCapture.prototype.captureAudio = function (options) { return cordova(this, "captureAudio", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureImage = function (options) { return cordova(this, "captureImage", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureVideo = function (options) { return cordova(this, "captureVideo", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.onPendingCaptureResult = function () { return cordova(this, "onPendingCaptureResult", { "eventObservable": true, "event": "pendingcaptureresult" }, arguments); };
    MediaCapture.prototype.onPendingCaptureError = function () { return cordova(this, "onPendingCaptureError", { "eventObservable": true, "event": "pendingcaptureerror" }, arguments); };
    Object.defineProperty(MediaCapture.prototype, "supportedImageModes", {
        get: function () { return cordovaPropertyGet(this, "supportedImageModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedImageModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedAudioModes", {
        get: function () { return cordovaPropertyGet(this, "supportedAudioModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedAudioModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedVideoModes", {
        get: function () { return cordovaPropertyGet(this, "supportedVideoModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedVideoModes", value); },
        enumerable: false,
        configurable: true
    });
    MediaCapture.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MediaCapture, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    MediaCapture.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MediaCapture });
    MediaCapture.pluginName = "MediaCapture";
    MediaCapture.plugin = "cordova-plugin-media-capture";
    MediaCapture.pluginRef = "navigator.device.capture";
    MediaCapture.repo = "https://github.com/apache/cordova-plugin-media-capture";
    MediaCapture.platforms = ["Android", "Browser", "iOS", "Windows"];
    MediaCapture = __decorate([], MediaCapture);
    return MediaCapture;
}(AwesomeCordovaNativePlugin));
export { MediaCapture };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MediaCapture, decorators: [{
            type: Injectable
        }], propDecorators: { supportedImageModes: [], supportedAudioModes: [], supportedVideoModes: [], captureAudio: [], captureImage: [], captureVideo: [], onPendingCaptureResult: [], onPendingCaptureError: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWVkaWEtY2FwdHVyZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUEySkEsZ0NBQTBCOzs7O0lBa0MxRCxtQ0FBWSxhQUFDLE9BQTZCO0lBYTFDLG1DQUFZLGFBQUMsT0FBNkI7SUFhMUMsbUNBQVksYUFBQyxPQUE2QjtJQWExQyw2Q0FBc0I7SUFhdEIsNENBQXFCOzBCQS9FckIsNkNBQW1COzs7Ozs7MEJBUW5CLDZDQUFtQjs7Ozs7OzBCQVFuQiw2Q0FBbUI7Ozs7Ozs4R0F2QlIsWUFBWTtrSEFBWixZQUFZOzs7Ozs7SUFBWixZQUFZLGtCQUFaLFlBQVk7dUJBN0p6QjtFQTZKa0MsMEJBQTBCO1NBQS9DLFlBQVk7NEZBQVosWUFBWTtrQkFEeEIsVUFBVTs4QkFRVCxtQkFBbUIsTUFRbkIsbUJBQW1CLE1BUW5CLG1CQUFtQixNQVduQixZQUFZLE1BYVosWUFBWSxNQWFaLFlBQVksTUFhWixzQkFBc0IsTUFhdEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRmlsZSB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSwgaW5jbHVkaW5nIHRoZSBuYW1lLlxuICAgKi9cbiAgZnVsbFBhdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaWxlJ3MgbWltZSB0eXBlXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIGZpbGUgd2FzIGxhc3QgbW9kaWZpZWQuXG4gICAqL1xuICBsYXN0TW9kaWZpZWREYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuXG4gICAqL1xuICBzaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZm9ybWF0IGluZm9ybWF0aW9uIG9mIHRoZSBtZWRpYSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWNjZXNzQ2FsbGJhY2tcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3JDYWxsYmFja1xuICAgKi9cbiAgZ2V0Rm9ybWF0RGF0YShzdWNjZXNzQ2FsbGJhY2s6IChkYXRhOiBNZWRpYUZpbGVEYXRhKSA9PiBhbnksIGVycm9yQ2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFGaWxlRGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgYWN0dWFsIGZvcm1hdCBvZiB0aGUgYXVkaW8gYW5kIHZpZGVvIGNvbnRlbnQuXG4gICAqL1xuICBjb2RlY3M6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBhdmVyYWdlIGJpdHJhdGUgb2YgdGhlIGNvbnRlbnQuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBpbWFnZXMuXG4gICAqL1xuICBiaXRyYXRlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBhdWRpbyBjbGlwcy5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBhdWRpbyBjbGlwcy5cbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSB2aWRlbyBvciBzb3VuZCBjbGlwIGluIHNlY29uZHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBpbWFnZXMuXG4gICAqL1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVFcnJvciB7XG4gIGNvZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlQXVkaW9PcHRpb25zIHtcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGF1ZGlvIGNsaXBzLiBEZWZhdWx0cyB0byAxLlxuICAgKiBPbiBpT1MgeW91IGNhbiBvbmx5IHJlY29yZCBvbmUgZmlsZS5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuICAvKipcbiAgICogTWF4aW11bSBkdXJhdGlvbiBvZiBhbiBhdWRpbyBzb3VuZCBjbGlwLCBpbiBzZWNvbmRzLiBUaGlzIGRvZXMgbm90IHdvcmsgb24gQW5kcm9pZCBkZXZpY2VzLlxuICAgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZUltYWdlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBpbWFnZXMgdG8gY2FwdHVyZS4gVGhpcyBsaW1pdCBpcyBub3Qgc3VwcG9ydGVkIG9uIGlPUywgb25seSBvbmUgaW1hZ2Ugd2lsbCBiZSB0YWtlbiBwZXIgaW52b2NhdGlvbi5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVWaWRlb09wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgdmlkZW8gY2xpcHMgdG8gcmVjb3JkLiBUaGlzIHZhbHVlIGlzIGlnbm9yZWQgb24gaU9TLCBvbmx5IG9uZSB2aWRlbyBjbGlwIGNhbiBiZSB0YWtlbiBwZXIgaW52b2NhdGlvbi5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuICAvKipcbiAgICogTWF4aW11bSBkdXJhdGlvbiBwZXIgdmlkZW8gY2xpcC4gVGhpcyB3aWxsIGJlIGlnbm9yZWQgb24gQmxhY2tCZXJyeS5cbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogUXVhbGl0eSBvZiB0aGUgdmlkZW8uIFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBBbmRyb2lkLlxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgQVNDSUktZW5jb2RlZCBsb3dlcmNhc2Ugc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWVkaWEgdHlwZS5cbiAgICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGltYWdlIG9yIHZpZGVvIGluIHBpeGVscy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIHNvdW5kIGNsaXBzLlxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGltYWdlIG9yIHZpZGVvIGluIHBpeGVscy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIHNvdW5kIGNsaXBzLlxuICAgKi9cbiAgd2lkdGg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBNZWRpYSBDYXB0dXJlXG4gKiBAcHJlbWllciBtZWRpYS1jYXB0dXJlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZGV2aWNlJ3MgYXVkaW8sIGltYWdlLCBhbmQgdmlkZW8gY2FwdHVyZSBjYXBhYmlsaXRpZXMuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW01lZGlhIENhcHR1cmUgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZSkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhQ2FwdHVyZSwgTWVkaWFGaWxlLCBDYXB0dXJlRXJyb3IsIENhcHR1cmVJbWFnZU9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbWVkaWEtY2FwdHVyZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhQ2FwdHVyZTogTWVkaWFDYXB0dXJlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogbGV0IG9wdGlvbnM6IENhcHR1cmVJbWFnZU9wdGlvbnMgPSB7IGxpbWl0OiAzIH1cbiAqIHRoaXMubWVkaWFDYXB0dXJlLmNhcHR1cmVJbWFnZShvcHRpb25zKVxuICogICAudGhlbihcbiAqICAgICAoZGF0YTogTWVkaWFGaWxlW10pID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgIChlcnI6IENhcHR1cmVFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpXG4gKiAgICk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTWVkaWFGaWxlXG4gKiBNZWRpYUZpbGVEYXRhXG4gKiBDYXB0dXJlRXJyb3JcbiAqIENhcHR1cmVBdWRpb09wdGlvbnNcbiAqIENhcHR1cmVJbWFnZU9wdGlvbnNcbiAqIENhcHR1cmVWaWRlb09wdGlvbnNcbiAqIENvbmZpZ3VyYXRpb25EYXRhXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWVkaWFDYXB0dXJlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5kZXZpY2UuY2FwdHVyZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhQ2FwdHVyZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSByZWNvcmRpbmcgaW1hZ2Ugc2l6ZXMgYW5kIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHN1cHBvcnRlZEltYWdlTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XG5cbiAgLyoqXG4gICAqIFRoZSBhdWRpbyByZWNvcmRpbmcgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkQXVkaW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogVGhlIHJlY29yZGluZyB2aWRlbyByZXNvbHV0aW9ucyBhbmQgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkVmlkZW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGF1ZGlvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgYXVkaW8gY2xpcCBmaWxlcy5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZUF1ZGlvKG9wdGlvbnM/OiBDYXB0dXJlQXVkaW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgY2FtZXJhIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgaW1hZ2UgZmlsZXMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNhcHR1cmVJbWFnZShvcHRpb25zPzogQ2FwdHVyZUltYWdlT3B0aW9ucyk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHZpZGVvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgdmlkZW8gY2xpcCBmaWxlcy5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZVZpZGVvKG9wdGlvbnM/OiBDYXB0dXJlVmlkZW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpcyBmaXJlZCBpZiB0aGUgY2FwdHVyZSBjYWxsIGlzIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3BlbmRpbmdjYXB0dXJlcmVzdWx0JyxcbiAgfSlcbiAgb25QZW5kaW5nQ2FwdHVyZVJlc3VsdCgpOiBPYnNlcnZhYmxlPE1lZGlhRmlsZVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGlzIGZpcmVkIGlmIHRoZSBjYXB0dXJlIGNhbGwgaXMgdW5zdWNjZXNzZnVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAncGVuZGluZ2NhcHR1cmVlcnJvcicsXG4gIH0pXG4gIG9uUGVuZGluZ0NhcHR1cmVFcnJvcigpOiBPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19