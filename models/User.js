import mongoose from "mongoose";

const User = mongoose.Schema({
    nama: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
})

export default mongoose.model('Users', User)