const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Instrument = require('./InstrumentsEnum');
const Experience= require('./ExpEnum');
const City= require('./CitiesEnum');

const userSchema = new Schema({
    username: String,
    password: {type: String, required: true },
    email: {type: String, required: true },
    city: {type: String, enum: City},
    description: String,
    instrument: { type: String, enum: Instrument}, 
    experience: { type: String, enum: Experience},
    otherInstrument: { type: String}, 
    imgUrl: { type: String, default: "https://pbs.twimg.com/profile_images/889232092441214978/beVAb2-k_400x400.jpg" }
},{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
