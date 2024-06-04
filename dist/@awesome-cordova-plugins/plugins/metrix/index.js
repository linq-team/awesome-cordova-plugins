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
var MetrixConfig = /** @class */ (function () {
    function MetrixConfig(appId) {
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.defaultTrackerToken = null;
        this.shouldLaunchDeeplink = false;
        this.firebaseAppId = null;
        this.firebaseProjectId = null;
        this.firebaseApiKey = null;
        this.isLocationListeningEnable = false;
        this.eventUploadThreshold = null;
        this.eventUploadMaxBatchSize = null;
        this.eventMaxCount = null;
        this.eventUploadPeriodMillis = null;
        this.sessionTimeoutMillis = null;
        this.store = null;
        this.userIdListener = null;
        this.sessionIdListener = null;
        this.attributionChangeListener = null;
        this.deeplinkResponseListener = null;
        this.appId = appId;
    }
    MetrixConfig.prototype.setDefaultTracker = function (defaultTrackerToken) {
        this.defaultTrackerToken = defaultTrackerToken;
    };
    MetrixConfig.prototype.setFirebaseId = function (firebaseAppId, firebaseProjectId, firebaseApiKey) {
        this.firebaseAppId = firebaseAppId;
        this.firebaseProjectId = firebaseProjectId;
        this.firebaseApiKey = firebaseApiKey;
    };
    MetrixConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    MetrixConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    MetrixConfig.prototype.setOnAttributionChangeListener = function (attributionChangeListener) {
        this.attributionChangeListener = attributionChangeListener;
    };
    MetrixConfig.prototype.setOnDeeplinkResponseListener = function (deeplinkResponseListener) {
        this.deeplinkResponseListener = deeplinkResponseListener;
    };
    MetrixConfig.prototype.setOnReceiveUserIdListener = function (userIdListener) {
        this.userIdListener = userIdListener;
    };
    MetrixConfig.prototype.setOnSessionIdListener = function (sessionIdListener) {
        this.sessionIdListener = sessionIdListener;
    };
    MetrixConfig.prototype.setLocationListening = function (isLocationListeningEnable) {
        this.isLocationListeningEnable = isLocationListeningEnable;
    };
    MetrixConfig.prototype.setEventUploadThreshold = function (threshold) {
        this.eventUploadThreshold = threshold;
    };
    MetrixConfig.prototype.setEventUploadMaxBatchSize = function (size) {
        this.eventUploadMaxBatchSize = size;
    };
    MetrixConfig.prototype.setEventMaxCount = function (count) {
        this.eventMaxCount = count;
    };
    MetrixConfig.prototype.setEventUploadPeriodMillis = function (period) {
        this.eventUploadPeriodMillis = period;
    };
    MetrixConfig.prototype.setSessionTimeoutMillis = function (timeout) {
        this.sessionTimeoutMillis = timeout;
    };
    MetrixConfig.prototype.setStore = function (store) {
        this.store = store;
    };
    MetrixConfig.prototype.getAttributionChangeListener = function () {
        return this.attributionChangeListener;
    };
    MetrixConfig.prototype.getDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener;
    };
    MetrixConfig.prototype.getOnReceiveUserIdListener = function () {
        return this.userIdListener;
    };
    MetrixConfig.prototype.getOnSessionIdListener = function () {
        return this.sessionIdListener;
    };
    MetrixConfig.prototype.hasAttributionChangeListener = function () {
        return this.attributionChangeListener !== null;
    };
    MetrixConfig.prototype.hasDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener !== null;
    };
    MetrixConfig.prototype.hasUserIdListener = function () {
        return this.userIdListener !== null;
    };
    MetrixConfig.prototype.hasSessionIdListener = function () {
        return this.sessionIdListener !== null;
    };
    return MetrixConfig;
}());
export { MetrixConfig };
export var MetrixAttributionStatus;
(function (MetrixAttributionStatus) {
    MetrixAttributionStatus["Attributed"] = "ATTRIBUTED";
    MetrixAttributionStatus["NotAttributedYet"] = "NOT_ATTRIBUTED_YET";
    MetrixAttributionStatus["AttributionNotNeeded"] = "ATTRIBUTION_NOT_NEEDED";
    MetrixAttributionStatus["Unknown"] = "UNKNOWN";
})(MetrixAttributionStatus || (MetrixAttributionStatus = {}));
var MetrixOriginal = /** @class */ (function (_super) {
    __extends(MetrixOriginal, _super);
    function MetrixOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetrixOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    MetrixOriginal.prototype.getSessionNum = function () { return cordova(this, "getSessionNum", {}, arguments); };
    MetrixOriginal.prototype.newEvent = function (slug, attributes) { return cordova(this, "newEvent", { "sync": true }, arguments); };
    MetrixOriginal.prototype.addUserAttributes = function (attributes) { return cordova(this, "addUserAttributes", { "sync": true }, arguments); };
    MetrixOriginal.prototype.newRevenue = function (slug, amount, currency, orderId) { return cordova(this, "newRevenue", { "sync": true }, arguments); };
    MetrixOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    MetrixOriginal.pluginName = "Metrix";
    MetrixOriginal.plugin = "ir.metrix.sdk";
    MetrixOriginal.pluginRef = "Metrix";
    MetrixOriginal.repo = "https://github.com/metrixorg/MetrixSDK-CordovaPlugin";
    MetrixOriginal.platforms = ["Android"];
    return MetrixOriginal;
}(AwesomeCordovaNativePlugin));
var Metrix = new MetrixOriginal();
export { Metrix };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWV0cml4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBMkIxRixzQkFBWSxLQUFhO1FBdkJqQixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsd0JBQW1CLEdBQVcsSUFBSSxDQUFDO1FBQ25DLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixzQkFBaUIsR0FBVyxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBVyxJQUFJLENBQUM7UUFDOUIsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLHlCQUFvQixHQUFXLElBQUksQ0FBQztRQUNwQyw0QkFBdUIsR0FBVyxJQUFJLENBQUM7UUFDdkMsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsNEJBQXVCLEdBQVcsSUFBSSxDQUFDO1FBQ3ZDLHlCQUFvQixHQUFXLElBQUksQ0FBQztRQUNwQyxVQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXJCLG1CQUFjLEdBQTZCLElBQUksQ0FBQztRQUNoRCxzQkFBaUIsR0FBZ0MsSUFBSSxDQUFDO1FBQ3RELDhCQUF5QixHQUE2QyxJQUFJLENBQUM7UUFDM0UsNkJBQXdCLEdBQTBCLElBQUksQ0FBQztRQUc3RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLFVBQWtCLG1CQUEyQjtRQUMzQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcs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QUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVPLDJDQUFvQixHQUE1QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksQ0FBQztJQUN6QyxDQUFDO3VCQWhJSDs7O0FBMklBLE1BQU0sQ0FBTixJQUFZLHVCQUtYO0FBTEQsV0FBWSx1QkFBdUI7SUFDakMsb0RBQXlCLENBQUE7SUFDekIsa0VBQXVDLENBQUE7SUFDdkMsMEVBQStDLENBQUE7SUFDL0MsOENBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUxXLHVCQUF1QixLQUF2Qix1QkFBdUIsUUFLbEM7O0lBb0MyQiwwQkFBMEI7Ozs7SUFPcEQsdUJBQU0sYUFBQyxNQUFvQjtJQVEzQiw4QkFBYTtJQVdiLHlCQUFRLGFBQUMsSUFBWSxFQUFFLFVBQXlDO0lBUWhFLGtDQUFpQixhQUFDLFVBQXdDO0lBVzFELDJCQUFVLGFBQUMsSUFBWSxFQUFFLE1BQWMsRUFBRSxRQUFpQixFQUFFLE9BQWdCO0lBUTVFLCtCQUFjLGFBQUMsR0FBVzs7Ozs7O2lCQXpPNUI7RUFvTDRCLDBCQUEwQjtTQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ldHJpeENvbmZpZyB7XG4gIHByaXZhdGUgYXBwSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWNyZXRJZDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMTogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMjogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMzogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvNDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0VHJhY2tlclRva2VuOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHNob3VsZExhdW5jaERlZXBsaW5rID0gZmFsc2U7XG4gIHByaXZhdGUgZmlyZWJhc2VBcHBJZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBmaXJlYmFzZVByb2plY3RJZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBmaXJlYmFzZUFwaUtleTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBpc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgZXZlbnRVcGxvYWRUaHJlc2hvbGQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRVcGxvYWRNYXhCYXRjaFNpemU6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRNYXhDb3VudDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBldmVudFVwbG9hZFBlcmlvZE1pbGxpczogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBzZXNzaW9uVGltZW91dE1pbGxpczogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBzdG9yZTogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIHVzZXJJZExpc3RlbmVyOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25JZExpc3RlbmVyOiAoc2Vzc2lvbklkOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXI6IChhdHRyaWJ1dGlvbjogTWV0cml4QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcjogKHVyaTogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhcHBJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hcHBJZCA9IGFwcElkO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRyYWNrZXIoZGVmYXVsdFRyYWNrZXJUb2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0VHJhY2tlclRva2VuID0gZGVmYXVsdFRyYWNrZXJUb2tlbjtcbiAgfVxuXG4gIHNldEZpcmViYXNlSWQoZmlyZWJhc2VBcHBJZDogc3RyaW5nLCBmaXJlYmFzZVByb2plY3RJZDogc3RyaW5nLCBmaXJlYmFzZUFwaUtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5maXJlYmFzZUFwcElkID0gZmlyZWJhc2VBcHBJZDtcbiAgICB0aGlzLmZpcmViYXNlUHJvamVjdElkID0gZmlyZWJhc2VQcm9qZWN0SWQ7XG4gICAgdGhpcy5maXJlYmFzZUFwaUtleSA9IGZpcmViYXNlQXBpS2V5O1xuICB9XG5cbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlY3JldElkID0gc2VjcmV0SWQ7XG4gICAgdGhpcy5pbmZvMSA9IGluZm8xO1xuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcbiAgICB0aGlzLmluZm8zID0gaW5mbzM7XG4gICAgdGhpcy5pbmZvNCA9IGluZm80O1xuICB9XG5cbiAgc2V0U2hvdWxkTGF1bmNoRGVlcGxpbmsoc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XG4gIH1cblxuICBzZXRPbkF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIoYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcjogKGF0dHJpYnV0aW9uOiBNZXRyaXhBdHRyaWJ1dGlvbikgPT4gdm9pZCkge1xuICAgIHRoaXMuYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lciA9IGF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXI7XG4gIH1cblxuICBzZXRPbkRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcihkZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXI6ICh1cmk6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMuZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyID0gZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyO1xuICB9XG5cbiAgc2V0T25SZWNlaXZlVXNlcklkTGlzdGVuZXIodXNlcklkTGlzdGVuZXI6ICh1c2VySWQ6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMudXNlcklkTGlzdGVuZXIgPSB1c2VySWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHNldE9uU2Vzc2lvbklkTGlzdGVuZXIoc2Vzc2lvbklkTGlzdGVuZXI6IChzZXNzaW9uSWQ6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMuc2Vzc2lvbklkTGlzdGVuZXIgPSBzZXNzaW9uSWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHNldExvY2F0aW9uTGlzdGVuaW5nKGlzTG9jYXRpb25MaXN0ZW5pbmdFbmFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzTG9jYXRpb25MaXN0ZW5pbmdFbmFibGUgPSBpc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlO1xuICB9XG5cbiAgc2V0RXZlbnRVcGxvYWRUaHJlc2hvbGQodGhyZXNob2xkOiBudW1iZXIpIHtcbiAgICB0aGlzLmV2ZW50VXBsb2FkVGhyZXNob2xkID0gdGhyZXNob2xkO1xuICB9XG5cbiAgc2V0RXZlbnRVcGxvYWRNYXhCYXRjaFNpemUoc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5ldmVudFVwbG9hZE1heEJhdGNoU2l6ZSA9IHNpemU7XG4gIH1cblxuICBzZXRFdmVudE1heENvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmV2ZW50TWF4Q291bnQgPSBjb3VudDtcbiAgfVxuXG4gIHNldEV2ZW50VXBsb2FkUGVyaW9kTWlsbGlzKHBlcmlvZDogbnVtYmVyKSB7XG4gICAgdGhpcy5ldmVudFVwbG9hZFBlcmlvZE1pbGxpcyA9IHBlcmlvZDtcbiAgfVxuXG4gIHNldFNlc3Npb25UaW1lb3V0TWlsbGlzKHRpbWVvdXQ6IG51bWJlcikge1xuICAgIHRoaXMuc2Vzc2lvblRpbWVvdXRNaWxsaXMgPSB0aW1lb3V0O1xuICB9XG5cbiAgc2V0U3RvcmUoc3RvcmU6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPblJlY2VpdmVVc2VySWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T25TZXNzaW9uSWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uSWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNEZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNVc2VySWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRMaXN0ZW5lciAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2Vzc2lvbklkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbklkTGlzdGVuZXIgIT09IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRyaXhBdHRyaWJ1dGlvbiB7XG4gIGFjcXVpc2l0aW9uQWQ6IHN0cmluZztcbiAgYWNxdWlzaXRpb25BZFNldDogc3RyaW5nO1xuICBhY3F1aXNpdGlvbkNhbXBhaWduOiBzdHJpbmc7XG4gIGFjcXVpc2l0aW9uU291cmNlOiBzdHJpbmc7XG4gIGF0dHJpYnV0aW9uU3RhdHVzOiBNZXRyaXhBdHRyaWJ1dGlvblN0YXR1cztcbn1cblxuZXhwb3J0IGVudW0gTWV0cml4QXR0cmlidXRpb25TdGF0dXMge1xuICBBdHRyaWJ1dGVkID0gJ0FUVFJJQlVURUQnLFxuICBOb3RBdHRyaWJ1dGVkWWV0ID0gJ05PVF9BVFRSSUJVVEVEX1lFVCcsXG4gIEF0dHJpYnV0aW9uTm90TmVlZGVkID0gJ0FUVFJJQlVUSU9OX05PVF9ORUVERUQnLFxuICBVbmtub3duID0gJ1VOS05PV04nLFxufVxuXG4vKipcbiAqIEBuYW1lIE1ldHJpeFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIHRoZSBJb25pYyBDb3Jkb3ZhIFNESyBvZiBNZXRyaXjihKIuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IE1ldHJpeOKEoiBhdCBtZXRyaXguaXIuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBpci5tZXRyaXguc2RrYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW01ldHJpeCBDb3Jkb3ZhIFNES10oaHR0cHM6Ly9naXRodWIuY29tL21ldHJpeG9yZy9NZXRyaXhTREstQ29yZG92YVBsdWdpbilcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogIGltcG9ydCB7IE1ldHJpeCwgTWV0cml4Q29uZmlnIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21ldHJpeCc7XG4gKlxuICogIGNvbnN0cnVjdG9yKHByaXZhdGUgbWV0cml4OiBNZXRyaXgpIHsgfVxuICpcbiAqICAuLi5cbiAqXG4gKiAgY29uc3QgY29uZmlnID0gbmV3IE1ldHJpeENvbmZpZygnQVBQLUlELUhFUkUnKTtcbiAqICAvLyBTZXQgb3RoZXIgY29uZmlnIHByb3BlcnRpZXMuXG4gKiAgbWV0cml4LmNyZWF0ZShjb25maWcpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIE1ldHJpeEF0dHJpYnV0aW9uXG4gKiBAY2xhc3Nlc1xuICogTWV0cml4Q29uZmlnXG4gKiBAZW51bXNcbiAqIE1ldHJpeEF0dHJpYnV0aW9uU3RhdHVzXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWV0cml4JyxcbiAgcGx1Z2luOiAnaXIubWV0cml4LnNkaycsXG4gIHBsdWdpblJlZjogJ01ldHJpeCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWV0cml4b3JnL01ldHJpeFNESy1Db3Jkb3ZhUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWV0cml4IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBtZXRob2QgaW5pdGlhbGl6ZXMgTWV0cml4IFNES1xuICAgKlxuICAgKiBAcGFyYW0ge01ldHJpeENvbmZpZ30gY29uZmlnIE1ldHJpeENvbmZpZyBvYmplY3QgdXNlZCBhcyBzdGFydGluZyBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY3JlYXRlKGNvbmZpZzogTWV0cml4Q29uZmlnKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB1c2VkIHRvIGdldCBTZXNzaW9uIE51bWJlclxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHNlc3Npb24gbnVtYmVyIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNlc3Npb25OdW0oKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFuIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzbHVnIHRoZSBzbHVnIG9mIHRoZSBldmVudCB0byBiZSB0cmFja2VkXG4gICAqIEBwYXJhbSB7TWFwPHN0cmluZywgc3RyaW5nPiB8IG9iamVjdH0gYXR0cmlidXRlcyBvcHRpb25hbCBhdHRyaWJ1dGVzIG9mIHRoZSBldmVudCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbmV3RXZlbnQoc2x1Zzogc3RyaW5nLCBhdHRyaWJ1dGVzPzogTWFwPHN0cmluZywgc3RyaW5nPiB8IG9iamVjdCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWRkcyB0aGUgcHJvdmlkZWQgYXR0cmlidXRlcyB0byBhbGwgbWV0cml4IGV2ZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge01hcDxzdHJpbmcsIHN0cmluZz4gfCBvYmplY3R9IGF0dHJpYnV0ZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYWRkZWQgdG8gYWxsIGZ1dHVyZSBldmVudHNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRVc2VyQXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBNYXA8c3RyaW5nLCBzdHJpbmc+IHwgb2JqZWN0KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYSByZXZlbnVlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzbHVnIHRoZSBzbHVnIG9mIHRoZSBldmVudCB0byBiZSB0cmFja2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnQgdGhlIGFtb3VudCBvZiBtb25leSBnYWluZWQgYnkgdGhlIHJldmVudWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbmN5IChPUFRJT05BTCkgY3VycmVuY3kgb2YgdGhlIGFtb3VudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJJZCAoT1BUSU9OQUwpIGlkIG9mIHRoZSByZXZlbnVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbmV3UmV2ZW51ZShzbHVnOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyLCBjdXJyZW5jeT86IG51bWJlciwgb3JkZXJJZD86IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQnkgbWFraW5nIHRoaXMgY2FsbCwgdGhlIE1ldHJpeCBTREsgd2lsbCB0cnkgdG8gZmluZCBpZiB0aGVyZSBpcyBhbnkgbmV3IGF0dHJpYnV0aW9uIGluZm8gaW5zaWRlIG9mIHRoZSBkZWVwIGxpbmsgYW5kIGlmIGFueSwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBNZXRyaXggYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgb2YgdGhlIGRlZXBsaW5rXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYXBwV2lsbE9wZW5VcmwodXJsOiBzdHJpbmcpOiB2b2lkIHt9XG59XG4iXX0=