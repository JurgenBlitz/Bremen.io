const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Styles = require('./StylesEnum');
const Instrument = require('./InstrumentsEnum');
const Category= require('./CategoryEnum');
const City = require ('./CitiesEnum'); 

const adsSchema = new Schema({
  title: { type: String },
  category: { type: String, enum: Category}, 
  description: { type: String},
  styles: { type: String, enum: Styles}, 
  instrument: { type: String, enum: Instrument},
  creator_id: { type: Schema.Types.ObjectId, ref: 'User'},
  city: { type: String, enum: City},
  imgUrl: { type: String, default: "https://i.ytimg.com/vi/5vs0DTRdD8A/hqdefault.jpg"},
  audio: { type: String, default: "https:// any link" },
  video: { type: String, default: "https:// any link" },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });

module.exports = mongoose.model('Ad', adsSchema); 