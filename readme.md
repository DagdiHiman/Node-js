NOTES:

- What is Node.js?
  Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services.

- NPM: Node Package Manager

- What is Express?
    - light-weight web application framework to help organize your web application into an MVC architecture on the server side. We can use a variety of choices for our templating language (like EJS, Jade/Pug, Handlebars and Dust.js).
    - Express.js basically helps you manage everything, from routes, to handling requests and views.

--------------------------------------------------------------------------------------
1. What is Middleware?
  those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

2. Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

  - express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

  - express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

3. You DO NOT NEED body-parser or middleware like express.json() and express.urlencoded() for GET/DELETE Requests. So when USING these think specifically about POST/PUT Requests.

4. Because in both these requests we are sending data to the server and asking the server to accept/store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request.

5. ALTERNATIVELY, we can use body-parser (it is an NPM package) to do the same thing.

```
// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));
```

6. The extended options is used to specify whether bodyParser should parse URL-encoded data with qs (extended: true) or querystring (extended: false).

--------------------------------------------------------------------------------------

- We can then use any database like MongoDB with Mongoose (for modeling) to provide a backend for our Node.js application.

- What is Redis?
    - Redis is a key/value store, commonly used for sessions and caching in Node.js applications.
    - There are modules (most notably connect-redis) that will work with Express.js.
    - We will need to install the Redis database on our server to start.
