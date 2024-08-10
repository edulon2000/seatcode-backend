const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Adicione isto
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

connectDB();

const app = express();

// Habilitar CORS para todas as rotas
app.use(cors()); // Adicione isto

app.use(express.json());

app.use('/api/contacts', contactRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
