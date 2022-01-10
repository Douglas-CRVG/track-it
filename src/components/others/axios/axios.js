import axios from "axios";

const Url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp(body){
    return axios.post(`${Url}/auth/sign-up`, body);
}

function postLogin(body){
    return axios.post(`${Url}/auth/login`, body);
}

function getHabitsToday(token){
    return axios.get(`${Url}/habits/today`, { headers: { Authorization: `Bearer ${token}` } });
}

function postCreateHabit(body, token){
    return axios.post(`${Url}/habits`, body, { headers: { Authorization: `Bearer ${token}` } });
}

function getListHabits(token){
    return axios.get(`${Url}/habits`, { headers: { Authorization: `Bearer ${token}` } });
}

export {
    postSignUp,
    postLogin,
    getHabitsToday,
    postCreateHabit,
    getListHabits
};