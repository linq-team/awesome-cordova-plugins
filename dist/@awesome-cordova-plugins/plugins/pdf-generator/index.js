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
var PDFGeneratorOriginal = /** @class */ (function (_super) {
    __extends(PDFGeneratorOriginal, _super);
    function PDFGeneratorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFGeneratorOriginal.prototype.fromURL = function (url, options) { return cordova(this, "fromURL", { "otherPromise": true }, arguments); };
    PDFGeneratorOriginal.prototype.fromData = function (data, options) { return cordova(this, "fromData", { "otherPromise": true }, arguments); };
    PDFGeneratorOriginal.pluginName = "PDFGenerator";
    PDFGeneratorOriginal.plugin = "cordova-pdf-generator";
    PDFGeneratorOriginal.pluginRef = "cordova.plugins.pdf";
    PDFGeneratorOriginal.repo = "https://github.com/cesarvr/pdf-generator";
    PDFGeneratorOriginal.platforms = ["Android", "iOS"];
    return PDFGeneratorOriginal;
}(AwesomeCordovaNativePlugin));
var PDFGenerator = new PDFGeneratorOriginal();
export { PDFGenerator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGRmLWdlbmVyYXRvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThEMUQsZ0NBQTBCOzs7O0lBUzFELDhCQUFPLGFBQUMsR0FBVyxFQUFFLE9BQTZCO0lBWWxELCtCQUFRLGFBQUMsSUFBWSxFQUFFLE9BQTZCOzs7Ozs7dUJBcEZ0RDtFQStEa0MsMEJBQTBCO1NBQS9DLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBERkdlbmVyYXRvck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGRvY3VtZW50IHNpemUsIGUuZy4sIEEyLCBBMywgb3IgQTQuXG4gICAqIE9ubHkgc3VwcG9ydGVkIG9uIGlPUy5cbiAgICogVGhlIGRlZmF1bHQgaXMgJ0E0Jy5cbiAgICovXG4gIGRvY3VtZW50U2l6ZT86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uIHRvIGNoYW5nZSB0byBsYW5kc2NhcGUgb3JpZW50YXRpb24uXG4gICAqIERlZmF1bHQgaXMgJ3BvcnRyYWl0Jy5cbiAgICovXG4gIGxhbmRzY2FwZT86ICdsYW5kc2NhcGUnIHwgJ3BvcnRyYWl0JztcblxuICAvKipcbiAgICogVGhlIHR5cGUgdG8gYmUgcmV0dXJuZWQsIGVpdGhlciAnc2hhcmUnIG9yICdiYXNlNjQnLlxuICAgKiBJZiAnc2hhcmUgaXMgY2hvc2VuLCB0aGUgUERGIGlzIHNoYXJlZCB3aXRoIHRoZSBzeXN0ZW0gY2FwYWJpbGl0aWVzLlxuICAgKiBEZWZhdWx0IGlzICdiYXNlNjQnXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVzaXJlZCBmaWxlbmFtZSB0aGUgcmVzdWx0aW5nIFBERiBzaG91bGQgaGF2ZS5cbiAgICogRGVmYXVsdCBpcyAnZGVmYXVsdC5wZGYnXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uIHRvIHNldCB0aGUgYmFzZSBVUkwgZm9yIHBhdGhpbmcuXG4gICAqIERlZmF1bHQgaXMgJ251bGwnLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBQREZHZW5lcmF0b3JcbiAqIEBkZXNjcmlwdGlvblxuICogU2ltcGxlIHBsdWdpbiB0byBnZW5lcmF0ZSAob2ZmbGluZSkgcGRmLiBUaGUgcGx1Z2luIHRyYW5zZm9ybXMgSFRNTCB0byBQREYgYW5kIGFsc28gcHJvdmlkZSB0aGUgbWVjaGFuaXNtIHRvIHNoYXJlIHRoZSBwZGYgdG8gb3RoZXIgYXBwcyBsaWtlIE1haWwsIGV0Yy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUERGR2VuZXJhdG9yIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BkZi1nZW5lcmF0b3InO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcGRmR2VuZXJhdG9yOiBQREZHZW5lcmF0b3IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucGRmR2VuZXJhdG9yLmZyb21VUkwodXJsLCBvcHRpb25zKS50aGVuKGJhc2U2NFN0cmluZyA9PiBjb25zb2xlLmxvZyhiYXNlNjRTdHJpbmcpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQREZHZW5lcmF0b3InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBkZi1nZW5lcmF0b3InLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMucGRmJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jZXNhcnZyL3BkZi1nZW5lcmF0b3InLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUERGR2VuZXJhdG9yIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFBERiB1c2luZyBhIFVSTCwgaXQgZG93bmxvYWQgdGhlIGRvY3VtZW50IGludG8gYW4gaW4gbWVtb3J5IFdlYmtpdCBvYmplY3QsIGFuZCByZW5kZXJzIGl0IGludG8gYSBQREYuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIHRvIGNyZWF0ZSBhIFBERiBmcm9tXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQREZHZW5lcmF0b3JPcHRpb25zfSBvcHRpb25zIGZvciBQREYgZ2VuZXJhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZnJvbVVSTCh1cmw6IHN0cmluZywgb3B0aW9ucz86IFBERkdlbmVyYXRvck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUERGIHVzaW5nIHN0cmluZyB3aXRoIHRoZSBIVE1MIHJlcHJlc2VudGF0aW9uLCBpdCBkb3dubG9hZCB0aGUgZG9jdW1lbnQgaW50byBhbiBpbiBtZW1vcnkgV2Via2l0IG9iamVjdCwgYW5kIHJlbmRlcnMgaXQgaW50byBhIFBERi5cbiAgICpcbiAgICogQHBhcmFtIGRhdGEge3N0cmluZ30gSFRNTCBzdHJpbmcgcmVwcmVzZW50YXRpb24gdG8gY3JlYXRlIGEgUERGIGZyb21cbiAgICogQHBhcmFtIG9wdGlvbnMge1BERkdlbmVyYXRvck9wdGlvbnN9IG9wdGlvbnMgZm9yIFBERiBnZW5lcmF0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBmcm9tRGF0YShkYXRhOiBzdHJpbmcsIG9wdGlvbnM/OiBQREZHZW5lcmF0b3JPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==