import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var CallDirectory = /** @class */ (function (_super) {
    __extends(CallDirectory, _super);
    function CallDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallDirectory.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    CallDirectory.prototype.addIdentification = function (items) { return cordova(this, "addIdentification", {}, arguments); };
    CallDirectory.prototype.removeIdentification = function (items) { return cordova(this, "removeIdentification", {}, arguments); };
    CallDirectory.prototype.removeAllIdentification = function () { return cordova(this, "removeAllIdentification", {}, arguments); };
    CallDirectory.prototype.getAllItems = function () { return cordova(this, "getAllItems", {}, arguments); };
    CallDirectory.prototype.reloadExtension = function () { return cordova(this, "reloadExtension", {}, arguments); };
    CallDirectory.prototype.getLog = function () { return cordova(this, "getLog", {}, arguments); };
    CallDirectory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CallDirectory, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    CallDirectory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CallDirectory });
    CallDirectory.pluginName = "CallDirectory";
    CallDirectory.plugin = "cordova-plugin-call-directory";
    CallDirectory.pluginRef = "CallDirectory";
    CallDirectory.repo = "https://github.com/GEDYSIntraWare/cordova-plugin-call-directory";
    CallDirectory.install = "cordova plugin add cordova-plugin-call-directory --variable EXT_NAME=\"Cordova-Directory\" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=\"NO\"";
    CallDirectory.installVariables = ["EXT_NAME", "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES"];
    CallDirectory.platforms = ["iOS"];
    CallDirectory = __decorate([], CallDirectory);
    return CallDirectory;
}(AwesomeCordovaNativePlugin));
export { CallDirectory };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CallDirectory, decorators: [{
            type: Injectable
        }], propDecorators: { isAvailable: [], addIdentification: [], removeIdentification: [], removeAllIdentification: [], getAllItems: [], reloadExtension: [], getLog: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FsbC1kaXJlY3Rvcnkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQWlEekQsaUNBQTBCOzs7O0lBTzNELG1DQUFXO0lBV1gseUNBQWlCLGFBQUMsS0FBMEI7SUFXNUMsNENBQW9CLGFBQUMsS0FBMEI7SUFVL0MsK0NBQXVCO0lBVXZCLG1DQUFXO0lBVVgsdUNBQWU7SUFVZiw4QkFBTTsrR0FyRUssYUFBYTttSEFBYixhQUFhOzs7Ozs7OztJQUFiLGFBQWEsa0JBQWIsYUFBYTt3QkFsRDFCO0VBa0RtQywwQkFBMEI7U0FBaEQsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzhCQVFULFdBQVcsTUFXWCxpQkFBaUIsTUFXakIsb0JBQW9CLE1BVXBCLHVCQUF1QixNQVV2QixXQUFXLE1BVVgsZUFBZSxNQVVmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxEaXJlY3RvcnlJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbERpcmVjdG9yeUxvZyB7XG4gIHBsdWdpbjogc3RyaW5nW107XG4gIGV4dGVuc2lvbjogc3RyaW5nW107XG59XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBEaXJlY3RvcnlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gY2FuIGFkZCBwaG9uZSBudW1iZXJzIHRvIGFuIENhbGxraXQgY2FsbCBkaXJlY3RvcnkgZXh0ZW5zaW9uLiBDYWxsIGByZWxvYWRFeHRlbnNpb25gIGFmdGVyIHVzaW5nIGBhZGRJZGVudGlmaWNhdGlvbmAgYW5kIGByZW1vdmVJZGVudGlmaWNhdGlvbmBcbiAqIHRvIHByb2Nlc3MgdGhlIGNoYW5nZXMgaW4gdGhlIGNhbGwgZGlyZWN0b3J5IGV4dGVuc2lvbi5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsbERpcmVjdG9yeSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jYWxsLWRpcmVjdG9yeS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGxEaXJlY3Rvcnk6IENhbGxEaXJlY3RvcnkpIHsgfVxuICpcbiAqXG4gKiBsZXQgaXRlbXMgPSBbe2xhYmVsOiBcIkhlbGxvXCIsIG51bWJlcjogXCIxMjNcIn1dO1xuICogdGhpcy5jYWxsRGlyZWN0b3J5LmFkZElkZW50aWZpY2F0aW9uKGl0ZW1zKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuY2FsbERpcmVjdG9yeS5yZWxvYWRFeHRlbnNpb24oKVxuICogICAudGhlbihyZXM6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiBgYGBcbiAqIEBJbnRlcmZhY2VzXG4gKiBDYWxsRGlyZWN0b3J5SXRlbVxuICogQ2FsbERpcmVjdG9yeUxvZ1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxEaXJlY3RvcnknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYWxsLWRpcmVjdG9yeScsXG4gIHBsdWdpblJlZjogJ0NhbGxEaXJlY3RvcnknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0dFRFlTSW50cmFXYXJlL2NvcmRvdmEtcGx1Z2luLWNhbGwtZGlyZWN0b3J5JyxcbiAgaW5zdGFsbDpcbiAgICAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWNhbGwtZGlyZWN0b3J5IC0tdmFyaWFibGUgRVhUX05BTUU9XCJDb3Jkb3ZhLURpcmVjdG9yeVwiIC0tdmFyaWFibGUgQUxXQVlTX0VNQkVEX1NXSUZUX1NUQU5EQVJEX0xJQlJBUklFUz1cIk5PXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0VYVF9OQU1FJywgJ0FMV0FZU19FTUJFRF9TV0lGVF9TVEFOREFSRF9MSUJSQVJJRVMnXSxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxsRGlyZWN0b3J5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGNhbGwgZGlyZWN0b3J5IGV4dGVuc2lvbiBpcyBhdmFpbGFibGUgYW5kIGVuYWJsZWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaWRlbnRpZmljYXRpb24gbnVtYmVyc1xuICAgKlxuICAgKiBAcGFyYW0ge0NhbGxEaXJlY3RvcnlJdGVtW119IGl0ZW1zIFNldCBvZiBudW1iZXJzIHdpdGggbGFiZWxzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBudW1iZXJzIGFyZSBhZGRlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRJZGVudGlmaWNhdGlvbihpdGVtczogQ2FsbERpcmVjdG9yeUl0ZW1bXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpZGVudGlmaWNhdGlvbiBudW1iZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7Q2FsbERpcmVjdG9yeUl0ZW1bXX0gaXRlbXMgU2V0IG9mIG51bWJlcnMgd2l0aCBhcmJpdHJhcnkgbGFiZWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG51bWJlcnMgYXJlIHJlbW92ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlSWRlbnRpZmljYXRpb24oaXRlbXM6IENhbGxEaXJlY3RvcnlJdGVtW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGl0ZW1zIGZyb20gY2FsbCBkaXJlY3RvcnkuIFJlZnJlc2hlcyBpbW1lZGlhdGVseS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgcmVmcmVzaCB3aXRoIG1lc3NhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlQWxsSWRlbnRpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBudW1iZXJzIGFuZCBsYWJlbHMgaW4gY2FsbCBkaXJlY3RvcnlcbiAgICpcbiAgICogQHJldHVybnMge0NhbGxEaXJlY3RvcnlJdGVtW119IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiBhbGwgaXRlbXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWxsSXRlbXMoKTogUHJvbWlzZTxDYWxsRGlyZWN0b3J5SXRlbVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZCBleHRlbnNpb24gdG8gcHJvY2VzcyBxdWV1ZWQgY2hhbmdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciByZWZyZXNoIHdpdGggbWVzc2FnZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWxvYWRFeHRlbnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxvZyBmcm9tIHBsdWdpbiBhbmQgY2FsbCBkaXJlY3RvcnkgZXh0ZW5zaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENhbGxEaXJlY3RvcnlMb2c+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuIG9iamVjdCBvZiBsb2cgbWVzc2FnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TG9nKCk6IFByb21pc2U8Q2FsbERpcmVjdG9yeUxvZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19