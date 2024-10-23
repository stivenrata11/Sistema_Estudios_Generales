const sql = require('mssql');
const dbConfig = require('../config/db.config');

const surveyController = {
    // Obtener todas las encuestas
    getAllSurveys: async (req, res) => {
        try {
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .query('SELECT * FROM Surveys ORDER BY createdAt DESC');
            res.json(result.recordset);
        } catch (error) {
            res.status(500).json({ 
                error: 'Error al obtener las encuestas',
                details: error.message 
            });
        }
    },

    // Crear una nueva encuesta
    createSurvey: async (req, res) => {
        try {
            const { title, description } = req.body;
            
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .input('title', sql.NVarChar, title)
                .input('description', sql.NVarChar, description)
                .query(`
                    INSERT INTO Surveys (title, description, createdAt) 
                    VALUES (@title, @description, GETDATE());
                    SELECT SCOPE_IDENTITY() AS id;
                `);

            res.status(201).json({
                message: 'Encuesta creada exitosamente',
                surveyId: result.recordset[0].id
            });
        } catch (error) {
            res.status(500).json({
                error: 'Error al crear la encuesta',
                details: error.message
            });
        }
    },

    // Obtener una encuesta por ID
    getSurveyById: async (req, res) => {
        try {
            const { id } = req.params;
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .input('id', sql.Int, id)
                .query('SELECT * FROM Surveys WHERE id = @id');

            if (result.recordset.length > 0) {
                res.json(result.recordset[0]);
            } else {
                res.status(404).json({ message: 'Encuesta no encontrada' });
            }
        } catch (error) {
            res.status(500).json({
                error: 'Error al obtener la encuesta',
                details: error.message
            });
        }
    }
};



module.exports = surveyController;