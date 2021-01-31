const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date
  scalar JSON
  type TraderUser {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    crossing_location: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
  }

  type TraderSession {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    crossing_location: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
    procedurecommodity: String
    procedurecommoditycat: String
    proceduredest: String
    procedurerequireddocument: String
    procedurerelevantagency: String
    procedureorigin: String
    commoditycountry: String
    commoditymarket: String
    commoditycat: String
    commodityproduct: String
    exchangedirection: String
    created_date: Date
  }

  type DatabankUser {
    id: Int
    email: String
    password: String
    tier: UserTier
    interest: String
    organization: String
    job_position: String
    country: String
    token: String
    organization_type: OrganizationType
    subscription_id: String
    registration_date: String
    updated: String
    p_next_billing_time: String
    found_by: FoundBy
    paypal_plan: String
    verification_code: Int
    resetToken: String
    verified_email: Boolean
  }

  type NodeEmail {
    name: String
    email: String
    nature: String
    message: String
  }

  enum FoundBy {
    CROSS_BORDER_ASSOCIATION
    UNIVERSITY
    SAUTI_STAFF
    OTHER
  }

  enum UserTier {
    EXPIRED
    FREE
    PAID
    ADMIN
    GOV_ROLE
  }

  enum OrganizationType {
    GOVERNMENT
    NGO
    RESEARCH
    OTHER
  }

  type Error {
    message: String
  }

  union EditedUserOrError = DatabankUser | Error
  union DeletedUserOrError = DatabankUser | Error
  union UpdateUserToExpired = DatabankUser | Error
  union AddPaypalPlanOrError = DatabankUser | Error
  union ResetPasswordOrError = DatabankUser | Error
  union EmailValidate = DatabankUser | Error

  input emailContactInput {
    name: String
    email: String
    nature: String
    message: String
  }

  input newTraderInput {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    crossing_location: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
  }

  input newTraderSessionInput {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    crossing_location: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
    procedurecommodity: String
    procedurecommoditycat: String
    proceduredest: String
    procedurerequireddocument: String
    procedurerelevantagency: String
    procedureorigin: String
    commoditycountry: String
    commoditymarket: String
    commoditycat: String
    commodityproduct: String
    exchangedirection: String
    created_date: Date
  }

  input newEditUserInput {
    id: Int!
    email: String
    password: String
    tier: UserTier
    interest: String
    organization: String
    job_position: String
    country: String
    organization_type: OrganizationType
    subscription_id: String
    verified_email: Boolean
  }

  input newUpdateUserToExpiredInput {
    id: Int
    email: String!
    subscription_id: String
  }

  input newAddPaypalPlanInput {
    id: Int
    email: String!
    subscription_id: String
  }

  input newDeleteUserInput {
    id: Int!
    email: String
  }

  input newRegisterInput {
    id: Int
    email: String!
    password: String!
    tier: UserTier!
    interest: String
    organization: String
    job_position: String
    country: String
    organization_type: OrganizationType!
    found_by: FoundBy
  }

  input newLoginInput {
    email: String!
    password: String!
  }

  input Email {
    email: String
  }

  input resetPasswordInput {
    email: String
  }

  type Query {
    tradersUsers(input: newTraderInput): [TraderUser]!
    sessionsData(input: newTraderSessionInput): [TraderSession]!
    databankUsers: [DatabankUser]!
    databankUser(input: Email!): DatabankUser!
    getGraphLabels: JSON
  }

  type Mutation {
    register(input: newRegisterInput!): DatabankUser!
    login(input: newLoginInput!): DatabankUser!
    editUser(input: newEditUserInput!): EditedUserOrError!
    validateEmail(input: newEditUserInput!): EmailValidate!
    deleteUser(input: newDeleteUserInput!): DeletedUserOrError!
    updateUserToExpired(
      input: newUpdateUserToExpiredInput!
    ): UpdateUserToExpired!
    addPaypalPlan(input: newAddPaypalPlanInput!): AddPaypalPlanOrError!
    sendResetPassword(input: resetPasswordInput!): ResetPasswordOrError!
    emailByContact(input: emailContactInput!): NodeEmail
  }
`;

module.exports = typeDefs;
