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
var SpinnerDialogOriginal = /** @class */ (function (_super) {
    __extends(SpinnerDialogOriginal, _super);
    function SpinnerDialogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDialogOriginal.prototype.show = function (title, message, cancelCallback, iOSOptions) { return cordova(this, "show", { "sync": true }, arguments); };
    SpinnerDialogOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SpinnerDialogOriginal.pluginName = "SpinnerDialog";
    SpinnerDialogOriginal.plugin = "cordova-plugin-native-spinner";
    SpinnerDialogOriginal.pluginRef = "SpinnerDialog";
    SpinnerDialogOriginal.repo = "https://github.com/greybax/cordova-plugin-native-spinner";
    SpinnerDialogOriginal.platforms = ["Android", "iOS", "Windows Phone 8", "Windows"];
    return SpinnerDialogOriginal;
}(AwesomeCordovaNativePlugin));
var SpinnerDialog = new SpinnerDialogOriginal();
export { SpinnerDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Bpbm5lci1kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFxRHpELGlDQUEwQjs7OztJQVkzRCw0QkFBSSxhQUFDLEtBQWMsRUFBRSxPQUFnQixFQUFFLGNBQW9CLEVBQUUsVUFBb0M7SUFRakcsNEJBQUk7Ozs7Ozt3QkExRU47RUFzRG1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTcGlubmVyRGlhbG9nSU9TT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBPcGFjaXR5IG9mIHRoZSBvdmVybGF5LCBiZXR3ZWVuIDAgKHRyYW5zcGFyZW50KSBhbmQgMSAob3BhcXVlKS4gRGVmYXVsdDogMC4zNVxuICAgKi9cbiAgb3ZlcmxheU9wYWNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlZCBjb21wb25lbnQgb2YgdGhlIHRleHQgY29sb3IsIGJldHdlZW4gMCBhbmQgMS4gRGVmYXVsdDogMVxuICAgKi9cbiAgdGV4dENvbG9yUmVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHcmVlbiBjb21wb25lbnQgb2YgdGhlIHRleHQgY29sb3IsIGJldHdlZW4gMCBhbmQgMS4gRGVmYXVsdDogMVxuICAgKi9cbiAgdGV4dENvbG9yR3JlZW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJsdWUgY29tcG9uZW50IG9mIHRoZSB0ZXh0IGNvbG9yLCBiZXR3ZWVuIDAgYW5kIDEuIERlZmF1bHQ6IDFcbiAgICovXG4gIHRleHRDb2xvckJsdWU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgU3Bpbm5lciBEaWFsb2dcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIHNob3dpbmcgYSBuYXRpdmUgc3Bpbm5lciBiYXNlZCBvbiBQYWxkb20vU3Bpbm5lckRpYWxvZy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NwaW5uZXIgRGlhbG9nIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vZ3JleWJheC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNwaW5uZXJEaWFsb2cgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3Bpbm5lci1kaWFsb2cvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwaW5uZXJEaWFsb2c6IFNwaW5uZXJEaWFsb2cpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3Bpbm5lckRpYWxvZy5zaG93KCk7XG4gKlxuICogdGhpcy5zcGlubmVyRGlhbG9nLmhpZGUoKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFNwaW5uZXJEaWFsb2dJT1NPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3Bpbm5lckRpYWxvZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyJyxcbiAgcGx1Z2luUmVmOiAnU3Bpbm5lckRpYWxvZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZ3JleWJheC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcGlubmVyRGlhbG9nIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvd3MgdGhlIHNwaW5uZXIgZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfSBTcGlubmVyIHRpdGxlIChzaG93cyBvbiBBbmRyb2lkIG9ubHkpXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IFNwaW5uZXIgbWVzc2FnZVxuICAgKiBAcGFyYW0gY2FuY2VsQ2FsbGJhY2sge2Jvb2xlYW58ZnVuY3Rpb259IFNldCB0byB0cnVlIHRvIHNldCBzcGlubmVyIG5vdCBjYW5jZWxhYmxlLiBPciBwcm92aWRlIGEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB1c2VyIGNhbmNlbHMgdGhlIHNwaW5uZXIuXG4gICAqIEBwYXJhbSBpT1NPcHRpb25zIHtvYmplY3R9IE9wdGlvbnMgZm9yIGlPUyBvbmx5XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2hvdyh0aXRsZT86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZywgY2FuY2VsQ2FsbGJhY2s/OiBhbnksIGlPU09wdGlvbnM/OiBTcGlubmVyRGlhbG9nSU9TT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgdGhlIHNwaW5uZXIgZGlhbG9nIGlmIHZpc2libGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBoaWRlKCk6IHZvaWQge31cbn1cbiJdfQ==