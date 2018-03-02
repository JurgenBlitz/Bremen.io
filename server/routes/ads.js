const express = require("express");
const router = express.Router();
const City = require("../models/CitiesEnum");
const Instrument = require("../models/InstrumentsEnum");
const Types = require("../models/StylesEnum");
const debug = require("debug")("m2-0118-ironfunding:campaign");
const Ad = require("../models/Ads");
const Category= require("../models/TypesEnum");
// Upload files with multer
// const multer = require('multer');
// const upload = multer({ dest: __dirname + '/../uploads' });

const ensureLoggedIn = redirect_url => {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect(redirect_url);
    }
  };
};

const checkOwnership = (req, res, next) => {
  Ad.findById(req.params.id, (err, ad) => {
    if (err) {
      return next(err);
    }
    if (!ad) {
      return next(new Error("Campaign does not exist"));
    }
    if (ad.creator_id.equals(req.user._id)) {
      next();
    } else {
      return next(new Error("You cannot edit this campaign"));
    }
  });
};

router.post("/new", [ensureLoggedIn("/auth/login")], (req, res, next) => {
  // , upload.single('image')
  const {
    title,
    category,
    description,
    styles,
    mainInstrument,
    audio,
    video,
    city
  } = req.body;
  console.log(req.body);
  const newAd = new Ad({
    title,
    types,
    description,
    styles,
    mainInstrument,
    city,
    audio,
    video,
    creator_id: req.user._id
    //imgUrl: req.file.filename
  });

  newAd
    .save()
    .then(c => {
        console.log("entra")
      res.redirect("/ad/show/" + c._id);
    })
    .catch(e => {
      res.redirect("/");
    });
  });

//Complete ad list
router.get("/list", (req, res) => {
  Ad.find().exec((err, list) => {
    res.render("ad/list", { list: list, city: City, styles: Types, types: Category });
    });
  });


router.post("/list", (req, res) => {
  const city = req.body.city;
  const styles = req.body.styles;
  if (styles == "Cualquiera")  {
    Ad.find({ city: city }).exec((err, list) => {
      res.render("ad/list", { list: list, city: City, styles: Types });
    });
  }
  else if (city == "Cualquiera") {
    Ad.find({ styles: styles}).exec((err, list) => {
        res.render("ad/list", { list: list, city: City, styles: Types });
      });
  }  
  else  {
    Ad.find({ cities: cities, styles: styles}).exec((err, list) => {
        res.render("ad/list", { list: list, city: City, styles: Types });
      });
  }  
});

//Show the user's ads
router.get("/my-ads", (req, res) => {
  Ad.find({creator_id: res.locals.user._id})
    .then(respuesta => {
      res.render('ad/my-ads', {list: respuesta})
    })
    .catch(error => {
      console.log(error)
    });
  });

//Show newly created ad, to edit or delete 
router.get("/show/:id", (req, res, next) => {
  Ad.findById(req.params.id)
    .populate("creator_id")
    .then(c => res.render("ad/show", { ad: c }))
    .catch(e => next(e));
});

//Edit an ad
router.get("/:id/edit", ensureLoggedIn("/login"), (req, res, next) => {
  Ad.findById(req.params.id, (err, ad) => {
    if (err) {
      return next(err);
    }
    if (!ad) {
      return next(new Error("404"));
    }
    return res.render("ad/edit", {
      ad: ad,
      city: City,
      mainInstrument: Instrument,
      styles: Types
    });
  });
});

router.post("/:id/edit", ensureLoggedIn("/login"), (req, res, next) => {
  const updates = ({
    title,
    types,
    description,
    styles,
    mainInstrument,
    audio,
    video,
    city
  } = req.body);

  Ad.findByIdAndUpdate(req.params.id, updates, (err, ad) => {
    if (err) {
      return res.render("ad/edit", {
        ad,
        errors: ad.errors
      });
    }
    if (!ad) {
      return next(new Error("Error al editar, el anuncio no existe"));
    }
    return res.redirect(`/ad/show/${ad._id}`);
  });
});

//Delete an ad
router.get("/:id/delete", (req, res) => {
  const id = req.params.id;
  Ad.findById(id).exec((err, ad) => {
    ad.remove({}, err => {
      res.redirect("/ad/list");
    });
  });
});

module.exports = adRoutes;