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
var FirebaseCrashOriginal = /** @class */ (function (_super) {
    __extends(FirebaseCrashOriginal, _super);
    function FirebaseCrashOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashOriginal.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.logError = function (message) { return cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrashOriginal.pluginName = "FirebaseCrash";
    FirebaseCrashOriginal.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrashOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.platforms = ["Android", "iOS"];
    return FirebaseCrashOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseCrash = new FirebaseCrashOriginal();
export { FirebaseCrash };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtY3Jhc2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE0QnpELGlDQUEwQjs7OztJQVMzRCwyQkFBRyxhQUFDLE9BQWU7SUFZbkIsZ0NBQVEsYUFBQyxPQUFlO0lBWXhCLGlDQUFTLGFBQUMsTUFBYzs7Ozs7O3dCQTlEMUI7RUE2Qm1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBGaXJlYmFzZUNyYXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGJyaW5ncyBjcmFzaCByZXBvcnRpbmcgZnJvbSBHb29nbGUgRmlyZWJhc2UgdG8geW91ciBDb3Jkb3ZhIHByb2plY3QhIEFuZHJvaWQgYW5kIGlPUyBzdXBwb3J0ZWQuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlQ3Jhc2ggfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlyZWJhc2UtY3Jhc2gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VDcmFzaDogRmlyZWJhc2VDcmFzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maXJlYmFzZUNyYXNoLnNldFVzZXJJZCgnMTIzNDU2Nzg5Jyk7XG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2gubG9nKCdtZXNzYWdlJyk7XG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2gubG9nRXJyb3IoJ25vbiBmYXRhbCBleGNlcHRpb24nKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZUNyYXNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY3Jhc2gnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZmlyZWJhc2UuY3Jhc2hseXRpY3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY3Jhc2gnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VDcmFzaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEFkZCBsb2dnaW5nIHRoYXQgd2lsbCBiZSBzZW50IHdpdGggeW91ciBjcmFzaCBkYXRhIGluIGNhc2Ugb2YgYXBwIGNyYXNoLlxuICAgKiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9jcmFzaGx5dGljcy9jdXN0b21pemUtY3Jhc2gtcmVwb3J0cz9hdXRodXNlcj0wI2FkZF9jdXN0b21fbG9nc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgbm9uLWZhdGFsIGV4Y2VwdGlvbnMgaW4gYWRkaXRpb24gdG8gYXV0b21hdGljYWxseSByZXBvcnRlZCBhcHAgY3Jhc2hlcy5cbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNsb2dfbm9uLWZhdGFsX2V4Y2VwdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBsb2dFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB1c2VyIGlkZW50aWZpZXIgcHJvcGVydHkgZm9yIGNyYXNobHl0aWNzIHJlcG9ydGluZy5cbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNzZXRfdXNlcl9pZHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCB2YWx1ZSB0byBzZXQgdGhlIHVzZXJJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=