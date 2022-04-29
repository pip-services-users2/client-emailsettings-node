import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';
import { EmailSettingsV1 } from './EmailSettingsV1';

//import { IEmailSettingsController } from 'service-emailsettings-node';

export class EmailSettingsDirectClientV1 extends DirectClient<any> implements IEmailSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-emailsettings", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }
    
    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<EmailSettingsV1[]> {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');
        
        try {
            return await this._controller.getSettingsByIds(correlationId, recipientIds);
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
            return await this._controller.getSettingsById(correlationId, recipientId);
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
            return await this._controller.getSettingsByEmail(correlationId, email);
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
            return await this._controller.setSettings(correlationId, settings);
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
            return await this._controller.setVerifiedSettings(correlationId, settings);
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
            return await this._controller.setRecipient(correlationId, recipientId, name, email, language);
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
            return await this._controller.setSubscriptions(correlationId, recipientId, subscriptions);
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
            return await this._controller.deleteSettingsById(correlationId, recipientId);
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
            return await this._controller.resendVerification(correlationId, recipientId);
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
            return await this._controller.verifyEmail(correlationId, recipientId, code);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}