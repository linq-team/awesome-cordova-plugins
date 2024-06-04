import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
var StarPRNT = /** @class */ (function (_super) {
    __extends(StarPRNT, _super);
    function StarPRNT() {
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
    StarPRNT.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNT.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNT.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNT.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNT.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNT.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNT.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNT.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNT.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNT.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNT.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StarPRNT, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    StarPRNT.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StarPRNT });
    StarPRNT.pluginName = "StarPRNT";
    StarPRNT.plugin = "cordova-plugin-starprnt";
    StarPRNT.pluginRef = "starprnt";
    StarPRNT.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNT.platforms = ["Android", "iOS"];
    StarPRNT = __decorate([], StarPRNT);
    return StarPRNT;
}(AwesomeCordovaNativePlugin));
export { StarPRNT };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StarPRNT, decorators: [{
            type: Injectable
        }], propDecorators: { portDiscovery: [], checkStatus: [], printRawText: [], printRasterReceipt: [], printImage: [], openCashDrawer: [], print: [], connect: [], getStatus: [], disconnect: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Rhci1wcm50L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBa1psQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFNBZVg7QUFmRCxXQUFZLFNBQVM7SUFDbkIsb0ZBQW9GO0lBQ3BGLGtDQUFxQixDQUFBO0lBQ3JCLHVCQUF1QjtJQUN2QixvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMEM7SUFDMUMsa0NBQXFCLENBQUE7SUFDckIsYUFBYTtJQUNiLHdDQUEyQixDQUFBO0lBQzNCLFlBQVk7SUFDWiw4QkFBaUIsQ0FBQTtJQUNqQiw0REFBNEQ7SUFDNUQsMENBQTZCLENBQUE7SUFDN0IsWUFBWTtJQUNaLDRDQUErQixDQUFBO0FBQ2pDLENBQUMsRUFmVyxTQUFTLEtBQVQsU0FBUyxRQWVwQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksUUFlWDtBQWZELFdBQVksUUFBUTtJQUNsQixjQUFjO0lBQ2QsZ0NBQW9CLENBQUE7SUFDcEIsMENBQTBDO0lBQzFDLHdDQUE0QixDQUFBO0lBQzVCLGVBQWU7SUFDZixrQ0FBc0IsQ0FBQTtJQUN0QixjQUFjO0lBQ2Qsd0NBQTRCLENBQUE7SUFDNUIseUJBQXlCO0lBQ3pCLDZCQUFpQixDQUFBO0lBQ2pCLDBCQUEwQjtJQUMxQix5QkFBYSxDQUFBO0lBQ2IsV0FBVztJQUNYLDBCQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFFBQVEsS0FBUixRQUFRLFFBZW5CO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxZQXdD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QUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQztRQUVGOztXQUVHO1FBQ0gsaUJBQVcsR0FBRztZQUNaLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsNkJBQXVCLEdBQUc7WUFDeEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLFdBQVc7U0FDdkIsQ0FBQzs7O0lBU0YsZ0NBQWEsYUFBQyxJQUFZO0lBWTFCLDhCQUFXLGFBQUMsSUFBWSxFQUFFLFNBQWlCO0lBYTNDLCtCQUFZLGFBQUMsSUFBaUIsRUFBRSxTQUFpQixFQUFFLFFBQWtCO0lBYXJFLHFDQUFrQixhQUFDLElBQWlCLEVBQUUsU0FBaUIsRUFBRSxTQUFvQjtJQWE3RSw2QkFBVSxhQUFDLElBQWlCLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtJQVluRSxpQ0FBYyxhQUFDLElBQWlCLEVBQUUsU0FBaUI7SUFhbkQsd0JBQUssYUFBQyxJQUFpQixFQUFFLFNBQWlCLEVBQUUsYUFBNEI7SUFnQnhFLDBCQUFPLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsZ0JBQXlCO0lBYWxFLDRCQUFTO0lBV1QsNkJBQVU7MEdBblVDLFFBQVE7OEdBQVIsUUFBUTs7Ozs7O0lBQVIsUUFBUSxrQkFBUixRQUFRO21CQTFvQnJCO0VBMG9COEIsMEJBQTBCO1NBQTNDLFFBQVE7NEZBQVIsUUFBUTtrQkFEcEIsVUFBVTs4QkFnTlQsYUFBYSxNQVliLFdBQVcsTUFhWCxZQUFZLE1BYVosa0JBQWtCLE1BYWxCLFVBQVUsTUFZVixjQUFjLE1BYWQsS0FBSyxNQWdCTCxPQUFPLE1BYVAsU0FBUyxNQVdULFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXIge1xuICAvKipcbiAgICogUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcbiAgICovXG4gIG1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBNYWMgQWRkcmVzc1xuICAgKi9cbiAgbWFjQWRkcmVzcz86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBwb3J0IG5hbWUgdXNlZCB0byBjcmVhdGUgYSBuZXcgcG9ydCBpbnN0YW5jZSBvZiBTTVBvcnQgb3IgU3RhcklPRXh0TWFuYWdlclxuICAgKi9cbiAgcG9ydE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVU0IgU2VyaWFsIE51bWJlciAoVVNCIFByaW50ZXJzIE9ubHkpXG4gICAqL1xuICBVU0JTZXJpYWxOdW1iZXI/OiBzdHJpbmc7XG59XG4vKipcbiAqIEFycmF5IG9mIFByaW50ZXIgb2JqZWN0cyByZXR1cm5lZCBieSB0aGUgcG9ydERpc2NvdmVyeSgpIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFByaW50ZXJzID0gQXJyYXk8UHJpbnRlcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlclN0YXR1cyB7XG4gIC8qKlxuICAgKiBQcmludGVyIE9ubGluZS9PZmZsaW5lIHN0YXR1c1xuICAgKi9cbiAgb2ZmbGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBQcmludGVyIG1vZGVsIG5hbWUgYW5kIG1vZGVsIG51bWJlclxuICAgKi9cbiAgTW9kZWxOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIGNvdmVyIHN0YXR1c1xuICAgKi9cbiAgY292ZXJPcGVuPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJpbnRlciBQYXBlciBDdXR0ZXIgc3RhdHVzXG4gICAqL1xuICBjdXR0ZXJFcnJvcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgUGFwZXIgc3RhdHVzXG4gICAqL1xuICByZWNlaXB0UGFwZXJFbXB0eT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgRmlybXdhcmUgaW5mb3JtYXRpb25cbiAgICovXG4gIEZpcm13YXJlVmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmludE9iaiB7XG4gIC8qKlxuICAgKiBzdHJpbmcgY29udGFpbmluZyB0aGUgdGV4dCB0byBwcmludCwgRXhhbXBsZTogXCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJcbiAgICovXG4gIHRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogIFNlbmRzIGEgUGFydGlhbEN1dFdpdGhGZWVkIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIsIGRlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIGN1dFJlY2VpcHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzIgLSBEZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBvcGVuQ2FzaERyYXdlcj86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFJhc3Rlck9iaiBleHRlbmRzIFByaW50T2JqIHtcbiAgLyoqXG4gICAqIEZvbnQgc2l6ZSBudW1iZXIsIGRlZmF1bHRzIHRvIDI1XG4gICAqL1xuICBmb250U2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogUGFwZXIgd2lkdGggKFVuaXRzOiBEb3RzKS4gMiBpbmNoZXM6IDM4NCwgMyBpbmNoZXM6IDU3NiwgNCBpbmNoZXM6IDgzMiwgRVNDUG9zIDMgaW5jaGVzOiA1MTIsIERvdCAzIGluY2hlczogMjEwLiBEZWZhdWx0cyB0byA1NzZcbiAgICovXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlT2JqIHtcbiAgLyoqXG4gICAqIEltYWdlIFVSSSB0byBwcmludCwgdGhpcyBjYW4gYmUgb2J0YWluZWQgdmlhIHRoZSBjYW1lcmEgb3IgcGhvdG8gbGlicmFyeSBvciBhcyBhIHN0YXRpYyByZXNvdXJjZSBzYXZlZCBvbiB0aGUgcGhvbmUgbWVtb3J5XG4gICAqL1xuICB1cmk6IHN0cmluZztcblxuICAvKipcbiAgICogSW1hZ2Ugd2lkdGggKFVuaXRzOiBEb3RzKSBkZWZhdWx0cyB0byA1NzZcbiAgICovXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBTZW5kcyBhIFBhcnRpYWxDdXRXaXRoRmVlZCBjb21tYW5kIHRvIHRoZSBwcmludGVyLCBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBjdXRSZWNlaXB0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yIC0gRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBQcmludENvbW1hbmQge1xuICAvKipcbiAgICogQ2hhcmFjdGhlciBlbmNvZGluZyBpcyB1c2VkIHRvIGdldEJ5dGUgZGF0YSBmcm9tIGFsbCBzdWJzZXF1ZW50IGNvbW1hbmRzLiBEZWZhdWx0ICdVUy1BU0NJSSdcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkVuY29kaW5nIG9yIHRoZSBFbmNvZGluZyBlbnVtLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kRW5jb2Rpbmc6J1VTLUFTQ0lJJ31cbiAgICovXG4gIGFwcGVuZEVuY29kaW5nPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgY29kZSBwYWdlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmRzIHByb3BlcnR5LlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIERlZmluZWQgaW4gU3RhclBSTlQuQ29kZVBhZ2VUeXBlIG9yIHRoZSBDb2RlUGFnZVR5cGUgZW51bS5cbiAgICogRXhhbXBsZToge2FwcGVuZENvZGVQYWdlOidDUDg1OCd9XG4gICAqL1xuICBhcHBlbmRDb2RlUGFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kOlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxuICAgKi9cbiAgYXBwZW5kPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEYXRhIChUZXh0KSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRSYXc6XCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJ9XG4gICAqL1xuICBhcHBlbmRSYXc/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgKENvbW1hbmQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCeXRlczpbMHg0OCwgMHg2NSwgMHg2YywgMHg2YywgMHg2ZiwgMHgyMCwgMHg1NywgMHg2ZiwgMHg3MiwgMHg2YywgMHg2NCwgMHgyZV19XG4gICAqL1xuICBhcHBlbmRCeXRlcz86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBEYXRhIChDb21tYW5kKSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUmF3Qnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxuICAgKi9cbiAgYXBwZW5kUmF3Qnl0ZXM/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogU2V0IGNvbW1hbmQgb2YgdGhlIGNoYXJhY3RlciBzcGFjZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gQ2hhcmFjdGVyIFNwYWNzIChVbml0OiBEb3RzKSBFeGFtcGxlOiA0XG4gICAqL1xuICBhcHBlbmRDaGFyYWN0ZXJTcGFjZT86IG51bWJlcjtcblxuICAvKipcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kRW1waGFzaXM6XCJTQUxFXFxuXCJ9XG4gICAqL1xuICBhcHBlbmRFbXBoYXNpcz86IHN0cmluZztcblxuICAvKipcbiAgICogIEVuYWJsZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlRW1waGFzaXM6dHJ1ZX1cbiAgICovXG4gIGVuYWJsZUVtcGhhc2lzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBpbnZlcnQgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZEludmVydDpcIlJlZnVuZHMgYW5kIEV4Y2hhbmdlc1xcblwifVxuICAgKi9cbiAgYXBwZW5kSW52ZXJ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogIEVuYWJsZSBpbnZlcnQgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUludmVydDp0cnVlfVxuICAgKi9cbiAgZW5hYmxlSW52ZXJ0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kVW5kZXJsaW5lOlwiMzAgZGF5c1wifVxuICAgKi9cbiAgYXBwZW5kVW5kZXJsaW5lPzogc3RyaW5nO1xuICAvKipcbiAgICogIEVuYWJsZSB1bmRlciBsaW5lIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVVbmRlcmxpbmU6dHJ1ZX1cbiAgICovXG4gIGVuYWJsZVVuZGVybGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBpbnRlcm5hdGlvbmFsIGNoYXJhY3RlciBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIERlZmluZWQgaW4gU3RhclBSTlQuSW50ZXJuYXRpb25hbFR5cGUgb3IgdGhlIEludGVybmF0aW9uYWxUeXBlIGVudW0uXG4gICAqICdVSycgfCAnVVNBJyB8ICdGcmFuY2UnIHwgJ0dlcm1hbnknIHwgJ0Rlbm1hcmsnIHwgJ1N3ZWRlbicgfCAnSXRhbHknIHwgJ1NwYWluJyB8ICdKYXBhbicgfCAnTm9yd2F5JyB8ICdEZW5tYXJrMicgfCAnU3BhaW4yJyB8ICdMYXRpbkFtZXJpY2EnIHwgJ0tvcmVhJyB8ICdJcmVsYW5kJyB8ICdMZWdhbCdcbiAgICogRXhhbXBsZSB7YXBwZW5kSW50ZXJuYXRpb25hbDpJbnRlcm5hdGlvbmFsVHlwZS5VS31cbiAgICovXG4gIGFwcGVuZEludGVybmF0aW9uYWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpbmUgZmVlZCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBQYXBlciBmZWVkIHVuaXRzIChVbml0czogTGluZXMpIEV4YW1wbGU6IDJcbiAgICovXG4gIGFwcGVuZExpbmVGZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVbml0IGZlZWQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gUGFwZXIgZmVlZCB1bml0cyAoVW5pdHM6IERvdHMpIEV4YW1wbGU6IDY0XG4gICAqL1xuICBhcHBlbmRVbml0RmVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IGNvbW1hbmQgb2YgdGhlIGxpbmUgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIExpbmUgc3BhY2VzIChVbml0czogRG90cykgRXhhbXBsZTogMzJcbiAgICovXG4gIGFwcGVuZExpbmVTcGFjZT86IG51bWJlcjtcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGZvbnQgc3R5bGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5Gb250U3R5bGVUeXBlIG9yIHRoZSBGb250U3R5bGVUeXBlIGVudW0uICdBJyB8ICdCJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kRm9udFN0eWxlOkZvbnRTdHlsZVR5cGUuQX1cbiAgICovXG4gIGFwcGVuZEZvbnRTdHlsZT86IHN0cmluZztcblxuICAvKipcbiAgICogUGFwZXIgY3V0IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5DdXRQYXBlckFjdGlvbiBvciB0aGUgQ3V0UGFwZXJBY3Rpb24gZW51bS4gJ0Z1bGxDdXQnIHwgJ0Z1bGxDdXRXaXRoRmVlZCcgfCAnUGFydGlhbEN1dCcgfCAnUGFydGlhbEN1dFdpdGhGZWVkJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kQ3V0UGFwZXI6Q3V0UGFwZXJBY3Rpb24uUGFydGlhbEN1dFdpdGhGZWVkfVxuICAgKi9cbiAgYXBwZW5kQ3V0UGFwZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJsYWNrIG1hcmsgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJsYWNrTWFya1R5cGUgb3IgdGhlIEJsYWNrTWFya1R5cGUgZW51bS4gJ1ZhbGlkJyB8ICdJbnZhbGlkJyB8ICdWYWxpZFdpdGhEZXRlY3Rpb24nXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCbGFja01hcms6IEJsYWNrTWFya1R5cGUuVmFsaWR9XG4gICAqL1xuICBhcHBlbmRCbGFja01hcms/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFic29sdXRlIHBvc2l0aW9uIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChVbml0OiBEb3RzKS4gU2VuZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBkYXRhIHByb3BlcnR5IHRvIGFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiBqdXN0IHRvIHRoYXQgc3RyaW5nXG4gICAqIEV4YW1wbGUxOiBBcHBlbmQgZGF0YSB3aXRoIEFic29sdXRlIHBvc2l0aW9uIHthcHBlbmRBYnNvbHV0ZVBvc2l0aW9uOjQwLCBkYXRhOiBcIlRleHQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvblwifVxuICAgKiBFeGFtcGxlMjogQXBwZW5kIGFic29sdXRlIHBvc2l0aW9uIHRvIHN1YnNlcXVlbnQgY29tbWFuZHM6IHthcHBlbmRBYnNvbHV0ZVBvc2l0aW9uOjQwfVxuICAgKi9cbiAgYXBwZW5kQWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogQWxpZ25tZW50IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWxpZ25tZW50IHBvc2l0aW9uIGp1c3QgdG8gdGhhdCBzdHJpbmdcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkFsaWdubWVudFBvc2l0aW9uIG9yIHRoZSBBbGlnbm1lbnRQb3NpdGlvbiBlbnVtLiAnTGVmdCcgfCAnQ2VudGVyJyB8ICdSaWdodCcuXG4gICAqIEV4YW1wbGUxIEFwcGVuZCBkYXRhIHdpdGggQWxpZ25tZW50IHBvc2l0aW9uOiB7YXBwZW5kQWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciwgZGF0YTogXCJUZXh0IHdpdGggY2VudGVyZWQgcG9zaXRpb25cIn1cbiAgICogRXhhbXBsZTIgQXBwZW5kIGFic29sdXRlIHBvc2l0aW9uIHRvIHN1YnNlcXVlbnQgY29tbWFuZHM6IHthcHBlbmRBbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfVxuICAgKi9cbiAgYXBwZW5kQWxpZ25tZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIHRhYiBzZXQvY2xlYXIgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gKE9ubHkgd29ya3MgZm9yIGNlcnRhaW4gcHJpbnRlciBtb2RlbHMsIGNoZWNrIHRoZSBzdGFyU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMpXG4gICAqIEFycmF5IG9mIGhvcml6b250YWwgdGFiIHBvc2l0aW9ucyAoVW5pdHM6IEFOSyBjaGFyYWN0ZXIgcGl0Y2gpLiBTcGVjaWZ5aW5nIGVtcHR5IGFycmF5IGRlbGV0ZXMgYWxsIGN1cnJlbnRseSBzZXQgaG9yaXpvbnRhbCB0YWIgcG9zaXRpb25zLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uOlsxNSwgMzVdfVxuICAgKiBEZWxldGUgcG9zaXRpb25zIEV4YW1wbGU6IHthcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb246W119XG4gICAqL1xuICBhcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb24/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgbG9nbyBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGhlIGxvZ28gaGFzIHRvIGJlIHVwbG9hZGVkIHRvIHRoZSBwcmludGVyIHVzaW5nIHRoZSBTdGFyIFByaW50IHV0aWxpdHkuXG4gICAqIFNlbmQgaW4gY29uanVjdGlvbiB3aXRoIHRoZSBsb2dvU2l6ZSBwcm9wZXJ0eSB0byBzZXQgdGhlIGxvZ28gc2l6ZVxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxfVxuICAgKiBFeGFtcGxlIHdpdGggTG9nb1NpemU6IHthcHBlbmRMb2dvOjEsIGxvZ29TaXplOkxvZ29TaXplLkRvdWJsZVdpZHRoRG91YmxlSGVpZ2h0fVxuICAgKi9cbiAgYXBwZW5kTG9nbz86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRMb2dvIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5Mb2dvU2l6ZSBvciB0aGUgTG9nb1NpemUgZW51bS4gJ05vcm1hbCcgfCAnRG91YmxlV2lkdGgnIHwgJ0RvdWJsZUhlaWdodCcgfCAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnO1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cbiAgICovXG4gIGxvZ29TaXplPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBiYXJjb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IEJhcmNvZGVTeW1ib2xvZ3ksIEJhcmNvZGVXaWR0aCwgaGVpZ2h0LCBocmksIGFic29sdXRlUG9zaXRpb24sIGFsaWdubWVudC5cbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6XCJ7QlN0YXJcIiwgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjgsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTIsIGhlaWdodDo0MCwgaHJpOnRydWUgfVxuICAgKiBFeGFtcGxlIHdpdGggYWJzb2x1dGVQb3NpdGlvbjoge2FwcGVuZEJhcmNvZGU6XCJ7QlN0YXJcIiwgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjgsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTIsIGhlaWdodDo0MCwgaHJpOnRydWUsIGFic29sdXRlUG9zaXRpb246NDAgfVxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OnthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhbGlnbm1lbnQ6YWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciB9XG4gICAqL1xuICBhcHBlbmRCYXJjb2RlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJhcmNvZGVTeW1ib2xvZ3kgb3IgdGhlIEJhcmNvZGVTeW1ib2xvZ3kgZW51bS5cbiAgICogJ0NvZGUxMjgnIHwgJ0NvZGUzOScgfCAnQ29kZTkzJyB8ICdJVEYnIHwgJ0pBTjgnIHwgJ0pBTjEzJyB8ICdOVzcnIHwgJ1VQQ0EnIHwgJ1VQQ0UnIHxcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4fVxuICAgKi9cbiAgQmFyY29kZVN5bWJvbG9neT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CYXJjb2RlV2lkdGggb3IgdGhlIEJhcmNvZGVXaWR0aCBlbnVtLlxuICAgKiBNb2RlMSB8IE1vZGUyIHwgTW9kZTMgfCBNb2RlNCB8IE1vZGU1IHwgTW9kZTYgfCBNb2RlNyB8IE1vZGU4IHwgTW9kZTlcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTJ9XG4gICAqL1xuICBCYXJjb2RlV2lkdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxuICAgKiBVbmRlci1iYXIgY2hhcmFjdGVycy4gdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWRcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGhyaTp0cnVlfVxuICAgKi9cbiAgaHJpPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIGFwcGVuZEJhcmNvZGUgRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGhlaWdodDo0MH1cbiAgICogYXBwZW5kTXVsdGlwbGU6IHthcHBlbmRNdWx0aXBsZTondGV4dCB0byBwcmludCcsIGhlaWdodDo0MH1cbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCBvciB0aGUgYXBwZW5kTXVsdGlwbGUgY29tbWFuZCAoVW5pdHM6RG90cylcbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCB3aWR0aDo1NzZ9XG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCB3aWR0aDo0MH1cbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLCBvciB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXG4gICAqIGFwcGVuZEJhcmNvZGUgRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKiBhcHBlbmRRckNvZGUgRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXG4gICAqL1xuICBhYnNvbHV0ZVBvc2l0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLCBvciB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxuICAgKi9cbiAgYWxpZ25tZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgbXVsdGlwbGUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJcbiAgICogRXhhbXBsZToge2FwcGVuZE11bHRpcGxlOlwiICAgJDE1Ni45NVxcblwiLCB3aWR0aDoyLCBoZWlnaHQ6Mn0uXG4gICAqL1xuICBhcHBlbmRNdWx0aXBsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRW5hYmxlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXG4gICAqIEV4YW1wbGU6IHtlbmFibGVNdWx0aXBsZTp0cnVlLCB3aWR0aDoyLCBoZWlnaHQ6Mn1cbiAgICogRGlzYWJsZSBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6ZmFsc2V9XG4gICAqL1xuICBlbmFibGVNdWx0aXBsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIFFSIGNvZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogUXJDb2RlTW9kZWwsIFFyQ29kZUxldmVsLCBjZWxsLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDh9LlxuICAgKiBFeGFtcGxlIHdpdGggYWJzb2x1dGVQb3NpdGlvbjoge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOCwgYWJzb2x1dGVQb3NpdGlvbjogNDAgfS5cbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDoge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOCwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cbiAgICovXG4gIGFwcGVuZFFyQ29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULlFyQ29kZU1vZGVsIG9yIHRoZSBRckNvZGVNb2RlbCBlbnVtLiAnTm8xJyB8ICdObzInIERlZmF1bHQgJ05vMidcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgUXJDb2RlTW9kZWw6UXJDb2RlTW9kZWwuTm8xfVxuICAgKi9cbiAgUXJDb2RlTW9kZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVMZXZlbCBvciB0aGUgUXJDb2RlTGV2ZWwgZW51bS4gJ05vMScgfCAnTm8yJy4gRGVmYXVsdCAnSCdcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgUXJDb2RlTGV2ZWw6UXJDb2RlTGV2ZWwuSH1cbiAgICovXG4gIFFyQ29kZUxldmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLiBRUkNvZGUgQ2VsbCBzaXplLiBEZWZhdWx0IDQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGNlbGw6OH1cbiAgICovXG4gIGNlbGw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGJpdG1hcCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYSBzdHJpbmcgaW1hZ2UgVVJJXG4gICAqIHRoaXMgY2FuIGJlIG9idGFpbmVkIHZpYSB0aGUgY2FtZXJhIG9yIHBob3RvIGxpYnJhcnkgb3IgYXMgYSBzdGF0aWMgcmVzb3VyY2Ugc2F2ZWQgb24gdGhlIHBob25lIG1lbW9yeS5cbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBkaWZmdXNpb24sIHdpZHRoLCBib3RoU2NhbGUsIHJvdGF0aW9uLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlfVxuICAgKiBFeGFtcGxlIHdpdGggYWJzb2x1dGVQb3NpdGlvbjoge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogdHJ1ZSwgd2lkdGg6NTc2LCBib3RoU2NhbGU6IHRydWUsIGFic29sdXRlUG9zaXRpb246IDQwIH0uXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhbGlnbm1lbnQ6XCJDZW50ZXJcIiB9LlxuICAgKi9cbiAgYXBwZW5kQml0bWFwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLiBSYW5kb20gZGl0aGVyOiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZC4gRGVmYXVsdCB0cnVlLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiBmYWxzZSB9XG4gICAqL1xuICBkaWZmdXNpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLiBIZWlnaHQgaXMgY2hhbmdlZCBhY2NvcmRpbmcgdG8gdGhlIGNvbnZlcnNpb24gcmF0ZSBvZiB0aGUgd2lkdGggcHJvcGVydHkuXG4gICAqIHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkLiBEZWZhdWx0IHRydWUuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBib3RoU2NhbGU6IHRydWUgfVxuICAgKi9cbiAgYm90aFNjYWxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJpdG1hcENvbnZlcnRlclJvdGF0aW9uIG9yIHRoZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBlbnVtLlxuICAgKiAnTm9ybWFsJyB8ICdMZWZ0OTAnIHwgJ1JpZ2h0OTAnIHwgJ1JvdGF0ZTE4MCdcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIHJvdGF0aW9uOiBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbi5MZWZ0OTAgfVxuICAgKi9cbiAgcm90YXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVsIG51bWJlcjogRXhhbXBsZTogMSA9IE5vMSwgMiA9IE5vMlxuICAgKi9cbiAgb3BlbkNhc2hEcmF3ZXI/OiBudW1iZXI7XG59XG5cbi8qKlxuICogRW11bGF0aW9uIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBFbXVsYXRpb24ge1xuICAvKiogbVBPUCwgU00tTDIwMCwgU00tTDMwMCwgU00tUzIxMGksIFNNLVMyMjBpLCBTTS1TMjMwaSwgU00tVDMwMGkvVDMwMCwgU00tVDQwMGkgKi9cbiAgU3RhclBSTlQgPSAnU3RhclBSTlQnLFxuICAvKiogU00tTDIwMCwgU00tTDMwMCAqL1xuICBTdGFyUFJOVEwgPSAnU3RhclBSTlRMJyxcbiAgLyoqIEZWUDEwLCBUU1A2NTBJSSwgVFNQNzAwSUksIFRTUDgwMElJICovXG4gIFN0YXJMaW5lID0gJ1N0YXJMaW5lJyxcbiAgLyoqIFRTUDEwMCAqL1xuICBTdGFyR3JhcGhpYyA9ICdTdGFyR3JhcGhpYycsXG4gIC8qKiBCU0MxMCAqL1xuICBFc2NQb3MgPSAnRXNjUG9zJyxcbiAgLyoqIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXG4gIEVzY1Bvc01vYmlsZSA9ICdFc2NQb3NNb2JpbGUnLFxuICAvKiogU1A3MDAgKi9cbiAgU3RhckRvdEltcGFjdCA9ICdTdGFyRG90SW1wYWN0Jyxcbn1cblxuLyoqXG4gKiBFbmNvZGluZyBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gRW5jb2Rpbmcge1xuICAvKiogRW5nbGlzaCAqL1xuICBVU0FTQ0lJID0gJ1VTLUFTQ0lJJyxcbiAgLyoqIEZyZW5jaCwgR2VybWFuLCBQb3J0dWd1ZXNlLCBTcGFuaXNoICovXG4gIFdpbmRvd3MxMjUyID0gJ1dpbmRvd3MtMTI1MicsXG4gIC8qKiBKYXBhbmVzZSAqL1xuICBTaGlmdEpJUyA9ICdTaGlmdC1KSVMnLFxuICAvKiogUnVzc2lhbiAqL1xuICBXaW5kb3dzMTI1MSA9ICdXaW5kb3dzLTEyNTEnLFxuICAvKiogU2ltcGxpZmllZCBDaGluZXNlICovXG4gIEdCMjMxMiA9ICdHQjIzMTInLFxuICAvKiogVHJhZGl0aW9uYWwgQ2hpbmVzZSAqL1xuICBCaWc1ID0gJ0JpZzUnLFxuICAvKiogVUZUOCAqL1xuICBVVEY4ID0gJ1VURi04Jyxcbn1cblxuLyoqXG4gKiBDb2RlUGFnZVR5cGUgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIENvZGVQYWdlVHlwZSB7XG4gIENQNzM3ID0gJ0NQNzM3JyxcbiAgQ1A3NzIgPSAnQ1A3NzInLFxuICBDUDc3NCA9ICdDUDc3NCcsXG4gIENQODUxID0gJ0NQODUxJyxcbiAgQ1A4NTIgPSAnQ1A4NTInLFxuICBDUDg1NSA9ICdDUDg1NScsXG4gIENQODU3ID0gJ0NQODU3JyxcbiAgQ1A4NTggPSAnQ1A4NTgnLFxuICBDUDg2MCA9ICdDUDg2MCcsXG4gIENQODYxID0gJ0NQODYxJyxcbiAgQ1A4NjIgPSAnQ1A4NjInLFxuICBDUDg2MyA9ICdDUDg2MycsXG4gIENQODY0ID0gJ0NQODY0JyxcbiAgQ1A4NjUgPSAnQ1A4NjUnLFxuICBDUDg2OSA9ICdDUDg2OScsXG4gIENQODc0ID0gJ0NQODc0JyxcbiAgQ1A5MjggPSAnQ1A5MjgnLFxuICBDUDkzMiA9ICdDUDkzMicsXG4gIENQOTk5ID0gJ0NQOTk5JyxcbiAgQ1AxMDAxID0gJ0NQMTAwMScsXG4gIENQMTI1MCA9ICdDUDEyNTAnLFxuICBDUDEyNTEgPSAnQ1AxMjUxJyxcbiAgQ1AxMjUyID0gJ0NQMTI1MicsXG4gIENQMjAwMSA9ICdDUDIwMDEnLFxuICBDUDMwMDEgPSAnQ1AzMDAxJyxcbiAgQ1AzMDAyID0gJ0NQMzAwMicsXG4gIENQMzAxMSA9ICdDUDMwMTEnLFxuICBDUDMwMTIgPSAnQ1AzMDEyJyxcbiAgQ1AzMDIxID0gJ0NQMzAyMScsXG4gIENQMzA0MSA9ICdDUDMwNDEnLFxuICBDUDM4NDAgPSAnQ1AzODQwJyxcbiAgQ1AzODQxID0gJ0NQMzg0MScsXG4gIENQMzg0MyA9ICdDUDM4NDMnLFxuICBDUDM4NDUgPSAnQ1AzODQ1JyxcbiAgQ1AzODQ2ID0gJ0NQMzg0NicsXG4gIENQMzg0NyA9ICdDUDM4NDcnLFxuICBDUDM4NDggPSAnQ1AzODQ4JyxcbiAgVVRGOCA9ICdVVEY4JyxcbiAgQmxhbmsgPSAnQmxhbmsnLFxufVxuXG4vKipcbiAqIEludGVybmF0aW9uYWxUeXBlIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBJbnRlcm5hdGlvbmFsVHlwZSB7XG4gIFVLID0gJ1VLJyxcbiAgVVNBID0gJ1VTQScsXG4gIEZyYW5jZSA9ICdGcmFuY2UnLFxuICBHZXJtYW55ID0gJ0dlcm1hbnknLFxuICBEZW5tYXJrID0gJ0Rlbm1hcmsnLFxuICBTd2VkZW4gPSAnU3dlZGVuJyxcbiAgSXRhbHkgPSAnSXRhbHknLFxuICBTcGFpbiA9ICdTcGFpbicsXG4gIEphcGFuID0gJ0phcGFuJyxcbiAgTm9yd2F5ID0gJ05vcndheScsXG4gIERlbm1hcmsyID0gJ0Rlbm1hcmsyJyxcbiAgU3BhaW4yID0gJ1NwYWluMicsXG4gIExhdGluQW1lcmljYSA9ICdMYXRpbkFtZXJpY2EnLFxuICBLb3JlYSA9ICdLb3JlYScsXG4gIElyZWxhbmQgPSAnSXJlbGFuZCcsXG4gIExlZ2FsID0gJ0xlZ2FsJyxcbn1cblxuLyoqXG4gKiBGb250U3R5bGVUeXBlIGNvbnN0YW50cy5cbiAqL1xuZXhwb3J0IGVudW0gRm9udFN0eWxlVHlwZSB7XG4gIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cbiAgQSA9ICdBJyxcbiAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xuICBCID0gJ0InLFxufVxuXG4vKipcbiAqIEN1dFBhcGVyQWN0aW9uIGNvbnN0YW50cy5cbiAqL1xuZXhwb3J0IGVudW0gQ3V0UGFwZXJBY3Rpb24ge1xuICBGdWxsQ3V0ID0gJ0Z1bGxDdXQnLFxuICBGdWxsQ3V0V2l0aEZlZWQgPSAnRnVsbEN1dFdpdGhGZWVkJyxcbiAgUGFydGlhbEN1dCA9ICdQYXJ0aWFsQ3V0JyxcbiAgUGFydGlhbEN1dFdpdGhGZWVkID0gJ1BhcnRpYWxDdXRXaXRoRmVlZCcsXG59XG5cbi8qKlxuICogQmxhY2tNYXJrVHlwZSBjb25zdGFudHMuXG4gKi9cbmV4cG9ydCBlbnVtIEJsYWNrTWFya1R5cGUge1xuICBWYWxpZCA9ICdWYWxpZCcsXG4gIEludmFsaWQgPSAnSW52YWxpZCcsXG4gIFZhbGlkV2l0aERldGVjdGlvbiA9ICdWYWxpZFdpdGhEZXRlY3Rpb24nLFxufVxuXG4vKipcbiAqIExvZ29TaXplIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBMb2dvU2l6ZSB7XG4gIE5vcm1hbCA9ICdOb3JtYWwnLFxuICBEb3VibGVXaWR0aCA9ICdEb3VibGVXaWR0aCcsXG4gIERvdWJsZUhlaWdodCA9ICdEb3VibGVIZWlnaHQnLFxuICBEb3VibGVXaWR0aERvdWJsZUhlaWdodCA9ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCcsXG59XG5cbi8qKlxuICogQWxpZ25tZW50UG9zaXRpb24gY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEFsaWdubWVudFBvc2l0aW9uIHtcbiAgTGVmdCA9ICdMZWZ0JyxcbiAgQ2VudGVyID0gJ0NlbnRlcicsXG4gIFJpZ2h0ID0gJ1JpZ2h0Jyxcbn1cblxuLyoqXG4gKiBCYXJjb2RlU3ltYm9sb2d5IGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBCYXJjb2RlU3ltYm9sb2d5IHtcbiAgQ29kZTEyOCA9ICdDb2RlMTI4JyxcbiAgQ29kZTM5ID0gJ0NvZGUzOScsXG4gIENvZGU5MyA9ICdDb2RlOTMnLFxuICBJVEYgPSAnSVRGJyxcbiAgSkFOOCA9ICdKQU44JyxcbiAgSkFOMTMgPSAnSkFOMTMnLFxuICBOVzcgPSAnTlc3JyxcbiAgVVBDQSA9ICdVUENBJyxcbiAgVVBDRSA9ICdVUENFJyxcbn1cblxuLyoqXG4gKiBCYXJjb2RlV2lkdGggY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEJhcmNvZGVXaWR0aCB7XG4gIE1vZGUxID0gJ01vZGUxJyxcbiAgTW9kZTIgPSAnTW9kZTInLFxuICBNb2RlMyA9ICdNb2RlMycsXG4gIE1vZGU0ID0gJ01vZGU0JyxcbiAgTW9kZTUgPSAnTW9kZTUnLFxuICBNb2RlNiA9ICdNb2RlNicsXG4gIE1vZGU3ID0gJ01vZGU3JyxcbiAgTW9kZTggPSAnTW9kZTgnLFxuICBNb2RlOSA9ICdNb2RlOScsXG59XG5cbi8qKlxuICogUXJDb2RlTW9kZWwgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIFFyQ29kZU1vZGVsIHtcbiAgTm8xID0gJ05vMScsXG4gIE5vMiA9ICdObzInLFxufVxuXG4vKipcbiAqIFFyQ29kZUxldmVsIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBRckNvZGVMZXZlbCB7XG4gIEggPSAnSCcsXG4gIEwgPSAnTCcsXG4gIE0gPSAnTScsXG4gIFEgPSAnUScsXG59XG5cbi8qKlxuICogQml0bWFwQ29udmVydGVyUm90YXRpb24gY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIHtcbiAgTm9ybWFsID0gJ05vcm1hbCcsXG4gIExlZnQ5MCA9ICdMZWZ0OTAnLFxuICBSaWdodDkwID0gJ1JpZ2h0OTAnLFxuICBSb3RhdGUxODAgPSAnUm90YXRlMTgwJyxcbn1cblxuLyoqXG4gKiBQdXNoIGEgbmV3IFByaW50Q29tbWFuZCBvYmplY3QgdG8gdGhlIGFycmF5IGZvciBhIHNlcGFyYXRlIGluc3RydWN0aW9uIHRvIHRoZSBwcmludGVyLiBFeGFtcGxlIFt7YXBwZW5kOlwidGV4dFwifSwge1wib3BlbkNhc2hEcmF3ZXI6IDFcIn1dXG4gKi9cbmV4cG9ydCB0eXBlIENvbW1hbmRzQXJyYXkgPSBBcnJheTxQcmludENvbW1hbmQ+O1xuXG4vKipcbiAqIEBuYW1lIFN0YXJQUk5UXG4gKiBAZGVzY3JpcHRpb25cbiAqIElvbmljIE5hdGl2ZSB3cmFwcGVycyBmb3IgdGhlIHN0YXJwcm50IGNvcmRvdmEgcGx1Z2luIGZvciBTdGFyIE1pY3JvbmljcyBCbHVldG9vdGgvTEFOIHByaW50ZXJzXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0YXJQUk5UIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3N0YXItcHJudC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXJwcm50OiBTdGFyUFJOVCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc3RhcnBybnQucG9ydERpc2NvdmVyeSgnQWxsJylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdGFyUFJOVCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0YXJwcm50JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ3N0YXJwcm50JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2F1Y3RpZmVyYS1qb3NlZC9zdGFycHJudCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGFyUFJOVCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBFbXVsYXRpb25cbiAgICovXG4gIEVtdWxhdGlvbiA9IHtcbiAgICBTdGFyUFJOVDogJ1N0YXJQUk5UJyxcbiAgICBTdGFyUFJOVEw6ICdTdGFyUFJOVEwnLFxuICAgIFN0YXJMaW5lOiAnU3RhckxpbmUnLFxuICAgIFN0YXJHcmFwaGljOiAnU3RhckdyYXBoaWMnLFxuICAgIEVzY1BvczogJ0VzY1BvcycsXG4gICAgRXNjUG9zTW9iaWxlOiAnRXNjUG9zTW9iaWxlJyxcbiAgICBTdGFyRG90SW1wYWN0OiAnU3RhckRvdEltcGFjdCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBFbmNvZGluZ1xuICAgKi9cbiAgRW5jb2RpbmcgPSB7XG4gICAgVVNBU0NJSTogJ1VTLUFTQ0lJJyxcbiAgICBXaW5kb3dzMTI1MjogJ1dpbmRvd3MtMTI1MicsXG4gICAgU2hpZnRKSVM6ICdTaGlmdC1KSVMnLFxuICAgIFdpbmRvd3MxMjUxOiAnV2luZG93cy0xMjUxJyxcbiAgICBHQjIzMTI6ICdHQjIzMTInLFxuICAgIEJpZzU6ICdCaWc1JyxcbiAgICBVVEY4OiAnVVRGLTgnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb2RlUGFnZVR5cGUgY29uc3RhbnRzXG4gICAqL1xuICBDb2RlUGFnZVR5cGUgPSB7XG4gICAgQ1A3Mzc6ICdDUDczNycsXG4gICAgQ1A3NzI6ICdDUDc3MicsXG4gICAgQ1A3NzQ6ICdDUDc3NCcsXG4gICAgQ1A4NTE6ICdDUDg1MScsXG4gICAgQ1A4NTI6ICdDUDg1MicsXG4gICAgQ1A4NTU6ICdDUDg1NScsXG4gICAgQ1A4NTc6ICdDUDg1NycsXG4gICAgQ1A4NTg6ICdDUDg1OCcsXG4gICAgQ1A4NjA6ICdDUDg2MCcsXG4gICAgQ1A4NjE6ICdDUDg2MScsXG4gICAgQ1A4NjI6ICdDUDg2MicsXG4gICAgQ1A4NjM6ICdDUDg2MycsXG4gICAgQ1A4NjQ6ICdDUDg2NCcsXG4gICAgQ1A4NjU6ICdDUDg2NScsXG4gICAgQ1A4Njk6ICdDUDg2OScsXG4gICAgQ1A4NzQ6ICdDUDg3NCcsXG4gICAgQ1A5Mjg6ICdDUDkyOCcsXG4gICAgQ1A5MzI6ICdDUDkzMicsXG4gICAgQ1A5OTk6ICdDUDk5OScsXG4gICAgQ1AxMDAxOiAnQ1AxMDAxJyxcbiAgICBDUDEyNTA6ICdDUDEyNTAnLFxuICAgIENQMTI1MTogJ0NQMTI1MScsXG4gICAgQ1AxMjUyOiAnQ1AxMjUyJyxcbiAgICBDUDIwMDE6ICdDUDIwMDEnLFxuICAgIENQMzAwMTogJ0NQMzAwMScsXG4gICAgQ1AzMDAyOiAnQ1AzMDAyJyxcbiAgICBDUDMwMTE6ICdDUDMwMTEnLFxuICAgIENQMzAxMjogJ0NQMzAxMicsXG4gICAgQ1AzMDIxOiAnQ1AzMDIxJyxcbiAgICBDUDMwNDE6ICdDUDMwNDEnLFxuICAgIENQMzg0MDogJ0NQMzg0MCcsXG4gICAgQ1AzODQxOiAnQ1AzODQxJyxcbiAgICBDUDM4NDM6ICdDUDM4NDMnLFxuICAgIENQMzg0NTogJ0NQMzg0NScsXG4gICAgQ1AzODQ2OiAnQ1AzODQ2JyxcbiAgICBDUDM4NDc6ICdDUDM4NDcnLFxuICAgIENQMzg0ODogJ0NQMzg0OCcsXG4gICAgVVRGODogJ1VURjgnLFxuICAgIEJsYW5rOiAnQmxhbmsnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgSW50ZXJuYXRpb25hbFR5cGVcbiAgICovXG4gIEludGVybmF0aW9uYWxUeXBlID0ge1xuICAgIFVLOiAnVUsnLFxuICAgIFVTQTogJ1VTQScsXG4gICAgRnJhbmNlOiAnRnJhbmNlJyxcbiAgICBHZXJtYW55OiAnR2VybWFueScsXG4gICAgRGVubWFyazogJ0Rlbm1hcmsnLFxuICAgIFN3ZWRlbjogJ1N3ZWRlbicsXG4gICAgSXRhbHk6ICdJdGFseScsXG4gICAgU3BhaW46ICdTcGFpbicsXG4gICAgSmFwYW46ICdKYXBhbicsXG4gICAgTm9yd2F5OiAnTm9yd2F5JyxcbiAgICBEZW5tYXJrMjogJ0Rlbm1hcmsyJyxcbiAgICBTcGFpbjI6ICdTcGFpbjInLFxuICAgIExhdGluQW1lcmljYTogJ0xhdGluQW1lcmljYScsXG4gICAgS29yZWE6ICdLb3JlYScsXG4gICAgSXJlbGFuZDogJ0lyZWxhbmQnLFxuICAgIExlZ2FsOiAnTGVnYWwnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgRm9udFN0eWxlVHlwZVxuICAgKi9cbiAgRm9udFN0eWxlVHlwZSA9IHtcbiAgICAvKiogRm9udC1BICgxMiB4IDI0IGRvdHMpIC8gU3BlY2lmeSA3IHggOSBmb250IChoYWxmIGRvdHMpICovXG4gICAgQTogJ0EnLFxuICAgIC8qKiBGb250LUIgKDkgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNSB4IDkgZm9udCAoMlAtMSkgKi9cbiAgICBCOiAnQicsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBDdXRQYXBlckFjdGlvblxuICAgKi9cbiAgQ3V0UGFwZXJBY3Rpb24gPSB7XG4gICAgRnVsbEN1dDogJ0Z1bGxDdXQnLFxuICAgIEZ1bGxDdXRXaXRoRmVlZDogJ0Z1bGxDdXRXaXRoRmVlZCcsXG4gICAgUGFydGlhbEN1dDogJ1BhcnRpYWxDdXQnLFxuICAgIFBhcnRpYWxDdXRXaXRoRmVlZDogJ1BhcnRpYWxDdXRXaXRoRmVlZCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCbGFja01hcmtUeXBlXG4gICAqL1xuICBCbGFja01hcmtUeXBlID0ge1xuICAgIFZhbGlkOiAnVmFsaWQnLFxuICAgIEludmFsaWQ6ICdJbnZhbGlkJyxcbiAgICBWYWxpZFdpdGhEZXRlY3Rpb246ICdWYWxpZFdpdGhEZXRlY3Rpb24nLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQWxpZ25tZW50UG9zaXRpb25cbiAgICovXG4gIEFsaWdubWVudFBvc2l0aW9uID0ge1xuICAgIExlZnQ6ICdMZWZ0JyxcbiAgICBDZW50ZXI6ICdDZW50ZXInLFxuICAgIFJpZ2h0OiAnUmlnaHQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgTG9nb1NpemVcbiAgICovXG4gIExvZ29TaXplID0ge1xuICAgIE5vcm1hbDogJ05vcm1hbCcsXG4gICAgRG91YmxlV2lkdGg6ICdEb3VibGVXaWR0aCcsXG4gICAgRG91YmxlSGVpZ2h0OiAnRG91YmxlSGVpZ2h0JyxcbiAgICBEb3VibGVXaWR0aERvdWJsZUhlaWdodDogJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVTeW1ib2xvZ3lcbiAgICovXG4gIEJhcmNvZGVTeW1ib2xvZ3kgPSB7XG4gICAgQ29kZTEyODogJ0NvZGUxMjgnLFxuICAgIENvZGUzOTogJ0NvZGUzOScsXG4gICAgQ29kZTkzOiAnQ29kZTkzJyxcbiAgICBJVEY6ICdJVEYnLFxuICAgIEpBTjg6ICdKQU44JyxcbiAgICBKQU4xMzogJ0pBTjEzJyxcbiAgICBOVzc6ICdOVzcnLFxuICAgIFVQQ0E6ICdVUENBJyxcbiAgICBVUENFOiAnVVBDRScsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCYXJjb2RlV2lkdGhcbiAgICovXG4gIEJhcmNvZGVXaWR0aCA9IHtcbiAgICBNb2RlMTogJ01vZGUxJyxcbiAgICBNb2RlMjogJ01vZGUyJyxcbiAgICBNb2RlMzogJ01vZGUzJyxcbiAgICBNb2RlNDogJ01vZGU0JyxcbiAgICBNb2RlNTogJ01vZGU1JyxcbiAgICBNb2RlNjogJ01vZGU2JyxcbiAgICBNb2RlNzogJ01vZGU3JyxcbiAgICBNb2RlODogJ01vZGU4JyxcbiAgICBNb2RlOTogJ01vZGU5JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIFFyQ29kZU1vZGVsXG4gICAqL1xuICBRckNvZGVNb2RlbCA9IHtcbiAgICBObzE6ICdObzEnLFxuICAgIE5vMjogJ05vMicsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVMZXZlbFxuICAgKi9cbiAgUXJDb2RlTGV2ZWwgPSB7XG4gICAgSDogJ0gnLFxuICAgIEw6ICdMJyxcbiAgICBNOiAnTScsXG4gICAgUTogJ1EnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQml0bWFwQ29udmVydGVyUm90YXRpb25cbiAgICovXG4gIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uID0ge1xuICAgIE5vcm1hbDogJ05vcm1hbCcsXG4gICAgTGVmdDkwOiAnTGVmdDkwJyxcbiAgICBSaWdodDkwOiAnUmlnaHQ5MCcsXG4gICAgUm90YXRlMTgwOiAnUm90YXRlMTgwJyxcbiAgfTtcblxuICAvKipcbiAgICogRmluZCBhdmFpbGFibGUgcHJpbnRlcnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgIEludGVyZmFjZSBUeXBlOiBBbGwsIExBTiwgQmx1ZXRvb3RoLCBVU0JcbiAgICogQHJldHVybnMge1Byb21pc2U8UHJpbnRlcnM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgcHJpbnRlcnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcG9ydERpc2NvdmVyeSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFByaW50ZXJTdGF0dXM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFByaW50ZXJTdGF0dXMgb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrU3RhdHVzKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHJpbnRzIHBsYWluIHRleHRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEBwYXJhbSB7UHJpbnRPYmp9IHByaW50T2JqICB0ZXh0OnN0cmluZywgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRSYXdUZXh0KHBvcnQ6IHN0cmluZ3xudWxsLCBlbXVsYXRpb246IHN0cmluZywgcHJpbnRPYmo6IFByaW50T2JqKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHRleHQgaW50byBhIGJpdG1hcCBpbWFnZSBhbmQgc2VuZHMgaXQgdG8gdGhlIHByaW50ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge1Jhc3Rlck9ian0gcmFzdGVyT2JqICB0ZXh0OnN0cmluZywgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW4sIGZvbnRTaXplOm51bWJlciwgcGFwZXJXaWR0aDpudW1iZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRSYXN0ZXJSZWNlaXB0KHBvcnQ6IHN0cmluZ3xudWxsLCBlbXVsYXRpb246IHN0cmluZywgcmFzdGVyT2JqOiBSYXN0ZXJPYmopOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGltYWdlIGZyb20gYSBzdHJpbmcgVVJJIGFuZCBjb252ZXJ0cyBpdCB0byBiaXRtYXAgdG8gc2VuZCBpdCB0byB0aGUgcHJpbnRlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtJbWFnZU9ian0gaW1hZ2VPYmogIHVyaTpzdHJpbmcsIHBhcGVyV2lkdGg/Om51bWJlciwgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRJbWFnZShwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIGltYWdlT2JqOiBJbWFnZU9iaik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbmRzIGFuIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBvcGVuZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3BlbkNhc2hEcmF3ZXIocG9ydDogc3RyaW5nfG51bGwsIGVtdWxhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gQXJyYXkgb2YgY29tbWFuZHMgdG8gdGhlIGNvbW1hbmQgYnVmZmVyIHVzaW5nIHRoZSBBbmRyb2lkIElDb21tYW5kQnVpbGRlckludGVyZmFjZSBvciBpT1MgSVNDQkJ1aWxkZXJJbnRlcmZhY2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge0NvbW1hbmRzQXJyYXl9IGNvbW1hbmRzQXJyYXkgIGVhY2ggY29tbWFuZCBpbiB0aGUgYXJyYXkgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mIHRoZSBQcmludENvbW1hbmQgb2JqZWN0LiBFeGFtcGxlIFt7YXBwZW5kOlwidGV4dFwifSwge1wib3BlbkNhc2hEcmF3ZXI6IDFcIn1dXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50KHBvcnQ6IHN0cmluZ3xudWxsLCBlbXVsYXRpb246IHN0cmluZywgY29tbWFuZHNBcnJheTogQ29tbWFuZHNBcnJheSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gY29ubmVjdCB0byB0aGUgcHJpbnRlciwga2VlcCB0aGUgY29ubmVjdGlvbiBhbGl2ZSBhbmQgcmVjZWl2ZSBzdGF0dXMgdXBkYXRlcyB0aHJvdWdoIGFuIG9ic2VydmFibGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIHByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEBwYXJhbSBoYXNCYXJjb2RlUmVhZGVyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFN1Y2Nlc3MhIGlmIGNvbm5lY3RlZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxuICB9KVxuICBjb25uZWN0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGhhc0JhcmNvZGVSZWFkZXI6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgZGV2aWNlIHN0YXR1cyBldmVudHMuIE9ubHkgZmlyZXMgd2hlbiBhIHByaW50ZXIgaXMgY29ubm5lY3RlZCB0aHJvdWdoIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gZGF0YVR5cGU6IHByaW50ZXJPbmxpbmUsIHByaW50ZXJPZmZsaW5lLCBwcmludGVySW1wb3NzaWJsZSwgcHJpbnRlclBhcGVyRW1wdHksIHByaW50ZXJQYXBlck5lYXJFbXB0eSwgcHJpbnRlclBhcGVyUmVhZHksIHByaW50ZXJDb3Zlck9wZW4sIHByaW50ZXJDb3ZlckNsb3NlLCBjYXNoRHJhd2VyT3BlbiwgY2FzaERyYXdlckNsb3NlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnc3RhclBybnREYXRhJyxcbiAgfSlcbiAgZ2V0U3RhdHVzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBkaXNjb25uZWN0IChjbG9zZSB0aGUgY29ubmVjdGlvbiB0byB0aGUgcGVyaXBoZXJhbHMpLCB0aGlzIGlzIHVzZWZ1bCB0byBhdm9pZCBrZWVwaW5nIGFsaXZlIGEgY29ubmVjdGlvbiB3aGVuIG5vdCBpbiB0aGUgYXBwIHRvIHNhdmUgZGV2aWNlIGJhdHRlcnlcbiAgICogKGVuZXJneSBjb25zdW1wdGlvbikuIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIGFwcCBpcyBwYXVzZWQgb3IgY2xvc2VkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBjb25uZWN0ZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19