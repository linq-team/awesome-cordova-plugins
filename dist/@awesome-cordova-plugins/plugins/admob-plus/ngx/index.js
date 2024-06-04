import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    Banner.prototype.show = function (opts) { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Banner.plugin = "cordova-admob-plus";
    Banner.pluginName = "AdMob";
    Banner.pluginRef = "admob.banner";
    Banner.repo = "https://github.com/admob-plus/admob-plus";
    Banner.platforms = ["Android", "iOS"];
    Banner = __decorate([], Banner);
    return Banner;
}());
export { Banner };
var Interstitial = /** @class */ (function () {
    function Interstitial() {
    }
    Interstitial.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    Interstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Interstitial.plugin = "cordova-admob-plus";
    Interstitial.pluginName = "AdMob";
    Interstitial.pluginRef = "admob.interstitial";
    Interstitial = __decorate([], Interstitial);
    return Interstitial;
}());
export { Interstitial };
var RewardVideo = /** @class */ (function () {
    function RewardVideo() {
    }
    RewardVideo.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    RewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    RewardVideo.plugin = "cordova-admob-plus";
    RewardVideo.pluginName = "AdMob";
    RewardVideo.pluginRef = "admob.rewardVideo";
    RewardVideo = __decorate([], RewardVideo);
    return RewardVideo;
}());
export { RewardVideo };
var AdMob = /** @class */ (function (_super) {
    __extends(AdMob, _super);
    function AdMob() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMob.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMob.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMob.prototype.setDevMode = function (value) { return cordova(this, "setDevMode", { "sync": true }, arguments); };
    AdMob.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMob.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AdMob, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AdMob.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AdMob });
    AdMob.platforms = ["Android", "iOS"];
    AdMob.plugin = "cordova-admob-plus";
    AdMob.pluginName = "AdMob";
    AdMob.pluginRef = "admob";
    AdMob.repo = "https://github.com/admob-plus/admob-plus";
    AdMob = __decorate([], AdMob);
    return AdMob;
}(AwesomeCordovaNativePlugin));
export { AdMob };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AdMob, decorators: [{
            type: Injectable
        }], propDecorators: { setAppMuted: [], setAppVolume: [], setDevMode: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRtb2ItcGx1cy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztJQXVCM0MscUJBQUk7SUFLSixxQkFBSSxhQUFDLElBQTZCOzs7Ozs7SUFQdkIsTUFBTSxrQkFBTixNQUFNO2lCQXZCbkI7O1NBdUJhLE1BQU07Ozs7SUFtQmpCLDJCQUFJLGFBQUMsSUFBNkI7SUFLbEMsMkJBQUk7Ozs7SUFQTyxZQUFZLGtCQUFaLFlBQVk7dUJBeEN6Qjs7U0F3Q2EsWUFBWTs7OztJQW1CdkIsMEJBQUksYUFBQyxJQUE2QjtJQUtsQywwQkFBSTs7OztJQVBPLFdBQVcsa0JBQVgsV0FBVztzQkF6RHhCOztTQXlEYSxXQUFXOztJQW9CRyx5QkFBMEI7OztRQUNuRCxZQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUN0QixrQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsaUJBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDOzs7SUFHaEMsMkJBQVcsYUFBQyxLQUFjO0lBSzFCLDRCQUFZLGFBQUMsS0FBYTtJQUsxQiwwQkFBVSxhQUFDLEtBQWM7SUFJekIsa0JBQUUsR0FBRixVQUFHLEtBQWE7UUFDZCxPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzt1R0F0QlUsS0FBSzsyR0FBTCxLQUFLOzs7Ozs7SUFBTCxLQUFLLGtCQUFMLEtBQUs7Z0JBN0VsQjtFQTZFMkIsMEJBQTBCO1NBQXhDLEtBQUs7NEZBQUwsS0FBSztrQkFEakIsVUFBVTs4QkFPVCxXQUFXLE1BS1gsWUFBWSxNQUtaLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIEFkVW5pdElET3B0aW9uID1cbiAgfCBzdHJpbmdcbiAgfCB7XG4gICAgICBhbmRyb2lkOiBzdHJpbmc7XG4gICAgICBpb3M6IHN0cmluZztcbiAgICB9O1xuXG4vKipcbiAqIEBuYW1lIEFkTW9iIFBsdXNcbiAqIEBkZXNjcmlwdGlvblxuICogQWRNb2IgUGx1cyBpcyB0aGUgc3VjY2Vzc29yIG9mIGNvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUsIHdoaWNoIHByb3ZpZGVzIGEgY2xlYW5lciBBUEkgYW5kIGJ1aWxkIHdpdGggbW9kZXJuIHRvb2xzLlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcbiAgcGx1Z2luUmVmOiAnYWRtb2IuYmFubmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZG1vYi1wbHVzL2FkbW9iLXBsdXMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyIHtcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3cob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcbiAgcGx1Z2luUmVmOiAnYWRtb2IuaW50ZXJzdGl0aWFsJyxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJzdGl0aWFsIHtcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgbG9hZChvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcbiAgcGx1Z2luUmVmOiAnYWRtb2IucmV3YXJkVmlkZW8nLFxufSlcbmV4cG9ydCBjbGFzcyBSZXdhcmRWaWRlbyB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGxvYWQob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuQFBsdWdpbih7XG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxuICBwbHVnaW5OYW1lOiAnQWRNb2InLFxuICBwbHVnaW5SZWY6ICdhZG1vYicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWRtb2ItcGx1cy9hZG1vYi1wbHVzJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRNb2IgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIGJhbm5lciA9IG5ldyBCYW5uZXIoKTtcbiAgaW50ZXJzdGl0aWFsID0gbmV3IEludGVyc3RpdGlhbCgpO1xuICByZXdhcmRWaWRlbyA9IG5ldyBSZXdhcmRWaWRlbygpO1xuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNldEFwcE11dGVkKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzZXRBcHBWb2x1bWUodmFsdWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERldk1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIGZyb21FdmVudChkb2N1bWVudCwgZXZlbnQpO1xuICB9XG59XG4iXX0=