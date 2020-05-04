import axios from "axios";
import Register from "../auth/Register";

axios.defaults.baseURL = "http://127.0.0.1:8000/"

export default {

    // community
    getCommunity() {
        return axios.get('/community/')
    },
    
    postCommunity(data) {
        return axios.post('/community/',data)
    },

    getDetailCommnunity(id) {
        return axios.get('/community/'+id)
    },

    deleteCommunity(id) {
        return axios.delete('/community/'+id)
    },
    
    // Auth 
    Login(data) {
        return axios.post('/auth/login', data)
    },

    Register(data) {
        return axios.post('/auth/register', data)
    },
}