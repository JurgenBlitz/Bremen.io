const express = require("express");
const passport = require("passport");
const threadRoutes = express.Router();
const Thread = require("../models/Thread");

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

// threadRoutes.get('/new', ensureLoggedIn('/login'), (req, res) => {
//     res.render('thread/new', { message: `Éste es el inicio de un hilo nuevo`})
// })

threadRoutes.get("/new", ensureLoggedIn("/login"), (req, res, next) => {
  new Thread({
    title: req.body.title,
    replies: req.body.replies,
    creatorId: req.user._id,
    targetId: req.user._id
  })
    .save()
    .then(thread => res.status(200).json(thread))
    .catch(err => console.log(err));
});

// threadRoutes.get('/new/:repliesId', ensureLoggedIn('/login'), (req, res) => {
//   res.render('replies/new', { message: `New comment`, repliesId: req.params.repliesId})
// })

threadRoutes.post(
  "/new/:threadId",
  ensureLoggedIn("/login"),
  (req, res, next) => {
    console.log("Entra al back");
    const newReply = {
      content: req.body.content,
      authorId: req.user._id
    };
    
    Thread.findByIdAndUpdate(req.params.threadId, {
      $push: { replies: newReply }
    })
      .then(thread => res.status(200).json(thread))
      .catch(err => console.log(err));
  }
);

module.exports = threadRoutes;
