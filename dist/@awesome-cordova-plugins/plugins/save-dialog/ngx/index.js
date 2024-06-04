import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var SaveDialog = /** @class */ (function (_super) {
    __extends(SaveDialog, _super);
    function SaveDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveDialog.prototype.saveFile = function (blob, fileName) { return cordova(this, "saveFile", { "otherPromise": true }, arguments); };
    SaveDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SaveDialog, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SaveDialog.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SaveDialog, providedIn: 'root' });
    SaveDialog.pluginName = "SaveDialog";
    SaveDialog.plugin = "cordova-plugin-save-dialog";
    SaveDialog.pluginRef = "SaveDialog";
    SaveDialog.repo = "https://github.com/Amphiluke/cordova-plugin-save-dialog";
    SaveDialog.platforms = ["Android", "iOS"];
    SaveDialog = __decorate([], SaveDialog);
    return SaveDialog;
}(AwesomeCordovaNativePlugin));
export { SaveDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SaveDialog, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], propDecorators: { saveFile: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2F2ZS1kaWFsb2cvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQTRCNUQsOEJBQTBCOzs7O0lBU3hELDZCQUFRLGFBQUMsSUFBVSxFQUFFLFFBQWlCOzRHQVQzQixVQUFVO2dIQUFWLFVBQVUsY0FGVCxNQUFNOzs7Ozs7SUFFUCxVQUFVLGtCQUFWLFVBQVU7cUJBN0J2QjtFQTZCZ0MsMEJBQTBCO1NBQTdDLFVBQVU7NEZBQVYsVUFBVTtrQkFIdEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OEJBVUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU2F2ZURpYWxvZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBQbHVnaW4gZGlzcGxheXMgdGhlIG5hdGl2ZSBTYXZlIGRpYWxvZyB3aGljaCBhbGxvd3MgdXNlcnMgdG8gc3RvcmUgYSBmaWxlIGluIHRoZSBzZWxlY3RlZCBsb2NhdGlvbi5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2F2ZURpYWxvZyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zYXZlLWRpYWxvZyc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzYXZlRGlhbG9nOiBTYXZlRGlhbG9nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNhdmVEaWFsb2cuc2F2ZUZpbGUoYmxvYiwgZmlsZU5hbWUpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NhdmVEaWFsb2cnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zYXZlLWRpYWxvZycsXG4gIHBsdWdpblJlZjogJ1NhdmVEaWFsb2cnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0FtcGhpbHVrZS9jb3Jkb3ZhLXBsdWdpbi1zYXZlLWRpYWxvZycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTYXZlRGlhbG9nIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFBERiB1c2luZyBhIFVSTCwgaXQgZG93bmxvYWQgdGhlIGRvY3VtZW50IGludG8gYW4gaW4gbWVtb3J5IFdlYmtpdCBvYmplY3QsIGFuZCByZW5kZXJzIGl0IGludG8gYSBQREYuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIHRvIGNyZWF0ZSBhIFBERiBmcm9tXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQREZHZW5lcmF0b3JPcHRpb25zfSBvcHRpb25zIGZvciBQREYgZ2VuZXJhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2F2ZUZpbGUoYmxvYjogQmxvYiwgZmlsZU5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19