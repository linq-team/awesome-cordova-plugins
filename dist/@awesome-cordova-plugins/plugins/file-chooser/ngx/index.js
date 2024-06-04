import { __decorate, __extends } from "tslib";
/* eslint-disable jsdoc/require-returns-check */
/* eslint-disable jsdoc/check-tag-names */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var FileChooser = /** @class */ (function (_super) {
    __extends(FileChooser, _super);
    function FileChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileChooser.prototype.open = function (filter) { return cordova(this, "open", {}, arguments); };
    FileChooser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileChooser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FileChooser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileChooser });
    FileChooser.pluginName = "FileChooser";
    FileChooser.plugin = "cordova-plugin-filechooser";
    FileChooser.pluginRef = "fileChooser";
    FileChooser.repo = "https://github.com/ihadeed/cordova-filechooser";
    FileChooser.platforms = ["Android"];
    FileChooser = __decorate([], FileChooser);
    return FileChooser;
}(AwesomeCordovaNativePlugin));
export { FileChooser };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileChooser, decorators: [{
            type: Injectable
        }], propDecorators: { open: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1jaG9vc2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0RBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQThCM0QsK0JBQTBCOzs7O0lBU3pELDBCQUFJLGFBQUMsTUFBZTs2R0FUVCxXQUFXO2lIQUFYLFdBQVc7Ozs7OztJQUFYLFdBQVcsa0JBQVgsV0FBVztzQkFsQ3hCO0VBa0NpQywwQkFBMEI7U0FBOUMsV0FBVzs0RkFBWCxXQUFXO2tCQUR2QixVQUFVOzhCQVVULElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2sgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzZG9jL2NoZWNrLXRhZy1uYW1lcyAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZpbGVDaG9vc2VyIFBsdWdpblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIEZpbGVDaG9vc2VyIFBsdWdpblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlQ2hvb3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maWxlLWNob29zZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlQ2hvb3NlcjogRmlsZUNob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpbGVDaG9vc2VyLm9wZW4oKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2VzcycpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlQ2hvb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGVjaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnZmlsZUNob29zZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1maWxlY2hvb3NlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVDaG9vc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTGF1bmNoZXMgYSBjaG9vc2VyIGRpYWxvZy4gVGhlIGZpbHRlciBwYXJhbSBhbGxvd3MgZmlsdGVyaW5nIGEgdGhlIG1pbWUgdHlwZVxuICAgKiB7IFwibWltZVwiOiBcImFwcGxpY2F0aW9uL3BkZlwiIH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmaWx0ZXJdIEZpbHRlciBhbGxvd2luZyBmaWx0ZXIgYnkgYSBtaW1lIHR5cGUgKHRleHQvcGxhaW4sIGltYWdlL3BuZywgaW1hZ2UvanBlZywgYXVkaW8vd2F2IGV0Yy4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFVSSSBvZiB0aGUgc2VsZWN0ZWQgZmlsZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuKGZpbHRlcj86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=