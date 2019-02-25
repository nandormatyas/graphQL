const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://nandi:test123@cluster0-hekdv.mongodb.net/test?retryWrites=true');
mongoose.connection.once('open', () => {
  console.log('mongoo connected');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4200, () => {
  console.log('listening on 4200')
});