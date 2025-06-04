const express = require('express');
const mongoose = require('./app/database/index')
const userGraphQLController = require('./app/controllers/userGraphQLController');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;


 require('./app/controllers/index')(app);
//app.use('/graphql', userGraphQLController);

app.listen(PORT, () => {
  console.log(`-------------------------------------------------------`);
   console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
});
mongoose.connection.once('open', () => {
  console.log(' Conectado ao MongoDB ');
});