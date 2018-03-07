const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const replySchema = Schema({
    authorId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String
  })


const threadSchema = new Schema({
    title: String,
    creator_id: { type: Schema.Types.ObjectId, ref: 'User'},
    target_id: {type: Schema.Types.ObjectId, ref: 'User'},
    replies: [replySchema],
    date: { type: Date},
    });

module.exports = mongoose.model('Thread', threadSchema); 