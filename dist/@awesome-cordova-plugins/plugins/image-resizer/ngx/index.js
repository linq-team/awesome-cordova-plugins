import { __decorate, __extends } from "tslib";
/* eslint-disable jsdoc/require-param-type */
/* eslint-disable jsdoc/check-tag-names */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var ImageResizer = /** @class */ (function (_super) {
    __extends(ImageResizer, _super);
    function ImageResizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResizer.prototype.resize = function (options) { return cordova(this, "resize", {}, arguments); };
    ImageResizer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageResizer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    ImageResizer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageResizer });
    ImageResizer.pluginName = "ImageResizer";
    ImageResizer.plugin = "cordova-plugin-image-resizer";
    ImageResizer.pluginRef = "ImageResizer";
    ImageResizer.repo = "https://github.com/JoschkaSchulz/cordova-plugin-image-resizer";
    ImageResizer.platforms = ["Android", "iOS"];
    ImageResizer = __decorate([], ImageResizer);
    return ImageResizer;
}(AwesomeCordovaNativePlugin));
export { ImageResizer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageResizer, decorators: [{
            type: Injectable
        }], propDecorators: { resize: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW1hZ2UtcmVzaXplci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE2QztBQUM3QywwQ0FBMEM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUF3RTFELGdDQUEwQjs7OztJQVMxRCw2QkFBTSxhQUFDLE9BQTRCOzhHQVR4QixZQUFZO2tIQUFaLFlBQVk7Ozs7OztJQUFaLFlBQVksa0JBQVosWUFBWTt1QkE1RXpCO0VBNEVrQywwQkFBMEI7U0FBL0MsWUFBWTs0RkFBWixZQUFZO2tCQUR4QixVQUFVOzhCQVVULE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLXBhcmFtLXR5cGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzZG9jL2NoZWNrLXRhZy1uYW1lcyAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlUmVzaXplck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIFVSSSBmb3IgdGhlIGltYWdlIG9uIHRoZSBkZXZpY2UgdG8gZ2V0IHNjYWxlZFxuICAgKi9cbiAgdXJpOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyIHRoZSBpbWFnZSBzaG91bGQgYmUgcHV0XG4gICAqIChBbmRyb2lkIG9ubHkpXG4gICAqL1xuICBmb2xkZXJOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogQSBjdXN0b20gbmFtZSBmb3IgdGhlIGZpbGUuIERlZmF1bHQgbmFtZSBpcyBhIHRpbWVzdGFtcC4gWW91IGhhdmUgdG8gc2V0IHRoaXMgdmFsdWUgb24gaU9TXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqIFF1YWxpdHkgZ2l2ZW4gYXMgTnVtYmVyIGZvciB0aGUgcXVhbGl0eSBvZiB0aGUgbmV3IGltYWdlXG4gICAqIChBbmRyb2lkIGFuZCBpT1Mgb25seSlcbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIG5ldyBpbWFnZVxuICAgKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIG5ldyBpbWFnZVxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byByZXR1cm4gYSBiYXNlNjQgZW5jb2RlZCBpbWFnZSBzdHJpbmcgaW5zdGVhZCBvZiB0aGUgcGF0aCB0byB0aGUgcmVzaXplZCBpbWFnZS5cbiAgICogaU9TIG9ubHlcbiAgICovXG4gIGJhc2U2ND86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgSW1hZ2VSZXNpemVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgUGx1Z2luIEZvciBJbWFnZSBSZXNpemVcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW1hZ2VSZXNpemVyLCBJbWFnZVJlc2l6ZXJPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ltYWdlLXJlc2l6ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlUmVzaXplcjogSW1hZ2VSZXNpemVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgb3B0aW9ucyA9IHtcbiAqICB1cmk6IHVyaSxcbiAqICBmb2xkZXJOYW1lOiAnUHJvdG9uZXQnLFxuICogIHF1YWxpdHk6IDkwLFxuICogIHdpZHRoOiAxMjgwLFxuICogIGhlaWdodDogMTI4MFxuICogfSBhcyBJbWFnZVJlc2l6ZXJPcHRpb25zO1xuICpcbiAqIHRoaXMuaW1hZ2VSZXNpemVyXG4gKiAgIC5yZXNpemUob3B0aW9ucylcbiAqICAgLnRoZW4oKGZpbGVQYXRoOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKCdGaWxlUGF0aCcsIGZpbGVQYXRoKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ltYWdlUmVzaXplcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWltYWdlLXJlc2l6ZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnSW1hZ2VSZXNpemVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvc2Noa2FTY2h1bHovY29yZG92YS1wbHVnaW4taW1hZ2UtcmVzaXplcicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlUmVzaXplciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVzaXplcyB0aGUgaW1hZ2UgYmFzZWQgb24gdGhlIG9wdGlvbnMgcHJvdmlkZWRcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0ltYWdlUmVzaXplck9wdGlvbnN9IGltYWdlIHJlc2l6ZSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0aGUgcmVzaXplZCBpbWFnZSBmaWxlIFVSSVxuICAgKiBvdGhlcndpc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNpemUob3B0aW9uczogSW1hZ2VSZXNpemVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=