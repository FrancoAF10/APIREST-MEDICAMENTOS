import {pool} from "../db.js"


//Lógica (backend) de cada enpoint
export const getMedicamentos=async(req,res)=>{
  const [rows]=await pool.query("SELECT * FROM MEDICAMENTOS")
  res.json(rows)
}

export const getMedicamentosById=async(req,res)=>{
  const [rows]=await pool.query("SELECT * FROM MEDICAMENTOS WHERE id=?",[req.params.id])
  if(rows.length<=0){
    return res.status(404).json({
      message:'No existe medicamento con ese ID'
    })
  }
  res.json(rows)
  
}
export const getMedicamentosReceta = async (req, res) => {
  const receta = req.params.receta?.toUpperCase(); 

  const [rows] = await pool.query("SELECT * FROM MEDICAMENTOS WHERE receta = ?",[receta]);

  if (rows.length <= 0) {
    return res.status(404).json({
      message: 'No Existe Receta'
    });
  }

  res.json(rows);
};
export const getMedicamentosTipo = async (req, res) => {
  const tipo = req.params.tipo?.toUpperCase(); 

  const [rows] = await pool.query("SELECT * FROM MEDICAMENTOS WHERE tipo = ?",[tipo]);

  if (rows.length <= 0) {
    return res.status(404).json({
      message: 'No Existe Tipo de Medicamento'
    });
  }

  res.json(rows);
};

export const createMedicamentos= async(req,res)=>{
  //1. Obtener datos del Json (input)
  const {tipo,nombre,nomComercial,presentacion,receta,precio}=req.body
  if (!tipo || !['Antiinflamatorio', 'Antialérgicos', 'Antidepresivo', 'Antiinfecciosos'].includes(tipo)) {
    return res.status(400).send({ error: 'Tipo inválido o no proporcionado' });
  }

  if (!nombre || nombre.trim() === '') {
  return res.status(400).send({ error: 'Nombre es inválido o no proporcionado' });
  }

    if (!presentacion || !['Sólida','Semisólida','Líquida'].includes(presentacion)) {
    return res.status(400).send({ error: 'Presentación inválido o no proporcionado' });
  }
    if (!receta || !['S', 'N'].includes(receta)) {
    return res.status(400).send({ error: 'Receta inválido o no proporcionado' });
  }

  if (isNaN(precio) || Number(precio) <= 0) {
    return res.status(400).send({ error: 'Precio inválido' });
  }
// 2. Ejecutar la consulta, pasa valores obtenidos
  const [rows]=await pool.query("INSERT INTO MEDICAMENTOS (tipo,nombre,nomComercial,presentacion,receta,precio)VALUES(?,?,?,?,?,?)",
  [tipo,nombre,nomComercial,presentacion,receta,precio])
  //3. enviar un objeto con el resultado del query
  res.send({
    id:rows.insertId,
    tipo,
    nombre,
    nomComercial,
    presentacion,
    receta,
    precio
  })
}

export const updateMedicamentos=async(req,res)=>{
  const id=req.params.id
  const {tipo,nombre,nomComercial,presentacion,receta,precio}=req.body
  if (isNaN(precio) || Number(precio) <= 0) {
    return res.status(400).send({ error: 'Precio inválido' });
  }
  const querySQL= `
  UPDATE MEDICAMENTOS SET
   tipo= ?,
   nombre= ?,
   nomComercial= ?,
   presentacion= ?,
   receta= ?,
   precio =?
  WHERE id= ?
  `
   
  const [result]=await pool.query(querySQL, [tipo,nombre,nomComercial,presentacion,receta,precio, id])

  if(result.affectedRows==0){
    return res.status(404).json({
      message: "EL ID NO EXISTE"
    })
  }
  res.json({
    message:"Actualización Correcta"
  })
}

export const deleteMedicamentos=async(req,res)=> {
  const [result]=await pool.query("DELETE FROM MEDICAMENTOS WHERE id=? AND receta='N'",[req.params.id])
 if(result.affectedRows<=0){
  return res.status(404).json({
    message:"No se pudo eliminar: el medicamento no existe o receta es 'S'"
  })
 }

 //¿Y si borra correctamente?
 res.sendStatus(204)
}