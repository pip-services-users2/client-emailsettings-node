import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';
import { EmailSettingsV1 } from './EmailSettingsV1';

export class EmailSettingsNullClientV1 implements IEmailSettingsClientV1 {
    
    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<EmailSettingsV1[]> {
        return [];
    }

    public async setSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        return settings;
    }

    public async setVerifiedSettings(correlationId: string, settings: EmailSettingsV1): Promise<EmailSettingsV1> {
        return settings;
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<EmailSettingsV1> {
        return null;
    }

    public async getSettingsByEmail(correlationId: string, email: string): Promise<EmailSettingsV1> {
        return null;
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        return null;
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        return null;
    }

    public async verifyEmail(correlationId: string, recipientId: string, code: string): Promise<void> {
        return null;
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string): Promise<EmailSettingsV1> {
        return <EmailSettingsV1>{
            id: recipientId,
            name: name,
            email: email,
            language: language,
            verified: false
        };
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<EmailSettingsV1> {
        return <EmailSettingsV1>{
            id: recipientId,
            name: null,
            email: null,
            language: null,
            subscriptions: subscriptions
        };
    }

}