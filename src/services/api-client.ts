import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b3fa2319b55347b592fad66f3999f71d'
    }
})