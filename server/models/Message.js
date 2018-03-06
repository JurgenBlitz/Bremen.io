const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    post: { type: String },
    title: { type: String },
    creator_id: { type: Schema.Types.ObjectId, ref: 'User'},
    target_id: {type: Schema.Types.ObjectId, ref: 'User'},
    content: { type: String}, 
    description: { type: String},
    date: { type: Date},
  }, {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

module.exports = mongoose.model('Message', messageSchema); 