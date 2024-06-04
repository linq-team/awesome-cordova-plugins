import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var FilePath = /** @class */ (function (_super) {
    __extends(FilePath, _super);
    function FilePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePath.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePath.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FilePath, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FilePath.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FilePath });
    FilePath.pluginName = "FilePath";
    FilePath.plugin = "cordova-plugin-filepath";
    FilePath.pluginRef = "window.FilePath";
    FilePath.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePath.platforms = ["Android"];
    FilePath = __decorate([], FilePath);
    return FilePath;
}(AwesomeCordovaNativePlugin));
export { FilePath };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FilePath, decorators: [{
            type: Injectable
        }], propDecorators: { resolveNativePath: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1wYXRoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFnQzlELDRCQUEwQjs7OztJQVF0RCxvQ0FBaUIsYUFBQyxJQUFZOzBHQVJuQixRQUFROzhHQUFSLFFBQVE7Ozs7OztJQUFSLFFBQVEsa0JBQVIsUUFBUTttQkFqQ3JCO0VBaUM4QiwwQkFBMEI7U0FBM0MsUUFBUTs0RkFBUixRQUFRO2tCQURwQixVQUFVOzhCQVNULGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRmlsZSBQYXRoXG4gKiBAcHJlbWllciBmaWxlc3lzdGVtXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlc29sdmUgdGhlIG5hdGl2ZSBmaWxlc3lzdGVtIHBhdGggZm9yIEFuZHJvaWQgY29udGVudCBVUklzIGFuZCBpcyBiYXNlZCBvbiBjb2RlIGluIHRoZSBhRmlsZUNob29zZXIgbGlicmFyeS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVBhdGggfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZS1wYXRoL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlUGF0aDogRmlsZVBhdGgpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZVBhdGgucmVzb2x2ZU5hdGl2ZVBhdGgocGF0aClcbiAqICAgLnRoZW4oZmlsZVBhdGggPT4gY29uc29sZS5sb2coZmlsZVBhdGgpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVQYXRoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZXBhdGgnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuRmlsZVBhdGgnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hpZGRlbnRhby9jb3Jkb3ZhLXBsdWdpbi1maWxlcGF0aCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVQYXRoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVzb2x2ZSBuYXRpdmUgcGF0aCBmb3IgZ2l2ZW4gY29udGVudCBVUkwvcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIENvbnRlbnQgVVJML3BhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc29sdmVOYXRpdmVQYXRoKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=