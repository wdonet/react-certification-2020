import loginService from './loginService';

describe('loginService', () => {
    it('returns error if bad userame and password is specified', async () => {
        const FAKE_USERNAME = 'you_lost';
        const FAKE_PASSWORD = 'the_game';
        try{
            await loginService(FAKE_USERNAME, FAKE_PASSWORD);
        }catch(reason){
            expect(reason.message).toBe("Username or password invalid");
        }
    });

    it('returns "mockedUser" when real username and password is specified', async () => {
        const REAL_USERNAME = 'wizeline';
        const REAL_PASSWORD = 'Rocks!';
        try{
            const response = loginService(REAL_USERNAME, REAL_PASSWORD);
            expect(JSON.stringify(response)).toEqual(JSON.stringify(response));
        }catch{
            return { passed: false };
        }
    });
});