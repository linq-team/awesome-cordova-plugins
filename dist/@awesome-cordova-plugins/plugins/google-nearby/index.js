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
import { Observable } from 'rxjs';
var GoogleNearbyOriginal = /** @class */ (function (_super) {
    __extends(GoogleNearbyOriginal, _super);
    function GoogleNearbyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearbyOriginal.prototype.publish = function (message) { return cordova(this, "publish", {}, arguments); };
    GoogleNearbyOriginal.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearbyOriginal.pluginName = "GoogleNearby";
    GoogleNearbyOriginal.plugin = "cordova-plugin-google-nearby";
    GoogleNearbyOriginal.pluginRef = "window.nearby";
    GoogleNearbyOriginal.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearbyOriginal.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearbyOriginal.installVariables = ["API_KEY"];
    GoogleNearbyOriginal.platforms = ["Android"];
    return GoogleNearbyOriginal;
}(AwesomeCordovaNativePlugin));
var GoogleNearby = new GoogleNearbyOriginal();
export { GoogleNearby };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ29vZ2xlLW5lYXJieS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0NBLGdDQUEwQjs7OztJQVExRCw4QkFBTyxhQUFDLE9BQWU7SUFhdkIsZ0NBQVM7Ozs7Ozs7O3VCQXZEWDtFQWtDa0MsMEJBQTBCO1NBQS9DLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEdvb2dsZSBOZWFyYnlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgR29vZ2xlIE5lYXJieSBNZXNzYWdlcyBBUEkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEdvb2dsZU5lYXJieSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9nb29nbGUtbmVhcmJ5L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlTmVhcmJ5OiBHb29nbGVOZWFyYnkpIHsgfVxuICpcbiAqIHRoaXMuZ29vZ2xlTmVhcmJ5LnB1Ymxpc2goJ0hlbGxvJylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmdvb2dsZU5lYXJieS5zdWJzY3JpYmUoKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTmVhcmJ5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlLW5lYXJieScsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5uZWFyYnknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hhaGFoYW5uZXMvY29yZG92YS1wbHVnaW4tZ29vZ2xlLW5lYXJieScsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ29vZ2xlLW5lYXJieSAtLXZhcmlhYmxlIEFQSV9LRVk9XCIxMjM0NTY3ODlcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBJX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVOZWFyYnkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQdWJsaXNoIGEgbWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBtZXNzYWdlIGdvdCBwdWJsaXNoZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHVibGlzaChtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gcmVjZWl2ZSBtZXNzYWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyByZWNlaXZlZCBtZXNzYWdlc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3Vuc3Vic2NyaWJlJyxcbiAgfSlcbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=