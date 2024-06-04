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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var NFCOriginal = /** @class */ (function (_super) {
    __extends(NFCOriginal, _super);
    function NFCOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFCOriginal.prototype.readerMode = function (flags) { return cordova(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFCOriginal.prototype.scanNdef = function (options) { return cordova(this, "scanNdef", { "sync": true }, arguments); };
    NFCOriginal.prototype.scanTag = function (options) { return cordova(this, "scanTag", { "sync": true }, arguments); };
    NFCOriginal.prototype.cancelScan = function () { return cordova(this, "cancelScan", { "sync": true }, arguments); };
    NFCOriginal.prototype.connect = function (tech, timeout) { return cordova(this, "connect", { "sync": true }, arguments); };
    NFCOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    NFCOriginal.prototype.transceive = function (data) { return cordova(this, "transceive", { "sync": true }, arguments); };
    NFCOriginal.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFCOriginal.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFCOriginal.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFCOriginal.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFCOriginal.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFCOriginal.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFCOriginal.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFCOriginal.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFCOriginal.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFCOriginal.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFCOriginal.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFCOriginal.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFCOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_A", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_A"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_A", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_B", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_B"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_B", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_F", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_F"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_F", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_V", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_V"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_V", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: false,
        configurable: true
    });
    NFCOriginal.pluginName = "NFC";
    NFCOriginal.plugin = "phonegap-nfc";
    NFCOriginal.pluginRef = "nfc";
    NFCOriginal.repo = "https://github.com/linq-team/phonegap-nfc-14";
    NFCOriginal.platforms = ["Android", "iOS", "Windows"];
    return NFCOriginal;
}(AwesomeCordovaNativePlugin));
var NFC = new NFCOriginal();
export { NFC };
var NdefOriginal = /** @class */ (function (_super) {
    __extends(NdefOriginal, _super);
    function NdefOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NdefOriginal.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    NdefOriginal.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    NdefOriginal.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.decodeTnf = function (tnf_byte) { return cordova(this, "decodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(NdefOriginal.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: false,
        configurable: true
    });
    NdefOriginal.pluginName = "NFC";
    NdefOriginal.plugin = "phonegap-nfc";
    NdefOriginal.pluginRef = "ndef";
    return NdefOriginal;
}(AwesomeCordovaNativePlugin));
var Ndef = new NdefOriginal();
export { Ndef };
var NfcUtilOriginal = /** @class */ (function (_super) {
    __extends(NfcUtilOriginal, _super);
    function NfcUtilOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtilOriginal.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.arrayBufferToHexString = function (buffer) { return cordova(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.hexStringToArrayBuffer = function (hexString) { return cordova(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtilOriginal.pluginName = "NFC";
    NfcUtilOriginal.plugin = "phonegap-nfc";
    NfcUtilOriginal.pluginRef = "util";
    return NfcUtilOriginal;
}(AwesomeCordovaNativePlugin));
var NfcUtil = new NfcUtilOriginal();
export { NfcUtil };
var TextHelper = /** @class */ (function (_super) {
    __extends(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(AwesomeCordovaNativePlugin));
export { TextHelper };
var UriHelper = /** @class */ (function (_super) {
    __extends(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(AwesomeCordovaNativePlugin));
export { UriHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmZjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFrR1QsdUJBQTBCOzs7O0lBNkJqRCx3QkFBVSxhQUFDLEtBQWE7SUFVeEIsc0JBQVEsYUFBQyxPQUFxQjtJQVk5QixxQkFBTyxhQUFDLE9BQXFCO0lBUzdCLHdCQUFVO0lBV1YscUJBQU8sYUFBQyxJQUFZLEVBQUUsT0FBZ0I7SUFTdEMsbUJBQUs7SUFZTCx3QkFBVSxhQUFDLElBQTBCO0lBa0JyQywwQkFBWSxhQUFDLFNBQW9CLEVBQUUsU0FBb0I7SUFpQnZELDZCQUFlLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQWlCMUQsc0NBQXdCLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQWtCbkUsaUNBQW1CLGFBQUMsUUFBZ0IsRUFBRSxTQUFvQixFQUFFLFNBQW9CO0lBZWhGLHVDQUF5QixhQUFDLFNBQW9CLEVBQUUsU0FBb0I7SUFVcEUsbUJBQUssYUFBQyxPQUFjO0lBUXBCLDBCQUFZO0lBVVosbUJBQUssYUFBQyxPQUFjO0lBU3BCLHFCQUFPO0lBUVAsbUJBQUs7SUFVTCxzQkFBUSxhQUFDLElBQWM7SUFTdkIsMEJBQVk7SUFTWiwwQkFBWTtJQVNaLHFCQUFPO0lBYVAsMkJBQWEsYUFBQyxLQUFlO0lBUzdCLDJCQUFhLGFBQUMsR0FBVztJQVN6Qiw4QkFBZ0IsYUFBQyxLQUFlOzBCQTlSaEMsa0NBQWlCOzs7Ozs7MEJBRWpCLGtDQUFpQjs7Ozs7OzBCQUVqQixrQ0FBaUI7Ozs7OzswQkFFakIsa0NBQWlCOzs7Ozs7MEJBRWpCLHdDQUF1Qjs7Ozs7OzBCQUV2Qiw0Q0FBMkI7Ozs7OzswQkFFM0IsK0NBQThCOzs7Ozs7Ozs7OztjQXBIaEM7RUFvR3lCLDBCQUEwQjtTQUF0QyxHQUFHOztJQXNUVSx3QkFBMEI7Ozs7SUFtQmxELHFCQUFNLGFBQUMsR0FBVyxFQUFFLElBQXVCLEVBQUUsRUFBcUIsRUFBRSxPQUEwQjtJQUs5Rix5QkFBVSxhQUFDLElBQVksRUFBRSxZQUFxQixFQUFFLEVBQXNCO0lBS3RFLHdCQUFTLGFBQUMsR0FBVyxFQUFFLEVBQXNCO0lBSzdDLGdDQUFpQixhQUFDLEdBQVcsRUFBRSxPQUEwQixFQUFFLEVBQXNCO0lBS2pGLDhCQUFlLGFBQUMsUUFBZ0IsRUFBRSxPQUFlO0lBS2pELDBCQUFXLGFBQUMsV0FBa0IsRUFBRSxFQUFzQjtJQUt0RCwwQkFBVztJQUtYLHVDQUF3QixhQUFDLFdBQW1CO0lBSzVDLDRCQUFhLGFBQUMsV0FBZ0I7SUFLOUIsNEJBQWEsYUFBQyxLQUFVO0lBS3hCLHdCQUFTLGFBQUMsUUFBYTtJQUt2Qix3QkFBUyxhQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsR0FBUTtJQUsvRCwwQkFBVyxhQUFDLEdBQVE7MEJBN0VwQiwyQkFBUzs7Ozs7OzBCQUVULGdDQUFjOzs7Ozs7MEJBRWQsZ0NBQWM7Ozs7OzswQkFFZCxrQ0FBZ0I7Ozs7OzswQkFFaEIsbUNBQWlCOzs7Ozs7MEJBRWpCLDZCQUFXOzs7Ozs7MEJBRVgsK0JBQWE7Ozs7OzswQkFFYiw4QkFBWTs7Ozs7OzBCQW9FWiw0QkFBVTs7Ozs7OzBCQUdWLDJCQUFTOzs7Ozs7Ozs7ZUFqZlg7RUEwWjBCLDBCQUEwQjtTQUF2QyxJQUFJOztJQW1HWSwyQkFBMEI7Ozs7SUFFckQsdUJBQUssYUFBQyxDQUFTO0lBS2YsNkJBQVcsYUFBQyxDQUFTO0lBS3JCLCtCQUFhLGFBQUMsQ0FBVztJQUt6QiwrQkFBYSxhQUFDLENBQVM7SUFLdkIsa0NBQWdCLGFBQUMsS0FBZTtJQUtoQyx3QkFBTSxhQUFDLE1BQWtCLEVBQUUsR0FBVyxFQUFFLElBQXVCO0lBSy9ELHdDQUFzQixhQUFDLE1BQW1CO0lBSzFDLHdDQUFzQixhQUFDLFNBQWlCOzs7O2tCQWxpQjFDO0VBNmY2QiwwQkFBMEI7U0FBMUMsT0FBTzs7SUEwQ1ksOEJBQTBCOzs7O0lBQ3hELGtDQUFhLEdBQWIsVUFBYyxJQUFjO1FBQzFCLE9BQU87SUFDVCxDQUFDO0lBQ0Qsa0NBQWEsR0FBYixVQUFjLElBQVksRUFBRSxJQUFZO1FBQ3RDLE9BQU87SUFDVCxDQUFDO3FCQTdpQkg7RUF1aUJnQywwQkFBMEI7OztJQVMzQiw2QkFBMEI7Ozs7SUFDdkQsaUNBQWEsR0FBYixVQUFjLElBQWM7UUFDMUIsT0FBTztJQUNULENBQUM7SUFDRCxpQ0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixPQUFPO0lBQ1QsQ0FBQztvQkF0akJIO0VBZ2pCK0IsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbi8vIHRhZyBzaG91bGQgYmUgTmZjVGFnLCBidXQga2VlcGluZyBhcyBOZGVmVGFnIHRvIGF2b2lkIGJyZWFraW5nIGV4aXN0aW5nIGNvZGVcbmV4cG9ydCBpbnRlcmZhY2UgTmRlZkV2ZW50IHtcbiAgdGFnOiBOZGVmVGFnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZSZWNvcmQge1xuICBpZDogYW55W107XG4gIHBheWxvYWQ6IG51bWJlcltdO1xuICB0bmY6IG51bWJlcjtcbiAgdHlwZTogbnVtYmVyW107XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIE5mY1RhZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZUYWcge1xuICBjYW5NYWtlUmVhZE9ubHk6IGJvb2xlYW47XG4gIGlkOiBudW1iZXJbXTtcbiAgaXNXcml0YWJsZTogYm9vbGVhbjtcbiAgbWF4U2l6ZTogbnVtYmVyO1xuICBuZGVmTWVzc2FnZTogTmRlZlJlY29yZFtdO1xuICB0ZWNoVHlwZXM6IHN0cmluZ1tdO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZjVGFnIHtcbiAgaWQ/OiBudW1iZXJbXTtcbiAgY2FuTWFrZVJlYWRPbmx5PzogYm9vbGVhbjtcbiAgaXNXcml0YWJsZT86IGJvb2xlYW47XG4gIG1heFNpemU/OiBudW1iZXI7XG4gIG5kZWZNZXNzYWdlPzogTmRlZlJlY29yZFtdO1xuICB0ZWNoVHlwZXM/OiBzdHJpbmdbXTtcbiAgdHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2FuT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCBrZWVwIHRoZSBzY2FuIHNlc3Npb24gb3BlbiBzbyB3cml0ZSBjYW4gYmUgY2FsbGVkXG4gICAqIGFmdGVyIHJlYWRpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgKi9cbiAga2VlcFNlc3Npb25PcGVuPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBORkNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIE5GQyBwbHVnaW4gYWxsb3dzIHlvdSB0byByZWFkIGFuZCB3cml0ZSBORkMgdGFncy4gWW91IGNhbiBhbHNvIGJlYW0gdG8sIGFuZCByZWNlaXZlIGZyb20sIG90aGVyIE5GQyBlbmFibGVkIGRldmljZXMuXG4gKlxuICogVXNlIHRvXG4gKiAtIHJlYWQgZGF0YSBmcm9tIE5GQyB0YWdzXG4gKiAtIHdyaXRlIGRhdGEgdG8gTkZDIHRhZ3NcbiAqIC0gc2VuZCBkYXRhIHRvIG90aGVyIE5GQyBlbmFibGVkIGRldmljZXNcbiAqIC0gcmVjZWl2ZSBkYXRhIGZyb20gTkZDIGRldmljZXNcbiAqXG4gKiBUaGlzIHBsdWdpbiB1c2VzIE5ERUYgKE5GQyBEYXRhIEV4Y2hhbmdlIEZvcm1hdCkgZm9yIG1heGltdW0gY29tcGF0aWJpbHR5IGJldHdlZW4gTkZDIGRldmljZXMsIHRhZyB0eXBlcywgYW5kIG9wZXJhdGluZyBzeXN0ZW1zLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBORkMsIE5kZWYgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbmZjL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZmM6IE5GQywgcHJpdmF0ZSBuZGVmOiBOZGVmKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBSZWFkIE5GQyBUYWcgLSBBbmRyb2lkXG4gKiAvLyBPbmNlIHRoZSByZWFkZXIgbW9kZSBpcyBlbmFibGVkLCBhbnkgdGFncyB0aGF0IGFyZSBzY2FubmVkIGFyZSBzZW50IHRvIHRoZSBzdWJzY3JpYmVyXG4gKiAgbGV0IGZsYWdzID0gdGhpcy5uZmMuRkxBR19SRUFERVJfTkZDX0EgfCB0aGlzLm5mYy5GTEFHX1JFQURFUl9ORkNfVjtcbiAqICB0aGlzLnJlYWRlck1vZGUkID0gdGhpcy5uZmMucmVhZGVyTW9kZShmbGFncykuc3Vic2NyaWJlKFxuICogICAgICB0YWcgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGFnKSksXG4gKiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyB0YWcnLCBlcnIpXG4gKiAgKTtcbiAqXG4gKiAvLyBSZWFkIE5GQyBUYWcgLSBpT1NcbiAqIC8vIE9uIGlPUywgYSBORkMgcmVhZGVyIHNlc3Npb24gdGFrZXMgY29udHJvbCBmcm9tIHlvdXIgYXBwIHdoaWxlIHNjYW5uaW5nIHRhZ3MgdGhlbiByZXR1cm5zIGEgdGFnXG4gKiB0cnkge1xuICogICAgIGxldCB0YWcgPSBhd2FpdCB0aGlzLm5mYy5zY2FuTmRlZigpO1xuICogICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRhZykpO1xuICogIH0gY2F0Y2ggKGVycikge1xuICogICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyB0YWcnLCBlcnIpO1xuICogIH1cbiAqXG4gKiBgYGBcbiAqXG4gKiBGb3IgbW9yZSBkZXRhaWxzIG9uIE5GQyB0YWcgb3BlcmF0aW9ucyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTkZDJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcbiAgcGx1Z2luUmVmOiAnbmZjJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9saW5xLXRlYW0vcGhvbmVnYXAtbmZjLTE0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG4vKipcbiAqIEB7IE5GQyB9IGNsYXNzIG1ldGhvZHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5GQyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLy8gRmxhZ3MgZm9yIHJlYWRlck1vZGVcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vcmVmZXJlbmNlL2FuZHJvaWQvbmZjL05mY0FkYXB0ZXIjRkxBR19SRUFERVJfTkZDX0FcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05GQ19BOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGTEFHX1JFQURFUl9ORkNfQjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRkxBR19SRUFERVJfTkZDX0Y6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05GQ19WOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGTEFHX1JFQURFUl9ORkNfQkFSQ09ERTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRkxBR19SRUFERVJfU0tJUF9OREVGX0NIRUNLOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGTEFHX1JFQURFUl9OT19QTEFURk9STV9TT1VORFM6IG51bWJlcjtcblxuICAvKipcbiAgICogUmVhZCBORkMgdGFncyBzZW5kaW5nIHRoZSB0YWcgZGF0YSB0byB0aGUgc3VjY2VzcyBjYWxsYmFjay5cbiAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNyZWFkZXJtb2RlXG4gICAqIEBwYXJhbSBmbGFnc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2Rpc2FibGVSZWFkZXJNb2RlJyxcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZSxcbiAgfSlcbiAgcmVhZGVyTW9kZShmbGFnczogbnVtYmVyKTogT2JzZXJ2YWJsZTxOZmNUYWc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gc2Nhbk5kZWYgc3RhcnRzIHRoZSBORkNOREVGUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY3NjYW5uZGVmXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2Nhbk5kZWYob3B0aW9ucz86IFNjYW5PcHRpb25zKTogUHJvbWlzZTxOZmNUYWc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gc2NhblRhZyBzdGFydHMgdGhlIE5GQ1RhZ1JlYWRlclNlc3Npb24gYWxsb3dpbmcgaU9TIHRvIHNjYW4gTkZDIHRhZ3MuXG4gICAqXG4gICAqIFlvdSBwcm9iYWJseSB3YW50ICpzY2FuTmRlZiogZm9yIHJlYWRpbmcgTkZDIHRhZ3Mgb24gaU9TLiBPbmx5IHVzZSBzY2FuVGFnIGlmIHlvdSBuZWVkIHRoZSB0YWcgVUlELlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjc2NhbnRhZ1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNjYW5UYWcob3B0aW9ucz86IFNjYW5PcHRpb25zKTogUHJvbWlzZTxOZmNUYWc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FuY2VsU2NhbiBzdG9wcyB0aGUgTkZDUmVhZGVyU2Vzc2lvbiByZXR1cm5pbmcgY29udHJvbCB0byB5b3VyIGFwcC5cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY2NhbmNlbHNjYW5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjYW5jZWxTY2FuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgdG8gdGhlIHRhZyBhbmQgZW5hYmxlIEkvTyBvcGVyYXRpb25zIHRvIHRoZSB0YWcgZnJvbSB0aGlzIFRhZ1RlY2hub2xvZ3kgb2JqZWN0LlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY29ubmVjdFxuICAgKiBAcGFyYW0gdGVjaCBUaGUgdGFnIHRlY2hub2xvZ3kgY2xhc3MgbmFtZSBlLmcuIGFuZHJvaWQubmZjLnRlY2guSXNvRGVwXG4gICAqIEBwYXJhbSB0aW1lb3V0IFRoZSB0cmFuc2NlaXZlKGJ5dGVbXSkgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgW29wdGlvbmFsXVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbm5lY3QodGVjaDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgVGFnVGVjaG5vbG9neSBjb25uZWN0aW9uLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY2xvc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJhdyBjb21tYW5kIHRvIHRoZSB0YWcgYW5kIHJlY2VpdmUgdGhlIHJlc3BvbnNlLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjdHJhbnNjZWl2ZVxuICAgKlxuICAgKiBFeGFtcGxlIGNvZGUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI3RhZy10ZWNobm9sb2d5LWZ1bmN0aW9ucy0xXG4gICAqIEBwYXJhbSBkYXRhIGFuIEFycmF5QnVmZmVyIG9yIHN0cmluZyBvZiBoZXggZGF0YSBlLmcuICcwMCBBNCAwNCAwMCAwNyBEMiA3NiAwMCAwMCA4NSAwMSAwMCdcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFuc2NlaXZlKGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxuICAgKiBAZGVwcmVjYXRlZCB1c2Ugc2Nhbk5kZWYgb3Igc2NhblRhZ1xuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzLFxuICAgIGNsZWFyRnVuY3Rpb246ICdpbnZhbGlkYXRlU2Vzc2lvbicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgYmVnaW5TZXNzaW9uKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYW55IE5ERUYgdGFnLlxuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzLFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVOZGVmTGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIGFkZE5kZWZMaXN0ZW5lcihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPE5kZWZFdmVudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRhZ3MgbWF0Y2hpbmcgYW55IHRhZyB0eXBlLlxuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzLFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVUYWdEaXNjb3ZlcmVkTGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIGFkZFRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIE5ERUYgdGFncyBtYXRjaGluZyBhIHNwZWNpZmllZCBNSU1FIHR5cGUuXG4gICAqIEBwYXJhbSBtaW1lVHlwZVxuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVNaW1lVHlwZUxpc3RlbmVyJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBhZGRNaW1lVHlwZUxpc3RlbmVyKG1pbWVUeXBlOiBzdHJpbmcsIG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgZm9ybWF0YWJsZSBOREVGIHRhZ3MuXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGFkZE5kZWZGb3JtYXRhYmxlTGlzdGVuZXIob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGFuIE5kZWZNZXNzYWdlKGFycmF5IG9mIG5kZWYgcmVjb3JkcykgdG8gYSBORkMgdGFnLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7YW55W119XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHdyaXRlKG1lc3NhZ2U6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIE1ha2VzIGEgTkZDIHRhZyByZWFkIG9ubHkuICoqV2FybmluZyoqIHRoaXMgaXMgcGVybWFuZW50LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtYWtlUmVhZE9ubHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGFuIE5ERUYgTWVzc2FnZShhcnJheSBvZiBuZGVmIHJlY29yZHMpIHZpYSBwZWVyLXRvLXBlZXIuXG4gICAqIEBwYXJhbSBtZXNzYWdlIEFuIGFycmF5IG9mIE5ERUYgUmVjb3Jkcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hhcmUobWVzc2FnZTogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBwZWVyLXRvLXBlZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuc2hhcmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXJhc2UgYSBOREVGIHRhZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlcmFzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgZmlsZSB0byBhbm90aGVyIGRldmljZSB2aWEgTkZDIGhhbmRvdmVyLlxuICAgKiBAcGFyYW0gdXJpcyBBIFVSSSBhcyBhIFN0cmluZywgb3IgYW4gYXJyYXkgb2YgVVJJcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFuZG92ZXIodXJpczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBORkMgaGFuZG92ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BIYW5kb3ZlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgZGV2aWNlJ3MgTkZDIHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93U2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgTkZDIGlzIGF2YWlsYWJsZSBhbmQgZW5hYmxlZCBvbiB0aGlzIGRldmljZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQHsgTkZDIH0gY2xhc3MgdXRpbGl0eSBtZXRob2RzXG4gICAqIGZvciB1c2Ugd2l0aFxuICAgKi9cbiAgLyoqXG4gICAqIENvbnZlcnQgYnl0ZSBhcnJheSB0byBzdHJpbmdcbiAgICogQHBhcmFtIGJ5dGVzIHtudW1iZXJbXX1cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvU3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZyB0byBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdHJpbmdUb0J5dGVzKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBieXRlIGFycmF5IHRvIGhleCBzdHJpbmdcbiAgICogQHBhcmFtIGJ5dGVzIHtudW1iZXJbXX1cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvSGV4U3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdORkMnLFxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxuICBwbHVnaW5SZWY6ICduZGVmJyxcbn0pXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogVXRpbGl0eSBtZXRob2RzIGZvciBjcmVhdGluZyBuZGVmIHJlY29yZHMgZm9yIHRoZSBuZGVmIHRhZyBmb3JtYXQuXG4gKiBNb3ZlIHJlY29yZHMgaW50byBhcnJheSBiZWZvcmUgdXNhZ2UuIFRoZW4gcGFzcyBhbiBhcnJheSB0byBtZXRob2RzIGFzIHBhcmFtZXRlcnMuXG4gKiBEbyBub3QgcGFzcyBieXRlcyBhcyBwYXJhbWV0ZXJzIGZvciB0aGVzZSBtZXRob2RzLCBjb252ZXJzaW9uIGlzIGJ1aWx0IGluLlxuICogRm9yIHVzYWdlIHdpdGggbmZjLndyaXRlKCkgYW5kIG5mYy5zaGFyZSgpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZGVmIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0VNUFRZOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfV0VMTF9LTk9XTjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX01JTUVfTUVESUE6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9BQlNPTFVURV9VUkk6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9FWFRFUk5BTF9UWVBFOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfVU5LTk9XTjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX1VOQ0hBTkdFRDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX1JFU0VSVkVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlY29yZCh0bmY6IG51bWJlciwgdHlwZTogbnVtYmVyW10gfCBzdHJpbmcsIGlkOiBudW1iZXJbXSB8IHN0cmluZywgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdGV4dFJlY29yZCh0ZXh0OiBzdHJpbmcsIGxhbmd1YWdlQ29kZT86IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cmlSZWNvcmQodXJpOiBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWJzb2x1dGVVcmlSZWNvcmQodXJpOiBzdHJpbmcsIHBheWxvYWQ6IG51bWJlcltdIHwgc3RyaW5nLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG1pbWVNZWRpYVJlY29yZChtaW1lVHlwZTogc3RyaW5nLCBwYXlsb2FkOiBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc21hcnRQb3N0ZXIobmRlZlJlY29yZHM6IGFueVtdLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVtcHR5UmVjb3JkKCk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhbmRyb2lkQXBwbGljYXRpb25SZWNvcmQocGFja2FnZU5hbWU6IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBlbmNvZGVNZXNzYWdlKG5kZWZSZWNvcmRzOiBhbnkpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWNvZGVNZXNzYWdlKGJ5dGVzOiBhbnkpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWNvZGVUbmYodG5mX2J5dGU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVuY29kZVRuZihtYjogYW55LCBtZTogYW55LCBjZjogYW55LCBzcjogYW55LCBpbDogYW55LCB0bmY6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRuZlRvU3RyaW5nKHRuZjogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdGV4dEhlbHBlcjogVGV4dEhlbHBlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdXJpSGVscGVyOiBVcmlIZWxwZXI7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05GQycsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXG4gIHBsdWdpblJlZjogJ3V0aWwnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZmNVdGlsIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdG9IZXgoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdG9QcmludGFibGUoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb1N0cmluZyhpOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0cmluZ1RvQnl0ZXMoczogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvSGV4U3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGlzVHlwZShyZWNvcmQ6IE5kZWZSZWNvcmQsIHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhcnJheUJ1ZmZlclRvSGV4U3RyaW5nKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBoZXhTdHJpbmdUb0FycmF5QnVmZmVyKGhleFN0cmluZzogc3RyaW5nKTogQXJyYXlCdWZmZXIge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEhlbHBlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgZGVjb2RlUGF5bG9hZChkYXRhOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVuY29kZVBheWxvYWQodGV4dDogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcmlIZWxwZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIGRlY29kZVBheWxvYWQoZGF0YTogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuICBlbmNvZGVQYXlsb2FkKHVyaTogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19