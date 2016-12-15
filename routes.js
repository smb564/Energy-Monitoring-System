const PageController = require("./src/controllers/PageController");
const AuthController = require("./src/controllers/AuthController");
const ConnectionController = require("./src/controllers/ConnectionController");

module.exports = function (app, passport) {

    //pages
	app.get('/', PageController.getIndex);

	//auth routes
    app.get('/login', AuthController.getLogin);
    app.get('/signup', AuthController.getSignup);
    app.get('/logout', AuthController.getLogout);
    app.post('/login', function(req,res){
        AuthController.postLogin
    });
    app.post('/signup', function(req,res){
        AuthController.postSignup
    });

    app.get('/showBreakdowns',function (req,res) {
        
    });
    //Connection routes
    app.get('/connectionRequest', ConnectionController.getRequest);

    //dummy routes to test viwes.
    app.get("/breakdownreport", (req, res) => {res.render('breakdown/report');});
    app.get("/breakdownupdate", (req, res) => {res.render('breakdown/update_status');});
};


function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
