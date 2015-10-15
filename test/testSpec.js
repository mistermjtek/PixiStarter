import game from '../client/game.js';

describe('sample test', function() {
  it('should be the truth!', function() {
    expect(true).toBeTruthy();
  });

  it('should have lodash working', function() {
    expect(game.lodashFunction([1,2,3])).toEqual(6);
  });
});
