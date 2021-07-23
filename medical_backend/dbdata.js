import mongoose from 'mongoose'

const dataSchema = mongoose.Schema({
    id:Number,
    name: String,
    minvalue : Number,
    maxvalue : Number
});

export default mongoose.model('dataContent',dataSchema);