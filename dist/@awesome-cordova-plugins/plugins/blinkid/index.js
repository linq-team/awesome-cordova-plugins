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
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@awesome-cordova-plugins/core';
export var BarcodeType;
(function (BarcodeType) {
    BarcodeType[BarcodeType["None"] = 1] = "None";
    BarcodeType[BarcodeType["QRCode"] = 2] = "QRCode";
    BarcodeType[BarcodeType["DataMatrix"] = 3] = "DataMatrix";
    BarcodeType[BarcodeType["UPCE"] = 4] = "UPCE";
    BarcodeType[BarcodeType["UPCA"] = 5] = "UPCA";
    BarcodeType[BarcodeType["EAN8"] = 6] = "EAN8";
    BarcodeType[BarcodeType["EAN13"] = 7] = "EAN13";
    BarcodeType[BarcodeType["Code128"] = 8] = "Code128";
    BarcodeType[BarcodeType["Code39"] = 9] = "Code39";
    BarcodeType[BarcodeType["ITF"] = 10] = "ITF";
    BarcodeType[BarcodeType["Aztec"] = 11] = "Aztec";
    BarcodeType[BarcodeType["PDF417"] = 12] = "PDF417";
})(BarcodeType || (BarcodeType = {}));
export var RecognizerResultState;
(function (RecognizerResultState) {
    RecognizerResultState[RecognizerResultState["empty"] = 1] = "empty";
    RecognizerResultState[RecognizerResultState["uncertain"] = 2] = "uncertain";
    RecognizerResultState[RecognizerResultState["valid"] = 3] = "valid";
})(RecognizerResultState || (RecognizerResultState = {}));
export var MrtdDocumentType;
(function (MrtdDocumentType) {
    MrtdDocumentType[MrtdDocumentType["Unknown"] = 1] = "Unknown";
    MrtdDocumentType[MrtdDocumentType["IdentityCard"] = 2] = "IdentityCard";
    MrtdDocumentType[MrtdDocumentType["Passport"] = 3] = "Passport";
    MrtdDocumentType[MrtdDocumentType["Visa"] = 4] = "Visa";
    MrtdDocumentType[MrtdDocumentType["GreenCard"] = 5] = "GreenCard";
    MrtdDocumentType[MrtdDocumentType["MalaysianPassIMM13P"] = 6] = "MalaysianPassIMM13P";
})(MrtdDocumentType || (MrtdDocumentType = {}));
export var EudlCountry;
(function (EudlCountry) {
    EudlCountry[EudlCountry["UK"] = 1] = "UK";
    EudlCountry[EudlCountry["Germany"] = 2] = "Germany";
    EudlCountry[EudlCountry["Austria"] = 3] = "Austria";
    EudlCountry[EudlCountry["Automatic"] = 4] = "Automatic";
})(EudlCountry || (EudlCountry = {}));
export var DocumentFaceDetectorType;
(function (DocumentFaceDetectorType) {
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD1"] = 1] = "TD1";
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD2"] = 2] = "TD2";
    DocumentFaceDetectorType[DocumentFaceDetectorType["PassportsAndVisas"] = 3] = "PassportsAndVisas";
})(DocumentFaceDetectorType || (DocumentFaceDetectorType = {}));
export var UsdlKeys;
(function (UsdlKeys) {
    UsdlKeys[UsdlKeys["DocumentType"] = 0] = "DocumentType";
    UsdlKeys[UsdlKeys["StandardVersionNumber"] = 1] = "StandardVersionNumber";
    UsdlKeys[UsdlKeys["CustomerFamilyName"] = 2] = "CustomerFamilyName";
    UsdlKeys[UsdlKeys["CustomerFirstName"] = 3] = "CustomerFirstName";
    UsdlKeys[UsdlKeys["CustomerFullName"] = 4] = "CustomerFullName";
    UsdlKeys[UsdlKeys["DateOfBirth"] = 5] = "DateOfBirth";
    UsdlKeys[UsdlKeys["Sex"] = 6] = "Sex";
    UsdlKeys[UsdlKeys["EyeColor"] = 7] = "EyeColor";
    UsdlKeys[UsdlKeys["AddressStreet"] = 8] = "AddressStreet";
    UsdlKeys[UsdlKeys["AddressCity"] = 9] = "AddressCity";
    UsdlKeys[UsdlKeys["AddressJurisdictionCode"] = 10] = "AddressJurisdictionCode";
    UsdlKeys[UsdlKeys["AddressPostalCode"] = 11] = "AddressPostalCode";
    UsdlKeys[UsdlKeys["FullAddress"] = 12] = "FullAddress";
    UsdlKeys[UsdlKeys["Height"] = 13] = "Height";
    UsdlKeys[UsdlKeys["HeightIn"] = 14] = "HeightIn";
    UsdlKeys[UsdlKeys["HeightCm"] = 15] = "HeightCm";
    UsdlKeys[UsdlKeys["CustomerMiddleName"] = 16] = "CustomerMiddleName";
    UsdlKeys[UsdlKeys["HairColor"] = 17] = "HairColor";
    UsdlKeys[UsdlKeys["NameSuffix"] = 18] = "NameSuffix";
    UsdlKeys[UsdlKeys["AKAFullName"] = 19] = "AKAFullName";
    UsdlKeys[UsdlKeys["AKAFamilyName"] = 20] = "AKAFamilyName";
    UsdlKeys[UsdlKeys["AKAGivenName"] = 21] = "AKAGivenName";
    UsdlKeys[UsdlKeys["AKASuffixName"] = 22] = "AKASuffixName";
    UsdlKeys[UsdlKeys["WeightRange"] = 23] = "WeightRange";
    UsdlKeys[UsdlKeys["WeightPounds"] = 24] = "WeightPounds";
    UsdlKeys[UsdlKeys["WeightKilograms"] = 25] = "WeightKilograms";
    UsdlKeys[UsdlKeys["CustomerIdNumber"] = 26] = "CustomerIdNumber";
    UsdlKeys[UsdlKeys["FamilyNameTruncation"] = 27] = "FamilyNameTruncation";
    UsdlKeys[UsdlKeys["FirstNameTruncation"] = 28] = "FirstNameTruncation";
    UsdlKeys[UsdlKeys["MiddleNameTruncation"] = 29] = "MiddleNameTruncation";
    UsdlKeys[UsdlKeys["PlaceOfBirth"] = 30] = "PlaceOfBirth";
    UsdlKeys[UsdlKeys["AddressStreet2"] = 31] = "AddressStreet2";
    UsdlKeys[UsdlKeys["RaceEthnicity"] = 32] = "RaceEthnicity";
    UsdlKeys[UsdlKeys["NamePrefix"] = 33] = "NamePrefix";
    UsdlKeys[UsdlKeys["CountryIdentification"] = 34] = "CountryIdentification";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress"] = 35] = "ResidenceStreetAddress";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress2"] = 36] = "ResidenceStreetAddress2";
    UsdlKeys[UsdlKeys["ResidenceCity"] = 37] = "ResidenceCity";
    UsdlKeys[UsdlKeys["ResidenceJurisdictionCode"] = 38] = "ResidenceJurisdictionCode";
    UsdlKeys[UsdlKeys["ResidencePostalCode"] = 39] = "ResidencePostalCode";
    UsdlKeys[UsdlKeys["ResidenceFullAddress"] = 40] = "ResidenceFullAddress";
    UsdlKeys[UsdlKeys["Under18"] = 41] = "Under18";
    UsdlKeys[UsdlKeys["Under19"] = 42] = "Under19";
    UsdlKeys[UsdlKeys["Under21"] = 43] = "Under21";
    UsdlKeys[UsdlKeys["SocialSecurityNumber"] = 44] = "SocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKASocialSecurityNumber"] = 45] = "AKASocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKAMiddleName"] = 46] = "AKAMiddleName";
    UsdlKeys[UsdlKeys["AKAPrefixName"] = 47] = "AKAPrefixName";
    UsdlKeys[UsdlKeys["OrganDonor"] = 48] = "OrganDonor";
    UsdlKeys[UsdlKeys["Veteran"] = 49] = "Veteran";
    UsdlKeys[UsdlKeys["AKADateOfBirth"] = 50] = "AKADateOfBirth";
    UsdlKeys[UsdlKeys["IssuerIdentificationNumber"] = 51] = "IssuerIdentificationNumber";
    UsdlKeys[UsdlKeys["DocumentExpirationDate"] = 52] = "DocumentExpirationDate";
    UsdlKeys[UsdlKeys["JurisdictionVersionNumber"] = 53] = "JurisdictionVersionNumber";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClass"] = 54] = "JurisdictionVehicleClass";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodes"] = 55] = "JurisdictionRestrictionCodes";
    UsdlKeys[UsdlKeys["JurisdictionEndorsementCodes"] = 56] = "JurisdictionEndorsementCodes";
    UsdlKeys[UsdlKeys["DocumentIssueDate"] = 57] = "DocumentIssueDate";
    UsdlKeys[UsdlKeys["FederalCommercialVehicleCodes"] = 58] = "FederalCommercialVehicleCodes";
    UsdlKeys[UsdlKeys["IssuingJurisdiction"] = 59] = "IssuingJurisdiction";
    UsdlKeys[UsdlKeys["StandardVehicleClassification"] = 60] = "StandardVehicleClassification";
    UsdlKeys[UsdlKeys["IssuingJurisdictionName"] = 61] = "IssuingJurisdictionName";
    UsdlKeys[UsdlKeys["StandardEndorsementCode"] = 62] = "StandardEndorsementCode";
    UsdlKeys[UsdlKeys["StandardRestrictionCode"] = 63] = "StandardRestrictionCode";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClassificationDescription"] = 64] = "JurisdictionVehicleClassificationDescription";
    UsdlKeys[UsdlKeys["JurisdictionEndorsmentCodeDescription"] = 65] = "JurisdictionEndorsmentCodeDescription";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodeDescription"] = 66] = "JurisdictionRestrictionCodeDescription";
    UsdlKeys[UsdlKeys["InventoryControlNumber"] = 67] = "InventoryControlNumber";
    UsdlKeys[UsdlKeys["CardRevisionDate"] = 68] = "CardRevisionDate";
    UsdlKeys[UsdlKeys["DocumentDiscriminator"] = 69] = "DocumentDiscriminator";
    UsdlKeys[UsdlKeys["LimitedDurationDocument"] = 70] = "LimitedDurationDocument";
    UsdlKeys[UsdlKeys["AuditInformation"] = 71] = "AuditInformation";
    UsdlKeys[UsdlKeys["ComplianceType"] = 72] = "ComplianceType";
    UsdlKeys[UsdlKeys["IssueTimestamp"] = 73] = "IssueTimestamp";
    UsdlKeys[UsdlKeys["PermitExpirationDate"] = 74] = "PermitExpirationDate";
    UsdlKeys[UsdlKeys["PermitIdentifier"] = 75] = "PermitIdentifier";
    UsdlKeys[UsdlKeys["PermitIssueDate"] = 76] = "PermitIssueDate";
    UsdlKeys[UsdlKeys["NumberOfDuplicates"] = 77] = "NumberOfDuplicates";
    UsdlKeys[UsdlKeys["HAZMATExpirationDate"] = 78] = "HAZMATExpirationDate";
    UsdlKeys[UsdlKeys["MedicalIndicator"] = 79] = "MedicalIndicator";
    UsdlKeys[UsdlKeys["NonResident"] = 80] = "NonResident";
    UsdlKeys[UsdlKeys["UniqueCustomerId"] = 81] = "UniqueCustomerId";
    UsdlKeys[UsdlKeys["DataDiscriminator"] = 82] = "DataDiscriminator";
    UsdlKeys[UsdlKeys["DocumentExpirationMonth"] = 83] = "DocumentExpirationMonth";
    UsdlKeys[UsdlKeys["DocumentNonexpiring"] = 84] = "DocumentNonexpiring";
    UsdlKeys[UsdlKeys["SecurityVersion"] = 85] = "SecurityVersion";
})(UsdlKeys || (UsdlKeys = {}));
var BlinkIdOriginal = /** @class */ (function (_super) {
    __extends(BlinkIdOriginal, _super);
    function BlinkIdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkIdOriginal.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkIdOriginal.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkIdOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    BlinkIdOriginal.pluginName = "BlinkId";
    BlinkIdOriginal.plugin = "blinkid-cordova";
    BlinkIdOriginal.pluginRef = "cordova.plugins.BlinkID";
    BlinkIdOriginal.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkIdOriginal.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkIdOriginal.platforms = ["iOS", "Android"];
    return BlinkIdOriginal;
}(AwesomeCordovaNativePlugin));
var BlinkId = new BlinkIdOriginal();
export { BlinkId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmxpbmtpZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBUTdHLE1BQU0sQ0FBTixJQUFZLFdBYVg7QUFiRCxXQUFZLFdBQVc7SUFDckIsNkNBQVEsQ0FBQTtJQUNSLGlEQUFVLENBQUE7SUFDVix5REFBYyxDQUFBO0lBQ2QsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiw2Q0FBUSxDQUFBO0lBQ1IsK0NBQVMsQ0FBQTtJQUNULG1EQUFXLENBQUE7SUFDWCxpREFBVSxDQUFBO0lBQ1YsNENBQVEsQ0FBQTtJQUNSLGdEQUFVLENBQUE7SUFDVixrREFBVyxDQUFBO0FBQ2IsQ0FBQyxFQWJXLFdBQVcsS0FBWCxXQUFXLFFBYXRCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBSVg7QUFKRCxXQUFZLHFCQUFxQjtJQUMvQixtRUFBUyxDQUFBO0lBQ1QsMkVBQWEsQ0FBQTtJQUNiLG1FQUFTLENBQUE7QUFDWCxDQUFDLEVBSlcscUJBQXFCLEtBQXJCLHFCQUFxQixRQUloQztBQUVELE1BQU0sQ0FBTixJQUFZLGdCQU9YO0FBUEQsV0FBWSxnQkFBZ0I7SUFDMUIsNkRBQVcsQ0FBQTtJQUNYLHVFQUFnQixDQUFBO0lBQ2hCLCtEQUFZLENBQUE7SUFDWix1REFBUSxDQUFBO0lBQ1IsaUVBQWEsQ0FBQTtJQUNiLHFGQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFQVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTzNCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQix5Q0FBTSxDQUFBO0lBQ04sbURBQVcsQ0FBQTtJQUNYLG1EQUFXLENBQUE7SUFDWCx1REFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCO0FBRUQsTUFBTSxDQUFOLElBQVksd0JBSVg7QUFKRCxXQUFZLHdCQUF3QjtJQUNsQyxxRUFBTyxDQUFBO0lBQ1AscUVBQU8sQ0FBQTtJQUNQLGlHQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFKVyx3QkFBd0IsS0FBeEIsd0JBQXdCLFFBSW5DO0FBRUQsTUFBTSxDQUFOLElBQVksUUF1Rlg7QUF2RkQsV0FBWSxRQUFRO0lBQ2xCLHVEQUFnQixDQUFBO0lBQ2hCLHlFQUF5QixDQUFBO0lBQ3pCLG1FQUFzQixDQUFBO0lBQ3RCLGlFQUFxQixDQUFBO0lBQ3JCLCtEQUFvQixDQUFBO0lBQ3BCLHFEQUFlLENBQUE7SUFDZixxQ0FBTyxDQUFBO0lBQ1AsK0NBQVksQ0FBQTtJQUNaLHlEQUFpQixDQUFBO0lBQ2pCLHFEQUFlLENBQUE7SUFDZiw4RUFBNEIsQ0FBQTtJQUM1QixrRUFBc0IsQ0FBQTtJQUN0QixzREFBZ0IsQ0FBQTtJQUNoQiw0Q0FBVyxDQUFBO0lBQ1gsZ0RBQWEsQ0FBQTtJQUNiLGdEQUFhLENBQUE7SUFDYixvRUFBdUIsQ0FBQTtJQUN2QixrREFBYyxDQUFBO0lBQ2Qsb0RBQWUsQ0FBQTtJQUNmLHNEQUFnQixDQUFBO0lBQ2hCLDBEQUFrQixDQUFBO0lBQ2xCLHdEQUFpQixDQUFBO0lBQ2pCLDBEQUFrQixDQUFBO0lBQ2xCLHNEQUFnQixDQUFBO0lBQ2hCLHdEQUFpQixDQUFBO0lBQ2pCLDhEQUFvQixDQUFBO0lBQ3BCLGdFQUFxQixDQUFBO0lBQ3JCLHdFQUF5QixDQUFBO0lBQ3pCLHNFQUF3QixDQUFBO0lBQ3hCLHdFQUF5QixDQUFBO0lBQ3pCLHdEQUFpQixDQUFBO0lBQ2pCLDREQUFtQixDQUFBO0lBQ25CLDBEQUFrQixDQUFBO0lBQ2xCLG9EQUFlLENBQUE7SUFDZiwwRUFBMEIsQ0FBQTtJQUMxQiw0RUFBMkIsQ0FBQTtJQUMzQiw4RUFBNEIsQ0FBQTtJQUM1QiwwREFBa0IsQ0FBQTtJQUNsQixrRkFBOEIsQ0FBQTtJQUM5QixzRUFBd0IsQ0FBQTtJQUN4Qix3RUFBeUIsQ0FBQTtJQUN6Qiw4Q0FBWSxDQUFBO0lBQ1osOENBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWix3RUFBeUIsQ0FBQTtJQUN6Qiw4RUFBNEIsQ0FBQTtJQUM1QiwwREFBa0IsQ0FBQTtJQUNsQiwwREFBa0IsQ0FBQTtJQUNsQixvREFBZSxDQUFBO0lBQ2YsOENBQVksQ0FBQTtJQUNaLDREQUFtQixDQUFBO0lBQ25CLG9GQUErQixDQUFBO0lBQy9CLDRFQUEyQixDQUFBO0lBQzNCLGtGQUE4QixDQUFBO0lBQzlCLGdGQUE2QixDQUFBO0lBQzdCLHdGQUFpQyxDQUFBO0lBQ2pDLHdGQUFpQyxDQUFBO0lBQ2pDLGtFQUFzQixDQUFBO0lBQ3RCLDBGQUFrQyxDQUFBO0lBQ2xDLHNFQUF3QixDQUFBO0lBQ3hCLDBGQUFrQyxDQUFBO0lBQ2xDLDhFQUE0QixDQUFBO0lBQzVCLDhFQUE0QixDQUFBO0lBQzVCLDhFQUE0QixDQUFBO0lBQzVCLHdIQUFpRCxDQUFBO0lBQ2pELDBHQUEwQyxDQUFBO0lBQzFDLDRHQUEyQyxDQUFBO0lBQzNDLDRFQUEyQixDQUFBO0lBQzNCLGdFQUFxQixDQUFBO0lBQ3JCLDBFQUEwQixDQUFBO0lBQzFCLDhFQUE0QixDQUFBO0lBQzVCLGdFQUFxQixDQUFBO0lBQ3JCLDREQUFtQixDQUFBO0lBQ25CLDREQUFtQixDQUFBO0lBQ25CLHdFQUF5QixDQUFBO0lBQ3pCLGdFQUFxQixDQUFBO0lBQ3JCLDhEQUFvQixDQUFBO0lBQ3BCLG9FQUF1QixDQUFBO0lBQ3ZCLHdFQUF5QixDQUFBO0lBQ3pCLGdFQUFxQixDQUFBO0lBQ3JCLHNEQUFnQixDQUFBO0lBQ2hCLGdFQUFxQixDQUFBO0lBQ3JCLGtFQUFzQixDQUFBO0lBQ3RCLDhFQUE0QixDQUFBO0lBQzVCLHNFQUF3QixDQUFBO0lBQ3hCLDhEQUFvQixDQUFBO0FBQ3RCLENBQUMsRUF2RlcsUUFBUSxLQUFSLFFBQVEsUUF1Rm5COztJQTJqRjRCLDJCQUEwQjs7OztJQVlyRCxnQ0FBYyxhQUNaLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxRQUFrQjswQkFLRCx5QkFBSTs7Ozs7OzBCQUNKLDBCQUFLOzs7Ozs7MEJBQ0wsa0NBQWE7Ozs7OzswQkFFYiwyQ0FBc0I7Ozs7OzswQkFDdEIsNENBQXVCOzs7Ozs7MEJBQ3ZCLHdEQUFtQzs7Ozs7OzBCQUNuQyw2Q0FBd0I7Ozs7OzswQkFFeEIseUNBQW9COzs7Ozs7MEJBRXBCLDRDQUF1Qjs7Ozs7OzBCQUN2QixzQ0FBaUI7Ozs7OzswQkFDakIsd0RBQW1DOzs7Ozs7MEJBQ25DLGtEQUE2Qjs7Ozs7OzBCQUU3QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLDZDQUF3Qjs7Ozs7OzBCQUN4QixtREFBOEI7Ozs7OzswQkFDOUIsOENBQXlCOzs7Ozs7MEJBQ3pCLHdDQUFtQjs7Ozs7OzBCQUNuQixvREFBK0I7Ozs7OzswQkFDL0IsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG9EQUErQjs7Ozs7OzBCQUMvQixrREFBNkI7Ozs7OzswQkFDN0IsbURBQThCOzs7Ozs7MEJBQzlCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixvREFBK0I7Ozs7OzswQkFDL0Isa0RBQTZCOzs7Ozs7MEJBQzdCLGlEQUE0Qjs7Ozs7OzBCQUM1QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLHlDQUFvQjs7Ozs7OzBCQUNwQixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLHlDQUFvQjs7Ozs7OzBCQUNwQixtQ0FBYzs7Ozs7OzBCQUNkLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLHNEQUFpQzs7Ozs7OzBCQUNqQyxnREFBMkI7Ozs7OzswQkFDM0IsdURBQWtDOzs7Ozs7MEJBQ2xDLGlEQUE0Qjs7Ozs7OzBCQUM1QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0Qix5Q0FBb0I7Ozs7OzswQkFDcEIsbUNBQWM7Ozs7OzswQkFDZCw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLCtDQUEwQjs7Ozs7OzBCQUMxQix5Q0FBb0I7Ozs7OzswQkFDcEIsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQiwyQ0FBc0I7Ozs7OzswQkFDdEIscUNBQWdCOzs7Ozs7MEJBQ2hCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsOENBQXlCOzs7Ozs7MEJBQ3pCLHdDQUFtQjs7Ozs7OzBCQUNuQiw4REFBeUM7Ozs7OzswQkFDekMsd0RBQW1DOzs7Ozs7MEJBQ25DLHNEQUFpQzs7Ozs7OzBCQUNqQyxnREFBMkI7Ozs7OzswQkFDM0IscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLHVEQUFrQzs7Ozs7OzBCQUNsQyxpREFBNEI7Ozs7OzswQkFDNUIsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQix1REFBa0M7Ozs7OzswQkFDbEMsaURBQTRCOzs7Ozs7MEJBQzVCLHdEQUFtQzs7Ozs7OzBCQUNuQyxrREFBNkI7Ozs7OzswQkFDN0IsOERBQXlDOzs7Ozs7MEJBQ3pDLHdEQUFtQzs7Ozs7OzBCQUNuQyw2REFBd0M7Ozs7OzswQkFDeEMsdURBQWtDOzs7Ozs7MEJBQ2xDLDhEQUF5Qzs7Ozs7OzBCQUN6Qyx3REFBbUM7Ozs7OzswQkFDbkMsd0NBQW1COzs7Ozs7MEJBQ25CLGtDQUFhOzs7Ozs7MEJBQ2IseUNBQW9COzs7Ozs7MEJBQ3BCLG1DQUFjOzs7Ozs7MEJBQ2QsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixzQ0FBaUI7Ozs7OzswQkFDakIsMkNBQXNCOzs7Ozs7MEJBQ3RCLDRDQUF1Qjs7Ozs7Ozs7Ozs7O2tCQW40RjVDO0VBcXNGNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGljZW5zZXMge1xuICBpb3M6IHN0cmluZztcbiAgYW5kcm9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBCYXJjb2RlVHlwZSB7XG4gIE5vbmUgPSAxLFxuICBRUkNvZGUgPSAyLFxuICBEYXRhTWF0cml4ID0gMyxcbiAgVVBDRSA9IDQsXG4gIFVQQ0EgPSA1LFxuICBFQU44ID0gNixcbiAgRUFOMTMgPSA3LFxuICBDb2RlMTI4ID0gOCxcbiAgQ29kZTM5ID0gOSxcbiAgSVRGID0gMTAsXG4gIEF6dGVjID0gMTEsXG4gIFBERjQxNyA9IDEyLFxufVxuXG5leHBvcnQgZW51bSBSZWNvZ25pemVyUmVzdWx0U3RhdGUge1xuICBlbXB0eSA9IDEsXG4gIHVuY2VydGFpbiA9IDIsXG4gIHZhbGlkID0gMyxcbn1cblxuZXhwb3J0IGVudW0gTXJ0ZERvY3VtZW50VHlwZSB7XG4gIFVua25vd24gPSAxLFxuICBJZGVudGl0eUNhcmQgPSAyLFxuICBQYXNzcG9ydCA9IDMsXG4gIFZpc2EgPSA0LFxuICBHcmVlbkNhcmQgPSA1LFxuICBNYWxheXNpYW5QYXNzSU1NMTNQID0gNixcbn1cblxuZXhwb3J0IGVudW0gRXVkbENvdW50cnkge1xuICBVSyA9IDEsXG4gIEdlcm1hbnkgPSAyLFxuICBBdXN0cmlhID0gMyxcbiAgQXV0b21hdGljID0gNCxcbn1cblxuZXhwb3J0IGVudW0gRG9jdW1lbnRGYWNlRGV0ZWN0b3JUeXBlIHtcbiAgVEQxID0gMSxcbiAgVEQyID0gMixcbiAgUGFzc3BvcnRzQW5kVmlzYXMgPSAzLFxufVxuXG5leHBvcnQgZW51bSBVc2RsS2V5cyB7XG4gIERvY3VtZW50VHlwZSA9IDAsXG4gIFN0YW5kYXJkVmVyc2lvbk51bWJlciA9IDEsXG4gIEN1c3RvbWVyRmFtaWx5TmFtZSA9IDIsXG4gIEN1c3RvbWVyRmlyc3ROYW1lID0gMyxcbiAgQ3VzdG9tZXJGdWxsTmFtZSA9IDQsXG4gIERhdGVPZkJpcnRoID0gNSxcbiAgU2V4ID0gNixcbiAgRXllQ29sb3IgPSA3LFxuICBBZGRyZXNzU3RyZWV0ID0gOCxcbiAgQWRkcmVzc0NpdHkgPSA5LFxuICBBZGRyZXNzSnVyaXNkaWN0aW9uQ29kZSA9IDEwLFxuICBBZGRyZXNzUG9zdGFsQ29kZSA9IDExLFxuICBGdWxsQWRkcmVzcyA9IDEyLFxuICBIZWlnaHQgPSAxMyxcbiAgSGVpZ2h0SW4gPSAxNCxcbiAgSGVpZ2h0Q20gPSAxNSxcbiAgQ3VzdG9tZXJNaWRkbGVOYW1lID0gMTYsXG4gIEhhaXJDb2xvciA9IDE3LFxuICBOYW1lU3VmZml4ID0gMTgsXG4gIEFLQUZ1bGxOYW1lID0gMTksXG4gIEFLQUZhbWlseU5hbWUgPSAyMCxcbiAgQUtBR2l2ZW5OYW1lID0gMjEsXG4gIEFLQVN1ZmZpeE5hbWUgPSAyMixcbiAgV2VpZ2h0UmFuZ2UgPSAyMyxcbiAgV2VpZ2h0UG91bmRzID0gMjQsXG4gIFdlaWdodEtpbG9ncmFtcyA9IDI1LFxuICBDdXN0b21lcklkTnVtYmVyID0gMjYsXG4gIEZhbWlseU5hbWVUcnVuY2F0aW9uID0gMjcsXG4gIEZpcnN0TmFtZVRydW5jYXRpb24gPSAyOCxcbiAgTWlkZGxlTmFtZVRydW5jYXRpb24gPSAyOSxcbiAgUGxhY2VPZkJpcnRoID0gMzAsXG4gIEFkZHJlc3NTdHJlZXQyID0gMzEsXG4gIFJhY2VFdGhuaWNpdHkgPSAzMixcbiAgTmFtZVByZWZpeCA9IDMzLFxuICBDb3VudHJ5SWRlbnRpZmljYXRpb24gPSAzNCxcbiAgUmVzaWRlbmNlU3RyZWV0QWRkcmVzcyA9IDM1LFxuICBSZXNpZGVuY2VTdHJlZXRBZGRyZXNzMiA9IDM2LFxuICBSZXNpZGVuY2VDaXR5ID0gMzcsXG4gIFJlc2lkZW5jZUp1cmlzZGljdGlvbkNvZGUgPSAzOCxcbiAgUmVzaWRlbmNlUG9zdGFsQ29kZSA9IDM5LFxuICBSZXNpZGVuY2VGdWxsQWRkcmVzcyA9IDQwLFxuICBVbmRlcjE4ID0gNDEsXG4gIFVuZGVyMTkgPSA0MixcbiAgVW5kZXIyMSA9IDQzLFxuICBTb2NpYWxTZWN1cml0eU51bWJlciA9IDQ0LFxuICBBS0FTb2NpYWxTZWN1cml0eU51bWJlciA9IDQ1LFxuICBBS0FNaWRkbGVOYW1lID0gNDYsXG4gIEFLQVByZWZpeE5hbWUgPSA0NyxcbiAgT3JnYW5Eb25vciA9IDQ4LFxuICBWZXRlcmFuID0gNDksXG4gIEFLQURhdGVPZkJpcnRoID0gNTAsXG4gIElzc3VlcklkZW50aWZpY2F0aW9uTnVtYmVyID0gNTEsXG4gIERvY3VtZW50RXhwaXJhdGlvbkRhdGUgPSA1MixcbiAgSnVyaXNkaWN0aW9uVmVyc2lvbk51bWJlciA9IDUzLFxuICBKdXJpc2RpY3Rpb25WZWhpY2xlQ2xhc3MgPSA1NCxcbiAgSnVyaXNkaWN0aW9uUmVzdHJpY3Rpb25Db2RlcyA9IDU1LFxuICBKdXJpc2RpY3Rpb25FbmRvcnNlbWVudENvZGVzID0gNTYsXG4gIERvY3VtZW50SXNzdWVEYXRlID0gNTcsXG4gIEZlZGVyYWxDb21tZXJjaWFsVmVoaWNsZUNvZGVzID0gNTgsXG4gIElzc3VpbmdKdXJpc2RpY3Rpb24gPSA1OSxcbiAgU3RhbmRhcmRWZWhpY2xlQ2xhc3NpZmljYXRpb24gPSA2MCxcbiAgSXNzdWluZ0p1cmlzZGljdGlvbk5hbWUgPSA2MSxcbiAgU3RhbmRhcmRFbmRvcnNlbWVudENvZGUgPSA2MixcbiAgU3RhbmRhcmRSZXN0cmljdGlvbkNvZGUgPSA2MyxcbiAgSnVyaXNkaWN0aW9uVmVoaWNsZUNsYXNzaWZpY2F0aW9uRGVzY3JpcHRpb24gPSA2NCxcbiAgSnVyaXNkaWN0aW9uRW5kb3JzbWVudENvZGVEZXNjcmlwdGlvbiA9IDY1LFxuICBKdXJpc2RpY3Rpb25SZXN0cmljdGlvbkNvZGVEZXNjcmlwdGlvbiA9IDY2LFxuICBJbnZlbnRvcnlDb250cm9sTnVtYmVyID0gNjcsXG4gIENhcmRSZXZpc2lvbkRhdGUgPSA2OCxcbiAgRG9jdW1lbnREaXNjcmltaW5hdG9yID0gNjksXG4gIExpbWl0ZWREdXJhdGlvbkRvY3VtZW50ID0gNzAsXG4gIEF1ZGl0SW5mb3JtYXRpb24gPSA3MSxcbiAgQ29tcGxpYW5jZVR5cGUgPSA3MixcbiAgSXNzdWVUaW1lc3RhbXAgPSA3MyxcbiAgUGVybWl0RXhwaXJhdGlvbkRhdGUgPSA3NCxcbiAgUGVybWl0SWRlbnRpZmllciA9IDc1LFxuICBQZXJtaXRJc3N1ZURhdGUgPSA3NixcbiAgTnVtYmVyT2ZEdXBsaWNhdGVzID0gNzcsXG4gIEhBWk1BVEV4cGlyYXRpb25EYXRlID0gNzgsXG4gIE1lZGljYWxJbmRpY2F0b3IgPSA3OSxcbiAgTm9uUmVzaWRlbnQgPSA4MCxcbiAgVW5pcXVlQ3VzdG9tZXJJZCA9IDgxLFxuICBEYXRhRGlzY3JpbWluYXRvciA9IDgyLFxuICBEb2N1bWVudEV4cGlyYXRpb25Nb250aCA9IDgzLFxuICBEb2N1bWVudE5vbmV4cGlyaW5nID0gODQsXG4gIFNlY3VyaXR5VmVyc2lvbiA9IDg1LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlRXh0ZW5zaW9uRmFjdG9ycyB7XG4gIHVwRmFjdG9yOiBudW1iZXI7XG4gIHJpZ2h0RmFjdG9yOiBudW1iZXI7XG4gIGRvd25GYWN0b3I6IG51bWJlcjtcbiAgbGVmdEZhY3RvcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGUge1xuICBkYXk6IHN0cmluZztcbiAgbW9udGg6IHN0cmluZztcbiAgeWVhcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ3RvciB7XG4gIG5ldyAobmF0aXZlRGF0ZTogRGF0ZSk6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICB4OiBzdHJpbmc7XG4gIHk6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRDdG9yIHtcbiAgbmV3IChuYXRpdmVQb2ludDogUG9pbnQpOiBQb2ludDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWFkcmlsYXRlcmFsIHtcbiAgdXBwZXJMZWZ0OiBzdHJpbmc7XG4gIHVwcGVyUmlnaHQ6IHN0cmluZztcbiAgbG93ZXJMZWZ0OiBzdHJpbmc7XG4gIGxvd2VyUmlnaHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZHJpbGF0ZXJhbEN0b3Ige1xuICBuZXcgKG5hdGl2ZVF1YWQ6IFF1YWRyaWxhdGVyYWwpOiBRdWFkcmlsYXRlcmFsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlTZXR0aW5ncyB7XG4gIG92ZXJsYXlTZXR0aW5nc1R5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQmFyY29kZU92ZXJsYXlTZXR0aW5ncyA9IE92ZXJsYXlTZXR0aW5ncztcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZU92ZXJsYXlTZXR0aW5nc0N0b3Ige1xuICBuZXcgKCk6IEJhcmNvZGVPdmVybGF5U2V0dGluZ3M7XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50T3ZlcmxheVNldHRpbmdzID0gT3ZlcmxheVNldHRpbmdzO1xuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xuICBuZXcgKCk6IERvY3VtZW50T3ZlcmxheVNldHRpbmdzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzIGV4dGVuZHMgT3ZlcmxheVNldHRpbmdzIHtcbiAgZmlyc3RTaWRlU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xuICBzZWNvbmRTaWRlU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xuICBzY2FubmluZ0RvbmVTcGxhc2hNZXNzYWdlOiBzdHJpbmc7XG4gIGZpcnN0U2lkZUluc3RydWN0aW9uczogc3RyaW5nO1xuICBzZWNvbmRTaWRlSW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XG4gIGdsYXJlTWVzc2FnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nc0N0b3Ige1xuICBuZXcgKCk6IERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7XG4gIGdsYXJlTWVzc2FnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3NDdG9yIHtcbiAgbmV3ICgpOiBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclJlc3VsdCB7XG4gIHJlc3VsdFN0YXRlOiBSZWNvZ25pemVyUmVzdWx0U3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclJlc3VsdEN0b3I8VCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgbmV3IChuYXRpdmVSZXN1bHQ6IGFueSk6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplcjxUIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCA9IGFueT4ge1xuICByZWNvZ25pemVyVHlwZTogc3RyaW5nO1xuICByZXN1bHQ6IFQ7XG4gIGNyZWF0ZVJlc3VsdEZyb21OYXRpdmUobmF0aXZlUmVzdWx0OiBhbnkpOiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJDdG9yPFQgZXh0ZW5kcyBSZWNvZ25pemVyPiB7XG4gIG5ldyAoKTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ29sbGVjdGlvbiB7XG4gIHJlY29nbml6ZXJBcnJheTogUmVjb2duaXplcltdO1xuICBhbGxvd011bHRpcGxlUmVzdWx0czogYm9vbGVhbjtcbiAgLy8gc2ljXG4gIG1pbGlzZWNvbmRzQmVmb3JlVGltZW91dDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ29sbGVjdGlvbkN0b3Ige1xuICBuZXcgKHJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyW10pOiBSZWNvZ25pemVyQ29sbGVjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiYXJjb2RlVHlwZTogQmFyY29kZVR5cGU7XG4gIHJhd0RhdGE6IHN0cmluZztcbiAgc3RyaW5nRGF0YTogc3RyaW5nO1xuICB1bmNlcnRhaW46IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCYXJjb2RlUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGF1dG9TY2FsZURldGVjdGlvbjogYm9vbGVhbjtcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XG4gIHJlYWRDb2RlMzlBc0V4dGVuZGVkRGF0YTogYm9vbGVhbjtcbiAgc2NhbkF6dGVjQ29kZTogYm9vbGVhbjtcbiAgc2NhbkNvZGUxMjg6IGJvb2xlYW47XG4gIHNjYW5Db2RlMzk6IGJvb2xlYW47XG4gIHNjYW5EYXRhTWF0cml4OiBib29sZWFuO1xuICBzY2FuRWFuMTM6IGJvb2xlYW47XG4gIHNjYW5FYW44OiBib29sZWFuO1xuICBzY2FuSW52ZXJzZTogYm9vbGVhbjtcbiAgc2Nhbkl0ZjogYm9vbGVhbjtcbiAgc2NhblBkZjQxNzogYm9vbGVhbjtcbiAgc2NhblFyQ29kZTogYm9vbGVhbjtcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcbiAgc2NhblVwY2E6IGJvb2xlYW47XG4gIHNjYW5VcGNlOiBib29sZWFuO1xuICBzbG93ZXJUaG9yb3VnaFNjYW46IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBCYXJjb2RlUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxCYXJjb2RlUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ6UmVzdWx0IHtcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgYWxpZW5OdW1iZXI6IHN0cmluZztcbiAgYXBwbGljYXRpb25SZWNlaXB0TnVtYmVyOiBzdHJpbmc7XG4gIGltbWlncmFudENhc2VOdW1iZXI6IHN0cmluZztcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIHN1Y2Nlc3NGcmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdD4ge1xuICBzbGF2ZVJlY29nbml6ZXI6IFJlY29nbml6ZXI7XG4gIGNyZWF0ZVJlc3VsdEZyb21OYXRpdmUobmF0aXZlUmVzdWx0OiB7IHNsYXZlUmVjb2duaXplclJlc3VsdDogYW55IH0pOiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yIHtcbiAgbmV3IChyZWNvZ25pemVyOiBSZWNvZ25pemVyKTogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbiAgbGljZW5zZVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VhbmNlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBleWVDb2xvcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XG4gIGhlaWdodDogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIG1ydGRWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW5jaXBhbFJlc2lkZW5jZTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VhbmNlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFByaW5jaXBhbFJlc2lkZW5jZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJpYUNvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RWZWhpY2xlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIEF1c3RyaWFEbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhRGxGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZklzc3VhbmNlOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBleWVDb2xvcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW5jaXBhbFJlc2lkZW5jZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VhbmNlOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFByaW5jaXBhbFJlc2lkZW5jZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJpYUlkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGFzc3BvcnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkcml2ZXJSZXN0cmljdGlvbnM6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBZ2VuY3k6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERyaXZlclJlc3RyaWN0aW9uczogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBZ2VuY3k6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGJpcnRoRGF0ZTogRGF0ZTtcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmaW5nZXJwcmludDogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPENvbG9tYmlhSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXI8Q29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjaXRpemVuc2hpcDogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50QmlsaW5ndWFsOiBib29sZWFuO1xuICBkb2N1bWVudERhdGFNYXRjaDogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBub25SZXNpZGVudDogYm9vbGVhbjtcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudEZvck5vblJlc2lkZW50OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZWRCeTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbiAgcmVzaWRlbmNlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdFJlc2lkZW5jZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjaXRpemVuc2hpcDogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XG4gIGRvY3VtZW50QmlsaW5ndWFsOiBib29sZWFuO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RDaXRpemVuc2hpcDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZXhwaXJlc09uOiBEYXRlO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEV4cGlyZXNPbjogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQ3lwcnVzSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxDeXBydXNJZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWROdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhdXRob3JpdHk6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwZXJtYW5lbnRTdGF5OiBzdHJpbmc7XG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQZXJtYW5lbnRTdGF5OiBib29sZWFuO1xuICBleHRyYWN0UGVyc29uYWxOdW1iZXI6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRvY3VtZW50TG9jYXRpb246IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZhY2VMb2NhdGlvbjogUXVhZHJpbGF0ZXJhbDtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8RG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RvclR5cGU6IERvY3VtZW50RmFjZURldGVjdG9yVHlwZS5URDE7XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgbnVtU3RhYmxlRGV0ZWN0aW9uc1RocmVzaG9sZDogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbmF0aW9uYWxOdW1iZXI6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8RWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWd5cHRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsTnVtYmVyOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgRWd5cHRJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xuICBjdnY6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaW52ZW50b3J5TnVtYmVyOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgdmFsaWRUaHJ1OiBEYXRlO1xufVxuZXhwb3J0IHR5cGUgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgYW5vbnltaXplQ2FyZE51bWJlcjogYm9vbGVhbjtcbiAgYW5vbnltaXplQ3Z2OiBib29sZWFuO1xuICBhbm9ueW1pemVPd25lcjogYm9vbGVhbjtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RJbnZlbnRvcnlOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RPd25lcjogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVGhydTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBiaXJ0aERhdGE6IHN0cmluZztcbiAgY291bnRyeTogc3RyaW5nO1xuICBkcml2ZXJOdW1iZXI6IHN0cmluZztcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZURhdGU6IERhdGU7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEV1ZGxSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEV1ZGxSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBFdWRsUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RXVkbFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgY291bnRyeTogRXVkbENvdW50cnkuQXV0b21hdGljO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBlcnNvbmFsTnVtYmVyOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNhbk51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZXllQ29sb3I6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueUNvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mSXNzdWVCMTA6IHN0cmluZztcbiAgZGF0ZU9mSXNzdWVCMTBOb3RTcGVjaWZpZWQ6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBHZXJtYW55RGxCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxHZXJtYW55RGxCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhZGRyZXNzQ2l0eTogc3RyaW5nO1xuICBhZGRyZXNzSG91c2VOdW1iZXI6IHN0cmluZztcbiAgYWRkcmVzc1N0cmVldDogc3RyaW5nO1xuICBhZGRyZXNzWmlwQ29kZTogc3RyaW5nO1xuICBhdXRob3JpdHk6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBleWVDb2xvdXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RXllQ29sb3VyOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBHZXJtYW55SWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxHZXJtYW55SWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNhbk51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RDYW5OdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueU9sZElkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhdXRob3JpdHk6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueVBhc3Nwb3J0UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjb21tZXJjaWFsQ29kZTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICByZXNpZGVudGlhbFN0YXR1czogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8SG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8SG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RGdWxsTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFJlc2lkZW50aWFsU3RhdHVzOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGVtcGxveWVyOiBzdHJpbmc7XG4gIGV4cGlyeURhdGU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYWN1bHR5QWRkcmVzczogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XG4gIHNlY3Rvcnk6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBJa2FkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJa2FkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElrYWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RW1wbG95ZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RFeHBpcnlEYXRlOiBib29sZWFuO1xuICBleHRyYWN0RmFjdWx0eUFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0U2VjdG9yOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgSWthZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8SWthZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYmxvb2RUeXBlOiBzdHJpbmc7XG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG4gIGNpdHk6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBzdHJpbmc7XG4gIGRpc3RyaWN0OiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBrZWxEZXNhOiBzdHJpbmc7XG4gIG1hcml0YWxTdGF0dXM6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBvY2N1cGF0aW9uOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcm92aW5jZTogc3RyaW5nO1xuICByZWxpZ2lvbjogc3RyaW5nO1xuICBydDogc3RyaW5nO1xuICBydzogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8SW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Qmxvb2RUeXBlOiBib29sZWFuO1xuICBleHRyYWN0Q2l0aXplbnNoaXA6IGJvb2xlYW47XG4gIGV4dHJhY3RDaXR5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGlzdHJpY3Q6IGJvb2xlYW47XG4gIGV4dHJhY3RLZWxEZXNhOiBib29sZWFuO1xuICBleHRyYWN0TWFyaXRhbFN0YXR1czogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RPY2N1cGF0aW9uOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0UmVsaWdpb246IGJvb2xlYW47XG4gIGV4dHJhY3RSdDogYm9vbGVhbjtcbiAgZXh0cmFjdFJ3OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8SW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkcml2ZXJOdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZWRCeTogc3RyaW5nO1xuICAvLyBzaWNcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcbiAgLy8gc2ljXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8SXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xuICBleHRyYWN0TGljZW5jZU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8SXJlbGFuZERsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgLy8gc2ljXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XG4gIC8vIHNpY1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBJdGFseURsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEl0YWx5RGxGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgSm9yZGFuSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxOdW1iZXI6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Sm9yZGFuSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG4gIHNlcmlhbE5vOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXJpYWxObzogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgS3V3YWl0SWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxLdXdhaXRJZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiaXJ0aERhdGE6IERhdGU7XG4gIGNpdmlsSWROdW1iZXI6IHN0cmluZztcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QmlydGhEYXRlOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBLdXdhaXRJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxLdXdhaXRJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjaXR5OiBzdHJpbmc7XG4gIGRsQ2xhc3M6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5TnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3duZXJTdGF0ZTogc3RyaW5nO1xuICBzdHJlZXQ6IHN0cmluZztcbiAgdmFsaWRGcm9tOiBEYXRlO1xuICB2YWxpZFVudGlsOiBEYXRlO1xuICB6aXBjb2RlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Q2xhc3M6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhcm15TnVtYmVyOiBzdHJpbmc7XG4gIGJpcnRoRGF0YTogRGF0ZTtcbiAgY2l0eTogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbEFkZHJlc3M6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZnVsbE5hbWU6IHN0cmluZztcbiAgbnJpYzogc3RyaW5nO1xuICBvd25lclN0YXRlOiBzdHJpbmc7XG4gIHJlbGlnaW9uOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzdHJlZXQ6IHN0cmluZztcbiAgemlwY29kZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RGdWxsTmFtZUFuZEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RSZWxpZ2lvbjogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGN1cnA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGVsZWN0b3JLZXk6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdEN1cnA6IGJvb2xlYW47XG4gIGV4dHJhY3RGdWxsTmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjaXZpbFN0YXR1c051bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhdGhlcnNOYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1vdGhlcnNOYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RDaXZpbFN0YXR1c051bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdEZhdGhlcnNOYW1lOiBib29sZWFuO1xuICBleHRyYWN0TW90aGVyc05hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1vcm9jY29JZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFsaWVuTnVtYmVyOiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uUmVjZWlwdE51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpbW1pZ3JhbnRDYXNlTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpJbWFnZTogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBhbGxvd1VucGFyc2VkUmVzdWx0czogYm9vbGVhbjtcbiAgYWxsb3dVbnZlcmlmaWVkUmVzdWx0czogYm9vbGVhbjtcbiAgbnVtU3RhYmxlRGV0ZWN0aW9uc1RocmVzaG9sZDogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5NcnpJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TXJ0ZENvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbXJ6SW1hZ2U6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG59XG5leHBvcnQgdHlwZSBNcnRkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNcnRkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1ydGRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGFsbG93VW5wYXJzZWRSZXN1bHRzOiBib29sZWFuO1xuICBhbGxvd1VudmVyaWZpZWRSZXN1bHRzOiBib29sZWFuO1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybk1yekltYWdlOiBib29sZWFuO1xuICBzYXZlSW1hZ2VEUEk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIE1ydGRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1ydGRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBleHRlbmRlZE5yaWM6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbnJpYzogc3RyaW5nO1xuICBvbGROcmljOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBNeUthZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0T2xkTnJpYzogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIE15S2FkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TXlLYWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXJteU51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbnJpY051bWJlcjogc3RyaW5nO1xuICBvd25lckFkZHJlc3M6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzQ2l0eTogc3RyaW5nO1xuICBvd25lckFkZHJlc3NTdGF0ZTogc3RyaW5nO1xuICBvd25lckFkZHJlc3NTdHJlZXQ6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzWmlwQ29kZTogc3RyaW5nO1xuICBvd25lckJpcnRoRGF0ZTogRGF0ZTtcbiAgb3duZXJGdWxsTmFtZTogc3RyaW5nO1xuICBvd25lclJlbGlnaW9uOiBzdHJpbmc7XG4gIG93bmVyU2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBNeUthZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNeUthZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGV4dHJhY3RBcm15TnVtYmVyOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgTXlLYWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TXlLYWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNhcmRWZXJzaW9uOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb25vckluZGljYXRvcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lczogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3REb25vckluZGljYXRvcjogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNhcmROdW1iZXI6IHN0cmluZztcbiAgY3Z2OiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaW52ZW50b3J5TnVtYmVyOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBvd25lcjogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHZhbGlkVGhydTogRGF0ZTtcbn1cbmV4cG9ydCB0eXBlIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD4ge1xuICBhbm9ueW1pemVDYXJkTnVtYmVyOiBib29sZWFuO1xuICBhbm9ueW1pemVDdnY6IGJvb2xlYW47XG4gIGFub255bWl6ZU93bmVyOiBib29sZWFuO1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEN2djogYm9vbGVhbjtcbiAgZXh0cmFjdEludmVudG9yeU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdE93bmVyOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRUaHJ1OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBCbGlua0NhcmRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEJsaW5rQ2FyZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYmFyY29kZVR5cGU6IHN0cmluZztcbiAgcmF3RGF0YTogc3RyaW5nO1xuICBzdHJpbmdEYXRhOiBzdHJpbmc7XG4gIHVuY2VydGFpbjogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFBkZjQxN1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8UGRmNDE3UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UGRmNDE3UmVjb2duaXplclJlc3VsdD4ge1xuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcbiAgc2NhbkludmVyc2U6IGJvb2xlYW47XG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBQZGY0MTdSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFBkZjQxN1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYW1pbHlOYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZXM6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwYXJlbnRzR2l2ZW5OYW1lczogc3RyaW5nO1xuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RmFtaWx5TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBhcmVudHNHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgUG9sYW5kSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxQb2xhbmRJZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZhbWlseU5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xuICBwYXJlbnRzR2l2ZW5OYW1lczogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RmFtaWx5TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXJlbnRzR2l2ZW5OYW1lczogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBQb2xhbmRJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxQb2xhbmRJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xuICBjbnA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWRTZXJpZXM6IHN0cmluZztcbiAgaXNzdWVkQnk6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgbm9uTVJaTmF0aW9uYWxpdHk6IHN0cmluZztcbiAgbm9uTVJaU2V4OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwYXJlbnROYW1lczogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICB2YWxpZEZyb206IERhdGU7XG4gIHZhbGlkVW50aWw6IERhdGU7XG59XG5leHBvcnQgdHlwZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Um9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0Tm9uTVJaU2V4OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFJvbWFuaWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIGptYmc6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNlcmJpYUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2VyYmlhSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdEYXRlOiBEYXRlO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICB2YWxpZFRocnU6IERhdGU7XG4gIHZhbGlkVW50aWw6IERhdGU7XG59XG5leHBvcnQgdHlwZSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0RhdGU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIHNpbU51bWJlcjogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IHR5cGUgU2ltTnVtYmVyUmVjb2duaXplciA9IFJlY29nbml6ZXI8U2ltTnVtYmVyUmVjb2duaXplclJlc3VsdD47XG5leHBvcnQgdHlwZSBTaW1OdW1iZXJSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbU51bWJlclJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNvbXBhbnlOYW1lOiBzdHJpbmc7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9XG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RDb21wYW55TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhZGRyZXNzQ2hhbmdlRGF0ZTogRGF0ZTtcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xuICBjb3VudHJ5T2ZCaXJ0aDogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByYWNlOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3NDaGFuZ2VEYXRlOiBib29sZWFuO1xuICBleHRyYWN0Qmxvb2RHcm91cDogYm9vbGVhbjtcbiAgZXh0cmFjdENvdW50cnlPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RSYWNlOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiaXJ0aERhdGE6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZURhdGU6IERhdGU7XG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2YWxpZFRpbGw6IERhdGU7XG59XG5leHBvcnQgdHlwZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QmlydGhEYXRlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVEYXRlOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVGlsbDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhZGRyZXNzQ2hhbmdlRGF0ZTogc3RyaW5nO1xuICBibG9vZEdyb3VwOiBzdHJpbmc7XG4gIGNhcmROdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzc0NoYW5nZURhdGU6IGJvb2xlYW47XG4gIGV4dHJhY3RCbG9vZEdyb3VwOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY291bnRyeU9mQmlydGg6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByYWNlOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdENvdW50cnlPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UmFjZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IG51bWJlcjtcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IG51bWJlcjtcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzcGVjaWFsUmVtYXJrczogc3RyaW5nO1xuICBzdXJuYW1lQXRCaXJ0aDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTcGVjaWFsUmVtYXJrczogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWVBdEJpcnRoOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc3BlY2lhbFJlbWFya3M6IHN0cmluZztcbiAgc3VybmFtZUF0QmlydGg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U3BlY2lhbFJlbWFya3M6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lQXRCaXJ0aDogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VlZEJ5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2xvdmFraWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhdXRob3JpdHk6IHN0cmluZztcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUlkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2xvdmVuaWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG4gIHZhbGlkRnJvbTogRGF0ZTtcbiAgdmFsaWRVbnRpbDogRGF0ZTtcbn1cbmV4cG9ydCB0eXBlIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BhaW5EbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVW50aWw6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNwYWluRGxGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0FnZW5jeTogc3RyaW5nO1xuICBsaWNlbmNlQ2F0ZWdvcmllczogc3RyaW5nO1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmVmZXJlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2VkZW5EbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFJlZmVyZW5jZU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3dlZGVuRGxGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGV4cGlyeURhdGVQZXJtYW5lbnQ6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFZlaGljbGVDYXRlZ29yaWVzOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG5vbk1yekRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgbm9uTXJ6U2V4OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwbGFjZU9mT3JpZ2luOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mT3JpZ2luOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgbm9uTXJ6RGF0ZU9mQmlydGg6IERhdGU7XG4gIG5vbk1yekRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgbm9uTXJ6U2V4OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwYXNzcG9ydE51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VlRGF0ZTogRGF0ZTtcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBsaWNlbnNpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwbGFjZU9mSXNzdWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9XG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0TGljZW5zZU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2Vuc2luZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG59XG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9XG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9XG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIHZpbjogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgVmluUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxWaW5SZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IHR5cGUgVmluUmVjb2duaXplciA9IFJlY29nbml6ZXI8VmluUmVjb2duaXplclJlc3VsdD47XG5leHBvcnQgdHlwZSBWaW5SZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFZpblJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIG9wdGlvbmFsRWxlbWVudHM6IGFueVtdO1xuICByYXdEYXRhOiBzdHJpbmc7XG4gIHJhd1N0cmluZ0RhdGE6IHN0cmluZztcbiAgdW5jZXJ0YWluOiBzdHJpbmc7XG4gIGZpZWxkczogYW55W107XG59XG5leHBvcnQgdHlwZSBVc2RsUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVc2RsUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVzZGxSZWNvZ25pemVyUmVzdWx0PiB7XG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xuICB1bmNlcnRhaW5EZWNvZGluZzogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFVzZGxSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVzZGxSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIG9wdGlvbmFsRWxlbWVudHM6IGFueVtdO1xuICByYXdEYXRhOiBzdHJpbmc7XG4gIHJhd1N0cmluZ0RhdGE6IHN0cmluZztcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xuICBmaWVsZHM6IGFueVtdO1xufVxuZXhwb3J0IHR5cGUgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2RsQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgVXNkbENvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IHR5cGUgQmxpbmtJZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QmxpbmtJZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rSWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCbGlua0lkUmVjb2duaXplclJlc3VsdD4ge1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBhbm9ueW1pemF0aW9uTW9kZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBsb2NhbGl6ZWROYW1lOiBzdHJpbmc7XG4gIGFkZGl0aW9uYWxOYW1lSW5mb3JtYXRpb246IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBzZXg6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xuICBuZXcgKCk6IEJsaW5rSWRPdmVybGF5U2V0dGluZ3M7XG59XG5leHBvcnQgdHlwZSBCbGlua0lkT3ZlcmxheVNldHRpbmdzID0gT3ZlcmxheVNldHRpbmdzO1xuXG5leHBvcnQgdHlwZSBCbGlua0lkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCbGlua0lkUmVjb2duaXplclJlc3VsdD47XG4vKipcbiAqIEBuYW1lIEJsaW5rSWRcbiAqIEBkZXNjcmlwdGlvblxuICogTWljcm9ibGluayBTREsgd3JhcHBlciBmb3IgYmFyY29kZSBhbmQgZG9jdW1lbnQgc2Nhbm5pbmcuIFNlZSB0aGVcbiAqIGJsaW5raWQtcGhvbmVnYXAgcmVwb3NpdG9yeSBmb3IgYXZhaWxhYmxlIHJlY29nbml6ZXJzIGFuZCBvdGhlciBzZXR0aW5nc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCbGlua0lkLCBSZWNvZ25pemVyUmVzdWx0U3RhdGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmxpbmtpZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmxpbmtJZDogQmxpbmtJZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3Qgb3ZlcmxheVNldHRpbmdzID0gbmV3IHRoaXMuYmxpbmtJZC5Eb2N1bWVudE92ZXJsYXlTZXR0aW5ncygpO1xuICpcbiAqIGNvbnN0IHVzZGxSZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5Vc2RsUmVjb2duaXplcigpO1xuICogY29uc3QgdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIgPSBuZXcgdGhpcy5ibGlua0lkLlN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyKHVzZGxSZWNvZ25pemVyKTtcbiAqXG4gKiBjb25zdCBiYXJjb2RlUmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuQmFyY29kZVJlY29nbml6ZXIoKTtcbiAqIGJhcmNvZGVSZWNvZ25pemVyLnNjYW5QZGY0MTcgPSB0cnVlO1xuICpcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbXG4gKiAgIHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyLFxuICogICBiYXJjb2RlUmVjb2duaXplcixcbiAqIF0pO1xuICpcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxuICogICBvdmVybGF5U2V0dGluZ3MsXG4gKiAgIHJlY29nbml6ZXJDb2xsZWN0aW9uLFxuICogICB7IGlvczogSU9TX0xJQ0VOU0VfS0VZLCBhbmRyb2lkOiBBTkRST0lEX0xJQ0VOU0VfS0VZIH0sXG4gKiApO1xuICpcbiAqIGlmICghY2FuY2VsZWQpIHtcbiAqICAgaWYgKHVzZGxSZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgY29uc3Qgc3VjY2Vzc0ZyYW1lID0gdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIucmVzdWx0LnN1Y2Nlc3NGcmFtZTtcbiAqICAgICBpZiAoc3VjY2Vzc0ZyYW1lKSB7XG4gKiAgICAgICB0aGlzLmJhc2U2NEltZyA9IGBkYXRhOmltYWdlL2pwZztiYXNlNjQsICR7c3VjY2Vzc0ZyYW1lfWA7XG4gKiAgICAgICB0aGlzLmZpZWxkcyA9IHVzZGxSZWNvZ25pemVyLnJlc3VsdC5maWVsZHM7XG4gKiAgICAgfVxuICogICB9IGVsc2Uge1xuICogICAgIHRoaXMuYmFyY29kZVN0cmluZ0RhdGEgPSBiYXJjb2RlUmVjb2duaXplci5yZXN1bHQuc3RyaW5nRGF0YTtcbiAqICAgfVxuICogfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IG5ldyB0aGlzLmJsaW5rSWQuQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzKCk7XG4gKiBjb25zdCByZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5CbGlua0NhcmRSZWNvZ25pemVyKCk7XG4gKiByZWNvZ25pemVyLnJldHVybkZ1bGxEb2N1bWVudEltYWdlID0gZmFsc2U7XG4gKiByZWNvZ25pemVyLmRldGVjdEdsYXJlID0gdHJ1ZTtcbiAqIHJlY29nbml6ZXIuZXh0cmFjdEN2diA9IHRydWU7XG4gKiByZWNvZ25pemVyLmV4dHJhY3RWYWxpZFRocnUgPSB0cnVlO1xuICogcmVjb2duaXplci5leHRyYWN0T3duZXIgPSB0cnVlO1xuICpcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbcmVjb2duaXplcl0pO1xuICogY29uc3QgY2FuY2VsZWQgPSBhd2FpdCB0aGlzLmJsaW5rSWQuc2NhbldpdGhDYW1lcmEoXG4gKiAgIG92ZXJsYXlTZXR0aW5ncyxcbiAqICAgcmVjb2duaXplckNvbGxlY3Rpb24sXG4gKiAgIHtcbiAqICAgICBpb3M6ICcnLCAvL2lPUyBMaWNlbnNlIEtleVxuICogICAgIGFuZHJvaWQ6ICcnIC8vQW5kcm9pZCBMaWNlbnNlIEtleVxuICogICB9LFxuICogKTtcbiAqXG4gKiBpZiAoIWNhbmNlbGVkKSB7XG4gKiAgIGlmIChyZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgY29uc3QgcmVzdWx0cyA9IHJlY29nbml6ZXIucmVzdWx0O1xuICpcbiAqICAgICBpZiAocmVzdWx0cy5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgICBjb25zdCBjY0luZm8gPSB7XG4gKiAgICAgICAgIGNhcmROdW1iZXI6IE51bWJlcihyZXN1bHRzLmNhcmROdW1iZXIpLFxuICogICAgICAgICBleHBpcmF0aW9uTW9udGg6IE51bWJlcihyZXN1bHRzLnZhbGlkVGhydS5tb250aCksXG4gKiAgICAgICAgIGV4cGlyYXRpb25ZZWFyOiBOdW1iZXIocmVzdWx0cy52YWxpZFRocnUueWVhciksXG4gKiAgICAgICAgIGN2djogTnVtYmVyKHJlc3VsdHMuY3Z2KVxuICogICAgICAgfTtcbiAqICAgICB9XG4gKiAgIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JsaW5rSWQnLFxuICBwbHVnaW46ICdibGlua2lkLWNvcmRvdmEnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmxpbmtJRCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQmxpbmtJRC9ibGlua2lkLXBob25lZ2FwJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGJsaW5raWQtY29yZG92YSAtLXZhcmlhYmxlIENBTUVSQV9VU0FHRV9ERVNDUklQVElPTj1cIkVuYWJsZSB5b3VyIGNhbWVyYSBzbyB0aGF0IHlvdSBjYW4gc2NhbiB5b3VyIElEIHRvIHZhbGlkYXRlIHlvdXIgYWNjb3VudFwiJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsaW5rSWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVucyB0aGUgY2FtZXJhIGRpYWxvZyBhbmQgYXR0ZW1wdHMgdG8gc2NhbiBhIGJhcmNvZGUvZG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIG92ZXJsYXlTZXR0aW5ncyB7T3ZlcmxheVNldHRpbmdzfSBmb3IgY2FtZXJhIG92ZXJsYXkgY3VzdG9taXphdGlvblxuICAgKiBAcGFyYW0gcmVjb2duaXplckNvbGxlY3Rpb24ge1JlY29nbml6ZXJDb2xsZWN0aW9ufSBjb2xsZWN0aW9uIG9mIHJlY29nbml6ZXJzIHRvIHNjYW4gd2l0aFxuICAgKiBAcGFyYW0gbGljZW5zZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzY2FuV2l0aENhbWVyYShcbiAgICBvdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyxcbiAgICByZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplckNvbGxlY3Rpb24sXG4gICAgbGljZW5zZXM6IExpY2Vuc2VzXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEYXRlOiBEYXRlQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvaW50OiBQb2ludEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBRdWFkcmlsYXRlcmFsOiBRdWFkcmlsYXRlcmFsQ3RvcjtcblxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZU92ZXJsYXlTZXR0aW5nczogQmFyY29kZU92ZXJsYXlTZXR0aW5nc0N0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudE92ZXJsYXlTZXR0aW5nczogRG9jdW1lbnRPdmVybGF5U2V0dGluZ3NDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3M6IERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nczogQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzQ3RvcjtcblxuICBAQ29yZG92YVByb3BlcnR5KCkgUmVjb2duaXplckNvbGxlY3Rpb246IFJlY29nbml6ZXJDb2xsZWN0aW9uQ3RvcjtcblxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZVJlY29nbml6ZXJSZXN1bHQ6IEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJhcmNvZGVSZWNvZ25pemVyOiBCYXJjb2RlUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdDogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXI6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyQ3RvcjtcblxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdDogQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyOiBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplcjogQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyOiBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFEbEZyb250UmVjb2duaXplcjogQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRCYWNrUmVjb2duaXplcjogQXVzdHJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyOiBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyOiBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplcjogQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdDogQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkUmVjb2duaXplcjogQmxpbmtDYXJkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRCYWNrUmVjb2duaXplcjogQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEZyb250UmVjb2duaXplcjogQ29sb21iaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkQmFja1JlY29nbml6ZXI6IEN5cHJ1c0lkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyOiBDeXBydXNJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0OiBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgRWd5cHRJZEZyb250UmVjb2duaXplcjogRWd5cHRJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFdWRsUmVjb2duaXplclJlc3VsdDogRXVkbFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyOiBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55RGxCYWNrUmVjb2duaXplcjogR2VybWFueURsQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyOiBHZXJtYW55SWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXI6IEdlcm1hbnlJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlPbGRJZFJlY29nbml6ZXI6IEdlcm1hbnlPbGRJZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyOiBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplcjogSG9uZ0tvbmdJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJa2FkUmVjb2duaXplclJlc3VsdDogSWthZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSWthZFJlY29nbml6ZXI6IElrYWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplcjogSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyOiBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdDogSXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJdGFseURsRnJvbnRSZWNvZ25pemVyOiBJdGFseURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplcjogSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRCYWNrUmVjb2duaXplcjogSm9yZGFuSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdDogSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRGcm9udFJlY29nbml6ZXI6IEpvcmRhbklkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRCYWNrUmVjb2duaXplcjogS3V3YWl0SWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdDogS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRGcm9udFJlY29nbml6ZXI6IEt1d2FpdElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFEbEZyb250UmVjb2duaXplcjogTWFsYXlzaWFEbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ6IE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXI6IE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXI6IE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyOiBNb3JvY2NvSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXI6IE1vcm9jY29JZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRDb21iaW5lZFJlY29nbml6ZXI6IE1ydGRDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZFJlY29nbml6ZXJSZXN1bHQ6IE1ydGRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRSZWNvZ25pemVyOiBNcnRkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkQmFja1JlY29nbml6ZXI6IE15S2FkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkRnJvbnRSZWNvZ25pemVyOiBNeUthZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXI6IE5ld1plYWxhbmREbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQZGY0MTdSZWNvZ25pemVyUmVzdWx0OiBQZGY0MTdSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBkZjQxN1JlY29nbml6ZXI6IFBkZjQxN1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyOiBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdDogUG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyOiBQb2xhbmRJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEZyb250UmVjb2duaXplcjogUG9sYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyOiBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyOiBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyOiBTZXJiaWFJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEZyb250UmVjb2duaXplcjogU2VyYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdDogU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW1OdW1iZXJSZWNvZ25pemVyOiBTaW1OdW1iZXJSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplcjogU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyOiBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyOiBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXI6IFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyOiBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXI6IFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplcjogU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEZyb250UmVjb2duaXplcjogU2xvdmFraWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXI6IFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplcjogU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEZyb250UmVjb2duaXplcjogU2xvdmVuaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwYWluRGxGcm9udFJlY29nbml6ZXI6IFNwYWluRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyOiBTd2VkZW5EbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyOiBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyOiBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplcjogU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXI6IFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBWaW5SZWNvZ25pemVyUmVzdWx0OiBWaW5SZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFZpblJlY29nbml6ZXI6IFZpblJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbFJlY29nbml6ZXJSZXN1bHQ6IFVzZGxSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVzZGxSZWNvZ25pemVyOiBVc2RsUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVzZGxDb21iaW5lZFJlY29nbml6ZXI6IFVzZGxDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtJZFJlY29nbml6ZXI6IEJsaW5rSWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rSWRPdmVybGF5U2V0dGluZ3M6IEJsaW5rSWRPdmVybGF5U2V0dGluZ3NDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtJZFJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0Q3Rvcjtcbn1cbiJdfQ==