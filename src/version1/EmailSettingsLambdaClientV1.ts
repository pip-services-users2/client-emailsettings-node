import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { EmailSettingsV1 } from './EmailSettingsV1';
import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';

export class EmailSettingsLambdaClientV1 extends CommandableLambdaClient implements IEmailSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('email_settings');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<EmailSettingsV1[]> {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');

        try {
            return await this.callCommand(
                'get_settings_by_ids',
                correlationId,
                {
                    recipient_ids: recipientIds
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');

        try {
            return await this.callCommand(
                'get_settings_by_id',
                correlationId,
                {
                    recipient_id: recipientId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getSettingsByEmail(correlationId: string, email: string): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');

        try {
            return await this.callCommand(
                'get_settings_by_email',
                correlationId,
                {
                    email: email
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_settings');

        try {
            return await this.callCommand(
                'set_settings',
                correlationId,
                {
                    settings: settings
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setVerifiedSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');

        try {
            return await this.callCommand(
                'set_verified_settings',
                correlationId,
                {
                    settings: settings
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_recipient');

        try {
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
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');

        try {
            return await this.callCommand(
                'set_subscriptions',
                correlationId,
                {
                    recipient_id: recipientId,
                    subscriptions: subscriptions
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');

        try {
            await this.callCommand(
                'delete_settings_by_id',
                correlationId,
                {
                    recipient_id: recipientId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'email_settings.resend_verification');

        try {
            await this.callCommand(
                'resend_verification',
                correlationId,
                {
                    recipient_id: recipientId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async verifyEmail(correlationId: string, recipientId: string, code: string): Promise<void> {
        let timing = this.instrument(correlationId, 'email_settings.verify_email');

        try {
            await this.callCommand(
                'verify_email',
                correlationId,
                {
                    recipient_id: recipientId,
                    code: code
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
