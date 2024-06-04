import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var PlayInstallReferrer = /** @class */ (function (_super) {
    __extends(PlayInstallReferrer, _super);
    function PlayInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrer.prototype.getReferrer = function () { return cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PlayInstallReferrer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    PlayInstallReferrer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PlayInstallReferrer });
    PlayInstallReferrer.pluginName = "PlayInstallReferrer";
    PlayInstallReferrer.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrer.pluginRef = "installReferrer";
    PlayInstallReferrer.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrer.platforms = ["Android"];
    PlayInstallReferrer = __decorate([], PlayInstallReferrer);
    return PlayInstallReferrer;
}(AwesomeCordovaNativePlugin));
export { PlayInstallReferrer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PlayInstallReferrer, decorators: [{
            type: Injectable
        }], propDecorators: { getReferrer: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGxheS1pbnN0YWxsLXJlZmVycmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFVbkQsdUNBQTBCOzs7O0lBRWpFLHlDQUFXO3FIQUZBLG1CQUFtQjt5SEFBbkIsbUJBQW1COzs7Ozs7SUFBbkIsbUJBQW1CLGtCQUFuQixtQkFBbUI7OEJBWGhDO0VBV3lDLDBCQUEwQjtTQUF0RCxtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs4QkFHVCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQbGF5SW5zdGFsbFJlZmVycmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcGxheS1pbnN0YWxscmVmZXJyZXInLFxuICBwbHVnaW5SZWY6ICdpbnN0YWxsUmVmZXJyZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3N3YXlhbmdqaXQvY29yZG92YS1wbHVnaW4tcGxheS1pbnN0YWxscmVmZXJyZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbGF5SW5zdGFsbFJlZmVycmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIGdldFJlZmVycmVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=