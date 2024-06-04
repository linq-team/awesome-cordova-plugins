import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
export var BarcodeFormat;
(function (BarcodeFormat) {
    BarcodeFormat[BarcodeFormat["UNKNOWN"] = -1] = "UNKNOWN";
    BarcodeFormat[BarcodeFormat["ALL_FORMATS"] = 0] = "ALL_FORMATS";
    BarcodeFormat[BarcodeFormat["CODE_128"] = 1] = "CODE_128";
    BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
    BarcodeFormat[BarcodeFormat["CODE_93"] = 4] = "CODE_93";
    BarcodeFormat[BarcodeFormat["CODABAR"] = 8] = "CODABAR";
    BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 16] = "DATA_MATRIX";
    BarcodeFormat[BarcodeFormat["EAN_13"] = 32] = "EAN_13";
    BarcodeFormat[BarcodeFormat["EAN_8"] = 64] = "EAN_8";
    BarcodeFormat[BarcodeFormat["ITF"] = 128] = "ITF";
    BarcodeFormat[BarcodeFormat["QR_CODE"] = 256] = "QR_CODE";
    BarcodeFormat[BarcodeFormat["UPC_A"] = 512] = "UPC_A";
    BarcodeFormat[BarcodeFormat["UPC_E"] = 1024] = "UPC_E";
    BarcodeFormat[BarcodeFormat["PDF417"] = 2048] = "PDF417";
    BarcodeFormat[BarcodeFormat["AZTEC"] = 4096] = "AZTEC";
})(BarcodeFormat || (BarcodeFormat = {}));
export var BarcodeValueType;
(function (BarcodeValueType) {
    /** Unknown Barcode value types.  */
    BarcodeValueType[BarcodeValueType["Unknown"] = 0] = "Unknown";
    /** Barcode value type for contact info. */
    BarcodeValueType[BarcodeValueType["ContactInfo"] = 1] = "ContactInfo";
    /** Barcode value type for email addresses. */
    BarcodeValueType[BarcodeValueType["Email"] = 2] = "Email";
    /** Barcode value type for ISBNs. */
    BarcodeValueType[BarcodeValueType["ISBN"] = 3] = "ISBN";
    /** Barcode value type for phone numbers. */
    BarcodeValueType[BarcodeValueType["Phone"] = 4] = "Phone";
    /** Barcode value type for product codes. */
    BarcodeValueType[BarcodeValueType["Product"] = 5] = "Product";
    /** Barcode value type for SMS details. */
    BarcodeValueType[BarcodeValueType["SMS"] = 6] = "SMS";
    /** Barcode value type for plain text. */
    BarcodeValueType[BarcodeValueType["Text"] = 7] = "Text";
    /** Barcode value type for URLs/bookmarks. */
    BarcodeValueType[BarcodeValueType["URL"] = 8] = "URL";
    /** Barcode value type for Wi-Fi access point details. */
    BarcodeValueType[BarcodeValueType["WiFi"] = 9] = "WiFi";
    /** Barcode value type for geographic coordinates. */
    BarcodeValueType[BarcodeValueType["GeographicCoordinates"] = 10] = "GeographicCoordinates";
    /** Barcode value type for calendar events. */
    BarcodeValueType[BarcodeValueType["CalendarEvent"] = 11] = "CalendarEvent";
    /** Barcode value type for driver's license data. */
    BarcodeValueType[BarcodeValueType["DriversLicense"] = 12] = "DriversLicense";
})(BarcodeValueType || (BarcodeValueType = {}));
export var BarcodeEmailType;
(function (BarcodeEmailType) {
    /** Unknown email type. */
    BarcodeEmailType[BarcodeEmailType["Unknown"] = 0] = "Unknown";
    /** Barcode work email type. */
    BarcodeEmailType[BarcodeEmailType["Work"] = 1] = "Work";
    /** Barcode home email type. */
    BarcodeEmailType[BarcodeEmailType["Home"] = 2] = "Home";
})(BarcodeEmailType || (BarcodeEmailType = {}));
export var BarcodePhoneType;
(function (BarcodePhoneType) {
    /** Unknown phone type. */
    BarcodePhoneType[BarcodePhoneType["Unknown"] = 0] = "Unknown";
    /** Barcode work phone type. */
    BarcodePhoneType[BarcodePhoneType["Work"] = 1] = "Work";
    /** Barcode home phone type. */
    BarcodePhoneType[BarcodePhoneType["Home"] = 2] = "Home";
    /** Barcode fax phone type. */
    BarcodePhoneType[BarcodePhoneType["Fax"] = 3] = "Fax";
    /** Barcode mobile phone type. */
    BarcodePhoneType[BarcodePhoneType["Mobile"] = 4] = "Mobile";
})(BarcodePhoneType || (BarcodePhoneType = {}));
export var BarcodeWiFiEncryptionType;
(function (BarcodeWiFiEncryptionType) {
    /** Barcode unknown Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Unknown"] = 0] = "Unknown";
    /** Barcode open Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Open"] = 1] = "Open";
    /** Barcode WPA Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WPA"] = 2] = "WPA";
    /** Barcode WEP Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WEP"] = 3] = "WEP";
})(BarcodeWiFiEncryptionType || (BarcodeWiFiEncryptionType = {}));
export var BarcodeAddressType;
(function (BarcodeAddressType) {
    /** Barcode unknown address type. */
    BarcodeAddressType[BarcodeAddressType["Unknown"] = 0] = "Unknown";
    /** Barcode work address type. */
    BarcodeAddressType[BarcodeAddressType["Work"] = 1] = "Work";
    /** Barcode home address type. */
    BarcodeAddressType[BarcodeAddressType["Home"] = 2] = "Home";
})(BarcodeAddressType || (BarcodeAddressType = {}));
var FirebaseVision = /** @class */ (function (_super) {
    __extends(FirebaseVision, _super);
    function FirebaseVision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseVision.prototype.onDeviceTextRecognizer = function (file_uri) { return cordova(this, "onDeviceTextRecognizer", {}, arguments); };
    FirebaseVision.prototype.barcodeDetector = function (file_uri) { return cordova(this, "barcodeDetector", {}, arguments); };
    FirebaseVision.prototype.imageLabeler = function (file_uri) { return cordova(this, "imageLabeler", {}, arguments); };
    FirebaseVision.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FirebaseVision, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FirebaseVision.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FirebaseVision });
    FirebaseVision.pluginName = "FirebaseVision";
    FirebaseVision.plugin = "cordova-plugin-firebase-mlvision";
    FirebaseVision.pluginRef = "FirebaseVisionPlugin";
    FirebaseVision.repo = "https://github.com/alon22/cordova-plugin-firebase-mlvision";
    FirebaseVision.platforms = ["Android", "iOS"];
    FirebaseVision = __decorate([], FirebaseVision);
    return FirebaseVision;
}(AwesomeCordovaNativePlugin));
export { FirebaseVision };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FirebaseVision, decorators: [{
            type: Injectable
        }], propDecorators: { onDeviceTextRecognizer: [], barcodeDetector: [], imageLabeler: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtdmlzaW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztBQW9DNUYsTUFBTSxDQUFOLElBQVksYUFnQlg7QUFoQkQsV0FBWSxhQUFhO0lBQ3ZCLHdEQUFZLENBQUE7SUFDWiwrREFBZSxDQUFBO0lBQ2YseURBQVksQ0FBQTtJQUNaLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsdURBQVcsQ0FBQTtJQUNYLGdFQUFnQixDQUFBO0lBQ2hCLHNEQUFXLENBQUE7SUFDWCxvREFBVSxDQUFBO0lBQ1YsaURBQVMsQ0FBQTtJQUNULHlEQUFhLENBQUE7SUFDYixxREFBVyxDQUFBO0lBQ1gsc0RBQVksQ0FBQTtJQUNaLHdEQUFhLENBQUE7SUFDYixzREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQWhCVyxhQUFhLEtBQWIsYUFBYSxRQWdCeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkEyQlg7QUEzQkQsV0FBWSxnQkFBZ0I7SUFDMUIsb0NBQW9DO0lBQ3BDLDZEQUFPLENBQUE7SUFDUCwyQ0FBMkM7SUFDM0MscUVBQVcsQ0FBQTtJQUNYLDhDQUE4QztJQUM5Qyx5REFBSyxDQUFBO0lBQ0wsb0NBQW9DO0lBQ3BDLHVEQUFJLENBQUE7SUFDSiw0Q0FBNEM7SUFDNUMseURBQUssQ0FBQTtJQUNMLDRDQUE0QztJQUM1Qyw2REFBTyxDQUFBO0lBQ1AsMENBQTBDO0lBQzFDLHFEQUFHLENBQUE7SUFDSCx5Q0FBeUM7SUFDekMsdURBQUksQ0FBQTtJQUNKLDZDQUE2QztJQUM3QyxxREFBRyxDQUFBO0lBQ0gseURBQXlEO0lBQ3pELHVEQUFJLENBQUE7SUFDSixxREFBcUQ7SUFDckQsMEZBQXFCLENBQUE7SUFDckIsOENBQThDO0lBQzlDLDBFQUFhLENBQUE7SUFDYixvREFBb0Q7SUFDcEQsNEVBQWMsQ0FBQTtBQUNoQixDQUFDLEVBM0JXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUEyQjNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7QUFDTixDQUFDLEVBUFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQU8zQjtBQUVELE1BQU0sQ0FBTixJQUFZLGdCQVdYO0FBWEQsV0FBWSxnQkFBZ0I7SUFDMUIsMEJBQTBCO0lBQzFCLDZEQUFPLENBQUE7SUFDUCwrQkFBK0I7SUFDL0IsdURBQUksQ0FBQTtJQUNKLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osOEJBQThCO0lBQzlCLHFEQUFHLENBQUE7SUFDSCxpQ0FBaUM7SUFDakMsMkRBQU0sQ0FBQTtBQUNSLENBQUMsRUFYVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBVzNCO0FBRUQsTUFBTSxDQUFOLElBQVkseUJBU1g7QUFURCxXQUFZLHlCQUF5QjtJQUNuQyw2Q0FBNkM7SUFDN0MsK0VBQU8sQ0FBQTtJQUNQLDBDQUEwQztJQUMxQyx5RUFBSSxDQUFBO0lBQ0oseUNBQXlDO0lBQ3pDLHVFQUFHLENBQUE7SUFDSCx5Q0FBeUM7SUFDekMsdUVBQUcsQ0FBQTtBQUNMLENBQUMsRUFUVyx5QkFBeUIsS0FBekIseUJBQXlCLFFBU3BDO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBT1g7QUFQRCxXQUFZLGtCQUFrQjtJQUM1QixvQ0FBb0M7SUFDcEMsaUVBQU8sQ0FBQTtJQUNQLGlDQUFpQztJQUNqQywyREFBSSxDQUFBO0lBQ0osaUNBQWlDO0lBQ2pDLDJEQUFJLENBQUE7QUFDTixDQUFDLEVBUFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQU83Qjs7SUF1SW1DLGtDQUEwQjs7OztJQVE1RCwrQ0FBc0IsYUFBQyxRQUFnQjtJQVV2Qyx3Q0FBZSxhQUFDLFFBQWdCO0lBVWhDLHFDQUFZLGFBQUMsUUFBZ0I7Z0hBNUJsQixjQUFjO29IQUFkLGNBQWM7Ozs7OztJQUFkLGNBQWMsa0JBQWQsY0FBYzt5QkFuUTNCO0VBbVFvQywwQkFBMEI7U0FBakQsY0FBYzs0RkFBZCxjQUFjO2tCQUQxQixVQUFVOzhCQVNULHNCQUFzQixNQVV0QixlQUFlLE1BVWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dCB7XG4gIHRleHQ6IHN0cmluZztcbiAgYmxvY2tzOiBUZXh0TGluZVtdO1xuICBpbWFnZUhlaWdodDogbnVtYmVyO1xuICBpbWFnZVdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dExpbmUgZXh0ZW5kcyBUZXh0QmxvY2sge1xuICBsaW5lczogVGV4dEVsZW1lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0RWxlbWVudCBleHRlbmRzIFRleHRCbG9jayB7XG4gIGVsZW1lbnRzOiBUZXh0QmxvY2tbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0QmxvY2sge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvcm5lclBvaW50czogVGV4dFBvaW50W107XG4gIGZyYW1lOiBUZXh0RnJhbWU7XG4gIHJlY29nbml6ZWRMYW5ndWFnZXM6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0UG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0RnJhbWUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVGb3JtYXQge1xuICBVTktOT1dOID0gLTEsXG4gIEFMTF9GT1JNQVRTID0gMCxcbiAgQ09ERV8xMjggPSAxLFxuICBDT0RFXzM5ID0gMixcbiAgQ09ERV85MyA9IDQsXG4gIENPREFCQVIgPSA4LFxuICBEQVRBX01BVFJJWCA9IDE2LFxuICBFQU5fMTMgPSAzMixcbiAgRUFOXzggPSA2NCxcbiAgSVRGID0gMTI4LFxuICBRUl9DT0RFID0gMjU2LFxuICBVUENfQSA9IDUxMixcbiAgVVBDX0UgPSAxMDI0LFxuICBQREY0MTcgPSAyMDQ4LFxuICBBWlRFQyA9IDQwOTYsXG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVWYWx1ZVR5cGUge1xuICAvKiogVW5rbm93biBCYXJjb2RlIHZhbHVlIHR5cGVzLiAgKi9cbiAgVW5rbm93bixcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgY29udGFjdCBpbmZvLiAqL1xuICBDb250YWN0SW5mbyxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgZW1haWwgYWRkcmVzc2VzLiAqL1xuICBFbWFpbCxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgSVNCTnMuICovXG4gIElTQk4sXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIHBob25lIG51bWJlcnMuICovXG4gIFBob25lLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBwcm9kdWN0IGNvZGVzLiAqL1xuICBQcm9kdWN0LFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBTTVMgZGV0YWlscy4gKi9cbiAgU01TLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBwbGFpbiB0ZXh0LiAqL1xuICBUZXh0LFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBVUkxzL2Jvb2ttYXJrcy4gKi9cbiAgVVJMLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBXaS1GaSBhY2Nlc3MgcG9pbnQgZGV0YWlscy4gKi9cbiAgV2lGaSxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgZ2VvZ3JhcGhpYyBjb29yZGluYXRlcy4gKi9cbiAgR2VvZ3JhcGhpY0Nvb3JkaW5hdGVzLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBjYWxlbmRhciBldmVudHMuICovXG4gIENhbGVuZGFyRXZlbnQsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGRyaXZlcidzIGxpY2Vuc2UgZGF0YS4gKi9cbiAgRHJpdmVyc0xpY2Vuc2UsXG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVFbWFpbFR5cGUge1xuICAvKiogVW5rbm93biBlbWFpbCB0eXBlLiAqL1xuICBVbmtub3duLFxuICAvKiogQmFyY29kZSB3b3JrIGVtYWlsIHR5cGUuICovXG4gIFdvcmssXG4gIC8qKiBCYXJjb2RlIGhvbWUgZW1haWwgdHlwZS4gKi9cbiAgSG9tZSxcbn1cblxuZXhwb3J0IGVudW0gQmFyY29kZVBob25lVHlwZSB7XG4gIC8qKiBVbmtub3duIHBob25lIHR5cGUuICovXG4gIFVua25vd24sXG4gIC8qKiBCYXJjb2RlIHdvcmsgcGhvbmUgdHlwZS4gKi9cbiAgV29yayxcbiAgLyoqIEJhcmNvZGUgaG9tZSBwaG9uZSB0eXBlLiAqL1xuICBIb21lLFxuICAvKiogQmFyY29kZSBmYXggcGhvbmUgdHlwZS4gKi9cbiAgRmF4LFxuICAvKiogQmFyY29kZSBtb2JpbGUgcGhvbmUgdHlwZS4gKi9cbiAgTW9iaWxlLFxufVxuXG5leHBvcnQgZW51bSBCYXJjb2RlV2lGaUVuY3J5cHRpb25UeXBlIHtcbiAgLyoqIEJhcmNvZGUgdW5rbm93biBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXG4gIFVua25vd24sXG4gIC8qKiBCYXJjb2RlIG9wZW4gV2ktRmkgZW5jcnlwdGlvbiB0eXBlLiAqL1xuICBPcGVuLFxuICAvKiogQmFyY29kZSBXUEEgV2ktRmkgZW5jcnlwdGlvbiB0eXBlLiAqL1xuICBXUEEsXG4gIC8qKiBCYXJjb2RlIFdFUCBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXG4gIFdFUCxcbn1cblxuZXhwb3J0IGVudW0gQmFyY29kZUFkZHJlc3NUeXBlIHtcbiAgLyoqIEJhcmNvZGUgdW5rbm93biBhZGRyZXNzIHR5cGUuICovXG4gIFVua25vd24sXG4gIC8qKiBCYXJjb2RlIHdvcmsgYWRkcmVzcyB0eXBlLiAqL1xuICBXb3JrLFxuICAvKiogQmFyY29kZSBob21lIGFkZHJlc3MgdHlwZS4gKi9cbiAgSG9tZSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlIHtcbiAgdmFsdWVUeXBlOiBCYXJjb2RlVmFsdWVUeXBlO1xuICBmb3JtYXQ6IEJhcmNvZGVGb3JtYXQ7XG4gIHJhd1ZhbHVlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nO1xuICBjb3JuZXJQb2ludHM6IGFueTtcbiAgaW1hZ2VIZWlnaHQ6IG51bWJlcjtcbiAgaW1hZ2VXaWR0aDogbnVtYmVyO1xuICBlbWFpbDogQmFyY29kZUVtYWlsO1xuICBwaG9uZTogQmFyY29kZVBob25lO1xuICBzbXM6IEJhcmNvZGVTbXM7XG4gIHVybDogQmFyY29kZVVybDtcbiAgd2lmaTogQmFyY29kZVdpZmk7XG4gIGdlb1BvaW50OiBCYXJjb2RlR2VvUG9pbnQ7XG4gIGNhbGVuZGFyRXZlbnQ6IEJhcmNvZGVDYWxlbmRhckV2ZW50O1xuICBjb250YWN0SW5mbzogQmFyY29kZUNvbnRhY3RJbmZvO1xuICBkcml2ZXJMaWNlbnNlOiBCYXJjb2RlRHJpdmVyTGljZW5zZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRW1haWwge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgc3ViamVjdDogc3RyaW5nO1xuICB0eXBlOiBCYXJjb2RlRW1haWxUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVQaG9uZSB7XG4gIG51bWJlcjogc3RyaW5nO1xuICB0eXBlOiBCYXJjb2RlUGhvbmVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVTbXMge1xuICBwaG9uZU51bWJlcjogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVVybCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlV2lmaSB7XG4gIHNzaWQ6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgdHlwZTogQmFyY29kZVdpRmlFbmNyeXB0aW9uVHlwZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUdlb1BvaW50IHtcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUNhbGVuZGFyRXZlbnQge1xuICBldmVudERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIG9yZ2FuaXplcjogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgc3VtbWFyeTogc3RyaW5nO1xuICBzdGFydDogYW55O1xuICBlbmQ6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ29udGFjdEluZm8ge1xuICB0aXRsZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFkZHJlc3NlczogQmFyY29kZUFkZHJlc3NbXTtcbiAgcGhvbmVzOiBCYXJjb2RlUGhvbmVbXTtcbiAgZW1haWxzOiBCYXJjb2RlRW1haWxbXTtcbiAgb3JnYW5pemF0aW9uOiBzdHJpbmc7XG4gIHVybHM6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQWRkcmVzcyB7XG4gIGFkZHJlc3NMaW5lOiBzdHJpbmc7XG4gIHR5cGU6IEJhcmNvZGVBZGRyZXNzVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRHJpdmVyTGljZW5zZSB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBtaWRkbGVOYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBhZGRyZXNzQ2l0eTogc3RyaW5nO1xuICBhZGRyZXNzU3RhdGU6IHN0cmluZztcbiAgYWRkcmVzc1N0cmVldDogc3RyaW5nO1xuICBhZGRyZXNzWmlwOiBzdHJpbmc7XG4gIGJpcnRoRGF0ZTogc3RyaW5nO1xuICBkb2N1bWVudFR5cGU6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBleHBpcnlEYXRlOiBzdHJpbmc7XG4gIGlzc3VpbmdEYXRlOiBzdHJpbmc7XG4gIGlzc3VpbmdDb3VudHJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VMYWJlbCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGNvbmZpZGVuY2U6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuLyoqXG4gKiBAbmFtZSBGaXJlYmFzZSBWaXNpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIE1MS2l0IFZpc2lvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaXJlYmFzZVZpc2lvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maXJlYmFzZS12aXNpb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVZpc2lvbjogRmlyZWJhc2VWaXNpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlVmlzaW9uLm9uRGV2aWNlVGV4dFJlY29nbml6ZXIoRklMRV9VUkkpXG4gKiAgIC50aGVuKChyZXM6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5iYXJjb2RlRGV0ZWN0b3IoRklMRV9VUkkpXG4gKiAgIC50aGVuKChyZXM6IEJhcmNvZGVbXSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5pbWFnZUxhYmVsZXIoRklMRV9VUkkpXG4gKiAgIC50aGVuKChyZXM6IEltYWdlTGFiZWxbXSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VWaXNpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tbHZpc2lvbicsXG4gIHBsdWdpblJlZjogJ0ZpcmViYXNlVmlzaW9uUGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbG9uMjIvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbWx2aXNpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VWaXNpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZWNvZ25pemUgdGV4dCBpbiBpbWFnZVxuICAgKlxuICAgKiBAcGFyYW0gZmlsZV91cmkge3N0cmluZ30gSW1hZ2UgVVJJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgdGV4dCBpbiB0aGUgaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25EZXZpY2VUZXh0UmVjb2duaXplcihmaWxlX3VyaTogc3RyaW5nKTogUHJvbWlzZTxUZXh0PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBSZWFkIGRhdGEgZnJvbSBCYXJjb2RlXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlX3VyaSB7c3RyaW5nfSBJbWFnZSBVUklcbiAgICogQHJldHVybnMge1Byb21pc2U8QmFyY29kZVtdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSBkYXRhIGluIGJhcmNvZGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYmFyY29kZURldGVjdG9yKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPEJhcmNvZGVbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUmVjb2duaXplIG9iamVjdCBpbiBpbWFnZVxuICAgKlxuICAgKiBAcGFyYW0gZmlsZV91cmkge3N0cmluZ30gSW1hZ2UgVVJJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEltYWdlTGFiZWxbXT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgZW50aXRpZXMgaW4gYW4gaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW1hZ2VMYWJlbGVyKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPEltYWdlTGFiZWxbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19