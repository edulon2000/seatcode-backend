// controllers/contactController.js
const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validar dados
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    // Criar novo contato
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Contato salvo com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar o contato' });
  }
};

module.exports = { createContact };
