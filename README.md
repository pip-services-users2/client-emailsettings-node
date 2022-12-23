# Email Settings Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-emailsettings](https://github.com/pip-services-users2/service-emailsettings-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* Seneca client (see http://www.senecajs.org)
* Direct client for monolythic deployments
* Null client to be used in testing
* Mock client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
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

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-emailsettings-node');
```

Define client configuration parameters.

```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.EmailSettingsHttpClient(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
}
catch (err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Send email message to address
await client.sendMessage(
    null,
    { 
        to: 'somebody@somewhere.com',
        subject: 'Test',
        text: 'This is a test message. Please, ignore it'
    },
    null
);
```

```javascript
// Send email message to users
await client.sendMessageToRecipients(
    null,
    [
        { id: '123' },
        { id: '321' }
    ],
    'test',
    { 
        subject: 'Test',
        text: 'This is a test message. Please, ignore it'
    },
    null,
);
```

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

