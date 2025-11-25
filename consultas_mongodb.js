// consultas_mongodb.js
// Ejemplos de consultas básicas, filtros y agregaciones

// 1. Insertar un documento
db.Estudiante.insertOne({
  Hours_Studied: 5,
  Attendance: 80,
  Parental_Involvement: "Medium",
  Exam_Score: 70
});

// 2. Seleccionar todos los documentos
db.Estudiante.find({});

// 3. Seleccionar con filtro
db.Estudiante.find({ Gender: "Male" });

// 4. Actualizar documentos
db.Estudiante.updateOne(
  { Gender: "Male" },
  { $set: { Motivation_Level: "High" } }
);

// 5. Eliminar documentos
db.Estudiante.deleteOne({ Hours_Studied: 5 });

// 6. Agregación: promedio de puntaje
db.Estudiante.aggregate([
  { $group: { _id: null, promedio: { $avg: "$Exam_Score" } } }
]);

// 7. Agregación: cantidad por nivel de motivación
db.Estudiante.aggregate([
  { $group: { _id: "$Motivation_Level", total: { $sum: 1 } } }
]);
