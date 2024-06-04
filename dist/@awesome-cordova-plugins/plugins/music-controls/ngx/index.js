import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var MusicControls = /** @class */ (function (_super) {
    __extends(MusicControls, _super);
    function MusicControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicControls.prototype.create = function (options) { return cordova(this, "create", {}, arguments); };
    MusicControls.prototype.destroy = function () { return cordova(this, "destroy", {}, arguments); };
    MusicControls.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true }, arguments); };
    MusicControls.prototype.listen = function () { return cordova(this, "listen", { "sync": true }, arguments); };
    MusicControls.prototype.updateIsPlaying = function (isPlaying) { return cordova(this, "updateIsPlaying", {}, arguments); };
    MusicControls.prototype.updateElapsed = function (args) { return cordova(this, "updateElapsed", { "platforms": ["iOS"] }, arguments); };
    MusicControls.prototype.updateDismissable = function (dismissable) { return cordova(this, "updateDismissable", {}, arguments); };
    MusicControls.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MusicControls, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    MusicControls.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MusicControls });
    MusicControls.pluginName = "MusicControls";
    MusicControls.plugin = "cordova-plugin-music-controls2";
    MusicControls.pluginRef = "MusicControls";
    MusicControls.repo = "https://github.com/ghenry22/cordova-plugin-music-controls2";
    MusicControls.platforms = ["Android", "iOS", "Windows"];
    MusicControls = __decorate([], MusicControls);
    return MusicControls;
}(AwesomeCordovaNativePlugin));
export { MusicControls };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MusicControls, decorators: [{
            type: Injectable
        }], propDecorators: { create: [], destroy: [], subscribe: [], listen: [], updateIsPlaying: [], updateElapsed: [], updateDismissable: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbXVzaWMtY29udHJvbHMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBeUpDLGlDQUEwQjs7OztJQVEzRCw4QkFBTSxhQUFDLE9BQTZCO0lBVXBDLCtCQUFPO0lBWVAsaUNBQVM7SUFRVCw4QkFBTTtJQVFOLHVDQUFlLGFBQUMsU0FBa0I7SUFZbEMscUNBQWEsYUFBQyxJQUE2QztJQVEzRCx5Q0FBaUIsYUFBQyxXQUFvQjsrR0FsRTNCLGFBQWE7bUhBQWIsYUFBYTs7Ozs7O0lBQWIsYUFBYSxrQkFBYixhQUFhO3dCQTNKMUI7RUEySm1DLDBCQUEwQjtTQUFoRCxhQUFhOzRGQUFiLGFBQWE7a0JBRHpCLFVBQVU7OEJBU1QsTUFBTSxNQVVOLE9BQU8sTUFZUCxTQUFTLE1BUVQsTUFBTSxNQVFOLGVBQWUsTUFZZixhQUFhLE1BUWIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdXNpY0NvbnRyb2xzT3B0aW9ucyB7XG4gIHRyYWNrPzogc3RyaW5nO1xuICBhcnRpc3Q/OiBzdHJpbmc7XG4gIGNvdmVyPzogc3RyaW5nO1xuICBpc1BsYXlpbmc/OiBib29sZWFuO1xuICBkaXNtaXNzYWJsZT86IGJvb2xlYW47XG4gIGhhc1ByZXY/OiBib29sZWFuO1xuICBoYXNOZXh0PzogYm9vbGVhbjtcbiAgaGFzU2tpcEZvcndhcmQ/OiBib29sZWFuO1xuICBoYXNTa2lwQmFja3dhcmQ/OiBib29sZWFuO1xuICBza2lwRm9yd2FyZEludGVydmFsPzogbnVtYmVyO1xuICBza2lwQmFja3dhcmRJbnRlcnZhbD86IG51bWJlcjtcbiAgaGFzU2NydWJiaW5nPzogYm9vbGVhbjtcbiAgaGFzQ2xvc2U/OiBib29sZWFuO1xuICBhbGJ1bT86IHN0cmluZztcbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIGVsYXBzZWQ/OiBudW1iZXI7XG4gIHRpY2tlcj86IHN0cmluZztcbiAgcGxheUljb24/OiBzdHJpbmc7XG4gIHBhdXNlSWNvbj86IHN0cmluZztcbiAgcHJldkljb24/OiBzdHJpbmc7XG4gIG5leHRJY29uPzogc3RyaW5nO1xuICBjbG9zZUljb24/OiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbkljb24/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgTXVzaWMgQ29udHJvbHNcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBNdXNpYyBjb250cm9scyBmb3IgQ29yZG92YSBhcHBsaWNhdGlvbnMuXG4gKiBEaXNwbGF5IGEgJ21lZGlhJyBub3RpZmljYXRpb24gd2l0aCBwbGF5L3BhdXNlLCBwcmV2aW91cywgbmV4dCBidXR0b25zLCBhbGxvd2luZyB0aGUgdXNlciB0byBjb250cm9sIHRoZSBwbGF5LlxuICogSGFuZGxlIGFsc28gaGVhZHNldCBldmVudCAocGx1ZywgdW5wbHVnLCBoZWFkc2V0IGJ1dHRvbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE11c2ljQ29udHJvbHMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbXVzaWMtY29udHJvbHMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG11c2ljQ29udHJvbHM6IE11c2ljQ29udHJvbHMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubXVzaWNDb250cm9scy5jcmVhdGUoe1xuICogICB0cmFjayAgICAgICA6ICdUaW1lIGlzIFJ1bm5pbmcgT3V0JywgICAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IDogJydcbiAqICAgYXJ0aXN0ICAgICAgOiAnTXVzZScsICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCA6ICcnXG4gKiAgIGNvdmVyICAgICAgIDogJ2FsYnVtcy9hYnNvbHV0aW9uLmpwZycsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgOiBub3RoaW5nXG4gKiAgIC8vIGNvdmVyIGNhbiBiZSBhIGxvY2FsIHBhdGggKHVzZSBmdWxscGF0aCAnZmlsZTovLy9zdG9yYWdlL2VtdWxhdGVkLy4uLicsIG9yIG9ubHkgJ215X2ltYWdlLmpwZycgaWYgbXlfaW1hZ2UuanBnIGlzIGluIHRoZSB3d3cgZm9sZGVyIG9mIHlvdXIgYXBwKVxuICogICAvLyAgICAgICAgICAgb3IgYSByZW1vdGUgdXJsICgnaHR0cDovLy4uLicsICdodHRwczovLy4uLicsICdmdHA6Ly8uLi4nKVxuICogICBpc1BsYXlpbmcgICA6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IDogdHJ1ZVxuICogICBkaXNtaXNzYWJsZSA6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IDogZmFsc2VcbiAqXG4gKiAgIC8vIGhpZGUgcHJldmlvdXMvbmV4dC9jbG9zZSBidXR0b25zOlxuICogICBoYXNQcmV2ICAgOiBmYWxzZSwgICAgICAvLyBzaG93IHByZXZpb3VzIGJ1dHRvbiwgb3B0aW9uYWwsIGRlZmF1bHQ6IHRydWVcbiAqICAgaGFzTmV4dCAgIDogZmFsc2UsICAgICAgLy8gc2hvdyBuZXh0IGJ1dHRvbiwgb3B0aW9uYWwsIGRlZmF1bHQ6IHRydWVcbiAqICAgaGFzQ2xvc2UgIDogdHJ1ZSwgICAgICAgLy8gc2hvdyBjbG9zZSBidXR0b24sIG9wdGlvbmFsLCBkZWZhdWx0OiBmYWxzZVxuICpcbiAqIC8vIGlPUyBvbmx5LCBvcHRpb25hbFxuICogICBhbGJ1bSAgICAgICA6ICdBYnNvbHV0aW9uJywgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0OiAnJ1xuICogICBkdXJhdGlvbiA6IDYwLCAvLyBvcHRpb25hbCwgZGVmYXVsdDogMFxuICogICBlbGFwc2VkIDogMTAsIC8vIG9wdGlvbmFsLCBkZWZhdWx0OiAwXG4gKiAgIGhhc1NraXBGb3J3YXJkIDogdHJ1ZSwgIC8vIHNob3cgc2tpcCBmb3J3YXJkIGJ1dHRvbiwgb3B0aW9uYWwsIGRlZmF1bHQ6IGZhbHNlXG4gKiAgIGhhc1NraXBCYWNrd2FyZCA6IHRydWUsIC8vIHNob3cgc2tpcCBiYWNrd2FyZCBidXR0b24sIG9wdGlvbmFsLCBkZWZhdWx0OiBmYWxzZVxuICogICBza2lwRm9yd2FyZEludGVydmFsOiAxNSwgLy8gZGlzcGxheSBudW1iZXIgZm9yIHNraXAgZm9yd2FyZCwgb3B0aW9uYWwsIGRlZmF1bHQ6IDBcbiAqICAgc2tpcEJhY2t3YXJkSW50ZXJ2YWw6IDE1LCAvLyBkaXNwbGF5IG51bWJlciBmb3Igc2tpcCBiYWNrd2FyZCwgb3B0aW9uYWwsIGRlZmF1bHQ6IDBcbiAqICAgaGFzU2NydWJiaW5nOiBmYWxzZSwgLy8gZW5hYmxlIHNjcnViYmluZyBmcm9tIGNvbnRyb2wgY2VudGVyIGFuZCBsb2Nrc2NyZWVuIHByb2dyZXNzIGJhciwgb3B0aW9uYWxcbiAqXG4gKiAgIC8vIEFuZHJvaWQgb25seSwgb3B0aW9uYWxcbiAqICAgLy8gdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIHN0YXR1cyBiYXIgd2hlbiB0aGUgbm90aWZpY2F0aW9uIChhbmQgdGhlIHRpY2tlcikgYXJlIHVwZGF0ZWQsIG9wdGlvbmFsXG4gKiAgIHRpY2tlciAgICA6ICdOb3cgcGxheWluZyBcIlRpbWUgaXMgUnVubmluZyBPdXRcIicsXG4gKiAgIC8vIEFsbCBpY29ucyBkZWZhdWx0IHRvIHRoZWlyIGJ1aWx0LWluIGFuZHJvaWQgZXF1aXZhbGVudHNcbiAqICAgcGxheUljb246ICdtZWRpYV9wbGF5JyxcbiAqICAgcGF1c2VJY29uOiAnbWVkaWFfcGF1c2UnLFxuICogICBwcmV2SWNvbjogJ21lZGlhX3ByZXYnLFxuICogICBuZXh0SWNvbjogJ21lZGlhX25leHQnLFxuICogICBjbG9zZUljb246ICdtZWRpYV9jbG9zZScsXG4gKiAgIG5vdGlmaWNhdGlvbkljb246ICdub3RpZmljYXRpb24nXG4gKiAgfSk7XG4gKlxuICogIHRoaXMubXVzaWNDb250cm9scy5zdWJzY3JpYmUoKS5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAqXG4gKiAgICBmdW5jdGlvbiBldmVudHMoYWN0aW9uKSB7XG4gKiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGFjdGlvbikubWVzc2FnZTtcbiAqICAgICAgXHRzd2l0Y2gobWVzc2FnZSkge1xuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtbmV4dCc6XG4gKiAgICAgIFx0XHRcdC8vIERvIHNvbWV0aGluZ1xuICogICAgICBcdFx0XHRicmVhaztcbiAqICAgICAgXHRcdGNhc2UgJ211c2ljLWNvbnRyb2xzLXByZXZpb3VzJzpcbiAqICAgICAgXHRcdFx0Ly8gRG8gc29tZXRoaW5nXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtcGF1c2UnOlxuICogICAgICBcdFx0XHQvLyBEbyBzb21ldGhpbmdcbiAqICAgICAgXHRcdFx0YnJlYWs7XG4gKiAgICAgIFx0XHRjYXNlICdtdXNpYy1jb250cm9scy1wbGF5JzpcbiAqICAgICAgXHRcdFx0Ly8gRG8gc29tZXRoaW5nXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtZGVzdHJveSc6XG4gKiAgICAgIFx0XHRcdC8vIERvIHNvbWV0aGluZ1xuICogICAgICBcdFx0XHRicmVhaztcbiAqXG4gKiAgICAgICAgICAvLyBFeHRlcm5hbCBjb250cm9scyAoaU9TIG9ubHkpXG4gKiAgICAgICAgICBjYXNlICdtdXNpYy1jb250cm9scy10b2dnbGUtcGxheS1wYXVzZScgOlxuICogICAgICBcdFx0XHQvLyBEbyBzb21ldGhpbmdcbiAqICAgICAgXHRcdFx0YnJlYWs7XG4gKiAgICAgICAgICBjYXNlICdtdXNpYy1jb250cm9scy1zZWVrLXRvJzpcbiAqICAgICAgICAgICAgY29uc3Qgc2Vla1RvSW5TZWNvbmRzID0gSlNPTi5wYXJzZShhY3Rpb24pLnBvc2l0aW9uO1xuICogICAgICAgICAgICB0aGlzLm11c2ljQ29udHJvbHMudXBkYXRlRWxhcHNlZCh7XG4gKiAgICAgICAgICAgICAgZWxhcHNlZDogc2Vla1RvSW5TZWNvbmRzLFxuICogICAgICAgICAgICAgIGlzUGxheWluZzogdHJ1ZVxuICogICAgICAgICAgICB9KTtcbiAqICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nXG4gKiAgICAgICAgICAgIGJyZWFrO1xuICogICAgICAgICAgY2FzZSAnbXVzaWMtY29udHJvbHMtc2tpcC1mb3J3YXJkJzpcbiAqICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nXG4gKiAgICAgICAgICAgIGJyZWFrO1xuICogICAgICAgICAgY2FzZSAnbXVzaWMtY29udHJvbHMtc2tpcC1iYWNrd2FyZCc6XG4gKiAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZ1xuICogICAgICAgICAgICBicmVhaztcbiAqXG4gKiAgICAgIFx0XHQvLyBIZWFkc2V0IGV2ZW50cyAoQW5kcm9pZCBvbmx5KVxuICogICAgICBcdFx0Ly8gQWxsIG1lZGlhIGJ1dHRvbiBldmVudHMgYXJlIGxpc3RlZCBiZWxvd1xuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtbWVkaWEtYnV0dG9uJyA6XG4gKiAgICAgIFx0XHRcdC8vIERvIHNvbWV0aGluZ1xuICogICAgICBcdFx0XHRicmVhaztcbiAqICAgICAgXHRcdGNhc2UgJ211c2ljLWNvbnRyb2xzLWhlYWRzZXQtdW5wbHVnZ2VkJzpcbiAqICAgICAgXHRcdFx0Ly8gRG8gc29tZXRoaW5nXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtaGVhZHNldC1wbHVnZ2VkJzpcbiAqICAgICAgXHRcdFx0Ly8gRG8gc29tZXRoaW5nXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xuICogICAgICBcdFx0ZGVmYXVsdDpcbiAqICAgICAgXHRcdFx0YnJlYWs7XG4gKiAgICAgIFx0fVxuICogICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogIHRoaXMubXVzaWNDb250cm9scy5saXN0ZW4oKTsgLy8gYWN0aXZhdGVzIHRoZSBvYnNlcnZhYmxlIGFib3ZlXG4gKlxuICogIHRoaXMubXVzaWNDb250cm9scy51cGRhdGVJc1BsYXlpbmcodHJ1ZSk7XG4gKlxuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIE11c2ljQ29udHJvbHNPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTXVzaWNDb250cm9scycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW11c2ljLWNvbnRyb2xzMicsXG4gIHBsdWdpblJlZjogJ011c2ljQ29udHJvbHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2doZW5yeTIyL2NvcmRvdmEtcGx1Z2luLW11c2ljLWNvbnRyb2xzMicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11c2ljQ29udHJvbHMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIG1lZGlhIGNvbnRyb2xzXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNdXNpY0NvbnRyb2xzT3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlKG9wdGlvbnM6IE11c2ljQ29udHJvbHNPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgbWVkaWEgY29udHJvbGxlclxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgZXZlbnRzIG9mIHRoZSBtZWRpYSBjb250cm9sbGVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGxpc3RlbmluZyBmb3IgZXZlbnRzLCB0aGlzIGVuYWJsZXMgdGhlIE9ic2VydmFibGUgZnJvbSB0aGUgc3Vic2NyaWJlIG1ldGhvZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGxpc3RlbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBwbGF5L3BhdXNlOlxuICAgKlxuICAgKiBAcGFyYW0gaXNQbGF5aW5nIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVJc1BsYXlpbmcoaXNQbGF5aW5nOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZWxhcHNlZCB0aW1lLCBvcHRpb25hbGx5IHRvZ2dsZSBwbGF5L3BhdXNlOlxuICAgKlxuICAgKiBAcGFyYW0gYXJncyB7T2JqZWN0fVxuICAgKiBAcGFyYW0gYXJncy5lbGFwc2VkXG4gICAqIEBwYXJhbSBhcmdzLmlzUGxheWluZ1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgdXBkYXRlRWxhcHNlZChhcmdzOiB7IGVsYXBzZWQ6IG51bWJlcjsgaXNQbGF5aW5nOiBib29sZWFuIH0pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBkaXNtaXNzYWJsZTpcbiAgICpcbiAgICogQHBhcmFtIGRpc21pc3NhYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVEaXNtaXNzYWJsZShkaXNtaXNzYWJsZTogYm9vbGVhbik6IHZvaWQge31cbn1cbiJdfQ==