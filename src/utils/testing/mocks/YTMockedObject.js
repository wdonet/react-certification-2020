const YTMockedObject = {
  Player: function constructor() {
    this.loadVideoById = jest.fn();
  },
};

export default YTMockedObject;
