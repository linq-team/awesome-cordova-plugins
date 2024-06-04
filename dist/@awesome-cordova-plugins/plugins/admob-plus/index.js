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
import { fromEvent } from 'rxjs';
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
    return RewardVideo;
}());
export { RewardVideo };
var AdMobOriginal = /** @class */ (function (_super) {
    __extends(AdMobOriginal, _super);
    function AdMobOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMobOriginal.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.setDevMode = function (value) { return cordova(this, "setDevMode", { "sync": true }, arguments); };
    AdMobOriginal.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobOriginal.platforms = ["Android", "iOS"];
    AdMobOriginal.plugin = "cordova-admob-plus";
    AdMobOriginal.pluginName = "AdMob";
    AdMobOriginal.pluginRef = "admob";
    AdMobOriginal.repo = "https://github.com/admob-plus/admob-plus";
    return AdMobOriginal;
}(AwesomeCordovaNativePlugin));
var AdMob = new AdMobOriginal();
export { AdMob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRtb2ItcGx1cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7SUF1QjNDLHFCQUFJO0lBS0oscUJBQUksYUFBQyxJQUE2Qjs7Ozs7O2lCQTlCcEM7O1NBdUJhLE1BQU07Ozs7SUFtQmpCLDJCQUFJLGFBQUMsSUFBNkI7SUFLbEMsMkJBQUk7Ozs7dUJBL0NOOztTQXdDYSxZQUFZOzs7O0lBbUJ2QiwwQkFBSSxhQUFDLElBQTZCO0lBS2xDLDBCQUFJOzs7O3NCQWhFTjs7U0F5RGEsV0FBVzs7SUFvQkcseUJBQTBCOzs7UUFDbkQsWUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDdEIsa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGlCQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQzs7O0lBR2hDLDJCQUFXLGFBQUMsS0FBYztJQUsxQiw0QkFBWSxhQUFDLEtBQWE7SUFLMUIsMEJBQVUsYUFBQyxLQUFjO0lBSXpCLGtCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztnQkFuR0g7RUE2RTJCLDBCQUEwQjtTQUF4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBBZFVuaXRJRE9wdGlvbiA9XG4gIHwgc3RyaW5nXG4gIHwge1xuICAgICAgYW5kcm9pZDogc3RyaW5nO1xuICAgICAgaW9zOiBzdHJpbmc7XG4gICAgfTtcblxuLyoqXG4gKiBAbmFtZSBBZE1vYiBQbHVzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkTW9iIFBsdXMgaXMgdGhlIHN1Y2Nlc3NvciBvZiBjb3Jkb3ZhLXBsdWdpbi1hZG1vYi1mcmVlLCB3aGljaCBwcm92aWRlcyBhIGNsZWFuZXIgQVBJIGFuZCBidWlsZCB3aXRoIG1vZGVybiB0b29scy5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXG4gIHBsdWdpblJlZjogJ2FkbW9iLmJhbm5lcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWRtb2ItcGx1cy9hZG1vYi1wbHVzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lciB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaG93KG9wdHM6IHsgaWQ/OiBBZFVuaXRJRE9wdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXG4gIHBsdWdpblJlZjogJ2FkbW9iLmludGVyc3RpdGlhbCcsXG59KVxuZXhwb3J0IGNsYXNzIEludGVyc3RpdGlhbCB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGxvYWQob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXG4gIHBsdWdpblJlZjogJ2FkbW9iLnJld2FyZFZpZGVvJyxcbn0pXG5leHBvcnQgY2xhc3MgUmV3YXJkVmlkZW8ge1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBsb2FkKG9wdHM6IHsgaWQ/OiBBZFVuaXRJRE9wdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG5cbkBQbHVnaW4oe1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcbiAgcGx1Z2luUmVmOiAnYWRtb2InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkbW9iLXBsdXMvYWRtb2ItcGx1cycsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkTW9iIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBiYW5uZXIgPSBuZXcgQmFubmVyKCk7XG4gIGludGVyc3RpdGlhbCA9IG5ldyBJbnRlcnN0aXRpYWwoKTtcbiAgcmV3YXJkVmlkZW8gPSBuZXcgUmV3YXJkVmlkZW8oKTtcblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzZXRBcHBNdXRlZCh2YWx1ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2V0QXBwVm9sdW1lKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREZXZNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBmcm9tRXZlbnQoZG9jdW1lbnQsIGV2ZW50KTtcbiAgfVxufVxuIl19