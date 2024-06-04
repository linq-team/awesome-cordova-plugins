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
var CFPaymentGatewayOriginal = /** @class */ (function (_super) {
    __extends(CFPaymentGatewayOriginal, _super);
    function CFPaymentGatewayOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CFPaymentGatewayOriginal.prototype.doDropPayment = function (dropObject) { return cordova(this, "doDropPayment", {}, arguments); };
    CFPaymentGatewayOriginal.prototype.doWebCheckoutPayment = function (webCheckoutPayment) { return cordova(this, "doWebCheckoutPayment", {}, arguments); };
    CFPaymentGatewayOriginal.prototype.doUPIPayment = function (upiCheckoutPayment) { return cordova(this, "doUPIPayment", {}, arguments); };
    CFPaymentGatewayOriginal.prototype.setCallback = function (cfCallback) { return cordova(this, "setCallback", {}, arguments); };
    CFPaymentGatewayOriginal.pluginName = "CFPaymentGateway";
    CFPaymentGatewayOriginal.plugin = "cordova-plugin-cashfree-pg";
    CFPaymentGatewayOriginal.pluginRef = "CFPaymentGateway";
    CFPaymentGatewayOriginal.repo = "https://github.com/cashfree/cordova-plugin-cashfree";
    CFPaymentGatewayOriginal.platforms = ["Android", "iOS"];
    return CFPaymentGatewayOriginal;
}(AwesomeCordovaNativePlugin));
var CFPaymentGateway = new CFPaymentGatewayOriginal();
export { CFPaymentGateway };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FzaGZyZWUtcGcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixNQUFNLENBQU4sSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLDBDQUF5QixDQUFBO0lBQ3pCLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4Qjs7SUFPQyxtQkFBWSxTQUFpQixFQUFFLE9BQWUsRUFBRSxXQUEwQjtRQUN4RSxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFdBQVcsS0FBSyxJQUFJLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyRCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7b0JBekJIOzs7QUE0QkEsTUFBTSxDQUFOLElBQVksY0FRWDtBQVJELFdBQVksY0FBYztJQUN4QiwrQkFBYSxDQUFB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OztJQWtPRSxvQ0FDRSxPQUFrQixFQUNsQixLQUFxQjtRQUxOLFVBQUssR0FBWSxJQUFJLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBTzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCwrQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7cUNBbFBIOzs7O0lBZ1JzQyxvQ0FBMEI7Ozs7SUFNOUQsd0NBQWEsYUFBQyxVQUFpQztJQVMvQywrQ0FBb0IsYUFBQyxrQkFBd0M7SUFTN0QsdUNBQVksYUFBQyxrQkFBOEM7SUFTM0Qsc0NBQVcsYUFBQyxVQUFzQjs7Ozs7OzJCQWpUcEM7RUFnUnNDLDBCQUEwQjtTQUFuRCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuZXhwb3J0IGVudW0gQ0ZFbnZpcm9ubWVudCB7XG4gIFBST0RVQ1RJT04gPSAnUFJPRFVDVElPTicsXG4gIFNBTkRCT1ggPSAnU0FOREJPWCcsXG59XG5cbmV4cG9ydCBjbGFzcyBDRlNlc3Npb24ge1xuICBwYXltZW50X3Nlc3Npb25faWQ6IHN0cmluZztcbiAgb3JkZXJJRDogc3RyaW5nO1xuICBlbnZpcm9ubWVudDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNlc3Npb25JRDogc3RyaW5nLCBvcmRlcklEOiBzdHJpbmcsIGVudmlyb25tZW50OiBDRkVudmlyb25tZW50KSB7XG4gICAgaWYgKHNlc3Npb25JRCA9PT0gbnVsbCB8fCBzZXNzaW9uSUQudHJpbSgpID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXNzaW9uSUQgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuICAgIGlmIChvcmRlcklEID09PSBudWxsIHx8IG9yZGVySUQudHJpbSgpID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvcmRlcklEIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgIH1cbiAgICBpZiAoZW52aXJvbm1lbnQgPT09IG51bGwgfHwgZW52aXJvbm1lbnQudHJpbSgpID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdlbnZpcm9ubWVudCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICB9XG4gICAgdGhpcy5wYXltZW50X3Nlc3Npb25faWQgPSBzZXNzaW9uSUQ7XG4gICAgdGhpcy5vcmRlcklEID0gb3JkZXJJRDtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gQ0ZFbnZpcm9ubWVudFtlbnZpcm9ubWVudF07XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gQ0ZQYXltZW50TW9kZXMge1xuICBDQVJEID0gJ0NBUkQnLFxuICBVUEkgPSAnVVBJJyxcbiAgTkIgPSAnTkInLFxuICBXQUxMRVQgPSAnV0FMTEVUJyxcbiAgRU1JID0gJ0VNSScsXG4gIFBBWV9MQVRFUiA9ICdQQVlfTEFURVInLFxuICBQQVlQQUwgPSAnUEFZUEFMJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDRlBheW1lbnRDb21wb25lbnQge1xuICBoYXNoc2V0OiBTZXQ8Q0ZQYXltZW50TW9kZXM+O1xufVxuXG5leHBvcnQgY2xhc3MgQ0ZQYXltZW50Q29tcG9uZW50QnVpbGRlciB7XG4gIHByaXZhdGUgaGFzaHNldDogU2V0PENGUGF5bWVudE1vZGVzPiA9IG5ldyBTZXQ8Q0ZQYXltZW50TW9kZXM+KCk7XG5cbiAgcHJpdmF0ZSBlbmFibGVBbGxNb2RlcygpIHtcbiAgICB0aGlzLmhhc2hzZXQuYWRkKENGUGF5bWVudE1vZGVzLkNBUkQpO1xuICAgIHRoaXMuaGFzaHNldC5hZGQoQ0ZQYXltZW50TW9kZXMuVVBJKTtcbiAgICB0aGlzLmhhc2hzZXQuYWRkKENGUGF5bWVudE1vZGVzLk5CKTtcbiAgICB0aGlzLmhhc2hzZXQuYWRkKENGUGF5bWVudE1vZGVzLldBTExFVCk7XG4gICAgdGhpcy5oYXNoc2V0LmFkZChDRlBheW1lbnRNb2Rlcy5FTUkpO1xuICAgIHRoaXMuaGFzaHNldC5hZGQoQ0ZQYXltZW50TW9kZXMuUEFZX0xBVEVSKTtcbiAgICB0aGlzLmhhc2hzZXQuYWRkKENGUGF5bWVudE1vZGVzLlBBWVBBTCk7XG4gIH1cblxuICBidWlsZCgpOiBDRlBheW1lbnRDb21wb25lbnQge1xuICAgIGlmICh0aGlzLmhhc2hzZXQuc2l6ZSA9PT0gMCkge1xuICAgICAgdGhpcy5lbmFibGVBbGxNb2RlcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaGFzaHNldDogdGhpcy5oYXNoc2V0LFxuICAgIH07XG4gIH1cblxuICBhZGQoY2ZQYXltZW50TW9kZXM6IENGUGF5bWVudE1vZGVzKSB7XG4gICAgdGhpcy5oYXNoc2V0LmFkZChjZlBheW1lbnRNb2Rlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDRlRoZW1lIHtcbiAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBuYXZpZ2F0aW9uQmFyVGV4dENvbG9yOiBzdHJpbmc7XG4gIGJ1dHRvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBidXR0b25UZXh0Q29sb3I6IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIHByaW1hcnlUZXh0Q29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5VGV4dENvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDRlRoZW1lQnVpbGRlciB7XG4gIHByaXZhdGUgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciA9ICcjNkEzRkQzJztcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uQmFyVGV4dENvbG9yID0gJyNGRkZGRkYnO1xuICBwcml2YXRlIGJ1dHRvbkJhY2tncm91bmRDb2xvciA9ICcjNkEzRkQzJztcbiAgcHJpdmF0ZSBidXR0b25UZXh0Q29sb3IgPSAnI0ZGRkZGRic7XG4gIHByaXZhdGUgYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICBwcml2YXRlIHByaW1hcnlUZXh0Q29sb3IgPSAnIzExMzg1Yic7XG4gIHByaXZhdGUgc2Vjb25kYXJ5VGV4dENvbG9yID0gJyM4MDgwODAnO1xuXG4gIHNldE5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TmF2aWdhdGlvbkJhclRleHRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uQmFyVGV4dENvbG9yID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRCdXR0b25CYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYnV0dG9uQmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRCdXR0b25UZXh0Q29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYnV0dG9uVGV4dENvbG9yID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRQcmltYXJ5VGV4dENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByaW1hcnlUZXh0Q29sb3IgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFNlY29uZGFyeVRleHRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWNvbmRhcnlUZXh0Q29sb3IgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCk6IENGVGhlbWUge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiB0aGlzLm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dENvbG9yOiB0aGlzLm5hdmlnYXRpb25CYXJUZXh0Q29sb3IsXG4gICAgICBidXR0b25CYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYnV0dG9uQmFja2dyb3VuZENvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJ1dHRvblRleHRDb2xvcjogdGhpcy5idXR0b25UZXh0Q29sb3IsXG4gICAgICBwcmltYXJ5VGV4dENvbG9yOiB0aGlzLnByaW1hcnlUZXh0Q29sb3IsXG4gICAgICBzZWNvbmRhcnlUZXh0Q29sb3I6IHRoaXMuc2Vjb25kYXJ5VGV4dENvbG9yLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ0ZXZWJUaGVtZSA9IENGVGhlbWU7XG5cbmV4cG9ydCBjbGFzcyBDRldlYlRoZW1lQnVpbGRlciB7XG4gIHByaXZhdGUgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciA9ICcjNkEzRkQzJztcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uQmFyVGV4dENvbG9yID0gJyNGRkZGRkYnO1xuXG4gIHNldE5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TmF2aWdhdGlvbkJhclRleHRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uQmFyVGV4dENvbG9yID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpOiBDRldlYlRoZW1lIHtcbiAgICBjb25zdCBjZlRoZW1lID0gbmV3IENGVGhlbWVCdWlsZGVyKCkuYnVpbGQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgYnV0dG9uQmFja2dyb3VuZENvbG9yOiBjZlRoZW1lLmJ1dHRvbkJhY2tncm91bmRDb2xvcixcbiAgICAgIGJ1dHRvblRleHRDb2xvcjogY2ZUaGVtZS5idXR0b25UZXh0Q29sb3IsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiB0aGlzLm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dENvbG9yOiB0aGlzLm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBzZWNvbmRhcnlUZXh0Q29sb3I6IGNmVGhlbWUuc2Vjb25kYXJ5VGV4dENvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjZlRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHByaW1hcnlUZXh0Q29sb3I6IGNmVGhlbWUuYnV0dG9uVGV4dENvbG9yLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGVja291dFBheW1lbnQge1xuICB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDRkRyb3BDaGVja291dFBheW1lbnQgaW1wbGVtZW50cyBDaGVja291dFBheW1lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IHNlc3Npb246IENGU2Vzc2lvbjtcbiAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRzOiBzdHJpbmdbXSA9IEFycmF5LmZyb20obmV3IENGUGF5bWVudENvbXBvbmVudEJ1aWxkZXIoKS5idWlsZCgpLmhhc2hzZXQpO1xuICBwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBDRlRoZW1lID0gbmV3IENGVGhlbWVCdWlsZGVyKCkuYnVpbGQoKTtcbiAgdmVyc2lvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNlc3Npb246IENGU2Vzc2lvbiwgY29tcG9uZW50czogQ0ZQYXltZW50Q29tcG9uZW50IHwgbnVsbCwgdGhlbWU6IENGVGhlbWUgfCBudWxsKSB7XG4gICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICBpZiAoY29tcG9uZW50cyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb21wb25lbnRzID0gQXJyYXkuZnJvbShjb21wb25lbnRzLmhhc2hzZXQpO1xuICAgIH1cbiAgICBpZiAodGhlbWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICB9XG4gIH1cblxuICBnZXRTZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb247XG4gIH1cblxuICBnZXRDb21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHM7XG4gIH1cblxuICBnZXRUaGVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ0ZXZWJDaGVja291dFBheW1lbnQgaW1wbGVtZW50cyBDaGVja291dFBheW1lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IHNlc3Npb246IENGU2Vzc2lvbjtcbiAgcHJpdmF0ZSByZWFkb25seSB0aGVtZTogQ0ZXZWJUaGVtZSA9IG5ldyBDRldlYlRoZW1lQnVpbGRlcigpLmJ1aWxkKCk7XG4gIHZlcnNpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihzZXNzaW9uOiBDRlNlc3Npb24sIHRoZW1lOiBDRldlYlRoZW1lIHwgbnVsbCkge1xuICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgaWYgKHRoZW1lICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uO1xuICB9XG5cbiAgZ2V0VGhlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENGVVBJSW50ZW50Q2hlY2tvdXRQYXltZW50IGltcGxlbWVudHMgQ2hlY2tvdXRQYXltZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzZXNzaW9uOiBDRlNlc3Npb247XG4gIHByaXZhdGUgcmVhZG9ubHkgdGhlbWU6IENGVGhlbWUgPSBuZXcgQ0ZUaGVtZUJ1aWxkZXIoKS5idWlsZCgpO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2Vzc2lvbjogQ0ZTZXNzaW9uLFxuICAgIHRoZW1lOiBDRlRoZW1lIHwgbnVsbFxuICApIHtcbiAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgIGlmICh0aGVtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbjtcbiAgfVxuXG4gIGdldFRoZW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lO1xuICB9XG59XG5cbmludGVyZmFjZSBDRlJlc3VsdCB7XG4gIG9yZGVySUQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENGRXJyb3Ige1xuICBvcmRlcklEOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIENGUmVzdWx0IHtcbiAgb3JkZXJJRDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDRkNhbGxiYWNrIHtcbiAgb25WZXJpZnk6IChyZXN1bHQ6IENGUmVzdWx0KSA9PiB2b2lkO1xuICBvbkVycm9yOiAoZXJyb3I6IENGRXJyb3IpID0+IHZvaWQ7XG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ0ZQYXltZW50R2F0ZXdheScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhc2hmcmVlLXBnJyxcbiAgcGx1Z2luUmVmOiAnQ0ZQYXltZW50R2F0ZXdheScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2FzaGZyZWUvY29yZG92YS1wbHVnaW4tY2FzaGZyZWUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ0ZQYXltZW50R2F0ZXdheSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluaXRpYXRlIERyb3AgUGF5bWVudC5cbiAgICogQHBhcmFtIHtDRkRyb3BDaGVja291dFBheW1lbnR9IFtkcm9wT2JqZWN0XSBkcm9wUGF5bWVudE9iamVjdCBpbmZvcm1hdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkb0Ryb3BQYXltZW50KGRyb3BPYmplY3Q6IENGRHJvcENoZWNrb3V0UGF5bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSBXZWIgQ2hlY2tvdXQgUGF5bWVudC5cbiAgICogQHBhcmFtIHtDRldlYkNoZWNrb3V0UGF5bWVudH0gW3dlYkNoZWNrb3V0UGF5bWVudF0gd2ViQ2hlY2tvdXRQYXltZW50T2JqZWN0IGluZm9ybWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvV2ViQ2hlY2tvdXRQYXltZW50KHdlYkNoZWNrb3V0UGF5bWVudDogQ0ZXZWJDaGVja291dFBheW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhdGUgVVBJIENoZWNrb3V0IFBheW1lbnQuXG4gICAqIEBwYXJhbSB7Q0ZVUElJbnRlbnRDaGVja291dFBheW1lbnR9IFt1cGlDaGVja291dFBheW1lbnRdIHdlYkNoZWNrb3V0UGF5bWVudE9iamVjdCBpbmZvcm1hdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkb1VQSVBheW1lbnQodXBpQ2hlY2tvdXRQYXltZW50OiBDRlVQSUludGVudENoZWNrb3V0UGF5bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgQ2FsbGJhY2suXG4gICAqIEBwYXJhbSB7Q0ZDYWxsYmFja30gW2NmQ2FsbGJhY2tdIGNhbGxiYWNrcyBmb3IgcGF5bWVudC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q2FsbGJhY2soY2ZDYWxsYmFjazogQ0ZDYWxsYmFjaykge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19