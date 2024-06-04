import { __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DNS = /** @class */ (function (_super) {
    __extends(DNS, _super);
    function DNS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNS.prototype.resolve = function (hostname) { return cordova(this, "resolve", {}, arguments); };
    DNS.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DNS, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    DNS.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DNS });
    DNS.pluginName = "DNS";
    DNS.plugin = "cordova-plugin-dns";
    DNS.pluginRef = "cordova.plugins.dns";
    DNS.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNS.platforms = ["Android"];
    DNS = __decorate([], DNS);
    return DNS;
}(AwesomeCordovaNativePlugin));
export { DNS };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DNS, decorators: [{
            type: Injectable
        }], propDecorators: { resolve: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG5zL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUE2QmxCLHVCQUEwQjs7OztJQVFqRCxxQkFBTyxhQUFDLFFBQWdCO3FHQVJiLEdBQUc7eUdBQUgsR0FBRzs7Ozs7O0lBQUgsR0FBRyxrQkFBSCxHQUFHO2NBOUJoQjtFQThCeUIsMEJBQTBCO1NBQXRDLEdBQUc7NEZBQUgsR0FBRztrQkFEZixVQUFVOzhCQVNULE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEROU1xuICogQGRlc2NyaXB0aW9uIEEgcGx1Z2luIGZvciBBcGFjaGUgQ29yZG92YSB0aGF0IGVuYWJsZXMgYXBwbGljYXRpb25zIHRvIG1hbnVhbGx5IHJlc29sdmUgaG9zdG5hbWVzIGludG8gYW4gdW5kZXJseWluZyBuZXR3b3JrIGFkZHJlc3MuIFRoaXMgaXMgbW9zdGx5IHVzZWZ1bCBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgZGV2aWNlJ3MgRE5TIHNlcnZlciBjb25maWd1cmF0aW9uLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBETlMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZG5zL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZG5zOiBETlMpIHsgfVxuICpcbiAqIC4uLlxuICogdGhpcy5kbnMucmVzb2x2ZShob3N0bmFtZSlcbiAqICAgLnRoZW4oXG4gKiAgICAgYWRkcmVzcyA9PiBjb25zb2xlLmxvZygnUmVzb2x2ZWQgJyArIGhvc3RuYW1lICsgJyB0byAnICsgYWRkcmVzcyksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0ZhaWxlZCB0byByZXNvbHZlICcgKyBob3N0bmFtZSArICc6ICcgKyBlcnJvcilcbiAqICAgKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdETlMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kbnMnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZG5zJyxcbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy96ZWdlYmEvY29yZG92YS1wbHVnaW4tZG5zJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRE5TIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVzb2x2ZSBob3N0bmFtZXMgaW50byBhbiB1bmRlcmx5aW5nIG5ldHdvcmsgYWRkcmVzcy5cbiAgICpcbiAgICogQHBhcmFtIGhvc3RuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzb2x1dGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzb2x2ZShob3N0bmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==