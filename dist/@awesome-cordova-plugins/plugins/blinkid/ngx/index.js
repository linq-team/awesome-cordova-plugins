import { __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
var BlinkId = /** @class */ (function (_super) {
    __extends(BlinkId, _super);
    function BlinkId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkId.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkId.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    BlinkId.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BlinkId, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BlinkId.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BlinkId });
    BlinkId.pluginName = "BlinkId";
    BlinkId.plugin = "blinkid-cordova";
    BlinkId.pluginRef = "cordova.plugins.BlinkID";
    BlinkId.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkId.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkId.platforms = ["iOS", "Android"];
    BlinkId = __decorate([], BlinkId);
    return BlinkId;
}(AwesomeCordovaNativePlugin));
export { BlinkId };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BlinkId, decorators: [{
            type: Injectable
        }], propDecorators: { scanWithCamera: [], Date: [], Point: [], Quadrilateral: [], BarcodeOverlaySettings: [], DocumentOverlaySettings: [], DocumentVerificationOverlaySettings: [], BlinkCardOverlaySettings: [], RecognizerCollection: [], BarcodeRecognizerResult: [], BarcodeRecognizer: [], SuccessFrameGrabberRecognizerResult: [], SuccessFrameGrabberRecognizer: [], AustraliaDlBackRecognizerResult: [], AustraliaDlBackRecognizer: [], AustraliaDlFrontRecognizerResult: [], AustraliaDlFrontRecognizer: [], AustriaCombinedRecognizerResult: [], AustriaCombinedRecognizer: [], AustriaDlFrontRecognizerResult: [], AustriaDlFrontRecognizer: [], AustriaIdBackRecognizerResult: [], AustriaIdBackRecognizer: [], AustriaIdFrontRecognizerResult: [], AustriaIdFrontRecognizer: [], AustriaPassportRecognizerResult: [], AustriaPassportRecognizer: [], BlinkCardEliteRecognizer: [], BlinkCardEliteRecognizerResult: [], BlinkCardRecognizerResult: [], BlinkCardRecognizer: [], ColombiaDlFrontRecognizerResult: [], ColombiaIdBackRecognizerResult: [], ColombiaIdBackRecognizer: [], ColombiaIdFrontRecognizerResult: [], ColombiaIdFrontRecognizer: [], CroatiaCombinedRecognizerResult: [], CroatiaIdBackRecognizerResult: [], CroatiaIdFrontRecognizerResult: [], CyprusIdBackRecognizerResult: [], CyprusIdBackRecognizer: [], CyprusIdFrontRecognizerResult: [], CyprusIdFrontRecognizer: [], CzechiaCombinedRecognizerResult: [], CzechiaIdBackRecognizerResult: [], DocumentFaceRecognizerResult: [], EgyptIdFrontRecognizerResult: [], EgyptIdFrontRecognizer: [], EudlRecognizerResult: [], GermanyCombinedRecognizerResult: [], GermanyCombinedRecognizer: [], GermanyDlBackRecognizerResult: [], GermanyDlBackRecognizer: [], GermanyIdBackRecognizerResult: [], GermanyIdBackRecognizer: [], GermanyIdFrontRecognizerResult: [], GermanyIdFrontRecognizer: [], GermanyOldIdRecognizerResult: [], GermanyOldIdRecognizer: [], GermanyPassportRecognizerResult: [], GermanyPassportRecognizer: [], HongKongIdFrontRecognizerResult: [], HongKongIdFrontRecognizer: [], IkadRecognizerResult: [], IkadRecognizer: [], IndonesiaIdFrontRecognizerResult: [], IndonesiaIdFrontRecognizer: [], IrelandDlFrontRecognizerResult: [], IrelandDlFrontRecognizer: [], ItalyDlFrontRecognizerResult: [], ItalyDlFrontRecognizer: [], JordanCombinedRecognizerResult: [], JordanCombinedRecognizer: [], JordanIdBackRecognizerResult: [], JordanIdBackRecognizer: [], JordanIdFrontRecognizerResult: [], JordanIdFrontRecognizer: [], KuwaitIdBackRecognizerResult: [], KuwaitIdBackRecognizer: [], KuwaitIdFrontRecognizerResult: [], KuwaitIdFrontRecognizer: [], MalaysiaDlFrontRecognizerResult: [], MalaysiaDlFrontRecognizer: [], MalaysiaMyTenteraRecognizerResult: [], MalaysiaMyTenteraRecognizer: [], MexicoVoterIdFrontRecognizerResult: [], MexicoVoterIdFrontRecognizer: [], MoroccoIdBackRecognizerResult: [], MoroccoIdBackRecognizer: [], MoroccoIdFrontRecognizerResult: [], MoroccoIdFrontRecognizer: [], MrtdCombinedRecognizerResult: [], MrtdCombinedRecognizer: [], MrtdRecognizerResult: [], MrtdRecognizer: [], MyKadBackRecognizerResult: [], MyKadBackRecognizer: [], MyKadFrontRecognizerResult: [], MyKadFrontRecognizer: [], NewZealandDlFrontRecognizerResult: [], NewZealandDlFrontRecognizer: [], Pdf417RecognizerResult: [], Pdf417Recognizer: [], PolandCombinedRecognizerResult: [], PolandCombinedRecognizer: [], PolandIdBackRecognizerResult: [], PolandIdBackRecognizer: [], PolandIdFrontRecognizerResult: [], PolandIdFrontRecognizer: [], RomaniaIdFrontRecognizerResult: [], RomaniaIdFrontRecognizer: [], SerbiaCombinedRecognizerResult: [], SerbiaCombinedRecognizer: [], SerbiaIdBackRecognizerResult: [], SerbiaIdBackRecognizer: [], SerbiaIdFrontRecognizerResult: [], SerbiaIdFrontRecognizer: [], SimNumberRecognizerResult: [], SimNumberRecognizer: [], SingaporeChangiEmployeeIdRecognizerResult: [], SingaporeChangiEmployeeIdRecognizer: [], SingaporeCombinedRecognizerResult: [], SingaporeCombinedRecognizer: [], SingaporeDlFrontRecognizerResult: [], SingaporeDlFrontRecognizer: [], SingaporeIdBackRecognizerResult: [], SingaporeIdBackRecognizer: [], SingaporeIdFrontRecognizerResult: [], SingaporeIdFrontRecognizer: [], SlovakiaCombinedRecognizerResult: [], SlovakiaCombinedRecognizer: [], SlovakiaIdBackRecognizerResult: [], SlovakiaIdBackRecognizer: [], SlovakiaIdFrontRecognizerResult: [], SlovakiaIdFrontRecognizer: [], SloveniaCombinedRecognizerResult: [], SloveniaCombinedRecognizer: [], SloveniaIdBackRecognizerResult: [], SloveniaIdBackRecognizer: [], SloveniaIdFrontRecognizerResult: [], SloveniaIdFrontRecognizer: [], SpainDlFrontRecognizerResult: [], SpainDlFrontRecognizer: [], SwedenDlFrontRecognizerResult: [], SwedenDlFrontRecognizer: [], SwitzerlandDlFrontRecognizerResult: [], SwitzerlandDlFrontRecognizer: [], SwitzerlandDlBackRecognizerResult: [], SwitzerlandDlBackRecognizer: [], SwitzerlandIdFrontRecognizerResult: [], SwitzerlandIdFrontRecognizer: [], SwitzerlandPassportRecognizerResult: [], SwitzerlandPassportRecognizer: [], UnitedArabEmiratesDlFrontRecognizerResult: [], UnitedArabEmiratesDlFrontRecognizer: [], UnitedArabEmiratesIdBackRecognizerResult: [], UnitedArabEmiratesIdBackRecognizer: [], UnitedArabEmiratesIdFrontRecognizerResult: [], UnitedArabEmiratesIdFrontRecognizer: [], VinRecognizerResult: [], VinRecognizer: [], UsdlRecognizerResult: [], UsdlRecognizer: [], UsdlCombinedRecognizerResult: [], UsdlCombinedRecognizer: [], BlinkIdRecognizer: [], BlinkIdOverlaySettings: [], BlinkIdRecognizerResult: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmxpbmtpZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0MsTUFBTSxDQUFOLElBQVksV0FhWDtBQWJELFdBQVksV0FBVztJQUNyQiw2Q0FBUSxDQUFBO0lBQ1IsaURBQVUsQ0FBQTtJQUNWLHlEQUFjLENBQUE7SUFDZCw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiwrQ0FBUyxDQUFBO0lBQ1QsbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7SUFDViw0Q0FBUSxDQUFBO0lBQ1IsZ0RBQVUsQ0FBQTtJQUNWLGtEQUFXLENBQUE7QUFDYixDQUFDLEVBYlcsV0FBVyxLQUFYLFdBQVcsUUFhdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLG1FQUFTLENBQUE7SUFDVCwyRUFBYSxDQUFBO0lBQ2IsbUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiw2REFBVyxDQUFBO0lBQ1gsdUVBQWdCLENBQUE7SUFDaEIsK0RBQVksQ0FBQTtJQUNaLHVEQUFRLENBQUE7SUFDUixpRUFBYSxDQUFBO0lBQ2IscUZBQXVCLENBQUE7QUFDekIsQ0FBQyxFQVBXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFPM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLHlDQUFNLENBQUE7SUFDTixtREFBVyxDQUFBO0lBQ1gs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QUFhLE1BQ2Isb0JBQW9CLE1BQ3BCLGNBQWMsTUFDZCw0QkFBNEIsTUFDNUIsc0JBQXNCLE1BQ3RCLGlCQUFpQixNQUNqQixzQkFBc0IsTUFDdEIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpY2Vuc2VzIHtcbiAgaW9zOiBzdHJpbmc7XG4gIGFuZHJvaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQmFyY29kZVR5cGUge1xuICBOb25lID0gMSxcbiAgUVJDb2RlID0gMixcbiAgRGF0YU1hdHJpeCA9IDMsXG4gIFVQQ0UgPSA0LFxuICBVUENBID0gNSxcbiAgRUFOOCA9IDYsXG4gIEVBTjEzID0gNyxcbiAgQ29kZTEyOCA9IDgsXG4gIENvZGUzOSA9IDksXG4gIElURiA9IDEwLFxuICBBenRlYyA9IDExLFxuICBQREY0MTcgPSAxMixcbn1cblxuZXhwb3J0IGVudW0gUmVjb2duaXplclJlc3VsdFN0YXRlIHtcbiAgZW1wdHkgPSAxLFxuICB1bmNlcnRhaW4gPSAyLFxuICB2YWxpZCA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIE1ydGREb2N1bWVudFR5cGUge1xuICBVbmtub3duID0gMSxcbiAgSWRlbnRpdHlDYXJkID0gMixcbiAgUGFzc3BvcnQgPSAzLFxuICBWaXNhID0gNCxcbiAgR3JlZW5DYXJkID0gNSxcbiAgTWFsYXlzaWFuUGFzc0lNTTEzUCA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIEV1ZGxDb3VudHJ5IHtcbiAgVUsgPSAxLFxuICBHZXJtYW55ID0gMixcbiAgQXVzdHJpYSA9IDMsXG4gIEF1dG9tYXRpYyA9IDQsXG59XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50RmFjZURldGVjdG9yVHlwZSB7XG4gIFREMSA9IDEsXG4gIFREMiA9IDIsXG4gIFBhc3Nwb3J0c0FuZFZpc2FzID0gMyxcbn1cblxuZXhwb3J0IGVudW0gVXNkbEtleXMge1xuICBEb2N1bWVudFR5cGUgPSAwLFxuICBTdGFuZGFyZFZlcnNpb25OdW1iZXIgPSAxLFxuICBDdXN0b21lckZhbWlseU5hbWUgPSAyLFxuICBDdXN0b21lckZpcnN0TmFtZSA9IDMsXG4gIEN1c3RvbWVyRnVsbE5hbWUgPSA0LFxuICBEYXRlT2ZCaXJ0aCA9IDUsXG4gIFNleCA9IDYsXG4gIEV5ZUNvbG9yID0gNyxcbiAgQWRkcmVzc1N0cmVldCA9IDgsXG4gIEFkZHJlc3NDaXR5ID0gOSxcbiAgQWRkcmVzc0p1cmlzZGljdGlvbkNvZGUgPSAxMCxcbiAgQWRkcmVzc1Bvc3RhbENvZGUgPSAxMSxcbiAgRnVsbEFkZHJlc3MgPSAxMixcbiAgSGVpZ2h0ID0gMTMsXG4gIEhlaWdodEluID0gMTQsXG4gIEhlaWdodENtID0gMTUsXG4gIEN1c3RvbWVyTWlkZGxlTmFtZSA9IDE2LFxuICBIYWlyQ29sb3IgPSAxNyxcbiAgTmFtZVN1ZmZpeCA9IDE4LFxuICBBS0FGdWxsTmFtZSA9IDE5LFxuICBBS0FGYW1pbHlOYW1lID0gMjAsXG4gIEFLQUdpdmVuTmFtZSA9IDIxLFxuICBBS0FTdWZmaXhOYW1lID0gMjIsXG4gIFdlaWdodFJhbmdlID0gMjMsXG4gIFdlaWdodFBvdW5kcyA9IDI0LFxuICBXZWlnaHRLaWxvZ3JhbXMgPSAyNSxcbiAgQ3VzdG9tZXJJZE51bWJlciA9IDI2LFxuICBGYW1pbHlOYW1lVHJ1bmNhdGlvbiA9IDI3LFxuICBGaXJzdE5hbWVUcnVuY2F0aW9uID0gMjgsXG4gIE1pZGRsZU5hbWVUcnVuY2F0aW9uID0gMjksXG4gIFBsYWNlT2ZCaXJ0aCA9IDMwLFxuICBBZGRyZXNzU3RyZWV0MiA9IDMxLFxuICBSYWNlRXRobmljaXR5ID0gMzIsXG4gIE5hbWVQcmVmaXggPSAzMyxcbiAgQ291bnRyeUlkZW50aWZpY2F0aW9uID0gMzQsXG4gIFJlc2lkZW5jZVN0cmVldEFkZHJlc3MgPSAzNSxcbiAgUmVzaWRlbmNlU3RyZWV0QWRkcmVzczIgPSAzNixcbiAgUmVzaWRlbmNlQ2l0eSA9IDM3LFxuICBSZXNpZGVuY2VKdXJpc2RpY3Rpb25Db2RlID0gMzgsXG4gIFJlc2lkZW5jZVBvc3RhbENvZGUgPSAzOSxcbiAgUmVzaWRlbmNlRnVsbEFkZHJlc3MgPSA0MCxcbiAgVW5kZXIxOCA9IDQxLFxuICBVbmRlcjE5ID0gNDIsXG4gIFVuZGVyMjEgPSA0MyxcbiAgU29jaWFsU2VjdXJpdHlOdW1iZXIgPSA0NCxcbiAgQUtBU29jaWFsU2VjdXJpdHlOdW1iZXIgPSA0NSxcbiAgQUtBTWlkZGxlTmFtZSA9IDQ2LFxuICBBS0FQcmVmaXhOYW1lID0gNDcsXG4gIE9yZ2FuRG9ub3IgPSA0OCxcbiAgVmV0ZXJhbiA9IDQ5LFxuICBBS0FEYXRlT2ZCaXJ0aCA9IDUwLFxuICBJc3N1ZXJJZGVudGlmaWNhdGlvbk51bWJlciA9IDUxLFxuICBEb2N1bWVudEV4cGlyYXRpb25EYXRlID0gNTIsXG4gIEp1cmlzZGljdGlvblZlcnNpb25OdW1iZXIgPSA1MyxcbiAgSnVyaXNkaWN0aW9uVmVoaWNsZUNsYXNzID0gNTQsXG4gIEp1cmlzZGljdGlvblJlc3RyaWN0aW9uQ29kZXMgPSA1NSxcbiAgSnVyaXNkaWN0aW9uRW5kb3JzZW1lbnRDb2RlcyA9IDU2LFxuICBEb2N1bWVudElzc3VlRGF0ZSA9IDU3LFxuICBGZWRlcmFsQ29tbWVyY2lhbFZlaGljbGVDb2RlcyA9IDU4LFxuICBJc3N1aW5nSnVyaXNkaWN0aW9uID0gNTksXG4gIFN0YW5kYXJkVmVoaWNsZUNsYXNzaWZpY2F0aW9uID0gNjAsXG4gIElzc3VpbmdKdXJpc2RpY3Rpb25OYW1lID0gNjEsXG4gIFN0YW5kYXJkRW5kb3JzZW1lbnRDb2RlID0gNjIsXG4gIFN0YW5kYXJkUmVzdHJpY3Rpb25Db2RlID0gNjMsXG4gIEp1cmlzZGljdGlvblZlaGljbGVDbGFzc2lmaWNhdGlvbkRlc2NyaXB0aW9uID0gNjQsXG4gIEp1cmlzZGljdGlvbkVuZG9yc21lbnRDb2RlRGVzY3JpcHRpb24gPSA2NSxcbiAgSnVyaXNkaWN0aW9uUmVzdHJpY3Rpb25Db2RlRGVzY3JpcHRpb24gPSA2NixcbiAgSW52ZW50b3J5Q29udHJvbE51bWJlciA9IDY3LFxuICBDYXJkUmV2aXNpb25EYXRlID0gNjgsXG4gIERvY3VtZW50RGlzY3JpbWluYXRvciA9IDY5LFxuICBMaW1pdGVkRHVyYXRpb25Eb2N1bWVudCA9IDcwLFxuICBBdWRpdEluZm9ybWF0aW9uID0gNzEsXG4gIENvbXBsaWFuY2VUeXBlID0gNzIsXG4gIElzc3VlVGltZXN0YW1wID0gNzMsXG4gIFBlcm1pdEV4cGlyYXRpb25EYXRlID0gNzQsXG4gIFBlcm1pdElkZW50aWZpZXIgPSA3NSxcbiAgUGVybWl0SXNzdWVEYXRlID0gNzYsXG4gIE51bWJlck9mRHVwbGljYXRlcyA9IDc3LFxuICBIQVpNQVRFeHBpcmF0aW9uRGF0ZSA9IDc4LFxuICBNZWRpY2FsSW5kaWNhdG9yID0gNzksXG4gIE5vblJlc2lkZW50ID0gODAsXG4gIFVuaXF1ZUN1c3RvbWVySWQgPSA4MSxcbiAgRGF0YURpc2NyaW1pbmF0b3IgPSA4MixcbiAgRG9jdW1lbnRFeHBpcmF0aW9uTW9udGggPSA4MyxcbiAgRG9jdW1lbnROb25leHBpcmluZyA9IDg0LFxuICBTZWN1cml0eVZlcnNpb24gPSA4NSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUV4dGVuc2lvbkZhY3RvcnMge1xuICB1cEZhY3RvcjogbnVtYmVyO1xuICByaWdodEZhY3RvcjogbnVtYmVyO1xuICBkb3duRmFjdG9yOiBudW1iZXI7XG4gIGxlZnRGYWN0b3I6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlIHtcbiAgZGF5OiBzdHJpbmc7XG4gIG1vbnRoOiBzdHJpbmc7XG4gIHllYXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUN0b3Ige1xuICBuZXcgKG5hdGl2ZURhdGU6IERhdGUpOiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgeDogc3RyaW5nO1xuICB5OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBvaW50Q3RvciB7XG4gIG5ldyAobmF0aXZlUG9pbnQ6IFBvaW50KTogUG9pbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZHJpbGF0ZXJhbCB7XG4gIHVwcGVyTGVmdDogc3RyaW5nO1xuICB1cHBlclJpZ2h0OiBzdHJpbmc7XG4gIGxvd2VyTGVmdDogc3RyaW5nO1xuICBsb3dlclJpZ2h0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1YWRyaWxhdGVyYWxDdG9yIHtcbiAgbmV3IChuYXRpdmVRdWFkOiBRdWFkcmlsYXRlcmFsKTogUXVhZHJpbGF0ZXJhbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5U2V0dGluZ3Mge1xuICBvdmVybGF5U2V0dGluZ3NUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEJhcmNvZGVPdmVybGF5U2V0dGluZ3MgPSBPdmVybGF5U2V0dGluZ3M7XG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVPdmVybGF5U2V0dGluZ3NDdG9yIHtcbiAgbmV3ICgpOiBCYXJjb2RlT3ZlcmxheVNldHRpbmdzO1xufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudE92ZXJsYXlTZXR0aW5ncyA9IE92ZXJsYXlTZXR0aW5ncztcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRPdmVybGF5U2V0dGluZ3NDdG9yIHtcbiAgbmV3ICgpOiBEb2N1bWVudE92ZXJsYXlTZXR0aW5ncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7XG4gIGZpcnN0U2lkZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcbiAgc2Vjb25kU2lkZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcbiAgc2Nhbm5pbmdEb25lU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xuICBmaXJzdFNpZGVJbnN0cnVjdGlvbnM6IHN0cmluZztcbiAgc2Vjb25kU2lkZUluc3RydWN0aW9uczogc3RyaW5nO1xuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3NDdG9yIHtcbiAgbmV3ICgpOiBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5ncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge1xuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzQ3RvciB7XG4gIG5ldyAoKTogQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJSZXN1bHQge1xuICByZXN1bHRTdGF0ZTogUmVjb2duaXplclJlc3VsdFN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJSZXN1bHRDdG9yPFQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0PiB7XG4gIG5ldyAobmF0aXZlUmVzdWx0OiBhbnkpOiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXI8VCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQgPSBhbnk+IHtcbiAgcmVjb2duaXplclR5cGU6IHN0cmluZztcbiAgcmVzdWx0OiBUO1xuICBjcmVhdGVSZXN1bHRGcm9tTmF0aXZlKG5hdGl2ZVJlc3VsdDogYW55KTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ3RvcjxUIGV4dGVuZHMgUmVjb2duaXplcj4ge1xuICBuZXcgKCk6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb24ge1xuICByZWNvZ25pemVyQXJyYXk6IFJlY29nbml6ZXJbXTtcbiAgYWxsb3dNdWx0aXBsZVJlc3VsdHM6IGJvb2xlYW47XG4gIC8vIHNpY1xuICBtaWxpc2Vjb25kc0JlZm9yZVRpbWVvdXQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb25DdG9yIHtcbiAgbmV3IChyZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplcltdKTogUmVjb2duaXplckNvbGxlY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYmFyY29kZVR5cGU6IEJhcmNvZGVUeXBlO1xuICByYXdEYXRhOiBzdHJpbmc7XG4gIHN0cmluZ0RhdGE6IHN0cmluZztcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQmFyY29kZVJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QmFyY29kZVJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCYXJjb2RlUmVjb2duaXplclJlc3VsdD4ge1xuICBhdXRvU2NhbGVEZXRlY3Rpb246IGJvb2xlYW47XG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xuICByZWFkQ29kZTM5QXNFeHRlbmRlZERhdGE6IGJvb2xlYW47XG4gIHNjYW5BenRlY0NvZGU6IGJvb2xlYW47XG4gIHNjYW5Db2RlMTI4OiBib29sZWFuO1xuICBzY2FuQ29kZTM5OiBib29sZWFuO1xuICBzY2FuRGF0YU1hdHJpeDogYm9vbGVhbjtcbiAgc2NhbkVhbjEzOiBib29sZWFuO1xuICBzY2FuRWFuODogYm9vbGVhbjtcbiAgc2NhbkludmVyc2U6IGJvb2xlYW47XG4gIHNjYW5JdGY6IGJvb2xlYW47XG4gIHNjYW5QZGY0MTc6IGJvb2xlYW47XG4gIHNjYW5RckNvZGU6IGJvb2xlYW47XG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XG4gIHNjYW5VcGNhOiBib29sZWFuO1xuICBzY2FuVXBjZTogYm9vbGVhbjtcbiAgc2xvd2VyVGhvcm91Z2hTY2FuOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQmFyY29kZVJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QmFyY29kZVJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1yelJlc3VsdCB7XG4gIGRvY3VtZW50VHlwZTogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBnZW5kZXI6IHN0cmluZztcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIGFsaWVuTnVtYmVyOiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uUmVjZWlwdE51bWJlcjogc3RyaW5nO1xuICBpbW1pZ3JhbnRDYXNlTnVtYmVyOiBzdHJpbmc7XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBzdWNjZXNzRnJhbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgc2xhdmVSZWNvZ25pemVyOiBSZWNvZ25pemVyO1xuICBjcmVhdGVSZXN1bHRGcm9tTmF0aXZlKG5hdGl2ZVJlc3VsdDogeyBzbGF2ZVJlY29nbml6ZXJSZXN1bHQ6IGFueSB9KTogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyQ3RvciB7XG4gIG5ldyAocmVjb2duaXplcjogUmVjb2duaXplcik6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XG4gIGxpY2Vuc2VUeXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmFsaWFEbEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZXllQ29sb3I6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBtcnRkVmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmluY2lwYWxSZXNpZGVuY2U6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1YW5jZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGFzc3BvcnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RQcmluY2lwYWxSZXNpZGVuY2U6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgdmVoaWNsZUNhdGVnb3JpZXM6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0VmVoaWNsZUNhdGVnb3JpZXM6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZXllQ29sb3I6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmluY2lwYWxSZXNpZGVuY2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1YW5jZTogYm9vbGVhbjtcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RQcmluY2lwYWxSZXNpZGVuY2U6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIEF1c3RyaWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZHJpdmVyUmVzdHJpY3Rpb25zOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1aW5nQWdlbmN5OiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REcml2ZXJSZXN0cmljdGlvbnM6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQWdlbmN5OiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiaXJ0aERhdGU6IERhdGU7XG4gIGJsb29kR3JvdXA6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmluZ2VycHJpbnQ6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXI8Q29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgQ29sb21iaWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudEJpbGluZ3VhbDogYm9vbGVhbjtcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbm9uUmVzaWRlbnQ6IGJvb2xlYW47XG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBib29sZWFuO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnRGb3JOb25SZXNpZGVudDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVkQnk6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG4gIHJlc2lkZW5jZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XG4gIGV4dHJhY3RSZXNpZGVuY2U6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBib29sZWFuO1xuICBkb2N1bWVudEJpbGluZ3VhbDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0Q2l0aXplbnNoaXA6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGV4cGlyZXNPbjogRGF0ZTtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RFeHBpcmVzT246IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Q3lwcnVzSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERvY3VtZW50TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGVybWFuZW50U3RheTogc3RyaW5nO1xuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGVybWFuZW50U3RheTogYm9vbGVhbjtcbiAgZXh0cmFjdFBlcnNvbmFsTnVtYmVyOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBDeXBydXNJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudExvY2F0aW9uOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYWNlTG9jYXRpb246IFF1YWRyaWxhdGVyYWw7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50RmFjZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0b3JUeXBlOiBEb2N1bWVudEZhY2VEZXRlY3RvclR5cGUuVEQxO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIG51bVN0YWJsZURldGVjdGlvbnNUaHJlc2hvbGQ6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbE51bWJlcjogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEVneXB0SWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8RWd5cHRJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNhcmROdW1iZXI6IHN0cmluZztcbiAgY3Z2OiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGludmVudG9yeU51bWJlcjogc3RyaW5nO1xuICBvd25lcjogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHZhbGlkVGhydTogRGF0ZTtcbn1cbmV4cG9ydCB0eXBlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGFub255bWl6ZUNhcmROdW1iZXI6IGJvb2xlYW47XG4gIGFub255bWl6ZUN2djogYm9vbGVhbjtcbiAgYW5vbnltaXplT3duZXI6IGJvb2xlYW47XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0SW52ZW50b3J5TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0T3duZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFRocnU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEV1ZGxSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYmlydGhEYXRhOiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgZHJpdmVyTnVtYmVyOiBzdHJpbmc7XG4gIGV4cGlyeURhdGU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVEYXRlOiBEYXRlO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBFdWRsUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxFdWRsUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEV1ZGxSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGNvdW50cnk6IEV1ZGxDb3VudHJ5LkF1dG9tYXRpYztcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQZXJzb25hbE51bWJlcjogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjYW5OdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGV5ZUNvbG9yOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZklzc3VlQjEwOiBzdHJpbmc7XG4gIGRhdGVPZklzc3VlQjEwTm90U3BlY2lmaWVkOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueURsQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueURsQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc0NpdHk6IHN0cmluZztcbiAgYWRkcmVzc0hvdXNlTnVtYmVyOiBzdHJpbmc7XG4gIGFkZHJlc3NTdHJlZXQ6IHN0cmluZztcbiAgYWRkcmVzc1ppcENvZGU6IHN0cmluZztcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZXllQ29sb3VyOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGhlaWdodDogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEV5ZUNvbG91cjogYm9vbGVhbjtcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueUlkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjYW5OdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZXM6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0Q2FuTnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEdlcm1hbnlJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEdlcm1hbnlPbGRJZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY29tbWVyY2lhbENvZGU6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZnVsbE5hbWU6IHN0cmluZztcbiAgcmVzaWRlbnRpYWxTdGF0dXM6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RnVsbE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RSZXNpZGVudGlhbFN0YXR1czogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBJa2FkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBlbXBsb3llcjogc3RyaW5nO1xuICBleHBpcnlEYXRlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmFjdWx0eUFkZHJlc3M6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwYXNzcG9ydE51bWJlcjogc3RyaW5nO1xuICBzZWN0b3J5OiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgSWthZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8SWthZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJa2FkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEVtcGxveWVyOiBib29sZWFuO1xuICBleHRyYWN0RXhwaXJ5RGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZhY3VsdHlBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFNlY3RvcjogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIElrYWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPElrYWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGJsb29kVHlwZTogc3RyaW5nO1xuICBjaXRpemVuc2hpcDogc3RyaW5nO1xuICBjaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogc3RyaW5nO1xuICBkaXN0cmljdDogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAga2VsRGVzYTogc3RyaW5nO1xuICBtYXJpdGFsU3RhdHVzOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJvdmluY2U6IHN0cmluZztcbiAgcmVsaWdpb246IHN0cmluZztcbiAgcnQ6IHN0cmluZztcbiAgcnc6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdEJsb29kVHlwZTogYm9vbGVhbjtcbiAgZXh0cmFjdENpdGl6ZW5zaGlwOiBib29sZWFuO1xuICBleHRyYWN0Q2l0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERpc3RyaWN0OiBib29sZWFuO1xuICBleHRyYWN0S2VsRGVzYTogYm9vbGVhbjtcbiAgZXh0cmFjdE1hcml0YWxTdGF0dXM6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0T2NjdXBhdGlvbjogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFJlbGlnaW9uOiBib29sZWFuO1xuICBleHRyYWN0UnQ6IGJvb2xlYW47XG4gIGV4dHJhY3RSdzogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZHJpdmVyTnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVkQnk6IHN0cmluZztcbiAgLy8gc2ljXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XG4gIC8vIHNpY1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8SXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2VuY2VOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPElyZWxhbmREbEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIC8vIHNpY1xuICBsaWNlbmNlQ2F0ZWdvcmllczogc3RyaW5nO1xuICAvLyBzaWNcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgSXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgSXRhbHlEbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxJdGFseURsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Sm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEpvcmRhbklkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Sm9yZGFuSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xuICBzZXJpYWxObzogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0U2VyaWFsTm86IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIEt1d2FpdElkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8S3V3YWl0SWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYmlydGhEYXRhOiBEYXRlO1xuICBjaXZpbElkTnVtYmVyOiBzdHJpbmc7XG4gIGV4cGlyeURhdGU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8S3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEJpcnRoRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8S3V3YWl0SWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY2l0eTogc3RyaW5nO1xuICBkbENsYXNzOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsQWRkcmVzczogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG93bmVyU3RhdGU6IHN0cmluZztcbiAgc3RyZWV0OiBzdHJpbmc7XG4gIHZhbGlkRnJvbTogRGF0ZTtcbiAgdmFsaWRVbnRpbDogRGF0ZTtcbiAgemlwY29kZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdENsYXNzOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgTWFsYXlzaWFEbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXJteU51bWJlcjogc3RyaW5nO1xuICBiaXJ0aERhdGE6IERhdGU7XG4gIGNpdHk6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIG5yaWM6IHN0cmluZztcbiAgb3duZXJTdGF0ZTogc3RyaW5nO1xuICByZWxpZ2lvbjogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc3RyZWV0OiBzdHJpbmc7XG4gIHppcGNvZGU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RnVsbE5hbWVBbmRBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0UmVsaWdpb246IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjdXJwOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBlbGVjdG9yS2V5OiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RDdXJwOiBib29sZWFuO1xuICBleHRyYWN0RnVsbE5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2l2aWxTdGF0dXNOdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYXRoZXJzTmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBtb3RoZXJzTmFtZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Q2l2aWxTdGF0dXNOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3RGYXRoZXJzTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE1vdGhlcnNOYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1vcm9jY29JZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhbGllbk51bWJlcjogc3RyaW5nO1xuICBhcHBsaWNhdGlvblJlY2VpcHROdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGRvY3VtZW50VHlwZTogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaW1taWdyYW50Q2FzZU51bWJlcjogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6SW1hZ2U6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgYWxsb3dVbnBhcnNlZFJlc3VsdHM6IGJvb2xlYW47XG4gIGFsbG93VW52ZXJpZmllZFJlc3VsdHM6IGJvb2xlYW47XG4gIG51bVN0YWJsZURldGVjdGlvbnNUaHJlc2hvbGQ6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuTXJ6SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1ydGRDb21iaW5lZFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1yekltYWdlOiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xufVxuZXhwb3J0IHR5cGUgTXJ0ZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TXJ0ZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNcnRkUmVjb2duaXplclJlc3VsdD4ge1xuICBhbGxvd1VucGFyc2VkUmVzdWx0czogYm9vbGVhbjtcbiAgYWxsb3dVbnZlcmlmaWVkUmVzdWx0czogYm9vbGVhbjtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5NcnpJbWFnZTogYm9vbGVhbjtcbiAgc2F2ZUltYWdlRFBJOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBNcnRkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNcnRkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZXh0ZW5kZWROcmljOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5yaWM6IHN0cmluZztcbiAgb2xkTnJpYzogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TXlLYWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXlLYWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdE9sZE5yaWM6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBNeUthZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE15S2FkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFybXlOdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5yaWNOdW1iZXI6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzOiBzdHJpbmc7XG4gIG93bmVyQWRkcmVzc0NpdHk6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzU3RhdGU6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzU3RyZWV0OiBzdHJpbmc7XG4gIG93bmVyQWRkcmVzc1ppcENvZGU6IHN0cmluZztcbiAgb3duZXJCaXJ0aERhdGU6IERhdGU7XG4gIG93bmVyRnVsbE5hbWU6IHN0cmluZztcbiAgb3duZXJSZWxpZ2lvbjogc3RyaW5nO1xuICBvd25lclNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNeUthZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBleHRyYWN0QXJteU51bWJlcjogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIE15S2FkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE15S2FkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjYXJkVmVyc2lvbjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9ub3JJbmRpY2F0b3I6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZXM6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RG9ub3JJbmRpY2F0b3I6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE5ld1plYWxhbmREbEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGN2djogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGludmVudG9yeU51bWJlcjogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgb3duZXI6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICB2YWxpZFRocnU6IERhdGU7XG59XG5leHBvcnQgdHlwZSBCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgYW5vbnltaXplQ2FyZE51bWJlcjogYm9vbGVhbjtcbiAgYW5vbnltaXplQ3Z2OiBib29sZWFuO1xuICBhbm9ueW1pemVPd25lcjogYm9vbGVhbjtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RDdnY6IGJvb2xlYW47XG4gIGV4dHJhY3RJbnZlbnRvcnlOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RPd25lcjogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVGhydTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgQmxpbmtDYXJkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxCbGlua0NhcmRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBQZGY0MTdSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGJhcmNvZGVUeXBlOiBzdHJpbmc7XG4gIHJhd0RhdGE6IHN0cmluZztcbiAgc3RyaW5nRGF0YTogc3RyaW5nO1xuICB1bmNlcnRhaW46IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBQZGY0MTdSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XG4gIHNjYW5JbnZlcnNlOiBib29sZWFuO1xuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgUGRmNDE3UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxQZGY0MTdSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWVzOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGFyZW50c0dpdmVuTmFtZXM6IHN0cmluZztcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXJlbnRzR2l2ZW5OYW1lczogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8UG9sYW5kQ29tYmluZWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgUG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFBvbGFuZElkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8UG9sYW5kSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYW1pbHlOYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZXM6IHN0cmluZztcbiAgcGFyZW50c0dpdmVuTmFtZXM6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0UGFyZW50c0dpdmVuTmFtZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8UG9sYW5kSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNhcmROdW1iZXI6IHN0cmluZztcbiAgY25wOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkU2VyaWVzOiBzdHJpbmc7XG4gIGlzc3VlZEJ5OiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG5vbk1SWk5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG5vbk1SWlNleDogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGFyZW50TmFtZXM6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgdmFsaWRGcm9tOiBEYXRlO1xuICB2YWxpZFVudGlsOiBEYXRlO1xufVxuZXhwb3J0IHR5cGUgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5vbk1SWlNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVW50aWw6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Um9tYW5pYUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBqbWJnOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNlcmJpYUlkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1aW5nRGF0ZTogRGF0ZTtcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgdmFsaWRUaHJ1OiBEYXRlO1xuICB2YWxpZFVudGlsOiBEYXRlO1xufVxuZXhwb3J0IHR5cGUgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdEYXRlOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTZXJiaWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTZXJiaWFJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBzaW1OdW1iZXI6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2ltTnVtYmVyUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCB0eXBlIFNpbU51bWJlclJlY29nbml6ZXIgPSBSZWNvZ25pemVyPFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ+O1xuZXhwb3J0IHR5cGUgU2ltTnVtYmVyUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTaW1OdW1iZXJSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjb21wYW55TmFtZTogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdEN0b3IgPVxuICBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0Q29tcGFueU5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc0NoYW5nZURhdGU6IERhdGU7XG4gIGJsb29kR3JvdXA6IHN0cmluZztcbiAgY291bnRyeU9mQmlydGg6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmFjZTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzQ2hhbmdlRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEJsb29kR3JvdXA6IGJvb2xlYW47XG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UmFjZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYmlydGhEYXRhOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVEYXRlOiBEYXRlO1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsaWRUaWxsOiBEYXRlO1xufVxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEJpcnRoRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VlRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFRpbGw6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc0NoYW5nZURhdGU6IHN0cmluZztcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xuICBjYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3NDaGFuZ2VEYXRlOiBib29sZWFuO1xuICBleHRyYWN0Qmxvb2RHcm91cDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNvdW50cnlPZkJpcnRoOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmFjZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFJhY2U6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBudW1iZXI7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBudW1iZXI7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3BlY2lhbFJlbWFya3M6IHN0cmluZztcbiAgc3VybmFtZUF0QmlydGg6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3BlY2lhbFJlbWFya3M6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lQXRCaXJ0aDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNwZWNpYWxSZW1hcmtzOiBzdHJpbmc7XG4gIHN1cm5hbWVBdEJpcnRoOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFNwZWNpYWxSZW1hcmtzOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZUF0QmlydGg6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3Zha2lhSWRCYWNrUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZWRCeTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmFraWFJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjaXRpemVuc2hpcDogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmVuaWFJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XG4gIG51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xuICB2YWxpZEZyb206IERhdGU7XG4gIHZhbGlkVW50aWw6IERhdGU7XG59XG5leHBvcnQgdHlwZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgU3BhaW5EbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTcGFpbkRsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBZ2VuY3k6IHN0cmluZztcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlZmVyZW5jZU51bWJlcjogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dlZGVuRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RSZWZlcmVuY2VOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBleHBpcnlEYXRlUGVybWFuZW50OiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgdmVoaWNsZUNhdGVnb3JpZXM6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RWZWhpY2xlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGhlaWdodDogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBub25NcnpEYXRlT2ZFeHBpcnk6IERhdGU7XG4gIG5vbk1yelNleDogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGxhY2VPZk9yaWdpbjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZk9yaWdpbjogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG5vbk1yekRhdGVPZkJpcnRoOiBEYXRlO1xuICBub25NcnpEYXRlT2ZFeHBpcnk6IERhdGU7XG4gIG5vbk1yelNleDogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGV4cGlyeURhdGU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZURhdGU6IERhdGU7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbiAgbGljZW5zaW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGxhY2VPZklzc3VlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPVxuICBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2Vuc2VOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbnNpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mSXNzdWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xufVxuZXhwb3J0IHR5cGUgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPVxuICBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZE51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPVxuICBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmluUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICB2aW46IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFZpblJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8VmluUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCB0eXBlIFZpblJlY29nbml6ZXIgPSBSZWNvZ25pemVyPFZpblJlY29nbml6ZXJSZXN1bHQ+O1xuZXhwb3J0IHR5cGUgVmluUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxWaW5SZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2RsUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBvcHRpb25hbEVsZW1lbnRzOiBhbnlbXTtcbiAgcmF3RGF0YTogc3RyaW5nO1xuICByYXdTdHJpbmdEYXRhOiBzdHJpbmc7XG4gIHVuY2VydGFpbjogc3RyaW5nO1xuICBmaWVsZHM6IGFueVtdO1xufVxuZXhwb3J0IHR5cGUgVXNkbFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8VXNkbFJlY29nbml6ZXJSZXN1bHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVc2RsUmVjb2duaXplclJlc3VsdD4ge1xuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcbiAgdW5jZXJ0YWluRGVjb2Rpbmc6IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBVc2RsUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxVc2RsUmVjb2duaXplcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBvcHRpb25hbEVsZW1lbnRzOiBhbnlbXTtcbiAgcmF3RGF0YTogc3RyaW5nO1xuICByYXdTdHJpbmdEYXRhOiBzdHJpbmc7XG4gIHVuY2VydGFpbjogYm9vbGVhbjtcbiAgZmllbGRzOiBhbnlbXTtcbn1cbmV4cG9ydCB0eXBlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8VXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8VXNkbENvbWJpbmVkUmVjb2duaXplcj47XG5cbmV4cG9ydCB0eXBlIEJsaW5rSWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEJsaW5rSWRSZWNvZ25pemVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0lkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtJZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgYW5vbnltaXphdGlvbk1vZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0lkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZnVsbE5hbWU6IHN0cmluZztcbiAgbG9jYWxpemVkTmFtZTogc3RyaW5nO1xuICBhZGRpdGlvbmFsTmFtZUluZm9ybWF0aW9uOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgc2V4OiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rSWRPdmVybGF5U2V0dGluZ3NDdG9yIHtcbiAgbmV3ICgpOiBCbGlua0lkT3ZlcmxheVNldHRpbmdzO1xufVxuZXhwb3J0IHR5cGUgQmxpbmtJZE92ZXJsYXlTZXR0aW5ncyA9IE92ZXJsYXlTZXR0aW5ncztcblxuZXhwb3J0IHR5cGUgQmxpbmtJZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtJZFJlY29nbml6ZXJSZXN1bHQ+O1xuLyoqXG4gKiBAbmFtZSBCbGlua0lkXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1pY3JvYmxpbmsgU0RLIHdyYXBwZXIgZm9yIGJhcmNvZGUgYW5kIGRvY3VtZW50IHNjYW5uaW5nLiBTZWUgdGhlXG4gKiBibGlua2lkLXBob25lZ2FwIHJlcG9zaXRvcnkgZm9yIGF2YWlsYWJsZSByZWNvZ25pemVycyBhbmQgb3RoZXIgc2V0dGluZ3NcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmxpbmtJZCwgUmVjb2duaXplclJlc3VsdFN0YXRlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JsaW5raWQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJsaW5rSWQ6IEJsaW5rSWQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IG5ldyB0aGlzLmJsaW5rSWQuRG9jdW1lbnRPdmVybGF5U2V0dGluZ3MoKTtcbiAqXG4gKiBjb25zdCB1c2RsUmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuVXNkbFJlY29nbml6ZXIoKTtcbiAqIGNvbnN0IHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyID0gbmV3IHRoaXMuYmxpbmtJZC5TdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcih1c2RsUmVjb2duaXplcik7XG4gKlxuICogY29uc3QgYmFyY29kZVJlY29nbml6ZXIgPSBuZXcgdGhpcy5ibGlua0lkLkJhcmNvZGVSZWNvZ25pemVyKCk7XG4gKiBiYXJjb2RlUmVjb2duaXplci5zY2FuUGRmNDE3ID0gdHJ1ZTtcbiAqXG4gKiBjb25zdCByZWNvZ25pemVyQ29sbGVjdGlvbiA9IG5ldyB0aGlzLmJsaW5rSWQuUmVjb2duaXplckNvbGxlY3Rpb24oW1xuICogICB1c2RsU3VjY2Vzc0ZyYW1lR3JhYmJlcixcbiAqICAgYmFyY29kZVJlY29nbml6ZXIsXG4gKiBdKTtcbiAqXG4gKiBjb25zdCBjYW5jZWxlZCA9IGF3YWl0IHRoaXMuYmxpbmtJZC5zY2FuV2l0aENhbWVyYShcbiAqICAgb3ZlcmxheVNldHRpbmdzLFxuICogICByZWNvZ25pemVyQ29sbGVjdGlvbixcbiAqICAgeyBpb3M6IElPU19MSUNFTlNFX0tFWSwgYW5kcm9pZDogQU5EUk9JRF9MSUNFTlNFX0tFWSB9LFxuICogKTtcbiAqXG4gKiBpZiAoIWNhbmNlbGVkKSB7XG4gKiAgIGlmICh1c2RsUmVjb2duaXplci5yZXN1bHQucmVzdWx0U3RhdGUgPT09IFJlY29nbml6ZXJSZXN1bHRTdGF0ZS52YWxpZCkge1xuICogICAgIGNvbnN0IHN1Y2Nlc3NGcmFtZSA9IHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyLnJlc3VsdC5zdWNjZXNzRnJhbWU7XG4gKiAgICAgaWYgKHN1Y2Nlc3NGcmFtZSkge1xuICogICAgICAgdGhpcy5iYXNlNjRJbWcgPSBgZGF0YTppbWFnZS9qcGc7YmFzZTY0LCAke3N1Y2Nlc3NGcmFtZX1gO1xuICogICAgICAgdGhpcy5maWVsZHMgPSB1c2RsUmVjb2duaXplci5yZXN1bHQuZmllbGRzO1xuICogICAgIH1cbiAqICAgfSBlbHNlIHtcbiAqICAgICB0aGlzLmJhcmNvZGVTdHJpbmdEYXRhID0gYmFyY29kZVJlY29nbml6ZXIucmVzdWx0LnN0cmluZ0RhdGE7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCBvdmVybGF5U2V0dGluZ3MgPSBuZXcgdGhpcy5ibGlua0lkLkJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5ncygpO1xuICogY29uc3QgcmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuQmxpbmtDYXJkUmVjb2duaXplcigpO1xuICogcmVjb2duaXplci5yZXR1cm5GdWxsRG9jdW1lbnRJbWFnZSA9IGZhbHNlO1xuICogcmVjb2duaXplci5kZXRlY3RHbGFyZSA9IHRydWU7XG4gKiByZWNvZ25pemVyLmV4dHJhY3RDdnYgPSB0cnVlO1xuICogcmVjb2duaXplci5leHRyYWN0VmFsaWRUaHJ1ID0gdHJ1ZTtcbiAqIHJlY29nbml6ZXIuZXh0cmFjdE93bmVyID0gdHJ1ZTtcbiAqXG4gKiBjb25zdCByZWNvZ25pemVyQ29sbGVjdGlvbiA9IG5ldyB0aGlzLmJsaW5rSWQuUmVjb2duaXplckNvbGxlY3Rpb24oW3JlY29nbml6ZXJdKTtcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxuICogICBvdmVybGF5U2V0dGluZ3MsXG4gKiAgIHJlY29nbml6ZXJDb2xsZWN0aW9uLFxuICogICB7XG4gKiAgICAgaW9zOiAnJywgLy9pT1MgTGljZW5zZSBLZXlcbiAqICAgICBhbmRyb2lkOiAnJyAvL0FuZHJvaWQgTGljZW5zZSBLZXlcbiAqICAgfSxcbiAqICk7XG4gKlxuICogaWYgKCFjYW5jZWxlZCkge1xuICogICBpZiAocmVjb2duaXplci5yZXN1bHQucmVzdWx0U3RhdGUgPT09IFJlY29nbml6ZXJSZXN1bHRTdGF0ZS52YWxpZCkge1xuICogICAgIGNvbnN0IHJlc3VsdHMgPSByZWNvZ25pemVyLnJlc3VsdDtcbiAqXG4gKiAgICAgaWYgKHJlc3VsdHMucmVzdWx0U3RhdGUgPT09IFJlY29nbml6ZXJSZXN1bHRTdGF0ZS52YWxpZCkge1xuICogICAgICAgY29uc3QgY2NJbmZvID0ge1xuICogICAgICAgICBjYXJkTnVtYmVyOiBOdW1iZXIocmVzdWx0cy5jYXJkTnVtYmVyKSxcbiAqICAgICAgICAgZXhwaXJhdGlvbk1vbnRoOiBOdW1iZXIocmVzdWx0cy52YWxpZFRocnUubW9udGgpLFxuICogICAgICAgICBleHBpcmF0aW9uWWVhcjogTnVtYmVyKHJlc3VsdHMudmFsaWRUaHJ1LnllYXIpLFxuICogICAgICAgICBjdnY6IE51bWJlcihyZXN1bHRzLmN2dilcbiAqICAgICAgIH07XG4gKiAgICAgfVxuICogICB9XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCbGlua0lkJyxcbiAgcGx1Z2luOiAnYmxpbmtpZC1jb3Jkb3ZhJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJsaW5rSUQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0JsaW5rSUQvYmxpbmtpZC1waG9uZWdhcCcsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBibGlua2lkLWNvcmRvdmEgLS12YXJpYWJsZSBDQU1FUkFfVVNBR0VfREVTQ1JJUFRJT049XCJFbmFibGUgeW91ciBjYW1lcmEgc28gdGhhdCB5b3UgY2FuIHNjYW4geW91ciBJRCB0byB2YWxpZGF0ZSB5b3VyIGFjY291bnRcIicsXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCbGlua0lkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbnMgdGhlIGNhbWVyYSBkaWFsb2cgYW5kIGF0dGVtcHRzIHRvIHNjYW4gYSBiYXJjb2RlL2RvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSBvdmVybGF5U2V0dGluZ3Mge092ZXJsYXlTZXR0aW5nc30gZm9yIGNhbWVyYSBvdmVybGF5IGN1c3RvbWl6YXRpb25cbiAgICogQHBhcmFtIHJlY29nbml6ZXJDb2xsZWN0aW9uIHtSZWNvZ25pemVyQ29sbGVjdGlvbn0gY29sbGVjdGlvbiBvZiByZWNvZ25pemVycyB0byBzY2FuIHdpdGhcbiAgICogQHBhcmFtIGxpY2Vuc2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc2NhbldpdGhDYW1lcmEoXG4gICAgb3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MsXG4gICAgcmVjb2duaXplckNvbGxlY3Rpb246IFJlY29nbml6ZXJDb2xsZWN0aW9uLFxuICAgIGxpY2Vuc2VzOiBMaWNlbnNlc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YVByb3BlcnR5KCkgRGF0ZTogRGF0ZUN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2ludDogUG9pbnRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUXVhZHJpbGF0ZXJhbDogUXVhZHJpbGF0ZXJhbEN0b3I7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJhcmNvZGVPdmVybGF5U2V0dGluZ3M6IEJhcmNvZGVPdmVybGF5U2V0dGluZ3NDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgRG9jdW1lbnRPdmVybGF5U2V0dGluZ3M6IERvY3VtZW50T3ZlcmxheVNldHRpbmdzQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzOiBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nc0N0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3M6IEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nc0N0b3I7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyQ29sbGVjdGlvbkN0b3I7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0OiBCYXJjb2RlUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlUmVjb2duaXplcjogQmFyY29kZVJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyOiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplckN0b3I7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQ6IEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplcjogQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXI6IEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplcjogQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXI6IEF1c3RyaWFEbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkQmFja1JlY29nbml6ZXI6IEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFJZEZyb250UmVjb2duaXplcjogQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplcjogQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXI6IEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0OiBCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZFJlY29nbml6ZXI6IEJsaW5rQ2FyZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXI6IENvbG9tYmlhSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXI6IENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEJhY2tSZWNvZ25pemVyOiBDeXBydXNJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEZyb250UmVjb2duaXplcjogQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdDogRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEVneXB0SWRGcm9udFJlY29nbml6ZXI6IEVneXB0SWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgRXVkbFJlY29nbml6ZXJSZXN1bHQ6IEV1ZGxSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUNvbWJpbmVkUmVjb2duaXplcjogR2VybWFueUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdDogR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueURsQmFja1JlY29nbml6ZXI6IEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRCYWNrUmVjb2duaXplcjogR2VybWFueUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyOiBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdDogR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55T2xkSWRSZWNvZ25pemVyOiBHZXJtYW55T2xkSWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplcjogR2VybWFueVBhc3Nwb3J0UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXI6IEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSWthZFJlY29nbml6ZXJSZXN1bHQ6IElrYWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElrYWRSZWNvZ25pemVyOiBJa2FkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXI6IEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElyZWxhbmREbEZyb250UmVjb2duaXplcjogSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSXRhbHlEbEZyb250UmVjb2duaXplcjogSXRhbHlEbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXI6IEpvcmRhbkNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkQmFja1JlY29nbml6ZXI6IEpvcmRhbklkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyOiBKb3JkYW5JZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkQmFja1JlY29nbml6ZXI6IEt1d2FpdElkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyOiBLdXdhaXRJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXI6IE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0OiBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyOiBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdDogTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyOiBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRCYWNrUmVjb2duaXplcjogTW9yb2Njb0lkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyOiBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkQ29tYmluZWRSZWNvZ25pemVyOiBNcnRkQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRSZWNvZ25pemVyUmVzdWx0OiBNcnRkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkUmVjb2duaXplcjogTXJ0ZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdDogTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEJhY2tSZWNvZ25pemVyOiBNeUthZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNeUthZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEZyb250UmVjb2duaXplcjogTXlLYWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyOiBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUGRmNDE3UmVjb2duaXplclJlc3VsdDogUGRmNDE3UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQZGY0MTdSZWNvZ25pemVyOiBQZGY0MTdSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZENvbWJpbmVkUmVjb2duaXplcjogUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRCYWNrUmVjb2duaXplcjogUG9sYW5kSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdDogUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRGcm9udFJlY29nbml6ZXI6IFBvbGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJvbWFuaWFJZEZyb250UmVjb2duaXplcjogUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplcjogU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRCYWNrUmVjb2duaXplcjogU2VyYmlhSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRGcm9udFJlY29nbml6ZXI6IFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ6IFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2ltTnVtYmVyUmVjb2duaXplcjogU2ltTnVtYmVyUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXI6IFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplcjogU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplcjogU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyOiBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplcjogU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyOiBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXI6IFNsb3Zha2lhSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXI6IFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyOiBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXI6IFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXI6IFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdDogU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyOiBTcGFpbkRsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2VkZW5EbEZyb250UmVjb2duaXplcjogU3dlZGVuRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyOiBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplcjogU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplcjogU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdDogVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVmluUmVjb2duaXplclJlc3VsdDogVmluUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBWaW5SZWNvZ25pemVyOiBWaW5SZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVzZGxSZWNvZ25pemVyUmVzdWx0OiBVc2RsUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsUmVjb2duaXplcjogVXNkbFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsQ29tYmluZWRSZWNvZ25pemVyOiBVc2RsQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rSWRSZWNvZ25pemVyOiBCbGlua0lkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0lkT3ZlcmxheVNldHRpbmdzOiBCbGlua0lkT3ZlcmxheVNldHRpbmdzQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0OiBCbGlua0lkUmVjb2duaXplclJlc3VsdEN0b3I7XG59XG4iXX0=