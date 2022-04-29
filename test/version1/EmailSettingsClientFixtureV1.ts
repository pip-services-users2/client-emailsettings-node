const assert = require('chai').assert;

import { EmailSettingsV1 } from '../../src/version1/EmailSettingsV1';
import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';

let SETTINGS = <EmailSettingsV1> {
    id: '1',
    name: 'User 1',
    email: 'user1@conceptual.vision',
    language: 'en',
    verified: false
};

export class EmailSettingsClientFixtureV1 {
    private _client: IEmailSettingsClientV1;
    
    constructor(client: IEmailSettingsClientV1) {
        this._client = client;
    }

    public async testCrudOperations() {
        var settings1: EmailSettingsV1;

        // Create email settings
        let settings = await this._client.setSettings(null, SETTINGS);

        assert.isObject(settings);
        assert.equal(settings.id, SETTINGS.id);
        assert.equal(settings.email, SETTINGS.email);
        assert.isFalse(settings.verified);

        settings1 = settings;

        // Update verified email settings
        settings = await this._client.setVerifiedSettings(null, settings1);

        assert.isObject(settings);
        assert.equal(settings.id, SETTINGS.id);
        assert.equal(settings.email, SETTINGS.email);
        assert.isTrue(settings.verified);

        settings1 = settings;

        // Update the email settings
        settings1.subscriptions.engagement = true;
        settings = await this._client.setSettings(null, settings1);

        assert.isObject(settings);
        assert.isTrue(settings.subscriptions.engagement);

        settings1 = settings;
        
        // Get settings
        let settingsList = await this._client.getSettingsByIds(null, [settings1.id]);

        assert.lengthOf(settingsList, 1);

        // Delete settings
        await this._client.deleteSettingsById(null, settings1.id);

        // Try to get deleted settings
        settings = await this._client.getSettingsById(null, settings1.id);

        assert.isNull(settings || null);
    }
}
