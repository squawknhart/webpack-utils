const Immutable = require('immutable');
const {devServerHost, devServerPort} = require('../stringified-node-env');

describe('stringfied-node-env', () => {
  it('devServerHost has default value as 0.0.0.0', () => {
    expect(devServerHost()).toEqual('0.0.0.0');
  });
  it('devServerHost has default value as 3355', () => {
    expect(devServerPort()).toEqual('3355');
  });
});
