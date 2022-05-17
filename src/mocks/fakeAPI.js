const mockedUser = {
    id: '123',
    name: 'Gaby',
    avatarUrl: './avatar.jpeg',
  };
  
  export async function loginApi(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'gaby' && password === 'password') {
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 500);
    });
  }
  
  export async function logoutApi(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({message: 'Logout successful'});
      }, 500);
    });
  }