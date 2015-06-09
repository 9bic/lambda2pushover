# lambda2pushover
aws SNS bridge to [Pushover](https://pushover.net/) 

# Build(Zip Compression)
``` touch credential.json```  
``` json:credential.json
{
  "user": "YOUR PUSHOVER USER",
  "token": "YOUR PUSHOVER TOKEN"
}
```  
```npm run build``` (only OSX and Linux)

# test
``` npm test``` or  ```node test.js``` 
