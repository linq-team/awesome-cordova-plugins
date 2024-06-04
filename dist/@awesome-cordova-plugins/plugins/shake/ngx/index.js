import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    Shake.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Shake, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Shake.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Shake });
    Shake.pluginName = "Shake";
    Shake.plugin = "cordova-plugin-shake";
    Shake.pluginRef = "shake";
    Shake.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    Shake.platforms = ["iOS"];
    Shake = __decorate([], Shake);
    return Shake;
}(AwesomeCordovaNativePlugin));
export { Shake };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Shake, decorators: [{
            type: Injectable
        }], propDecorators: { startWatch: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2hha2Uvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBMkJQLHlCQUEwQjs7OztJQWFuRCwwQkFBVSxhQUFDLFdBQW9CO3VHQWJwQixLQUFLOzJHQUFMLEtBQUs7Ozs7OztJQUFMLEtBQUssa0JBQUwsS0FBSztnQkE3QmxCO0VBNkIyQiwwQkFBMEI7U0FBeEMsS0FBSzs0RkFBTCxLQUFLO2tCQURqQixVQUFVOzhCQWNULFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBAbmFtZSBTaGFrZVxuICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgc2hha2UgZ2VzdHVyZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTaGFrZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zaGFrZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hha2U6IFNoYWtlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCB3YXRjaCA9IHRoaXMuc2hha2Uuc3RhcnRXYXRjaCg2MCkuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgLy8gZG8gc29tZXRoaW5nXG4gKiAgIH0pO1xuICpcbiAqIHdhdGNoLnVuc3Vic2NyaWJlKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTaGFrZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcbiAgcGx1Z2luUmVmOiAnc2hha2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xlZWNyb3NzbGV5L2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFrZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFdhdGNoIGZvciBzaGFrZSBnZXN0dXJlXG4gICAqXG4gICAqIEBwYXJhbSBzZW5zaXRpdml0eSB7bnVtYmVyfSBPcHRpb25hbCBzZW5zaXRpdml0eSBwYXJhbWV0ZXIuIERlZmF1bHRzIHRvIDQwXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcFdhdGNoJyxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc3RhcnRXYXRjaChzZW5zaXRpdml0eT86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=