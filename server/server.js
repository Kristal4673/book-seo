const express = require('express');
const { ApolloServer, gql } = require("apollo-server-express");
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');
const {typeDefs,resolvers} = require('./schemas')

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

async function startgraphql() {
  await server.start().then(() => {
    server.applyMiddleware({
      app,
    });
  })
}
startgraphql();
// server.listen().then(({ url }) => { 
//   console.log(`graphql: ${url}`)
// })

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
