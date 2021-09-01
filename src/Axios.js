import axios from "axios";

function instance() {
    const instanceBacked = axios.create({
        baseURL: 'http://coursemebackend.azurewebsites.net',
    })
}

export default instance 
