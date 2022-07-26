const state = require('./enum/state');

module.exports = `
  type Query {
    info: String!
    get(id: ID!): Link
    getUsers: User
    feed: [Link!]!
    users: [User]!
  }

  type Mutation {
    get(id: ID!): Link
    createUser(
      firstName: String!,
      lastName: String!,
      sex: Sex!,
      email: String!,
      phoneNumber: String!,
      age: Int!,
      address: String!,
      city: String!,
      state: State!,
      zipcode: String!,
      usbcNumber: String!
    ): User
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

  enum Sex {
    MALE
    FEMALE
  }
  
  ${state}

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    sex: Sex!
    email: String!
    phoneNumber: String!
    age: Int!
    address: String!
    city: String!
    State: State!
    zipcode: String!
    usbcNumber: String!
  }
`;