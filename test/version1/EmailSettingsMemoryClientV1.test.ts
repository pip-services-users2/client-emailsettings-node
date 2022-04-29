import { EmailSettingsMemoryClientV1 } from '../../src/version1/EmailSettingsMemoryClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

suite('EmailSettingsMemoryClientV1', ()=> {
    let client: EmailSettingsMemoryClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup(() => {
        client = new EmailSettingsMemoryClientV1();

        fixture = new EmailSettingsClientFixtureV1(client);
    });
    
    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
