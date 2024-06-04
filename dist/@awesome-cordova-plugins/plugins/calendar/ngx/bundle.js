'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var Calendar = /** @class */ (function (_super) {
    tslib.__extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calendar.prototype.hasReadWritePermission = function () { return core.cordova(this, "hasReadWritePermission", {}, arguments); };
    Calendar.prototype.hasReadPermission = function () { return core.cordova(this, "hasReadPermission", {}, arguments); };
    Calendar.prototype.hasWritePermission = function () { return core.cordova(this, "hasWritePermission", {}, arguments); };
    Calendar.prototype.requestWritePermission = function () { return core.cordova(this, "requestWritePermission", {}, arguments); };
    Calendar.prototype.requestReadPermission = function () { return core.cordova(this, "requestReadPermission", {}, arguments); };
    Calendar.prototype.requestReadWritePermission = function () { return core.cordova(this, "requestReadWritePermission", {}, arguments); };
    Calendar.prototype.createCalendar = function (nameOrOptions) { return core.cordova(this, "createCalendar", {}, arguments); };
    Calendar.prototype.deleteCalendar = function (name) { return core.cordova(this, "deleteCalendar", {}, arguments); };
    Calendar.prototype.getCalendarOptions = function () { return core.cordova(this, "getCalendarOptions", { "sync": true }, arguments); };
    Calendar.prototype.getCreateCalendarOptions = function () { return core.cordova(this, "getCreateCalendarOptions", { "sync": true }, arguments); };
    Calendar.prototype.createEvent = function (title, location, notes, startDate, endDate) { return core.cordova(this, "createEvent", {}, arguments); };
    Calendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return core.cordova(this, "createEventWithOptions", {}, arguments); };
    Calendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate) { return core.cordova(this, "createEventInteractively", {}, arguments); };
    Calendar.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return core.cordova(this, "createEventInteractivelyWithOptions", {}, arguments); };
    Calendar.prototype.findEvent = function (title, location, notes, startDate, endDate) { return core.cordova(this, "findEvent", {}, arguments); };
    Calendar.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return core.cordova(this, "findEventWithOptions", {}, arguments); };
    Calendar.prototype.listEventsInRange = function (startDate, endDate) { return core.cordova(this, "listEventsInRange", { "platforms": ["Android"] }, arguments); };
    Calendar.prototype.listCalendars = function () { return core.cordova(this, "listCalendars", {}, arguments); };
    Calendar.prototype.findAllEventsInNamedCalendar = function (calendarName) { return core.cordova(this, "findAllEventsInNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return core.cordova(this, "modifyEvent", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) { return core.cordova(this, "modifyEventWithOptions", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate) { return core.cordova(this, "deleteEvent", {}, arguments); };
    Calendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return core.cordova(this, "deleteEventFromNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.deleteEventById = function (id, fromDate) { return core.cordova(this, "deleteEventById", {}, arguments); };
    Calendar.prototype.openCalendar = function (date) { return core.cordova(this, "openCalendar", {}, arguments); };
    Calendar.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Calendar, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Calendar.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Calendar });
    Calendar.pluginName = "Calendar";
    Calendar.plugin = "cordova-plugin-calendar";
    Calendar.pluginRef = "plugins.calendar";
    Calendar.repo = "https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin";
    Calendar.platforms = ["Android", "iOS"];
    Calendar = tslib.__decorate([], Calendar);
    return Calendar;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Calendar, decorators: [{
            type: i0.Injectable
        }], propDecorators: { hasReadWritePermission: [], hasReadPermission: [], hasWritePermission: [], requestWritePermission: [], requestReadPermission: [], requestReadWritePermission: [], createCalendar: [], deleteCalendar: [], getCalendarOptions: [], getCreateCalendarOptions: [], createEvent: [], createEventWithOptions: [], createEventInteractively: [], createEventInteractivelyWithOptions: [], findEvent: [], findEventWithOptions: [], listEventsInRange: [], listCalendars: [], findAllEventsInNamedCalendar: [], modifyEvent: [], modifyEventWithOptions: [], deleteEvent: [], deleteEventFromNamedCalendar: [], deleteEventById: [], openCalendar: [] } });

exports.Calendar = Calendar;
