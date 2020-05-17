// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  SEED de autenticación
// ============================

process.env.SEED = process.env.SEED || 'secret-prd';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = process.env.MONGO_URI;
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//mongodb+srv://admin:5v0pn9dlorsb1y4P@cluster0-ftdpr.mongodb.net/cafe