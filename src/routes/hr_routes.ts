import express from 'express'
import { create_jobOpenings, getJobOpenings, getJobOpeningsById, jobOpeningsDelete, updateJobOpenings } from '../controllers/HR_controlls'


const router=express.Router()
router.post('/jobOpenings',create_jobOpenings);
router.put('/jobOpenings/:jobOpingId',updateJobOpenings);
router.get('/jobOpenings',getJobOpenings);
router.get('/jobOpenings/:jobOpeningsId',getJobOpeningsById);
router.delete('/jobOpenings/:jobOpeningsId',jobOpeningsDelete);

export default router
