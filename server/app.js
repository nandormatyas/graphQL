const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  
}));

app.listen(4200, () => {
  console.log('listening on 4200')
});