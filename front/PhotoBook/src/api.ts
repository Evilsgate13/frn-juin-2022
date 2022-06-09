export interface LoginForm{
    login: string;
    password: string;
}

class Api{
    async connect(loginForm: LoginForm){
        throw new Error('method not implemented');
    }
}

const api = new Api();

export default api;