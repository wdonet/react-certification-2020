const fakeUsername = 'wizeline';
const fakePassword = 'Rocks!';

export const loginUser = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === fakeUsername && password === fakePassword) {
        return resolve(true);
      }
      return reject(new Error('Invalid username or password'));
    }, 500);
  });
};
