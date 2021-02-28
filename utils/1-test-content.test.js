let originalLog;
const mockedLog = jest.fn();
describe('Display initial elements correctly', () => {
  beforeAll(() => {
    originalLog = console.log;
    console.log = mockedLog;
  });

  afterAll(() => {
    console.log = originalLog;
  });
});
