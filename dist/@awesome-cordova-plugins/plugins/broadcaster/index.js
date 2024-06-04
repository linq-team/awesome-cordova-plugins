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
var BroadcasterOriginal = /** @class */ (function (_super) {
    __extends(BroadcasterOriginal, _super);
    function BroadcasterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BroadcasterOriginal.prototype.addEventListener = function (eventName, isGlobal) {
        if (isGlobal === void 0) { isGlobal = false; }
        return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments);
    };
    BroadcasterOriginal.prototype.fireNativeEvent = function (eventName, isGlobalOrEventData, data) { return cordova(this, "fireNativeEvent", {}, arguments); };
    BroadcasterOriginal.pluginName = "Broadcaster";
    BroadcasterOriginal.plugin = "cordova-plugin-broadcaster";
    BroadcasterOriginal.pluginRef = "broadcaster";
    BroadcasterOriginal.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    BroadcasterOriginal.platforms = ["Android", "iOS", "Browser"];
    return BroadcasterOriginal;
}(AwesomeCordovaNativePlugin));
var Broadcaster = new BroadcasterOriginal();
export { Broadcaster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnJvYWRjYXN0ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTRDRCwrQkFBMEI7Ozs7SUFhekQsc0NBQWdCLGFBQUMsU0FBaUIsRUFBRSxRQUFnQjtRQUFoQix5QkFBQSxFQUFBLGdCQUFnQjs7O0lBZ0JwRCxxQ0FBZSxhQUFDLFNBQWlCLEVBQUUsbUJBQXdDLEVBQUUsSUFBZ0I7Ozs7OztzQkEzRS9GO0VBOENpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogU3BlY2lmaWMgZGF0YSBmb3IgQW5kcm9pZCBpbXBsZW1lbnRhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWREYXRhIHtcbiAgZXh0cmFzOiBvYmplY3Q7XG4gIGZsYWdzOiBudW1iZXI7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUG9zc2libHkgRXZlbnQgRGF0YSB0eXBlc1xuICovXG5leHBvcnQgdHlwZSBFdmVudERhdGEgPSBvYmplY3QgfCBBbmRyb2lkRGF0YSB8IG51bGw7XG5cbi8qKlxuICogQG5hbWUgQnJvYWRjYXN0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyBleGNoYW5naW5nIGV2ZW50cyBiZXR3ZWVuIG5hdGl2ZSBjb2RlIGFuZCB5b3VyIGFwcC5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQnJvYWRjYXN0ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYnJvYWRjYXN0ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyb2FkY2FzdGVyOiBCcm9hZGNhc3RlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gTGlzdGVuIHRvIGV2ZW50cyBmcm9tIE5hdGl2ZVxuICogdGhpcy5icm9hZGNhc3Rlci5hZGRFdmVudExpc3RlbmVyKCdldmVudE5hbWUnKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCkpO1xuICpcbiAqIC8vIFNlbmQgZXZlbnQgdG8gTmF0aXZlXG4gKiB0aGlzLmJyb2FkY2FzdGVyLmZpcmVOYXRpdmVFdmVudCgnZXZlbnROYW1lJywge30pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQnJvYWRjYXN0ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1icm9hZGNhc3RlcicsXG4gIHBsdWdpblJlZjogJ2Jyb2FkY2FzdGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ic29ycmVudGluby9jb3Jkb3ZhLWJyb2FkY2FzdGVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ0Jyb3dzZXInXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvYWRjYXN0ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGxpc3RlbiB0byBhbiBldmVudCBzZW50IGZyb20gdGhlIG5hdGl2ZSBjb2RlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dsb2JhbCBWYWxpZCBvbmx5IGZvciBBbmRyb2lkLiBJdCBhbGxvd3MgdG8gbGlzdGVuIGZvciBnbG9iYWwgbWVzc2FnZXMoaS5lLiBpbnRlbnRzKVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggd2hlbiBhbiBldmVudCBpcyByZWNlaXZlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGlzR2xvYmFsID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNlbmRzIGRhdGEgdG8gdGhlIG5hdGl2ZSBjb2RlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dsb2JhbE9yRXZlbnREYXRhIG1lYW5zIHRoYXQgbWVzc2FnZSBpcyBnbG9iYWwgKHZhbGlkIG9ubHkgb24gQW5kcm9pZClcbiAgICogQHBhcmFtIHtBbmRyb2lkRGF0YX0gaXNHbG9iYWxPckV2ZW50RGF0YSBhbGxvd3MgdG8gc3BlY2lmeSAnZmxhZ3NgIGFuZCAnY2F0ZWdvcnknICh2YWxpZCBvbmx5IG9uIEFuZHJvaWQpXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpc0dsb2JhbE9yRXZlbnREYXRhIGFsbG93cyB0byBzcGVjaWZ5IGEgZ2VuZXJpYyBvYmplY3QgY29udGFpbmluZyBjdXN0b20gZXZlbnQgZGF0YSAoYWxsIHBsYXRmb3JtKVxuICAgKiBAcGFyYW0ge0FuZHJvaWREYXRhfSBbZGF0YV0gaWYgaXNHbG9iYWwgaXMgc2V0LCBhbGxvd3MgdG8gc3BlY2lmeSAnZmxhZ3NgIGFuZCAnY2F0ZWdvcnknIGlmIGlzR2xvYmFsIGlzIHNldCAodmFsaWQgb25seSBvbiBBbmRyb2lkKVxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RhdGFdIGlmIGlzR2xvYmFsIGlzIHNldCwgYWxsb3dzIHRvIHNwZWNpZnkgYSBnZW5lcmljIG9iamVjdCBjb250YWluaW5nIGN1c3RvbSBldmVudCBkYXRhIChhbGwgcGxhdGZvcm0pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbiBldmVudCBpcyBzdWNjZXNzZnVsbHkgZmlyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmlyZU5hdGl2ZUV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBpc0dsb2JhbE9yRXZlbnREYXRhOiBib29sZWFuIHwgRXZlbnREYXRhLCBkYXRhPzogRXZlbnREYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==