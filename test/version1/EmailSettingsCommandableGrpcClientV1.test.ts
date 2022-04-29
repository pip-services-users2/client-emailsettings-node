import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailNullClientV1 } from 'client-email-node';

import { EmailSettingsMemoryPersistence } from 'service-emailsettings-node';
import { EmailSettingsController } from 'service-emailsettings-node';
import { EmailSettingsCommandableGrpcServiceV1 } from 'service-emailsettings-node';
import { EmailSettingsCommandableGrpcClientV1 } from '../../src/version1/EmailSettingsCommandableGrpcClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmailSettingsCommandableGrpcClientV1', ()=> {
    let service: EmailSettingsCommandableGrpcServiceV1;
    let client: EmailSettingsCommandableGrpcClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new EmailSettingsMemoryPersistence();
        let controller = new EmailSettingsController();

        service = new EmailSettingsCommandableGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-emailsettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-emailsettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-emailsettings', 'service', 'commandable-grpc', 'default', '1.0'), service,
            new Descriptor('service-email', 'client', 'null', 'default', '1.0'), new EmailNullClientV1()
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailSettingsCommandableGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EmailSettingsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
