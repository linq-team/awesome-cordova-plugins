import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var AndroidExoplayer = /** @class */ (function (_super) {
    __extends(AndroidExoplayer, _super);
    function AndroidExoplayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidExoplayer.prototype.show = function (parameters) { return cordova(this, "show", { "observable": true, "clearFunction": "close", "clearWithArgs": false, "successIndex": 1, "errorIndex": 2 }, arguments); };
    AndroidExoplayer.prototype.setStream = function (url, controller) { return cordova(this, "setStream", {}, arguments); };
    AndroidExoplayer.prototype.playPause = function () { return cordova(this, "playPause", {}, arguments); };
    AndroidExoplayer.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    AndroidExoplayer.prototype.seekTo = function (milliseconds) { return cordova(this, "seekTo", {}, arguments); };
    AndroidExoplayer.prototype.seekBy = function (milliseconds) { return cordova(this, "seekBy", {}, arguments); };
    AndroidExoplayer.prototype.getState = function () { return cordova(this, "getState", {}, arguments); };
    AndroidExoplayer.prototype.showController = function () { return cordova(this, "showController", {}, arguments); };
    AndroidExoplayer.prototype.hideController = function () { return cordova(this, "hideController", {}, arguments); };
    AndroidExoplayer.prototype.setController = function (controller) { return cordova(this, "setController", {}, arguments); };
    AndroidExoplayer.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    AndroidExoplayer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AndroidExoplayer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AndroidExoplayer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AndroidExoplayer });
    AndroidExoplayer.pluginName = "AndroidExoPlayer";
    AndroidExoplayer.plugin = "cordova-plugin-exoplayer";
    AndroidExoplayer.pluginRef = "ExoPlayer";
    AndroidExoplayer.repo = "https://github.com/frontyard/cordova-plugin-exoplayer";
    AndroidExoplayer.platforms = ["Android"];
    AndroidExoplayer = __decorate([], AndroidExoplayer);
    return AndroidExoplayer;
}(AwesomeCordovaNativePlugin));
export { AndroidExoplayer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AndroidExoplayer, decorators: [{
            type: Injectable
        }], propDecorators: { show: [], setStream: [], playPause: [], stop: [], seekTo: [], seekBy: [], getState: [], showController: [], hideController: [], setController: [], close: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1leG9wbGF5ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBbUxJLG9DQUEwQjs7OztJQWM5RCwrQkFBSSxhQUFDLFVBQWtDO0lBWXZDLG9DQUFTLGFBQUMsR0FBVyxFQUFFLFVBQTRDO0lBVW5FLG9DQUFTO0lBVVQsK0JBQUk7SUFXSixpQ0FBTSxhQUFDLFlBQW9CO0lBVzNCLGlDQUFNLGFBQUMsWUFBb0I7SUFVM0IsbUNBQVE7SUFVUix5Q0FBYztJQVVkLHlDQUFjO0lBV2Qsd0NBQWEsYUFBQyxVQUE0QztJQVUxRCxnQ0FBSztrSEF2SE0sZ0JBQWdCO3NIQUFoQixnQkFBZ0I7Ozs7OztJQUFoQixnQkFBZ0Isa0JBQWhCLGdCQUFnQjsyQkFyTDdCO0VBcUxzQywwQkFBMEI7U0FBbkQsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVU7OEJBZVQsSUFBSSxNQVlKLFNBQVMsTUFVVCxTQUFTLE1BVVQsSUFBSSxNQVdKLE1BQU0sTUFXTixNQUFNLE1BVU4sUUFBUSxNQVVSLGNBQWMsTUFVZCxjQUFjLE1BV2QsYUFBYSxNQVViLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBBbmRyb2lkRXhvUGxheWVyQXNwZWN0UmF0aW8gPSAnRklMTF9TQ1JFRU4nIHwgJ0ZJVF9TQ1JFRU4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRFeG9QbGF5ZXJQYXJhbXMge1xuICAvKipcbiAgICogVXJsIG9mIHRoZSB2aWRlbyB0byBwbGF5LlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdXNlciBhZ2VudC4gRGVmYXVsdCBpcyBgRXhvUGxheWVyUGx1Z2luYFxuICAgKi9cbiAgdXNlckFnZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHBsYXllciBhc3BlY3QgcmF0aW8uXG4gICAqL1xuICBhc3BlY3RSYXRpbz86IEFuZHJvaWRFeG9QbGF5ZXJBc3BlY3RSYXRpbztcblxuICAvKipcbiAgICogSGlkZSBjb250cm9scyBhZnRlciB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzLCBkZWZhdWx0IGlzIGA1MDAwYC5cbiAgICovXG4gIGhpZGVUaW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIHNldCB0byBmYWxzZSBzdHJlYW0gd2lsbCBub3QgYXV0b21hdGljYWxseSBzdGFydC5cbiAgICovXG4gIGF1dG9QbGF5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3RhcnQgcGxheWJhY2sgYXQgdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBpbnRvIHZpZGVvLCBkZWZhdWx0IGlzIGAwYC5cbiAgICovXG4gIHNlZWtUbz86IG51bWJlcjtcblxuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHVzZSB3aGVuIHNraXBwaW5nIGZvcndhcmQsIGRlZmF1bHQgaXMgYDEwMDBgLlxuICAgKi9cbiAgZm9yd2FyZFRpbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byB1c2Ugd2hlbiBza2lwcGluZyBiYWNrd2FyZCwgZGVmYXVsdCBpcyBgMTAwMGAuXG4gICAqL1xuICByZXdpbmRUaW1lPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBPbmx5IHBsYXkgYXVkaW8gaW4gdGhlIGJhY2tncm91ZCwgZGVmYXVsdCBpcyBgZmFsc2VgLlxuICAgKiBJZiB5b3UgcGFzcyBpbiBgYXVkaW9Pbmx5OiB0cnVlYCwgbWFrZSBzdXJlIHRvIG1hbnVhbGx5IGNsb3NlIHRoZSBwbGF5ZXIgb24gc29tZSBldmVudCAobGlrZSBlc2NhcGUgYnV0dG9uKSBzaW5jZSB0aGUgcGx1Z2luIHdvbid0IGJlIGRldGVjdGluZyBrZXlwcmVzc2VzIHdoZW4gcGxheWluZyBhdWRpbyBpbiB0aGUgYmFja2dyb3VuZC5cbiAgICovXG4gIGF1ZGlvT25seT86IHRydWU7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHN1YnRpdGxlIHVybCB0byBkaXNwbGF5IG92ZXIgdGhlIHZpZGVvLlxuICAgKiBXZSBjdXJyZW50bHkgc3VwcG9ydCAuc3J0IGFuZCAudnR0IHN1YnRpdGxlIGZvcm1hdHMuIFN1YnRpdGxlcyBhcmUgbm90IHN1cHBvcnRlZCBvbiBhbGwgc3RyZWFtIHR5cGVzLCBhcyBFeG9QbGF5ZXIgaGFzIHJlcXVpcmVtZW50IHRoYXQgYm90aCB2aWRlbyBhbmQgc3VidGl0bGUgXCJtdXN0IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHBlcmlvZHMsIGFuZCBtdXN0IG5vdCBoYXZlIGFueSBkeW5hbWljIHdpbmRvd3NcIiwgd2hpY2ggbWVhbnMgZm9yIHNpbXBsZSBtcDRzIGl0IHNob3VsZCB3b3JrLCBidXQgb24gbW9yZSBjb21wbGV4IEhMUy9EYXNoIHNldHVwcyBpdCBtaWdodCBub3QuXG4gICAqL1xuICBzdWJ0aXRsZVVybD86IHN0cmluZztcblxuICAvKipcbiAgICogb2todHRwIGNvbm5lY3QgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgKGRlZmF1bHQgaXMgYDBgKVxuICAgKi9cbiAgY29ubmVjdFRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIG9raHR0cCByZWFkIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIChkZWZhdWx0IGlzIGAwYClcbiAgICovXG4gIHJlYWRUaW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBva2h0dHAgd3JpdGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgKGRlZmF1bHQgaXMgYDBgKVxuICAgKi9cbiAgd3JpdGVUaW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBva2h0dHAgc29ja2V0IHBpbmcgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzIChkZWZhdWx0IGlzIGAwYCBvciBkaXNhYmxlZClcbiAgICovXG4gIHBpbmdJbnRlcnZhbD86IG51bWJlcjtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHRpbWVzIGRhdGFzb3VyY2Ugd2lsbCByZXRyeSB0aGUgc3RyZWFtIGJlZm9yZSBnaXZpbmcgdXAgKGRlZmF1bHQgaXMgYDNgKVxuICAgKi9cbiAgcmV0cnlDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogSWYgdGhpcyBvYmplY3QgaXMgbm90IHByZXNlbnQgY29udHJvbGxlciB3aWxsIG5vdCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgY29udHJvbGxlcj86IEFuZHJvaWRFeG9QbGF5ZXJDb250cm9sbGVyQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRFeG9wbGF5ZXJTdGF0ZSB7XG4gIFtzOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZEV4b1BsYXllckNvbnRyb2xsZXJDb25maWcge1xuICAvKipcbiAgICogSW1hZ2UgaW4gdGhlIGNvbnRyb2xsZXIuXG4gICAqL1xuICBzdHJlYW1JbWFnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgc3RyZWFtVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIHN0cmVhbURlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZGUgZW50aXJlIHByb2dyZXNzIGJhci5cbiAgICovXG4gIGhpZGVQcm9ncmVzcz86IHRydWU7XG5cbiAgLyoqXG4gICAqIElmIHByb2dyZXNzIGJhciBpcyB2aXNpYmxlIGhpZGUgY3VycmVudCBwb3NpdGlvbiBmcm9tIGl0XG4gICAqL1xuICBoaWRlUG9zaXRpb246IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJZiBwcm9ncmVzcyBiYXIgaXMgdmlzaWJsZSBIaWRlIHN0cmVhbSBkdXJhdGlvbiBmcm9tIGl0XG4gICAqL1xuICBoaWRlRHVyYXRpb246IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgcGxheWVyIGNvbnRyb2wgYnV0dG9uIGljb25zLlxuICAgKi9cbiAgY29udHJvbEljb25zPzoge1xuICAgIC8qKlxuICAgICAqIFJld2luZCBidXR0b24gaWNvbi5cbiAgICAgKi9cbiAgICBleG9fcmV3OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IGJ1dHRvbiBpY29uLlxuICAgICAqL1xuICAgIGV4b19wbGF5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSBidXR0b24gaWNvbi5cbiAgICAgKi9cbiAgICBleG9fcGF1c2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEZhc3QgZm9yd2FyZCBidXR0b24gaWNvbi5cbiAgICAgKi9cbiAgICBleG9fZmZ3ZDogc3RyaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEFuZHJvaWQgRXhvUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgbWVkaWEgcGxheWVyIHBsdWdpbiB1c2luZyBHb29nbGUncyBFeG9QbGF5ZXIgZnJhbWV3b3JrLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvRXhvUGxheWVyXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFuZHJvaWRFeG9QbGF5ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW5kcm9pZC1leG9wbGF5ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRFeG9QbGF5ZXI6IEFuZHJvaWRFeG9QbGF5ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYW5kcm9pZEV4b1BsYXllci5zaG93KHt1cmw6ICdodHRwOi8vd3d3LnlvdXR1YmUuY29tL2FwaS9tYW5pZmVzdC9kYXNoL2lkL2JmNWJiMjQxOTM2MGRhZjEvc291cmNlL3lvdXR1YmUnfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQW5kcm9pZEV4b1BsYXllclBhcmFtc1xuICogQW5kcm9pZEV4b3BsYXllclN0YXRlXG4gKiBBbmRyb2lkRXhvUGxheWVyQ29udHJvbGxlckNvbmZpZ1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FuZHJvaWRFeG9QbGF5ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1leG9wbGF5ZXInLFxuICBwbHVnaW5SZWY6ICdFeG9QbGF5ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zyb250eWFyZC9jb3Jkb3ZhLXBsdWdpbi1leG9wbGF5ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmRyb2lkRXhvcGxheWVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvdyB0aGUgcGxheWVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0FuZHJvaWRFeG9QbGF5ZXJQYXJhbXN9IHBhcmFtZXRlcnMgUGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBbmRyb2lkRXhvcGxheWVyU3RhdGU+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2Nsb3NlJyxcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZSxcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2hvdyhwYXJhbWV0ZXJzOiBBbmRyb2lkRXhvUGxheWVyUGFyYW1zKTogT2JzZXJ2YWJsZTxBbmRyb2lkRXhvcGxheWVyU3RhdGU+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHN0cmVhbSB3aXRob3V0IGRpc3Bvc2luZyBvZiB0aGUgcGxheWVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgb2YgdGhlIG5ldyBzdHJlYW0uXG4gICAqIEBwYXJhbSB7QW5kcm9pZEV4b1BsYXllckNvbnRyb2xsZXJDb25maWd9IGNvbnRyb2xsZXIgQ29uZmlndXJhdGlvbiBvZiB0aGUgY29udHJvbGxlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFN0cmVhbSh1cmw6IHN0cmluZywgY29udHJvbGxlcjogQW5kcm9pZEV4b1BsYXllckNvbnRyb2xsZXJDb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2lsbCBwYXVzZSBpZiBwbGF5aW5nIGFuZCBwbGF5IGlmIHBhdXNlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGxheVBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHBsYXlpbmcuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBKdW1wIHRvIGEgcGFydGljdWxhciBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyBQb3NpdGlvbiBpbiBzdHJlYW0gaW4gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWVrVG8obWlsbGlzZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSnVtcCB0byBhIHBhcnRpY3VsYXIgdGltZSByZWxhdGl2ZSB0byB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyBUaW1lIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2Vla0J5KG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBwbGF5ZXIgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRFeG9wbGF5ZXJTdGF0ZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN0YXRlKCk6IFByb21pc2U8QW5kcm9pZEV4b3BsYXllclN0YXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbnRyb2xsZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93Q29udHJvbGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgY29udHJvbGxlci5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhpZGVDb250cm9sbGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNvbnRyb2xsZXIgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtBbmRyb2lkRXhvUGxheWVyQ29udHJvbGxlckNvbmZpZ30gY29udHJvbGxlciBDb25maWd1cmF0aW9uIG9mIHRoZSBjb250cm9sbGVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q29udHJvbGxlcihjb250cm9sbGVyOiBBbmRyb2lkRXhvUGxheWVyQ29udHJvbGxlckNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbmQgZGlzcG9zZSBvZiBwbGF5ZXIsIGNhbGwgYmVmb3JlIGRlc3Ryb3kuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==