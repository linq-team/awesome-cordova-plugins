'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

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

var ASAuthorizationAppleIDRequest = /** @class */ (function () {
    function ASAuthorizationAppleIDRequest() {
    }
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName = 0;
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail = 1;
    return ASAuthorizationAppleIDRequest;
}());
var SignInWithApple = /** @class */ (function (_super) {
    tslib.__extends(SignInWithApple, _super);
    function SignInWithApple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignInWithApple.prototype.signin = function (options) {
        if (options === void 0) { options = {}; }
        return core.cordova(this, "signin", {}, arguments);
    };
    SignInWithApple.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SignInWithApple, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SignInWithApple.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SignInWithApple });
    SignInWithApple.pluginName = "Sign in with Apple";
    SignInWithApple.plugin = "cordova-plugin-sign-in-with-apple";
    SignInWithApple.pluginRef = "cordova.plugins.SignInWithApple";
    SignInWithApple.repo = "https://github.com/twogate/cordova-plugin-sign-in-with-apple";
    SignInWithApple.platforms = ["iOS"];
    SignInWithApple = tslib.__decorate([], SignInWithApple);
    return SignInWithApple;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SignInWithApple, decorators: [{
            type: i0.Injectable
        }], propDecorators: { signin: [] } });

exports.ASAuthorizationAppleIDRequest = ASAuthorizationAppleIDRequest;
exports.SignInWithApple = SignInWithApple;
