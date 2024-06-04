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
var SSLCertificateCheckerOriginal = /** @class */ (function (_super) {
    __extends(SSLCertificateCheckerOriginal, _super);
    function SSLCertificateCheckerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSLCertificateCheckerOriginal.prototype.check = function (serverURL, allowedFingerprint) { return cordova(this, "check", {}, arguments); };
    SSLCertificateCheckerOriginal.prototype.checkInCertChain = function (serverURL, allowedFingerprint) { return cordova(this, "checkInCertChain", {}, arguments); };
    SSLCertificateCheckerOriginal.pluginName = "SSLCertificateChecker";
    SSLCertificateCheckerOriginal.plugin = "SSLCertificateChecker-PhoneGap-Plugin";
    SSLCertificateCheckerOriginal.pluginRef = "SSLCertificateChecker";
    SSLCertificateCheckerOriginal.repo = "https://github.com/EddyVerbruggen/SSLCertificateChecker-PhoneGap-Plugin";
    SSLCertificateCheckerOriginal.platforms = ["Android", "iOS"];
    return SSLCertificateCheckerOriginal;
}(AwesomeCordovaNativePlugin));
var SSLCertificateChecker = new SSLCertificateCheckerOriginal();
export { SSLCertificateChecker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3NsLWNlcnRpZmljYXRlLWNoZWNrZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFtQ2pELHlDQUEwQjs7OztJQVFuRSxxQ0FBSyxhQUFDLFNBQWlCLEVBQUUsa0JBQTBCO0lBY25ELGdEQUFnQixhQUFDLFNBQWlCLEVBQUUsa0JBQTBCOzs7Ozs7Z0NBMURoRTtFQW9DMkMsMEJBQTBCO1NBQXhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU1NMQ2VydGlmaWNhdGVDaGVja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIGNoZWNrIFNTTCBjZXJ0aWZpY2F0ZXMgb24gQW5kcm9pZCBhbmQgaU9TLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU1NMQ2VydGlmaWNhdGVDaGVja2VyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NzbC1jZXJ0aWZpY2F0ZS1jaGVja2VyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNzbENlcnRpZmljYXRlQ2hlY2tlcjogU1NMQ2VydGlmaWNhdGVDaGVja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNzbENlcnRpZmljYXRlQ2hlY2tlci5jaGVjayhzZXJ2ZXJVUkwsIGFsbG93ZWRGaW5nZXJwcmludClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0NlcnRpZmljYXRlIGlzIHZhbGlkJykpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdDZXJ0aWZpY2F0ZSBpcyBpbnZhbGlkJywgZXJyb3IpKTtcbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNzbENlcnRpZmljYXRlQ2hlY2tlci5jaGVja0luQ2VydENoYWluKHNlcnZlclVSTCwgYWxsb3dlZEZpbmdlcnByaW50KVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQ2VydGlmaWNhdGUgY2hhaW4gaXMgdmFsaWQnKSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0NlcnRpZmljYXRlIGNoYWluIGlzIGludmFsaWQnLCBlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NTTENlcnRpZmljYXRlQ2hlY2tlcicsXG4gIHBsdWdpbjogJ1NTTENlcnRpZmljYXRlQ2hlY2tlci1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdTU0xDZXJ0aWZpY2F0ZUNoZWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1NTTENlcnRpZmljYXRlQ2hlY2tlci1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1NMQ2VydGlmaWNhdGVDaGVja2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBTU0wgY2VydGlmaWNhdGUgb2YgdGhlIHNwZWNpZmllZCBzZXJ2ZXIgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgZmluZ2VycHJpbnQuXG4gICAqIEBwYXJhbSBzZXJ2ZXJVUkwgLSBUaGUgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gY2hlY2suXG4gICAqIEBwYXJhbSBhbGxvd2VkRmluZ2VycHJpbnQgLSBUaGUgYWxsb3dlZCBTSEEtMSBmaW5nZXJwcmludC5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgY2VydGlmaWNhdGUgaXMgdmFsaWQsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrKHNlcnZlclVSTDogc3RyaW5nLCBhbGxvd2VkRmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAoTm90IHJlY29tbWVuZGVkIGluIHZlcnNpb25zIGhpZ2hlciB0aGFuIDQuMC4wKVxuICAgKiBDaGVja3MgaWYgdGhlIFNTTCBjZXJ0aWZpY2F0ZSBvZiB0aGUgc3BlY2lmaWVkIHNlcnZlciBpcyBpbiB0aGUgY2VydGlmaWNhdGUgY2hhaW5cbiAgICogYW5kIG1hdGNoZXMgdGhlIHByb3ZpZGVkIGZpbmdlcnByaW50LlxuICAgKiBAcGFyYW0gc2VydmVyVVJMIC0gVGhlIFVSTCBvZiB0aGUgc2VydmVyIHRvIGNoZWNrLlxuICAgKiBAcGFyYW0gYWxsb3dlZEZpbmdlcnByaW50IC0gVGhlIGFsbG93ZWQgU0hBLTEgZmluZ2VycHJpbnQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGNlcnRpZmljYXRlIGNoYWluIGlzIHZhbGlkLCBvdGhlcndpc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKiBAZGVwcmVjYXRlZCBUaGlzIGZ1bmN0aW9uIGlzIGNvbnNpZGVyZWQgaW5zZWN1cmUuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrSW5DZXJ0Q2hhaW4oc2VydmVyVVJMOiBzdHJpbmcsIGFsbG93ZWRGaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=