import axios from "axios";

const Url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp(body){
    return axios.post(`${Url}/auth/sign-up`, body)
}

function postLogin(body){
    return axios.post(`${Url}/auth/login`, body)
}

export {
    postSignUp,
    postLogin
}