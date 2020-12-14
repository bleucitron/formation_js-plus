import { checkFr } from './utils';

describe('checkFr', () => {
  it('should return true when given a french tweet', () => {
    const tweet = {
      lang: 'fr',
    };

    const maValeur = checkFr(tweet);

    expect(maValeur).toBe(true);
  });

  // doit rendre FALSE pour un tweet pas francais
  it('should return false when given a non french tweet', () => {
    const tweet = {
      lang: 'zdsar',
    };

    const maValeur = checkFr(tweet);

    expect(maValeur).toBe(false);
  });

  // doit rendre FALSE pour un tweet sans langue
  it('should return false when given a tweet without lang', () => {
    const tweet = {
      lang: undefined,
    };

    const maValeur = checkFr(tweet);

    expect(maValeur).toBe(false);
  });

  // doit rendre VRAI pour un tweet en québécois (fr-ca)
  it('should return true when given a tweet in a french dialect', () => {
    const tweet = {
      lang: 'fr-ca',
    };

    const maValeur = checkFr(tweet);

    expect(maValeur).toBe(true);
  });

  // doit throw pour null ou undefined ( checkFr() )
  it('should throw when given a null tweet', () => {
    const tweet = null;

    expect(() => checkFr(tweet)).toThrow();
  });
});
