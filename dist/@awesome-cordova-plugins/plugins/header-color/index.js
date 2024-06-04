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
var HeaderColorOriginal = /** @class */ (function (_super) {
    __extends(HeaderColorOriginal, _super);
    function HeaderColorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColorOriginal.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColorOriginal.pluginName = "HeaderColor";
    HeaderColorOriginal.plugin = "cordova-plugin-headercolor";
    HeaderColorOriginal.pluginRef = "plugins.headerColor";
    HeaderColorOriginal.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColorOriginal.platforms = ["Android"];
    return HeaderColorOriginal;
}(AwesomeCordovaNativePlugin));
var HeaderColor = new HeaderColorOriginal();
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaGVhZGVyLWNvbG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBeUIzRCwrQkFBMEI7Ozs7SUFZekQsMEJBQUksYUFBQyxLQUFhOzs7Ozs7c0JBdENwQjtFQTBCaUMsMEJBQTBCO1NBQTlDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEhlYWRlciBDb2xvclxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBjaGFuZ2UgY29sb3Igb2YgaGVhZGVyIGluIEFuZHJvaWQgTXVsdGl0YXNrIFZpZXdcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSGVhZGVyQ29sb3IgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaGVhZGVyLWNvbG9yL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJDb2xvcjogSGVhZGVyQ29sb3IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaGVhZGVyQ29sb3IudGludCgnI2JlY2IyOScpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSGVhZGVyQ29sb3InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oZWFkZXJjb2xvcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuaGVhZGVyQ29sb3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbWxvcHJvZC9jb3Jkb3ZhLXBsdWdpbi1oZWFkZXJjb2xvcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbG9yIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2V0IGEgY29sb3IgdG8gdGhlIHRhc2sgaGVhZGVyXG4gICAqXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfSBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZScsXG4gIH0pXG4gIHRpbnQoY29sb3I6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=