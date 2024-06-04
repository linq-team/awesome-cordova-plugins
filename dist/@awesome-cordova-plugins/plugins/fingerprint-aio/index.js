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
export var BIOMETRIC_ERRORS;
(function (BIOMETRIC_ERRORS) {
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_UNKNOWN_ERROR"] = -100] = "BIOMETRIC_UNKNOWN_ERROR";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_UNAVAILABLE"] = -101] = "BIOMETRIC_UNAVAILABLE";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_AUTHENTICATION_FAILED"] = -102] = "BIOMETRIC_AUTHENTICATION_FAILED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_SDK_NOT_SUPPORTED"] = -103] = "BIOMETRIC_SDK_NOT_SUPPORTED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_HARDWARE_NOT_SUPPORTED"] = -104] = "BIOMETRIC_HARDWARE_NOT_SUPPORTED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_PERMISSION_NOT_GRANTED"] = -105] = "BIOMETRIC_PERMISSION_NOT_GRANTED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_NOT_ENROLLED"] = -106] = "BIOMETRIC_NOT_ENROLLED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_INTERNAL_PLUGIN_ERROR"] = -107] = "BIOMETRIC_INTERNAL_PLUGIN_ERROR";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_DISMISSED"] = -108] = "BIOMETRIC_DISMISSED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_PIN_OR_PATTERN_DISMISSED"] = -109] = "BIOMETRIC_PIN_OR_PATTERN_DISMISSED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_SCREEN_GUARD_UNSECURED"] = -110] = "BIOMETRIC_SCREEN_GUARD_UNSECURED";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_LOCKED_OUT"] = -111] = "BIOMETRIC_LOCKED_OUT";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_LOCKED_OUT_PERMANENT"] = -112] = "BIOMETRIC_LOCKED_OUT_PERMANENT";
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_ERRORS[BIOMETRIC_ERRORS["BIOMETRIC_SECRET_NOT_FOUND"] = -113] = "BIOMETRIC_SECRET_NOT_FOUND";
})(BIOMETRIC_ERRORS || (BIOMETRIC_ERRORS = {}));
var FingerprintAIOOriginal = /** @class */ (function (_super) {
    __extends(FingerprintAIOOriginal, _super);
    function FingerprintAIOOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FingerprintAIOOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIOOriginal.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIOOriginal.pluginName = "FingerprintAIO";
    FingerprintAIOOriginal.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.pluginRef = "Fingerprint";
    FingerprintAIOOriginal.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.platforms = ["Android", "iOS"];
    return FingerprintAIOOriginal;
}(AwesomeCordovaNativePlugin));
var FingerprintAIO = new FingerprintAIOOriginal();
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmluZ2VycHJpbnQtYWlvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFLNUYsTUFBTSxDQUFOLElBQVksZ0JBcUZYO0FBckZELFdBQVksZ0JBQWdCO0lBQzFCOzs7O09BSUc7SUFDSCxnR0FBOEIsQ0FBQTtJQUM5Qjs7OztPQUlHO0lBQ0gsNEZBQTRCLENBQUE7SUFDNUI7Ozs7T0FJRztJQUNILGdIQUFzQyxDQUFBO0lBQ3RDOzs7O09BSUc7SUFDSCx3R0FBa0MsQ0FBQTtJQUNsQzs7OztPQUlHO0lBQ0gsa0hBQXVDLENBQUE7SUFDdkM7Ozs7T0FJRztJQUNILGtIQUF1QyxDQUFBO0lBQ3ZDOzs7O09BSUc7SUFDSCw4RkFBNkIsQ0FBQTtJQUM3Qjs7OztPQUlHO0lBQ0gsZ0hBQXNDLENBQUE7SUFDdEM7Ozs7T0FJRztJQUNILHdGQUEwQixDQUFBO0lBQzFCOzs7O09BSUc7SUFDSCxzSEFBeUMsQ0FBQTtJQUN6Qzs7OztPQUlHO0lBQ0gsa0hBQXVDLENBQUE7SUFDdkM7Ozs7T0FJRztJQUNILDBGQUEyQixDQUFBO0lBQzNCOzs7O09BSUc7SUFDSCw4R0FBcUMsQ0FBQTtJQUNyQzs7OztPQUlHO0lBQ0gsc0dBQWlDLENBQUE7QUFDbkMsQ0FBQyxFQXJGVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBcUYzQjs7SUFpSW1DLGtDQUEwQjs7OztJQVM1RCxvQ0FBVztJQVdYLGdEQUF1QixhQUFDLE9BQWlDO0lBV3pELDRDQUFtQixhQUFDLE9BQTJCO0lBVy9DLDZCQUFJLGFBQUMsT0FBMkI7Ozs7Ozt5QkF0UWxDO0VBNE5vQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8vIEJpb21ldHJpYyB0eXBlXG5leHBvcnQgdHlwZSBCSU9NRVRSSUNfVFlQRSA9ICdmaW5nZXInIHwgJ2ZhY2UnIHwgJ2Jpb21ldHJpYyc7XG5cbmV4cG9ydCBlbnVtIEJJT01FVFJJQ19FUlJPUlMge1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19VTktOT1dOX0VSUk9SID0gLTEwMCxcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfVU5BVkFJTEFCTEUgPSAtMTAxLFxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19BVVRIRU5USUNBVElPTl9GQUlMRUQgPSAtMTAyLFxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19TREtfTk9UX1NVUFBPUlRFRCA9IC0xMDMsXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0hBUkRXQVJFX05PVF9TVVBQT1JURUQgPSAtMTA0LFxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19QRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gLTEwNSxcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfTk9UX0VOUk9MTEVEID0gLTEwNixcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfSU5URVJOQUxfUExVR0lOX0VSUk9SID0gLTEwNyxcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfRElTTUlTU0VEID0gLTEwOCxcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfUElOX09SX1BBVFRFUk5fRElTTUlTU0VEID0gLTEwOSxcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfU0NSRUVOX0dVQVJEX1VOU0VDVVJFRCA9IC0xMTAsXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0xPQ0tFRF9PVVQgPSAtMTExLFxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19MT0NLRURfT1VUX1BFUk1BTkVOVCA9IC0xMTIsXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1NFQ1JFVF9OT1RfRk9VTkQgPSAtMTEzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZ2VycHJpbnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRpdGxlIGluIGJpb21ldHJpYyBwcm9tcHQgKGFuZHJvaWQgb25seSlcbiAgICpcbiAgICogQGRlZmF1bHQge0FQUF9OQU1FfSBCaW9tZXRyaWMgU2lnbiBPblxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN1YnRpdGxlIGluIGJpb21ldHJpYyBQcm9tcHQgKGFuZHJvaWQgb25seSlcbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgc3VidGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIGluIGJpb21ldHJpYyBQcm9tcHRcbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIGZhbGxiYWNrIGJ1dHRvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgXCJVc2UgUGluXCJcbiAgICovXG4gIGZhbGxiYWNrQnV0dG9uVGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRpdGxlIGZvciBjYW5jZWwgYnV0dG9uIG9uIEFuZHJvaWRcbiAgICpcbiAgICogQGRlZmF1bHQgXCJDYW5jZWxcIlxuICAgKi9cbiAgY2FuY2VsQnV0dG9uVGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgJ3VzZSBiYWNrdXAnIG9wdGlvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRpc2FibGVCYWNrdXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAoQW5kcm9pZCk6IElmIGZhbHNlIHVzZXIgY29uZmlybWF0aW9uIGlzIE5PVCByZXF1aXJlZCBhZnRlciBhIGJpb21ldHJpYyBoYXMgYmVlbiBhdXRoZW50aWNhdGVkLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlLlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vdHJhaW5pbmcvc2lnbi1pbi9iaW9tZXRyaWMtYXV0aCNuby1leHBsaWNpdC11c2VyLWFjdGlvblxuICAgKi9cbiAgY29uZmlybWF0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50U2VjcmV0T3B0aW9ucyBleHRlbmRzIEZpbmdlcnByaW50T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTdHJpbmcgc2VjcmV0IHRvIGVuY3J5cHQgYW5kIHNhdmUsIHVzZSBzaW1wbGUgc3RyaW5ncyBtYXRjaGluZyB0aGUgcmVnZXggW2EtekEtWjAtOVxcLV0rXG4gICAqL1xuICBzZWNyZXQ6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgYHRydWVgIHNlY3JldCB3aWxsIGJlIGRlbGV0ZWQgd2hlbiBiaW9tZXRyeSBpdGVtcyBhcmUgZGVsZXRlZCBvciBlbnJvbGxlZFxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaW52YWxpZGF0ZU9uRW5yb2xsbWVudD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgRmluZ2VycHJpbnQgQUlPXG4gKiBAZGVzY3JpcHRpb25cbiAqIFVzZSBzaW1wbGUgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gb24gQW5kcm9pZCBhbmQgaU9TLlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpby4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9OaWtsYXNNZXJ6L2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpb1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaW5nZXJwcmludEFJTyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maW5nZXJwcmludC1haW8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhaW86IEZpbmdlcnByaW50QUlPKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZhaW8uc2hvdygpLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKS5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiAgT1Igd2l0aCBvcHRpb25zLi4uXG4gKlxuICogdGhpcy5mYWlvLnNob3coe1xuICogICAgIHRpdGxlOiAnQmlvbWV0cmljIEF1dGhlbnRpY2F0aW9uJywgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IFwiPEFQUF9OQU1FPiBCaW9tZXRyaWMgU2lnbiBPblwiXG4gKiAgICAgc3VidGl0bGU6ICdDb29sZXN0IFBsdWdpbiBldmVyJyAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIGF1dGhlbnRpY2F0ZScgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgZmFsbGJhY2tCdXR0b25UaXRsZTogJ1VzZSBCYWNrdXAnLCAvLyBvcHRpb25hbCB8IFdoZW4gZGlzYWJsZUJhY2t1cCBpcyBmYWxzZSBkZWZhdWx0cyB0byBcIlVzZSBQaW5cIi5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZGlzYWJsZUJhY2t1cCBpcyB0cnVlIGRlZmF1bHRzIHRvIFwiQ2FuY2VsXCJcbiAqICAgICBkaXNhYmxlQmFja3VwOnRydWUsICAvLyBvcHRpb25hbCB8IGRlZmF1bHQ6IGZhbHNlXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmFpby5yZWdpc3RlckJpb21ldHJpY1NlY3JldCh7XG4gKiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgYmlvbWV0cmljIGRlc2NyaXB0aW9uXCIsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgICBzZWNyZXQ6IFwibXktc3VwZXItc2VjcmV0XCIsIC8vIG1hbmRhdG9yeVxuICogICAgICBpbnZhbGlkYXRlT25FbnJvbGxtZW50OiB0cnVlLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IGZhbHNlXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBhbHdheXMgYHRydWVgIG9uIEFuZHJvaWRcbiAqIH0pXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogIC4uLlxuICpcbiAqIHRoaXMuZmFpby5sb2FkQmlvbWV0cmljU2VjcmV0KHtcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIGFsd2F5cyBkaXNhYmxlZCBvbiBBbmRyb2lkXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEZpbmdlcnByaW50T3B0aW9uc1xuICogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmluZ2VycHJpbnRBSU8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbHVnaW5SZWY6ICdGaW5nZXJwcmludCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZ2VycHJpbnRBSU8gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGlzIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCSU9NRVRSSUNfVFlQRT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0IHdoaWNoIGRlcGVuZHMgb24gZGV2aWNlIGFuZCBvcy5cbiAgICogaVBob25lIFggd2lsbCByZXR1cm4gJ2ZhY2UnIG90aGVyIEFuZHJvaWQgb3IgaU9TIGRldmljZXMgd2lsbCByZXR1cm4gJ2ZpbmdlcicgQW5kcm9pZCBQKyB3aWxsIHJldHVybiAnYmlvbWV0cmljJ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPEJJT01FVFJJQ19UWVBFPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIHJlZ2lzdGVyIHNlY3JldFxuICAgKlxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50U2VjcmV0T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWdpc3RlckJpb21ldHJpY1NlY3JldChvcHRpb25zOiBGaW5nZXJwcmludFNlY3JldE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZSBhbmQgbG9hZCBzZWNyZXRcbiAgICpcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2FkQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWVcbiAgICpcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==