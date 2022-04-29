const services = require('../../../src/protos/emailsettings_v1_grpc_pb');
const messages = require('../../../src/protos/emailsettings_v1_pb');

import { ConfigParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';
import { EmailSettingsV1 } from './EmailSettingsV1';
import { EmailSettingsGrpcConverterV1 } from './EmailSettingsGrpcConverterV1';

export class EmailSettingsGrpcClientV1 extends GrpcClient implements IEmailSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super(services.EmailSettingsxClient);

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<EmailSettingsV1[]> {
        let request = new messages.EmailSettingsIdsRequest();

        request.setRecipientIdsList(recipientIds);

        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');

        try {
            let response = await this.call<any>('get_settings_by_ids', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

            return response ? EmailSettingsGrpcConverterV1.toEmailSettingsList(response.getSettingsList()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<EmailSettingsV1> {
        let request = new messages.EmailSettingsIdRequest();

        request.setRecipientId(recipientId);

        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');

        try {
            let response = await this.call<any>('get_settings_by_id', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

            return response ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getSettingsByEmail(correlationId: string, email: string): Promise<EmailSettingsV1> {
        let request = new messages.EmailSettingsEmailRequest();

        request.setEmail(email);

        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');

        try {
            let response = await this.call<any>('get_settings_by_email', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

            return response ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        let request = new messages.EmailSettingsObjectRequest();

        request.setSettings(EmailSettingsGrpcConverterV1.fromEmailSettings(settings));

        let timing = this.instrument(correlationId, 'email_settings.set_settings');

        try {
            let response = await this.call<any>('set_settings', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

            return response ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setVerifiedSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        let request = new messages.EmailSettingsObjectRequest();

        request.setSettings(EmailSettingsGrpcConverterV1.fromEmailSettings(settings));

        let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');

        try {
            let response = await this.call<any>('set_verified_settings', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

            return response ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string): Promise<EmailSettingsV1> {
        let request = new messages.EmailSettingsRecipientRequest();
        request.setRecipientId(recipientId);
        request.setName(name);
        request.setEmail(email);
        request.setLanguage(language);

        let timing = this.instrument(correlationId, 'email_settings.set_recipient');

        try {
            let response = await this.call<any>('set_recipient', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

            return response ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<EmailSettingsV1> {
        let request = new messages.EmailSettingsSubscriptionsRequest();
        request.setRecipientId(recipientId);
        request.setSubscriptions(EmailSettingsGrpcConverterV1.toJson(subscriptions));

        let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');

        try {
            let response = await this.call<any>('set_subscriptions', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

            return response ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        let request = new messages.EmailSettingsIdRequest();
        request.setRecipientId(recipientId);

        let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');

        try {
            let response = await this.call<any>('delete_settings_by_id', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        let request = new messages.EmailSettingsIdRequest();
        request.setRecipientId(recipientId);

        let timing = this.instrument(correlationId, 'email_settings.resend_verification');

        try {
            let response = await this.call<any>('resend_verification', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
  
    public async verifyEmail(correlationId: string, recipientId: string, code: string): Promise<void> {
        let request = new messages.EmailSettingsVerifyRequest();
        request.setRecipientId(recipientId);
        request.setCode(code);

        let timing = this.instrument(correlationId, 'email_settings.verify_email');

        try {
            let response = await this.call<any>('verify_email', correlationId, request);

            if (response.error != null)
                throw EmailSettingsGrpcConverterV1.toError(response.error);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
