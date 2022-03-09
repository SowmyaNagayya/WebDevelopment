const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')
const app = express();

const authors = [
    { id: 1, name: 'J.K. Rowling'},
    { id: 2, name: 'J.R.R. Tolkien'},
    { id: 3, name: 'Brent Weeks'},
]

const books = [
    { id: 1, name: 'Harry Potter and the chamber secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of fire', authorId: 1 },
    { id: 4, name: 'The fellowship of the ring', authorId: 2 },
    { id: 5, name: 'The two towers', authorId: 2 },
    { id: 6, name: 'The return of the king', authorId: 2 },
    { id: 7, name: 'The way of shadows', authorId: 3 },
    { id: 8, name: 'Beyond the shadows', authorId: 3 },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt)},
        name: { type: new GraphQLNonNull(GraphQLString)},
        authorId: { type: new GraphQLNonNull(GraphQLInt)}
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all Books',
            resolve: () => books
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'HelloWorld',
//     fields: () => ({
//         message: { 
//             type: GraphQLString,
//             resolve: () => 'Hello World'
//         }
//     })
//   })
// })
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphql: true
}))
app.listen(5000., () => console.log('Server Running'))