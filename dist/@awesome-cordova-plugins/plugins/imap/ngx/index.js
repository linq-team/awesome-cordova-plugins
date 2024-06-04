import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
export var ConnectionType;
(function (ConnectionType) {
    /**
     * Clear-text connection for the protocol.
     */
    ConnectionType["Clear"] = "Clear";
    /**
     * Starts with clear-text connection at the beginning, then switch to encrypted connection using TLS/SSL.
     */
    ConnectionType["StartTLS"] = "StartTLS";
    /**
     * Encrypted connection using TLS/SSL.
     */
    ConnectionType["TLSSSL"] = "TLS/SSL";
})(ConnectionType || (ConnectionType = {}));
export var Comparison;
(function (Comparison) {
    /**
     * Android ONLY
     * The less than or equal to operator.
     */
    Comparison["LE"] = "LE";
    /**
     * The less than operator.
     */
    Comparison["LT"] = "LT";
    /**
     * The equality operator.
     */
    Comparison["EQ"] = "EQ";
    /**
     * The not equal to operator.
     */
    Comparison["NE"] = "NE";
    /**
     * Android ONLY
     * The greater than operator.
     */
    Comparison["GT"] = "GT";
    /**
     * The greater than or equal to operator.
     */
    Comparison["GE"] = "GE";
})(Comparison || (Comparison = {}));
/**
 * All available message flags. Set or remove flag using "setFlag()".
 */
export var FlagEnum;
(function (FlagEnum) {
    /**
     * "ANSWERED" message flag
     */
    FlagEnum["ANSWERED"] = "ANSWERED";
    /**
     * "DRAFT" message flag
     */
    FlagEnum["DRAFT"] = "DRAFT";
    /**
     * "FLAGGED" message flag
     */
    FlagEnum["FLAGGED"] = "FLAGGED";
    /**
     * Android ONLY
     * "RECENT" message flag
     */
    FlagEnum["RECENT"] = "RECENT";
    /**
     * "SEEN" message flag
     */
    FlagEnum["SEEN"] = "SEEN";
    /**
     * Android ONLY
     * "USER" message flag
     */
    FlagEnum["USER"] = "USER";
    /**
     * "DELETED" message flag. Note: Add this flag to delete the message from the mailbox
     */
    FlagEnum["DELETED"] = "DELETED";
    /**
     * iOS ONLY
     * "SENT" message flag.
     */
    FlagEnum["SENT"] = "Sent";
    /**
     * iOS ONLY
     * "FORWARDED" message flag.
     */
    FlagEnum["FORWARDED"] = "Forwarded";
    /**
     * iOS ONLY
     * "SubmitPending" message flag.
     */
    FlagEnum["SubmitPending"] = "SubmitPending";
    /**
     * iOS ONLY
     * "SUBMITTED" message flag.
     */
    FlagEnum["SUBMITTED"] = "Submitted";
})(FlagEnum || (FlagEnum = {}));
var Imap = /** @class */ (function (_super) {
    __extends(Imap, _super);
    function Imap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imap.prototype.connect = function (clientData) { return cordova(this, "connect", {}, arguments); };
    Imap.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    Imap.prototype.isConnected = function () { return cordova(this, "isConnected", {}, arguments); };
    Imap.prototype.listMailFolders = function (pattern) { return cordova(this, "listMailFolders", {}, arguments); };
    Imap.prototype.getMessageCountByFolderName = function (folderName) { return cordova(this, "getMessageCountByFolderName", {}, arguments); };
    Imap.prototype.searchMessagesByDatePeriod = function (folderName, dateInMilliseconds, comparison) { return cordova(this, "searchMessagesByDatePeriod", {}, arguments); };
    Imap.prototype.listMessagesHeadersByConsecutiveNumber = function (folderName, start, end) { return cordova(this, "listMessagesHeadersByConsecutiveNumber", {}, arguments); };
    Imap.prototype.listMessagesHeadersByDate = function (folderName, dateInMilliseconds, comparison) { return cordova(this, "listMessagesHeadersByDate", {}, arguments); };
    Imap.prototype.getFullMessageData = function (folderName, messageNumber) { return cordova(this, "getFullMessageData", {}, arguments); };
    Imap.prototype.getFullMessageDataOnNewSession = function (clientData, folderName, messageNumber) { return cordova(this, "getFullMessageDataOnNewSession", {}, arguments); };
    Imap.prototype.copyToFolder = function (sourceFolder, destinationFolder, messageNums) { return cordova(this, "copyToFolder", {}, arguments); };
    Imap.prototype.setFlag = function (folderName, messageNums, flag, status) { return cordova(this, "setFlag", {}, arguments); };
    Imap.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Imap, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Imap.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Imap });
    Imap.pluginName = "Imap";
    Imap.plugin = "cordova-plugin-imap";
    Imap.pluginRef = "imap";
    Imap.repo = "https://github.com/aleksandar888/cordova-plugin-imap.git";
    Imap.platforms = ["Android", "iOS"];
    Imap = __decorate([], Imap);
    return Imap;
}(AwesomeCordovaNativePlugin));
export { Imap };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Imap, decorators: [{
            type: Injectable
        }], propDecorators: { connect: [], disconnect: [], isConnected: [], listMailFolders: [], getMessageCountByFolderName: [], searchMessagesByDatePeriod: [], listMessagesHeadersByConsecutiveNumber: [], listMessagesHeadersByDate: [], getFullMessageData: [], getFullMessageDataOnNewSession: [], copyToFolder: [], setFlag: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW1hcC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7QUFvTjVGLE1BQU0sQ0FBTixJQUFZLGNBYVg7QUFiRCxXQUFZLGNBQWM7SUFDeEI7O09BRUc7SUFDSCxpQ0FBZSxDQUFBO0lBQ2Y7O09BRUc7SUFDSCx1Q0FBcUIsQ0FBQTtJQUNyQjs7T0FFRztJQUNILG9DQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFiVyxjQUFjLEtBQWQsY0FBYyxRQWF6QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBMkJYO0FBM0JELFdBQVksVUFBVTtJQUNwQjs7O09BR0c7SUFDSCx1QkFBUyxDQUFBO0lBQ1Q7O09BRUc7SUFDSCx1QkFBUyxDQUFBO0lBQ1Q7O09BRUc7SUFDSCx1QkFBUyxDQUFBO0lBQ1Q7O09BRUc7SUFDSCx1QkFBUyxDQUFBO0lBQ1Q7OztPQUdHO0lBQ0gsdUJBQVMsQ0FBQTtJQUNUOztPQUVHO0lBQ0gsdUJBQVMsQ0FBQTtBQUNYLENBQUMsRUEzQlcsVUFBVSxLQUFWLFVBQVUsUUEyQnJCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxRQW1EWDtBQW5ERCxXQUFZLFFBQVE7SUFDbEI7O09BRUc7SUFDSCxpQ0FBcUIsQ0FBQTtJQUNyQjs7T0FFRztJQUNILDJCQUFlLENBQUE7SUFDZjs7T0FFRztJQUNILCtCQUFtQixDQUFBO0lBQ25COzs7T0FHRztJQUNILDZCQUFpQixDQUFBO0lBQ2pCOztPQUVHO0lBQ0gseUJBQWEsQ0FBQTtJQUNiOzs7T0FHRztJQUNILHlCQUFhLENBQUE7SUFDYjs7T0FFRztJQUNILCtCQUFtQixDQUFBO0lBQ25COzs7T0FHRztJQUNILHlCQUFhLENBQUE7SUFDYjs7O09BR0c7SUFDSCxtQ0FBdUIsQ0FBQTtJQUN2Qjs7O09BR0c7SUFDSCwyQ0FBK0IsQ0FBQTtJQUMvQjs7O09BR0c7SUFDSCxtQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBbkRXLFFBQVEsS0FBUixRQUFRLFFBbURuQjs7SUEySnlCLHdCQUEwQjs7OztJQU9sRCxzQkFBTyxhQUFDLFVBQWtCO0lBUzFCLHlCQUFVO0lBU1YsMEJBQVc7SUFvQlgsOEJBQWUsYUFBQyxPQUFlO0lBVS9CLDBDQUEyQixhQUFDLFVBQWtCO0lBWTlDLHlDQUEwQixhQUN4QixVQUFrQixFQUNsQixrQkFBMEIsRUFDMUIsVUFBc0I7SUFheEIscURBQXNDLGFBQUMsVUFBa0IsRUFBRSxLQUFhLEVBQUUsR0FBVztJQVlyRix3Q0FBeUIsYUFDdkIsVUFBa0IsRUFDbEIsa0JBQTBCLEVBQzFCLFVBQXNCO0lBWXhCLGlDQUFrQixhQUFDLFVBQWtCLEVBQUUsYUFBcUI7SUFlNUQsNkNBQThCLGFBQUMsVUFBa0IsRUFBRSxVQUFrQixFQUFFLGFBQXFCO0lBWTVGLDJCQUFZLGFBQUMsWUFBb0IsRUFBRSxpQkFBeUIsRUFBRSxXQUFxQjtJQWFuRixzQkFBTyxhQUFDLFVBQWtCLEVBQUUsV0FBcUIsRUFBRSxJQUFjLEVBQUUsTUFBZTtzR0F0SnZFLElBQUk7MEdBQUosSUFBSTs7Ozs7O0lBQUosSUFBSSxrQkFBSixJQUFJO2VBbGRqQjtFQWtkMEIsMEJBQTBCO1NBQXZDLElBQUk7NEZBQUosSUFBSTtrQkFEaEIsVUFBVTs4QkFRVCxPQUFPLE1BU1AsVUFBVSxNQVNWLFdBQVcsTUFvQlgsZUFBZSxNQVVmLDJCQUEyQixNQVkzQiwwQkFBMEIsTUFnQjFCLHNDQUFzQyxNQVl0Qyx5QkFBeUIsTUFlekIsa0JBQWtCLE1BZWxCLDhCQUE4QixNQVk5QixZQUFZLE1BYVosT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgLyoqXG4gICAqIEhvc3RuYW1lIG9yIElQIGFkZHJlc3Mgb2YgdGhlIElNQVAgc2VydmljZSwgZm9yIGV4YW1wbGU6IGltYXAuZ21haWwuY29tLCBpbWFwLW1haWwub3V0bG9vay5jb20uLi4uXG4gICAqL1xuICBob3N0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBwYXJhbWV0ZXIuIFBvcnQgb2YgdGhlIElNQVAgc2VydmVyIHRvIGNvbm5lY3QuXG4gICAqIERlZmF1bHQgc2V0IHRvOiA5OTNcbiAgICovXG4gIHBvcnQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBpT1MgT05MWVxuICAgKiBPcHRpb25hbCBwYXJhbWV0ZXIuIEVuY3J5cHRpb24gdHlwZSB0byB1c2UuXG4gICAqIERlZmF1bHQgc2V0IHRvOiBUTFMvU1NMXG4gICAqL1xuICBjb25uZWN0aW9uVHlwZT86IENvbm5lY3Rpb25UeXBlO1xuICAvKipcbiAgICogVXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzcyBmb3IgYXV0aGVudGljYXRpb24uXG4gICAqL1xuICB1c2VyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYXNzd29yZCBmb3IgYXV0aGVudGljYXRpb24uXG4gICAqL1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3Rpb24ge1xuICAvKipcbiAgICogQ29ubmVjdGlvbiBTdGF0dXM6IHRydWUgb3IgZmFsc2UsIFwidHJ1ZVwiIG1lYW5zIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHk7IFwiZmFsc2VcIiBtZWFucyBmYWlsZWQgdG8gY29ubmVjdC5cbiAgICovXG4gIHN0YXR1czogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBhcmFtZXRlci4gQSBjb25uZWN0aW9uIHN0cmluZywgcmV0dXJuZWQgYXMgYSBjb25maXJtYXRpb24gZm9yIHN1Y2Nlc3NmdWwgY29ubmVjdGlvbi5cbiAgICovXG4gIGNvbm5lY3Rpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBwYXJhbWV0ZXIuIEVycm9yLCByZXR1cm5lZCBpZiB0aGUgY29ubmVjdGluZyBwcm9jZXNzIGhhcyBmYWlsZWQuXG4gICAqL1xuICBleGNlcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUhlYWRlcnMge1xuICAvKipcbiAgICogTWVzc2FnZSBjb25zZWN1dGl2ZSBudW1iZXIuXG4gICAqL1xuICBtZXNzYWdlTnVtYmVyOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyIHdoZXJlIHRoZSBtZXNzYWdlIGlzIGNvbnRhaW5lZC5cbiAgICovXG4gIGZvbGRlcjogc3RyaW5nO1xuICAvKipcbiAgICogU2VuZGVyJ3MgZGF0YS5cbiAgICovXG4gIGZyb206IEFkZHJlc3NbXTtcbiAgLyoqXG4gICAqIFRPIHJlY2lwaWVudHMgZGF0YS5cbiAgICovXG4gIHRvUmVjaXBpZW50czogQWRkcmVzc1tdO1xuICAvKipcbiAgICogQ0MgcmVjaXBpZW50cyBkYXRhLlxuICAgKi9cbiAgY2NSZWNpcGllbnRzOiBBZGRyZXNzW107XG4gIC8qKlxuICAgKiBCQ0MgcmVjaXBpZW50cyBkYXRhLlxuICAgKi9cbiAgYmNjUmVjaXBpZW50czogQWRkcmVzc1tdO1xuICAvKipcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgbWVzc2FnZSB3YXMgcmVjZWl2ZWQuXG4gICAqL1xuICByZWNlaXZlZERhdGU6IHN0cmluZztcbiAgLyoqXG4gICAqIE1lc3NhZ2UncyBzdWJqZWN0IGhlYWRlci5cbiAgICovXG4gIHN1YmplY3Q6IHN0cmluZztcbiAgLyoqXG4gICAqIE1lc3NhZ2UncyBhY3RpdmUgZmxhZ3MuXG4gICAqL1xuICBmbGFnczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnNlY3V0aXZlIG51bWJlci5cbiAgICovXG4gIG1lc3NhZ2VOdW1iZXI6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBmb2xkZXIgd2hlcmUgdGhlIG1lc3NhZ2UgaXMgY29udGFpbmVkLlxuICAgKi9cbiAgZm9sZGVyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZW5kZXIncyBkYXRhLlxuICAgKi9cbiAgZnJvbTogQWRkcmVzc1tdO1xuICAvKipcbiAgICogQWxsIHJlY2lwaWVudHMgZGF0YS5cbiAgICovXG4gIGFsbFJlY2lwaWVudHM6IEFkZHJlc3NbXTtcbiAgLyoqXG4gICAqIFRPIHJlY2lwaWVudHMgZGF0YS5cbiAgICovXG4gIHRvUmVjaXBpZW50czogQWRkcmVzc1tdO1xuICAvKipcbiAgICogQ0MgcmVjaXBpZW50cyBkYXRhLlxuICAgKi9cbiAgY2NSZWNpcGllbnRzOiBBZGRyZXNzW107XG4gIC8qKlxuICAgKiBCQ0MgcmVjaXBpZW50cyBkYXRhLlxuICAgKi9cbiAgYmNjUmVjaXBpZW50czogQWRkcmVzc1tdO1xuICAvKipcbiAgICogUmVwbHkgZGF0YS5cbiAgICovXG4gIHJlcGx5VG86IEFkZHJlc3NbXTtcbiAgLyoqXG4gICAqIERhdGUgd2hlbiB0aGUgbWVzc2FnZSB3YXMgc2VudC5cbiAgICovXG4gIHNlbnREYXRlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBtZXNzYWdlIHdhcyByZWNlaXZlZC5cbiAgICovXG4gIHJlY2VpdmVkRGF0ZTogc3RyaW5nO1xuICAvKipcbiAgICogTWVzc2FnZSdzIHN1YmplY3QgaGVhZGVyLlxuICAgKi9cbiAgc3ViamVjdDogc3RyaW5nO1xuICAvKipcbiAgICogQW5kcm9pZCBPTkxZXG4gICAqIE9wdGlvbmFsLiBTaG9ydCBkZXNjcmlwdGlvbiBmb3IgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogQW5kcm9pZCBPTkxZXG4gICAqIE9wdGlvbmFsLlxuICAgKi9cbiAgZGlzcG9zaXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBNZXNzYWdlJ3MgYWN0aXZlIGZsYWdzLlxuICAgKi9cbiAgZmxhZ3M6IHN0cmluZ1tdO1xuICAvKipcbiAgICogQW5kcm9pZCBPTkxZXG4gICAqIE9wdGlvbmFsLlxuICAgKi9cbiAgbGluZUNvdW50PzogbnVtYmVyO1xuICAvKipcbiAgICogQW5kcm9pZCBPTkxZXG4gICAqIE9wdGlvbmFsLiBBbGwgSGVhZGVycyBhdmFpbGFibGUgb24gYSBtZXNzYWdlLlxuICAgKi9cbiAgYWxsTWVzc2FnZUhlYWRlcnM/OiBvYmplY3Q7XG4gIC8qKlxuICAgKiBBbmRyb2lkIE9OTFlcbiAgICogT3B0aW9uYWwuIFR5cGUgb2YgbWVzc2FnZSdzIGNvbnRlbnQuXG4gICAqL1xuICBjb250ZW50VHlwZT86IHN0cmluZztcbiAgLyoqXG4gICAqIE1lc3NhZ2UncyBib2R5IHdpdGggaXRzIGNvbnRlbnQgYW5kIGF0dGFjaG1lbnRzLlxuICAgKi9cbiAgYm9keUNvbnRlbnQ6IENvbnRlbnRbXTtcbiAgLyoqXG4gICAqIE1lc3NhZ2UncyBtZW1vcnkgc2l6ZS5cbiAgICovXG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzIHtcbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MuXG4gICAqL1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbC4gTmFtZSBvZiB0aGUgZW1haWwgYWRkcmVzcydzIG93bmVyLlxuICAgKi9cbiAgcGVyc29uYWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbmRyb2lkIE9OTFlcbiAgICogT3B0aW9uYWwuIERhdGEgdHlwZS5cbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudCB7XG4gIC8qKlxuICAgKiBDb250ZW50IGRhdGEgdHlwZS5cbiAgICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsLiBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogTWVzc2FnZSdzIGNvbnRlbnQuXG4gICAqL1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kaWZpY2F0aW9uUmVzdWx0IHtcbiAgLyoqXG4gICAqIFN0YXR1cyBvZiB0aGUgYXBwbGllZCBjaGFuZ2VzLiBcIlRydWVcIiBzdWNjZXNzOyBcIkZhbHNlXCIgZmFpbHVyZVxuICAgKi9cbiAgc3RhdHVzOiBib29sZWFuO1xuICAvKipcbiAgICogQXJyYXkgd2l0aCBjb25zZWN1dGl2ZSBudW1iZXJzIG9mIG1vZGlmaWVkIG1lc3NhZ2VzLlxuICAgKi9cbiAgbW9kaWZpZWRNZXNzYWdlczogbnVtYmVyW107XG59XG5cbmV4cG9ydCBlbnVtIENvbm5lY3Rpb25UeXBlIHtcbiAgLyoqXG4gICAqIENsZWFyLXRleHQgY29ubmVjdGlvbiBmb3IgdGhlIHByb3RvY29sLlxuICAgKi9cbiAgQ2xlYXIgPSAnQ2xlYXInLFxuICAvKipcbiAgICogU3RhcnRzIHdpdGggY2xlYXItdGV4dCBjb25uZWN0aW9uIGF0IHRoZSBiZWdpbm5pbmcsIHRoZW4gc3dpdGNoIHRvIGVuY3J5cHRlZCBjb25uZWN0aW9uIHVzaW5nIFRMUy9TU0wuXG4gICAqL1xuICBTdGFydFRMUyA9ICdTdGFydFRMUycsXG4gIC8qKlxuICAgKiBFbmNyeXB0ZWQgY29ubmVjdGlvbiB1c2luZyBUTFMvU1NMLlxuICAgKi9cbiAgVExTU1NMID0gJ1RMUy9TU0wnLFxufVxuXG5leHBvcnQgZW51bSBDb21wYXJpc29uIHtcbiAgLyoqXG4gICAqIEFuZHJvaWQgT05MWVxuICAgKiBUaGUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG9wZXJhdG9yLlxuICAgKi9cbiAgTEUgPSAnTEUnLFxuICAvKipcbiAgICogVGhlIGxlc3MgdGhhbiBvcGVyYXRvci5cbiAgICovXG4gIExUID0gJ0xUJyxcbiAgLyoqXG4gICAqIFRoZSBlcXVhbGl0eSBvcGVyYXRvci5cbiAgICovXG4gIEVRID0gJ0VRJyxcbiAgLyoqXG4gICAqIFRoZSBub3QgZXF1YWwgdG8gb3BlcmF0b3IuXG4gICAqL1xuICBORSA9ICdORScsXG4gIC8qKlxuICAgKiBBbmRyb2lkIE9OTFlcbiAgICogVGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvci5cbiAgICovXG4gIEdUID0gJ0dUJyxcbiAgLyoqXG4gICAqIFRoZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gb3BlcmF0b3IuXG4gICAqL1xuICBHRSA9ICdHRScsXG59XG5cbi8qKlxuICogQWxsIGF2YWlsYWJsZSBtZXNzYWdlIGZsYWdzLiBTZXQgb3IgcmVtb3ZlIGZsYWcgdXNpbmcgXCJzZXRGbGFnKClcIi5cbiAqL1xuZXhwb3J0IGVudW0gRmxhZ0VudW0ge1xuICAvKipcbiAgICogXCJBTlNXRVJFRFwiIG1lc3NhZ2UgZmxhZ1xuICAgKi9cbiAgQU5TV0VSRUQgPSAnQU5TV0VSRUQnLFxuICAvKipcbiAgICogXCJEUkFGVFwiIG1lc3NhZ2UgZmxhZ1xuICAgKi9cbiAgRFJBRlQgPSAnRFJBRlQnLFxuICAvKipcbiAgICogXCJGTEFHR0VEXCIgbWVzc2FnZSBmbGFnXG4gICAqL1xuICBGTEFHR0VEID0gJ0ZMQUdHRUQnLFxuICAvKipcbiAgICogQW5kcm9pZCBPTkxZXG4gICAqIFwiUkVDRU5UXCIgbWVzc2FnZSBmbGFnXG4gICAqL1xuICBSRUNFTlQgPSAnUkVDRU5UJyxcbiAgLyoqXG4gICAqIFwiU0VFTlwiIG1lc3NhZ2UgZmxhZ1xuICAgKi9cbiAgU0VFTiA9ICdTRUVOJyxcbiAgLyoqXG4gICAqIEFuZHJvaWQgT05MWVxuICAgKiBcIlVTRVJcIiBtZXNzYWdlIGZsYWdcbiAgICovXG4gIFVTRVIgPSAnVVNFUicsXG4gIC8qKlxuICAgKiBcIkRFTEVURURcIiBtZXNzYWdlIGZsYWcuIE5vdGU6IEFkZCB0aGlzIGZsYWcgdG8gZGVsZXRlIHRoZSBtZXNzYWdlIGZyb20gdGhlIG1haWxib3hcbiAgICovXG4gIERFTEVURUQgPSAnREVMRVRFRCcsXG4gIC8qKlxuICAgKiBpT1MgT05MWVxuICAgKiBcIlNFTlRcIiBtZXNzYWdlIGZsYWcuXG4gICAqL1xuICBTRU5UID0gJ1NlbnQnLFxuICAvKipcbiAgICogaU9TIE9OTFlcbiAgICogXCJGT1JXQVJERURcIiBtZXNzYWdlIGZsYWcuXG4gICAqL1xuICBGT1JXQVJERUQgPSAnRm9yd2FyZGVkJyxcbiAgLyoqXG4gICAqIGlPUyBPTkxZXG4gICAqIFwiU3VibWl0UGVuZGluZ1wiIG1lc3NhZ2UgZmxhZy5cbiAgICovXG4gIFN1Ym1pdFBlbmRpbmcgPSAnU3VibWl0UGVuZGluZycsXG4gIC8qKlxuICAgKiBpT1MgT05MWVxuICAgKiBcIlNVQk1JVFRFRFwiIG1lc3NhZ2UgZmxhZy5cbiAgICovXG4gIFNVQk1JVFRFRCA9ICdTdWJtaXR0ZWQnLFxufVxuXG4vKipcbiAqIEBuYW1lIEltYXBcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gd2lsbCBlbmFibGUgYSBDb3Jkb3ZhIGFwcGxpY2F0aW9uIHRvIHVzZSB0aGUgSU1BUCAoSW50ZXJuZXQgTWVzc2FnZSBBY2Nlc3MgUHJvdG9jb2wpIGZlYXR1cmVzXG4gKiBUaGUgcGx1Z2luIG9mZmVycyBzdXBwb3J0IGZvciBBbmRyb2lkIGFuZCBpT1MuXG4gKiBUbyBlbmFibGUgdGhlIElNQVAgZmVhdHVyZXMgb24gQW5kcm9pZCwgdGhpcyBwbHVnaW4gdXNlcyB0aGUgZnJhbWV3b3JrIFtKYXZhIE1haWwgQVBJXShodHRwczovL2phdmFlZS5naXRodWIuaW8vamF2YW1haWwvKSBhbmQgZm9yIGlPUywgaXQgdXNlcyB0aGUgW01haWxDb3JlIDJdKGh0dHA6Ly9saWJtYWlsY29yZS5jb20vKSBsaWJyYXJ5LlxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEltYXAgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW1hcC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYXA6IEltYXApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmltYXAuY29ubmVjdCh7XG4gKiAgaG9zdDogJ2ltYXAuZ21haWwuY29tJyxcbiAqICBwb3J0OiA5OTMsXG4gKiAgY29ubmVjdGlvblR5cGU6IENvbm5lY3Rpb25UeXBlLlRMU1NTTCAgLy8gKGlPUyBPTkxZKSBFbmNyeXB0aW9uIHR5cGUgdG8gdXNlLiBEZWZhdWx0IHNldCB0bzogVExTL1NTTFxuICogIHVzZXI6ICdteV9lbWFpbEBnbWFpbC5jb20nLFxuICogIHBhc3N3b3JkOiAnbXktcGFzcydcbiAqIH0pXG4gKiAgIC50aGVuKChyZXM6IENvbm5lY3Rpb24pID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKlxuICpcbiAqICB0aGlzLmltYXAuZGlzY29ubmVjdCgpXG4gKiAgIC50aGVuKChyZXM6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqXG4gKlxuICogdGhpcy5pbWFwLmlzQ29ubmVjdGVkKClcbiAqICAgLnRoZW4oKHJlczogYm9vbGVhbikgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogLy8gTm90ZTogQ29ubmVjdGVkIHRvIGFuIElNQVAgc2VydmljZSBpcyBSRVFVSVJFRCB0byBiZSBhYmxlIHRvIGdldCBkYXRhIGZyb20gdGhlIGJlbG93IGZ1bmN0aW9ucy5cbiAqXG4gKlxuICogLy8gbGlzdE1haWxGb2xkZXJzKCcqJykgdXNpbmcgYSAnKicgcGF0dGVybiB3aWxsIHJldHVybiBhbGwgZm9sZGVyIG5hbWVzXG4gKiAvLyBsaXN0TWFpbEZvbGRlcnMoJ0lOQk9YKicpIHVzaW5nIGEgcGF0dGVybiB3aXRoIGEgZm9sZGVyIG5hbWUgd2lsbCBsaXN0IGFsbCB0aGUgc3ViZm9sZGVyIG5hbWVzIG9mIHRoYXQgZm9sZGVyIHRoYXQgbWF0Y2ggdGhlIHBhdHRlcm5cbiAqXG4gKiAgIHRoaXMuaW1hcC5saXN0TWFpbEZvbGRlcnMoJyonKVxuICogICAudGhlbigocmVzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKlxuICogICB0aGlzLmltYXAuZ2V0TWVzc2FnZUNvdW50QnlGb2xkZXJOYW1lKCdJTkJPWCcpXG4gKiAgIC50aGVuKChyZXM6IG51bWJlcikgPT4ge1xuICogICAvLyBSZXR1cm5zIHRoZSBjb3VudCBvZiB0aGUgbWVzc2FnZXMgaW4gdGhlIGZvbGRlciBhcyBhIHJlc3VsdFxuICogICAgY29uc29sZS5sb2cocmVzKVxuICogICB9KVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICB9KTtcbiAqXG4gKlxuICpcbiAqICAgdGhpcy5pbWFwLnNlYXJjaE1lc3NhZ2VzQnlEYXRlUGVyaW9kKCdJTkJPWCcsIDE2MDE1MDMyMDAwMDAsIENvbXBhcmlzb24uR0UpXG4gKiAgIC50aGVuKChyZXM6IG51bWJlcltdKSA9PiB7XG4gKiAgIC8vIFJldHVybnMgYXJyYXkgd2l0aCBtZXNzYWdlcycgY29uc2VjdXRpdmUgbnVtYmVyc1xuICogICAvLyBleC4gWzEyMDcsIDEyMDgsIDEyMDldXG4gKiAgICBjb25zb2xlLmxvZyhyZXMpXG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gKiAgIH0pO1xuICpcbiAqXG4gKiAgIHRoaXMuaW1hcC5saXN0TWVzc2FnZXNIZWFkZXJzQnlDb25zZWN1dGl2ZU51bWJlcignSU5CT1gnLCAxMjAwLCAxMjgwKVxuICogICAudGhlbigocmVzOiBNZXNzYWdlSGVhZGVyc1tdKSA9PiB7XG4gKiAgIC8vICBSZXR1cm5zIGFycmF5IHdpdGggbWVzc2FnZXMnIGhlYWRlcnMgZGF0YVxuICogICAgY29uc29sZS5sb2cocmVzKVxuICogICB9KVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICB9KTtcbiAqXG4gKlxuICogICB0aGlzLmltYXAubGlzdE1lc3NhZ2VzSGVhZGVyc0J5RGF0ZSgnSU5CT1gnLCAxNjAxNTAzMjAwMDAwLCBDb21wYXJpc29uLkdFKVxuICogICAudGhlbigocmVzOiBNZXNzYWdlSGVhZGVyc1tdKSA9PiB7XG4gKiAgIC8vIFJldHVybnMgYXJyYXkgd2l0aCBtZXNzYWdlcycgaGVhZGVycyBkYXRhXG4gKiAgICBjb25zb2xlLmxvZyhyZXMpXG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gKiAgIH0pO1xuICpcbiAqXG4gKiAgIHRoaXMuaW1hcC5nZXRGdWxsTWVzc2FnZURhdGEoJ0lOQk9YJywgMTIwNSlcbiAqICAgLnRoZW4oKHJlczogTWVzc2FnZSkgPT4ge1xuICogICAvLyBSZXR1cm5zIFwiTWVzc2FnZVwiIG9iamVjdCB3aXRoIHRoZSBmdWxsIG1lc3NhZ2UgZGF0YSBpbmNsdWRpbmcgYXR0YWNobWVudHMuXG4gKiAgICBjb25zb2xlLmxvZyhyZXMpXG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gKiAgIH0pO1xuICpcbiAqXG4gKiAgdGhpcy5pbWFwLmdldEZ1bGxNZXNzYWdlRGF0YU9uTmV3U2Vzc2lvbih7XG4gKiAgICAgIGhvc3Q6ICdpbWFwLmdtYWlsLmNvbScsXG4gKiAgICAgIHBvcnQ6IDk5MyxcbiAqICAgICAgY29ubmVjdGlvblR5cGU6IENvbm5lY3Rpb25UeXBlLlRMU1NTTCAgLy8gKGlPUyBPTkxZKSBFbmNyeXB0aW9uIHR5cGUgdG8gdXNlLiBEZWZhdWx0IHNldCB0bzogVExTL1NTTFxuICogICAgICB1c2VyOiAnbXlfZW1haWxAZ21haWwuY29tJyxcbiAqICAgICAgcGFzc3dvcmQ6ICdteS1wYXNzJ1xuICogICAgfSwgJ0lOQk9YJywgMTIwNSlcbiAqICAgLnRoZW4oKHJlczogTWVzc2FnZSkgPT4ge1xuICogICAvLyBSZXR1cm5zIFwiTWVzc2FnZVwiIG9iamVjdCB3aXRoIHRoZSBmdWxsIG1lc3NhZ2UgZGF0YSBpbmNsdWRpbmcgYXR0YWNobWVudHMuXG4gKiAgICBjb25zb2xlLmxvZyhyZXMpXG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gKiAgIH0pO1xuICpcbiAqXG4gKiAgIHRoaXMuaW1hcC5jb3B5VG9Gb2xkZXIoJ0lOQk9YJywgJ1NwYW0nLCBbMTIwNCwgMTIwNSwgMTIwNiwgMTIwN10pXG4gKiAgIC50aGVuKChyZXM6IGJvb2xlYW4pID0+IHtcbiAqICAgLy8gUmV0dXJucyBcInRydWVcIiBpZiB0aGUgcHJvY2VzcyBpcyBzdWNjZXNzZnVsLCBlbHNlIHJldHVybnMgXCJmYWxzZVwiLlxuICogICAgY29uc29sZS5sb2cocmVzKVxuICogICB9KVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICB9KTtcbiAqXG4gKlxuICogICAqIFNldHMgYSBmbGFnIG9uIGEgbWVzc2FnZVxuICogICAqIFwic2V0RmxhZygpXCIgY2FuIGJlIHVzZWQgZm9yIGRlbGV0aW5nIG1lc3NhZ2VzIHNldHRpbmcgdGhlIERlbGV0ZSBmbGFnIHRvIFwiRmxhZ0VudW0uREVMRVRFRFwiXG4gKiAgIHRoaXMuaW1hcC5zZXRGbGFnKCdJTkJPWCcsIFsxMjA2LCAxMjA1LCAxMjA0XSwgRmxhZ0VudW0uU0VFTiwgdHJ1ZSlcbiAqICAgLnRoZW4oKHJlczogTW9kaWZpY2F0aW9uUmVzdWx0KSA9PiB7XG4gKlxuICogICAgLy8gcmVzLnN0YXR1cyAtIHJldHVybiB0cnVlIG9yIGZhbHNlIGJhc2VkIG9uIHRoZSBkZWxldGlvbiBzdWNjZXNzXG4gKlxuICogICAvL3Jlcy5tb2RpZmllZE1lc3NhZ2VzIC0gZm9yIGV4LlsxMjA2LCAxMjA1LCAxMjA0XTtcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ltYXAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbWFwJyxcbiAgcGx1Z2luUmVmOiAnaW1hcCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWxla3NhbmRhcjg4OC9jb3Jkb3ZhLXBsdWdpbi1pbWFwLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFwIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBcImNvbm5lY3QoY2xpZW50RGF0YTogQ29uZmlnKVwiIHRyaWVzIHRvIGNvbm5lY3QgYW5kIGF1dGhlbnRpY2F0ZSB3aXRoIHRoZSBJTUFQIHNlcnZlci5cbiAgICogQHBhcmFtIGNsaWVudERhdGEge0NvbmZpZ30gQ29ubmVjdGlvbiBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q29ubmVjdGlvbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGNvbm5lY3Rpb24gZGF0YVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb25uZWN0KGNsaWVudERhdGE6IENvbmZpZyk6IFByb21pc2U8Q29ubmVjdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcImRpc2Nvbm5lY3QoKVwiIENsb3NlcyB0aGUgY29ubmVjdGlvbiB3aXRoIHRoZSBzZXJ2ZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHN0YXR1cy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogXCJpc0Nvbm5lY3RlZCgpXCIgQ2hlY2tzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb25uZWN0aW9uLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGNvbm5lY3Rpb24gc3RhdHVzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKiAgTm90ZTogQ29ubmVjdGVkIHRvIGFuIElNQVAgc2VydmljZSBpcyBSRVFVSVJFRCB0byBiZSBhYmxlIHRvIGdldCBkYXRhIGZyb20gdGhlIGJlbG93IGZ1bmN0aW9ucy4gICovXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgRm9sZGVyIG5hbWVzIGJhc2VkIG9uIGEgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4uXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGxpc3RNYWlsRm9sZGVycygnKicpIHVzaW5nIGEgJyonIHBhdHRlcm4gd2lsbCByZXR1cm4gYWxsIGZvbGRlciBuYW1lc1xuICAgKiBsaXN0TWFpbEZvbGRlcnMoJ0lOQk9YKicpIHVzaW5nIGEgcGF0dGVybiB3aXRoIGEgZm9sZGVyIG5hbWUgd2lsbCBsaXN0IGFsbCB0aGUgc3ViZm9sZGVyIG5hbWVzIHRoYXQgbWF0Y2ggdGhlIHBhdHRlcm5cbiAgICpcbiAgICpcbiAgICogXCJsaXN0TWFpbEZvbGRlcnMocGF0dGVybjogc3RyaW5nKVwiIExpc3RzIHRoZSBuYW1lIG9mIG1haWwgZm9sZGVycyBpbiB0aGUgbWFpbGJveC5cbiAgICogQHBhcmFtIHBhdHRlcm4ge3N0cmluZ30gUmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nW10+fSBSZXR1cm5zIGFycmF5IG9mIGZvbGRlciBuYW1lcyBtYXRjaGluZyB0aGUgcGF0dGVybi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbGlzdE1haWxGb2xkZXJzKHBhdHRlcm46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogXCJnZXRNZXNzYWdlQ291bnRCeUZvbGRlck5hbWUoZm9sZGVyTmFtZTogc3RyaW5nKVwiIEdldHMgdGhlIGNvdW50IG9mIHRoZSBtZXNzYWdlcyBpbiB0aGUgZm9sZGVyLlxuICAgKiBAcGFyYW0gZm9sZGVyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZGVzaXJlZCBmb2xkZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyB0aGUgY29uc2VjdXRpdmUgbnVtYmVyIG9mIHRoZSBsYXN0IG1lc3NhZ2UuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldE1lc3NhZ2VDb3VudEJ5Rm9sZGVyTmFtZShmb2xkZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcInNlYXJjaE1lc3NhZ2VzQnlEYXRlUGVyaW9kKGZvbGRlck5hbWU6IHN0cmluZywgZGF0ZUluTWlsbGlzZWNvbmRzOiBudW1iZXIsIGNvbXBhcmlzb246IENvbXBhcmlzb24pXCIgUmV0dXJucyB0aGUgbWVzc2FnZXMnIGNvbnNlY3V0aXZlIG51bWJlci5cbiAgICogQHBhcmFtIGZvbGRlck5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGRlc2lyZWQgZm9sZGVyXG4gICAqIEBwYXJhbSBkYXRlSW5NaWxsaXNlY29uZHMge251bWJlcn0gRGF0ZSBpbiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIGNvbXBhcmlzb24ge0NvbXBhcmlzb259IEEgY29tcGFyaXNvbiBvcGVyYXRvclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcltdPn0gUmV0dXJucyBhcnJheSB3aXRoIHRoZSBtZXNzYWdlcycgY29uc2VjdXRpdmUgbnVtYmVycy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VhcmNoTWVzc2FnZXNCeURhdGVQZXJpb2QoXG4gICAgZm9sZGVyTmFtZTogc3RyaW5nLFxuICAgIGRhdGVJbk1pbGxpc2Vjb25kczogbnVtYmVyLFxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25cbiAgKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcImxpc3RNZXNzYWdlc0hlYWRlcnNCeUNvbnNlY3V0aXZlTnVtYmVyKGZvbGRlck5hbWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpXCIgUmV0dXJucyBtZXNzYWdlcycgaGVhZGVycyBkYXRhIGJhc2VkIG9uIGEgXCJzdGFydFwiIGFuZCBcImVuZFwiIG1lc3NhZ2UgY29uc2VjdXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0gZm9sZGVyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZGVzaXJlZCBmb2xkZXJcbiAgICogQHBhcmFtIHN0YXJ0IHtudW1iZXJ9IENvbnNlY3V0aXZlIG51bWJlciBvZiB0aGUgZmlyc3QgbWVzc2FnZS5cbiAgICogQHBhcmFtIGVuZCB7bnVtYmVyfSBDb25zZWN1dGl2ZSBudW1iZXIgb2YgdGhlIGxhc3QgbWVzc2FnZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2VIZWFkZXJzW10+fSBSZXR1cm5zIGFycmF5IHdpdGggdGhlIG1lc3NhZ2VzJyBoZWFkZXJzIGRhdGEuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpc3RNZXNzYWdlc0hlYWRlcnNCeUNvbnNlY3V0aXZlTnVtYmVyKGZvbGRlck5hbWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBQcm9taXNlPE1lc3NhZ2VIZWFkZXJzW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogXCJsaXN0TWVzc2FnZXNIZWFkZXJzQnlEYXRlKGZvbGRlck5hbWU6IHN0cmluZywgZGF0ZUluTWlsbGlzZWNvbmRzOiBudW1iZXIsIGNvbXBhcmlzb246IENvbXBhcmlzb24pXCIgUmV0dXJucyBtZXNzYWdlcycgaGVhZGVycyBkYXRhIGJhc2VkIG9uIGEgZGF0ZS5cbiAgICogQHBhcmFtIGZvbGRlck5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGRlc2lyZWQgZm9sZGVyXG4gICAqIEBwYXJhbSBkYXRlSW5NaWxsaXNlY29uZHMge251bWJlcn0gRGF0ZSBpbiBtaWxsaXNlY29uZHMuXG4gICAqIEBwYXJhbSBjb21wYXJpc29uIHtDb21wYXJpc29ufSBBIGNvbXBhcmlzb24gb3BlcmF0b3JcbiAgICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlSGVhZGVyc1tdPn0gUmV0dXJucyBhcnJheSBtZXNzYWdlcycgaGVhZGVycyBkYXRhLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsaXN0TWVzc2FnZXNIZWFkZXJzQnlEYXRlKFxuICAgIGZvbGRlck5hbWU6IHN0cmluZyxcbiAgICBkYXRlSW5NaWxsaXNlY29uZHM6IG51bWJlcixcbiAgICBjb21wYXJpc29uOiBDb21wYXJpc29uXG4gICk6IFByb21pc2U8TWVzc2FnZUhlYWRlcnNbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcImdldEZ1bGxNZXNzYWdlRGF0YShmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1iZXI6IG51bWJlcilcIiBSZXR1cm5zIHRoZSBmdWxsIG1lc3NhZ2UgZGF0YSBpbmNsdWRpbmcgaXRzIGF0dGFjaG1lbnRzLlxuICAgKiBAcGFyYW0gZm9sZGVyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSB0aGUgbWVzc2FnZSdzIGZvbGRlci5cbiAgICogQHBhcmFtIG1lc3NhZ2VOdW1iZXIge251bWJlcn0gTWVzc2FnZSdzIGNvbnNlY3V0aXZlIG51bWJlci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlPn0gUmV0dXJucyBcIk1lc3NhZ2VcIiBvYmplY3Qgd2l0aCBmdWxsIG1lc3NhZ2UgZGF0YS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RnVsbE1lc3NhZ2VEYXRhKGZvbGRlck5hbWU6IHN0cmluZywgbWVzc2FnZU51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gXCJnZXRGdWxsTWVzc2FnZURhdGFPbk5ld1Nlc3Npb24oY2xpZW50RGF0YTogQ29uZmlnLCBmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1iZXI6IG51bWJlcilcIiBkb3dubG9hZHMgdGhlIGZ1bGwgbWVzc2FnZSBkYXRhIHVzaW5nIGFcbiAgICogc2VwYXJhdGUgc2Vzc2lvbiB3aXRoIHRoZSBzZXJ2ZXIuIEl0IGlzIHN1aXRhYmxlIGZvciBkb3dubG9hZGluZyBtZXNzYWdlIGRhdGEgd2hpbGUgdGhlIGFwcCBpcyBhbHJlYWR5IGNvbm5lY3RlZCB0byBhIHRoaXJkIHNlcnZlci5cbiAgICogXCJnZXRGdWxsTWVzc2FnZURhdGFPbk5ld1Nlc3Npb24oY2xpZW50RGF0YTogQ29uZmlnLCBmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1iZXI6IG51bWJlcilcIiBSZXR1cm5zIHRoZSBmdWxsIG1lc3NhZ2UgZGF0YSBpbmNsdWRpbmcgaXRzIGF0dGFjaG1lbnRzLlxuICAgKiBAcGFyYW0gY2xpZW50RGF0YSB7Q29uZmlnfSBDb25uZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSBmb2xkZXJOYW1lIHtzdHJpbmd9IFRoZSBuYW1lIHRoZSBtZXNzYWdlJ3MgZm9sZGVyLlxuICAgKiBAcGFyYW0gbWVzc2FnZU51bWJlciB7bnVtYmVyfSBNZXNzYWdlJ3MgY29uc2VjdXRpdmUgbnVtYmVyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2U+fSBSZXR1cm5zIFwiTWVzc2FnZVwiIG9iamVjdCB3aXRoIGZ1bGwgbWVzc2FnZSBkYXRhLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRGdWxsTWVzc2FnZURhdGFPbk5ld1Nlc3Npb24oY2xpZW50RGF0YTogQ29uZmlnLCBmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1iZXI6IG51bWJlcik6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcImNvcHlUb0ZvbGRlcihzb3VyY2VGb2xkZXI6IHN0cmluZywgZGVzdGluYXRpb25Gb2xkZXI6IHN0cmluZywgbWVzc2FnZU51bXM6IG51bWJlcltdKVwiIENvcHkgbWVzc2FnZXMgdG8gYSBkZXNpcmVkIGZvbGRlci5cbiAgICogQHBhcmFtIHNvdXJjZUZvbGRlciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgc291cmNlIGZvbGRlci5cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uRm9sZGVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBkZXN0aW5hdGlvbiBmb2xkZXIuXG4gICAqIEBwYXJhbSBtZXNzYWdlTnVtcyB7bnVtYmVyW119IEFycmF5IHdpdGggbWVzc2FnZXMnIGNvbnNlY3V0aXZlIG51bWJlcnMgb3IgYXJyYXkgd2l0aCBzaW5nbGUgbWVzc2FnZSBjb25zZWN1dGl2ZSBudW1iZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZT59IFJldHVybnMgYm9vbGVhbiBzdGF0dXMgb2YgdGhlIHByb2Nlc3MuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvcHlUb0ZvbGRlcihzb3VyY2VGb2xkZXI6IHN0cmluZywgZGVzdGluYXRpb25Gb2xkZXI6IHN0cmluZywgbWVzc2FnZU51bXM6IG51bWJlcltdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFwic2V0RmxhZyhmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1zOiBudW1iZXJbXSwgZmxhZzogRmxhZ0VudW0sIHN0YXR1czogYm9vbGVhbilcIiBTZXQgb3IgcmVtb3ZlIGZsYWcgZnJvbSBhIG1lc3NhZ2VcbiAgICogQHBhcmFtIGZvbGRlck5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHNvdXJjZSBmb2xkZXIgd2hlcmUgdGhlIG1lc3NhZ2VzIGFyZSBjb250YWluZWQuXG4gICAqIEBwYXJhbSBtZXNzYWdlTnVtcyB7bnVtYmVyW119IEFycmF5IHdpdGggbWVzc2FnZXMnIGNvbnNlY3V0aXZlIG51bWJlcnMgb3IgYXJyYXkgd2l0aCBzaW5nbGUgbWVzc2FnZSBjb25zZWN1dGl2ZSBudW1iZXJcbiAgICogQHBhcmFtIGZsYWcge0ZsYWdFbnVtfSBEZXNpcmVkIG1lc3NhZ2UgZmxhZy5cbiAgICogQHBhcmFtIHN0YXR1cyB7Ym9vbGVhbn0gU2V0IHN0YXR1cyB0byBcInRydWVcIiB0byBzZXQgdGhlIGZsYWcgb24gYSBtZXNzYWdlOyBvciB0byBcImZhbHNlXCIgdG8gcmVtb3ZlIHRoZSBmbGFnIGZyb20gdGhlIG1lc3NhZ2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxNb2RpZmljYXRpb25SZXN1bHQ+fSBSZXR1cm5zIG9iamVjdCB3aXRoIHN0YXR1cyBhbmQgYXJyYXkgd2l0aCBtZXNzYWdlcycgY29uc2VjdXRpdmUgbnVtYmVycyBvZiB0aGUgbW9kaWZpZWQgbWVzc2FnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RmxhZyhmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1zOiBudW1iZXJbXSwgZmxhZzogRmxhZ0VudW0sIHN0YXR1czogYm9vbGVhbik6IFByb21pc2U8TW9kaWZpY2F0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=