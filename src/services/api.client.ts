import axios from "axios";

export default axios.create( {
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b62c8d2625d74254991d66876c01df4a'
    }
})