"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSettingsNullClientV1 = void 0;
class EmailSettingsNullClientV1 {
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return settings;
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return settings;
        });
    }
    getSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getSettingsByEmail(correlationId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    resendVerification(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    verifyEmail(correlationId, recipientId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    setRecipient(correlationId, recipientId, name, email, language) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: recipientId,
                name: name,
                email: email,
                language: language,
                verified: false
            };
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: recipientId,
                name: null,
                email: null,
                language: null,
                subscriptions: subscriptions
            };
        });
    }
}
exports.EmailSettingsNullClientV1 = EmailSettingsNullClientV1;
//# sourceMappingURL=EmailSettingsNullClientV1.js.map