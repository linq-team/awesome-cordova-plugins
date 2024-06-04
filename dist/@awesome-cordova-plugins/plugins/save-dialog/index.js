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
var SaveDialogOriginal = /** @class */ (function (_super) {
    __extends(SaveDialogOriginal, _super);
    function SaveDialogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveDialogOriginal.prototype.saveFile = function (blob, fileName) { return cordova(this, "saveFile", { "otherPromise": true }, arguments); };
    SaveDialogOriginal.pluginName = "SaveDialog";
    SaveDialogOriginal.plugin = "cordova-plugin-save-dialog";
    SaveDialogOriginal.pluginRef = "SaveDialog";
    SaveDialogOriginal.repo = "https://github.com/Amphiluke/cordova-plugin-save-dialog";
    SaveDialogOriginal.platforms = ["Android", "iOS"];
    return SaveDialogOriginal;
}(AwesomeCordovaNativePlugin));
var SaveDialog = new SaveDialogOriginal();
export { SaveDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2F2ZS1kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE0QjVELDhCQUEwQjs7OztJQVN4RCw2QkFBUSxhQUFDLElBQVUsRUFBRSxRQUFpQjs7Ozs7O3FCQXRDeEM7RUE2QmdDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTYXZlRGlhbG9nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsdWdpbiBkaXNwbGF5cyB0aGUgbmF0aXZlIFNhdmUgZGlhbG9nIHdoaWNoIGFsbG93cyB1c2VycyB0byBzdG9yZSBhIGZpbGUgaW4gdGhlIHNlbGVjdGVkIGxvY2F0aW9uLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTYXZlRGlhbG9nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NhdmUtZGlhbG9nJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhdmVEaWFsb2c6IFNhdmVEaWFsb2cpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc2F2ZURpYWxvZy5zYXZlRmlsZShibG9iLCBmaWxlTmFtZSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2F2ZURpYWxvZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNhdmUtZGlhbG9nJyxcbiAgcGx1Z2luUmVmOiAnU2F2ZURpYWxvZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQW1waGlsdWtlL2NvcmRvdmEtcGx1Z2luLXNhdmUtZGlhbG9nJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVEaWFsb2cgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUERGIHVzaW5nIGEgVVJMLCBpdCBkb3dubG9hZCB0aGUgZG9jdW1lbnQgaW50byBhbiBpbiBtZW1vcnkgV2Via2l0IG9iamVjdCwgYW5kIHJlbmRlcnMgaXQgaW50byBhIFBERi5cbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVUkwgdG8gY3JlYXRlIGEgUERGIGZyb21cbiAgICogQHBhcmFtIG9wdGlvbnMge1BERkdlbmVyYXRvck9wdGlvbnN9IG9wdGlvbnMgZm9yIFBERiBnZW5lcmF0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzYXZlRmlsZShibG9iOiBCbG9iLCBmaWxlTmFtZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=