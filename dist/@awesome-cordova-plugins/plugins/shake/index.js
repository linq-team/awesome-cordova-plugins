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
import { Observable } from 'rxjs';
var ShakeOriginal = /** @class */ (function (_super) {
    __extends(ShakeOriginal, _super);
    function ShakeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShakeOriginal.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    ShakeOriginal.pluginName = "Shake";
    ShakeOriginal.plugin = "cordova-plugin-shake";
    ShakeOriginal.pluginRef = "shake";
    ShakeOriginal.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    ShakeOriginal.platforms = ["iOS"];
    return ShakeOriginal;
}(AwesomeCordovaNativePlugin));
var Shake = new ShakeOriginal();
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2hha2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTJCUCx5QkFBMEI7Ozs7SUFhbkQsMEJBQVUsYUFBQyxXQUFvQjs7Ozs7O2dCQTFDakM7RUE2QjJCLDBCQUEwQjtTQUF4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKlxuICogQG5hbWUgU2hha2VcbiAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHNoYWtlIGdlc3R1cmVcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2hha2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2hha2Uvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYWtlOiBTaGFrZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3Qgd2F0Y2ggPSB0aGlzLnNoYWtlLnN0YXJ0V2F0Y2goNjApLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgIC8vIGRvIHNvbWV0aGluZ1xuICogICB9KTtcbiAqXG4gKiB3YXRjaC51bnN1YnNjcmliZSgpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2hha2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaGFrZScsXG4gIHBsdWdpblJlZjogJ3NoYWtlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sZWVjcm9zc2xleS9jb3Jkb3ZhLXBsdWdpbi1zaGFrZScsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2hha2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXYXRjaCBmb3Igc2hha2UgZ2VzdHVyZVxuICAgKlxuICAgKiBAcGFyYW0gc2Vuc2l0aXZpdHkge251bWJlcn0gT3B0aW9uYWwgc2Vuc2l0aXZpdHkgcGFyYW1ldGVyLiBEZWZhdWx0cyB0byA0MFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BXYXRjaCcsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHN0YXJ0V2F0Y2goc2Vuc2l0aXZpdHk/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19