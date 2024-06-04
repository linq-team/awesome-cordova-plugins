import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var GoogleNearby = /** @class */ (function (_super) {
    __extends(GoogleNearby, _super);
    function GoogleNearby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearby.prototype.publish = function (message) { return cordova(this, "publish", {}, arguments); };
    GoogleNearby.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearby.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GoogleNearby, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    GoogleNearby.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GoogleNearby });
    GoogleNearby.pluginName = "GoogleNearby";
    GoogleNearby.plugin = "cordova-plugin-google-nearby";
    GoogleNearby.pluginRef = "window.nearby";
    GoogleNearby.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearby.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearby.installVariables = ["API_KEY"];
    GoogleNearby.platforms = ["Android"];
    GoogleNearby = __decorate([], GoogleNearby);
    return GoogleNearby;
}(AwesomeCordovaNativePlugin));
export { GoogleNearby };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GoogleNearby, decorators: [{
            type: Injectable
        }], propDecorators: { publish: [], subscribe: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ29vZ2xlLW5lYXJieS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFnQ0EsZ0NBQTBCOzs7O0lBUTFELDhCQUFPLGFBQUMsT0FBZTtJQWF2QixnQ0FBUzs4R0FyQkUsWUFBWTtrSEFBWixZQUFZOzs7Ozs7OztJQUFaLFlBQVksa0JBQVosWUFBWTt1QkFsQ3pCO0VBa0NrQywwQkFBMEI7U0FBL0MsWUFBWTs0RkFBWixZQUFZO2tCQUR4QixVQUFVOzhCQVNULE9BQU8sTUFhUCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBHb29nbGUgTmVhcmJ5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFkZHMgc3VwcG9ydCBmb3IgdGhlIEdvb2dsZSBOZWFyYnkgTWVzc2FnZXMgQVBJLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVOZWFyYnkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ29vZ2xlLW5lYXJieS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZU5lYXJieTogR29vZ2xlTmVhcmJ5KSB7IH1cbiAqXG4gKiB0aGlzLmdvb2dsZU5lYXJieS5wdWJsaXNoKCdIZWxsbycpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5nb29nbGVOZWFyYnkuc3Vic2NyaWJlKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU5lYXJieScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZS1uZWFyYnknLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cubmVhcmJ5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYWhhaGFubmVzL2NvcmRvdmEtcGx1Z2luLWdvb2dsZS1uZWFyYnknLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdvb2dsZS1uZWFyYnkgLS12YXJpYWJsZSBBUElfS0VZPVwiMTIzNDU2Nzg5XCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQSV9LRVknXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlTmVhcmJ5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUHVibGlzaCBhIG1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBwdWJsaXNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbWVzc2FnZSBnb3QgcHVibGlzaGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHB1Ymxpc2gobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHJlY2VpdmUgbWVzc2FnZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgcmVjZWl2ZWQgbWVzc2FnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bnN1YnNjcmliZScsXG4gIH0pXG4gIHN1YnNjcmliZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19