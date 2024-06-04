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
/**
 * Emulation constants
 */
export var Emulation;
(function (Emulation) {
    /** mPOP, SM-L200, SM-L300, SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["StarPRNT"] = "StarPRNT";
    /** SM-L200, SM-L300 */
    Emulation["StarPRNTL"] = "StarPRNTL";
    /** FVP10, TSP650II, TSP700II, TSP800II */
    Emulation["StarLine"] = "StarLine";
    /** TSP100 */
    Emulation["StarGraphic"] = "StarGraphic";
    /** BSC10 */
    Emulation["EscPos"] = "EscPos";
    /** SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["EscPosMobile"] = "EscPosMobile";
    /** SP700 */
    Emulation["StarDotImpact"] = "StarDotImpact";
})(Emulation || (Emulation = {}));
/**
 * Encoding constants
 */
export var Encoding;
(function (Encoding) {
    /** English */
    Encoding["USASCII"] = "US-ASCII";
    /** French, German, Portuguese, Spanish */
    Encoding["Windows1252"] = "Windows-1252";
    /** Japanese */
    Encoding["ShiftJIS"] = "Shift-JIS";
    /** Russian */
    Encoding["Windows1251"] = "Windows-1251";
    /** Simplified Chinese */
    Encoding["GB2312"] = "GB2312";
    /** Traditional Chinese */
    Encoding["Big5"] = "Big5";
    /** UFT8 */
    Encoding["UTF8"] = "UTF-8";
})(Encoding || (Encoding = {}));
/**
 * CodePageType constants
 */
export var CodePageType;
(function (CodePageType) {
    CodePageType["CP737"] = "CP737";
    CodePageType["CP772"] = "CP772";
    CodePageType["CP774"] = "CP774";
    CodePageType["CP851"] = "CP851";
    CodePageType["CP852"] = "CP852";
    CodePageType["CP855"] = "CP855";
    CodePageType["CP857"] = "CP857";
    CodePageType["CP858"] = "CP858";
    CodePageType["CP860"] = "CP860";
    CodePageType["CP861"] = "CP861";
    CodePageType["CP862"] = "CP862";
    CodePageType["CP863"] = "CP863";
    CodePageType["CP864"] = "CP864";
    CodePageType["CP865"] = "CP865";
    CodePageType["CP869"] = "CP869";
    CodePageType["CP874"] = "CP874";
    CodePageType["CP928"] = "CP928";
    CodePageType["CP932"] = "CP932";
    CodePageType["CP999"] = "CP999";
    CodePageType["CP1001"] = "CP1001";
    CodePageType["CP1250"] = "CP1250";
    CodePageType["CP1251"] = "CP1251";
    CodePageType["CP1252"] = "CP1252";
    CodePageType["CP2001"] = "CP2001";
    CodePageType["CP3001"] = "CP3001";
    CodePageType["CP3002"] = "CP3002";
    CodePageType["CP3011"] = "CP3011";
    CodePageType["CP3012"] = "CP3012";
    CodePageType["CP3021"] = "CP3021";
    CodePageType["CP3041"] = "CP3041";
    CodePageType["CP3840"] = "CP3840";
    CodePageType["CP3841"] = "CP3841";
    CodePageType["CP3843"] = "CP3843";
    CodePageType["CP3845"] = "CP3845";
    CodePageType["CP3846"] = "CP3846";
    CodePageType["CP3847"] = "CP3847";
    CodePageType["CP3848"] = "CP3848";
    CodePageType["UTF8"] = "UTF8";
    CodePageType["Blank"] = "Blank";
})(CodePageType || (CodePageType = {}));
/**
 * InternationalType constants
 */
export var InternationalType;
(function (InternationalType) {
    InternationalType["UK"] = "UK";
    InternationalType["USA"] = "USA";
    InternationalType["France"] = "France";
    InternationalType["Germany"] = "Germany";
    InternationalType["Denmark"] = "Denmark";
    InternationalType["Sweden"] = "Sweden";
    InternationalType["Italy"] = "Italy";
    InternationalType["Spain"] = "Spain";
    InternationalType["Japan"] = "Japan";
    InternationalType["Norway"] = "Norway";
    InternationalType["Denmark2"] = "Denmark2";
    InternationalType["Spain2"] = "Spain2";
    InternationalType["LatinAmerica"] = "LatinAmerica";
    InternationalType["Korea"] = "Korea";
    InternationalType["Ireland"] = "Ireland";
    InternationalType["Legal"] = "Legal";
})(InternationalType || (InternationalType = {}));
/**
 * FontStyleType constants.
 */
export var FontStyleType;
(function (FontStyleType) {
    /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
    FontStyleType["A"] = "A";
    /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
    FontStyleType["B"] = "B";
})(FontStyleType || (FontStyleType = {}));
/**
 * CutPaperAction constants.
 */
export var CutPaperAction;
(function (CutPaperAction) {
    CutPaperAction["FullCut"] = "FullCut";
    CutPaperAction["FullCutWithFeed"] = "FullCutWithFeed";
    CutPaperAction["PartialCut"] = "PartialCut";
    CutPaperAction["PartialCutWithFeed"] = "PartialCutWithFeed";
})(CutPaperAction || (CutPaperAction = {}));
/**
 * BlackMarkType constants.
 */
export var BlackMarkType;
(function (BlackMarkType) {
    BlackMarkType["Valid"] = "Valid";
    BlackMarkType["Invalid"] = "Invalid";
    BlackMarkType["ValidWithDetection"] = "ValidWithDetection";
})(BlackMarkType || (BlackMarkType = {}));
/**
 * LogoSize constants
 */
export var LogoSize;
(function (LogoSize) {
    LogoSize["Normal"] = "Normal";
    LogoSize["DoubleWidth"] = "DoubleWidth";
    LogoSize["DoubleHeight"] = "DoubleHeight";
    LogoSize["DoubleWidthDoubleHeight"] = "DoubleWidthDoubleHeight";
})(LogoSize || (LogoSize = {}));
/**
 * AlignmentPosition constants
 */
export var AlignmentPosition;
(function (AlignmentPosition) {
    AlignmentPosition["Left"] = "Left";
    AlignmentPosition["Center"] = "Center";
    AlignmentPosition["Right"] = "Right";
})(AlignmentPosition || (AlignmentPosition = {}));
/**
 * BarcodeSymbology constants
 */
export var BarcodeSymbology;
(function (BarcodeSymbology) {
    BarcodeSymbology["Code128"] = "Code128";
    BarcodeSymbology["Code39"] = "Code39";
    BarcodeSymbology["Code93"] = "Code93";
    BarcodeSymbology["ITF"] = "ITF";
    BarcodeSymbology["JAN8"] = "JAN8";
    BarcodeSymbology["JAN13"] = "JAN13";
    BarcodeSymbology["NW7"] = "NW7";
    BarcodeSymbology["UPCA"] = "UPCA";
    BarcodeSymbology["UPCE"] = "UPCE";
})(BarcodeSymbology || (BarcodeSymbology = {}));
/**
 * BarcodeWidth constants
 */
export var BarcodeWidth;
(function (BarcodeWidth) {
    BarcodeWidth["Mode1"] = "Mode1";
    BarcodeWidth["Mode2"] = "Mode2";
    BarcodeWidth["Mode3"] = "Mode3";
    BarcodeWidth["Mode4"] = "Mode4";
    BarcodeWidth["Mode5"] = "Mode5";
    BarcodeWidth["Mode6"] = "Mode6";
    BarcodeWidth["Mode7"] = "Mode7";
    BarcodeWidth["Mode8"] = "Mode8";
    BarcodeWidth["Mode9"] = "Mode9";
})(BarcodeWidth || (BarcodeWidth = {}));
/**
 * QrCodeModel constants
 */
export var QrCodeModel;
(function (QrCodeModel) {
    QrCodeModel["No1"] = "No1";
    QrCodeModel["No2"] = "No2";
})(QrCodeModel || (QrCodeModel = {}));
/**
 * QrCodeLevel constants
 */
export var QrCodeLevel;
(function (QrCodeLevel) {
    QrCodeLevel["H"] = "H";
    QrCodeLevel["L"] = "L";
    QrCodeLevel["M"] = "M";
    QrCodeLevel["Q"] = "Q";
})(QrCodeLevel || (QrCodeLevel = {}));
/**
 * BitmapConverterRotation constants
 */
export var BitmapConverterRotation;
(function (BitmapConverterRotation) {
    BitmapConverterRotation["Normal"] = "Normal";
    BitmapConverterRotation["Left90"] = "Left90";
    BitmapConverterRotation["Right90"] = "Right90";
    BitmapConverterRotation["Rotate180"] = "Rotate180";
})(BitmapConverterRotation || (BitmapConverterRotation = {}));
var StarPRNTOriginal = /** @class */ (function (_super) {
    __extends(StarPRNTOriginal, _super);
    function StarPRNTOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for Emulation
         */
        _this.Emulation = {
            StarPRNT: 'StarPRNT',
            StarPRNTL: 'StarPRNTL',
            StarLine: 'StarLine',
            StarGraphic: 'StarGraphic',
            EscPos: 'EscPos',
            EscPosMobile: 'EscPosMobile',
            StarDotImpact: 'StarDotImpact',
        };
        /**
         * Constant for possible Encoding
         */
        _this.Encoding = {
            USASCII: 'US-ASCII',
            Windows1252: 'Windows-1252',
            ShiftJIS: 'Shift-JIS',
            Windows1251: 'Windows-1251',
            GB2312: 'GB2312',
            Big5: 'Big5',
            UTF8: 'UTF-8',
        };
        /**
         * CodePageType constants
         */
        _this.CodePageType = {
            CP737: 'CP737',
            CP772: 'CP772',
            CP774: 'CP774',
            CP851: 'CP851',
            CP852: 'CP852',
            CP855: 'CP855',
            CP857: 'CP857',
            CP858: 'CP858',
            CP860: 'CP860',
            CP861: 'CP861',
            CP862: 'CP862',
            CP863: 'CP863',
            CP864: 'CP864',
            CP865: 'CP865',
            CP869: 'CP869',
            CP874: 'CP874',
            CP928: 'CP928',
            CP932: 'CP932',
            CP999: 'CP999',
            CP1001: 'CP1001',
            CP1250: 'CP1250',
            CP1251: 'CP1251',
            CP1252: 'CP1252',
            CP2001: 'CP2001',
            CP3001: 'CP3001',
            CP3002: 'CP3002',
            CP3011: 'CP3011',
            CP3012: 'CP3012',
            CP3021: 'CP3021',
            CP3041: 'CP3041',
            CP3840: 'CP3840',
            CP3841: 'CP3841',
            CP3843: 'CP3843',
            CP3845: 'CP3845',
            CP3846: 'CP3846',
            CP3847: 'CP3847',
            CP3848: 'CP3848',
            UTF8: 'UTF8',
            Blank: 'Blank',
        };
        /**
         * Constant for possible InternationalType
         */
        _this.InternationalType = {
            UK: 'UK',
            USA: 'USA',
            France: 'France',
            Germany: 'Germany',
            Denmark: 'Denmark',
            Sweden: 'Sweden',
            Italy: 'Italy',
            Spain: 'Spain',
            Japan: 'Japan',
            Norway: 'Norway',
            Denmark2: 'Denmark2',
            Spain2: 'Spain2',
            LatinAmerica: 'LatinAmerica',
            Korea: 'Korea',
            Ireland: 'Ireland',
            Legal: 'Legal',
        };
        /**
         * Constant for possible FontStyleType
         */
        _this.FontStyleType = {
            /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
            A: 'A',
            /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
            B: 'B',
        };
        /**
         * Constant for possible CutPaperAction
         */
        _this.CutPaperAction = {
            FullCut: 'FullCut',
            FullCutWithFeed: 'FullCutWithFeed',
            PartialCut: 'PartialCut',
            PartialCutWithFeed: 'PartialCutWithFeed',
        };
        /**
         * Constant for possible BlackMarkType
         */
        _this.BlackMarkType = {
            Valid: 'Valid',
            Invalid: 'Invalid',
            ValidWithDetection: 'ValidWithDetection',
        };
        /**
         * Constant for possible AlignmentPosition
         */
        _this.AlignmentPosition = {
            Left: 'Left',
            Center: 'Center',
            Right: 'Right',
        };
        /**
         * Constant for possible LogoSize
         */
        _this.LogoSize = {
            Normal: 'Normal',
            DoubleWidth: 'DoubleWidth',
            DoubleHeight: 'DoubleHeight',
            DoubleWidthDoubleHeight: 'DoubleWidthDoubleHeight',
        };
        /**
         * Constant for possible BarcodeSymbology
         */
        _this.BarcodeSymbology = {
            Code128: 'Code128',
            Code39: 'Code39',
            Code93: 'Code93',
            ITF: 'ITF',
            JAN8: 'JAN8',
            JAN13: 'JAN13',
            NW7: 'NW7',
            UPCA: 'UPCA',
            UPCE: 'UPCE',
        };
        /**
         * Constant for possible BarcodeWidth
         */
        _this.BarcodeWidth = {
            Mode1: 'Mode1',
            Mode2: 'Mode2',
            Mode3: 'Mode3',
            Mode4: 'Mode4',
            Mode5: 'Mode5',
            Mode6: 'Mode6',
            Mode7: 'Mode7',
            Mode8: 'Mode8',
            Mode9: 'Mode9',
        };
        /**
         * Constant for possible QrCodeModel
         */
        _this.QrCodeModel = {
            No1: 'No1',
            No2: 'No2',
        };
        /**
         * Constant for possible QrCodeLevel
         */
        _this.QrCodeLevel = {
            H: 'H',
            L: 'L',
            M: 'M',
            Q: 'Q',
        };
        /**
         * Constant for possible BitmapConverterRotation
         */
        _this.BitmapConverterRotation = {
            Normal: 'Normal',
            Left90: 'Left90',
            Right90: 'Right90',
            Rotate180: 'Rotate180',
        };
        return _this;
    }
    StarPRNTOriginal.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNTOriginal.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNTOriginal.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNTOriginal.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNTOriginal.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNTOriginal.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNTOriginal.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNTOriginal.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNTOriginal.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNTOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNTOriginal.pluginName = "StarPRNT";
    StarPRNTOriginal.plugin = "cordova-plugin-starprnt";
    StarPRNTOriginal.pluginRef = "starprnt";
    StarPRNTOriginal.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNTOriginal.platforms = ["Android", "iOS"];
    return StarPRNTOriginal;
}(AwesomeCordovaNativePlugin));
var StarPRNT = new StarPRNTOriginal();
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Rhci1wcm50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWtabEM7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxTQWVYO0FBZkQsV0FBWSxTQUFTO0lBQ25CLG9GQUFvRjtJQUNwRixrQ0FBcUIsQ0FBQTtJQUNyQix1QkFBdUI7SUFDdkIsb0NBQXVCLENBQUE7SUFDdkIsMENBQTBDO0lBQzFDLGtDQUFxQixDQUFBO0lBQ3JCLGFBQWE7SUFDYix3Q0FBMkIsQ0FBQTtJQUMzQixZQUFZO0lBQ1osOEJBQWlCLENBQUE7SUFDakIsNERBQTREO0lBQzVELDBDQUE2QixDQUFBO0lBQzdCLFlBQVk7SUFDWiw0Q0FBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBZlcsU0FBUyxLQUFULFNBQVMsUUFlcEI7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFFBZVg7QUFmRCxXQUFZLFFBQVE7SUFDbEIsY0FBYztJQUNkLGdDQUFvQixDQUFBO0lBQ3BCLDBDQUEwQztJQUMxQyx3Q0FBNEIsQ0FBQTtJQUM1QixlQUFlO0lBQ2Ysa0NBQXNCLENBQUE7SUFDdEIsY0FBYztJQUNkLHdDQUE0QixDQUFBO0lBQzVCLHlCQUF5QjtJQUN6Qiw2QkFBaUIsQ0FBQTtJQUNqQiwwQkFBMEI7SUFDMUIseUJBQWEsQ0FBQTtJQUNiLFdBQVc7SUFDWCwwQkFBYyxDQUFBO0FBQ2hCLENBQUMsRUFmVyxRQUFRLEtBQVIsUUFBUSxRQWVuQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksWUF3Q1g7QUF4Q0QsV0FBWSxZQUFZO0lBQ3RCLCtCQUFlLENBQUE7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QUNILGlCQUFXLEdBQUc7WUFDWixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztTQUNQLENBQUM7UUFFRjs7V0FFRztRQUNILDZCQUF1QixHQUFHO1lBQ3hCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxXQUFXO1NBQ3ZCLENBQUM7OztJQVNGLGdDQUFhLGFBQUMsSUFBWTtJQVkxQiw4QkFBVyxhQUFDLElBQVksRUFBRSxTQUFpQjtJQWEzQywrQkFBWSxhQUFDLElBQWlCLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtJQWFyRSxxQ0FBa0IsYUFBQyxJQUFpQixFQUFFLFNBQWlCLEVBQUUsU0FBb0I7SUFhN0UsNkJBQVUsYUFBQyxJQUFpQixFQUFFLFNBQWlCLEVBQUUsUUFBa0I7SUFZbkUsaUNBQWMsYUFBQyxJQUFpQixFQUFFLFNBQWlCO0lBYW5ELHdCQUFLLGFBQUMsSUFBaUIsRUFBRSxTQUFpQixFQUFFLGFBQTRCO0lBZ0J4RSwwQkFBTyxhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLGdCQUF5QjtJQWFsRSw0QkFBUztJQVdULDZCQUFVOzs7Ozs7bUJBNzhCWjtFQTBvQjhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyIHtcbiAgLyoqXG4gICAqIFByaW50ZXIgbW9kZWwgbmFtZSBhbmQgbW9kZWwgbnVtYmVyXG4gICAqL1xuICBtb2RlbE5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgTWFjIEFkZHJlc3NcbiAgICovXG4gIG1hY0FkZHJlc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgcG9ydCBuYW1lIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHBvcnQgaW5zdGFuY2Ugb2YgU01Qb3J0IG9yIFN0YXJJT0V4dE1hbmFnZXJcbiAgICovXG4gIHBvcnROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogVVNCIFNlcmlhbCBOdW1iZXIgKFVTQiBQcmludGVycyBPbmx5KVxuICAgKi9cbiAgVVNCU2VyaWFsTnVtYmVyPzogc3RyaW5nO1xufVxuLyoqXG4gKiBBcnJheSBvZiBQcmludGVyIG9iamVjdHMgcmV0dXJuZWQgYnkgdGhlIHBvcnREaXNjb3ZlcnkoKSBmdW5jdGlvblxuICovXG5leHBvcnQgdHlwZSBQcmludGVycyA9IEFycmF5PFByaW50ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXJTdGF0dXMge1xuICAvKipcbiAgICogUHJpbnRlciBPbmxpbmUvT2ZmbGluZSBzdGF0dXNcbiAgICovXG4gIG9mZmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcbiAgICovXG4gIE1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBjb3ZlciBzdGF0dXNcbiAgICovXG4gIGNvdmVyT3Blbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgUGFwZXIgQ3V0dGVyIHN0YXR1c1xuICAgKi9cbiAgY3V0dGVyRXJyb3I/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIFBhcGVyIHN0YXR1c1xuICAgKi9cbiAgcmVjZWlwdFBhcGVyRW1wdHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIEZpcm13YXJlIGluZm9ybWF0aW9uXG4gICAqL1xuICBGaXJtd2FyZVZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRPYmoge1xuICAvKipcbiAgICogc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgdG8gcHJpbnQsIEV4YW1wbGU6IFwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwiXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBTZW5kcyBhIFBhcnRpYWxDdXRXaXRoRmVlZCBjb21tYW5kIHRvIHRoZSBwcmludGVyLCBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBjdXRSZWNlaXB0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yIC0gRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBSYXN0ZXJPYmogZXh0ZW5kcyBQcmludE9iaiB7XG4gIC8qKlxuICAgKiBGb250IHNpemUgbnVtYmVyLCBkZWZhdWx0cyB0byAyNVxuICAgKi9cbiAgZm9udFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFBhcGVyIHdpZHRoIChVbml0czogRG90cykuIDIgaW5jaGVzOiAzODQsIDMgaW5jaGVzOiA1NzYsIDQgaW5jaGVzOiA4MzIsIEVTQ1BvcyAzIGluY2hlczogNTEyLCBEb3QgMyBpbmNoZXM6IDIxMC4gRGVmYXVsdHMgdG8gNTc2XG4gICAqL1xuICBwYXBlcldpZHRoPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZU9iaiB7XG4gIC8qKlxuICAgKiBJbWFnZSBVUkkgdG8gcHJpbnQsIHRoaXMgY2FuIGJlIG9idGFpbmVkIHZpYSB0aGUgY2FtZXJhIG9yIHBob3RvIGxpYnJhcnkgb3IgYXMgYSBzdGF0aWMgcmVzb3VyY2Ugc2F2ZWQgb24gdGhlIHBob25lIG1lbW9yeVxuICAgKi9cbiAgdXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEltYWdlIHdpZHRoIChVbml0czogRG90cykgZGVmYXVsdHMgdG8gNTc2XG4gICAqL1xuICBwYXBlcldpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgY3V0UmVjZWlwdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMiAtIERlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIG9wZW5DYXNoRHJhd2VyPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRDb21tYW5kIHtcbiAgLyoqXG4gICAqIENoYXJhY3RoZXIgZW5jb2RpbmcgaXMgdXNlZCB0byBnZXRCeXRlIGRhdGEgZnJvbSBhbGwgc3Vic2VxdWVudCBjb21tYW5kcy4gRGVmYXVsdCAnVVMtQVNDSUknXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5FbmNvZGluZyBvciB0aGUgRW5jb2RpbmcgZW51bS5cbiAgICogRXhhbXBsZToge2FwcGVuZEVuY29kaW5nOidVUy1BU0NJSSd9XG4gICAqL1xuICBhcHBlbmRFbmNvZGluZz86IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGNvZGUgcGFnZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kcyBwcm9wZXJ0eS5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkNvZGVQYWdlVHlwZSBvciB0aGUgQ29kZVBhZ2VUeXBlIGVudW0uXG4gICAqIEV4YW1wbGU6IHthcHBlbmRDb2RlUGFnZTonQ1A4NTgnfVxuICAgKi9cbiAgYXBwZW5kQ29kZVBhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgKFRleHQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZDpcIlN0YXIgQ2xvdGhpbmcgQm91dGlxdWVcXG4xMjMgU3RhciBSb2FkXFxuQ2l0eSwgU3RhdGUgMTIzNDVcXG5cXG5cIn1cbiAgICovXG4gIGFwcGVuZD86IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kUmF3OlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxuICAgKi9cbiAgYXBwZW5kUmF3Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEYXRhIChDb21tYW5kKSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxuICAgKi9cbiAgYXBwZW5kQnl0ZXM/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cbiAgICogRXhhbXBsZToge2FwcGVuZFJhd0J5dGVzOlsweDQ4LCAweDY1LCAweDZjLCAweDZjLCAweDZmLCAweDIwLCAweDU3LCAweDZmLCAweDcyLCAweDZjLCAweDY0LCAweDJlXX1cbiAgICovXG4gIGFwcGVuZFJhd0J5dGVzPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBjaGFyYWN0ZXIgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIENoYXJhY3RlciBTcGFjcyAoVW5pdDogRG90cykgRXhhbXBsZTogNFxuICAgKi9cbiAgYXBwZW5kQ2hhcmFjdGVyU3BhY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZEVtcGhhc2lzOlwiU0FMRVxcblwifVxuICAgKi9cbiAgYXBwZW5kRW1waGFzaXM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBFbmFibGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUVtcGhhc2lzOnRydWV9XG4gICAqL1xuICBlbmFibGVFbXBoYXNpcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRJbnZlcnQ6XCJSZWZ1bmRzIGFuZCBFeGNoYW5nZXNcXG5cIn1cbiAgICovXG4gIGFwcGVuZEludmVydD86IHN0cmluZztcbiAgLyoqXG4gICAqICBFbmFibGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVJbnZlcnQ6dHJ1ZX1cbiAgICovXG4gIGVuYWJsZUludmVydD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIHVuZGVyIGxpbmUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZFVuZGVybGluZTpcIjMwIGRheXNcIn1cbiAgICovXG4gIGFwcGVuZFVuZGVybGluZT86IHN0cmluZztcbiAgLyoqXG4gICAqICBFbmFibGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlVW5kZXJsaW5lOnRydWV9XG4gICAqL1xuICBlbmFibGVVbmRlcmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW50ZXJuYXRpb25hbCBjaGFyYWN0ZXIgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkludGVybmF0aW9uYWxUeXBlIG9yIHRoZSBJbnRlcm5hdGlvbmFsVHlwZSBlbnVtLlxuICAgKiAnVUsnIHwgJ1VTQScgfCAnRnJhbmNlJyB8ICdHZXJtYW55JyB8ICdEZW5tYXJrJyB8ICdTd2VkZW4nIHwgJ0l0YWx5JyB8ICdTcGFpbicgfCAnSmFwYW4nIHwgJ05vcndheScgfCAnRGVubWFyazInIHwgJ1NwYWluMicgfCAnTGF0aW5BbWVyaWNhJyB8ICdLb3JlYScgfCAnSXJlbGFuZCcgfCAnTGVnYWwnXG4gICAqIEV4YW1wbGUge2FwcGVuZEludGVybmF0aW9uYWw6SW50ZXJuYXRpb25hbFR5cGUuVUt9XG4gICAqL1xuICBhcHBlbmRJbnRlcm5hdGlvbmFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaW5lIGZlZWQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gUGFwZXIgZmVlZCB1bml0cyAoVW5pdHM6IExpbmVzKSBFeGFtcGxlOiAyXG4gICAqL1xuICBhcHBlbmRMaW5lRmVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogVW5pdCBmZWVkIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFBhcGVyIGZlZWQgdW5pdHMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiA2NFxuICAgKi9cbiAgYXBwZW5kVW5pdEZlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBsaW5lIHNwYWNlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBMaW5lIHNwYWNlcyAoVW5pdHM6IERvdHMpIEV4YW1wbGU6IDMyXG4gICAqL1xuICBhcHBlbmRMaW5lU3BhY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBmb250IHN0eWxlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuRm9udFN0eWxlVHlwZSBvciB0aGUgRm9udFN0eWxlVHlwZSBlbnVtLiAnQScgfCAnQidcbiAgICogRXhhbXBsZToge2FwcGVuZEZvbnRTdHlsZTpGb250U3R5bGVUeXBlLkF9XG4gICAqL1xuICBhcHBlbmRGb250U3R5bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBhcGVyIGN1dCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQ3V0UGFwZXJBY3Rpb24gb3IgdGhlIEN1dFBhcGVyQWN0aW9uIGVudW0uICdGdWxsQ3V0JyB8ICdGdWxsQ3V0V2l0aEZlZWQnIHwgJ1BhcnRpYWxDdXQnIHwgJ1BhcnRpYWxDdXRXaXRoRmVlZCdcbiAgICogRXhhbXBsZToge2FwcGVuZEN1dFBhcGVyOkN1dFBhcGVyQWN0aW9uLlBhcnRpYWxDdXRXaXRoRmVlZH1cbiAgICovXG4gIGFwcGVuZEN1dFBhcGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCbGFjayBtYXJrIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CbGFja01hcmtUeXBlIG9yIHRoZSBCbGFja01hcmtUeXBlIGVudW0uICdWYWxpZCcgfCAnSW52YWxpZCcgfCAnVmFsaWRXaXRoRGV0ZWN0aW9uJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmxhY2tNYXJrOiBCbGFja01hcmtUeXBlLlZhbGlkfVxuICAgKi9cbiAgYXBwZW5kQmxhY2tNYXJrPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBYnNvbHV0ZSBwb3NpdGlvbiBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiAoVW5pdDogRG90cykuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xuICAgKiBFeGFtcGxlMTogQXBwZW5kIGRhdGEgd2l0aCBBYnNvbHV0ZSBwb3NpdGlvbiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MCwgZGF0YTogXCJUZXh0IHdpdGggYWJzb2x1dGUgcG9zaXRpb25cIn1cbiAgICogRXhhbXBsZTI6IEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MH1cbiAgICovXG4gIGFwcGVuZEFic29sdXRlUG9zaXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFsaWdubWVudCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBTZW5kIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGRhdGEgcHJvcGVydHkgdG8gYXBwZW5kIGFsaWdubWVudCBwb3NpdGlvbiBqdXN0IHRvIHRoYXQgc3RyaW5nXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxuICAgKiBFeGFtcGxlMSBBcHBlbmQgZGF0YSB3aXRoIEFsaWdubWVudCBwb3NpdGlvbjoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIsIGRhdGE6IFwiVGV4dCB3aXRoIGNlbnRlcmVkIHBvc2l0aW9uXCJ9XG4gICAqIEV4YW1wbGUyIEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn1cbiAgICovXG4gIGFwcGVuZEFsaWdubWVudD86IHN0cmluZztcblxuICAvKipcbiAgICogSG9yaXpvbnRhbCB0YWIgc2V0L2NsZWFyIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChPbmx5IHdvcmtzIGZvciBjZXJ0YWluIHByaW50ZXIgbW9kZWxzLCBjaGVjayB0aGUgc3RhclNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzKVxuICAgKiBBcnJheSBvZiBob3Jpem9udGFsIHRhYiBwb3NpdGlvbnMgKFVuaXRzOiBBTksgY2hhcmFjdGVyIHBpdGNoKS4gU3BlY2lmeWluZyBlbXB0eSBhcnJheSBkZWxldGVzIGFsbCBjdXJyZW50bHkgc2V0IGhvcml6b250YWwgdGFiIHBvc2l0aW9ucy5cbiAgICogRXhhbXBsZToge2FwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbjpbMTUsIDM1XX1cbiAgICogRGVsZXRlIHBvc2l0aW9ucyBFeGFtcGxlOiB7YXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uOltdfVxuICAgKi9cbiAgYXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGxvZ28gaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRoZSBsb2dvIGhhcyB0byBiZSB1cGxvYWRlZCB0byB0aGUgcHJpbnRlciB1c2luZyB0aGUgU3RhciBQcmludCB1dGlsaXR5LlxuICAgKiBTZW5kIGluIGNvbmp1Y3Rpb24gd2l0aCB0aGUgbG9nb1NpemUgcHJvcGVydHkgdG8gc2V0IHRoZSBsb2dvIHNpemVcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MX1cbiAgICogRXhhbXBsZSB3aXRoIExvZ29TaXplOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cbiAgICovXG4gIGFwcGVuZExvZ28/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kTG9nbyBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuTG9nb1NpemUgb3IgdGhlIExvZ29TaXplIGVudW0uICdOb3JtYWwnIHwgJ0RvdWJsZVdpZHRoJyB8ICdEb3VibGVIZWlnaHQnIHwgJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JztcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XG4gICAqL1xuICBsb2dvU2l6ZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYmFyY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBCYXJjb2RlU3ltYm9sb2d5LCBCYXJjb2RlV2lkdGgsIGhlaWdodCwgaHJpLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlIH1cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOjQwIH1cbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDp7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWxpZ25tZW50OmFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIgfVxuICAgKi9cbiAgYXBwZW5kQmFyY29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CYXJjb2RlU3ltYm9sb2d5IG9yIHRoZSBCYXJjb2RlU3ltYm9sb2d5IGVudW0uXG4gICAqICdDb2RlMTI4JyB8ICdDb2RlMzknIHwgJ0NvZGU5MycgfCAnSVRGJyB8ICdKQU44JyB8ICdKQU4xMycgfCAnTlc3JyB8ICdVUENBJyB8ICdVUENFJyB8XG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOH1cbiAgICovXG4gIEJhcmNvZGVTeW1ib2xvZ3k/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQmFyY29kZVdpZHRoIG9yIHRoZSBCYXJjb2RlV2lkdGggZW51bS5cbiAgICogTW9kZTEgfCBNb2RlMiB8IE1vZGUzIHwgTW9kZTQgfCBNb2RlNSB8IE1vZGU2IHwgTW9kZTcgfCBNb2RlOCB8IE1vZGU5XG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyfVxuICAgKi9cbiAgQmFyY29kZVdpZHRoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cbiAgICogVW5kZXItYmFyIGNoYXJhY3RlcnMuIHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBocmk6dHJ1ZX1cbiAgICovXG4gIGhyaT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kIG9yIHRoZSBhcHBlbmRNdWx0aXBsZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBoZWlnaHQ6NDB9XG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCBoZWlnaHQ6NDB9XG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgd2lkdGg6NTc2fVxuICAgKiBhcHBlbmRNdWx0aXBsZToge2FwcGVuZE11bHRpcGxlOid0ZXh0IHRvIHByaW50Jywgd2lkdGg6NDB9XG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKi9cbiAgYWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXG4gICAqIGFwcGVuZFFyQ29kZSBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICovXG4gIGFsaWdubWVudD86IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRNdWx0aXBsZTpcIiAgICQxNTYuOTVcXG5cIiwgd2lkdGg6MiwgaGVpZ2h0OjJ9LlxuICAgKi9cbiAgYXBwZW5kTXVsdGlwbGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlclxuICAgKiBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6dHJ1ZSwgd2lkdGg6MiwgaGVpZ2h0OjJ9XG4gICAqIERpc2FibGUgRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOmZhbHNlfVxuICAgKi9cbiAgZW5hYmxlTXVsdGlwbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBRUiBjb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IFFyQ29kZU1vZGVsLCBRckNvZGVMZXZlbCwgY2VsbCwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOlwie0JTdGFyXCIsIFFyQ29kZU1vZGVsOlwiTm8yXCIsIFFyQ29kZUxldmVsOlwiTFwiLCBjZWxsOiA4fS5cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFic29sdXRlUG9zaXRpb246IDQwIH0uXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFsaWdubWVudDpcIkNlbnRlclwiIH0uXG4gICAqL1xuICBhcHBlbmRRckNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVNb2RlbCBvciB0aGUgUXJDb2RlTW9kZWwgZW51bS4gJ05vMScgfCAnTm8yJyBEZWZhdWx0ICdObzInXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZU1vZGVsOlFyQ29kZU1vZGVsLk5vMX1cbiAgICovXG4gIFFyQ29kZU1vZGVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuUXJDb2RlTGV2ZWwgb3IgdGhlIFFyQ29kZUxldmVsIGVudW0uICdObzEnIHwgJ05vMicuIERlZmF1bHQgJ0gnXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZUxldmVsOlFyQ29kZUxldmVsLkh9XG4gICAqL1xuICBRckNvZGVMZXZlbD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZC4gUVJDb2RlIENlbGwgc2l6ZS4gRGVmYXVsdCA0LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBjZWxsOjh9XG4gICAqL1xuICBjZWxsPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBiaXRtYXAgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGEgc3RyaW5nIGltYWdlIFVSSVxuICAgKiB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnkuXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogZGlmZnVzaW9uLCB3aWR0aCwgYm90aFNjYWxlLCByb3RhdGlvbiwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZX1cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cbiAgICovXG4gIGFwcGVuZEJpdG1hcD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gUmFuZG9tIGRpdGhlcjogdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWQuIERlZmF1bHQgdHJ1ZS5cbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogZmFsc2UgfVxuICAgKi9cbiAgZGlmZnVzaW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gSGVpZ2h0IGlzIGNoYW5nZWQgYWNjb3JkaW5nIHRvIHRoZSBjb252ZXJzaW9uIHJhdGUgb2YgdGhlIHdpZHRoIHByb3BlcnR5LlxuICAgKiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZC4gRGVmYXVsdCB0cnVlLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYm90aFNjYWxlOiB0cnVlIH1cbiAgICovXG4gIGJvdGhTY2FsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBvciB0aGUgQml0bWFwQ29udmVydGVyUm90YXRpb24gZW51bS5cbiAgICogJ05vcm1hbCcgfCAnTGVmdDkwJyB8ICdSaWdodDkwJyB8ICdSb3RhdGUxODAnXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCByb3RhdGlvbjogQml0bWFwQ29udmVydGVyUm90YXRpb24uTGVmdDkwIH1cbiAgICovXG4gIHJvdGF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbCBudW1iZXI6IEV4YW1wbGU6IDEgPSBObzEsIDIgPSBObzJcbiAgICovXG4gIG9wZW5DYXNoRHJhd2VyPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEVtdWxhdGlvbiBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gRW11bGF0aW9uIHtcbiAgLyoqIG1QT1AsIFNNLUwyMDAsIFNNLUwzMDAsIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXG4gIFN0YXJQUk5UID0gJ1N0YXJQUk5UJyxcbiAgLyoqIFNNLUwyMDAsIFNNLUwzMDAgKi9cbiAgU3RhclBSTlRMID0gJ1N0YXJQUk5UTCcsXG4gIC8qKiBGVlAxMCwgVFNQNjUwSUksIFRTUDcwMElJLCBUU1A4MDBJSSAqL1xuICBTdGFyTGluZSA9ICdTdGFyTGluZScsXG4gIC8qKiBUU1AxMDAgKi9cbiAgU3RhckdyYXBoaWMgPSAnU3RhckdyYXBoaWMnLFxuICAvKiogQlNDMTAgKi9cbiAgRXNjUG9zID0gJ0VzY1BvcycsXG4gIC8qKiBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xuICBFc2NQb3NNb2JpbGUgPSAnRXNjUG9zTW9iaWxlJyxcbiAgLyoqIFNQNzAwICovXG4gIFN0YXJEb3RJbXBhY3QgPSAnU3RhckRvdEltcGFjdCcsXG59XG5cbi8qKlxuICogRW5jb2RpbmcgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEVuY29kaW5nIHtcbiAgLyoqIEVuZ2xpc2ggKi9cbiAgVVNBU0NJSSA9ICdVUy1BU0NJSScsXG4gIC8qKiBGcmVuY2gsIEdlcm1hbiwgUG9ydHVndWVzZSwgU3BhbmlzaCAqL1xuICBXaW5kb3dzMTI1MiA9ICdXaW5kb3dzLTEyNTInLFxuICAvKiogSmFwYW5lc2UgKi9cbiAgU2hpZnRKSVMgPSAnU2hpZnQtSklTJyxcbiAgLyoqIFJ1c3NpYW4gKi9cbiAgV2luZG93czEyNTEgPSAnV2luZG93cy0xMjUxJyxcbiAgLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSAqL1xuICBHQjIzMTIgPSAnR0IyMzEyJyxcbiAgLyoqIFRyYWRpdGlvbmFsIENoaW5lc2UgKi9cbiAgQmlnNSA9ICdCaWc1JyxcbiAgLyoqIFVGVDggKi9cbiAgVVRGOCA9ICdVVEYtOCcsXG59XG5cbi8qKlxuICogQ29kZVBhZ2VUeXBlIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBDb2RlUGFnZVR5cGUge1xuICBDUDczNyA9ICdDUDczNycsXG4gIENQNzcyID0gJ0NQNzcyJyxcbiAgQ1A3NzQgPSAnQ1A3NzQnLFxuICBDUDg1MSA9ICdDUDg1MScsXG4gIENQODUyID0gJ0NQODUyJyxcbiAgQ1A4NTUgPSAnQ1A4NTUnLFxuICBDUDg1NyA9ICdDUDg1NycsXG4gIENQODU4ID0gJ0NQODU4JyxcbiAgQ1A4NjAgPSAnQ1A4NjAnLFxuICBDUDg2MSA9ICdDUDg2MScsXG4gIENQODYyID0gJ0NQODYyJyxcbiAgQ1A4NjMgPSAnQ1A4NjMnLFxuICBDUDg2NCA9ICdDUDg2NCcsXG4gIENQODY1ID0gJ0NQODY1JyxcbiAgQ1A4NjkgPSAnQ1A4NjknLFxuICBDUDg3NCA9ICdDUDg3NCcsXG4gIENQOTI4ID0gJ0NQOTI4JyxcbiAgQ1A5MzIgPSAnQ1A5MzInLFxuICBDUDk5OSA9ICdDUDk5OScsXG4gIENQMTAwMSA9ICdDUDEwMDEnLFxuICBDUDEyNTAgPSAnQ1AxMjUwJyxcbiAgQ1AxMjUxID0gJ0NQMTI1MScsXG4gIENQMTI1MiA9ICdDUDEyNTInLFxuICBDUDIwMDEgPSAnQ1AyMDAxJyxcbiAgQ1AzMDAxID0gJ0NQMzAwMScsXG4gIENQMzAwMiA9ICdDUDMwMDInLFxuICBDUDMwMTEgPSAnQ1AzMDExJyxcbiAgQ1AzMDEyID0gJ0NQMzAxMicsXG4gIENQMzAyMSA9ICdDUDMwMjEnLFxuICBDUDMwNDEgPSAnQ1AzMDQxJyxcbiAgQ1AzODQwID0gJ0NQMzg0MCcsXG4gIENQMzg0MSA9ICdDUDM4NDEnLFxuICBDUDM4NDMgPSAnQ1AzODQzJyxcbiAgQ1AzODQ1ID0gJ0NQMzg0NScsXG4gIENQMzg0NiA9ICdDUDM4NDYnLFxuICBDUDM4NDcgPSAnQ1AzODQ3JyxcbiAgQ1AzODQ4ID0gJ0NQMzg0OCcsXG4gIFVURjggPSAnVVRGOCcsXG4gIEJsYW5rID0gJ0JsYW5rJyxcbn1cblxuLyoqXG4gKiBJbnRlcm5hdGlvbmFsVHlwZSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gSW50ZXJuYXRpb25hbFR5cGUge1xuICBVSyA9ICdVSycsXG4gIFVTQSA9ICdVU0EnLFxuICBGcmFuY2UgPSAnRnJhbmNlJyxcbiAgR2VybWFueSA9ICdHZXJtYW55JyxcbiAgRGVubWFyayA9ICdEZW5tYXJrJyxcbiAgU3dlZGVuID0gJ1N3ZWRlbicsXG4gIEl0YWx5ID0gJ0l0YWx5JyxcbiAgU3BhaW4gPSAnU3BhaW4nLFxuICBKYXBhbiA9ICdKYXBhbicsXG4gIE5vcndheSA9ICdOb3J3YXknLFxuICBEZW5tYXJrMiA9ICdEZW5tYXJrMicsXG4gIFNwYWluMiA9ICdTcGFpbjInLFxuICBMYXRpbkFtZXJpY2EgPSAnTGF0aW5BbWVyaWNhJyxcbiAgS29yZWEgPSAnS29yZWEnLFxuICBJcmVsYW5kID0gJ0lyZWxhbmQnLFxuICBMZWdhbCA9ICdMZWdhbCcsXG59XG5cbi8qKlxuICogRm9udFN0eWxlVHlwZSBjb25zdGFudHMuXG4gKi9cbmV4cG9ydCBlbnVtIEZvbnRTdHlsZVR5cGUge1xuICAvKiogRm9udC1BICgxMiB4IDI0IGRvdHMpIC8gU3BlY2lmeSA3IHggOSBmb250IChoYWxmIGRvdHMpICovXG4gIEEgPSAnQScsXG4gIC8qKiBGb250LUIgKDkgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNSB4IDkgZm9udCAoMlAtMSkgKi9cbiAgQiA9ICdCJyxcbn1cblxuLyoqXG4gKiBDdXRQYXBlckFjdGlvbiBjb25zdGFudHMuXG4gKi9cbmV4cG9ydCBlbnVtIEN1dFBhcGVyQWN0aW9uIHtcbiAgRnVsbEN1dCA9ICdGdWxsQ3V0JyxcbiAgRnVsbEN1dFdpdGhGZWVkID0gJ0Z1bGxDdXRXaXRoRmVlZCcsXG4gIFBhcnRpYWxDdXQgPSAnUGFydGlhbEN1dCcsXG4gIFBhcnRpYWxDdXRXaXRoRmVlZCA9ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnLFxufVxuXG4vKipcbiAqIEJsYWNrTWFya1R5cGUgY29uc3RhbnRzLlxuICovXG5leHBvcnQgZW51bSBCbGFja01hcmtUeXBlIHtcbiAgVmFsaWQgPSAnVmFsaWQnLFxuICBJbnZhbGlkID0gJ0ludmFsaWQnLFxuICBWYWxpZFdpdGhEZXRlY3Rpb24gPSAnVmFsaWRXaXRoRGV0ZWN0aW9uJyxcbn1cblxuLyoqXG4gKiBMb2dvU2l6ZSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gTG9nb1NpemUge1xuICBOb3JtYWwgPSAnTm9ybWFsJyxcbiAgRG91YmxlV2lkdGggPSAnRG91YmxlV2lkdGgnLFxuICBEb3VibGVIZWlnaHQgPSAnRG91YmxlSGVpZ2h0JyxcbiAgRG91YmxlV2lkdGhEb3VibGVIZWlnaHQgPSAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxufVxuXG4vKipcbiAqIEFsaWdubWVudFBvc2l0aW9uIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBBbGlnbm1lbnRQb3NpdGlvbiB7XG4gIExlZnQgPSAnTGVmdCcsXG4gIENlbnRlciA9ICdDZW50ZXInLFxuICBSaWdodCA9ICdSaWdodCcsXG59XG5cbi8qKlxuICogQmFyY29kZVN5bWJvbG9neSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQmFyY29kZVN5bWJvbG9neSB7XG4gIENvZGUxMjggPSAnQ29kZTEyOCcsXG4gIENvZGUzOSA9ICdDb2RlMzknLFxuICBDb2RlOTMgPSAnQ29kZTkzJyxcbiAgSVRGID0gJ0lURicsXG4gIEpBTjggPSAnSkFOOCcsXG4gIEpBTjEzID0gJ0pBTjEzJyxcbiAgTlc3ID0gJ05XNycsXG4gIFVQQ0EgPSAnVVBDQScsXG4gIFVQQ0UgPSAnVVBDRScsXG59XG5cbi8qKlxuICogQmFyY29kZVdpZHRoIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBCYXJjb2RlV2lkdGgge1xuICBNb2RlMSA9ICdNb2RlMScsXG4gIE1vZGUyID0gJ01vZGUyJyxcbiAgTW9kZTMgPSAnTW9kZTMnLFxuICBNb2RlNCA9ICdNb2RlNCcsXG4gIE1vZGU1ID0gJ01vZGU1JyxcbiAgTW9kZTYgPSAnTW9kZTYnLFxuICBNb2RlNyA9ICdNb2RlNycsXG4gIE1vZGU4ID0gJ01vZGU4JyxcbiAgTW9kZTkgPSAnTW9kZTknLFxufVxuXG4vKipcbiAqIFFyQ29kZU1vZGVsIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBRckNvZGVNb2RlbCB7XG4gIE5vMSA9ICdObzEnLFxuICBObzIgPSAnTm8yJyxcbn1cblxuLyoqXG4gKiBRckNvZGVMZXZlbCBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gUXJDb2RlTGV2ZWwge1xuICBIID0gJ0gnLFxuICBMID0gJ0wnLFxuICBNID0gJ00nLFxuICBRID0gJ1EnLFxufVxuXG4vKipcbiAqIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiB7XG4gIE5vcm1hbCA9ICdOb3JtYWwnLFxuICBMZWZ0OTAgPSAnTGVmdDkwJyxcbiAgUmlnaHQ5MCA9ICdSaWdodDkwJyxcbiAgUm90YXRlMTgwID0gJ1JvdGF0ZTE4MCcsXG59XG5cbi8qKlxuICogUHVzaCBhIG5ldyBQcmludENvbW1hbmQgb2JqZWN0IHRvIHRoZSBhcnJheSBmb3IgYSBzZXBhcmF0ZSBpbnN0cnVjdGlvbiB0byB0aGUgcHJpbnRlci4gRXhhbXBsZSBbe2FwcGVuZDpcInRleHRcIn0sIHtcIm9wZW5DYXNoRHJhd2VyOiAxXCJ9XVxuICovXG5leHBvcnQgdHlwZSBDb21tYW5kc0FycmF5ID0gQXJyYXk8UHJpbnRDb21tYW5kPjtcblxuLyoqXG4gKiBAbmFtZSBTdGFyUFJOVFxuICogQGRlc2NyaXB0aW9uXG4gKiBJb25pYyBOYXRpdmUgd3JhcHBlcnMgZm9yIHRoZSBzdGFycHJudCBjb3Jkb3ZhIHBsdWdpbiBmb3IgU3RhciBNaWNyb25pY3MgQmx1ZXRvb3RoL0xBTiBwcmludGVyc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdGFyUFJOVCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zdGFyLXBybnQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGFycHJudDogU3RhclBSTlQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnN0YXJwcm50LnBvcnREaXNjb3ZlcnkoJ0FsbCcpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RhclBSTlQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdGFycHJudCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdzdGFycHJudCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hdWN0aWZlcmEtam9zZWQvc3RhcnBybnQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhclBSTlQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgRW11bGF0aW9uXG4gICAqL1xuICBFbXVsYXRpb24gPSB7XG4gICAgU3RhclBSTlQ6ICdTdGFyUFJOVCcsXG4gICAgU3RhclBSTlRMOiAnU3RhclBSTlRMJyxcbiAgICBTdGFyTGluZTogJ1N0YXJMaW5lJyxcbiAgICBTdGFyR3JhcGhpYzogJ1N0YXJHcmFwaGljJyxcbiAgICBFc2NQb3M6ICdFc2NQb3MnLFxuICAgIEVzY1Bvc01vYmlsZTogJ0VzY1Bvc01vYmlsZScsXG4gICAgU3RhckRvdEltcGFjdDogJ1N0YXJEb3RJbXBhY3QnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgRW5jb2RpbmdcbiAgICovXG4gIEVuY29kaW5nID0ge1xuICAgIFVTQVNDSUk6ICdVUy1BU0NJSScsXG4gICAgV2luZG93czEyNTI6ICdXaW5kb3dzLTEyNTInLFxuICAgIFNoaWZ0SklTOiAnU2hpZnQtSklTJyxcbiAgICBXaW5kb3dzMTI1MTogJ1dpbmRvd3MtMTI1MScsXG4gICAgR0IyMzEyOiAnR0IyMzEyJyxcbiAgICBCaWc1OiAnQmlnNScsXG4gICAgVVRGODogJ1VURi04JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29kZVBhZ2VUeXBlIGNvbnN0YW50c1xuICAgKi9cbiAgQ29kZVBhZ2VUeXBlID0ge1xuICAgIENQNzM3OiAnQ1A3MzcnLFxuICAgIENQNzcyOiAnQ1A3NzInLFxuICAgIENQNzc0OiAnQ1A3NzQnLFxuICAgIENQODUxOiAnQ1A4NTEnLFxuICAgIENQODUyOiAnQ1A4NTInLFxuICAgIENQODU1OiAnQ1A4NTUnLFxuICAgIENQODU3OiAnQ1A4NTcnLFxuICAgIENQODU4OiAnQ1A4NTgnLFxuICAgIENQODYwOiAnQ1A4NjAnLFxuICAgIENQODYxOiAnQ1A4NjEnLFxuICAgIENQODYyOiAnQ1A4NjInLFxuICAgIENQODYzOiAnQ1A4NjMnLFxuICAgIENQODY0OiAnQ1A4NjQnLFxuICAgIENQODY1OiAnQ1A4NjUnLFxuICAgIENQODY5OiAnQ1A4NjknLFxuICAgIENQODc0OiAnQ1A4NzQnLFxuICAgIENQOTI4OiAnQ1A5MjgnLFxuICAgIENQOTMyOiAnQ1A5MzInLFxuICAgIENQOTk5OiAnQ1A5OTknLFxuICAgIENQMTAwMTogJ0NQMTAwMScsXG4gICAgQ1AxMjUwOiAnQ1AxMjUwJyxcbiAgICBDUDEyNTE6ICdDUDEyNTEnLFxuICAgIENQMTI1MjogJ0NQMTI1MicsXG4gICAgQ1AyMDAxOiAnQ1AyMDAxJyxcbiAgICBDUDMwMDE6ICdDUDMwMDEnLFxuICAgIENQMzAwMjogJ0NQMzAwMicsXG4gICAgQ1AzMDExOiAnQ1AzMDExJyxcbiAgICBDUDMwMTI6ICdDUDMwMTInLFxuICAgIENQMzAyMTogJ0NQMzAyMScsXG4gICAgQ1AzMDQxOiAnQ1AzMDQxJyxcbiAgICBDUDM4NDA6ICdDUDM4NDAnLFxuICAgIENQMzg0MTogJ0NQMzg0MScsXG4gICAgQ1AzODQzOiAnQ1AzODQzJyxcbiAgICBDUDM4NDU6ICdDUDM4NDUnLFxuICAgIENQMzg0NjogJ0NQMzg0NicsXG4gICAgQ1AzODQ3OiAnQ1AzODQ3JyxcbiAgICBDUDM4NDg6ICdDUDM4NDgnLFxuICAgIFVURjg6ICdVVEY4JyxcbiAgICBCbGFuazogJ0JsYW5rJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEludGVybmF0aW9uYWxUeXBlXG4gICAqL1xuICBJbnRlcm5hdGlvbmFsVHlwZSA9IHtcbiAgICBVSzogJ1VLJyxcbiAgICBVU0E6ICdVU0EnLFxuICAgIEZyYW5jZTogJ0ZyYW5jZScsXG4gICAgR2VybWFueTogJ0dlcm1hbnknLFxuICAgIERlbm1hcms6ICdEZW5tYXJrJyxcbiAgICBTd2VkZW46ICdTd2VkZW4nLFxuICAgIEl0YWx5OiAnSXRhbHknLFxuICAgIFNwYWluOiAnU3BhaW4nLFxuICAgIEphcGFuOiAnSmFwYW4nLFxuICAgIE5vcndheTogJ05vcndheScsXG4gICAgRGVubWFyazI6ICdEZW5tYXJrMicsXG4gICAgU3BhaW4yOiAnU3BhaW4yJyxcbiAgICBMYXRpbkFtZXJpY2E6ICdMYXRpbkFtZXJpY2EnLFxuICAgIEtvcmVhOiAnS29yZWEnLFxuICAgIElyZWxhbmQ6ICdJcmVsYW5kJyxcbiAgICBMZWdhbDogJ0xlZ2FsJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEZvbnRTdHlsZVR5cGVcbiAgICovXG4gIEZvbnRTdHlsZVR5cGUgPSB7XG4gICAgLyoqIEZvbnQtQSAoMTIgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNyB4IDkgZm9udCAoaGFsZiBkb3RzKSAqL1xuICAgIEE6ICdBJyxcbiAgICAvKiogRm9udC1CICg5IHggMjQgZG90cykgLyBTcGVjaWZ5IDUgeCA5IGZvbnQgKDJQLTEpICovXG4gICAgQjogJ0InLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQ3V0UGFwZXJBY3Rpb25cbiAgICovXG4gIEN1dFBhcGVyQWN0aW9uID0ge1xuICAgIEZ1bGxDdXQ6ICdGdWxsQ3V0JyxcbiAgICBGdWxsQ3V0V2l0aEZlZWQ6ICdGdWxsQ3V0V2l0aEZlZWQnLFxuICAgIFBhcnRpYWxDdXQ6ICdQYXJ0aWFsQ3V0JyxcbiAgICBQYXJ0aWFsQ3V0V2l0aEZlZWQ6ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmxhY2tNYXJrVHlwZVxuICAgKi9cbiAgQmxhY2tNYXJrVHlwZSA9IHtcbiAgICBWYWxpZDogJ1ZhbGlkJyxcbiAgICBJbnZhbGlkOiAnSW52YWxpZCcsXG4gICAgVmFsaWRXaXRoRGV0ZWN0aW9uOiAnVmFsaWRXaXRoRGV0ZWN0aW9uJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEFsaWdubWVudFBvc2l0aW9uXG4gICAqL1xuICBBbGlnbm1lbnRQb3NpdGlvbiA9IHtcbiAgICBMZWZ0OiAnTGVmdCcsXG4gICAgQ2VudGVyOiAnQ2VudGVyJyxcbiAgICBSaWdodDogJ1JpZ2h0JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIExvZ29TaXplXG4gICAqL1xuICBMb2dvU2l6ZSA9IHtcbiAgICBOb3JtYWw6ICdOb3JtYWwnLFxuICAgIERvdWJsZVdpZHRoOiAnRG91YmxlV2lkdGgnLFxuICAgIERvdWJsZUhlaWdodDogJ0RvdWJsZUhlaWdodCcsXG4gICAgRG91YmxlV2lkdGhEb3VibGVIZWlnaHQ6ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCYXJjb2RlU3ltYm9sb2d5XG4gICAqL1xuICBCYXJjb2RlU3ltYm9sb2d5ID0ge1xuICAgIENvZGUxMjg6ICdDb2RlMTI4JyxcbiAgICBDb2RlMzk6ICdDb2RlMzknLFxuICAgIENvZGU5MzogJ0NvZGU5MycsXG4gICAgSVRGOiAnSVRGJyxcbiAgICBKQU44OiAnSkFOOCcsXG4gICAgSkFOMTM6ICdKQU4xMycsXG4gICAgTlc3OiAnTlc3JyxcbiAgICBVUENBOiAnVVBDQScsXG4gICAgVVBDRTogJ1VQQ0UnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmFyY29kZVdpZHRoXG4gICAqL1xuICBCYXJjb2RlV2lkdGggPSB7XG4gICAgTW9kZTE6ICdNb2RlMScsXG4gICAgTW9kZTI6ICdNb2RlMicsXG4gICAgTW9kZTM6ICdNb2RlMycsXG4gICAgTW9kZTQ6ICdNb2RlNCcsXG4gICAgTW9kZTU6ICdNb2RlNScsXG4gICAgTW9kZTY6ICdNb2RlNicsXG4gICAgTW9kZTc6ICdNb2RlNycsXG4gICAgTW9kZTg6ICdNb2RlOCcsXG4gICAgTW9kZTk6ICdNb2RlOScsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVNb2RlbFxuICAgKi9cbiAgUXJDb2RlTW9kZWwgPSB7XG4gICAgTm8xOiAnTm8xJyxcbiAgICBObzI6ICdObzInLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgUXJDb2RlTGV2ZWxcbiAgICovXG4gIFFyQ29kZUxldmVsID0ge1xuICAgIEg6ICdIJyxcbiAgICBMOiAnTCcsXG4gICAgTTogJ00nLFxuICAgIFE6ICdRJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uXG4gICAqL1xuICBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiA9IHtcbiAgICBOb3JtYWw6ICdOb3JtYWwnLFxuICAgIExlZnQ5MDogJ0xlZnQ5MCcsXG4gICAgUmlnaHQ5MDogJ1JpZ2h0OTAnLFxuICAgIFJvdGF0ZTE4MDogJ1JvdGF0ZTE4MCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgYXZhaWxhYmxlIHByaW50ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlICBJbnRlcmZhY2UgVHlwZTogQWxsLCBMQU4sIEJsdWV0b290aCwgVVNCXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFByaW50ZXJzPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIHByaW50ZXJzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBvcnREaXNjb3ZlcnkodHlwZTogc3RyaW5nKTogUHJvbWlzZTxQcmludGVycz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQcmludGVyU3RhdHVzPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBQcmludGVyU3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVja1N0YXR1cyhwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxQcmludGVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaW50cyBwbGFpbiB0ZXh0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge1ByaW50T2JqfSBwcmludE9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50UmF3VGV4dChwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIHByaW50T2JqOiBQcmludE9iaik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSB0ZXh0IGludG8gYSBiaXRtYXAgaW1hZ2UgYW5kIHNlbmRzIGl0IHRvIHRoZSBwcmludGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtSYXN0ZXJPYmp9IHJhc3Rlck9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuLCBmb250U2l6ZTpudW1iZXIsIHBhcGVyV2lkdGg6bnVtYmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50UmFzdGVyUmVjZWlwdChwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIHJhc3Rlck9iajogUmFzdGVyT2JqKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBpbWFnZSBmcm9tIGEgc3RyaW5nIFVSSSBhbmQgY29udmVydHMgaXQgdG8gYml0bWFwIHRvIHNlbmQgaXQgdG8gdGhlIHByaW50ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEBwYXJhbSB7SW1hZ2VPYmp9IGltYWdlT2JqICB1cmk6c3RyaW5nLCBwYXBlcldpZHRoPzpudW1iZXIsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50SW1hZ2UocG9ydDogc3RyaW5nfG51bGwsIGVtdWxhdGlvbjogc3RyaW5nLCBpbWFnZU9iajogSW1hZ2VPYmopOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZW5kcyBhbiBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgb3BlbmVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wZW5DYXNoRHJhd2VyKHBvcnQ6IHN0cmluZ3xudWxsLCBlbXVsYXRpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGFuIEFycmF5IG9mIGNvbW1hbmRzIHRvIHRoZSBjb21tYW5kIGJ1ZmZlciB1c2luZyB0aGUgQW5kcm9pZCBJQ29tbWFuZEJ1aWxkZXJJbnRlcmZhY2Ugb3IgaU9TIElTQ0JCdWlsZGVySW50ZXJmYWNlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtDb21tYW5kc0FycmF5fSBjb21tYW5kc0FycmF5ICBlYWNoIGNvbW1hbmQgaW4gdGhlIGFycmF5IHNob3VsZCBiZSBhbiBpbnN0YW5jZSBvZiB0aGUgUHJpbnRDb21tYW5kIG9iamVjdC4gRXhhbXBsZSBbe2FwcGVuZDpcInRleHRcIn0sIHtcIm9wZW5DYXNoRHJhd2VyOiAxXCJ9XVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmludChwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIGNvbW1hbmRzQXJyYXk6IENvbW1hbmRzQXJyYXkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIGNvbm5lY3QgdG8gdGhlIHByaW50ZXIsIGtlZXAgdGhlIGNvbm5lY3Rpb24gYWxpdmUgYW5kIHJlY2VpdmUgc3RhdHVzIHVwZGF0ZXMgdGhyb3VnaCBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBwcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0gaGFzQmFyY29kZVJlYWRlclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBTdWNjZXNzISBpZiBjb25uZWN0ZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcbiAgfSlcbiAgY29ubmVjdChwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nLCBoYXNCYXJjb2RlUmVhZGVyOiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGRldmljZSBzdGF0dXMgZXZlbnRzLiBPbmx5IGZpcmVzIHdoZW4gYSBwcmludGVyIGlzIGNvbm5uZWN0ZWQgdGhyb3VnaCB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IGRhdGFUeXBlOiBwcmludGVyT25saW5lLCBwcmludGVyT2ZmbGluZSwgcHJpbnRlckltcG9zc2libGUsIHByaW50ZXJQYXBlckVtcHR5LCBwcmludGVyUGFwZXJOZWFyRW1wdHksIHByaW50ZXJQYXBlclJlYWR5LCBwcmludGVyQ292ZXJPcGVuLCBwcmludGVyQ292ZXJDbG9zZSwgY2FzaERyYXdlck9wZW4sIGNhc2hEcmF3ZXJDbG9zZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3N0YXJQcm50RGF0YScsXG4gIH0pXG4gIGdldFN0YXR1cygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzY29ubmVjdCAoY2xvc2UgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIHBlcmlwaGVyYWxzKSwgdGhpcyBpcyB1c2VmdWwgdG8gYXZvaWQga2VlcGluZyBhbGl2ZSBhIGNvbm5lY3Rpb24gd2hlbiBub3QgaW4gdGhlIGFwcCB0byBzYXZlIGRldmljZSBiYXR0ZXJ5XG4gICAqIChlbmVyZ3kgY29uc3VtcHRpb24pLiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBhcHAgaXMgcGF1c2VkIG9yIGNsb3NlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==