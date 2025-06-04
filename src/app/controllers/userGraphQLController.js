const { graphqlHTTP } = require('express-graphql');
const User = require('../models/user');
const generateGenericSchema = require('../schema/genericSchema');



const schema = generateGenericSchema({ user: User });

const userGraphQLController = graphqlHTTP({
  schema,
  graphiql: true
});

module.exports = userGraphQLController;