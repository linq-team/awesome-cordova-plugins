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
import { AwesomeCordovaNativePlugin, checkAvailability, cordovaInstance, instanceAvailability, instancePropertyGet, instancePropertySet, getPromise } from '@awesome-cordova-plugins/core';
var Contact = /** @class */ (function () {
    function Contact() {
        if (checkAvailability('navigator.contacts', 'create', 'Contacts') === true) {
            this._objectInstance = navigator.contacts.create();
        }
    }
    Contact.prototype.clone = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var newContact = new Contact();
                for (var prop in _this) {
                    if (prop === 'id')
                        return;
                    newContact[prop] = _this[prop];
                }
                return newContact;
            }
        })();
    };
    Contact.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Contact.prototype.save = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.save(function (contact) {
                        _this._objectInstance = contact;
                        resolve(_this);
                    }, reject);
                });
            }
        })();
    };
    Object.defineProperty(Contact.prototype, "id", {
        get: function () { return instancePropertyGet(this, "id"); },
        set: function (value) { instancePropertySet(this, "id", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "displayName", {
        get: function () { return instancePropertyGet(this, "displayName"); },
        set: function (value) { instancePropertySet(this, "displayName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () { return instancePropertyGet(this, "name"); },
        set: function (value) { instancePropertySet(this, "name", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "nickname", {
        get: function () { return instancePropertyGet(this, "nickname"); },
        set: function (value) { instancePropertySet(this, "nickname", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phoneNumbers", {
        get: function () { return instancePropertyGet(this, "phoneNumbers"); },
        set: function (value) { instancePropertySet(this, "phoneNumbers", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "emails", {
        get: function () { return instancePropertyGet(this, "emails"); },
        set: function (value) { instancePropertySet(this, "emails", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "addresses", {
        get: function () { return instancePropertyGet(this, "addresses"); },
        set: function (value) { instancePropertySet(this, "addresses", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ims", {
        get: function () { return instancePropertyGet(this, "ims"); },
        set: function (value) { instancePropertySet(this, "ims", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "organizations", {
        get: function () { return instancePropertyGet(this, "organizations"); },
        set: function (value) { instancePropertySet(this, "organizations", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "birthday", {
        get: function () { return instancePropertyGet(this, "birthday"); },
        set: function (value) { instancePropertySet(this, "birthday", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "note", {
        get: function () { return instancePropertyGet(this, "note"); },
        set: function (value) { instancePropertySet(this, "note", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "photos", {
        get: function () { return instancePropertyGet(this, "photos"); },
        set: function (value) { instancePropertySet(this, "photos", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "categories", {
        get: function () { return instancePropertyGet(this, "categories"); },
        set: function (value) { instancePropertySet(this, "categories", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "urls", {
        get: function () { return instancePropertyGet(this, "urls"); },
        set: function (value) { instancePropertySet(this, "urls", value); },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
export { Contact };
var ContactName = /** @class */ (function () {
    function ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix) {
        this.formatted = formatted;
        this.familyName = familyName;
        this.givenName = givenName;
        this.middleName = middleName;
        this.honorificPrefix = honorificPrefix;
        this.honorificSuffix = honorificSuffix;
    }
    return ContactName;
}());
export { ContactName };
var ContactField = /** @class */ (function () {
    function ContactField(type, value, pref) {
        this.type = type;
        this.value = value;
        this.pref = pref;
    }
    return ContactField;
}());
export { ContactField };
var ContactAddress = /** @class */ (function () {
    function ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
        this.pref = pref;
        this.type = type;
        this.formatted = formatted;
        this.streetAddress = streetAddress;
        this.locality = locality;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
    }
    return ContactAddress;
}());
export { ContactAddress };
var ContactOrganization = /** @class */ (function () {
    function ContactOrganization(type, name, department, title, pref) {
        this.type = type;
        this.name = name;
        this.department = department;
        this.title = title;
        this.pref = pref;
    }
    return ContactOrganization;
}());
export { ContactOrganization };
var ContactFindOptions = /** @class */ (function () {
    function ContactFindOptions(filter, multiple, desiredFields, hasPhoneNumber) {
        this.filter = filter;
        this.multiple = multiple;
        this.desiredFields = desiredFields;
        this.hasPhoneNumber = hasPhoneNumber;
    }
    return ContactFindOptions;
}());
export { ContactFindOptions };
var Contacts = /** @class */ (function (_super) {
    __extends(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    Contacts.prototype.create = function () {
        return new Contact();
    };
    Contacts.prototype.find = function (fields, options) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    navigator.contacts.find(fields, function (contacts) {
                        resolve(contacts.map(processContact));
                    }, reject, options);
                });
            }
        })();
    };
    Contacts.prototype.pickContact = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    navigator.contacts.pickContact(function (contact) { return resolve(processContact(contact)); }, reject);
                });
            }
        })();
    };
    Contacts.pluginName = "Contacts";
    Contacts.plugin = "cordova-plugin-contacts";
    Contacts.pluginRef = "navigator.contacts";
    Contacts.repo = "https://github.com/herdwatch-apps/cordova-plugin-contacts";
    Contacts.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Ubuntu", "Windows", "Windows 8", "Windows Phone"];
    return Contacts;
}(AwesomeCordovaNativePlugin));
export { Contacts };
/**
 * @hidden
 */
function processContact(contact) {
    var newContact = new Contact();
    for (var prop in contact) {
        if (typeof contact[prop] === 'function')
            continue;
        newContact[prop] = contact[prop];
    }
    return newContact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY29udGFjdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxrSUFRTCxVQUFVLEVBQ1gsTUFBTSwrQkFBK0IsQ0FBQzs7SUF1R3JDO1FBQ0UsSUFBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFHRCx1QkFBSzs7O3NEQUFZO2dCQUNmLElBQU0sVUFBVSxHQUFRLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssSUFBTSxJQUFJLElBQUksS0FBSSxFQUFFO29CQUN2QixJQUFJLElBQUksS0FBSyxJQUFJO3dCQUFFLE9BQU87b0JBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sVUFBVSxDQUFDO2FBQ25COzs7SUFHRCx3QkFBTTtJQUtOLHNCQUFJOzs7c0RBQWlCO2dCQUNuQixPQUFPLFVBQVUsQ0FBQyxVQUFDLE9BQWlCLEVBQUUsTUFBZ0I7b0JBQ3BELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBWTt3QkFDckMsS0FBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7d0JBQy9CLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OzswQkEvQ21CLHVCQUFFOzs7Ozs7MEJBQ0YsZ0NBQVc7Ozs7OzswQkFDWCx5QkFBSTs7Ozs7OzBCQUNK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Q0FBQyxFQUFoQyxDQUFnQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7Ozs7OzttQkFyWUg7RUErVjhCLDBCQUEwQjtTQUEzQyxRQUFRO0FBeUNyQjs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFDLE9BQVk7SUFDbEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNqQyxLQUFLLElBQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtRQUMxQixJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVU7WUFBRSxTQUFTO1FBQ2xELFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlQ2hlY2ssXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG4gIGNoZWNrQXZhaWxhYmlsaXR5LFxuICBnZXRQcm9taXNlLFxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnksIG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgdHlwZSBDb250YWN0RmllbGRUeXBlID1cbiAgfCAnKidcbiAgfCAnYWRkcmVzc2VzJ1xuICB8ICdiaXJ0aGRheSdcbiAgfCAnY2F0ZWdvcmllcydcbiAgfCAnY291bnRyeSdcbiAgfCAnZGVwYXJ0bWVudCdcbiAgfCAnZGlzcGxheU5hbWUnXG4gIHwgJ2VtYWlscydcbiAgfCAnbmFtZS5mYW1pbHlOYW1lJ1xuICB8ICduYW1lLmZvcm1hdHRlZCdcbiAgfCAnbmFtZS5naXZlbk5hbWUnXG4gIHwgJ25hbWUuaG9ub3JpZmljUHJlZml4J1xuICB8ICduYW1lLmhvbm9yaWZpY1N1ZmZpeCdcbiAgfCAnaWQnXG4gIHwgJ2ltcydcbiAgfCAnbG9jYWxpdHknXG4gIHwgJ25hbWUubWlkZGxlTmFtZSdcbiAgfCAnbmFtZSdcbiAgfCAnbmlja25hbWUnXG4gIHwgJ25vdGUnXG4gIHwgJ29yZ2FuaXphdGlvbnMnXG4gIHwgJ3Bob25lTnVtYmVycydcbiAgfCAncGhvdG9zJ1xuICB8ICdwb3N0YWxDb2RlJ1xuICB8ICdyZWdpb24nXG4gIHwgJ3N0cmVldEFkZHJlc3MnXG4gIHwgJ3RpdGxlJ1xuICB8ICd1cmxzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdFByb3BlcnRpZXMge1xuICAvKiogQSBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllci4gKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIgb24gQW5kcm9pZC4gKi9cbiAgcmF3SWQ/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoaXMgQ29udGFjdCwgc3VpdGFibGUgZm9yIGRpc3BsYXkgdG8gZW5kIHVzZXJzLiAqL1xuICBkaXNwbGF5TmFtZT86IHN0cmluZztcblxuICAvKiogQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNvbXBvbmVudHMgb2YgYSBwZXJzb25zIG5hbWUuICovXG4gIG5hbWU/OiBJQ29udGFjdE5hbWU7XG5cbiAgLyoqIEEgY2FzdWFsIG5hbWUgYnkgd2hpY2ggdG8gYWRkcmVzcyB0aGUgY29udGFjdC4gKi9cbiAgbmlja25hbWU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIHBob25lIG51bWJlcnMuICovXG4gIHBob25lTnVtYmVycz86IElDb250YWN0RmllbGRbXTtcblxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSBjb250YWN0J3MgZW1haWwgYWRkcmVzc2VzLiAqL1xuICBlbWFpbHM/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIGFkZHJlc3Nlcy4gKi9cbiAgYWRkcmVzc2VzPzogSUNvbnRhY3RBZGRyZXNzW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIElNIGFkZHJlc3Nlcy4gKi9cbiAgaW1zPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBvcmdhbml6YXRpb25zLiAqL1xuICBvcmdhbml6YXRpb25zPzogSUNvbnRhY3RPcmdhbml6YXRpb25bXTtcblxuICAvKiogVGhlIGJpcnRoZGF5IG9mIHRoZSBjb250YWN0LiAqL1xuICBiaXJ0aGRheT86IERhdGU7XG5cbiAgLyoqIEEgbm90ZSBhYm91dCB0aGUgY29udGFjdC4gKi9cbiAgbm90ZT86IHN0cmluZztcblxuICAvKiogQW4gYXJyYXkgb2YgdGhlIGNvbnRhY3QncyBwaG90b3MuICovXG4gIHBob3Rvcz86IElDb250YWN0RmllbGRbXTtcblxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSB1c2VyLWRlZmluZWQgY2F0ZWdvcmllcyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRhY3QuICovXG4gIGNhdGVnb3JpZXM/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIHdlYiBwYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRhY3QuICovXG4gIHVybHM/OiBJQ29udGFjdEZpZWxkW107XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdCBpbXBsZW1lbnRzIElDb250YWN0UHJvcGVydGllcyB7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgaWQ6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5hbWU6IElDb250YWN0TmFtZTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuaWNrbmFtZTogc3RyaW5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHBob25lTnVtYmVyczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGVtYWlsczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGFkZHJlc3NlczogSUNvbnRhY3RBZGRyZXNzW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgaW1zOiBJQ29udGFjdEZpZWxkW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgb3JnYW5pemF0aW9uczogSUNvbnRhY3RPcmdhbml6YXRpb25bXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBiaXJ0aGRheTogRGF0ZTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3RlOiBzdHJpbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgcGhvdG9zOiBJQ29udGFjdEZpZWxkW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgY2F0ZWdvcmllczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHVybHM6IElDb250YWN0RmllbGRbXTtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KCduYXZpZ2F0b3IuY29udGFjdHMnLCAnY3JlYXRlJywgJ0NvbnRhY3RzJykgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmF2aWdhdG9yLmNvbnRhY3RzLmNyZWF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgY2xvbmUoKTogQ29udGFjdCB7XG4gICAgY29uc3QgbmV3Q29udGFjdDogYW55ID0gbmV3IENvbnRhY3QoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgPT09ICdpZCcpIHJldHVybjtcbiAgICAgIG5ld0NvbnRhY3RbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udGFjdDtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBASW5zdGFuY2VDaGVjaygpXG4gIHNhdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNhdmUoKGNvbnRhY3Q6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGNvbnRhY3Q7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RXJyb3Ige1xuICAvKiogRXJyb3IgY29kZSAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiBFcnJvciBtZXNzYWdlICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENvbnRhY3RFcnJvcjoge1xuICBuZXcgKGNvZGU6IG51bWJlcik6IElDb250YWN0RXJyb3I7XG4gIFVOS05PV05fRVJST1I6IG51bWJlcjtcbiAgSU5WQUxJRF9BUkdVTUVOVF9FUlJPUjogbnVtYmVyO1xuICBUSU1FT1VUX0VSUk9SOiBudW1iZXI7XG4gIFBFTkRJTkdfT1BFUkFUSU9OX0VSUk9SOiBudW1iZXI7XG4gIElPX0VSUk9SOiBudW1iZXI7XG4gIE5PVF9TVVBQT1JURURfRVJST1I6IG51bWJlcjtcbiAgUEVSTUlTU0lPTl9ERU5JRURfRVJST1I6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3ROYW1lIHtcbiAgLyoqIFRoZSBjb21wbGV0ZSBuYW1lIG9mIHRoZSBjb250YWN0LiAqL1xuICBmb3JtYXR0ZWQ/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIGZhbWlseSBuYW1lLiAqL1xuICBmYW1pbHlOYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBnaXZlbiBuYW1lLiAqL1xuICBnaXZlbk5hbWU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIG1pZGRsZSBuYW1lLiAqL1xuICBtaWRkbGVOYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBwcmVmaXggKGV4YW1wbGUgTXIuIG9yIERyLikgKi9cbiAgaG9ub3JpZmljUHJlZml4Pzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBzdWZmaXggKGV4YW1wbGUgRXNxLikuICovXG4gIGhvbm9yaWZpY1N1ZmZpeD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0TmFtZSBpbXBsZW1lbnRzIElDb250YWN0TmFtZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmb3JtYXR0ZWQ/OiBzdHJpbmcsXG4gICAgcHVibGljIGZhbWlseU5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIGdpdmVuTmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgbWlkZGxlTmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgaG9ub3JpZmljUHJlZml4Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBob25vcmlmaWNTdWZmaXg/OiBzdHJpbmdcbiAgKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RmllbGQge1xuICAvKiogQSBzdHJpbmcgdGhhdCBpbmRpY2F0ZXMgd2hhdCB0eXBlIG9mIGZpZWxkIHRoaXMgaXMsIGhvbWUgZm9yIGV4YW1wbGUuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkLCBzdWNoIGFzIGEgcGhvbmUgbnVtYmVyIG9yIGVtYWlsIGFkZHJlc3MuICovXG4gIHZhbHVlPzogc3RyaW5nO1xuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0RmllbGQgY29udGFpbnMgdGhlIHVzZXIncyBwcmVmZXJyZWQgdmFsdWUuICovXG4gIHByZWY/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RGaWVsZCBpbXBsZW1lbnRzIElDb250YWN0RmllbGQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZT86IHN0cmluZywgcHVibGljIHZhbHVlPzogc3RyaW5nLCBwdWJsaWMgcHJlZj86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RBZGRyZXNzIHtcbiAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgQ29udGFjdEFkZHJlc3MgY29udGFpbnMgdGhlIHVzZXIncyBwcmVmZXJyZWQgdmFsdWUuICovXG4gIHByZWY/OiBib29sZWFuO1xuICAvKiogQSBzdHJpbmcgaW5kaWNhdGluZyB3aGF0IHR5cGUgb2YgZmllbGQgdGhpcyBpcywgaG9tZSBmb3IgZXhhbXBsZS4gKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIFRoZSBmdWxsIGFkZHJlc3MgZm9ybWF0dGVkIGZvciBkaXNwbGF5LiAqL1xuICBmb3JtYXR0ZWQ/OiBzdHJpbmc7XG4gIC8qKiBUaGUgZnVsbCBzdHJlZXQgYWRkcmVzcy4gKi9cbiAgc3RyZWV0QWRkcmVzcz86IHN0cmluZztcbiAgLyoqIFRoZSBjaXR5IG9yIGxvY2FsaXR5LiAqL1xuICBsb2NhbGl0eT86IHN0cmluZztcbiAgLyoqIFRoZSBzdGF0ZSBvciByZWdpb24uICovXG4gIHJlZ2lvbj86IHN0cmluZztcbiAgLyoqIFRoZSB6aXAgY29kZSBvciBwb3N0YWwgY29kZS4gKi9cbiAgcG9zdGFsQ29kZT86IHN0cmluZztcbiAgLyoqIFRoZSBjb3VudHJ5IG5hbWUuICovXG4gIGNvdW50cnk/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdEFkZHJlc3MgaW1wbGVtZW50cyBJQ29udGFjdEFkZHJlc3Mge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcHJlZj86IGJvb2xlYW4sXG4gICAgcHVibGljIHR5cGU/OiBzdHJpbmcsXG4gICAgcHVibGljIGZvcm1hdHRlZD86IHN0cmluZyxcbiAgICBwdWJsaWMgc3RyZWV0QWRkcmVzcz86IHN0cmluZyxcbiAgICBwdWJsaWMgbG9jYWxpdHk/OiBzdHJpbmcsXG4gICAgcHVibGljIHJlZ2lvbj86IHN0cmluZyxcbiAgICBwdWJsaWMgcG9zdGFsQ29kZT86IHN0cmluZyxcbiAgICBwdWJsaWMgY291bnRyeT86IHN0cmluZ1xuICApIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RPcmdhbml6YXRpb24ge1xuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0T3JnYW5pemF0aW9uIGNvbnRhaW5zIHRoZSB1c2VyJ3MgcHJlZmVycmVkIHZhbHVlLiAqL1xuICBwcmVmPzogYm9vbGVhbjtcbiAgLyoqIEEgc3RyaW5nIHRoYXQgaW5kaWNhdGVzIHdoYXQgdHlwZSBvZiBmaWVsZCB0aGlzIGlzLCBob21lIGZvciBleGFtcGxlLiAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIG9yZ2FuaXphdGlvbi4gKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqIFRoZSBkZXBhcnRtZW50IHRoZSBjb250cmFjdCB3b3JrcyBmb3IuICovXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIHRpdGxlIGF0IHRoZSBvcmdhbml6YXRpb24uICovXG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RPcmdhbml6YXRpb24gaW1wbGVtZW50cyBJQ29udGFjdE9yZ2FuaXphdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0eXBlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxuICAgIHB1YmxpYyBkZXBhcnRtZW50Pzogc3RyaW5nLFxuICAgIHB1YmxpYyB0aXRsZT86IHN0cmluZyxcbiAgICBwdWJsaWMgcHJlZj86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG4vKiogU2VhcmNoIG9wdGlvbnMgdG8gZmlsdGVyIG5hdmlnYXRvci5jb250YWN0cy4gICovXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RmluZE9wdGlvbnMge1xuICAvKiogVGhlIHNlYXJjaCBzdHJpbmcgdXNlZCB0byBmaW5kIG5hdmlnYXRvci5jb250YWN0cy4gKi9cbiAgZmlsdGVyPzogc3RyaW5nO1xuICAvKiogRGV0ZXJtaW5lcyBpZiB0aGUgZmluZCBvcGVyYXRpb24gcmV0dXJucyBtdWx0aXBsZSBuYXZpZ2F0b3IuY29udGFjdHMuIERlZmF1bHRzIHRvIGZhbHNlLiAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIC8qKiBDb250YWN0IGZpZWxkcyB0byBiZSByZXR1cm5lZCBiYWNrLiBJZiBzcGVjaWZpZWQsIHRoZSByZXN1bHRpbmcgQ29udGFjdCBvYmplY3Qgb25seSBmZWF0dXJlcyB2YWx1ZXMgZm9yIHRoZXNlIGZpZWxkcy4gKi9cbiAgZGVzaXJlZEZpZWxkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogKEFuZHJvaWQgb25seSk6IEZpbHRlcnMgdGhlIHNlYXJjaCB0byBvbmx5IHJldHVybiBjb250YWN0cyB3aXRoIGEgcGhvbmUgbnVtYmVyIGluZm9ybWVkLlxuICAgKi9cbiAgaGFzUGhvbmVOdW1iZXI/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RGaW5kT3B0aW9ucyBpbXBsZW1lbnRzIElDb250YWN0RmluZE9wdGlvbnMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZmlsdGVyPzogc3RyaW5nLFxuICAgIHB1YmxpYyBtdWx0aXBsZT86IGJvb2xlYW4sXG4gICAgcHVibGljIGRlc2lyZWRGaWVsZHM/OiBzdHJpbmdbXSxcbiAgICBwdWJsaWMgaGFzUGhvbmVOdW1iZXI/OiBib29sZWFuXG4gICkge31cbn1cblxuLyoqXG4gKiBAbmFtZSBDb250YWN0c1xuICogQHByZW1pZXIgY29udGFjdHNcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIGFuZCBtYW5hZ2UgQ29udGFjdHMgb24gdGhlIGRldmljZS5cbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb250YWN0cywgQ29udGFjdCwgQ29udGFjdEZpZWxkLCBDb250YWN0TmFtZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29udGFjdHMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzOiBDb250YWN0cykgeyB9XG4gKlxuICogbGV0IGNvbnRhY3Q6IENvbnRhY3QgPSB0aGlzLmNvbnRhY3RzLmNyZWF0ZSgpO1xuICpcbiAqIGNvbnRhY3QubmFtZSA9IG5ldyBDb250YWN0TmFtZShudWxsLCAnU21pdGgnLCAnSm9obicpO1xuICogY29udGFjdC5waG9uZU51bWJlcnMgPSBbbmV3IENvbnRhY3RGaWVsZCgnbW9iaWxlJywgJzY0NzEyMzQ1NjcnKV07XG4gKiBjb250YWN0LnNhdmUoKS50aGVuKFxuICogICAoKSA9PiBjb25zb2xlLmxvZygnQ29udGFjdCBzYXZlZCEnLCBjb250YWN0KSxcbiAqICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBjb250YWN0LicsIGVycm9yKVxuICogKTtcbiAqXG4gKiBgYGBcbiAqIEBjbGFzc2VzXG4gKiBDb250YWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSUNvbnRhY3RQcm9wZXJ0aWVzXG4gKiBJQ29udGFjdEVycm9yXG4gKiBJQ29udGFjdE5hbWVcbiAqIElDb250YWN0RmllbGRcbiAqIElDb250YWN0QWRkcmVzc1xuICogSUNvbnRhY3RPcmdhbml6YXRpb25cbiAqIElDb250YWN0RmluZE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDb250YWN0cycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNvbnRhY3RzJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNvbnRhY3RzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oZXJkd2F0Y2gtYXBwcy9jb3Jkb3ZhLXBsdWdpbi1jb250YWN0cycsXG4gIHBsYXRmb3JtczogW1xuICAgICdBbmRyb2lkJyxcbiAgICAnQmxhY2tCZXJyeSAxMCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdGaXJlZm94IE9TJyxcbiAgICAnaU9TJyxcbiAgICAnVWJ1bnR1JyxcbiAgICAnV2luZG93cycsXG4gICAgJ1dpbmRvd3MgOCcsXG4gICAgJ1dpbmRvd3MgUGhvbmUnLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0cyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbmdsZSBjb250YWN0LlxuICAgKiBAcmV0dXJucyB7Q29udGFjdH0gUmV0dXJucyBhIENvbnRhY3Qgb2JqZWN0XG4gICAqL1xuICBjcmVhdGUoKTogQ29udGFjdCB7XG4gICAgcmV0dXJuIG5ldyBDb250YWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBjb250YWN0cyBpbiB0aGUgQ29udGFjdHMgbGlzdC5cbiAgICogQHBhcmFtIHtDb250YWN0RmllbGRUeXBlW119IGZpZWxkcyBDb250YWN0IGZpZWxkcyB0byBiZSB1c2VkIGFzIGEgc2VhcmNoIHF1YWxpZmllclxuICAgKiBAcGFyYW0ge0lDb250YWN0RmluZE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25hbCBvcHRpb25zIGZvciB0aGUgcXVlcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udGFjdFtdPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzZWFyY2ggcmVzdWx0cyAoYW4gYXJyYXkgb2YgQ29udGFjdCBvYmplY3RzKVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGZpbmQoZmllbGRzOiBDb250YWN0RmllbGRUeXBlW10sIG9wdGlvbnM/OiBJQ29udGFjdEZpbmRPcHRpb25zKTogUHJvbWlzZTxDb250YWN0W10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIG5hdmlnYXRvci5jb250YWN0cy5maW5kKFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIChjb250YWN0czogYW55W10pID0+IHtcbiAgICAgICAgICByZXNvbHZlKGNvbnRhY3RzLm1hcChwcm9jZXNzQ29udGFjdCkpO1xuICAgICAgICB9LFxuICAgICAgICByZWplY3QsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIENvbnRhY3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRhY3Q+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHNlbGVjdGVkIENvbnRhY3RcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBwaWNrQ29udGFjdCgpOiBQcm9taXNlPENvbnRhY3Q+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIG5hdmlnYXRvci5jb250YWN0cy5waWNrQ29udGFjdCgoY29udGFjdDogYW55KSA9PiByZXNvbHZlKHByb2Nlc3NDb250YWN0KGNvbnRhY3QpKSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc0NvbnRhY3QoY29udGFjdDogYW55KSB7XG4gIGNvbnN0IG5ld0NvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuICBmb3IgKGNvbnN0IHByb3AgaW4gY29udGFjdCkge1xuICAgIGlmICh0eXBlb2YgY29udGFjdFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG4gICAgbmV3Q29udGFjdFtwcm9wXSA9IGNvbnRhY3RbcHJvcF07XG4gIH1cbiAgcmV0dXJuIG5ld0NvbnRhY3Q7XG59XG4iXX0=