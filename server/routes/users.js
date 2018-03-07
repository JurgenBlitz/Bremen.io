const express = require("express");
const userRoutes = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/User");
const bcryptSalt = 10;

//ensure login
const ensureLoggedIn = redirect_url => {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect(redirect_url);
    }
  };
};

//show single user
userRoutes.get("/:id/show", (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(404).json(err));
});

//save additional details during signup
userRoutes.post("/:id/edit", ensureLoggedIn("/login"), (req, res, next) => {
  const id = req.params.id;
  const updates = {
    imgUrl,
    username,
    city,
    description,
    instrument,
    experience,
    otherInstrument
  } = req.body;

  User.findByIdAndUpdate(id, updates, { new: true }, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Hemos tenido un error" });
    }
    if (!user) {
      return next(new Error("Error al editar, el usuario no existe"));
    }
    req.user = user;
    return res.status(200).json(user);
  });
});

//VOY POR AQUI

//edit the profile after signup
userRoutes.get("/:id/edit", ensureLoggedIn('/login'), (req, res, next) => {
  User.findById(req.user._id, (err, user) => {
    if (err) { return next(err) }
    if (!user) { return next(new Error("404")) }
    return res.status(200).json(user);
  });
}); 

userRoutes.post("/:id/edit", ensureLoggedIn("/login"), (req, res, next) => {
  const updates = ({
    imgUrl,
    username,
    city,
    description,
    styles,
    mainInstrument,
    otherInstrument,
    experience
  } = req.body);

  User.findByIdAndUpdate(req.user._id, updates, { new: true }, (err, user) => {
    if (err) {
      //req.flash('info','Errores al editar');
      return res.render("users/edit", {
        user,
        errors: user.errors
      });
    }
    if (!user) {
      return next(new Error("Error al editar, el usuario no existe"));
    }
    //req.flash('info','Datos editados');
    req.user = user;
    return res.redirect(`/users/activity`);
  });
});



//delete the user
userRoutes.get("/:id/delete", (req, res) => {
  User.findByIdAndRemove(req.user._id, function(err, user) {
    if (err) {
      return res.status(400).json({ message: "Hemos tenido un error" });
    } else {
      res.status(200).json({ message: "Usuario eliminado con éxito" });
    }
  });
});

module.exports = userRoutes;
