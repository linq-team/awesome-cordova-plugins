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
var UptimeOriginal = /** @class */ (function (_super) {
    __extends(UptimeOriginal, _super);
    function UptimeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UptimeOriginal.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    UptimeOriginal.pluginName = "Uptime";
    UptimeOriginal.plugin = "cordova-plugin-uptime";
    UptimeOriginal.pluginRef = "Uptime";
    UptimeOriginal.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    UptimeOriginal.platforms = ["Android", "iOS"];
    return UptimeOriginal;
}(AwesomeCordovaNativePlugin));
var Uptime = new UptimeOriginal();
export { Uptime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdXB0aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNEJoRSwwQkFBMEI7Ozs7SUFRcEQsMEJBQVMsYUFBQyxnQkFBeUI7Ozs7OztpQkFyQ3JDO0VBNkI0QiwwQkFBMEI7U0FBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgVXB0aW1lXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIHRoZSB0aW1lIHNwZW50IGluIG1pbGxpc2Vjb25kcyBzaW5jZSBib290ICh1cHRpbWUpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBVcHRpbWUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdXB0aW1lL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1cHRpbWU6IFVwdGltZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy51cHRpbWUuZ2V0VXB0aW1lKGluY2x1ZGVEZWVwU2xlZXApXG4gKiAgIC50aGVuKHVwdGltZSA9PiBjb25zb2xlLmxvZyh1cHRpbWUpKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdVcHRpbWUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxuICBwbHVnaW5SZWY6ICdVcHRpbWUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3MxbHZpdS9jb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXB0aW1lIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZXR1cm4gc3lzdGVtIHVwdGltZVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVEZWVwU2xlZXAgU2V0IHRvIHRydWUgdG8gaW5jbHVkZSBzeXN0ZW0gZGVlcCBzbGVlcFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJldHVybiB0aGUgdXB0aW1lIGluIG1pbGxpc2Vjb25kc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRVcHRpbWUoaW5jbHVkZURlZXBTbGVlcDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=