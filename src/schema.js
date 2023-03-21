const { gql } = require('graphql-tag'); 

const typeDefs = gql`
    type Query { 
        contacts: [Contact!]!
        body: [Body!]!
        quotes: [Quote!]!
        services: [Service!]!
    }
    type  Contact {
       id: ID!  
       firstname: String!
       lastname: String!
       age: Int
       address: String
       gender: String
       body: [Body!]!
       photo: String!
    }
    type Body {
        id: ID!
        firstname: String!
        lastname: String!
        age: Int 
        causeOfDeath: String!
        dateofDeath: String! 
        photo: String!
    }
    type Quote { 
        id: ID!
        conact: Contact! 
        body: Body!
        service: [Service!]!   
    }
    type Service {
        id: ID!
        name: String!
        price: Int
        duration: Int
        description: String! 
    }
`;

module.exports = typeDefs; 