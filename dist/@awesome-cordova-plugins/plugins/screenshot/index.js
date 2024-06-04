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
import { AwesomeCordovaNativePlugin, Plugin, getPromise } from '@awesome-cordova-plugins/core';
var ScreenshotOriginal = /** @class */ (function (_super) {
    __extends(ScreenshotOriginal, _super);
    function ScreenshotOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Takes screenshot and saves the image
     *
     * @param format {string} Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param quality {number}  Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param filename {string} Name of the file as stored on the storage
     * @returns {Promise<any>}
     */
    ScreenshotOriginal.prototype.save = function (format, quality, filename) {
        return getPromise(function (resolve, reject) {
            navigator.screenshot.save(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, format, quality, filename);
        });
    };
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param quality {number} Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @returns {Promise<any>}
     */
    ScreenshotOriginal.prototype.URI = function (quality) {
        return getPromise(function (resolve, reject) {
            navigator.screenshot.URI(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, quality);
        });
    };
    ScreenshotOriginal.pluginName = "Screenshot";
    ScreenshotOriginal.plugin = "@herdwatch-apps/cordova-plugin-screenshot";
    ScreenshotOriginal.pluginRef = "navigator.screenshot";
    ScreenshotOriginal.repo = "https://github.com/herdwatch-apps/cordova-plugin-screenshot";
    ScreenshotOriginal.platforms = ["Android", "iOS"];
    return ScreenshotOriginal;
}(AwesomeCordovaNativePlugin));
var Screenshot = new ScreenshotOriginal();
export { Screenshot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2NyZWVuc2hvdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQThCL0QsOEJBQTBCOzs7O0lBQ3hEOzs7Ozs7Ozs7T0FTRztJQUNILHlCQUFJLEdBQUosVUFBSyxNQUFlLEVBQUUsT0FBZ0IsRUFBRSxRQUFpQjtRQUN2RCxPQUFPLFVBQVUsQ0FBTSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3JDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN2QixVQUFDLEtBQVUsRUFBRSxNQUFXO2dCQUN0QixJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQjtZQUNILENBQUMsRUFDRCxNQUFNLEVBQ04sT0FBTyxFQUNQLFFBQVEsQ0FDVCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsd0JBQUcsR0FBSCxVQUFJLE9BQWdCO1FBQ2xCLE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFVLEVBQUUsTUFBVztnQkFDL0MsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakI7WUFDSCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztxQkE1RUg7RUErQmdDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBTY3JlZW5zaG90XG4gKiBAZGVzY3JpcHRpb24gQ2FwdHVyZXMgYSBzY3JlZW4gc2hvdFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTY3JlZW5zaG90IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zY3JlZW5zaG90L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzY3JlZW5zaG90OiBTY3JlZW5zaG90KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBUYWtlIGEgc2NyZWVuc2hvdCBhbmQgc2F2ZSB0byBmaWxlXG4gKiB0aGlzLnNjcmVlbnNob3Quc2F2ZSgnanBnJywgODAsICdteXNjcmVlbnNob3QuanBnJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIC8vIFRha2UgYSBzY3JlZW5zaG90IGFuZCBnZXQgdGVtcG9yYXJ5IGZpbGUgVVJJXG4gKiB0aGlzLnNjcmVlbnNob3QuVVJJKDgwKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTY3JlZW5zaG90JyxcbiAgcGx1Z2luOiAnQGhlcmR3YXRjaC1hcHBzL2NvcmRvdmEtcGx1Z2luLXNjcmVlbnNob3QnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3Iuc2NyZWVuc2hvdCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGVyZHdhdGNoLWFwcHMvY29yZG92YS1wbHVnaW4tc2NyZWVuc2hvdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIFRha2VzIHNjcmVlbnNob3QgYW5kIHNhdmVzIHRoZSBpbWFnZVxuICAgKlxuICAgKiBAcGFyYW0gZm9ybWF0IHtzdHJpbmd9IEZvcm1hdCBjYW4gdGFrZSB0aGUgdmFsdWUgb2YgZWl0aGVyICdqcGcnIG9yICdwbmcnXG4gICAqIE9uIGlvcywgb25seSAnanBnJyBmb3JtYXQgaXMgc3VwcG9ydGVkXG4gICAqIEBwYXJhbSBxdWFsaXR5IHtudW1iZXJ9ICBEZXRlcm1pbmVzIHRoZSBxdWFsaXR5IG9mIHRoZSBzY3JlZW5zaG90LlxuICAgKiAgICAgICAgRGVmYXVsdCBxdWFsaXR5IGlzIHNldCB0byAxMDAuXG4gICAqIEBwYXJhbSBmaWxlbmFtZSB7c3RyaW5nfSBOYW1lIG9mIHRoZSBmaWxlIGFzIHN0b3JlZCBvbiB0aGUgc3RvcmFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc2F2ZShmb3JtYXQ/OiBzdHJpbmcsIHF1YWxpdHk/OiBudW1iZXIsIGZpbGVuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG5hdmlnYXRvci5zY3JlZW5zaG90LnNhdmUoXG4gICAgICAgIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0LFxuICAgICAgICBxdWFsaXR5LFxuICAgICAgICBmaWxlbmFtZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgVGFrZXMgc2NyZWVuc2hvdCBhbmQgcmV0dXJucyB0aGUgaW1hZ2UgYXMgYW4gVVJJXG4gICAqXG4gICAqIEBwYXJhbSBxdWFsaXR5IHtudW1iZXJ9IERldGVybWluZXMgdGhlIHF1YWxpdHkgb2YgdGhlIHNjcmVlbnNob3QuXG4gICAqICAgICAgICBEZWZhdWx0IHF1YWxpdHkgaXMgc2V0IHRvIDEwMC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIFVSSShxdWFsaXR5PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG5hdmlnYXRvci5zY3JlZW5zaG90LlVSSSgoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHF1YWxpdHkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=