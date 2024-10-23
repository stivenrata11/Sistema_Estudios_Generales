const sql = require('mssql');

// Configuración de la conexión a SQL Server
const config = {
  user: 'admin',
  password: '123',
  server: 'localhost', // Ej: localhost, o nombre del servidor SQL
  database: 'sistema',
  options: {
    encrypt: true, // Usar si SSL está habilitado
    trustServerCertificate: true // Para entornos de desarrollo
  },
};

// Función para verificar la conexión a la base de datos
async function testConnection() {
  try {
    // Intentar conectar a SQL Server
    let pool = await sql.connect(config);
    console.log('Conexión a SQL Server exitosa.');
    
    // Cerrar la conexión una vez verificada
    sql.close();
    
    return true; // Indicar que la conexión fue exitosa
  } catch (err) {
    console.error('Error al conectar a SQL Server:', err);
    
    // Cerrar la conexión si falló
    sql.close();
    
    return false; // Indicar que la conexión falló
  }
}

console.log(testConnection())
