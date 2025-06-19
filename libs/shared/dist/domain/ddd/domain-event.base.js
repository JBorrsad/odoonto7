"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvent = void 0;
const crypto_1 = require("crypto");
const exceptions_1 = require("../exceptions");
const guard_1 = require("../../presentation/guard");
const AppRequestContext_1 = require("../../application/context/AppRequestContext");
class DomainEvent {
    constructor(props) {
        var _a, _b, _c, _d;
        if (guard_1.Guard.isEmpty(props)) {
            throw new exceptions_1.ArgumentNotProvidedException('DomainEvent props should not be empty');
        }
        this.id = (0, crypto_1.randomUUID)();
        this.aggregateId = props.aggregateId;
        this.metadata = {
            correlationId: ((_a = props === null || props === void 0 ? void 0 : props.metadata) === null || _a === void 0 ? void 0 : _a.correlationId) || AppRequestContext_1.RequestContextService.getRequestId(),
            causationId: (_b = props === null || props === void 0 ? void 0 : props.metadata) === null || _b === void 0 ? void 0 : _b.causationId,
            timestamp: ((_c = props === null || props === void 0 ? void 0 : props.metadata) === null || _c === void 0 ? void 0 : _c.timestamp) || Date.now(),
            userId: (_d = props === null || props === void 0 ? void 0 : props.metadata) === null || _d === void 0 ? void 0 : _d.userId,
        };
    }
}
exports.DomainEvent = DomainEvent;
//# sourceMappingURL=domain-event.base.js.map