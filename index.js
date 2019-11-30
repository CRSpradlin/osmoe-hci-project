const express = require('express');
const pug = require('pug');

const pg = require('pg');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var User = require('./models/user');

// invoke an instance of express application.
var app = express();

// set our application port
app.set('port', 9000);

// set up pug
app.set('view engine', 'pug');
app.set('views', './views');

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use('/static', express.static('static'));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};


// route for Home-Page
app.all('/', sessionChecker, (req, res) => {
    res.redirect('/dashboard');
});

app.route('/dateUpdate')
    .post(sessionChecker, (req, res) => {
        var goalToUpdate = req.body.dateToUpdate;
        let currTime = new Date().getTime();
        console.log(goalToUpdate=="happy");
        let user = req.session.user;
        let goals = user.goals;
        if(goalToUpdate=="happy"&&(goals.goal1.date+86400000)<currTime){ //goal1
            goals.goal1.date = goals.goal1.date+86400000;
        }
        if(goalToUpdate=="water"&&(goals.goal2.date+86400000<currTime)){ //goal2
            goals.goal2.date = goals.goal2.date+86400000;
        }
        if(goalToUpdate=="food"&&(goals.goal3.date+86400000<currTime)){ //goal3
            goals.goal3.date = goals.goal3.date+86400000;
        }
        User.update(
            {goals: goals},
            {where: {email: user.email}}
          )
          .then(() => {
              res.redirect('/dashboard');
          });
    });

// route for user signup
app.route('/signup')
    .get(sessionChecker, (req, res) => {
        res.render('./auth/auth.pug', {modal:"signup"});
    })
    .post((req, res) => {
        var email = req.body.email;
        User.findOne({ where: { email: email } }).then(function (user) {
            if(!user){
                User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    goals: {
                        "goal1": {
                            "message": "",
                            "date": ""
                        },
                        "goal2": {
                            "message": "",
                            "date": ""
                        },
                        "goal3": {
                            "message": "",
                            "date": ""
                        }
                    }
                })
                .then(newUser => {
                    req.session.user = newUser.dataValues;
                    res.redirect('/dashboard');
                })
                .catch(error => {
                    res.render('./auth/auth.pug', {modal:"signup", signup_error:"true"});
                });
            } else {
                res.render('./auth/auth.pug', {modal:"signup", signup_error:"true"});
            }
        })
    });


// route for user Login
app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.render('./auth/auth.pug', {modal:"login"});
    })
    .post((req, res) => {
        var email = req.body.email,
            password = req.body.password;

        User.findOne({ where: { email: email } }).then(function (user) {
            if (!user || !user.validPassword(password)) {
                res.render('./auth/auth.pug', {modal:"login", login_error:"true"});
            } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });
    });

// route for user's dashboard
app.route('/dashboard')
    .get((req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            let user = req.session.user;
            console.log(user.email + " has logged in...");
            //can determine new user because there are not three goals
            res.render('./desktop.pug', {goals: user.goals});
        } else {
            res.render('./auth/auth.pug');
        }
    })
    .post((req, res) => {
        if(req.session.user && req.cookies.user_sid){
            console.log('updated user goals');
            let user = req.session.user,
                goal1 = req.body.goal__happy,
                goal2 = req.body.goal__water,
                goal3 = req.body.goal__food;
            let goals = user.goals;
            if(goal1!=goals.goal1.message){
                goals.goal1.date = new Date().getTime();
                goals.goal1.message = goal1;
            }
            if(goal2!=goals.goal2.message){
                goals.goal2.date = new Date().getTime();
                goals.goal2.message = goal2;
            }
            if(goal3!=goals.goal3.message){
                goals.goal3.date = new Date().getTime();
                goals.goal3.message = goal3;
            }
            User.update(
                {goals: goals},
                {where: {email: user.email}}
              )
              .then(() => {
                  res.redirect('/dashboard');
              });
        } else {
            res.redirect('/');
        }
    });

/*
// route for user's dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        let user = req.session.user;
        console.log(user.email + " has logged in...");
        res.render('./phone.pug', {title:"Home"});
    } else {
        res.redirect('/login');
    }
});
*/

// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});


// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});


// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));

