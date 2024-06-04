import { __decorate, __extends } from "tslib";
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
    Contacts = __decorate([], Contacts);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY29udGFjdHMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLGtJQVFMLFVBQVUsRUFDWCxNQUFNLCtCQUErQixDQUFDOztJQXVHckM7UUFDRSxJQUFJLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUdELHVCQUFLOzs7c0RBQVk7Z0JBQ2YsSUFBTSxVQUFVLEdBQVEsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDdEMsS0FBSyxJQUFNLElBQUksSUFBSSxLQUFJLEVBQUU7b0JBQ3ZCLElBQUksSUFBSSxLQUFLLElBQUk7d0JBQUUsT0FBTztvQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7Z0JBQ0QsT0FBTyxVQUFVLENBQUM7YUFDbkI7OztJQUdELHdCQUFNO0lBS04sc0JBQUk7OztzREFBaUI7Z0JBQ25CLE9BQU8sVUFBVSxDQUFDLFVBQUMsT0FBaUIsRUFBRSxNQUFnQjtvQkFDcEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFZO3dCQUNyQyxLQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQzt3QkFDL0IsT0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLENBQUM7YUFDSjs7OzBCQS9DbUIsdUJBQUU7Ozs7OzswQkFDRixnQ0FBVzs7Ozs7OzBCQUNYLHlCQUFJOzs7Ozs7MEJBQ0osNkJBQVE7Ozs7OzswQkFDUixpQ0FBWTs7Ozs7OzBCQUNaLDJCQUFNOzs7Ozs7MEJBQ04sOEJBQVM7Ozs7OzswQkFDVCx3QkFBRzs7Ozs7OzBCQUNILGtDQUFhOzs7Ozs7MEJBQ2IsNkJBQVE7Ozs7OzswQkFDUix5QkFBSTs7Ozs7OzBCQUNKLDJCQUFNOzs7Ozs7MEJBQ04sK0JBQVU7Ozs7OzswQkFDVix5QkFBSTs7Ozs7O2tCQTNHMUI7Ozs7SUEyTEUscUJBQ1MsU0FBa0IsRUFDbEIsVUFBbUIsRUFDbkIsU0FBa0IsRUFDbEIsVUFBbUIsRUFDbkIsZUFBd0IsRUFDeEIsZUFBd0I7UUFMeEIsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixvQkFBZSxHQUFmLGVBQWUsQ0FBUztRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBUztJQUM5QixDQUFDO3NCQWxNTjs7OztJQWtORSxzQkFBbUIsSUFBYSxFQUFTLEtBQWMsRUFBUyxJQUFjO1FBQTNELFNBQUksR0FBSixJQUFJLENBQVM7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBVTtJQUFHLENBQUM7dUJBbE5wRjs7OztJQTRPRSx3QkFDUyxJQUFjLEVBQ2QsSUFBYSxFQUNiLFNBQWtCLEVBQ2xCLGFBQXNCLEVBQ3RCLFFBQWlCLEVBQ2pCLE1BQWUsRUFDZixVQUFtQixFQUNuQixPQUFnQjtRQVBoQixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3RCLENBQUM7eUJBclBOOzs7O0lBeVFFLDZCQUNTLElBQWEsRUFDYixJQUFhLEVBQ2IsVUFBbUIsRUFDbkIsS0FBYyxFQUNkLElBQWM7UUFKZCxTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLFNBQUksR0FBSixJQUFJLENBQVU7SUFDcEIsQ0FBQzs4QkEvUU47Ozs7SUFvU0UsNEJBQ1MsTUFBZSxFQUNmLFFBQWtCLEVBQ2xCLGFBQXdCLEVBQ3hCLGNBQXdCO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFVO0lBQzlCLENBQUM7NkJBelNOOzs7O0lBK1Y4Qiw0QkFBMEI7Ozs7SUFDdEQ7OztPQUdHO0lBQ0gseUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBU0QsdUJBQUksYUFBQyxNQUEwQixFQUFFLE9BQTZCOzs7bURBQXNCO2dCQUNsRixPQUFPLFVBQVUsQ0FBQyxVQUFDLE9BQWlCLEVBQUUsTUFBZ0I7b0JBQ3BELFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNyQixNQUFNLEVBQ04sVUFBQyxRQUFlO3dCQUNkLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLENBQUMsRUFDRCxNQUFNLEVBQ04sT0FBTyxDQUNSLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBT0QsOEJBQVc7OzttREFBcUI7Z0JBQzlCLE9BQU8sVUFBVSxDQUFDLFVBQUMsT0FBaUIsRUFBRSxNQUFnQjtvQkFDcEQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBQyxPQUFZLElBQUssT0FBQSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQWhDLENBQWdDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O0lBdENVLFFBQVEsa0JBQVIsUUFBUTttQkEvVnJCO0VBK1Y4QiwwQkFBMEI7U0FBM0MsUUFBUTtBQXlDckI7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBQyxPQUFZO0lBQ2xDLElBQU0sVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDakMsS0FBSyxJQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7UUFDMUIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVO1lBQUUsU0FBUztRQUNsRCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZUNoZWNrLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxuICBjaGVja0F2YWlsYWJpbGl0eSxcbiAgZ2V0UHJvbWlzZSxcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55LCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IHR5cGUgQ29udGFjdEZpZWxkVHlwZSA9XG4gIHwgJyonXG4gIHwgJ2FkZHJlc3NlcydcbiAgfCAnYmlydGhkYXknXG4gIHwgJ2NhdGVnb3JpZXMnXG4gIHwgJ2NvdW50cnknXG4gIHwgJ2RlcGFydG1lbnQnXG4gIHwgJ2Rpc3BsYXlOYW1lJ1xuICB8ICdlbWFpbHMnXG4gIHwgJ25hbWUuZmFtaWx5TmFtZSdcbiAgfCAnbmFtZS5mb3JtYXR0ZWQnXG4gIHwgJ25hbWUuZ2l2ZW5OYW1lJ1xuICB8ICduYW1lLmhvbm9yaWZpY1ByZWZpeCdcbiAgfCAnbmFtZS5ob25vcmlmaWNTdWZmaXgnXG4gIHwgJ2lkJ1xuICB8ICdpbXMnXG4gIHwgJ2xvY2FsaXR5J1xuICB8ICduYW1lLm1pZGRsZU5hbWUnXG4gIHwgJ25hbWUnXG4gIHwgJ25pY2tuYW1lJ1xuICB8ICdub3RlJ1xuICB8ICdvcmdhbml6YXRpb25zJ1xuICB8ICdwaG9uZU51bWJlcnMnXG4gIHwgJ3Bob3RvcydcbiAgfCAncG9zdGFsQ29kZSdcbiAgfCAncmVnaW9uJ1xuICB8ICdzdHJlZXRBZGRyZXNzJ1xuICB8ICd0aXRsZSdcbiAgfCAndXJscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RQcm9wZXJ0aWVzIHtcbiAgLyoqIEEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIuICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKiBBIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyIG9uIEFuZHJvaWQuICovXG4gIHJhd0lkPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGlzIENvbnRhY3QsIHN1aXRhYmxlIGZvciBkaXNwbGF5IHRvIGVuZCB1c2Vycy4gKi9cbiAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjb21wb25lbnRzIG9mIGEgcGVyc29ucyBuYW1lLiAqL1xuICBuYW1lPzogSUNvbnRhY3ROYW1lO1xuXG4gIC8qKiBBIGNhc3VhbCBuYW1lIGJ5IHdoaWNoIHRvIGFkZHJlc3MgdGhlIGNvbnRhY3QuICovXG4gIG5pY2tuYW1lPzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBwaG9uZSBudW1iZXJzLiAqL1xuICBwaG9uZU51bWJlcnM/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIGVtYWlsIGFkZHJlc3Nlcy4gKi9cbiAgZW1haWxzPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBhZGRyZXNzZXMuICovXG4gIGFkZHJlc3Nlcz86IElDb250YWN0QWRkcmVzc1tdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBJTSBhZGRyZXNzZXMuICovXG4gIGltcz86IElDb250YWN0RmllbGRbXTtcblxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSBjb250YWN0J3Mgb3JnYW5pemF0aW9ucy4gKi9cbiAgb3JnYW5pemF0aW9ucz86IElDb250YWN0T3JnYW5pemF0aW9uW107XG5cbiAgLyoqIFRoZSBiaXJ0aGRheSBvZiB0aGUgY29udGFjdC4gKi9cbiAgYmlydGhkYXk/OiBEYXRlO1xuXG4gIC8qKiBBIG5vdGUgYWJvdXQgdGhlIGNvbnRhY3QuICovXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIGFycmF5IG9mIHRoZSBjb250YWN0J3MgcGhvdG9zLiAqL1xuICBwaG90b3M/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgdXNlci1kZWZpbmVkIGNhdGVnb3JpZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xuICBjYXRlZ29yaWVzPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiB3ZWIgcGFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xuICB1cmxzPzogSUNvbnRhY3RGaWVsZFtdO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3QgaW1wbGVtZW50cyBJQ29udGFjdFByb3BlcnRpZXMge1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGlkOiBzdHJpbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuYW1lOiBJQ29udGFjdE5hbWU7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmlja25hbWU6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBwaG9uZU51bWJlcnM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlbWFpbHM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBhZGRyZXNzZXM6IElDb250YWN0QWRkcmVzc1tdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGltczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9yZ2FuaXphdGlvbnM6IElDb250YWN0T3JnYW5pemF0aW9uW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgYmlydGhkYXk6IERhdGU7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm90ZTogc3RyaW5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHBob3RvczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGNhdGVnb3JpZXM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSB1cmxzOiBJQ29udGFjdEZpZWxkW107XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eSgnbmF2aWdhdG9yLmNvbnRhY3RzJywgJ2NyZWF0ZScsICdDb250YWN0cycpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5hdmlnYXRvci5jb250YWN0cy5jcmVhdGUoKTtcbiAgICB9XG4gIH1cblxuICBASW5zdGFuY2VDaGVjaygpXG4gIGNsb25lKCk6IENvbnRhY3Qge1xuICAgIGNvbnN0IG5ld0NvbnRhY3Q6IGFueSA9IG5ldyBDb250YWN0KCk7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmIChwcm9wID09PSAnaWQnKSByZXR1cm47XG4gICAgICBuZXdDb250YWN0W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NvbnRhY3Q7XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBzYXZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5zYXZlKChjb250YWN0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBjb250YWN0O1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEVycm9yIHtcbiAgLyoqIEVycm9yIGNvZGUgKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKiogRXJyb3IgbWVzc2FnZSAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDb250YWN0RXJyb3I6IHtcbiAgbmV3IChjb2RlOiBudW1iZXIpOiBJQ29udGFjdEVycm9yO1xuICBVTktOT1dOX0VSUk9SOiBudW1iZXI7XG4gIElOVkFMSURfQVJHVU1FTlRfRVJST1I6IG51bWJlcjtcbiAgVElNRU9VVF9FUlJPUjogbnVtYmVyO1xuICBQRU5ESU5HX09QRVJBVElPTl9FUlJPUjogbnVtYmVyO1xuICBJT19FUlJPUjogbnVtYmVyO1xuICBOT1RfU1VQUE9SVEVEX0VSUk9SOiBudW1iZXI7XG4gIFBFUk1JU1NJT05fREVOSUVEX0VSUk9SOiBudW1iZXI7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0TmFtZSB7XG4gIC8qKiBUaGUgY29tcGxldGUgbmFtZSBvZiB0aGUgY29udGFjdC4gKi9cbiAgZm9ybWF0dGVkPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBmYW1pbHkgbmFtZS4gKi9cbiAgZmFtaWx5TmFtZT86IHN0cmluZztcbiAgLyoqIFRoZSBjb250YWN0J3MgZ2l2ZW4gbmFtZS4gKi9cbiAgZ2l2ZW5OYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBtaWRkbGUgbmFtZS4gKi9cbiAgbWlkZGxlTmFtZT86IHN0cmluZztcbiAgLyoqIFRoZSBjb250YWN0J3MgcHJlZml4IChleGFtcGxlIE1yLiBvciBEci4pICovXG4gIGhvbm9yaWZpY1ByZWZpeD86IHN0cmluZztcbiAgLyoqIFRoZSBjb250YWN0J3Mgc3VmZml4IChleGFtcGxlIEVzcS4pLiAqL1xuICBob25vcmlmaWNTdWZmaXg/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdE5hbWUgaW1wbGVtZW50cyBJQ29udGFjdE5hbWUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZm9ybWF0dGVkPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmYW1pbHlOYW1lPzogc3RyaW5nLFxuICAgIHB1YmxpYyBnaXZlbk5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIG1pZGRsZU5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIGhvbm9yaWZpY1ByZWZpeD86IHN0cmluZyxcbiAgICBwdWJsaWMgaG9ub3JpZmljU3VmZml4Pzogc3RyaW5nXG4gICkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEZpZWxkIHtcbiAgLyoqIEEgc3RyaW5nIHRoYXQgaW5kaWNhdGVzIHdoYXQgdHlwZSBvZiBmaWVsZCB0aGlzIGlzLCBob21lIGZvciBleGFtcGxlLiAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCwgc3VjaCBhcyBhIHBob25lIG51bWJlciBvciBlbWFpbCBhZGRyZXNzLiAqL1xuICB2YWx1ZT86IHN0cmluZztcbiAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgQ29udGFjdEZpZWxkIGNvbnRhaW5zIHRoZSB1c2VyJ3MgcHJlZmVycmVkIHZhbHVlLiAqL1xuICBwcmVmPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0RmllbGQgaW1wbGVtZW50cyBJQ29udGFjdEZpZWxkIHtcbiAgY29uc3RydWN0b3IocHVibGljIHR5cGU/OiBzdHJpbmcsIHB1YmxpYyB2YWx1ZT86IHN0cmluZywgcHVibGljIHByZWY/OiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0QWRkcmVzcyB7XG4gIC8qKiBTZXQgdG8gdHJ1ZSBpZiB0aGlzIENvbnRhY3RBZGRyZXNzIGNvbnRhaW5zIHRoZSB1c2VyJ3MgcHJlZmVycmVkIHZhbHVlLiAqL1xuICBwcmVmPzogYm9vbGVhbjtcbiAgLyoqIEEgc3RyaW5nIGluZGljYXRpbmcgd2hhdCB0eXBlIG9mIGZpZWxkIHRoaXMgaXMsIGhvbWUgZm9yIGV4YW1wbGUuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgZnVsbCBhZGRyZXNzIGZvcm1hdHRlZCBmb3IgZGlzcGxheS4gKi9cbiAgZm9ybWF0dGVkPzogc3RyaW5nO1xuICAvKiogVGhlIGZ1bGwgc3RyZWV0IGFkZHJlc3MuICovXG4gIHN0cmVldEFkZHJlc3M/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY2l0eSBvciBsb2NhbGl0eS4gKi9cbiAgbG9jYWxpdHk/OiBzdHJpbmc7XG4gIC8qKiBUaGUgc3RhdGUgb3IgcmVnaW9uLiAqL1xuICByZWdpb24/OiBzdHJpbmc7XG4gIC8qKiBUaGUgemlwIGNvZGUgb3IgcG9zdGFsIGNvZGUuICovXG4gIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY291bnRyeSBuYW1lLiAqL1xuICBjb3VudHJ5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RBZGRyZXNzIGltcGxlbWVudHMgSUNvbnRhY3RBZGRyZXNzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHByZWY/OiBib29sZWFuLFxuICAgIHB1YmxpYyB0eXBlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmb3JtYXR0ZWQ/OiBzdHJpbmcsXG4gICAgcHVibGljIHN0cmVldEFkZHJlc3M/OiBzdHJpbmcsXG4gICAgcHVibGljIGxvY2FsaXR5Pzogc3RyaW5nLFxuICAgIHB1YmxpYyByZWdpb24/OiBzdHJpbmcsXG4gICAgcHVibGljIHBvc3RhbENvZGU/OiBzdHJpbmcsXG4gICAgcHVibGljIGNvdW50cnk/OiBzdHJpbmdcbiAgKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0T3JnYW5pemF0aW9uIHtcbiAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgQ29udGFjdE9yZ2FuaXphdGlvbiBjb250YWlucyB0aGUgdXNlcidzIHByZWZlcnJlZCB2YWx1ZS4gKi9cbiAgcHJlZj86IGJvb2xlYW47XG4gIC8qKiBBIHN0cmluZyB0aGF0IGluZGljYXRlcyB3aGF0IHR5cGUgb2YgZmllbGQgdGhpcyBpcywgaG9tZSBmb3IgZXhhbXBsZS4gKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBvcmdhbml6YXRpb24uICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgZGVwYXJ0bWVudCB0aGUgY29udHJhY3Qgd29ya3MgZm9yLiAqL1xuICBkZXBhcnRtZW50Pzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyB0aXRsZSBhdCB0aGUgb3JnYW5pemF0aW9uLiAqL1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0T3JnYW5pemF0aW9uIGltcGxlbWVudHMgSUNvbnRhY3RPcmdhbml6YXRpb24ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdHlwZT86IHN0cmluZyxcbiAgICBwdWJsaWMgbmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgZGVwYXJ0bWVudD86IHN0cmluZyxcbiAgICBwdWJsaWMgdGl0bGU/OiBzdHJpbmcsXG4gICAgcHVibGljIHByZWY/OiBib29sZWFuXG4gICkge31cbn1cblxuLyoqIFNlYXJjaCBvcHRpb25zIHRvIGZpbHRlciBuYXZpZ2F0b3IuY29udGFjdHMuICAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEZpbmRPcHRpb25zIHtcbiAgLyoqIFRoZSBzZWFyY2ggc3RyaW5nIHVzZWQgdG8gZmluZCBuYXZpZ2F0b3IuY29udGFjdHMuICovXG4gIGZpbHRlcj86IHN0cmluZztcbiAgLyoqIERldGVybWluZXMgaWYgdGhlIGZpbmQgb3BlcmF0aW9uIHJldHVybnMgbXVsdGlwbGUgbmF2aWdhdG9yLmNvbnRhY3RzLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKiogQ29udGFjdCBmaWVsZHMgdG8gYmUgcmV0dXJuZWQgYmFjay4gSWYgc3BlY2lmaWVkLCB0aGUgcmVzdWx0aW5nIENvbnRhY3Qgb2JqZWN0IG9ubHkgZmVhdHVyZXMgdmFsdWVzIGZvciB0aGVzZSBmaWVsZHMuICovXG4gIGRlc2lyZWRGaWVsZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIChBbmRyb2lkIG9ubHkpOiBGaWx0ZXJzIHRoZSBzZWFyY2ggdG8gb25seSByZXR1cm4gY29udGFjdHMgd2l0aCBhIHBob25lIG51bWJlciBpbmZvcm1lZC5cbiAgICovXG4gIGhhc1Bob25lTnVtYmVyPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0RmluZE9wdGlvbnMgaW1wbGVtZW50cyBJQ29udGFjdEZpbmRPcHRpb25zIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZpbHRlcj86IHN0cmluZyxcbiAgICBwdWJsaWMgbXVsdGlwbGU/OiBib29sZWFuLFxuICAgIHB1YmxpYyBkZXNpcmVkRmllbGRzPzogc3RyaW5nW10sXG4gICAgcHVibGljIGhhc1Bob25lTnVtYmVyPzogYm9vbGVhblxuICApIHt9XG59XG5cbi8qKlxuICogQG5hbWUgQ29udGFjdHNcbiAqIEBwcmVtaWVyIGNvbnRhY3RzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBhbmQgbWFuYWdlIENvbnRhY3RzIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29udGFjdHMsIENvbnRhY3QsIENvbnRhY3RGaWVsZCwgQ29udGFjdE5hbWUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvbnRhY3RzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0czogQ29udGFjdHMpIHsgfVxuICpcbiAqIGxldCBjb250YWN0OiBDb250YWN0ID0gdGhpcy5jb250YWN0cy5jcmVhdGUoKTtcbiAqXG4gKiBjb250YWN0Lm5hbWUgPSBuZXcgQ29udGFjdE5hbWUobnVsbCwgJ1NtaXRoJywgJ0pvaG4nKTtcbiAqIGNvbnRhY3QucGhvbmVOdW1iZXJzID0gW25ldyBDb250YWN0RmllbGQoJ21vYmlsZScsICc2NDcxMjM0NTY3JyldO1xuICogY29udGFjdC5zYXZlKCkudGhlbihcbiAqICAgKCkgPT4gY29uc29sZS5sb2coJ0NvbnRhY3Qgc2F2ZWQhJywgY29udGFjdCksXG4gKiAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgY29udGFjdC4nLCBlcnJvcilcbiAqICk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogQ29udGFjdFxuICogQGludGVyZmFjZXNcbiAqIElDb250YWN0UHJvcGVydGllc1xuICogSUNvbnRhY3RFcnJvclxuICogSUNvbnRhY3ROYW1lXG4gKiBJQ29udGFjdEZpZWxkXG4gKiBJQ29udGFjdEFkZHJlc3NcbiAqIElDb250YWN0T3JnYW5pemF0aW9uXG4gKiBJQ29udGFjdEZpbmRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ29udGFjdHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jb250YWN0cycsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb250YWN0cycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGVyZHdhdGNoLWFwcHMvY29yZG92YS1wbHVnaW4tY29udGFjdHMnLFxuICBwbGF0Zm9ybXM6IFtcbiAgICAnQW5kcm9pZCcsXG4gICAgJ0JsYWNrQmVycnkgMTAnLFxuICAgICdCcm93c2VyJyxcbiAgICAnRmlyZWZveCBPUycsXG4gICAgJ2lPUycsXG4gICAgJ1VidW50dScsXG4gICAgJ1dpbmRvd3MnLFxuICAgICdXaW5kb3dzIDgnLFxuICAgICdXaW5kb3dzIFBob25lJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW5nbGUgY29udGFjdC5cbiAgICogQHJldHVybnMge0NvbnRhY3R9IFJldHVybnMgYSBDb250YWN0IG9iamVjdFxuICAgKi9cbiAgY3JlYXRlKCk6IENvbnRhY3Qge1xuICAgIHJldHVybiBuZXcgQ29udGFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgY29udGFjdHMgaW4gdGhlIENvbnRhY3RzIGxpc3QuXG4gICAqIEBwYXJhbSB7Q29udGFjdEZpZWxkVHlwZVtdfSBmaWVsZHMgQ29udGFjdCBmaWVsZHMgdG8gYmUgdXNlZCBhcyBhIHNlYXJjaCBxdWFsaWZpZXJcbiAgICogQHBhcmFtIHtJQ29udGFjdEZpbmRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIHF1ZXJ5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRhY3RbXT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc2VhcmNoIHJlc3VsdHMgKGFuIGFycmF5IG9mIENvbnRhY3Qgb2JqZWN0cylcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBmaW5kKGZpZWxkczogQ29udGFjdEZpZWxkVHlwZVtdLCBvcHRpb25zPzogSUNvbnRhY3RGaW5kT3B0aW9ucyk6IFByb21pc2U8Q29udGFjdFtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBuYXZpZ2F0b3IuY29udGFjdHMuZmluZChcbiAgICAgICAgZmllbGRzLFxuICAgICAgICAoY29udGFjdHM6IGFueVtdKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShjb250YWN0cy5tYXAocHJvY2Vzc0NvbnRhY3QpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIHNpbmdsZSBDb250YWN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250YWN0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzZWxlY3RlZCBDb250YWN0XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcGlja0NvbnRhY3QoKTogUHJvbWlzZTxDb250YWN0PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBuYXZpZ2F0b3IuY29udGFjdHMucGlja0NvbnRhY3QoKGNvbnRhY3Q6IGFueSkgPT4gcmVzb2x2ZShwcm9jZXNzQ29udGFjdChjb250YWN0KSksIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NDb250YWN0KGNvbnRhY3Q6IGFueSkge1xuICBjb25zdCBuZXdDb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbiAgZm9yIChjb25zdCBwcm9wIGluIGNvbnRhY3QpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRhY3RbcHJvcF0gPT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xuICAgIG5ld0NvbnRhY3RbcHJvcF0gPSBjb250YWN0W3Byb3BdO1xuICB9XG4gIHJldHVybiBuZXdDb250YWN0O1xufVxuIl19