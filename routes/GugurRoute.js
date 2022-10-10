import express from "express";
import { getGugurs, getGugurById, updateGugur, deleteGugur, createGugur } from '../controllers/GugurController.js'

const router = express.Router();

router.get('/', getGugurs)
router.get('/:id', getGugurById)
router.post('/', createGugur)
router.patch('/:id', updateGugur)
router.delete('/:id', deleteGugur)

export default router;