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
var LottieSplashScreenOriginal = /** @class */ (function (_super) {
    __extends(LottieSplashScreenOriginal, _super);
    function LottieSplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreenOriginal.prototype.show = function (location, remote, width, height) { return cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.pluginName = "LottieSplashScreen";
    LottieSplashScreenOriginal.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.pluginRef = "lottie.splashscreen";
    LottieSplashScreenOriginal.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.install = "";
    LottieSplashScreenOriginal.installVariables = [];
    LottieSplashScreenOriginal.platforms = ["Android", "iOS"];
    return LottieSplashScreenOriginal;
}(AwesomeCordovaNativePlugin));
var LottieSplashScreen = new LottieSplashScreenOriginal();
export { LottieSplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG90dGllLXNwbGFzaC1zY3JlZW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnQ3BELHNDQUEwQjs7OztJQVloRSxpQ0FBSSxhQUFDLFFBQWlCLEVBQUUsTUFBZ0IsRUFBRSxLQUFjLEVBQUUsTUFBZTtJQU16RSxpQ0FBSTs7Ozs7Ozs7NkJBbkROO0VBaUN3QywwQkFBMEI7U0FBckQsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBMb3R0aWUgU3BsYXNoIFNjcmVlblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBzaG93IGJvZHltb3Zpbi9Mb3R0aWUgYW5pbWF0aW9ucyBhcyB0aGUgc3BsYXNoIHNjcmVlbiB3aXRoIEFpcmJuYidzIExvdHRpZSB3cmFwcGVyXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExvdHRpZVNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9sb3R0aWUtc3BsYXNoLXNjcmVlbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvdHRpZVNwbGFzaFNjcmVlbjogTG90dGllU3BsYXNoU2NyZWVuKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5sb3R0aWVTcGxhc2hTY3JlZW4uc2hvdygnd3d3L2xvdHRpZS9hbmltYXRpb24uanNvbicsIGZhbHNlLCAxMDI0LCA3NjgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG90dGllU3BsYXNoU2NyZWVuJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbG90dGllLXNwbGFzaHNjcmVlbicsXG4gIHBsdWdpblJlZjogJ2xvdHRpZS5zcGxhc2hzY3JlZW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWJydTMxL2NvcmRvdmEtcGx1Z2luLWxvdHRpZS1zcGxhc2hzY3JlZW4nLFxuICBpbnN0YWxsOiAnJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb3R0aWVTcGxhc2hTY3JlZW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNob3dzIGEgTG90dGllIHNwbGFzaCBzY3JlZW4uIElmIG5vIGFyZ3VtZW50cyBhcmUgZ2l2ZW4sIGl0IGRlZmF1bHRzIHRvIHRoZSBjb25maWcueG1sIHZhbHVlcywgaG93ZXZlciB5b3UgY2FuIHBhc3MgKG5ldykgb3B0aW9ucyBoZXJlIHRvIGNoYW5nZSB0aGUgYmVoYXZpb3Igb24gcnVudGltZS4gKEZvciBlYXNpZXIgcmVhZGluZyB0aGUgVHlwZVNjcmlwdCBub3RhdGlvbiBpcyB1c2VkKVxuICAgKlxuICAgKiBAcGFyYW0gbG9jYXRpb24ge3N0cmluZ30gTG9jYXRpb24gb2YgdGhlIExvdHRpZSBKU09OIGZpbGUgdGhhdCBzaG91bGQgYmUgbG9hZGVkLlxuICAgKiBAcGFyYW0gcmVtb3RlIHtudW1iZXJ9IFRvZ2dsZXMgTG90dGllJ3MgcmVtb3RlIG1vZGUgd2hpY2ggYWxsb3dzIGZpbGVzIHRvIGJlIGRvd25sb2FkZWQvZGlzcGxheWVkIGZyb20gVVJMcy4gRXhhbXBsZTpcbiAgICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFdpZHRoIG9mIHRoZSBjb250YWluZXIgdGhhdCdzIHJlbmRlcmluZyB0aGUgTG90dGllIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IEhlaWdodCBvZiB0aGUgY29udGFpbmVyIHRoYXQncyByZW5kZXJpbmcgdGhlIExvdHRpZSBhbmltYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzaG93KGxvY2F0aW9uPzogc3RyaW5nLCByZW1vdGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZHMgaGlkZXMgdGhlIGN1cnJlbnQgYWN0aXZlIExvdHRpZSBzcGxhc2hzY3JlZW4gYW5kIGRlc3Ryb3lzIHRoZSB2aWV3cy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cbn1cbiJdfQ==