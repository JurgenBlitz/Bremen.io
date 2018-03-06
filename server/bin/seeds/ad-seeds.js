const dotenv = require('dotenv').load()

let debug = true;

const mongoose = require("mongoose");
const firstUsers = require('../../models/User');
const firstAds = require("../../models/Ad");
// var Instrument = require("../models/InstrumentsEnum");
// var Experience = require("../models/ExpEnum");
// const City = require("../models/CitiesEnum");
const dbURL= process.env.MONGODB_URI;

mongoose.connect(dbURL)
        .then(() => debug(`Connected to ${dbURL}`))
        .catch(e => console.log(e))


const myAds = [
  {
    title: "Nuevo proyecto de Ska busca Trompetista",
    category: "Proyecto busca músico",
    description: "Somos una nueva formación de Madrid y queremos tratar de lanzar una nueva ola de ska nosotros solos, porque tenemos más valor que Jon Snow cargando él solo contra el ejército de los Bolton. Necesitamos un/a trompetista valiente, que se sienta capaz de retar a Louis Armstrong a un duelo de metales y salir victorioso. Somos 4 integrantes hasta ahora y ensayamos cerca de Moratalaz.",
    styles: "Ska",
    instrument: "Trompeta",
    creator_id: "5a9ebe121f6f7348b580c553",
    city: "Madrid",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  },

  {
    title: "Cosmic Treadmills busca Guitarrista y Teclista",
    category: "Proyecto busca músico",
    description: "¡Buenas! Somos los Cosmic Treadmills, un Proyecto nuevo de rock progresivo con temática en torno a Flash y sus viajes en el tiempo. Necesitamos un teclista versátil y atrevido, que no se limite sólo a tocar notas largas en un Hammond; y uno de estos guitarristas que acaban logrando que se te caiga la mandíbula al escucharle. Queremos empezar a componer pronto así que si te ves reflejado en una de las dos descripciones, escríbemos!",
    styles: "Rock",
    instrument: "Guitarra",
    creator_id: "5a9ebe121f6f7348b580c553",
    city: "Barcelona",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  },

  {
    title: "Sanchez & The Mortys busca Cantante",
    category: "Proyecto busca músico",
    description: " *burp - Ven a tocar con nosotros, Morty, ven a - burp - unirte a nuestra banda experimental fusión. Haremos viajes interestelares, tocaremos jazz ácido digno de Primus o Mr Bungle y - burp - reinaremos en toda la galaxia. Ahora en serio, tenemos un local cerca de SS de los Reyes y necesitamos un  cantante innovador",
    styles: "Jazz",
    instrument: "Guitarra",
    creator_id: "5a9ebe121f6f7348b580c553",
    city: "Madrid",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
];

firstAds.collection.drop();

firstAds.create(myAds, (err, ad) => {
  if (err) {
    throw err;
  }
  ad.forEach(a => {
    console.log(`advertisement added ${a.title}`);
  });
  mongoose.connection.close();
});

