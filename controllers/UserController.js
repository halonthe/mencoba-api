import User from '../models/User.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createUser = async (req, res) => {
    const user = new User(req.body)
    try {
        const tambahUser = await user.save();
        res.status(201).json(tambahUser);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const edituser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(edituser);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const hapususer = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(hapususer);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
