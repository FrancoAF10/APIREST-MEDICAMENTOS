import { Router } from "express"
import {createMedicamentos,deleteMedicamentos,getMedicamentos,getMedicamentosById,updateMedicamentos,getMedicamentosReceta,getMedicamentosTipo} from '../controllers/medicamentos.controller.js'

const router= Router()


//Verbos.... 
router.get('/medicamentos',getMedicamentos)
router.get('/medicamentos/:id',getMedicamentosById)
router.get('/medicamentos/receta/:receta',getMedicamentosReceta)
router.get('/medicamentos/tipo/:tipo',getMedicamentosTipo)



router.post('/medicamentos',createMedicamentos)
router.put('/medicamentos/:id',updateMedicamentos)
router.delete('/medicamentos/:id',deleteMedicamentos)

export default router
