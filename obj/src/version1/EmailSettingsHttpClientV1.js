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
exports.EmailSettingsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class EmailSettingsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/email_settings');
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');
            try {
                return yield this.callCommand('get_settings_by_ids', correlationId, {
                    recipient_ids: recipientIds
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');
            try {
                return yield this.callCommand('get_settings_by_id', correlationId, {
                    recipient_id: recipientId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getSettingsByEmail(correlationId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');
            try {
                return yield this.callCommand('get_settings_by_email', correlationId, {
                    email: email
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.set_settings');
            try {
                return yield this.callCommand('set_settings', correlationId, {
                    settings: settings
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');
            try {
                return yield this.callCommand('set_verified_settings', correlationId, {
                    settings: settings
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setRecipient(correlationId, recipientId, name, email, language) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.set_recipient');
            try {
                return yield this.callCommand('set_recipient', correlationId, {
                    recipient_id: recipientId,
                    name: name,
                    email: email,
                    language: language
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');
            try {
                return yield this.callCommand('set_subscriptions', correlationId, {
                    recipient_id: recipientId,
                    subscriptions: subscriptions
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');
            try {
                yield this.callCommand('delete_settings_by_id', correlationId, {
                    recipient_id: recipientId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    resendVerification(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.resend_verification');
            try {
                yield this.callCommand('resend_verification', correlationId, {
                    recipient_id: recipientId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    verifyEmail(correlationId, recipientId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'email_settings.verify_email');
            try {
                yield this.callCommand('verify_email', correlationId, {
                    recipient_id: recipientId,
                    code: code
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.EmailSettingsHttpClientV1 = EmailSettingsHttpClientV1;
//# sourceMappingURL=EmailSettingsHttpClientV1.js.map