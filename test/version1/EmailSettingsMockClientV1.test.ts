import { EmailSettingsMockClientV1 } from '../../src/version1/EmailSettingsMockClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

suite('EmailSettingsMockClientV1', ()=> {
    let client: EmailSettingsMockClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup(() => {
        client = new EmailSettingsMockClientV1();

        fixture = new EmailSettingsClientFixtureV1(client);
    });
    
    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
