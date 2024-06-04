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

var SpeechRecognition = /** @class */ (function (_super) {
    tslib.__extends(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechRecognition.prototype.isRecognitionAvailable = function () { return core.cordova(this, "isRecognitionAvailable", {}, arguments); };
    SpeechRecognition.prototype.startListening = function (options) { return core.cordova(this, "startListening", { "callbackOrder": "reverse", "observable": true }, arguments); };
    SpeechRecognition.prototype.stopListening = function () { return core.cordova(this, "stopListening", {}, arguments); };
    SpeechRecognition.prototype.getSupportedLanguages = function () { return core.cordova(this, "getSupportedLanguages", {}, arguments); };
    SpeechRecognition.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    SpeechRecognition.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", {}, arguments); };
    SpeechRecognition.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpeechRecognition, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SpeechRecognition.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpeechRecognition });
    SpeechRecognition.pluginName = "SpeechRecognition";
    SpeechRecognition.plugin = "cordova-plugin-speechrecognition";
    SpeechRecognition.pluginRef = "plugins.speechRecognition";
    SpeechRecognition.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
    SpeechRecognition.platforms = ["Android", "iOS"];
    SpeechRecognition = tslib.__decorate([], SpeechRecognition);
    return SpeechRecognition;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SpeechRecognition, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isRecognitionAvailable: [], startListening: [], stopListening: [], getSupportedLanguages: [], hasPermission: [], requestPermission: [] } });

exports.SpeechRecognition = SpeechRecognition;
