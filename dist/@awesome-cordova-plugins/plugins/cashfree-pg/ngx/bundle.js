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

exports.CFEnvironment = void 0;
(function (CFEnvironment) {
    CFEnvironment["PRODUCTION"] = "PRODUCTION";
    CFEnvironment["SANDBOX"] = "SANDBOX";
})(exports.CFEnvironment || (exports.CFEnvironment = {}));
var CFSession = /** @class */ (function () {
    function CFSession(sessionID, orderID, environment) {
        if (sessionID === null || sessionID.trim() === '') {
            throw new Error('sessionID cannot be empty');
        }
        if (orderID === null || orderID.trim() === '') {
            throw new Error('orderID cannot be empty');
        }
        if (environment === null || environment.trim() === '') {
            throw new Error('environment cannot be empty');
        }
        this.payment_session_id = sessionID;
        this.orderID = orderID;
        this.environment = exports.CFEnvironment[environment];
    }
    return CFSession;
}());
exports.CFPaymentModes = void 0;
(function (CFPaymentModes) {
    CFPaymentModes["CARD"] = "CARD";
    CFPaymentModes["UPI"] = "UPI";
    CFPaymentModes["NB"] = "NB";
    CFPaymentModes["WALLET"] = "WALLET";
    CFPaymentModes["EMI"] = "EMI";
    CFPaymentModes["PAY_LATER"] = "PAY_LATER";
    CFPaymentModes["PAYPAL"] = "PAYPAL";
})(exports.CFPaymentModes || (exports.CFPaymentModes = {}));
var CFPaymentComponentBuilder = /** @class */ (function () {
    function CFPaymentComponentBuilder() {
        this.hashset = new Set();
    }
    CFPaymentComponentBuilder.prototype.enableAllModes = function () {
        this.hashset.add(exports.CFPaymentModes.CARD);
        this.hashset.add(exports.CFPaymentModes.UPI);
        this.hashset.add(exports.CFPaymentModes.NB);
        this.hashset.add(exports.CFPaymentModes.WALLET);
        this.hashset.add(exports.CFPaymentModes.EMI);
        this.hashset.add(exports.CFPaymentModes.PAY_LATER);
        this.hashset.add(exports.CFPaymentModes.PAYPAL);
    };
    CFPaymentComponentBuilder.prototype.build = function () {
        if (this.hashset.size === 0) {
            this.enableAllModes();
        }
        return {
            hashset: this.hashset,
        };
    };
    CFPaymentComponentBuilder.prototype.add = function (cfPaymentModes) {
        this.hashset.add(cfPaymentModes);
        return this;
    };
    return CFPaymentComponentBuilder;
}());
var CFThemeBuilder = /** @class */ (function () {
    function CFThemeBuilder() {
        this.navigationBarBackgroundColor = '#6A3FD3';
        this.navigationBarTextColor = '#FFFFFF';
        this.buttonBackgroundColor = '#6A3FD3';
        this.buttonTextColor = '#FFFFFF';
        this.backgroundColor = '#FFFFFF';
        this.primaryTextColor = '#11385b';
        this.secondaryTextColor = '#808080';
    }
    CFThemeBuilder.prototype.setNavigationBarBackgroundColor = function (value) {
        this.navigationBarBackgroundColor = value;
        return this;
    };
    CFThemeBuilder.prototype.setNavigationBarTextColor = function (value) {
        this.navigationBarTextColor = value;
        return this;
    };
    CFThemeBuilder.prototype.setButtonBackgroundColor = function (value) {
        this.buttonBackgroundColor = value;
        return this;
    };
    CFThemeBuilder.prototype.setButtonTextColor = function (value) {
        this.buttonTextColor = value;
        return this;
    };
    CFThemeBuilder.prototype.setPrimaryTextColor = function (value) {
        this.primaryTextColor = value;
        return this;
    };
    CFThemeBuilder.prototype.setSecondaryTextColor = function (value) {
        this.secondaryTextColor = value;
        return this;
    };
    CFThemeBuilder.prototype.setBackgroundColor = function (value) {
        this.backgroundColor = value;
        return this;
    };
    CFThemeBuilder.prototype.build = function () {
        return {
            navigationBarBackgroundColor: this.navigationBarBackgroundColor,
            navigationBarTextColor: this.navigationBarTextColor,
            buttonBackgroundColor: this.buttonBackgroundColor,
            backgroundColor: this.backgroundColor,
            buttonTextColor: this.buttonTextColor,
            primaryTextColor: this.primaryTextColor,
            secondaryTextColor: this.secondaryTextColor,
        };
    };
    return CFThemeBuilder;
}());
var CFWebThemeBuilder = /** @class */ (function () {
    function CFWebThemeBuilder() {
        this.navigationBarBackgroundColor = '#6A3FD3';
        this.navigationBarTextColor = '#FFFFFF';
    }
    CFWebThemeBuilder.prototype.setNavigationBarBackgroundColor = function (value) {
        this.navigationBarBackgroundColor = value;
        return this;
    };
    CFWebThemeBuilder.prototype.setNavigationBarTextColor = function (value) {
        this.navigationBarTextColor = value;
        return this;
    };
    CFWebThemeBuilder.prototype.build = function () {
        var cfTheme = new CFThemeBuilder().build();
        return {
            buttonBackgroundColor: cfTheme.buttonBackgroundColor,
            buttonTextColor: cfTheme.buttonTextColor,
            navigationBarBackgroundColor: this.navigationBarBackgroundColor,
            navigationBarTextColor: this.navigationBarBackgroundColor,
            secondaryTextColor: cfTheme.secondaryTextColor,
            backgroundColor: cfTheme.backgroundColor,
            primaryTextColor: cfTheme.buttonTextColor,
        };
    };
    return CFWebThemeBuilder;
}());
var CFDropCheckoutPayment = /** @class */ (function () {
    function CFDropCheckoutPayment(session, components, theme) {
        this.components = Array.from(new CFPaymentComponentBuilder().build().hashset);
        this.theme = new CFThemeBuilder().build();
        this.session = session;
        if (components !== null) {
            this.components = Array.from(components.hashset);
        }
        if (theme !== null) {
            this.theme = theme;
        }
    }
    CFDropCheckoutPayment.prototype.getSession = function () {
        return this.session;
    };
    CFDropCheckoutPayment.prototype.getComponents = function () {
        return this.components;
    };
    CFDropCheckoutPayment.prototype.getTheme = function () {
        return this.theme;
    };
    return CFDropCheckoutPayment;
}());
var CFWebCheckoutPayment = /** @class */ (function () {
    function CFWebCheckoutPayment(session, theme) {
        this.theme = new CFWebThemeBuilder().build();
        this.session = session;
        if (theme !== null) {
            this.theme = theme;
        }
    }
    CFWebCheckoutPayment.prototype.getSession = function () {
        return this.session;
    };
    CFWebCheckoutPayment.prototype.getTheme = function () {
        return this.theme;
    };
    return CFWebCheckoutPayment;
}());
var CFUPIIntentCheckoutPayment = /** @class */ (function () {
    function CFUPIIntentCheckoutPayment(session, theme) {
        this.theme = new CFThemeBuilder().build();
        this.session = session;
        if (theme !== null) {
            this.theme = theme;
        }
    }
    CFUPIIntentCheckoutPayment.prototype.getSession = function () {
        return this.session;
    };
    CFUPIIntentCheckoutPayment.prototype.getTheme = function () {
        return this.theme;
    };
    return CFUPIIntentCheckoutPayment;
}());
var CFPaymentGateway = /** @class */ (function (_super) {
    tslib.__extends(CFPaymentGateway, _super);
    function CFPaymentGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CFPaymentGateway.prototype.doDropPayment = function (dropObject) { return core.cordova(this, "doDropPayment", {}, arguments); };
    CFPaymentGateway.prototype.doWebCheckoutPayment = function (webCheckoutPayment) { return core.cordova(this, "doWebCheckoutPayment", {}, arguments); };
    CFPaymentGateway.prototype.doUPIPayment = function (upiCheckoutPayment) { return core.cordova(this, "doUPIPayment", {}, arguments); };
    CFPaymentGateway.prototype.setCallback = function (cfCallback) { return core.cordova(this, "setCallback", {}, arguments); };
    CFPaymentGateway.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CFPaymentGateway, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CFPaymentGateway.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CFPaymentGateway });
    CFPaymentGateway.pluginName = "CFPaymentGateway";
    CFPaymentGateway.plugin = "cordova-plugin-cashfree-pg";
    CFPaymentGateway.pluginRef = "CFPaymentGateway";
    CFPaymentGateway.repo = "https://github.com/cashfree/cordova-plugin-cashfree";
    CFPaymentGateway.platforms = ["Android", "iOS"];
    CFPaymentGateway = tslib.__decorate([], CFPaymentGateway);
    return CFPaymentGateway;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CFPaymentGateway, decorators: [{
            type: i0.Injectable
        }], propDecorators: { doDropPayment: [], doWebCheckoutPayment: [], doUPIPayment: [], setCallback: [] } });

exports.CFDropCheckoutPayment = CFDropCheckoutPayment;
exports.CFPaymentComponentBuilder = CFPaymentComponentBuilder;
exports.CFPaymentGateway = CFPaymentGateway;
exports.CFSession = CFSession;
exports.CFThemeBuilder = CFThemeBuilder;
exports.CFUPIIntentCheckoutPayment = CFUPIIntentCheckoutPayment;
exports.CFWebCheckoutPayment = CFWebCheckoutPayment;
exports.CFWebThemeBuilder = CFWebThemeBuilder;
