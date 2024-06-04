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
var hypertrackIonicPluginVersion = "0.2.0";
var HyperTrackPluginOriginal = /** @class */ (function (_super) {
    __extends(HyperTrackPluginOriginal, _super);
    function HyperTrackPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPluginOriginal.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPluginOriginal.prototype.getBlockers = function () { return cordova(this, "getBlockers", {}, arguments); };
    HyperTrackPluginOriginal.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPluginOriginal.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.pluginRef = "hypertrack";
    HyperTrackPluginOriginal.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPluginOriginal.platforms = ["Android, iOS"];
    return HyperTrackPluginOriginal;
}(AwesomeCordovaNativePlugin));
var HyperTrackPlugin = new HyperTrackPluginOriginal();
export { HyperTrackPlugin };
var CoordinatesValidationError = /** @class */ (function (_super) {
    __extends(CoordinatesValidationError, _super);
    function CoordinatesValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoordinatesValidationError;
}(Error));
export { CoordinatesValidationError };
var Coordinates = /** @class */ (function () {
    function Coordinates(latitude, longitude) {
        var _this = this;
        this.latitude = latitude;
        this.longitude = longitude;
        this.toString = function () {
            return JSON.stringify(_this);
        };
        if (latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0) {
            throw new CoordinatesValidationError('latitude and longitude should be of correct values');
        }
    }
    return Coordinates;
}());
export { Coordinates };
export var LocationResultType;
(function (LocationResultType) {
    LocationResultType[LocationResultType["LOCATION"] = 0] = "LOCATION";
    LocationResultType[LocationResultType["OUTAGE"] = 1] = "OUTAGE";
})(LocationResultType || (LocationResultType = {}));
export var Outage;
(function (Outage) {
    Outage[Outage["MISSING_LOCATION_PERMISSION"] = 0] = "MISSING_LOCATION_PERMISSION";
    Outage[Outage["MISSING_ACTIVITY_PERMISSION"] = 1] = "MISSING_ACTIVITY_PERMISSION";
    Outage[Outage["LOCATION_SERVICE_DISABLED"] = 2] = "LOCATION_SERVICE_DISABLED";
    Outage[Outage["NOT_TRACKING"] = 3] = "NOT_TRACKING";
    Outage[Outage["START_HAS_NOT_FINISHED"] = 4] = "START_HAS_NOT_FINISHED";
    Outage[Outage["NO_GPS_SIGNAL"] = 5] = "NO_GPS_SIGNAL";
    Outage[Outage["RESTART_REQUIRED"] = 6] = "RESTART_REQUIRED";
})(Outage || (Outage = {}));
var HyperTrack = /** @class */ (function () {
    function HyperTrack(cordovaInstanceHandle) {
        this.cordovaInstanceHandle = cordovaInstanceHandle;
    }
    /** Enables debug log in native HyperTrack SDK. */
    HyperTrack.enableDebugLogging = function () {
        new HyperTrackPluginOriginal().enableDebugLogging();
    };
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     *
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    HyperTrack.initialize = function (publishableKey) {
        console.log("Hypertrack Ionic plugin version " + hypertrackIonicPluginVersion);
        return new Promise(function (resolve, reject) {
            new HyperTrackPluginOriginal()
                .initialize(publishableKey)
                .then(function (cordovaInstance) {
                resolve(new HyperTrack(cordovaInstance));
            })
                .catch(function (err) { return reject(err); });
        });
    };
    /**
     * Get the list of blockers that needs to be resolved for reliable tracking.
     *
     * @see {Blocker}
     */
    HyperTrack.getBlockers = function () {
        return new HyperTrackPluginOriginal().getBlockers();
    };
    /** Resolves device ID that could be used to identify the device. */
    HyperTrack.prototype.getDeviceId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getDeviceId(function (deviceId) { return resolve(deviceId); }, function (err) { return reject(err); });
        });
    };
    /** Resolves to true if tracking service is running and false otherwise */
    HyperTrack.prototype.isRunning = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.isRunning(function (isRunning) { return resolve(isRunning); }, function (err) { return reject(err); });
        });
    };
    /**
     * Sets device name that could be used to identify the device in HyperTrack dashboard
     *
     * @param name
     */
    HyperTrack.prototype.setDeviceName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceName(name, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Use this to set additional properties, like segments, teams etc.
     *
     * @param metadata key-value pais of properties.
     */
    HyperTrack.prototype.setDeviceMetadata = function (metadata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceMetadata(metadata, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Updates title and text in persistent notification, that appears when tracking is active.
     *
     * @param title
     * @param message
     */
    HyperTrack.prototype.setTrackingNotificationProperties = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setTrackingNotificationProperties(title, message, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Adds special marker-like object to device timeline.
     *
     * @param geotagData
     * @param expectedLocation
     */
    HyperTrack.prototype.addGeotag = function (geotagData, expectedLocation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.addGeoTag(geotagData, expectedLocation, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    HyperTrack.prototype.requestPermissionsIfNecessary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.requestPermissionsIfNecessary(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    HyperTrack.prototype.allowMockLocations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.allowMockLocations(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    HyperTrack.prototype.syncDeviceSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.syncDeviceSettings(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Start tracking. */
    HyperTrack.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.start(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Stop tracking. */
    HyperTrack.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.stop(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Resolves latest device location that was sent by the SDK.
     * Only available for Android platform.
     * */
    HyperTrack.prototype.getLatestLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getLatestLocation(function (locationResult) { return resolve(_this.handleLocationResult(locationResult)); }, function (err) { return reject(err); });
        });
    };
    /**
     * Resolves latest device location from system location provider.
     * Only available for Android platform.
     * */
    HyperTrack.prototype.getCurrentLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getCurrentLocation(function (locationResult) { return resolve(_this.handleLocationResult(locationResult)); }, function (err) { return reject(err); });
        });
    };
    HyperTrack.prototype.handleLocationResult = function (locationResult) {
        switch (locationResult.type) {
            case "location": {
                return {
                    type: LocationResultType.LOCATION,
                    value: locationResult.location
                };
            }
            case "outage": {
                var outage = Outage[locationResult.outage.name];
                return {
                    type: LocationResultType.OUTAGE,
                    value: outage
                };
            }
        }
    };
    return HyperTrack;
}());
export { HyperTrack };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaHlwZXItdHJhY2svaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RixJQUFNLDRCQUE0QixHQUFHLE9BQU8sQ0FBQTs7SUFVTixvQ0FBMEI7Ozs7SUFFOUQscUNBQVUsYUFBQyxjQUFzQjtJQUtqQyxzQ0FBVztJQUtYLDZDQUFrQjs7Ozs7OzJCQXpCcEI7RUFhc0MsMEJBQTBCO1NBQW5ELGdCQUFnQjs7SUE4RG1CLDhDQUFLOzs7O3FDQTNFckQ7RUEyRWdELEtBQUs7OztJQUluRCxxQkFBbUIsUUFBZ0IsRUFBUyxTQUFpQjtRQUE3RCxpQkFJQztRQUprQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQU10RCxhQUFRLEdBQUc7WUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQTtRQVBDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQUU7WUFDbEYsTUFBTSxJQUFJLDBCQUEwQixDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDNUY7SUFDSCxDQUFDO3NCQW5GSDs7O0FBMEhBLE1BQU0sQ0FBTixJQUFZLGtCQUVYO0FBRkQsV0FBWSxrQkFBa0I7SUFDNUIsbUVBQVEsQ0FBQTtJQUFFLCtEQUFNLENBQUE7QUFDbEIsQ0FBQyxFQUZXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFFN0I7QUFFRCxNQUFNLENBQU4sSUFBWSxNQVFYO0FBUkQsV0FBWSxNQUFNO0lBQ2hCLGlGQUEyQixDQUFBO0lBQzNC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O2FBQ0Y7WUFDRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNiLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqRCxPQUFPO29CQUNMLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxNQUFNO29CQUMvQixLQUFLLEVBQUUsTUFBTTtpQkFDZCxDQUFBO2FBQ0Y7U0FDRjtJQUNILENBQUM7cUJBeFhIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIENvcmRvdmEsIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuY29uc3QgaHlwZXJ0cmFja0lvbmljUGx1Z2luVmVyc2lvbiA9IFwiMC4yLjBcIlxuLy8gTWluaW1hbCBjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzIHZlcnNpb246IDAuNS4wXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGx1Z2luLWh5cGVydHJhY2stdjMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcbiAgcGx1Z2luUmVmOiAnaHlwZXJ0cmFjaycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaHlwZXJ0cmFjay9jb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkLCBpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHlwZXJUcmFja1BsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBpbml0aWFsaXplKHB1Ymxpc2hhYmxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPEh5cGVyVHJhY2tDb3Jkb3ZhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRCbG9ja2VycygpOiBQcm9taXNlPFNldDxCbG9ja2VyPj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlRGVidWdMb2dnaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEludGVyZmFjZXMgZm9yIENvcmRvdmEgUGx1Z2luIGNhbGxiYWNrc1xuaW50ZXJmYWNlIERldmljZUlkUmVjZWl2ZXIge1xuICAoZGV2aWNlSWQ6IHN0cmluZyk6IGFueTtcbn1cbmludGVyZmFjZSBUcmFja2luZ1N0YXRlUmVjZWl2ZXIge1xuICAoaXNSdW5uaW5nOiBib29sZWFuKTogYW55O1xufVxuaW50ZXJmYWNlIEZhaWx1cmVIYW5kbGVyIHtcbiAgKGVycm9yOiBFcnJvcik6IGFueTtcbn1cbmludGVyZmFjZSBTdWNjZXNzSGFuZGxlciB7XG4gICgpOiBhbnk7XG59XG5pbnRlcmZhY2UgTG9jYXRpb25SZWNlaXZlciB7XG4gIChsb2NhdGlvbjogQ29yZG92YUxhdGVzdExvY2F0aW9uUmVzdWx0KTogYW55OyAgXG59XG5cbi8vIFNESyBpbnN0YW5jZSB0aGF0IGV4cG9zZWQgZnJvbSBDb3Jkb3ZhIHV0aWxpemVzIHVzYWdlIG9mIGNhbGxiYWNrcywgc28gd2Vcbi8vIHdyYXAgaXQgd2l0aCBhZGFwdGVyIHRvIGF2b2lkIG1peCBvZiBjYWxsYmFja3MgYW5kIFByb21pc2VzXG5pbnRlcmZhY2UgSHlwZXJUcmFja0NvcmRvdmEge1xuICBnZXREZXZpY2VJZChzdWNjZXNzOiBEZXZpY2VJZFJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBpc1J1bm5pbmcoc3VjY2VzczogVHJhY2tpbmdTdGF0ZVJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzZXREZXZpY2VOYW1lKG5hbWU6IHN0cmluZywgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHNldERldmljZU1ldGFkYXRhKG1ldGFkYXRhOiBPYmplY3QsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsXG4gICAgZXJyb3I6IEZhaWx1cmVIYW5kbGVyXG4gICk6IHZvaWQ7XG4gIGFkZEdlb1RhZyhcbiAgICBnZW90YWdEYXRhOiBPYmplY3QsXG4gICAgZXhwZWN0ZWRMb2NhdGlvbjogQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQsXG4gICAgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsXG4gICAgZXJyb3I6IEZhaWx1cmVIYW5kbGVyXG4gICk6IHZvaWQ7XG4gIHJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBhbGxvd01vY2tMb2NhdGlvbnMoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHN5bmNEZXZpY2VTZXR0aW5ncyhzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc3RhcnQoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHN0b3Aoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIGdldExhdGVzdExvY2F0aW9uKHN1Y2Nlc3M6IExvY2F0aW9uUmVjZWl2ZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIGdldEN1cnJlbnRMb2NhdGlvbihzdWNjZXNzOiBMb2NhdGlvblJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4vKiogV3JhcHBlciBjbGFzcyBmb3IgcGFzc2luZyBzcGF0aWFsIGdlb3Bvc2l0aW9uIGFzIGEgZ2VvdGFnJ3MgZXhwZWN0ZWQgbG9jYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyLCBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXIpIHtcbiAgICBpZiAobGF0aXR1ZGUgPCAtOTAuMCB8fCBsYXRpdHVkZSA+IDkwLjAgfHwgbG9uZ2l0dWRlIDwgLTE4MC4wIHx8IGxvbmdpdHVkZSA+IDE4MC4wKSB7XG4gICAgICB0aHJvdyBuZXcgQ29vcmRpbmF0ZXNWYWxpZGF0aW9uRXJyb3IoJ2xhdGl0dWRlIGFuZCBsb25naXR1ZGUgc2hvdWxkIGJlIG9mIGNvcnJlY3QgdmFsdWVzJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG59XG5cbi8qKiBBIGJsb2NrZXIgaXMgYW4gb2JzdGFjbGUgdGhhdCBuZWVkcyB0byBiZSByZXNvbHZlZCB0byBhY2hpZXZlIHJlbGlhYmxlIHRyYWNraW5nLiAqL1xuZXhwb3J0IGludGVyZmFjZSBCbG9ja2VyIHtcbiAgLyoqIFJlY29tbWVuZGVkIG5hbWUgZm9yIGEgdXNlciBhY3Rpb24sIHRoYXQgbmVlZHMgdG8gYmUgcGVyZm9ybWVkIHRvIHJlc29sdmUgdGhlIGJsb2NrZXIuICovXG4gIHVzZXJBY3Rpb25UaXRsZTogc3RyaW5nO1xuICAvKiogUmVjb21tZW5kZWQgbmFtZSBmb3IgYSBidXR0b24sIHRoYXQgd2lsbCBuYXZpZ2F0ZSB1c2VyIHRvIHRoZSBwbGFjZSB3aGVyZSBoZSBjYW4gcmVzb2x2ZSB0aGUgYmxvY2tlciAqL1xuICB1c2VyQWN0aW9uQ1RBOiBzdHJpbmc7XG4gIC8qKiBVc2VyIGFjdGlvbiBleHBsYW5hdGlvbiAqL1xuICB1c2VyQWN0aW9uRXhwbGFuYXRpb246IHN0cmluZztcbiAgLyoqIEFuIGFjdGlvbiB0aGF0IG5hdmlnYXRlcyB1c2VyIHRvIHRoZSBkZWRpY2F0ZWQgc2V0dGluZ3MgbWVudS4gKi9cbiAgcmVzb2x2ZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQ29yZG92YUxhdGVzdExvY2F0aW9uUmVzdWx0ID0ge1xuICB0eXBlOiBcImxvY2F0aW9uXCIsXG4gIGxvY2F0aW9uOiBDb29yZGluYXRlcyxcbn0gfCB7XG4gIHR5cGU6IFwib3V0YWdlXCIsXG4gIG91dGFnZToge1xuICAgIGNvZGU6IG51bWJlcixcbiAgICBuYW1lOiBrZXlvZiB0eXBlb2YgT3V0YWdlXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTG9jYXRpb25SZXN1bHQgPSB7XG4gIHR5cGU6IExvY2F0aW9uUmVzdWx0VHlwZS5MT0NBVElPTiwgXG4gIHZhbHVlOiBDb29yZGluYXRlc1xufSB8IFxue1xuICB0eXBlOiBMb2NhdGlvblJlc3VsdFR5cGUuT1VUQUdFLCBcbiAgdmFsdWU6IE91dGFnZVxufVxuXG5leHBvcnQgZW51bSBMb2NhdGlvblJlc3VsdFR5cGUge1xuICBMT0NBVElPTiwgT1VUQUdFXG59XG5cbmV4cG9ydCBlbnVtIE91dGFnZSB7XG4gIE1JU1NJTkdfTE9DQVRJT05fUEVSTUlTU0lPTixcbiAgTUlTU0lOR19BQ1RJVklUWV9QRVJNSVNTSU9OLFxuICBMT0NBVElPTl9TRVJWSUNFX0RJU0FCTEVELFxuICBOT1RfVFJBQ0tJTkcsXG4gIFNUQVJUX0hBU19OT1RfRklOSVNIRUQsXG4gIE5PX0dQU19TSUdOQUwsXG4gIFJFU1RBUlRfUkVRVUlSRURcbn1cblxuLyoqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAgaW1wb3J0IHsgSHlwZXJUcmFjayB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9oeXBlci10cmFjayc7XG4gKlxuICogICBpbml0aWFsaXplSHlwZXJ0cmFjaygpIHtcbiAqICAgICBIeXBlclRyYWNrLmVuYWJsZURlYnVnTG9nZ2luZygpO1xuICogICAgIEh5cGVyVHJhY2suaW5pdGlhbGl6ZSgnWU9VUl9QVUJMSVNISU5HX0tFWScpXG4gKiAgICAgLnRoZW4oIHRoaXMub25TZGtJbnN0YW5jZVJlY2VpdmVkIClcbiAqICAgICAuY2F0Y2goIChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJIeXBlclRyYWNrIGluaXQgZmFpbGVkIHdpdGggZXJyb3IgXCIgKyBlcnIpICk7XG4gKiAgIH1cbiAqICAgb25TZGtJbnN0YW5jZVJlY2VpdmVkKHNka0luc3RhbmNlOiBIeXBlclRyYWNrKSB7XG4gKiAgICAgICBzZGtJbnN0YW5jZS5nZXREZXZpY2VJZCgpXG4gKiAgICAgIC50aGVuKChpZCkgPT4gY29uc29sZS5sb2coXCJHb3QgZGV2aWNlIGlkIFwiICsgaWQpKVxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXREZXZpY2VOYW1lKFwiRWx2aXMgSW9uaWNcIikpXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiRGV2aWNlIG5hbWUgd2FzIGNoYW5nZWRcIikpXG4gKiAgICAgIC50aGVuKCgpID0+IHNka0luc3RhbmNlLnNldERldmljZU1ldGFkYXRhKHtwbGF0Zm9ybTogXCJJb25pYyBBbmRyb2lkXCJ9KSlcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJEZXZpY2UgbWV0YWRhdGEgd2FzIGNoYW5nZWRcIikpXG4gKiAgICAgIC50aGVuKCgpID0+IHNka0luc3RhbmNlLnNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyhcIlRyYWNraW5nIE9uXCIsIFwiSW9uaWMgU0RLIGlzIHRyYWNraW5nXCIpKVxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBwcm9wZXJ0aWVzIHdlcmUgY2hhbmdlZFwiKSlcbiAqICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJHb3QgZXJyb3IgaW4gSHlwZXJUcmFjayBcIiArIGVycikpO1xuICogICB9XG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBIeXBlclRyYWNrIHtcbiAgLyoqIEVuYWJsZXMgZGVidWcgbG9nIGluIG5hdGl2ZSBIeXBlclRyYWNrIFNESy4gKi9cbiAgc3RhdGljIGVuYWJsZURlYnVnTG9nZ2luZygpOiB2b2lkIHtcbiAgICBuZXcgSHlwZXJUcmFja1BsdWdpbigpLmVuYWJsZURlYnVnTG9nZ2luZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVudHJ5IHBvaW50IGludG8gU0RLLlxuICAgKlxuICAgKiBJbml0aWFsaXplcyBTREsuIEFsc28gcmVzb2x2ZXMgU0RLIGluc3RhbmNlIHRoYXQgY291bGQgYmUgdXNlZCB0byBxdWVyeSBkZXZpY2VJZCBvciBzZXRcbiAgICogdmFyaW91cyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gcHVibGlzaGFibGVLZXkgYWNjb3VudC1zcGVjaWZpYyBzZWNyZXQgZnJvbSB0aGUgSHlwZXJUcmFjayBkYXNoYm9yYWQuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGFzaGJvYXJkLmh5cGVydHJhY2suY29tL3NldHVwfS5cbiAgICovXG4gIHN0YXRpYyBpbml0aWFsaXplKHB1Ymxpc2hhYmxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPEh5cGVyVHJhY2s+IHtcbiAgICBjb25zb2xlLmxvZyhgSHlwZXJ0cmFjayBJb25pYyBwbHVnaW4gdmVyc2lvbiAke2h5cGVydHJhY2tJb25pY1BsdWdpblZlcnNpb259YClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbmV3IEh5cGVyVHJhY2tQbHVnaW4oKVxuICAgICAgICAuaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleSlcbiAgICAgICAgLnRoZW4oKGNvcmRvdmFJbnN0YW5jZTogSHlwZXJUcmFja0NvcmRvdmEpID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5ldyBIeXBlclRyYWNrKGNvcmRvdmFJbnN0YW5jZSkpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHJlamVjdChlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2YgYmxvY2tlcnMgdGhhdCBuZWVkcyB0byBiZSByZXNvbHZlZCBmb3IgcmVsaWFibGUgdHJhY2tpbmcuXG4gICAqXG4gICAqIEBzZWUge0Jsb2NrZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0QmxvY2tlcnMoKTogUHJvbWlzZTxTZXQ8QmxvY2tlcj4+IHtcbiAgICByZXR1cm4gbmV3IEh5cGVyVHJhY2tQbHVnaW4oKS5nZXRCbG9ja2VycygpO1xuICB9XG5cbiAgLyoqIFJlc29sdmVzIGRldmljZSBJRCB0aGF0IGNvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGRldmljZS4gKi9cbiAgZ2V0RGV2aWNlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuZ2V0RGV2aWNlSWQoXG4gICAgICAgIChkZXZpY2VJZCkgPT4gcmVzb2x2ZShkZXZpY2VJZCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlc29sdmVzIHRvIHRydWUgaWYgdHJhY2tpbmcgc2VydmljZSBpcyBydW5uaW5nIGFuZCBmYWxzZSBvdGhlcndpc2UgKi9cbiAgaXNSdW5uaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5pc1J1bm5pbmcoXG4gICAgICAgIChpc1J1bm5pbmcpID0+IHJlc29sdmUoaXNSdW5uaW5nKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBkZXZpY2UgbmFtZSB0aGF0IGNvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGRldmljZSBpbiBIeXBlclRyYWNrIGRhc2hib2FyZFxuICAgKlxuICAgKiBAcGFyYW0gbmFtZVxuICAgKi9cbiAgc2V0RGV2aWNlTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc2V0RGV2aWNlTmFtZShcbiAgICAgICAgbmFtZSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byBzZXQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLCBsaWtlIHNlZ21lbnRzLCB0ZWFtcyBldGMuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRhZGF0YSBrZXktdmFsdWUgcGFpcyBvZiBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc2V0RGV2aWNlTWV0YWRhdGEobWV0YWRhdGE6IE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXREZXZpY2VNZXRhZGF0YShcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aXRsZSBhbmQgdGV4dCBpbiBwZXJzaXN0ZW50IG5vdGlmaWNhdGlvbiwgdGhhdCBhcHBlYXJzIHdoZW4gdHJhY2tpbmcgaXMgYWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0gdGl0bGVcbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICovXG4gIHNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHNwZWNpYWwgbWFya2VyLWxpa2Ugb2JqZWN0IHRvIGRldmljZSB0aW1lbGluZS5cbiAgICpcbiAgICogQHBhcmFtIGdlb3RhZ0RhdGFcbiAgICogQHBhcmFtIGV4cGVjdGVkTG9jYXRpb25cbiAgICovXG4gIGFkZEdlb3RhZyhnZW90YWdEYXRhOiBPYmplY3QsIGV4cGVjdGVkTG9jYXRpb24/OiBDb29yZGluYXRlcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5hZGRHZW9UYWcoXG4gICAgICAgIGdlb3RhZ0RhdGEsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUG9wcyB1cCBwZXJtaXNzaW9uIHJlcXVlc3QgZGlhbG9nLCBpZiBwZXJtaXNzaW9ucyB3ZXJlbid0IGdyYW50ZWQgYmVmb3JlIG9yIGRvZXMgbm90aGluZyBvdGhlcndpc2UuICovXG4gIHJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5yZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeShcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBbGxvd3MgaW5qZWN0aW5nIGZhbHNlIGxvY2F0aW9ucyBpbnRvIHRoZSBTREssIHdoaWNoIGlnbm9yZXMgdGhlbSBieSBkZWZhdWx0LiAqL1xuICBhbGxvd01vY2tMb2NhdGlvbnMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmFsbG93TW9ja0xvY2F0aW9ucyhcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdHJhY2tpbmcgc3RhdGUgd2l0aCBwbGF0Zm9ybSBtb2RlbC4gVGhpcyBtZXRob2QgaXMgdXNlZCB0b1xuICAgKiBoYXJkZW4gcGxhdGZvcm0yZGV2aWNlIGNvbW11bmljYXRpb24gY2hhbm5lbC5cbiAgICovXG4gIHN5bmNEZXZpY2VTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc3luY0RldmljZVNldHRpbmdzKFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFN0YXJ0IHRyYWNraW5nLiAqL1xuICBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc3RhcnQoXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogU3RvcCB0cmFja2luZy4gKi9cbiAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc3RvcChcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBcbiAgICogUmVzb2x2ZXMgbGF0ZXN0IGRldmljZSBsb2NhdGlvbiB0aGF0IHdhcyBzZW50IGJ5IHRoZSBTREsuIFxuICAgKiBPbmx5IGF2YWlsYWJsZSBmb3IgQW5kcm9pZCBwbGF0Zm9ybS5cbiAgICogKi9cbiAgZ2V0TGF0ZXN0TG9jYXRpb24oKTogUHJvbWlzZTxMb2NhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5nZXRMYXRlc3RMb2NhdGlvbihcbiAgICAgICAgbG9jYXRpb25SZXN1bHQgPT4gcmVzb2x2ZSh0aGlzLmhhbmRsZUxvY2F0aW9uUmVzdWx0KGxvY2F0aW9uUmVzdWx0KSksXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBcbiAgICogUmVzb2x2ZXMgbGF0ZXN0IGRldmljZSBsb2NhdGlvbiBmcm9tIHN5c3RlbSBsb2NhdGlvbiBwcm92aWRlci4gXG4gICAqIE9ubHkgYXZhaWxhYmxlIGZvciBBbmRyb2lkIHBsYXRmb3JtLlxuICAgKiAqL1xuICBnZXRDdXJyZW50TG9jYXRpb24oKTogUHJvbWlzZTxMb2NhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5nZXRDdXJyZW50TG9jYXRpb24oXG4gICAgICAgIGxvY2F0aW9uUmVzdWx0ID0+IHJlc29sdmUodGhpcy5oYW5kbGVMb2NhdGlvblJlc3VsdChsb2NhdGlvblJlc3VsdCkpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxvY2F0aW9uUmVzdWx0KGxvY2F0aW9uUmVzdWx0OiBDb3Jkb3ZhTGF0ZXN0TG9jYXRpb25SZXN1bHQpOiBMb2NhdGlvblJlc3VsdCB7XG4gICAgc3dpdGNoIChsb2NhdGlvblJlc3VsdC50eXBlKSB7XG4gICAgICBjYXNlIFwibG9jYXRpb25cIjoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IExvY2F0aW9uUmVzdWx0VHlwZS5MT0NBVElPTixcbiAgICAgICAgICB2YWx1ZTogbG9jYXRpb25SZXN1bHQubG9jYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBcIm91dGFnZVwiOiB7XG4gICAgICAgIGNvbnN0IG91dGFnZSA9IE91dGFnZVtsb2NhdGlvblJlc3VsdC5vdXRhZ2UubmFtZV1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBMb2NhdGlvblJlc3VsdFR5cGUuT1VUQUdFLFxuICAgICAgICAgIHZhbHVlOiBvdXRhZ2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBjb3Jkb3ZhSW5zdGFuY2VIYW5kbGU6IEh5cGVyVHJhY2tDb3Jkb3ZhKSB7fVxufVxuIl19