import axios from 'axios';

export class Jokes {
    static async getCategories() {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
        return response.data
    }
    static async joke(category) {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        return response.data
    }
}