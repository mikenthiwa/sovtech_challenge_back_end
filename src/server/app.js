import express from 'express';
import cors from 'cors';
import schema from '../schema';
import {ApolloServer} from "apollo-server-express";
import typeDefs from "../schema";
import resolvers from "../resolvers";

export default () => {
    const app = express();
    app.use(cors());
    const server = new ApolloServer({ typeDefs, resolvers});
    server.applyMiddleware({ app });
    return app
}