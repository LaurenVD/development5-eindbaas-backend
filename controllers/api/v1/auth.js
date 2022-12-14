const User = require('../../../models/User');
//require passport from passport.js
const passport = require('../../../passport/passport');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
            username: result.username,
        }, "MyVerySecretWord");

        res.json({
            status: 'success',
            data: {
                token: token
        }});
    }).catch(err => {
        res.json({
            status: 'error',
        });
    });
}

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password)
    .then(result => {
        if(!result.user){
           return res.json({
                "status": "failed",
                "message": "login failed"
            })
        }

        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
        }, "MyVerySecretWord");

        return res.json({
            status: 'success',
            data: {
                token: token
            },
        });
    })
    .catch(err => {
        res.json({
            status: 'error',
            });
        });
}

module.exports.signup = signup;
module.exports.login = login;