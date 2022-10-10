import express from "express";
import { getGugurs, getGugurById, updateGugur, deleteGugur, createGugur } from '../controllers/GugurController.js'

const router = express.Router();

router.get('/gugur', getGugurs)
router.get('/gugur/:id', getGugurById)
router.post('/gugur', createGugur)
router.patch('/gugur/:id', updateGugur)
router.delete('/gugur/:id', deleteGugur)

export default router;