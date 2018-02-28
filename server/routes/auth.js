const express = require('express');
const router = express.Router();
const User = require('../models/User');
const City = require('../models/CitiesEnum')
const bcrypt = require('bcrypt');
const debug = require('debug')("server:auth");
const passport = require('passport')

let loginPromise = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, e => e? reject(e):resolve(user))
  })
}

/* SIGNUP */
router.post('/signup', (req, res, next) => {
  const {username,password, city} = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Indica un nombre de usuario y contraseña' });
  if (!city) return res.status(400).json({ message: 'Indica una ciudad' })
  User.findOne({ username }, '_id')
    .then(foundUser =>{
      if (foundUser) return res.status(400).json({ message: 'Ya existe un usuario con ese nombre' });
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const theUser = new User({
        username,
        password: hashPass,
        city
      });
      return theUser.save()
          .then(user => loginPromise(req,user))
          .then(user => {
            debug(`Registered user ${user._id}. Bienvenido, ${user.username}`);
            res.status(200).json(req.user)
          }) 
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e)
    }) 
});

/* LOGIN */
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: 'Hemos tenido un error' });
    if (!theUser) return res.status(401).json(failureDetails);
    loginPromise(req,theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: 'Hemos tenido un error' }));
  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
