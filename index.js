'use strict'

require('dotenv').config()
const { makeExecutableSchema } =require( '@graphql-tools/schema')
const {graphql,buildSchema} = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const {readFileSync} = require('fs')
const {join} = require('path')
const resolvers = require('./lib/resolvers')

const app=express()
const port = process.env.PORT || 3000

const typeDefs = readFileSync(join(__dirname,'lib','schema.graphql'),'utf-8')
const schema = makeExecutableSchema({typeDefs,resolvers})

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))
app.listen(port, () => console.log(`Listening on port ${port}`))

