import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, Plugin, getPromise } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Screenshot = /** @class */ (function (_super) {
    __extends(Screenshot, _super);
    function Screenshot() {
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
    Screenshot.prototype.save = function (format, quality, filename) {
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
    Screenshot.prototype.URI = function (quality) {
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
    Screenshot.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Screenshot, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Screenshot.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Screenshot });
    Screenshot.pluginName = "Screenshot";
    Screenshot.plugin = "@herdwatch-apps/cordova-plugin-screenshot";
    Screenshot.pluginRef = "navigator.screenshot";
    Screenshot.repo = "https://github.com/herdwatch-apps/cordova-plugin-screenshot";
    Screenshot.platforms = ["Android", "iOS"];
    Screenshot = __decorate([], Screenshot);
    return Screenshot;
}(AwesomeCordovaNativePlugin));
export { Screenshot };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Screenshot, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2NyZWVuc2hvdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBOEIvRCw4QkFBMEI7Ozs7SUFDeEQ7Ozs7Ozs7OztPQVNHO0lBQ0gseUJBQUksR0FBSixVQUFLLE1BQWUsRUFBRSxPQUFnQixFQUFFLFFBQWlCO1FBQ3ZELE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsS0FBVSxFQUFFLE1BQVc7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxFQUNELE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCx3QkFBRyxHQUFILFVBQUksT0FBZ0I7UUFDbEIsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVUsRUFBRSxNQUFXO2dCQUMvQyxJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQjtZQUNILENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs0R0E3Q1UsVUFBVTtnSEFBVixVQUFVOzs7Ozs7SUFBVixVQUFVLGtCQUFWLFVBQVU7cUJBL0J2QjtFQStCZ0MsMEJBQTBCO1NBQTdDLFVBQVU7NEZBQVYsVUFBVTtrQkFEdEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbi8qKlxuICogQG5hbWUgU2NyZWVuc2hvdFxuICogQGRlc2NyaXB0aW9uIENhcHR1cmVzIGEgc2NyZWVuIHNob3RcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2NyZWVuc2hvdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2NyZWVuc2hvdC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyZWVuc2hvdDogU2NyZWVuc2hvdCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gVGFrZSBhIHNjcmVlbnNob3QgYW5kIHNhdmUgdG8gZmlsZVxuICogdGhpcy5zY3JlZW5zaG90LnNhdmUoJ2pwZycsIDgwLCAnbXlzY3JlZW5zaG90LmpwZycpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiAvLyBUYWtlIGEgc2NyZWVuc2hvdCBhbmQgZ2V0IHRlbXBvcmFyeSBmaWxlIFVSSVxuICogdGhpcy5zY3JlZW5zaG90LlVSSSg4MCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2NyZWVuc2hvdCcsXG4gIHBsdWdpbjogJ0BoZXJkd2F0Y2gtYXBwcy9jb3Jkb3ZhLXBsdWdpbi1zY3JlZW5zaG90JyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLnNjcmVlbnNob3QnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hlcmR3YXRjaC1hcHBzL2NvcmRvdmEtcGx1Z2luLXNjcmVlbnNob3QnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NyZWVuc2hvdCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqICBUYWtlcyBzY3JlZW5zaG90IGFuZCBzYXZlcyB0aGUgaW1hZ2VcbiAgICpcbiAgICogQHBhcmFtIGZvcm1hdCB7c3RyaW5nfSBGb3JtYXQgY2FuIHRha2UgdGhlIHZhbHVlIG9mIGVpdGhlciAnanBnJyBvciAncG5nJ1xuICAgKiBPbiBpb3MsIG9ubHkgJ2pwZycgZm9ybWF0IGlzIHN1cHBvcnRlZFxuICAgKiBAcGFyYW0gcXVhbGl0eSB7bnVtYmVyfSAgRGV0ZXJtaW5lcyB0aGUgcXVhbGl0eSBvZiB0aGUgc2NyZWVuc2hvdC5cbiAgICogICAgICAgIERlZmF1bHQgcXVhbGl0eSBpcyBzZXQgdG8gMTAwLlxuICAgKiBAcGFyYW0gZmlsZW5hbWUge3N0cmluZ30gTmFtZSBvZiB0aGUgZmlsZSBhcyBzdG9yZWQgb24gdGhlIHN0b3JhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIHNhdmUoZm9ybWF0Pzogc3RyaW5nLCBxdWFsaXR5PzogbnVtYmVyLCBmaWxlbmFtZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuYXZpZ2F0b3Iuc2NyZWVuc2hvdC5zYXZlKFxuICAgICAgICAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdCxcbiAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgZmlsZW5hbWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogIFRha2VzIHNjcmVlbnNob3QgYW5kIHJldHVybnMgdGhlIGltYWdlIGFzIGFuIFVSSVxuICAgKlxuICAgKiBAcGFyYW0gcXVhbGl0eSB7bnVtYmVyfSBEZXRlcm1pbmVzIHRoZSBxdWFsaXR5IG9mIHRoZSBzY3JlZW5zaG90LlxuICAgKiAgICAgICAgRGVmYXVsdCBxdWFsaXR5IGlzIHNldCB0byAxMDAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBVUkkocXVhbGl0eT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuYXZpZ2F0b3Iuc2NyZWVuc2hvdC5VUkkoKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9LCBxdWFsaXR5KTtcbiAgICB9KTtcbiAgfVxufVxuIl19