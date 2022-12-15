import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { EmailSettingsV1 } from './EmailSettingsV1';
import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';

export class EmailSettingsCommandableHttpClientV1 extends CommandableHttpClient implements IEmailSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('v1/email_settings');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<EmailSettingsV1[]> {
        return await this.callCommand(
            'get_settings_by_ids',
            correlationId,
            {
                recipient_ids: recipientIds
            }
        );
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<EmailSettingsV1> {
        return await this.callCommand(
            'get_settings_by_id',
            correlationId,
            {
                recipient_id: recipientId
            }
        );
    }

    public async getSettingsByEmail(correlationId: string, email: string): Promise<EmailSettingsV1> {
        return await this.callCommand(
            'get_settings_by_email',
            correlationId,
            {
                email: email
            }
        );
    }

    public async setSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        return await this.callCommand(
            'set_settings',
            correlationId,
            {
                settings: settings
            }
        );
    }

    public async setVerifiedSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        return await this.callCommand(
            'set_verified_settings',
            correlationId,
            {
                settings: settings
            }
        );
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string): Promise<EmailSettingsV1> {
        return await this.callCommand(
            'set_recipient',
            correlationId,
            {
                recipient_id: recipientId,
                name: name,
                email: email,
                language: language
            }
        );
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<EmailSettingsV1> {
        return await this.callCommand(
            'set_subscriptions',
            correlationId,
            {
                recipient_id: recipientId,
                subscriptions: subscriptions
            }
        );
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        await this.callCommand(
            'delete_settings_by_id',
            correlationId,
            {
                recipient_id: recipientId
            }
        );
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        await this.callCommand(
            'resend_verification',
            correlationId,
            {
                recipient_id: recipientId
            }
        );
    }

    public async verifyEmail(correlationId: string, recipientId: string, code: string): Promise<void> {
        await this.callCommand(
            'verify_email',
            correlationId,
            {
                recipient_id: recipientId,
                code: code
            }
        );
    }
}
