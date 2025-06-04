const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
require('dotenv').config();

const app = express();

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Rota do GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // habilita interface gráfica
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
