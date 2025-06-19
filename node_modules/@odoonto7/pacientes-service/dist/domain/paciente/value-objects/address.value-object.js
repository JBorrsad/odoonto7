"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const shared_1 = require("@odoonto7/shared");
const shared_2 = require("@odoonto7/shared");
const shared_3 = require("@odoonto7/shared");
class Address extends shared_1.ValueObject {
    get country() {
        return this.props.country;
    }
    get postalCode() {
        return this.props.postalCode;
    }
    get street() {
        return this.props.street;
    }
    unpack() {
        return {
            country: this.country,
            postalCode: this.postalCode,
            street: this.street
        };
    }
    validate(props) {
        if (!shared_2.Guard.lengthIsBetween(props.country, 2, 50)) {
            throw new shared_3.ArgumentOutOfRangeException('country is out of range');
        }
        if (!shared_2.Guard.lengthIsBetween(props.street, 2, 50)) {
            throw new shared_3.ArgumentOutOfRangeException('street is out of range');
        }
        if (!shared_2.Guard.lengthIsBetween(props.postalCode, 2, 10)) {
            throw new shared_3.ArgumentOutOfRangeException('postalCode is out of range');
        }
    }
}
exports.Address = Address;
//# sourceMappingURL=address.value-object.js.map