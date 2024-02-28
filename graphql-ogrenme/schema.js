export const typeDefs = `#graphql
type Game {
    id:ID!,
    title:String!,
    platform:[String!]!
}

type Review {
    id:ID!
    rating:String!
    content: String!
}

type Author {
    id:ID,
    name: String!
    verified: Boolean!
}

type Query {
    reviews : [Review]
    games : [Game]
    auhors : [Author]
}
`

//int,float,string,boolean,ID,