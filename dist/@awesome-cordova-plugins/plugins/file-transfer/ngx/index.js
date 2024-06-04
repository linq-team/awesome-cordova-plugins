import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, instanceAvailability, cordovaInstance, checkAvailability } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var FileTransfer = /** @class */ (function (_super) {
    __extends(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         *
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5,
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     *
     * @returns {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileTransfer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FileTransfer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileTransfer });
    FileTransfer.pluginName = "FileTransfer";
    FileTransfer.plugin = "cordova-plugin-file-transfer";
    FileTransfer.pluginRef = "FileTransfer";
    FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    FileTransfer = __decorate([], FileTransfer);
    return FileTransfer;
}(AwesomeCordovaNativePlugin));
export { FileTransfer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileTransfer, decorators: [{
            type: Injectable
        }] });
var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (checkAvailability(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return cordovaInstance(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return cordovaInstance(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return cordovaInstance(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    FileTransferObject = __decorate([
        __metadata("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());
export { FileTransferObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS10cmFuc2Zlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxxRUFLTCxpQkFBaUIsRUFDbEIsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBMEtMLGdDQUEwQjs7O1FBQzFEOzs7Ozs7Ozs7O1dBVUc7UUFDSCwyQkFBcUIsR0FBRztZQUN0QixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1lBQ1osZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQixDQUFDOzs7SUFFRjs7OztPQUlHO0lBQ0gsNkJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OEdBM0JVLFlBQVk7a0hBQVosWUFBWTs7Ozs7O0lBQVosWUFBWSxrQkFBWixZQUFZO3VCQWpMekI7RUFpTGtDLDBCQUEwQjtTQUEvQyxZQUFZOzRGQUFaLFlBQVk7a0JBRHhCLFVBQVU7OztJQXlDVDtRQUNFLElBQUksaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDL0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFlRCxtQ0FBTSxhQUNKLE9BQWUsRUFDZixHQUFXLEVBQ1gsT0FBMkIsRUFDM0IsYUFBdUI7SUFrQnpCLHFDQUFRLGFBQUMsTUFBYyxFQUFFLE1BQWMsRUFBRSxhQUF1QixFQUFFLE9BQThCO0lBVWhHLHVDQUFVLGFBQUMsUUFBdUM7OztzREFBUTtnQkFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVDOzs7SUFTRCxrQ0FBSzs7O0lBakVNLGtCQUFrQjs7T0FBbEIsa0JBQWtCOzZCQXROL0I7O1NBc05hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHksXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50LlxuICAgKiBEZWZhdWx0cyB0byAnZmlsZScuXG4gICAqL1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIHRvIHVzZSB3aGVuIHNhdmluZyB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuICAgKiBEZWZhdWx0cyB0byAnaW1hZ2UuanBnJy5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIC0gZWl0aGVyIFBVVCBvciBQT1NULlxuICAgKiBEZWZhdWx0cyB0byBQT1NULlxuICAgKi9cbiAgaHR0cE1ldGhvZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YSB0byB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvIGltYWdlL2pwZWcuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2Ygb3B0aW9uYWwga2V5L3ZhbHVlIHBhaXJzIHRvIHBhc3MgaW4gdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXG4gICAqIHRoYW4gb25lIHZhbHVlLiBPbiBpT1MsIEZpcmVPUywgYW5kIEFuZHJvaWQsIGlmIGEgaGVhZGVyIG5hbWVkXG4gICAqIENvbnRlbnQtVHlwZSBpcyBwcmVzZW50LCBtdWx0aXBhcnQgZm9ybSBkYXRhIHdpbGwgTk9UIGJlIHVzZWQuXG4gICAqL1xuICBoZWFkZXJzPzogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZFJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuICBieXRlc1NlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2VDb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZXNwb25zZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVHJhbnNmZXJFcnJvciB7XG4gIC8qKlxuICAgKiBPbmUgb2YgdGhlIHByZWRlZmluZWQgZXJyb3IgY29kZXMgbGlzdGVkIGJlbG93LlxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cbiAgICovXG4gIHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIVFRQIHN0YXR1cyBjb2RlLiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2VcbiAgICogY29kZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXG4gICAqL1xuICBodHRwX3N0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBib2R5LiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXG4gICAqL1xuICBleGNlcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gdXBsb2FkIGFuZCBkb3dubG9hZCBmaWxlcy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvbmd4JztcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZSc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlcjogRmlsZVRyYW5zZmVyLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IGZpbGVUcmFuc2ZlcjogRmlsZVRyYW5zZmVyT2JqZWN0ID0gdGhpcy50cmFuc2Zlci5jcmVhdGUoKTtcbiAqXG4gKiAvLyBVcGxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLnVwbG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIERvd25sb2FkIGEgZmlsZTpcbiAqIGZpbGVUcmFuc2Zlci5kb3dubG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIEFib3J0IGFjdGl2ZSB0cmFuc2ZlcjpcbiAqIGZpbGVUcmFuc2Zlci5hYm9ydCgpO1xuICpcbiAqIC8vIGZ1bGwgZXhhbXBsZVxuICogdXBsb2FkKCkge1xuICogICBsZXQgb3B0aW9uczogRmlsZVVwbG9hZE9wdGlvbnMgPSB7XG4gKiAgICAgIGZpbGVLZXk6ICdmaWxlJyxcbiAqICAgICAgZmlsZU5hbWU6ICduYW1lLmpwZycsXG4gKiAgICAgIGhlYWRlcnM6IHt9XG4gKiAgICAgIC4uLi4uXG4gKiAgIH1cbiAqXG4gKiAgIGZpbGVUcmFuc2Zlci51cGxvYWQoJzxmaWxlIHBhdGg+JywgJzxhcGkgZW5kcG9pbnQ+Jywgb3B0aW9ucylcbiAqICAgIC50aGVuKChkYXRhKSA9PiB7XG4gKiAgICAgIC8vIHN1Y2Nlc3NcbiAqICAgIH0sIChlcnIpID0+IHtcbiAqICAgICAgLy8gZXJyb3JcbiAqICAgIH0pXG4gKiB9XG4gKlxuICogZG93bmxvYWQoKSB7XG4gKiAgIGNvbnN0IHVybCA9ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ZpbGUucGRmJztcbiAqICAgZmlsZVRyYW5zZmVyLmRvd25sb2FkKHVybCwgdGhpcy5maWxlLmRhdGFEaXJlY3RvcnkgKyAnZmlsZS5wZGYnKS50aGVuKChlbnRyeSkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZCBjb21wbGV0ZTogJyArIGVudHJ5LnRvVVJMKCkpO1xuICogICB9LCAoZXJyb3IpID0+IHtcbiAqICAgICAvLyBoYW5kbGUgZXJyb3JcbiAqICAgfSk7XG4gKiB9XG4gKlxuICogYGBgXG4gKlxuICogVG8gc3RvcmUgZmlsZXMgaW4gYSBkaWZmZXJlbnQvcHVibGljbHkgYWNjZXNzaWJsZSBkaXJlY3RvcnksIHBsZWFzZSByZWZlciB0byB0aGUgZm9sbG93aW5nIGxpbmtcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZSN3aGVyZS10by1zdG9yZS1maWxlc1xuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnVWJ1bnR1JywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVRyYW5zZmVyIG9iamVjdFxuICAgKlxuICAgKiBAcmV0dXJucyB7RmlsZVRyYW5zZmVyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKCk6IEZpbGVUcmFuc2Zlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJPYmplY3QoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5OYW1lOiAnRmlsZVRyYW5zZmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLCBudWxsLCBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgKEZpbGVUcmFuc2Zlci5nZXRQbHVnaW4oKSkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBmaWxlIHRvIGEgc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVVybCAgRmlsZXN5c3RlbSBVUkwgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2Ugb3IgYSBkYXRhIFVSSS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gcmVjZWl2ZSB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cbiAgICogQHBhcmFtIHtGaWxlVXBsb2FkT3B0aW9uc30gW29wdGlvbnNdICBPcHRpb25hbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0cnVzdEFsbEhvc3RzXSAgT3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgc2V0IHRvIHRydWUsIGl0IGFjY2VwdHMgYWxsIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gVGhpcyBpcyB1c2VmdWwgc2luY2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZVVwbG9hZFJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlVXBsb2FkUmVzdWx0IGFuZCByZWplY3RzIHdpdGggRmlsZVRyYW5zZmVyRXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgdXBsb2FkKFxuICAgIGZpbGVVcmw6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzogRmlsZVVwbG9hZE9wdGlvbnMsXG4gICAgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkcyBhIGZpbGUgZnJvbSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgIFVSTCBvZiB0aGUgc2VydmVyIHRvIGRvd25sb2FkIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0ICBGaWxlc3lzdGVtIHVybCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbdHJ1c3RBbGxIb3N0c10gIE9wdGlvbmFsIHBhcmFtZXRlciwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIHNldCB0byB0cnVlLCBpdCBhY2NlcHRzIGFsbCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtPcHRpb25hbF0gcGFyYW1ldGVycywgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgaGVhZGVycyAoc3VjaCBhcyBBdXRob3JpemF0aW9uIChCYXNpYyBBdXRoZW50aWNhdGlvbiksIGV0YykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb2JqZWN0LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGRvd25sb2FkKHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZywgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbmV2ZXIgYSBuZXcgY2h1bmsgb2YgZGF0YSBpcyB0cmFuc2ZlcnJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTGlzdGVuZXIgdGhhdCB0YWtlcyBhIHByb2dyZXNzIGV2ZW50LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBzeW5jOiB0cnVlIH0pXG4gIG9uUHJvZ3Jlc3MobGlzdGVuZXI6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25wcm9ncmVzcyA9IGxpc3RlbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0cyBhbiBpbi1wcm9ncmVzcyB0cmFuc2Zlci4gVGhlIG9uZXJyb3IgY2FsbGJhY2sgaXMgcGFzc2VkIGEgRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogb2JqZWN0IHdoaWNoIGhhcyBhbiBlcnJvciBjb2RlIG9mIEZpbGVUcmFuc2ZlckVycm9yLkFCT1JUX0VSUi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGFib3J0KCk6IHZvaWQge31cbn1cbiJdfQ==