import mongoose from "mongoose";

const Gugur = mongoose.Schema({
    nama: {
        type: String,
        require: true
    },
    norm: {
        type: Number,
        require: true
    },
    nosep: {
        type: String
    },
    ket: {
        type: String,
        require: true
    },
    tgl: {
        type: Date
    },
})

export default mongoose.model('Gugurs', Gugur)