require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../Frontend/public')));

// Catch-all route para el frontend (mover antes de las rutas API)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/public/index.html'));
});

// Importar rutas
const surveyRoutes = require('./src/routes/surveyRoutes');

// Usar rutas API
app.use('/api/surveys', surveyRoutes);

// Ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend funcionando correctamente' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});