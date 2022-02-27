# basic-express-server

notes: middlewares can be Application-level middlewares, Error-handling middleware, Built-in middleware, Router-level middleware

there is a difference between dependencies and dev dependencies. 
middleware is executed before getting to the req, res callback function and next() is very important to move to the next function. if i write something inside next("like this") it will not move to the next function because this causes an error.


heroku link is https://basic-express-server-nour.herokuapp.com/
pullrequest https://github.com/nour-alsatari/basic-express-server/pull/1
github actions https://github.com/nour-alsatari/basic-express-server/actions 