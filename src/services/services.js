import axios from "axios";

 function signIn(body){;
    return axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body);
};

 function signUp(body){
    return axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
};

 function logout(config){
    return axios.delete(`${process.env.REACT_APP_API_URL}/logout`, config);
};

function listTransactions(config){
    return axios.get(`${process.env.REACT_APP_API_URL}/transactions`, config);
};
 function makeTransactions(body, config){
    return axios.post(`${process.env.REACT_APP_API_URL}/transactions`, body, config);
};

export {
    signIn, signUp, logout, listTransactions, makeTransactions
};