import loginApi from './login.api';


test('check unsuccessfull login', () => {
    return loginApi("asdf", "asdfds").then(data => {
        expect(data).toBe('dfasw');
    }).catch(error => {
            expect(error.message).toBe('Username or password invalid');
        });
});

test('check successfull login', () => {
    return loginApi("wizeline", "Rocks!").then(data => {
        expect(data.id).toBe('123');
    }).catch(error => {
            expect(error.message).toBe('Username or password invalid');
        });
});
