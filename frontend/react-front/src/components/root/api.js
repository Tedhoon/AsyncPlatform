import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/"


// object들을 넣을 수 있는 공간
export default {

    //모든 글 불러오기
    getCommunity() {
        return axios.get('/community/')
    },
    //글 작성하기
    postCommunity(data) {
        return axios.post('/community/',data)
    },

    // deletePost(id) {
    //     return axios.delete('/posts/'+String(id))
    // }
}