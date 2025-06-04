const express = require('express');
const mongoose = require('./app/database/index')
require('dotenv').config();
const app = express();
const userGraphqlController = require('./app/controllers/userController');

const PORT = process.env.PORT;

app.use('/graphql/users', userGraphqlController);

app.listen(PORT, () => {
  console.log(`-------------------------------------------------------`);
   console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}/graphql`);
});
mongoose.connection.once('open', () => {
  console.log(' Conectado ao MongoDB ');
});