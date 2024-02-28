import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema';

const server = new ApolloServer({
    //typeDefs - tip tanımlamaları --definitions of types of data
    //resolevers - farklı sorgulara yanıt vermeye sağlayan grup

    typeDefs,
})

const {url} = await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log('Server ready at port',4000)