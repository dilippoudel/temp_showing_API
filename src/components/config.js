import axios from 'axios';
const KEY = 'a0509a0d7f9a475f36a84b755e74189f';
export default axios.create({
    baseURL:'https://openweathermap.org/',
    params: {
        key: KEY
    }
});