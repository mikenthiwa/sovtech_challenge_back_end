import {Jokes} from "../modules";


export const jokeResolver = {
    Query: {
        joke: (args, req) => {
            const {category} = req
            return Jokes.joke(category)
        }
    }
}