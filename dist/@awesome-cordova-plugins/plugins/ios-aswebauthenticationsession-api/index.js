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
var IosASWebauthenticationSessionOriginal = /** @class */ (function (_super) {
    __extends(IosASWebauthenticationSessionOriginal, _super);
    function IosASWebauthenticationSessionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSessionOriginal.prototype.start = function (callbackUrl, authorizeURL) { return cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSessionOriginal.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSessionOriginal.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSessionOriginal.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.platforms = ["iOS"];
    return IosASWebauthenticationSessionOriginal;
}(AwesomeCordovaNativePlugin));
var IosASWebauthenticationSession = new IosASWebauthenticationSessionOriginal();
export { IosASWebauthenticationSession };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCekMsaURBQTBCOzs7O0lBUzNFLDZDQUFLLGFBQUMsV0FBbUIsRUFBRSxZQUFvQjs7Ozs7O3dDQXpDakQ7RUFnQ21ELDBCQUEwQjtTQUFoRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGlcbiAqIEBkZXNjcmlwdGlvblxuICogUGx1Z2luIGZvciBpT1MgMTIgQVNXZWJBdXRoZW50aWNhdGlvblNlc3Npb24gQVBJXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IElvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2lvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbjogaW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb24uc3RhcnQoY2FsbGJhY2tVcmwsIGF1dGhvcml6ZVVSTClcbiAqICAgLnRoZW4oKHJlZGlyZWN0VXJsOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlZGlyZWN0VXJsKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGknLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkFTV2ViQXV0aFNlc3Npb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2p3ZWxrZXIxMTAvY29yZG92YS1wbHVnaW4taW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaScsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0IGFuIGF1dGhlbnRpY2F0aW9uIGZsb3cgaW4gQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrVXJsIHtzdHJpbmd9IENhbGxiYWNrIFVSTCBvZiB5b3VyIEFwcFxuICAgKiBAcGFyYW0gYXV0aG9yaXplVVJMIHtudW1iZXJ9IEF1dGhvcml6YXRpb24gVVJMXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYSBzdHJpbmcgY29udGFpbmluZyB0aGUgcmVkaXJlY3QgVVJMIGFmdGVyIGZpbmlzaGluZyBBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydChjYWxsYmFja1VybDogc3RyaW5nLCBhdXRob3JpemVVUkw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=