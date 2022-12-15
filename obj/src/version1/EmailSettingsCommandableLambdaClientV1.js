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
exports.EmailSettingsCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class EmailSettingsCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('email_settings');
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_settings_by_ids', correlationId, {
                recipient_ids: recipientIds
            });
        });
    }
    getSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_settings_by_id', correlationId, {
                recipient_id: recipientId
            });
        });
    }
    getSettingsByEmail(correlationId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_settings_by_email', correlationId, {
                email: email
            });
        });
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_settings', correlationId, {
                settings: settings
            });
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_verified_settings', correlationId, {
                settings: settings
            });
        });
    }
    setRecipient(correlationId, recipientId, name, email, language) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_recipient', correlationId, {
                recipient_id: recipientId,
                name: name,
                email: email,
                language: language
            });
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_subscriptions', correlationId, {
                recipient_id: recipientId,
                subscriptions: subscriptions
            });
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('delete_settings_by_id', correlationId, {
                recipient_id: recipientId
            });
        });
    }
    resendVerification(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('resend_verification', correlationId, {
                recipient_id: recipientId
            });
        });
    }
    verifyEmail(correlationId, recipientId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('verify_email', correlationId, {
                recipient_id: recipientId,
                code: code
            });
        });
    }
}
exports.EmailSettingsCommandableLambdaClientV1 = EmailSettingsCommandableLambdaClientV1;
//# sourceMappingURL=EmailSettingsCommandableLambdaClientV1.js.map