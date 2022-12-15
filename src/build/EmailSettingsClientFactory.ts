import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { EmailSettingsNullClientV1 } from '../version1/EmailSettingsNullClientV1';
import { EmailSettingsMemoryClientV1 } from '../version1/EmailSettingsMemoryClientV1';
import { EmailSettingsDirectClientV1 } from '../version1/EmailSettingsDirectClientV1';
import { EmailSettingsCommandableHttpClientV1 } from '../version1/EmailSettingsCommandableHttpClientV1';
import { EmailSettingsCommandableLambdaClientV1 } from '../version1/EmailSettingsCommandableLambdaClientV1';
import { EmailSettingsCommandableGrpcClientV1 } from '../version1/EmailSettingsCommandableGrpcClientV1';
import { EmailSettingsGrpcClientV1 } from '../version1/EmailSettingsGrpcClientV1';

export class EmailSettingsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-emailsettings', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-emailsettings', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('service-emailsettings', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-emailsettings', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-emailsettings', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-emailsettings', 'client', 'commandable-lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-emailsettings', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-emailsettings', 'client', 'grpc', 'default', '1.0');

	constructor() {
		super();

		this.registerAsType(EmailSettingsClientFactory.NullClientV1Descriptor, EmailSettingsNullClientV1);
		this.registerAsType(EmailSettingsClientFactory.MemoryClientV1Descriptor, EmailSettingsMemoryClientV1);
		this.registerAsType(EmailSettingsClientFactory.DirectClientV1Descriptor, EmailSettingsDirectClientV1);
		this.registerAsType(EmailSettingsClientFactory.CmdHttpClientV1Descriptor, EmailSettingsCommandableHttpClientV1);
		this.registerAsType(EmailSettingsClientFactory.CmdLambdaClientV1Descriptor, EmailSettingsCommandableLambdaClientV1);
		this.registerAsType(EmailSettingsClientFactory.CommandableGrpcClientV1Descriptor, EmailSettingsCommandableGrpcClientV1);
		this.registerAsType(EmailSettingsClientFactory.GrpcClientV1Descriptor, EmailSettingsGrpcClientV1);
	}
	
}
