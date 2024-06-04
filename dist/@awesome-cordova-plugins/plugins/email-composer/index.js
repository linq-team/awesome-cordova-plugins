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
import { AwesomeCordovaNativePlugin, checkAvailability, cordova, getPromise } from '@awesome-cordova-plugins/core';
var EmailComposerOriginal = /** @class */ (function (_super) {
    __extends(EmailComposerOriginal, _super);
    function EmailComposerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposerOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposerOriginal.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposerOriginal.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposerOriginal.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposerOriginal.pluginName = "EmailComposer";
    EmailComposerOriginal.plugin = "cordova-plugin-email-composer";
    EmailComposerOriginal.pluginRef = "cordova.plugins.email";
    EmailComposerOriginal.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposerOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    return EmailComposerOriginal;
}(AwesomeCordovaNativePlugin));
var EmailComposer = new EmailComposerOriginal();
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZW1haWwtY29tcG9zZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywwREFBNkQsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBaUluRixpQ0FBMEI7Ozs7SUFVM0QscUNBQWE7SUFhYix5Q0FBaUI7SUFVakIsa0NBQVU7OzttREFBaUI7Z0JBQ3pCLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLE1BQWU7d0JBQ25ELElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2hCO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVVELGlDQUFTLGFBQUMsR0FBWTs7O21EQUFnQjtnQkFDcEMsT0FBTyxVQUFVLENBQVUsVUFBQyxPQUFPO29CQUNqQyxJQUFJLEdBQUcsRUFBRTt3QkFDUCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLE1BQWU7NEJBQ3ZELElBQUksTUFBTSxFQUFFO2dDQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDZjtpQ0FBTTtnQ0FDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2hCO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxJQUFjOzRCQUNsRCxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELGtDQUFVOzs7bURBQXNCO2dCQUM5QixPQUFPLFVBQVUsQ0FBVyxVQUFDLE9BQU87b0JBQ2xDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxJQUFTO3dCQUM3QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsRUFBRTs0QkFDOUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2Y7d0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxtQ0FBVyxhQUFDLEdBQVk7OzttREFBZ0I7Z0JBQ3RDLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTzt3QkFDL0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFhRCw0QkFBSSxhQUFDLE9BQTZCLEVBQUUsS0FBVztJQVcvQyxnQ0FBUSxhQUFDLEtBQWEsRUFBRSxXQUFtQjs7Ozs7O3dCQWhRN0M7RUFrSW1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUNoZWNrLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsQ29tcG9zZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIEFwcCB0byBzZW5kIHRoZSBlbWFpbCB3aXRoXG4gICAqL1xuICBhcHA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBUbyBmaWVsZFxuICAgKi9cbiAgdG8/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIENDIGZpZWxkXG4gICAqL1xuICBjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgQkNDIGZpZWxkXG4gICAqL1xuICBiY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRmlsZSBwYXRocyBvciBiYXNlNjQgZGF0YSBzdHJlYW1zXG4gICAqL1xuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTdWJqZWN0IG9mIHRoZSBlbWFpbFxuICAgKi9cbiAgc3ViamVjdD86IHN0cmluZztcblxuICAvKipcbiAgICogRW1haWwgYm9keSAoZm9yIEhUTUwsIHNldCBpc0h0bWwgdG8gdHJ1ZSlcbiAgICovXG4gIGJvZHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgYm9keSBpcyBIVE1MIG9yIHBsYWluIHRleHRcbiAgICovXG4gIGlzSHRtbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBDb250ZW50IHR5cGUgb2YgdGhlIGVtYWlsIChBbmRyb2lkIG9ubHkpXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEVtYWlsIENvbXBvc2VyXG4gKiBAcHJlbWllciBlbWFpbC1jb21wb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRW1haWwgQ29tcG9zZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9oeXBlcnkyay9jb3Jkb3ZhLWVtYWlsLXBsdWdpbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEVtYWlsQ29tcG9zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZW1haWwtY29tcG9zZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsQ29tcG9zZXI6IEVtYWlsQ29tcG9zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuZ2V0Q2xpZW50cygpLnRoZW4oKGFwcHM6IFtdKSA9PiB7XG4gKiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGNvbmZpZ3VyZWQgZW1haWwgY2xpZW50cyBmb3IgdGhlIGRldmljZVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0NsaWVudChhcHApLnRoZW4oKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHtcbiAqICBpZiAoaXNWYWxpZCkge1xuICogICAgLy8gTm93IHdlIGtub3cgd2UgaGF2ZSBhIHZhbGlkIGVtYWlsIGNsaWVudCBjb25maWd1cmVkXG4gKiAgICAvLyBOb3Qgc3BlY2lmeWluZyBhbiBhcHAgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZW1haWwgY2xpZW50IGlzIGNvbmZpZ3VyZWRcbiAqICB9XG4gKiB9KTtcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuaGFzQWNjb3VudCgpLnRoZW4oKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHtcbiAqICBpZiAoaXNWYWxpZCkge1xuICogICAgLy8gTm93IHdlIGtub3cgd2UgaGF2ZSBhIHZhbGlkIGVtYWlsIGFjY291bnQgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5pc0F2YWlsYWJsZShhcHApLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xuICogIGlmKGF2YWlsYWJsZSkge1xuICogICAgLy8gTm93IHdlIGtub3cgd2UgY2FuIHNlbmQgYW4gZW1haWwsIGNhbGxzIGhhc0NsaWVudCBhbmQgaGFzQWNjb3VudFxuICogICAgLy8gTm90IHNwZWNpZnlpbmcgYW4gYXBwIHdpbGwgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIGVtYWlsIGNsaWVudCBpcyBjb25maWd1cmVkXG4gKiAgfVxuICogfSk7XG4gKlxuICogbGV0IGVtYWlsID0ge1xuICogICB0bzogJ21heEBtdXN0ZXJtYW5uLmRlJyxcbiAqICAgY2M6ICdlcmlrYUBtdXN0ZXJtYW5uLmRlJyxcbiAqICAgYmNjOiBbJ2pvaG5AZG9lLmNvbScsICdqYW5lQGRvZS5jb20nXSxcbiAqICAgYXR0YWNobWVudHM6IFtcbiAqICAgICAnZmlsZTovL2ltZy9sb2dvLnBuZycsXG4gKiAgICAgJ3JlczovL2ljb24ucG5nJyxcbiAqICAgICAnYmFzZTY0Omljb24ucG5nLy9pVkJPUncwS0dnb0FBQUFOU1VoRVVnLi4uJyxcbiAqICAgICAnZmlsZTovL1JFQURNRS5wZGYnXG4gKiAgIF0sXG4gKiAgIHN1YmplY3Q6ICdDb3Jkb3ZhIEljb25zJyxcbiAqICAgYm9keTogJ0hvdyBhcmUgeW91PyBOaWNlIGdyZWV0aW5ncyBmcm9tIExlaXB6aWcnLFxuICogICBpc0h0bWw6IHRydWVcbiAqIH1cbiAqXG4gKiAvLyBTZW5kIGEgdGV4dCBtZXNzYWdlIHVzaW5nIGRlZmF1bHQgb3B0aW9uc1xuICogdGhpcy5lbWFpbENvbXBvc2VyLm9wZW4oZW1haWwpO1xuICogYGBgXG4gKlxuICogWW91IGNhbiBhbHNvIGFzc2lnbiBhbGlhc2VzIHRvIGVtYWlsIGFwcHNcbiAqIGBgYHRzXG4gKiAvLyBhZGQgYWxpYXNcbiAqIHRoaXMuZW1haWwuYWRkQWxpYXMoJ2dtYWlsJywgJ2NvbS5nb29nbGUuYW5kcm9pZC5nbScpO1xuICpcbiAqIC8vIHRoZW4gdXNlIGFsaWFzIHdoZW4gc2VuZGluZyBlbWFpbFxuICogdGhpcy5lbWFpbC5vcGVuKHtcbiAqICAgYXBwOiAnZ21haWwnLFxuICogICAuLi5cbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRW1haWxDb21wb3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdFbWFpbENvbXBvc2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZW1haWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnbWFjT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwIGhhcyBhIHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBhY2Nlc3MgZW1haWwgYWNjb3VudHMgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIGlmIGFuIGVtYWlsIGFjY291bnQgaXMgY29uZmlndXJlZCBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGhhc0FjY291bnQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5oYXNBY2NvdW50KChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIGlmIGEgc3BlY2lmaWMgZW1haWwgY2xpZW50IGlzIGluc3RhbGxlZCBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwcF0gQXBwIGlkIG9yIHVyaSBzY2hlbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBoYXNDbGllbnQoYXBwPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGFwcCkge1xuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0NsaWVudChhcHAsIChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoYXBwcyAmJiBhcHBzLmxlbmd0aCA+IDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGVtYWlsIGNsaWVudHMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgZ2V0Q2xpZW50cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8c3RyaW5nW10+KChyZXNvbHZlKSA9PiB7XG4gICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmdldENsaWVudHMoKGFwcHM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFwcHMpID09PSAnW29iamVjdCBTdHJpbmddJykge1xuICAgICAgICAgIGFwcHMgPSBbYXBwc107XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShhcHBzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIGlmIHNlbmRpbmcgZW1haWxzIGlzIHN1cHBvcnRlZCBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwcF0gQXBwIGlkIG9yIHVyaSBzY2hlbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgaXNBdmFpbGFibGUoYXBwPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuaGFzQWNjb3VudCwgdGhpcy5oYXNDbGllbnQoYXBwKV0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cy5sZW5ndGggPT09IDIgJiYgcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBlbWFpbCBjb21wb3NlciBwcmUtZmlsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtFbWFpbENvbXBvc2VyT3B0aW9uc30gb3B0aW9ucyBFbWFpbFxuICAgKiBAcGFyYW0ge2FueX0gW3Njb3BlXSBTY29wZSBmb3IgdGhlIHByb21pc2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSBFbWFpbENvbXBvc2VyIGhhcyBiZWVuIG9wZW5lZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAzLFxuICB9KVxuICBvcGVuKG9wdGlvbnM6IEVtYWlsQ29tcG9zZXJPcHRpb25zLCBzY29wZT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgbWFpbCBhcHAgYWxpYXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhcyBUaGUgYWxpYXMgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWUgVGhlIHBhY2thZ2UgbmFtZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRBbGlhcyhhbGlhczogc3RyaW5nLCBwYWNrYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7fVxufVxuIl19