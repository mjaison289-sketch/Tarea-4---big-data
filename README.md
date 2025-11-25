# Tarea 4 - MongoDB (Consultas de ejemplo)

**Estudiante:** Ronal Jaison Márquez Mora  
**Curso:** Big Data  
**Actividad:** Tarea 4 — Almacenamiento y consultas de Datos en Big Data  


---

## 1. ¿Qué es este proyecto?
Este repositorio contiene el código de las consultas realizadas en MongoDB para la actividad de análisis de factores de rendimiento estudiantil (dataset de Kaggle). El objetivo es practicar operaciones CRUD, filtros y agregaciones para extraer estadísticas del conjunto de datos. Esto con el fin de aplicar distintas técnicas de análisis y visualización a grandes conjuntos de datos para obtener información útil.

## 2. Datos que he usado
- **Origen:** Kaggle — Dataset de factores de rendimiento estudiantil.  
- **Descripción:** Contiene variables como `Hours_Studied`, `Attendance`, `Parental_Involvement`, `Exam_Score`, entre otras.
- **Importación:** El dataset fue importado previamente en MongoDB Compass a la colección `Libros` (o `Estudiante` según prefieras).

## 3. Contenido del repositorio en especifico
- `consultas_mongodb.js` — Archivo con las consultas (find, insert, update, delete, aggregate).  
  > Archivo generado localmente: `/mnt/data/consultas_mongodb.js`
- `README.md` — Este archivo.

(Agregar `dataset.csv` si lo deseas y si el tamaño lo permite.)

## 4. Cómo se debe ejecutar las consultas

### Opción A — MongoDB Compass (GUI)
1. Abre MongoDB Compass y conéctate a tu servidor.  
2. Selecciona la base de datos `Biblioteca` (o `student_performance`) y la colección `Libros` (o `Estudiante`).  
3. Para consultas `find`, usa la pestaña **Documents** y pega el filtro en el cuadro *Filter*.  
4. Para agregaciones, usa la pestaña **Aggregation**, pega la pipeline y ejecuta.  
5. Para insertar manualmente, haz clic en **ADD DATA → Insert Document** y pega JSON.

### Opción B — mongosh (Shell)
1. Abre una terminal y ejecuta `mongosh`.  
2. Selecciona la base de datos:
```js
use Biblioteca
```
3. Ejecuta las consultas copiando el contenido de `consultas_mongodb.js` y pegándolo en la terminal (asegúrate de revisar `ObjectId` en update/delete).

## 5. Notas importantes para no tener errores luego
- Asegúrate de que los nombres de campos coincidan exactamente (mayúsculas/minúsculas).  
- Si al usar operadores numéricos no obtienes resultados, verifica que el campo esté guardado como número y no como texto.  
- Reemplaza `ObjectId("ID_EJEMPLO")` en las consultas por ids reales si las usas para update/delete.

## 6. Autor y grupo
- Ronal Jaison Márquez Mora — Grupo: [202016911_60]

---

## 7. Cómo subir al repositorio (pasos rápidos)
1. En GitHub crea un nuevo repo (ej. `tarea4-mongodb`).  
2. Sube `consultas_mongodb.js` y `README.md` (Add file → Upload files).  
3. Haz commit y copia la URL del repositorio.  
4. Pega la URL en la sección "Enlace al repositorio de código" de tu informe.

---

### Archivo de consultas (local)
El archivo con las consultas se generó en este entorno en la ruta:

`/mnt/data/consultas_mongodb.js`
