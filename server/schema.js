// 1
module.exports = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Mutation {
    get(id: ID!): Link
    update(id: ID!, description: String!, url: String!): Link
    post(url: String!, description: String!): Link!
    delete(id: ID!): Link
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type Subscription {
    newLink: Link
  }

  type Link {
    id: ID!
    description: String!
    url: String!
    postedBy: User
  }

  type AuthPayload {
    token: String
    user: User
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
  }
`;