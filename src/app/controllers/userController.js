const { graphqlHTTP } = require('express-graphql');
const User = require('../models/user');
const generateGenericSchema = require('../schema/genericSchema');

const schema = generateGenericSchema({ user: User });

module.exports = (req, res) => {
  return graphqlHTTP({
    schema,
    graphiql: true,
  })(req, res);
};