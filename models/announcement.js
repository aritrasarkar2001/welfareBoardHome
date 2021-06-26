const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const announceSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    body:{
        type:String,
        required: true
    }
},{timestamps: true});

const Announce = mongoose.model('Announce',announceSchema);
module.exports =Announce;