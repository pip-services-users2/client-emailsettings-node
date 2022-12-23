"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSettingsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const EmailSettingsNullClientV1_1 = require("../version1/EmailSettingsNullClientV1");
const EmailSettingsMockClientV1_1 = require("../version1/EmailSettingsMockClientV1");
const EmailSettingsDirectClientV1_1 = require("../version1/EmailSettingsDirectClientV1");
const EmailSettingsCommandableHttpClientV1_1 = require("../version1/EmailSettingsCommandableHttpClientV1");
const EmailSettingsCommandableLambdaClientV1_1 = require("../version1/EmailSettingsCommandableLambdaClientV1");
const EmailSettingsCommandableGrpcClientV1_1 = require("../version1/EmailSettingsCommandableGrpcClientV1");
const EmailSettingsGrpcClientV1_1 = require("../version1/EmailSettingsGrpcClientV1");
class EmailSettingsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(EmailSettingsClientFactory.NullClientV1Descriptor, EmailSettingsNullClientV1_1.EmailSettingsNullClientV1);
        this.registerAsType(EmailSettingsClientFactory.MockClientV1Descriptor, EmailSettingsMockClientV1_1.EmailSettingsMockClientV1);
        this.registerAsType(EmailSettingsClientFactory.DirectClientV1Descriptor, EmailSettingsDirectClientV1_1.EmailSettingsDirectClientV1);
        this.registerAsType(EmailSettingsClientFactory.CmdHttpClientV1Descriptor, EmailSettingsCommandableHttpClientV1_1.EmailSettingsCommandableHttpClientV1);
        this.registerAsType(EmailSettingsClientFactory.CmdLambdaClientV1Descriptor, EmailSettingsCommandableLambdaClientV1_1.EmailSettingsCommandableLambdaClientV1);
        this.registerAsType(EmailSettingsClientFactory.CommandableGrpcClientV1Descriptor, EmailSettingsCommandableGrpcClientV1_1.EmailSettingsCommandableGrpcClientV1);
        this.registerAsType(EmailSettingsClientFactory.GrpcClientV1Descriptor, EmailSettingsGrpcClientV1_1.EmailSettingsGrpcClientV1);
    }
}
exports.EmailSettingsClientFactory = EmailSettingsClientFactory;
EmailSettingsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'factory', 'default', 'default', '1.0');
EmailSettingsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'client', 'null', 'default', '1.0');
EmailSettingsClientFactory.MockClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'client', 'mock', 'default', '1.0');
EmailSettingsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'client', 'direct', 'default', '1.0');
EmailSettingsClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'client', 'commandable-http', 'default', '1.0');
EmailSettingsClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'client', 'commandable-lambda', 'default', '1.0');
EmailSettingsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'client', 'commandable-grpc', 'default', '1.0');
EmailSettingsClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-emailsettings', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=EmailSettingsClientFactory.js.map