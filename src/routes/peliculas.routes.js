import { Router } from "express"
import {createPeliculas,deletePeliculas,getPeliculas,getPeliculaById,updatePeliculas} from '../controllers/peliculas.controller.js'

const router= Router()


//Verbos.... 
router.get('/peliculas',getPeliculas)
router.get('/peliculas/:id',getPeliculaById)

router.post('/peliculas',createPeliculas)
router.put('/peliculas/:id',updatePeliculas)
router.delete('/peliculas/:id',deletePeliculas)

export default router
