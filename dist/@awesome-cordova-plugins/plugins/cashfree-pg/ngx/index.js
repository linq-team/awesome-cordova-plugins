import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
export var CFEnvironment;
(function (CFEnvironment) {
    CFEnvironment["PRODUCTION"] = "PRODUCTION";
    CFEnvironment["SANDBOX"] = "SANDBOX";
})(CFEnvironment || (CFEnvironment = {}));
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
        this.environment = CFEnvironment[environment];
    }
    return CFSession;
}());
export { CFSession };
export var CFPaymentModes;
(function (CFPaymentModes) {
    CFPaymentModes["CARD"] = "CARD";
    CFPaymentModes["UPI"] = "UPI";
    CFPaymentModes["NB"] = "NB";
    CFPaymentModes["WALLET"] = "WALLET";
    CFPaymentModes["EMI"] = "EMI";
    CFPaymentModes["PAY_LATER"] = "PAY_LATER";
    CFPaymentModes["PAYPAL"] = "PAYPAL";
})(CFPaymentModes || (CFPaymentModes = {}));
var CFPaymentComponentBuilder = /** @class */ (function () {
    function CFPaymentComponentBuilder() {
        this.hashset = new Set();
    }
    CFPaymentComponentBuilder.prototype.enableAllModes = function () {
        this.hashset.add(CFPaymentModes.CARD);
        this.hashset.add(CFPaymentModes.UPI);
        this.hashset.add(CFPaymentModes.NB);
        this.hashset.add(CFPaymentModes.WALLET);
        this.hashset.add(CFPaymentModes.EMI);
        this.hashset.add(CFPaymentModes.PAY_LATER);
        this.hashset.add(CFPaymentModes.PAYPAL);
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
export { CFPaymentComponentBuilder };
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
export { CFThemeBuilder };
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
export { CFWebThemeBuilder };
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
export { CFDropCheckoutPayment };
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
export { CFWebCheckoutPayment };
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
export { CFUPIIntentCheckoutPayment };
var CFPaymentGateway = /** @class */ (function (_super) {
    __extends(CFPaymentGateway, _super);
    function CFPaymentGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CFPaymentGateway.prototype.doDropPayment = function (dropObject) { return cordova(this, "doDropPayment", {}, arguments); };
    CFPaymentGateway.prototype.doWebCheckoutPayment = function (webCheckoutPayment) { return cordova(this, "doWebCheckoutPayment", {}, arguments); };
    CFPaymentGateway.prototype.doUPIPayment = function (upiCheckoutPayment) { return cordova(this, "doUPIPayment", {}, arguments); };
    CFPaymentGateway.prototype.setCallback = function (cfCallback) { return cordova(this, "setCallback", {}, arguments); };
    CFPaymentGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CFPaymentGateway, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    CFPaymentGateway.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CFPaymentGateway });
    CFPaymentGateway.pluginName = "CFPaymentGateway";
    CFPaymentGateway.plugin = "cordova-plugin-cashfree-pg";
    CFPaymentGateway.pluginRef = "CFPaymentGateway";
    CFPaymentGateway.repo = "https://github.com/cashfree/cordova-plugin-cashfree";
    CFPaymentGateway.platforms = ["Android", "iOS"];
    CFPaymentGateway = __decorate([], CFPaymentGateway);
    return CFPaymentGateway;
}(AwesomeCordovaNativePlugin));
export { CFPaymentGateway };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CFPaymentGateway, decorators: [{
            type: Injectable
        }], propDecorators: { doDropPayment: [], doWebCheckoutPayment: [], doUPIPayment: [], setCallback: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FzaGZyZWUtcGcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0FBQzVGLE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsMENBQXlCLENBQUE7SUFDekIsb0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCOztJQU9DLG1CQUFZLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFdBQTBCO1FBQ3hFLElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pELE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztvQkF6Qkg7OztBQTRCQSxNQUFNLENBQU4sSUFBWSxj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LENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7K0JBMU5IOzs7O0lBa09FLG9DQUNFLE9BQWtCLEVBQ2xCLEtBQXFCO1FBTE4sVUFBSyxHQUFZLElBQUksY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFPN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELCtDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztxQ0FsUEg7Ozs7SUFnUnNDLG9DQUEwQjs7OztJQU05RCx3Q0FBYSxhQUFDLFVBQWlDO0lBUy9DLCtDQUFvQixhQUFDLGtCQUF3QztJQVM3RCx1Q0FBWSxhQUFDLGtCQUE4QztJQVMzRCxzQ0FBVyxhQUFDLFVBQXNCO2tIQWpDdkIsZ0JBQWdCO3NIQUFoQixnQkFBZ0I7Ozs7OztJQUFoQixnQkFBZ0Isa0JBQWhCLGdCQUFnQjsyQkFoUjdCO0VBZ1JzQywwQkFBMEI7U0FBbkQsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVU7OEJBT1QsYUFBYSxNQVNiLG9CQUFvQixNQVNwQixZQUFZLE1BU1osV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5leHBvcnQgZW51bSBDRkVudmlyb25tZW50IHtcbiAgUFJPRFVDVElPTiA9ICdQUk9EVUNUSU9OJyxcbiAgU0FOREJPWCA9ICdTQU5EQk9YJyxcbn1cblxuZXhwb3J0IGNsYXNzIENGU2Vzc2lvbiB7XG4gIHBheW1lbnRfc2Vzc2lvbl9pZDogc3RyaW5nO1xuICBvcmRlcklEOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc2Vzc2lvbklEOiBzdHJpbmcsIG9yZGVySUQ6IHN0cmluZywgZW52aXJvbm1lbnQ6IENGRW52aXJvbm1lbnQpIHtcbiAgICBpZiAoc2Vzc2lvbklEID09PSBudWxsIHx8IHNlc3Npb25JRC50cmltKCkgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Nlc3Npb25JRCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICB9XG4gICAgaWYgKG9yZGVySUQgPT09IG51bGwgfHwgb3JkZXJJRC50cmltKCkgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29yZGVySUQgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuICAgIGlmIChlbnZpcm9ubWVudCA9PT0gbnVsbCB8fCBlbnZpcm9ubWVudC50cmltKCkgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vudmlyb25tZW50IGNhbm5vdCBiZSBlbXB0eScpO1xuICAgIH1cbiAgICB0aGlzLnBheW1lbnRfc2Vzc2lvbl9pZCA9IHNlc3Npb25JRDtcbiAgICB0aGlzLm9yZGVySUQgPSBvcmRlcklEO1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBDRkVudmlyb25tZW50W2Vudmlyb25tZW50XTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBDRlBheW1lbnRNb2RlcyB7XG4gIENBUkQgPSAnQ0FSRCcsXG4gIFVQSSA9ICdVUEknLFxuICBOQiA9ICdOQicsXG4gIFdBTExFVCA9ICdXQUxMRVQnLFxuICBFTUkgPSAnRU1JJyxcbiAgUEFZX0xBVEVSID0gJ1BBWV9MQVRFUicsXG4gIFBBWVBBTCA9ICdQQVlQQUwnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENGUGF5bWVudENvbXBvbmVudCB7XG4gIGhhc2hzZXQ6IFNldDxDRlBheW1lbnRNb2Rlcz47XG59XG5cbmV4cG9ydCBjbGFzcyBDRlBheW1lbnRDb21wb25lbnRCdWlsZGVyIHtcbiAgcHJpdmF0ZSBoYXNoc2V0OiBTZXQ8Q0ZQYXltZW50TW9kZXM+ID0gbmV3IFNldDxDRlBheW1lbnRNb2Rlcz4oKTtcblxuICBwcml2YXRlIGVuYWJsZUFsbE1vZGVzKCkge1xuICAgIHRoaXMuaGFzaHNldC5hZGQoQ0ZQYXltZW50TW9kZXMuQ0FSRCk7XG4gICAgdGhpcy5oYXNoc2V0LmFkZChDRlBheW1lbnRNb2Rlcy5VUEkpO1xuICAgIHRoaXMuaGFzaHNldC5hZGQoQ0ZQYXltZW50TW9kZXMuTkIpO1xuICAgIHRoaXMuaGFzaHNldC5hZGQoQ0ZQYXltZW50TW9kZXMuV0FMTEVUKTtcbiAgICB0aGlzLmhhc2hzZXQuYWRkKENGUGF5bWVudE1vZGVzLkVNSSk7XG4gICAgdGhpcy5oYXNoc2V0LmFkZChDRlBheW1lbnRNb2Rlcy5QQVlfTEFURVIpO1xuICAgIHRoaXMuaGFzaHNldC5hZGQoQ0ZQYXltZW50TW9kZXMuUEFZUEFMKTtcbiAgfVxuXG4gIGJ1aWxkKCk6IENGUGF5bWVudENvbXBvbmVudCB7XG4gICAgaWYgKHRoaXMuaGFzaHNldC5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLmVuYWJsZUFsbE1vZGVzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBoYXNoc2V0OiB0aGlzLmhhc2hzZXQsXG4gICAgfTtcbiAgfVxuXG4gIGFkZChjZlBheW1lbnRNb2RlczogQ0ZQYXltZW50TW9kZXMpIHtcbiAgICB0aGlzLmhhc2hzZXQuYWRkKGNmUGF5bWVudE1vZGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENGVGhlbWUge1xuICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIG5hdmlnYXRpb25CYXJUZXh0Q29sb3I6IHN0cmluZztcbiAgYnV0dG9uQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIGJ1dHRvblRleHRDb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgcHJpbWFyeVRleHRDb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlUZXh0Q29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENGVGhlbWVCdWlsZGVyIHtcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yID0gJyM2QTNGRDMnO1xuICBwcml2YXRlIG5hdmlnYXRpb25CYXJUZXh0Q29sb3IgPSAnI0ZGRkZGRic7XG4gIHByaXZhdGUgYnV0dG9uQmFja2dyb3VuZENvbG9yID0gJyM2QTNGRDMnO1xuICBwcml2YXRlIGJ1dHRvblRleHRDb2xvciA9ICcjRkZGRkZGJztcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRkZGRic7XG4gIHByaXZhdGUgcHJpbWFyeVRleHRDb2xvciA9ICcjMTEzODViJztcbiAgcHJpdmF0ZSBzZWNvbmRhcnlUZXh0Q29sb3IgPSAnIzgwODA4MCc7XG5cbiAgc2V0TmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXROYXZpZ2F0aW9uQmFyVGV4dENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25CYXJUZXh0Q29sb3IgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEJ1dHRvbkJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5idXR0b25CYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEJ1dHRvblRleHRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5idXR0b25UZXh0Q29sb3IgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFByaW1hcnlUZXh0Q29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucHJpbWFyeVRleHRDb2xvciA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U2Vjb25kYXJ5VGV4dENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlY29uZGFyeVRleHRDb2xvciA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKTogQ0ZUaGVtZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IHRoaXMubmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcixcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0Q29sb3I6IHRoaXMubmF2aWdhdGlvbkJhclRleHRDb2xvcixcbiAgICAgIGJ1dHRvbkJhY2tncm91bmRDb2xvcjogdGhpcy5idXR0b25CYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYnV0dG9uVGV4dENvbG9yOiB0aGlzLmJ1dHRvblRleHRDb2xvcixcbiAgICAgIHByaW1hcnlUZXh0Q29sb3I6IHRoaXMucHJpbWFyeVRleHRDb2xvcixcbiAgICAgIHNlY29uZGFyeVRleHRDb2xvcjogdGhpcy5zZWNvbmRhcnlUZXh0Q29sb3IsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDRldlYlRoZW1lID0gQ0ZUaGVtZTtcblxuZXhwb3J0IGNsYXNzIENGV2ViVGhlbWVCdWlsZGVyIHtcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yID0gJyM2QTNGRDMnO1xuICBwcml2YXRlIG5hdmlnYXRpb25CYXJUZXh0Q29sb3IgPSAnI0ZGRkZGRic7XG5cbiAgc2V0TmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXROYXZpZ2F0aW9uQmFyVGV4dENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25CYXJUZXh0Q29sb3IgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCk6IENGV2ViVGhlbWUge1xuICAgIGNvbnN0IGNmVGhlbWUgPSBuZXcgQ0ZUaGVtZUJ1aWxkZXIoKS5idWlsZCgpO1xuICAgIHJldHVybiB7XG4gICAgICBidXR0b25CYWNrZ3JvdW5kQ29sb3I6IGNmVGhlbWUuYnV0dG9uQmFja2dyb3VuZENvbG9yLFxuICAgICAgYnV0dG9uVGV4dENvbG9yOiBjZlRoZW1lLmJ1dHRvblRleHRDb2xvcixcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IHRoaXMubmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcixcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0Q29sb3I6IHRoaXMubmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcixcbiAgICAgIHNlY29uZGFyeVRleHRDb2xvcjogY2ZUaGVtZS5zZWNvbmRhcnlUZXh0Q29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNmVGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgcHJpbWFyeVRleHRDb2xvcjogY2ZUaGVtZS5idXR0b25UZXh0Q29sb3IsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrb3V0UGF5bWVudCB7XG4gIHZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENGRHJvcENoZWNrb3V0UGF5bWVudCBpbXBsZW1lbnRzIENoZWNrb3V0UGF5bWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2Vzc2lvbjogQ0ZTZXNzaW9uO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudHM6IHN0cmluZ1tdID0gQXJyYXkuZnJvbShuZXcgQ0ZQYXltZW50Q29tcG9uZW50QnVpbGRlcigpLmJ1aWxkKCkuaGFzaHNldCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGhlbWU6IENGVGhlbWUgPSBuZXcgQ0ZUaGVtZUJ1aWxkZXIoKS5idWlsZCgpO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc2Vzc2lvbjogQ0ZTZXNzaW9uLCBjb21wb25lbnRzOiBDRlBheW1lbnRDb21wb25lbnQgfCBudWxsLCB0aGVtZTogQ0ZUaGVtZSB8IG51bGwpIHtcbiAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgIGlmIChjb21wb25lbnRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSBBcnJheS5mcm9tKGNvbXBvbmVudHMuaGFzaHNldCk7XG4gICAgfVxuICAgIGlmICh0aGVtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbjtcbiAgfVxuXG4gIGdldENvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cztcbiAgfVxuXG4gIGdldFRoZW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDRldlYkNoZWNrb3V0UGF5bWVudCBpbXBsZW1lbnRzIENoZWNrb3V0UGF5bWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2Vzc2lvbjogQ0ZTZXNzaW9uO1xuICBwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBDRldlYlRoZW1lID0gbmV3IENGV2ViVGhlbWVCdWlsZGVyKCkuYnVpbGQoKTtcbiAgdmVyc2lvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNlc3Npb246IENGU2Vzc2lvbiwgdGhlbWU6IENGV2ViVGhlbWUgfCBudWxsKSB7XG4gICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICBpZiAodGhlbWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICB9XG4gIH1cblxuICBnZXRTZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb247XG4gIH1cblxuICBnZXRUaGVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ0ZVUElJbnRlbnRDaGVja291dFBheW1lbnQgaW1wbGVtZW50cyBDaGVja291dFBheW1lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IHNlc3Npb246IENGU2Vzc2lvbjtcbiAgcHJpdmF0ZSByZWFkb25seSB0aGVtZTogQ0ZUaGVtZSA9IG5ldyBDRlRoZW1lQnVpbGRlcigpLmJ1aWxkKCk7XG4gIHZlcnNpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzZXNzaW9uOiBDRlNlc3Npb24sXG4gICAgdGhlbWU6IENGVGhlbWUgfCBudWxsXG4gICkge1xuICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgaWYgKHRoZW1lICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uO1xuICB9XG5cbiAgZ2V0VGhlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWU7XG4gIH1cbn1cblxuaW50ZXJmYWNlIENGUmVzdWx0IHtcbiAgb3JkZXJJRDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ0ZFcnJvciB7XG4gIG9yZGVySUQ6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgQ0ZSZXN1bHQge1xuICBvcmRlcklEOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENGQ2FsbGJhY2sge1xuICBvblZlcmlmeTogKHJlc3VsdDogQ0ZSZXN1bHQpID0+IHZvaWQ7XG4gIG9uRXJyb3I6IChlcnJvcjogQ0ZFcnJvcikgPT4gdm9pZDtcbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDRlBheW1lbnRHYXRld2F5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FzaGZyZWUtcGcnLFxuICBwbHVnaW5SZWY6ICdDRlBheW1lbnRHYXRld2F5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXNoZnJlZS9jb3Jkb3ZhLXBsdWdpbi1jYXNoZnJlZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDRlBheW1lbnRHYXRld2F5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdGlhdGUgRHJvcCBQYXltZW50LlxuICAgKiBAcGFyYW0ge0NGRHJvcENoZWNrb3V0UGF5bWVudH0gW2Ryb3BPYmplY3RdIGRyb3BQYXltZW50T2JqZWN0IGluZm9ybWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvRHJvcFBheW1lbnQoZHJvcE9iamVjdDogQ0ZEcm9wQ2hlY2tvdXRQYXltZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlIFdlYiBDaGVja291dCBQYXltZW50LlxuICAgKiBAcGFyYW0ge0NGV2ViQ2hlY2tvdXRQYXltZW50fSBbd2ViQ2hlY2tvdXRQYXltZW50XSB3ZWJDaGVja291dFBheW1lbnRPYmplY3QgaW5mb3JtYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZG9XZWJDaGVja291dFBheW1lbnQod2ViQ2hlY2tvdXRQYXltZW50OiBDRldlYkNoZWNrb3V0UGF5bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSBVUEkgQ2hlY2tvdXQgUGF5bWVudC5cbiAgICogQHBhcmFtIHtDRlVQSUludGVudENoZWNrb3V0UGF5bWVudH0gW3VwaUNoZWNrb3V0UGF5bWVudF0gd2ViQ2hlY2tvdXRQYXltZW50T2JqZWN0IGluZm9ybWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvVVBJUGF5bWVudCh1cGlDaGVja291dFBheW1lbnQ6IENGVVBJSW50ZW50Q2hlY2tvdXRQYXltZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBDYWxsYmFjay5cbiAgICogQHBhcmFtIHtDRkNhbGxiYWNrfSBbY2ZDYWxsYmFja10gY2FsbGJhY2tzIGZvciBwYXltZW50LlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRDYWxsYmFjayhjZkNhbGxiYWNrOiBDRkNhbGxiYWNrKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=