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
var LineLoginOriginal = /** @class */ (function (_super) {
    __extends(LineLoginOriginal, _super);
    function LineLoginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLoginOriginal.prototype.initialize = function (param) { return cordova(this, "initialize", {}, arguments); };
    LineLoginOriginal.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    LineLoginOriginal.prototype.loginWeb = function () { return cordova(this, "loginWeb", {}, arguments); };
    LineLoginOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    LineLoginOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.verifyAccessToken = function () { return cordova(this, "verifyAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.refreshAccessToken = function () { return cordova(this, "refreshAccessToken", {}, arguments); };
    LineLoginOriginal.pluginName = "LineLogin";
    LineLoginOriginal.plugin = "cordova-line-login-plugin";
    LineLoginOriginal.pluginRef = "lineLogin";
    LineLoginOriginal.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLoginOriginal.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLoginOriginal.installVariables = ["LINE_CHANNEL_ID"];
    LineLoginOriginal.platforms = ["Android", "iOS"];
    return LineLoginOriginal;
}(AwesomeCordovaNativePlugin));
var LineLogin = new LineLoginOriginal();
export { LineLogin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGluZS1sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdGN0QsNkJBQTBCOzs7O0lBUXZELDhCQUFVLGFBQUMsS0FBc0I7SUFVakMseUJBQUs7SUFXTCw0QkFBUTtJQVVSLDBCQUFNO0lBVU4sa0NBQWM7SUFVZCxxQ0FBaUI7SUFVakIsc0NBQWtCOzs7Ozs7OztvQkF0SnBCO0VBaUYrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUxvZ2luUGFyYW1zIHtcbiAgLyoqXG4gICAqIExpbmUgQ2hhbm5lbCBJRFxuICAgKi9cbiAgY2hhbm5lbF9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpblByb2ZpbGUge1xuICAvKipcbiAgICogTGluZSBVc2VyIElEXG4gICAqL1xuICB1c2VySUQ6IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBQcm9maWxlIEltYWdlIFVSTFxuICAgKi9cbiAgcGljdHVyZVVSTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaW5lIFByb2ZpbGUgTmFtZVxuICAgKi9cbiAgZGlzcGxheU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRW1haWxcbiAgICovXG4gIGVtYWlsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpbkFjY2Vzc1Rva2VuIHtcbiAgLyoqXG4gICAqIExpbmUgQWNjZXNzIFRva2VuXG4gICAqL1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaW5lIEFjY2VzcyBUb2tlbiBFeHBpcmUgVGltZVxuICAgKi9cbiAgZXhwaXJlVGltZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIExpbmUgTG9naW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGxvZ2luLCBsb2dzIG91dCwgYWNxdWlyZXMsIHZlcmlmaWVzLCBhbmQgcmVmcmVzaGVzIHRoZSBhY2Nlc3MgdG9rZW4uIFRoZSB2ZXJzaW9uIG9mIExpbmVTREsgeW91IGFyZSB1c2luZyBpcyBhcyBmb2xsb3dzLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMaW5lTG9naW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbGluZS1sb2dpbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpbmVMb2dpbjogTGluZUxvZ2luKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5saW5lTG9naW4uaW5pdGlhbGl6ZSh7IGNoYW5uZWxfaWQ6IFwieHh4eHh4eHh4eFwiIH0pXG4gKlxuICogdGhpcy5saW5lTG9naW4ubG9naW4oKVxuICogICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBMaW5lTG9naW5QYXJhbXNcbiAqIExpbmVMb2dpblByb2ZpbGVcbiAqIExpbmVMb2dpbkFjY2Vzc1Rva2VuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTGluZUxvZ2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ2xpbmVMb2dpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbnJpa2lqaS9jb3Jkb3ZhLWxpbmUtbG9naW4tcGx1Z2luJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4uZ2l0IC0tdmFyaWFibGUgTElORV9DSEFOTkVMX0lEPVwieW91cl9saW5lX2NoYW5uZWxfaWRcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnTElORV9DSEFOTkVMX0lEJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaW5lTG9naW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbSBMaW5lTG9naW5QYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdGlhbGl6ZShwYXJhbTogTGluZUxvZ2luUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9naW5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB3aXRoIFdlYlxuICAgKiAoaU9TIG9ubHkpXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbldlYigpOiBQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQWNjZXNzIFRva2VuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExpbmVMb2dpbkFjY2Vzc1Rva2VuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxMaW5lTG9naW5BY2Nlc3NUb2tlbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgQWNjZXNzVG9rZW5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdmVyaWZ5QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBBY2Nlc3MgVG9rZW5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVmcmVzaEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=