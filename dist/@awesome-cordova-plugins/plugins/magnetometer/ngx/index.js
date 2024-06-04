import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var Magnetometer = /** @class */ (function (_super) {
    __extends(Magnetometer, _super);
    function Magnetometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magnetometer.prototype.getReading = function () { return cordova(this, "getReading", {}, arguments); };
    Magnetometer.prototype.watchReadings = function () { return cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    Magnetometer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Magnetometer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Magnetometer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Magnetometer });
    Magnetometer.pluginName = "Magnetometer";
    Magnetometer.plugin = "cordova-plugin-magnetometer";
    Magnetometer.pluginRef = "cordova.plugins.magnetometer";
    Magnetometer.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    Magnetometer.platforms = ["Android", "iOS"];
    Magnetometer = __decorate([], Magnetometer);
    return Magnetometer;
}(AwesomeCordovaNativePlugin));
export { Magnetometer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Magnetometer, decorators: [{
            type: Injectable
        }], propDecorators: { getReading: [], watchReadings: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWFnbmV0b21ldGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQTREQSxnQ0FBMEI7Ozs7SUFNMUQsaUNBQVU7SUFlVixvQ0FBYTs4R0FyQkYsWUFBWTtrSEFBWixZQUFZOzs7Ozs7SUFBWixZQUFZLGtCQUFaLFlBQVk7dUJBOUR6QjtFQThEa0MsMEJBQTBCO1NBQS9DLFlBQVk7NEZBQVosWUFBWTtrQkFEeEIsVUFBVTs4QkFPVCxVQUFVLE1BZVYsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFnbmV0b21ldGVyUmVhZGluZyB7XG4gIC8qKlxuICAgKiBYIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgeDogbnVtYmVyO1xuICAvKipcbiAgICogWSByZWFkaW5nIG9mIG1hZ25ldG9tZXRlci4gKE51bWJlcilcbiAgICovXG4gIHk6IG51bWJlcjtcbiAgLyoqXG4gICAqIFogcmVhZGluZyBvZiBtYWduZXRvbWV0ZXIuIChOdW1iZXIpXG4gICAqL1xuICB6OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDYWxjdWxhdGVkIHRvdGFsIC0gYWx3YXlzIHBvc2l0aXZlIG9mIG1hZ25ldG9tZXRlci4gKE51bWJlcilcbiAgICovXG4gIG1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIERldmljZSBlTWFnbmV0b21ldGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0RldmljZSBPcmllbnRhdGlvbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vc2Rlc2FsYXMvY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIC8vIE1hZ25ldG9tZXRlclJlYWRpbmcgaXMgYW4gaW50ZXJmYWNlIGZvciBjb21wYXNzXG4gKiBpbXBvcnQgeyBNYWduZXRvbWV0ZXIsIE1hZ25ldG9tZXRlclJlYWRpbmcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZGV2aWNlLW9yaWVudGF0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtYWduZXRvbWV0ZXI6IE1hZ25ldG9tZXRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gR2V0IHRoZSBkZXZpY2UgY3VycmVudCBjb21wYXNzIGhlYWRpbmdcbiAqIHRoaXMubWFnbmV0b21ldGVyLmdldFJlYWRpbmcoKS50aGVuKFxuICogICAoZGF0YTogTWFnbmV0b21ldGVyUmVhZGluZykgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICk7XG4gKlxuICogLy8gV2F0Y2ggdGhlIGRldmljZSBjb21wYXNzIGhlYWRpbmcgY2hhbmdlXG4gKiB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5tYWduZXRvbWV0ZXIud2F0Y2hSZWFkaW5ncygpLnN1YnNjcmliZShcbiAqICAgKGRhdGE6IE1hZ25ldG9tZXRlclJlYWRpbmcpID0+IGNvbnNvbGUubG9nKGRhdGEpXG4gKiApO1xuICpcbiAqIC8vIFN0b3Agd2F0Y2hpbmcgaGVhZGluZyBjaGFuZ2VcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTWFnbmV0b21ldGVyUmVhZGluZ1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01hZ25ldG9tZXRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1hZ25ldG9tZXRlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tYWduZXRvbWV0ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NkZXNhbGFzL2NvcmRvdmEtcGx1Z2luLW1hZ25ldG9tZXRlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYWduZXRvbWV0ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY29tcGFzcyByZWFkaW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNYWduZXRvbWV0ZXJSZWFkaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmVhZGluZygpOiBQcm9taXNlPE1hZ25ldG9tZXRlclJlYWRpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgZGV2aWNlIGN1cnJlbnQgaGVhZGluZyBhdCBhIHJlZ3VsYXIgaW50ZXJ2YWxcbiAgICpcbiAgICogU3RvcCB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSB7RGV2aWNlT3JpZW50YXRpb25Db21wYXNzT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIGNvbXBhc3MuIEZyZXF1ZW5jeSBhbmQgRmlsdGVyLiBPcHRpb25hbFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgdGhlIGNvbXBhc3MgaGVhZGluZ1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wJyxcbiAgfSlcbiAgd2F0Y2hSZWFkaW5ncygpOiBPYnNlcnZhYmxlPE1hZ25ldG9tZXRlclJlYWRpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==