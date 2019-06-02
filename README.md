# lambda2pushover

[![Greenkeeper badge](https://badges.greenkeeper.io/9bic/lambda2pushover.svg)](https://greenkeeper.io/)

aws SNS bridge to [Pushover](https://pushover.net/) 


# Configure

- create `.env` file

```
PUSHOVER_USER=<<your pushover UserToken>>
PUSHOVER_TOKEN=<<your pushover AppToken>>
```

# Deploy

- using Serverless Framework

```
npm run deploy
# or specify stage
npm run deploy -- --stage prd
```

# test
``` npm test``` or  ```node test.js``` 
