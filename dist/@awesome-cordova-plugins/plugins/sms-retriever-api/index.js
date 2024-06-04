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
import { Observable, fromEvent } from 'rxjs';
export var SmsRetrieverStatus;
(function (SmsRetrieverStatus) {
    SmsRetrieverStatus["AlreadyStarted"] = "SMS_RETRIEVER_ALREADY_STARTED";
    SmsRetrieverStatus["Started"] = "SMS_RETRIEVER_STARTED";
    SmsRetrieverStatus["Done"] = "SMS_RETRIEVER_DONE";
    SmsRetrieverStatus["Timeout"] = "TIMEOUT";
})(SmsRetrieverStatus || (SmsRetrieverStatus = {}));
var SmsRetrieverApiOriginal = /** @class */ (function (_super) {
    __extends(SmsRetrieverApiOriginal, _super);
    function SmsRetrieverApiOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetrieverApiOriginal.prototype.startWatch = function () { return cordova(this, "startWatch", { "observable": true }, arguments); };
    SmsRetrieverApiOriginal.prototype.stopWatch = function () { return cordova(this, "stopWatch", {}, arguments); };
    SmsRetrieverApiOriginal.prototype.getHashString = function () { return cordova(this, "getHashString", {}, arguments); };
    SmsRetrieverApiOriginal.prototype.getPhoneNumber = function () { return cordova(this, "getPhoneNumber", {}, arguments); };
    /**
     * Watch incoming SMS event listener
     *
     * @returns {Observable<IncomingSMS>}
     */
    SmsRetrieverApiOriginal.prototype.onSMSArrive = function () {
        return fromEvent(document, 'onSMSArrive');
    };
    SmsRetrieverApiOriginal.pluginName = "SmsRetriever";
    SmsRetrieverApiOriginal.plugin = "cordova-plugin-sms-retriever";
    SmsRetrieverApiOriginal.pluginRef = "cordova.plugins.SMSRetriever";
    SmsRetrieverApiOriginal.repo = "https://github.com/andreszs/cordova-plugin-sms-retriever";
    SmsRetrieverApiOriginal.install = "ionic cordova plugin add cordova-plugin-sms-retriever --variable PLAY_SERVICES_VERSION=\"18.0.1\"";
    SmsRetrieverApiOriginal.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetrieverApiOriginal.platforms = ["Android"];
    return SmsRetrieverApiOriginal;
}(AwesomeCordovaNativePlugin));
var SmsRetrieverApi = new SmsRetrieverApiOriginal();
export { SmsRetrieverApi };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zLXJldHJpZXZlci1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU83QyxNQUFNLENBQU4sSUFBWSxrQkFLWDtBQUxELFdBQVksa0JBQWtCO0lBQzVCLHNFQUFnRCxDQUFBO0lBQ2hELHVEQUFpQyxDQUFBO0lBQ2pDLGlEQUEyQixDQUFBO0lBQzNCLHlDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBSzdCOztJQXVDb0MsbUNBQTBCOzs7O0lBUzdELG9DQUFVO0lBVVYsbUNBQVM7SUFVVCx1Q0FBYTtJQVViLHdDQUFjO0lBSWQ7Ozs7T0FJRztJQUNILHFDQUFXLEdBQVg7UUFDRSxPQUFPLFNBQVMsQ0FBYyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7MEJBdkdIO0VBcURxQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbmNvbWluZ1NNUyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgZW51bSBTbXNSZXRyaWV2ZXJTdGF0dXMge1xuICBBbHJlYWR5U3RhcnRlZCA9ICdTTVNfUkVUUklFVkVSX0FMUkVBRFlfU1RBUlRFRCcsXG4gIFN0YXJ0ZWQgPSAnU01TX1JFVFJJRVZFUl9TVEFSVEVEJyxcbiAgRG9uZSA9ICdTTVNfUkVUUklFVkVSX0RPTkUnLFxuICBUaW1lb3V0ID0gJ1RJTUVPVVQnLFxufVxuXG4vKipcbiAqIEBuYW1lIFNtc1JldHJpZXZlckFwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiByZXRyaWVzIHRoZSBTTVMgd2hpY2ggYXJyaXZlIHdpdGhvdXQgcmVxdWlyaW5nIFJFQUQgcGVybWlzc2lvbnMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNtc1JldHJpZXZlckFwaSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zbXMtcmV0cmlldmVyLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIFNtc1JldHJpZXZlckFwaTogU21zUmV0cmlldmVyQXBpKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5TbXNSZXRyaWV2ZXJBcGkuZ2V0SGFzaFN0cmluZygpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiB0aGlzLlNtc1JldHJpZXZlckFwaS5zdGFydFdhdGNoKClcbiAqICAgLnN1YnNjcmliZShcbiAqICAgIChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSxcbiAqICAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAqICAgKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqIHRoaXMub25TTVNBcnJpdmUub25TTVNBcnJpdmUoKVxuICogICAuc3Vic2NyaWJlKCgpID0+IHsgY29uc29sZS5sb2coKTsgfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTbXNSZXRyaWV2ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zbXMtcmV0cmlldmVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNNU1JldHJpZXZlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYW5kcmVzenMvY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlcicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlciAtLXZhcmlhYmxlIFBMQVlfU0VSVklDRVNfVkVSU0lPTj1cIjE4LjAuMVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQTEFZX1NFUlZJQ0VTX1ZFUlNJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU21zUmV0cmlldmVyQXBpIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdGFydCB3YXRjaGluZyBtZXNzYWdlIGFycml2ZSBldmVudCBhbmQgcmV0cmlldmUgbWVzc2FnZSB0ZXh0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxzdHJpbmc+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCByZXNvbHZlcyB3aGVuIHJldHJpZXMgU01TIHRleHQgb3IgVElNRU9VVCBhZnRlciA1IG1pbi5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBzdGFydFdhdGNoKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcCB3YXRjaGluZyBtZXNzYWdlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc3VjY2Vzc2Z1bGx5IHJlbW92ZSBzbXMgbGlzdGVuZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BXYXRjaCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGdldCBoYXNoIHN0cmluZyBvZiBBUFAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzdWNjZXNzZnVsbHkgZ2VuZXJhdGUgaGFzaCBvZiBBUFAuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEhhc2hTdHJpbmcoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBkaWFsb2cgdG8gc2VsZWN0IHlvdXIgbW9iaWxlIG51bWJlcnMgc2F2ZWQgaW4gcGhvbmUgYW5kIHJldHVybnMgc2VsZWN0ZWQgcGhvbmUgbnVtYmVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc3VjY2Vzc2Z1bGx5IGdldCBwaG9uZSBudW1iZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UGhvbmVOdW1iZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggaW5jb21pbmcgU01TIGV2ZW50IGxpc3RlbmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEluY29taW5nU01TPn1cbiAgICovXG4gIG9uU01TQXJyaXZlKCk6IE9ic2VydmFibGU8SW5jb21pbmdTTVM+IHtcbiAgICByZXR1cm4gZnJvbUV2ZW50PEluY29taW5nU01TPihkb2N1bWVudCwgJ29uU01TQXJyaXZlJyk7XG4gIH1cbn1cbiJdfQ==