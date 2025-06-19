"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPropsToObject = void 0;
const value_object_base_1 = require("../../domain/ddd/value-object.base");
function isEntity(obj) {
    return (Object.prototype.hasOwnProperty.call(obj, 'toObject') &&
        Object.prototype.hasOwnProperty.call(obj, 'id') &&
        value_object_base_1.ValueObject.isValueObject(obj.id));
}
function convertToPlainObject(item) {
    if (value_object_base_1.ValueObject.isValueObject(item)) {
        return item.unpack();
    }
    if (isEntity(item)) {
        return item.toObject();
    }
    return item;
}
function convertPropsToObject(props) {
    const propsCopy = structuredClone(props);
    for (const prop in propsCopy) {
        if (Array.isArray(propsCopy[prop])) {
            propsCopy[prop] = propsCopy[prop].map((item) => {
                return convertToPlainObject(item);
            });
        }
        propsCopy[prop] = convertToPlainObject(propsCopy[prop]);
    }
    return propsCopy;
}
exports.convertPropsToObject = convertPropsToObject;
//# sourceMappingURL=convert-props-to-object.util.js.map