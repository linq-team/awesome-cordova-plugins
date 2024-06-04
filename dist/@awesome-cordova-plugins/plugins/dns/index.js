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
var DNSOriginal = /** @class */ (function (_super) {
    __extends(DNSOriginal, _super);
    function DNSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNSOriginal.prototype.resolve = function (hostname) { return cordova(this, "resolve", {}, arguments); };
    DNSOriginal.pluginName = "DNS";
    DNSOriginal.plugin = "cordova-plugin-dns";
    DNSOriginal.pluginRef = "cordova.plugins.dns";
    DNSOriginal.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNSOriginal.platforms = ["Android"];
    return DNSOriginal;
}(AwesomeCordovaNativePlugin));
var DNS = new DNSOriginal();
export { DNS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG5zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEJuRSx1QkFBMEI7Ozs7SUFRakQscUJBQU8sYUFBQyxRQUFnQjs7Ozs7O2NBdEMxQjtFQThCeUIsMEJBQTBCO1NBQXRDLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEROU1xuICogQGRlc2NyaXB0aW9uIEEgcGx1Z2luIGZvciBBcGFjaGUgQ29yZG92YSB0aGF0IGVuYWJsZXMgYXBwbGljYXRpb25zIHRvIG1hbnVhbGx5IHJlc29sdmUgaG9zdG5hbWVzIGludG8gYW4gdW5kZXJseWluZyBuZXR3b3JrIGFkZHJlc3MuIFRoaXMgaXMgbW9zdGx5IHVzZWZ1bCBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgZGV2aWNlJ3MgRE5TIHNlcnZlciBjb25maWd1cmF0aW9uLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBETlMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZG5zL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZG5zOiBETlMpIHsgfVxuICpcbiAqIC4uLlxuICogdGhpcy5kbnMucmVzb2x2ZShob3N0bmFtZSlcbiAqICAgLnRoZW4oXG4gKiAgICAgYWRkcmVzcyA9PiBjb25zb2xlLmxvZygnUmVzb2x2ZWQgJyArIGhvc3RuYW1lICsgJyB0byAnICsgYWRkcmVzcyksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0ZhaWxlZCB0byByZXNvbHZlICcgKyBob3N0bmFtZSArICc6ICcgKyBlcnJvcilcbiAqICAgKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdETlMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kbnMnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZG5zJyxcbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy96ZWdlYmEvY29yZG92YS1wbHVnaW4tZG5zJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRE5TIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVzb2x2ZSBob3N0bmFtZXMgaW50byBhbiB1bmRlcmx5aW5nIG5ldHdvcmsgYWRkcmVzcy5cbiAgICpcbiAgICogQHBhcmFtIGhvc3RuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzb2x1dGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzb2x2ZShob3N0bmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==