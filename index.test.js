const { nameToUint64, uint64ToName } = require('./index');

describe('test eosio name to string and vice versa', () => {
  it('should transfrom `eosio` to `6138663577826885632`', () => {
    const name = 'eosio';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('6138663577826885632');
  });

  it('should transfrom `eosio.msig` to `6138663587900751872`', () => {
    const name = 'eosio.msig';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('6138663587900751872');
  });

  it('should transfrom `eosio.token` to `6138663591592764928`', () => {
    const name = 'eosio.token';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('6138663591592764928');
  });

  it.todo('should transfrom `6138663577826885632` to `eosio`');
  it.todo('should transfrom `6138663587900751872` to `eosio.msig`');
  it.todo('should transfrom `6138663591592764928` to `eosio.token`');
});