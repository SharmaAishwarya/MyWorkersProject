# 👷 JSON-API

Here is one of my project which is basically a linktree like serverless application.

If you make a `GET Request` at this url
```
https://json-api.aishwaryasharma8961.workers.dev/links
```
You will get an array of JSON which contains my links.
On the home page of the application there is a list of links and on clicking on any of them it will take you to the corresponding page.


[`index.js`](https://github.com/SharmaAishwarya/MyWorkersProject/blob/master/index.js) is the content of the my Workers script.

#### Deployed Link

My application is also [deployed](https://json-api.aishwaryasharma8961.workers.dev/) on cloudflare under this link.

```
https://json-api.aishwaryasharma8961.workers.dev/
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).
Further documentation to start with Workers application can be found [here](https://developers.cloudflare.com/workers/learning/getting-started)

I have also tested this application using `Mocha and Chai`. To use them you can refer to their documentation. 
1. [Mocha](https://mochajs.org/)
2. [Chai](https://www.chaijs.com/)

#### Instructions to run
To run this application locally follow the following commands.
1. Clone the application.
2. install dependencies using npm
```
npm install
```
3. install wrangler cli as
```
npm i @cloudflare/wrangler -g
```
4. once wrangler is installed run the application using
```
wrangler dev
or
wrangler preview watch for development and testing purposes.
```

To run tests
1. Install Mocha and Chai
2. run tests using
```
npm test
```

