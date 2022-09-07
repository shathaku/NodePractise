const express = require('express');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
const request = require('request');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express();
const oidc = new ExpressOIDC({
    issuer: 'https://dev-954597.okta.com/oauth2/default',
    client_id: '',
    client_secret: '',
    appBaseUrl: 'http://localhost:8181',
    scope: 'openid profile'
});

app.use(session({
    secret: 'this-is-a-test-app',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 *1 }
}))

app.use(oidc.router);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        res.send(`
        Hello ${req.userContext.userinfo.name}!
        <form method="POST" action="/logout">
            <button type="submit">Logout</button>
        </form>
        `);
    } else {
        //res.redirect('/login');
        res.send(`Please <a href="/login">login</a>`);
    }
});

app.get('/getAuthToken', (req, res) => {
    let {username, password} = config;
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
    var options = { 
        method: 'GET',
        url: 'http://localhost:3001/getAuthToken',
        qs: { email: 'shashankth@gmail.com' },
        headers: 
        { 
            Authorization: auth
        } 
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
})

oidc.on('ready', () => {
    app.listen(8181, () => console.log('app started on 8181'));
  });
