"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const AppRequestContext_1 = require("../context/AppRequestContext");
const api_error_response_1 = require("../../presentation/api/api-error.response");
class ExceptionInterceptor {
    constructor() {
        this.logger = new common_1.Logger(ExceptionInterceptor.name);
    }
    intercept(_context, next) {
        return next.handle().pipe((0, operators_1.catchError)((err) => {
            var _a, _b, _c, _d;
            if (err.status >= 400 && err.status < 500) {
                this.logger.debug(`[${AppRequestContext_1.RequestContextService.getRequestId()}] ${err.message}`);
                const isClassValidatorError = Array.isArray((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.message) &&
                    typeof ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.error) === 'string' &&
                    err.status === 400;
                if (isClassValidatorError) {
                    err = new common_1.BadRequestException(new api_error_response_1.ApiErrorResponse({
                        statusCode: err.status,
                        message: 'Validation error',
                        error: (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.error,
                        subErrors: (_d = err === null || err === void 0 ? void 0 : err.response) === null || _d === void 0 ? void 0 : _d.message,
                        correlationId: AppRequestContext_1.RequestContextService.getRequestId(),
                    }));
                }
            }
            if (!err.correlationId) {
                err.correlationId = AppRequestContext_1.RequestContextService.getRequestId();
            }
            if (err.response) {
                err.response.correlationId = err.correlationId;
            }
            return (0, rxjs_1.throwError)(err);
        }));
    }
}
exports.ExceptionInterceptor = ExceptionInterceptor;
//# sourceMappingURL=exception.interceptor.js.map