import {Jokes} from "../modules";


export const categoryResolver = {
    Query: {
        categories: () => Jokes.getCategories()
    }
}