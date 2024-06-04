'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var Webim = /** @class */ (function (_super) {
    tslib.__extends(Webim, _super);
    function Webim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webim.prototype.init = function (params) { return core.cordova(this, "init", {}, arguments); };
    Webim.prototype.requestDialog = function () { return core.cordova(this, "requestDialog", {}, arguments); };
    Webim.prototype.getMessagesHistory = function (limit, offset) { return core.cordova(this, "getMessagesHistory", {}, arguments); };
    Webim.prototype.typingMessage = function (message) { return core.cordova(this, "typingMessage", {}, arguments); };
    Webim.prototype.sendMessage = function (message) { return core.cordova(this, "sendMessage", {}, arguments); };
    Webim.prototype.replyMessage = function (message, repliedMessage) { return core.cordova(this, "replyMessage", {}, arguments); };
    Webim.prototype.sendFile = function (filePath) { return core.cordova(this, "sendFile", {}, arguments); };
    Webim.prototype.sendSurveyAnswer = function (surveyAnswer) { return core.cordova(this, "sendSurveyAnswer", {}, arguments); };
    Webim.prototype.cancelSurvey = function () { return core.cordova(this, "cancelSurvey", {}, arguments); };
    Webim.prototype.onMessage = function () { return core.cordova(this, "onMessage", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onDeletedMessage = function () { return core.cordova(this, "onDeletedMessage", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onFile = function (message) { return core.cordova(this, "onFile", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onTyping = function () { return core.cordova(this, "onTyping", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onConfirm = function () { return core.cordova(this, "onConfirm", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onDialog = function () { return core.cordova(this, "onDialog", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onBan = function () { return core.cordova(this, "onBan", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.close = function () { return core.cordova(this, "close", {}, arguments); };
    Webim.prototype.rateOperator = function (id, rating) { return core.cordova(this, "rateOperator", {}, arguments); };
    Webim.prototype.rateOperatorWithNote = function (id, rating, note) { return core.cordova(this, "rateOperatorWithNote", {}, arguments); };
    Webim.prototype.sendDialogToEmailAddress = function (emailAddress) { return core.cordova(this, "sendDialogToEmailAddress", {}, arguments); };
    Webim.prototype.onUnreadByVisitorMessageCount = function () { return core.cordova(this, "onUnreadByVisitorMessageCount", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onSurvey = function () { return core.cordova(this, "onSurvey", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onNextQuestion = function () { return core.cordova(this, "onNextQuestion", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.onSurveyCancel = function () { return core.cordova(this, "onSurveyCancel", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.prototype.getUnreadByVisitorMessageCount = function () { return core.cordova(this, "getUnreadByVisitorMessageCount", {}, arguments); };
    Webim.prototype.sendKeyboardRequest = function () { return core.cordova(this, "sendKeyboardRequest", {}, arguments); };
    Webim.prototype.setChatRead = function () { return core.cordova(this, "setChatRead", {}, arguments); };
    Webim.prototype.getShowEmailButton = function () { return core.cordova(this, "getShowEmailButton", {}, arguments); };
    Webim.prototype.showRateOperatorWindow = function () { return core.cordova(this, "showRateOperatorWindow", {}, arguments); };
    Webim.prototype.onLogging = function () { return core.cordova(this, "onLogging", { "observable": true, "clearFunction": "close" }, arguments); };
    Webim.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Webim, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Webim.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Webim });
    Webim.pluginName = "Webim";
    Webim.plugin = "ru.webim.sdk";
    Webim.pluginRef = "webimsdk";
    Webim.repo = "https://github.com/webim/webim-cordova-plugin.git";
    Webim.install = "cordova plugin add https://github.com/webim/webim-cordova-plugin.git";
    Webim.platforms = ["Android", "iOS", "Browser"];
    Webim = tslib.__decorate([], Webim);
    return Webim;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Webim, decorators: [{
            type: i0.Injectable
        }], propDecorators: { init: [], requestDialog: [], getMessagesHistory: [], typingMessage: [], sendMessage: [], replyMessage: [], sendFile: [], sendSurveyAnswer: [], cancelSurvey: [], onMessage: [], onDeletedMessage: [], onFile: [], onTyping: [], onConfirm: [], onDialog: [], onBan: [], close: [], rateOperator: [], rateOperatorWithNote: [], sendDialogToEmailAddress: [], onUnreadByVisitorMessageCount: [], onSurvey: [], onNextQuestion: [], onSurveyCancel: [], getUnreadByVisitorMessageCount: [], sendKeyboardRequest: [], setChatRead: [], getShowEmailButton: [], showRateOperatorWindow: [], onLogging: [] } });

exports.Webim = Webim;
