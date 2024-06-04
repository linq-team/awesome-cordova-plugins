import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var SmsRetriever = /** @class */ (function (_super) {
    __extends(SmsRetriever, _super);
    function SmsRetriever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetriever.prototype.startWatching = function () { return cordova(this, "startWatching", {}, arguments); };
    SmsRetriever.prototype.getAppHash = function () { return cordova(this, "getAppHash", {}, arguments); };
    SmsRetriever.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SmsRetriever, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SmsRetriever.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SmsRetriever });
    SmsRetriever.pluginName = "SmsRetriever";
    SmsRetriever.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetriever.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetriever.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetriever.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetriever.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetriever.platforms = ["Android"];
    SmsRetriever = __decorate([], SmsRetriever);
    return SmsRetriever;
}(AwesomeCordovaNativePlugin));
export { SmsRetriever };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SmsRetriever, decorators: [{
            type: Injectable
        }], propDecorators: { startWatching: [], getAppHash: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zLXJldHJpZXZlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBbUMxRCxnQ0FBMEI7Ozs7SUFPMUQsb0NBQWE7SUFVYixpQ0FBVTs4R0FqQkMsWUFBWTtrSEFBWixZQUFZOzs7Ozs7OztJQUFaLFlBQVksa0JBQVosWUFBWTt1QkFwQ3pCO0VBb0NrQywwQkFBMEI7U0FBL0MsWUFBWTs0RkFBWixZQUFZO2tCQUR4QixVQUFVOzhCQVFULGFBQWEsTUFVYixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTbXMgUmV0cmlldmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHJldHJpdmVzIHRoZSBTTVMgd2hpY2ggYXJyaXZlIHdpdGhvdXQgcmVxdWlyaW5nIFJFQUQgcGVybWlzc2lvbnMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNtc1JldHJpZXZlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zbXMtcmV0cmlldmVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc21zUmV0cmlldmVyOiBTbXNSZXRyaWV2ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnNtc1JldHJpZXZlci5nZXRBcHBIYXNoKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqIHRoaXMuc21zUmV0cmlldmVyLnN0YXJ0V2F0Y2hpbmcoKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Ntc1JldHJpZXZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNtcy1yZXRyaWV2ZXItbWFuYWdlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5zbXNSZXRyaWV2ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hhbmF0aGFyZXNoMjcxMi9pb25pYy1uYXRpdmUtc21zLXJldHJpZXZlci1wbHVnaW4tbWFzdGVyJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1zbXMtcmV0cmlldmVyLW1hbmFnZXIgLS12YXJpYWJsZSBQTEFZX1NFUlZJQ0VTX1ZFUlNJT049XCIxNS4wLjFcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUExBWV9TRVJWSUNFU19WRVJTSU9OJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNtc1JldHJpZXZlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RhcnQgd2F0aGNoaW5nIG1lc3NhZ2UgYXJyaXZlIGV2ZW50IGFuZCByZXRyaXZlIG1lc3NhZ2UgdGV4dC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHJldHJpdmVzIFNNUyB0ZXh0IG9yIFRJTUVPVVQgYWZ0ZXIgNSBtaW4uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0V2F0Y2hpbmcoKTogUHJvbWlzZTx7IE1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgdG8gZ2V0IGhhc2ggc3RyaW5nIG9mIEFQUC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHN1Y2Nlc3NmdWxseSBnZW5lcmF0ZSBoYXNoIG9mIEFQUC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwSGFzaCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19