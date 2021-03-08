import youtubeMockedData from './youtubeMockedData';

const errorObject = {
  error: {
    code: 403,
    message: '',
    errors: [
      {
        message: '',
        domain: '',
        reason: '',
      },
    ],
  },
};
const mockedGoogleAPIObject = (shouldResolveToSuccess = true) => ({
  load: jest.fn(),
  client: {
    request: jest.fn().mockReturnValue(
      new Promise((res, rej) => {
        if (shouldResolveToSuccess) {
          res({ result: youtubeMockedData });
        }
        rej(errorObject);
      })
    ),
  },
});

export default mockedGoogleAPIObject;
