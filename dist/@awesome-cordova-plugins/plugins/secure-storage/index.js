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
import { AwesomeCordovaNativePlugin, checkAvailability, cordovaInstance, getPromise } from '@awesome-cordova-plugins/core';
var SecureStorageObject = /** @class */ (function () {
    function SecureStorageObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageObject.prototype.get = function (key) { return cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.set = function (key, value) { return cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.remove = function (key) { return cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.keys = function () { return cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.clear = function () { return cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.secureDevice = function () { return cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageObject;
}());
export { SecureStorageObject };
var SecureStorageOriginal = /** @class */ (function (_super) {
    __extends(SecureStorageOriginal, _super);
    function SecureStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageOriginal.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorageOriginal.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, function () { return rej(new SecureStorageObject(instance)); }, store);
                });
            }
        })();
    };
    SecureStorageOriginal.pluginName = "SecureStorage";
    SecureStorageOriginal.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageOriginal.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return SecureStorageOriginal;
}(AwesomeCordovaNativePlugin));
var SecureStorage = new SecureStorageOriginal();
export { SecureStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2VjdXJlLXN0b3JhZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxrRUFLTCxVQUFVLEVBQ1gsTUFBTSwrQkFBK0IsQ0FBQzs7SUFNckMsNkJBQW9CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVc1QyxpQ0FBRyxhQUFDLEdBQVc7SUFjZixpQ0FBRyxhQUFDLEdBQVcsRUFBRSxLQUFhO0lBYTlCLG9DQUFNLGFBQUMsR0FBVztJQVlsQixrQ0FBSTtJQVlKLG1DQUFLO0lBVUwsMENBQVk7OEJBckZkOzs7O0lBK0ltQyxpQ0FBMEI7Ozs7SUFRM0QsOEJBQU0sYUFBQyxLQUFhOzs7bURBQWdDO2dCQUNsRCxPQUFPLFVBQVUsQ0FBc0IsVUFBQyxHQUFhLEVBQUUsR0FBYTtvQkFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM5QyxjQUFNLE9BQUEsR0FBRyxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsRUFDNUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLEVBQzVDLEtBQUssQ0FDTixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O3dCQS9KSDtFQStJbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgZ2V0UHJvbWlzZSxcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlY3VyZVN0b3JhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgc3RvcmVkIGl0ZW1cbiAgICpcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgYSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHN0b3JlZCBpdGVtXG4gICAqXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBrZXkgdGhhdCB3YXMgcmVtb3ZlZFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYXJyYXkgb2Yga2V5cyBzdG9yYWdlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGtleXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgcmVmZXJlbmNlcyBmcm9tIHRoZSBzdG9yYWdlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcmluZ3MgdXAgdGhlIHNjcmVlbi1sb2NrIHNldHRpbmdzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2VjdXJlRGV2aWNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQG5hbWUgU2VjdXJlIFN0b3JhZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZ2V0cywgc2V0cyBhbmQgcmVtb3ZlcyBrZXksdmFsdWUgcGFpcnMgZnJvbSBhIGRldmljZSdzIHNlY3VyZSBzdG9yYWdlLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2VgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBTZWN1cmUgU3RvcmFnZSBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vQ3J5cGhvL2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlKS5cbiAqXG4gKiBUaGUgYnJvd3NlciBwbGF0Zm9ybSBpcyBzdXBwb3J0ZWQgYXMgYSBtb2NrIG9ubHkuIEtleS92YWx1ZXMgYXJlIHN0b3JlZCB1bmVuY3J5cHRlZCBpbiBsb2NhbFN0b3JhZ2UuXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTZWN1cmVTdG9yYWdlLCBTZWN1cmVTdG9yYWdlT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NlY3VyZS1zdG9yYWdlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTdG9yYWdlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNlY3VyZVN0b3JhZ2UuY3JlYXRlKCdteV9zdG9yZV9uYW1lJylcbiAqICAgLnRoZW4oKHN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2VPYmplY3QpID0+IHtcbiAqXG4gKiAgICAgIHN0b3JhZ2UuZ2V0KCdrZXknKVxuICogICAgICAgIC50aGVuKFxuICogICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICAgICApO1xuICpcbiAqICAgICAgc3RvcmFnZS5zZXQoJ2tleScsICd2YWx1ZScpXG4gKiAgICAgICAgLnRoZW4oXG4gKiAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgICAgKTtcbiAqXG4gKiAgICAgIHN0b3JhZ2UucmVtb3ZlKCdrZXknKVxuICogICAgICAudGhlbihcbiAqICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgICAgKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqXG4gKiBgYGBcbiAqIEBjbGFzc2VzXG4gKiBTZWN1cmVTdG9yYWdlT2JqZWN0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2VjdXJlU3RvcmFnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlLWVjaG8nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuU2VjdXJlU3RvcmFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWlicml0bzcwNy9jb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZS1lY2hvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWN1cmVTdG9yYWdlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5hbWVzcGFjZWQgc3RvcmFnZS5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFNlY3VyZVN0b3JhZ2VPYmplY3Q+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShzdG9yZTogc3RyaW5nKTogUHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8U2VjdXJlU3RvcmFnZU9iamVjdD4oKHJlczogRnVuY3Rpb24sIHJlajogRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IChTZWN1cmVTdG9yYWdlLmdldFBsdWdpbigpKShcbiAgICAgICAgKCkgPT4gcmVzKG5ldyBTZWN1cmVTdG9yYWdlT2JqZWN0KGluc3RhbmNlKSksXG4gICAgICAgICgpID0+IHJlaihuZXcgU2VjdXJlU3RvcmFnZU9iamVjdChpbnN0YW5jZSkpLFxuICAgICAgICBzdG9yZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuIl19