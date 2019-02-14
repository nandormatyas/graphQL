const graphql = require('graphql');

const { 
  GraphQLObjectType,
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args){
        console.log(parent);
        return 1
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type:GraphQLID } },
      resolve(parent, args){
        //code to get data from db
        return 1
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type:GraphQLID } },
      resolve(parent, args){
        return 1
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
