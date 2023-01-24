// ask question like below

//define middleware in nodejs?
// express
var app = express();
// middleware
var stack = middleware();

// express
app.use(express.static(..));
// middleware
stack.use(function(data, next) {
  next();
}); 

// express, you need to do nothing
// middleware
stack.handle(someData);

var middleware = require("../src/middleware.js");

var stack = middleware(function(data, next) {
    data.foo = data.data*2;
    next();
}, function(data, next) {
    setTimeout(function() {
        data.async = true;
        next();
    }, 100)
}, function(data) {
    console.log(data);
});

stack.handle({
    "data": 42
})


// middleware 

var stack = middleware(function(req, res, next) {
    users.getAll(function(err, users) {
        if (err) next(err);
        req.users = users;
        next();  
    });
}, function(req, res, next) {
    posts.getAll(function(err, posts) {
        if (err) next(err);
        req.posts = posts;
        next();
    })
}, function(req, res, next) {
    req.posts.forEach(function(post) {
        post.user = req.users[post.userId];
    });

    res.render("blog/posts", {
        "posts": req.posts
    });
});

var app = express.createServer();

app.get("/posts", function(req, res) {
   stack.handle(req, res); 
});

// express

var app = express.createServer();

app.get("/posts", [
    function(req, res, next) {
        users.getAll(function(err, users) {
            if (err) next(err);
            req.users = users;
            next();  
        });
    }, function(req, res, next) {
        posts.getAll(function(err, posts) {
            if (err) next(err);
            req.posts = posts;
            next();
        })
    }, function(req, res, next) {
        req.posts.forEach(function(post) {
            post.user = req.users[post.userId];
        });

        res.render("blog/posts", {
            "posts": req.posts
        }); 
    }
], function(req, res) {
    stack.handle(req, res);
});