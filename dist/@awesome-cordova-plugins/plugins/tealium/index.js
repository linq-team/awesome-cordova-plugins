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
export var Collectors;
(function (Collectors) {
    Collectors["AppData"] = "AppData";
    Collectors["Connectivity"] = "Connectivity";
    Collectors["DeviceData"] = "DeviceData";
    Collectors["Lifecycle"] = "Lifecycle";
})(Collectors || (Collectors = {}));
export var Dispatchers;
(function (Dispatchers) {
    Dispatchers["Collect"] = "Collect";
    Dispatchers["TagManagement"] = "TagManagement";
    Dispatchers["RemoteCommands"] = "RemoteCommands";
})(Dispatchers || (Dispatchers = {}));
export var Expiry;
(function (Expiry) {
    Expiry["forever"] = "forever";
    Expiry["untilRestart"] = "untilRestart";
    Expiry["session"] = "session";
})(Expiry || (Expiry = {}));
export var ConsentPolicy;
(function (ConsentPolicy) {
    ConsentPolicy["ccpa"] = "ccpa";
    ConsentPolicy["gdpr"] = "gdpr";
})(ConsentPolicy || (ConsentPolicy = {}));
var TealiumView = /** @class */ (function () {
    function TealiumView(viewName, dataLayer) {
        this.viewName = viewName;
        this.dataLayer = dataLayer;
        this.type = 'view';
    }
    TealiumView.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['viewName'] = this.viewName;
        return JSON.stringify(dictionary);
    };
    return TealiumView;
}());
export { TealiumView };
var TealiumEvent = /** @class */ (function () {
    function TealiumEvent(eventName, dataLayer) {
        this.eventName = eventName;
        this.dataLayer = dataLayer;
        this.type = 'event';
    }
    TealiumEvent.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['eventName'] = this.eventName;
        return JSON.stringify(dictionary);
    };
    return TealiumEvent;
}());
export { TealiumEvent };
var ConsentExpiry = /** @class */ (function () {
    function ConsentExpiry(time, unit) {
        this.time = time;
        this.unit = unit;
    }
    return ConsentExpiry;
}());
export { ConsentExpiry };
export var TimeUnit;
(function (TimeUnit) {
    TimeUnit["minutes"] = "minutes";
    TimeUnit["hours"] = "hours";
    TimeUnit["days"] = "days";
    TimeUnit["months"] = "months";
})(TimeUnit || (TimeUnit = {}));
export var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus["consented"] = "consented";
    ConsentStatus["notConsented"] = "notConsented";
    ConsentStatus["unknown"] = "unknown";
})(ConsentStatus || (ConsentStatus = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["dev"] = "dev";
    LogLevel["qa"] = "qa";
    LogLevel["prod"] = "prod";
    LogLevel["silent"] = "silent";
})(LogLevel || (LogLevel = {}));
export var TealiumEnvironment;
(function (TealiumEnvironment) {
    TealiumEnvironment["dev"] = "dev";
    TealiumEnvironment["qa"] = "qa";
    TealiumEnvironment["prod"] = "prod";
})(TealiumEnvironment || (TealiumEnvironment = {}));
export var ConsentCategories;
(function (ConsentCategories) {
    ConsentCategories["analytics"] = "analytics";
    ConsentCategories["affiliates"] = "affiliates";
    ConsentCategories["displayAds"] = "display_ads";
    ConsentCategories["email"] = "email";
    ConsentCategories["personalization"] = "personalization";
    ConsentCategories["search"] = "search";
    ConsentCategories["social"] = "social";
    ConsentCategories["bigData"] = "big_data";
    ConsentCategories["mobile"] = "mobile";
    ConsentCategories["engagement"] = "engagement";
    ConsentCategories["monitoring"] = "monitoring";
    ConsentCategories["crm"] = "crm";
    ConsentCategories["cdp"] = "cdp";
    ConsentCategories["cookieMatch"] = "cookiematch";
    ConsentCategories["misc"] = "misc";
})(ConsentCategories || (ConsentCategories = {}));
var TealiumOriginal = /** @class */ (function (_super) {
    __extends(TealiumOriginal, _super);
    function TealiumOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumOriginal.prototype.initialize = function (config, callback) { return cordova(this, "initialize", {}, arguments); };
    TealiumOriginal.prototype.track = function (dispatch) { return cordova(this, "track", {}, arguments); };
    TealiumOriginal.prototype.terminateInstance = function () { return cordova(this, "terminateInstance", {}, arguments); };
    TealiumOriginal.prototype.addData = function (data, expiry) { return cordova(this, "addData", {}, arguments); };
    TealiumOriginal.prototype.getData = function (key, callback) { return cordova(this, "getData", {}, arguments); };
    TealiumOriginal.prototype.removeData = function (keys) { return cordova(this, "removeData", {}, arguments); };
    TealiumOriginal.prototype.getConsentStatus = function (callback) { return cordova(this, "getConsentStatus", {}, arguments); };
    TealiumOriginal.prototype.setConsentStatus = function (consentStatus) { return cordova(this, "setConsentStatus", {}, arguments); };
    TealiumOriginal.prototype.getConsentCategories = function (callback) { return cordova(this, "getConsentCategories", {}, arguments); };
    TealiumOriginal.prototype.setConsentCategories = function (categories) { return cordova(this, "setConsentCategories", {}, arguments); };
    TealiumOriginal.prototype.joinTrace = function (id) { return cordova(this, "joinTrace", {}, arguments); };
    TealiumOriginal.prototype.leaveTrace = function () { return cordova(this, "leaveTrace", {}, arguments); };
    TealiumOriginal.prototype.getVisitorId = function (callback) { return cordova(this, "getVisitorId", {}, arguments); };
    TealiumOriginal.prototype.setVisitorServiceListener = function (callback) { return cordova(this, "setVisitorServiceListener", {}, arguments); };
    TealiumOriginal.prototype.setConsentExpiryListener = function (callback) { return cordova(this, "setConsentExpiryListener", {}, arguments); };
    TealiumOriginal.prototype.addRemoteCommand = function (id, callback) { return cordova(this, "addRemoteCommand", {}, arguments); };
    TealiumOriginal.prototype.removeRemoteCommand = function (id) { return cordova(this, "removeRemoteCommand", {}, arguments); };
    TealiumOriginal.prototype.removeListeners = function () { return cordova(this, "removeListeners", {}, arguments); };
    TealiumOriginal.pluginName = "Tealium";
    TealiumOriginal.plugin = "tealium-cordova-plugin";
    TealiumOriginal.pluginRef = "tealium";
    TealiumOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumOriginal.install = "";
    TealiumOriginal.installVariables = [];
    TealiumOriginal.platforms = ["Android", "iOS"];
    return TealiumOriginal;
}(AwesomeCordovaNativePlugin));
var Tealium = new TealiumOriginal();
export { Tealium };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQU9OLE1BQU0sK0JBQStCLENBQUM7QUFHdkMsTUFBTSxDQUFOLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQixpQ0FBbUIsQ0FBQTtJQUNuQiwyQ0FBNkIsQ0FBQTtJQUM3Qix1Q0FBeUIsQ0FBQTtJQUN6QixxQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBTFcsVUFBVSxLQUFWLFVBQVUsUUFLckI7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLGtDQUFtQixDQUFBO0lBQ25CLDhDQUErQixDQUFBO0lBQy9CLGdEQUFpQyxDQUFBO0FBQ25DLENBQUMsRUFKVyxXQUFXLEtBQVgsV0FBVyxRQUl0QjtBQUVELE1BQU0sQ0FBTixJQUFZLE1BSVg7QUFKRCxXQUFZLE1BQU07SUFDaEIsNkJBQW1CLENBQUE7SUFDbkIsdUNBQTZCLENBQUE7SUFDN0IsNkJBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLE1BQU0sS0FBTixNQUFNLFFBSWpCO0FBRUQsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2Qiw4QkFBYSxDQUFBO0lBQ2IsOEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4Qjs7SUFVQyxxQkFBbUIsUUFBZ0IsRUFBUyxTQUEyQjtRQUFwRCxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFEaEUsU0FBSSxHQUFHLE1BQU0sQ0FBQztJQUNxRCxDQUFDO0lBQzNFLDRCQUFNLEdBQU47UUFDRSxJQUFNLFVBQVUsR0FBUSxFQUFFLENBQUM7UUFDM0IsVUFBVSxDQUFD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OENBQXlCLENBQUE7SUFDekIsOENBQXlCLENBQUE7SUFDekIsZ0NBQVcsQ0FBQTtJQUNYLGdDQUFXLENBQUE7SUFDWCxnREFBMkIsQ0FBQTtJQUMzQixrQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQWhCVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBZ0I1Qjs7SUF1RTRCLDJCQUEwQjs7OztJQVFyRCw0QkFBVSxhQUFDLE1BQXFCLEVBQUUsUUFBbUI7SUFVckQsdUJBQUssYUFBQyxRQUF5QjtJQVMvQixtQ0FBaUI7SUFXakIseUJBQU8sYUFBQyxJQUFzQixFQUFFLE1BQWM7SUFXOUMseUJBQU8sYUFBQyxHQUFXLEVBQUUsUUFBbUI7SUFVeEMsNEJBQVUsYUFBQyxJQUFjO0lBVXpCLGtDQUFnQixhQUFDLFFBQW1CO0lBVXBDLGtDQUFnQixhQUFDLGFBQTRCO0lBVTdDLHNDQUFvQixhQUFDLFFBQW1CO0lBVXhDLHNDQUFvQixhQUFDLFVBQStCO0lBVXBELDJCQUFTLGFBQUMsRUFBVTtJQVNwQiw0QkFBVTtJQVVWLDhCQUFZLGFBQUMsUUFBbUI7SUFVaEMsMkNBQXlCLGFBQUMsUUFBbUI7SUFVN0MsMENBQXdCLGFBQUMsUUFBbUI7SUFXNUMsa0NBQWdCLGFBQUMsRUFBVSxFQUFFLFFBQW1CO0lBVWhELHFDQUFtQixhQUFDLEVBQVU7SUFTOUIsaUNBQWU7Ozs7Ozs7O2tCQWhYakI7RUE4TDZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gQ29sbGVjdG9ycyB7XG4gIEFwcERhdGEgPSAnQXBwRGF0YScsXG4gIENvbm5lY3Rpdml0eSA9ICdDb25uZWN0aXZpdHknLFxuICBEZXZpY2VEYXRhID0gJ0RldmljZURhdGEnLFxuICBMaWZlY3ljbGUgPSAnTGlmZWN5Y2xlJyxcbn1cblxuZXhwb3J0IGVudW0gRGlzcGF0Y2hlcnMge1xuICBDb2xsZWN0ID0gJ0NvbGxlY3QnLFxuICBUYWdNYW5hZ2VtZW50ID0gJ1RhZ01hbmFnZW1lbnQnLFxuICBSZW1vdGVDb21tYW5kcyA9ICdSZW1vdGVDb21tYW5kcycsXG59XG5cbmV4cG9ydCBlbnVtIEV4cGlyeSB7XG4gIGZvcmV2ZXIgPSAnZm9yZXZlcicsXG4gIHVudGlsUmVzdGFydCA9ICd1bnRpbFJlc3RhcnQnLFxuICBzZXNzaW9uID0gJ3Nlc3Npb24nLFxufVxuXG5leHBvcnQgZW51bSBDb25zZW50UG9saWN5IHtcbiAgY2NwYSA9ICdjY3BhJyxcbiAgZ2RwciA9ICdnZHByJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZWFsaXVtRGlzcGF0Y2gge1xuICBkYXRhTGF5ZXI6IE1hcDxzdHJpbmcsIGFueT47XG4gIHR5cGU6IHN0cmluZztcbiAgdG9Kc29uKCk6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRlYWxpdW1WaWV3IGltcGxlbWVudHMgVGVhbGl1bURpc3BhdGNoIHtcbiAgcHVibGljIHR5cGUgPSAndmlldyc7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3TmFtZTogc3RyaW5nLCBwdWJsaWMgZGF0YUxheWVyOiBNYXA8c3RyaW5nLCBhbnk+KSB7fVxuICB0b0pzb24oKSB7XG4gICAgY29uc3QgZGljdGlvbmFyeTogYW55ID0ge307XG4gICAgZGljdGlvbmFyeVsndHlwZSddID0gdGhpcy50eXBlO1xuICAgIGRpY3Rpb25hcnlbJ2RhdGFMYXllciddID0ge307XG4gICAgdGhpcy5kYXRhTGF5ZXIuZm9yRWFjaCgoaywgdikgPT4ge1xuICAgICAgZGljdGlvbmFyeVsnZGF0YUxheWVyJ11ba10gPSB2O1xuICAgIH0pO1xuICAgIGRpY3Rpb25hcnlbJ3R5cGUnXSA9IHRoaXMudHlwZTtcbiAgICBkaWN0aW9uYXJ5Wyd2aWV3TmFtZSddID0gdGhpcy52aWV3TmFtZTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGljdGlvbmFyeSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlYWxpdW1FdmVudCBpbXBsZW1lbnRzIFRlYWxpdW1EaXNwYXRjaCB7XG4gIHB1YmxpYyB0eXBlID0gJ2V2ZW50JztcbiAgY29uc3RydWN0b3IocHVibGljIGV2ZW50TmFtZTogc3RyaW5nLCBwdWJsaWMgZGF0YUxheWVyOiBNYXA8c3RyaW5nLCBhbnk+KSB7fVxuICB0b0pzb24oKSB7XG4gICAgY29uc3QgZGljdGlvbmFyeTogYW55ID0ge307XG4gICAgZGljdGlvbmFyeVsndHlwZSddID0gdGhpcy50eXBlO1xuICAgIGRpY3Rpb25hcnlbJ2RhdGFMYXllciddID0ge307XG4gICAgdGhpcy5kYXRhTGF5ZXIuZm9yRWFjaCgoaywgdikgPT4ge1xuICAgICAgZGljdGlvbmFyeVsnZGF0YUxheWVyJ11ba10gPSB2O1xuICAgIH0pO1xuICAgIGRpY3Rpb25hcnlbJ3R5cGUnXSA9IHRoaXMudHlwZTtcbiAgICBkaWN0aW9uYXJ5WydldmVudE5hbWUnXSA9IHRoaXMuZXZlbnROYW1lO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkaWN0aW9uYXJ5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uc2VudEV4cGlyeSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aW1lOiBudW1iZXIsIHB1YmxpYyB1bml0OiBUaW1lVW5pdCkge31cbn1cblxuZXhwb3J0IGVudW0gVGltZVVuaXQge1xuICBtaW51dGVzID0gJ21pbnV0ZXMnLFxuICBob3VycyA9ICdob3VycycsXG4gIGRheXMgPSAnZGF5cycsXG4gIG1vbnRocyA9ICdtb250aHMnLFxufVxuXG5leHBvcnQgZW51bSBDb25zZW50U3RhdHVzIHtcbiAgY29uc2VudGVkID0gJ2NvbnNlbnRlZCcsXG4gIG5vdENvbnNlbnRlZCA9ICdub3RDb25zZW50ZWQnLFxuICB1bmtub3duID0gJ3Vua25vd24nLFxufVxuXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIGRldiA9ICdkZXYnLFxuICBxYSA9ICdxYScsXG4gIHByb2QgPSAncHJvZCcsXG4gIHNpbGVudCA9ICdzaWxlbnQnLFxufVxuXG5leHBvcnQgZW51bSBUZWFsaXVtRW52aXJvbm1lbnQge1xuICBkZXYgPSAnZGV2JyxcbiAgcWEgPSAncWEnLFxuICBwcm9kID0gJ3Byb2QnLFxufVxuXG5leHBvcnQgZW51bSBDb25zZW50Q2F0ZWdvcmllcyB7XG4gIGFuYWx5dGljcyA9ICdhbmFseXRpY3MnLFxuICBhZmZpbGlhdGVzID0gJ2FmZmlsaWF0ZXMnLFxuICBkaXNwbGF5QWRzID0gJ2Rpc3BsYXlfYWRzJyxcbiAgZW1haWwgPSAnZW1haWwnLFxuICBwZXJzb25hbGl6YXRpb24gPSAncGVyc29uYWxpemF0aW9uJyxcbiAgc2VhcmNoID0gJ3NlYXJjaCcsXG4gIHNvY2lhbCA9ICdzb2NpYWwnLFxuICBiaWdEYXRhID0gJ2JpZ19kYXRhJyxcbiAgbW9iaWxlID0gJ21vYmlsZScsXG4gIGVuZ2FnZW1lbnQgPSAnZW5nYWdlbWVudCcsXG4gIG1vbml0b3JpbmcgPSAnbW9uaXRvcmluZycsXG4gIGNybSA9ICdjcm0nLFxuICBjZHAgPSAnY2RwJyxcbiAgY29va2llTWF0Y2ggPSAnY29va2llbWF0Y2gnLFxuICBtaXNjID0gJ21pc2MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlYWxpdW1Db25maWcge1xuICBhY2NvdW50OiBzdHJpbmc7XG4gIHByb2ZpbGU6IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IFRlYWxpdW1FbnZpcm9ubWVudDtcbiAgZGF0YVNvdXJjZT86IHN0cmluZztcbiAgY29sbGVjdG9yczogQ29sbGVjdG9yc1tdO1xuICBkaXNwYXRjaGVyczogRGlzcGF0Y2hlcnNbXTtcbiAgY3VzdG9tVmlzaXRvcklkPzogc3RyaW5nO1xuICBtZW1vcnlSZXBvcnRpbmdFbmFibGVkPzogYm9vbGVhbjtcbiAgb3ZlcnJpZGVDb2xsZWN0VVJMPzogc3RyaW5nO1xuICBvdmVycmlkZUNvbGxlY3RCYXRjaFVSTD86IHN0cmluZztcbiAgb3ZlcnJpZGVDb2xsZWN0RG9tYWluPzogc3RyaW5nO1xuICBvdmVycmlkZUxpYnJhcnlTZXR0aW5nc1VSTD86IHN0cmluZztcbiAgb3ZlcnJpZGVUYWdNYW5hZ2VtZW50VVJMPzogc3RyaW5nO1xuICBkZWVwTGlua1RyYWNraW5nRW5hYmxlZD86IGJvb2xlYW47XG4gIHFyVHJhY2VFbmFibGVkPzogYm9vbGVhbjtcbiAgbG9nbGV2ZWw/OiBMb2dMZXZlbDtcbiAgY29uc2VudExvZ2dpbmdFbmFibGVkPzogYm9vbGVhbjtcbiAgY29uc2VudFBvbGljeT86IENvbnNlbnRQb2xpY3k7XG4gIGNvbnNlbnRFeHBpcnk/OiBDb25zZW50RXhwaXJ5O1xuICBsaWZlY3ljbGVBdXRvdHJhY2tpbmdFbmFibGVkPzogYm9vbGVhbjtcbiAgdXNlUmVtb3RlTGlicmFyeVNldHRpbmdzPzogYm9vbGVhbjtcbiAgdmlzaXRvclNlcnZpY2VFbmFibGVkPzogYm9vbGVhbjtcbiAgdmlzaXRvclNlcnZpY2VSZWZyZXNoSW50ZXJ2YWw/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgVGVhbGl1bVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgdGhlIFRlYWxpdW0gQ29yZG92YSBQbHVnaW4gZm9yIElvbmljIE5hdGl2ZS5cbiAqXG4gKiBGb3IgZnVsbCBkb2N1bWVudGF0aW9uLCBzZWUgW2h0dHBzOi8vZG9jcy50ZWFsaXVtLmNvbS9wbGF0Zm9ybXMvY29yZG92YS9dKGh0dHBzOi8vZG9jcy50ZWFsaXVtLmNvbS9wbGF0Zm9ybXMvY29yZG92YS8pXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUZWFsaXVtIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RlYWxpdW0vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0ZWFsaXVtOiBUZWFsaXVtKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgY29uZmlnOiBUZWFsaXVtQ29uZmlnID0ge1xuICpcdFx0XHRhY2NvdW50OiA8eW91cl90ZWFsaXVtX2FjY291bnQ+LFxuICpcdFx0XHRwcm9maWxlOiA8eW91cl90ZWFsaXVtX3Byb2ZpbGU+LFxuICpcdFx0XHRlbnZpcm9ubWVudDogVGVhbGl1bUVudmlyb25tZW50LmRldixcbiAqXHRcdFx0ZGlzcGF0Y2hlcnM6IFtEaXNwYXRjaGVycy5Db2xsZWN0LCBEaXNwYXRjaGVycy5SZW1vdGVDb21tYW5kcywgRGlzcGF0Y2hlcnMuVGFnTWFuYWdlbWVudF0sXG4gKlx0XHRcdGNvbGxlY3RvcnM6IFtDb2xsZWN0b3JzLkFwcERhdGEsIENvbGxlY3RvcnMuRGV2aWNlRGF0YSwgQ29sbGVjdG9ycy5MaWZlY3ljbGUsIENvbGxlY3RvcnMuQ29ubmVjdGl2aXR5XSxcbiAqXHRcdFx0Y29uc2VudExvZ2dpbmdFbmFibGVkOiB0cnVlLFxuICpcdFx0XHRjb25zZW50UG9saWN5OiBDb25zZW50UG9saWN5LmdkcHIsXG4gKlx0XHRcdHZpc2l0b3JTZXJ2aWNlRW5hYmxlZDogdHJ1ZSxcbiAqXHRcdFx0Ly8gdmlzaXRvclNlcnZpY2VSZWZyZXNoSW50ZXJ2YWw6ICcxJyxcbiAqXHRcdFx0Y29uc2VudEV4cGlyeTogbmV3IENvbnNlbnRFeHBpcnkoMywgVGltZVVuaXQubWludXRlcyksXG4gKlx0XHR9O1xuICpcbiAqIFRlYWxpdW0uaW5pdGlhbGl6ZShjb25maWcpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RlYWxpdW0nLFxuICBwbHVnaW46ICd0ZWFsaXVtLWNvcmRvdmEtcGx1Z2luJywgLy8gbnBtIHBhY2thZ2UgbmFtZVxuICBwbHVnaW5SZWY6ICd0ZWFsaXVtJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW5cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZWFsaXVtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgVGVhbGl1bSBDb3Jkb3ZhIFBsdWdpblxuICAgKiBAcGFyYW0gY29uZmlnIHtUZWFsaXVtQ29uZmlnfVxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdGlhbGl6ZShjb25maWc6IFRlYWxpdW1Db25maWcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB0cmFja3MgYW4gZXZlbnRcbiAgICogQHBhcmFtIGRpc3BhdGNoIHtUZWFsaXVtRGlzcGF0Y2h9IERpc3BhdGNoIGNvbnRhaW5pbmcgZXZlbnQgZGF0YVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFjayhkaXNwYXRjaDogVGVhbGl1bURpc3BhdGNoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB0ZXJtaW5hdGVzdCB0aGUgVGVhbGl1bSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0ZXJtaW5hdGVJbnN0YW5jZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGRhdGEgdG8gZGF0YSBsYXllclxuICAgKiBAcGFyYW0gZGF0YSBBIG1hcCBjb250YWluaW5nIHRoZSBrZXktdmFsdWUgcGFpcnMgdG8gYmUgYWRkZWQgdG8gZGF0YSBsYXllclxuICAgKiBAcGFyYW0gZXhwaXJ5IFdoZW4gdGhlIGRhdGEgc2hvdWxkIGV4cGlyZS4gQ2hvb3NlIGBFeHBpcnkuc2Vzc2lvbmAgaWYgdW5zdXJlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGREYXRhKGRhdGE6IE1hcDxzdHJpbmcsIGFueT4sIGV4cGlyeTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGtleSBUaGUga2V5IG9mIHRoZSBkYXRhIHRvIHJldHJpZXZlIGZyb20gdGhlIGRhdGEgbGF5ZXJcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERhdGEoa2V5OiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGRhdGEgZnJvbSB0aGUgZGF0YSBsYXllclxuICAgKiBAcGFyYW0ga2V5cyBUaGUga2V5cyBvZiB0aGUgZGF0YSB0byBiZSByZW1vdmVkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZURhdGEoa2V5czogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIncyBjb25zZW50IHN0YXR1c1xuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29uc2VudFN0YXR1cyhjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlcidzIGNvbnNlbnQgc3RhdHVzXG4gICAqIEBwYXJhbSBjb25zZW50U3RhdHVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldENvbnNlbnRTdGF0dXMoY29uc2VudFN0YXR1czogQ29uc2VudFN0YXR1cyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdXNlcidzIGNvbnNlbnQgY2F0ZWdvcmllc1xuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29uc2VudENhdGVnb3JpZXMoY2FsbGJhY2s/OiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZXIncyBjb25zZW50IGNhdGVnb3JpZXNcbiAgICogQHBhcmFtIGNhdGVnb3JpZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q29uc2VudENhdGVnb3JpZXMoY2F0ZWdvcmllczogQ29uc2VudENhdGVnb3JpZXNbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEpvaW5zIGEgdHJhY2Ugc2Vzc2lvbiB3ZWl0aCB0aGUgc3BlY2lmaWVkIFRyYWNlIElEXG4gICAqIEBwYXJhbSBpZCBUcmFjZSBJRFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBqb2luVHJhY2UoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExlYXZlcyBhIHRyYWNlIHNlc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbGVhdmVUcmFjZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIFRlYWxpdW0gVmlzaXRvciBJRFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VmlzaXRvcklkKGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIEF1ZGllbmNlU3RyZWFtIHZpc2l0b3IgcHJvZmlsZSBpcyB1cGRhdGVkXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRWaXNpdG9yU2VydmljZUxpc3RlbmVyKGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnNlbnQgaGFzIGV4cGlyZWRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldENvbnNlbnRFeHBpcnlMaXN0ZW5lcihjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlbW90ZSBjb21tYW5kIGZvciBsYXRlciBleGVjdXRpb25cbiAgICogQHBhcmFtIGlkIFRoZSBJRCB1c2VkIHRvIGludm9rZSB0aGUgcmVtb3RlIGNvbW1hbmRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZFJlbW90ZUNvbW1hbmQoaWQ6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBwcmV2aW91c2x5LWFkZGVkIHJlbW90ZSBjb21tYW5kXG4gICAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgcmVtb3RlIGNvbW1hbmQgdG8gYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW1vdmVSZW1vdGVDb21tYW5kKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlTGlzdGVuZXJzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=