import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailNullClientV1 } from 'client-email-node';
import { EmailSettingsMemoryPersistence } from 'service-emailsettings-node';
import { EmailSettingsController } from 'service-emailsettings-node';
import { EmailSettingsDirectClientV1 } from '../../src/version1/EmailSettingsDirectClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

suite('EmailSettingsDirectClientV1', ()=> {
    let client: EmailSettingsDirectClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new EmailSettingsMemoryPersistence();
        let controller = new EmailSettingsController();
        controller.configure(new ConfigParams());

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-emailsettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-emailsettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-email', 'client', 'null', 'default', '1.0'), new EmailNullClientV1()
        );
        controller.setReferences(references);

        client = new EmailSettingsDirectClientV1();
        client.setReferences(references);

        fixture = new EmailSettingsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
