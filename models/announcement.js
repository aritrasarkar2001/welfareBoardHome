const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const announceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String },
    important: { type: Boolean },
    category: { type: String, required: true },
    creation: { type: Date, default: Date.now },
    
});
 
module.exports =mongoose.model('Announcement',announceSchema);