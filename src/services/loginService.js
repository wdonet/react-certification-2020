import { userMockedData } from '../utils/'
const loginService = async (username, password) => new Promise((resolve, reject) => {
    if (username === 'wizeline' && password === 'Rocks!'){ resolve(userMockedData); }
    reject(new Error('Username or password invalid'));
});


export default loginService;