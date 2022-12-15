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
            let res = await this._controller.getSettingsByIds(correlationId, recipientIds);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');

        try {
            let res = await this._controller.getSettingsById(correlationId, recipientId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getSettingsByEmail(correlationId: string, email: string): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');
        
        try {
            let res = await this._controller.getSettingsByEmail(correlationId, email);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_settings');
        
        try {
            let res = await this._controller.setSettings(correlationId, settings);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setVerifiedSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');
        
        try {
            let res = await this._controller.setVerifiedSettings(correlationId, settings);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_recipient');

        try {
            let res = await this._controller.setRecipient(correlationId, recipientId, name, email, language);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<EmailSettingsV1> {
        let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');
        
        try {
            let res = await this._controller.setSubscriptions(correlationId, recipientId, subscriptions);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');
        
        try {
            let res = await this._controller.deleteSettingsById(correlationId, recipientId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'email_settings.resend_verification');
        
        try {
            let res = await this._controller.resendVerification(correlationId, recipientId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async verifyEmail(correlationId: string, recipientId: string, code: string): Promise<void> {
        let timing = this.instrument(correlationId, 'email_settings.verify_email');
        
        try {
            let res = await this._controller.verifyEmail(correlationId, recipientId, code);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}