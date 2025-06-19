"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const nanoid_1 = require("nanoid");
const AppRequestContext_1 = require("./AppRequestContext");
let ContextInterceptor = class ContextInterceptor {
    intercept(context, next) {
        var _a, _b;
        const request = context.switchToHttp().getRequest();
        const requestId = (_b = (_a = request === null || request === void 0 ? void 0 : request.body) === null || _a === void 0 ? void 0 : _a.requestId) !== null && _b !== void 0 ? _b : (0, nanoid_1.nanoid)(6);
        AppRequestContext_1.RequestContextService.setRequestId(requestId);
        return next.handle().pipe((0, rxjs_1.tap)(() => {
        }));
    }
};
ContextInterceptor = __decorate([
    (0, common_1.Injectable)()
], ContextInterceptor);
exports.ContextInterceptor = ContextInterceptor;
//# sourceMappingURL=ContextInterceptor.js.map