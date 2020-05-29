import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv';
import application from "./app";


dotenv.config();

const port = process.env.PORT
const app = application()

app.listen(port, () => console.log(`listening in port ${ port }`));