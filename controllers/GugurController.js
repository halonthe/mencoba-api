import Gugur from "../models/Gugur.js";

export const getGugurs = async (req, res) => {
    try {
        const gugurs = await Gugur.find();
        res.status(200).json(gugurs);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getGugurById = async (req, res) => {
    try {
        const gugur = await Gugur.findById(req.params.id);
        res.status(200).json(gugur);
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createGugur = async (req, res) => {
    const gugur = new Gugur(req.body)
    try {
        const tambahGugur = await gugur.save();
        res.status(201).json(tambahGugur);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateGugur = async (req, res) => {
    try {
        const editGugur = await Gugur.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(editGugur);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const deleteGugur = async (req, res) => {
    try {
        const hapusGugur = await Gugur.deleteOne({ _id: req.params.id });
        res.status(200).json(hapusGugur);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
