# express-gateway-plugin-compression

This plugin for [Express Gateway](https://express-gateway.io) makes it possible to compress responses from Service Endpoints, based on ExpressJS's 
[Compression Middleware](https://github.com/expressjs/compression).

## Installation

Simply type from your shell environment:

```bash
eg plugin install express-gateway-plugin-compression
```

## Quick start

1. Make sure the plugin is listed in [system.config.yml file](https://www.express-gateway.io/docs/configuration/system.config.yml/).
This is done automatically for you if you used the command above.

2. Add the configuration keys to [gateway.config.yml file](https://www.express-gateway.io/docs/configuration/gateway.config.yml/).

```yaml
policies:
  - compression:
      - action:
          threshold: 1024
  - proxy:
      - action:
          serviceEndpoint: backend
```

### Configuration Parameters

Details regarding action parameters may be found in the `compression` package's [documentation](https://github.com/expressjs/compression#compressionoptions).

## Want to make your own plugin?

Just check out our [plugin development guide](https://www.express-gateway.io/docs/plugins/).
We can't wait to see your custom stuff in the Gateway!
