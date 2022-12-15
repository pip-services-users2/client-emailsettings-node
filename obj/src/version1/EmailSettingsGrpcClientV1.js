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
exports.EmailSettingsGrpcClientV1 = void 0;
const services = require('../../../src/protos/emailsettings_v1_grpc_pb');
const messages = require('../../../src/protos/emailsettings_v1_pb');
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const EmailSettingsGrpcConverterV1_1 = require("./EmailSettingsGrpcConverterV1");
class EmailSettingsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor(config) {
        super(services.EmailSettingsxClient);
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsIdsRequest();
            request.setRecipientIdsList(recipientIds);
            let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');
            try {
                let response = yield this.call('get_settings_by_ids', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettingsList(response.getSettingsList()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsIdRequest();
            request.setRecipientId(recipientId);
            let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');
            try {
                let response = yield this.call('get_settings_by_id', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getSettingsByEmail(correlationId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsEmailRequest();
            request.setEmail(email);
            let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');
            try {
                let response = yield this.call('get_settings_by_email', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsObjectRequest();
            request.setSettings(EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.fromEmailSettings(settings));
            let timing = this.instrument(correlationId, 'email_settings.set_settings');
            try {
                let response = yield this.call('set_settings', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsObjectRequest();
            request.setSettings(EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.fromEmailSettings(settings));
            let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');
            try {
                let response = yield this.call('set_verified_settings', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setRecipient(correlationId, recipientId, name, email, language) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsRecipientRequest();
            request.setRecipientId(recipientId);
            request.setName(name);
            request.setEmail(email);
            request.setLanguage(language);
            let timing = this.instrument(correlationId, 'email_settings.set_recipient');
            try {
                let response = yield this.call('set_recipient', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsSubscriptionsRequest();
            request.setRecipientId(recipientId);
            request.setSubscriptions(EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toJson(subscriptions));
            let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');
            try {
                let response = yield this.call('set_subscriptions', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsIdRequest();
            request.setRecipientId(recipientId);
            let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');
            try {
                let response = yield this.call('delete_settings_by_id', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    resendVerification(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsIdRequest();
            request.setRecipientId(recipientId);
            let timing = this.instrument(correlationId, 'email_settings.resend_verification');
            try {
                let response = yield this.call('resend_verification', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    verifyEmail(correlationId, recipientId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EmailSettingsVerifyRequest();
            request.setRecipientId(recipientId);
            request.setCode(code);
            let timing = this.instrument(correlationId, 'email_settings.verify_email');
            try {
                let response = yield this.call('verify_email', correlationId, request);
                if (response.error != null)
                    throw EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.EmailSettingsGrpcClientV1 = EmailSettingsGrpcClientV1;
//# sourceMappingURL=EmailSettingsGrpcClientV1.js.map