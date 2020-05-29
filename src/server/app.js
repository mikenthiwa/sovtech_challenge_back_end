import express from 'express';
import schema from '../schema';
import {ApolloServer} from "apollo-server";
import typeDefs from "../schema";
import resolvers from "../resolvers";

export default () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers});
    server.applyMiddleware({ app });
    return app
}