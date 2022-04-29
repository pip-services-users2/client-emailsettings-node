# Client API (version 1) <br/> Email Settings Microservices Client SDK for Node.js

Node.js client API for Email settings microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [EmailSettingsV1 class](#class1)
* [IEmailSettingsClientV1 interface](#interface)
    - [getSettingsById()](#operation1)
    - [getSettingsByEmail()](#operation2)
    - [setSettings()](#operation3)
    - [setRecipient()](#operation4)
    - [setSuscriptions()](#operation5)
    - [deleteSettingsById()](#operation6)
    - [resendVerification()](#operation7)
    - [verifyEmail()](#operation8)
* [EmailSettingsHttpClientV1 class](#client_http)
* [EmailSettingsSenecaClientV1 class](#client_seneca)
* [EmailSettingsDirectClientV1 class](#client_direct)
* [EmailSettingsNullClientV1 class](#client_null)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "client-emailsettings-node": "^1.0.*",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
let sdk = new require('client-emailsettings-node');

// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8005
    }
};

// Create the client instance
let client = sdk.EmailSettingsHttpClientV1(config);

// Open client connection to the microservice
await client.open(null);
    
console.log('Opened connection');
        
// Send email message to address
try {
  await client.sendMessage(
    null,
    { 
        to: 'somebody@somewhere.com',
        subject: 'Test',
        text: 'This is a test message. Please, ignore it'
    },
    null
  );
  console.log('EmailSettings message was successfully sent');
} catch(err) {
  console.error(err);
}
    
});
```

## Data types

### <a name="class1"></a> EmailSettingsV1 class

Represents a user email settings with his ID, primary email and key settings.

**Properties:**
- id: string - unique user id
- name: string - user full name
- email: string - primary user email
- language: string - user preferred language
- verified: boolean - true if email was verified
- ver_code: - email verification code that was sent in email message to the user
- ver\_expire\_time: Date - expiration time for email verification code
- subscriptions: Object - subscriptions to enable or disable certain types of email messages
- custom_hdr: Object - custom data summary that is always returned (in list and details)
- custom_dat: Object - custom data details that is returned only when a single object is returned (details)

## <a name="interface"></a> IEmailSettingsClientV1 interface

If you are using Typescript, you can use IEmailSettingsClientV1 as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IEmailSettingsClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IEmailSettingsClientV1 {
    getSettingsById(correlationId, recipientId);
    getSettingsByEmail(correlationId, email);
    setSettings(correlationId, settings);
    setRecipient(correlationId, recipientId, name, email, language);
    setSubscriptions(correlationId, recipientId, subscriptions);
    deleteSettingsById(correlationId, recipientId);
    resendVerification(correlationId, recipientId);
    verifyEmail(correlationId, recipientId, code);
}
```

### <a name="operation1"></a> getSettingsById(correlationId, recipientId)

Retrieves email settings by recipient unique id. 

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- recipient_id: string - unique receipient id
- returns: EmailSettings - retrieved EmailSettings object

### <a name="operation2"></a> getSettingsByEmail(correlationId, email)

Retrieves email settings by recipient email. 

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- email: string - email address
- returns: EmailSettings - retrieved EmailSettings object

### <a name="operation3"></a> setSettings(correlationId, settings)

Sets recipient email settings

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- settings: EmailSettingsV1 -  email settings to be set
- returns: EmailSettings - set EmailSettings object
 
### <a name="operation4"></a> setRecipient(correlationId, recipientId, name, email, language)

Sets recipient information into email settings.
If some properties are not set, they keep their old values.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- recipient_id: string - recipient unique id
- name: string - recipient full name
- email: string - recipient email address
- language: string - recipient preferred language
- returns: EmailSettings - set EmailSettings object

### <a name="operation5"></a> setSubscriptions(correlationId, recipientId, subscriptions)

Sets subscriptions to specific email types

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- recipient_id: string - recipient unique id
- subscriptions: any - subscriptions hashmap where email types are enabled or disabled
- returns: EmailSettings - set EmailSettings object

### <a name="operation6"></a> deleteSettingsById(correlationId, recipientId)

Deletes email settings from the system (use it carefully!)

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- recipient_id: string - recipient unique id
 
### <a name="operation7"></a> resendVerification(correlationId, recipientId)

Generates a new email verification code and sends it to recipient via email message.
Initial verification code is send in welcome message during user registration.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- recipient_id: string - recipient unique id

### <a name="operation8"></a> verifyEmail(correlationId, recipientId, code)

Confirms (verifies) primary email address using verification code.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- recipient_id: string - recipient unique id
- code: string - password recovery code


## <a name="client_http"></a> EmailSettingsHttpClientV1 class

EmailSettingsHttpClientV1 is a client that implements HTTPprotocol

```javascript
class EmailSettingsHttpClientV1 extends CommandableHttpClient implements IEmailSettingsClientV1 {
    constructor(config?: any);
    setReferences(refs);
    open(correlationId);
    close(correlationId);
    getSettingsById(correlationId, recipientId);
    getSettingsByEmail(correlationId, email);
    setSettings(correlationId, settings);
    setRecipient(correlationId, recipientId, name, email, language);
    setSubscriptions(correlationId, recipientId, subscriptions);
    deleteSettingsById(correlationId, recipientId);
    resendVerification(correlationId, recipientId);
    verifyEmail(correlationId, recipientId, code);
}
```

**Constructor config properties:** 
- parameters: Object - (optional) default parameters to augment content passed in each request
- connection: object - HTTP transport configuration options
  - protocol: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> EmailSettingsSenecaClientV1 class

EmailSettingsSenecaClientV1 is a client that implements Seneca protocol

```javascript
class EmailSettingsSenecaClientV1 extends CommandableSenecaClient implements IEmailSettingsClientV1 {
    constructor(config?: any);        
    setReferences(refs);
    open(correlationId);
    close(correlationId);
    getSettingsById(correlationId, recipientId);
    getSettingsByEmail(correlationId, email);
    setSettings(correlationId, settings);
    setRecipient(correlationId, recipientId, name, email, language);
    setSubscriptions(correlationId, recipientId, subscriptions);
    deleteSettingsById(correlationId, recipientId);
    resendVerification(correlationId, recipientId);
    verifyEmail(correlationId, recipientId, code);
}
```

**Constructor config properties:** 
- parameters: Object - (optional) default parameters to augment content passed in each request
- connection: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - protocol: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_direct"></a> EmailSettingsDirectClientV1 class

EmailSettingsDirectClientV1 is a client that calls controller from the same container.
It is intended to be used in monolythic deployments.

```javascript
class EmailSettingsDirectClientV1 extends DirectClient implements IEmailSettingsClientV1 {
    constructor();
    setReferences(refs);
    open(correlationId);
    close(correlationId);
    getSettingsById(correlationId, recipientId);
    getSettingsByEmail(correlationId, email);
    setSettings(correlationId, settings);
    setRecipient(correlationId, recipientId, name, email, language);
    setSubscriptions(correlationId, recipientId, subscriptions);
    deleteSettingsById(correlationId, recipientId);
    resendVerification(correlationId, recipientId);
    verifyEmail(correlationId, recipientId, code);
}
```

## <a name="client_null"></a> EmailSettingsNullClientV1 class

EmailSettingsNullClientV1 is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```javascript
class EmailSettingsNullClientV1 implements IEmailSettingsClientV1 {
    constructor();
    getSettingsById(correlationId, recipientId);
    getSettingsByEmail(correlationId, email);
    setSettings(correlationId, settings);
    setRecipient(correlationId, recipientId, name, email, language);
    setSubscriptions(correlationId, recipientId);
    deleteSettingsById(correlationId, recipientId);
    resendVerification(correlationId, recipientId);
    verifyEmail(correlationId, recipientId, code);
}
```
