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
var PlayInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(PlayInstallReferrerOriginal, _super);
    function PlayInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrerOriginal.prototype.getReferrer = function () { return cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrerOriginal.pluginName = "PlayInstallReferrer";
    PlayInstallReferrerOriginal.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrerOriginal.pluginRef = "installReferrer";
    PlayInstallReferrerOriginal.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrerOriginal.platforms = ["Android"];
    return PlayInstallReferrerOriginal;
}(AwesomeCordovaNativePlugin));
var PlayInstallReferrer = new PlayInstallReferrerOriginal();
export { PlayInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGxheS1pbnN0YWxsLXJlZmVycmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBVW5ELHVDQUEwQjs7OztJQUVqRSx5Q0FBVzs7Ozs7OzhCQWJiO0VBV3lDLDBCQUEwQjtTQUF0RCxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1BsYXlJbnN0YWxsUmVmZXJyZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wbGF5LWluc3RhbGxyZWZlcnJlcicsXG4gIHBsdWdpblJlZjogJ2luc3RhbGxSZWZlcnJlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc3dheWFuZ2ppdC9jb3Jkb3ZhLXBsdWdpbi1wbGF5LWluc3RhbGxyZWZlcnJlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYXlJbnN0YWxsUmVmZXJyZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmVmZXJyZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==