import { isTweetFr, isBlue } from './utils.js';

describe('isBlue', () => {
  it('should return true for the blue string', () => {
    const maValeur = isBlue('blue');

    expect(maValeur).toBe(true);
  });
});

describe('isTweetFr', () => {
  it('should return true for a french tweet', () => {
    const tweet = { lang: 'fr' };
    const maValeur = isTweetFr(tweet);

    expect(maValeur).toBe(true);
  });

  it('should return false for a non french tweet', () => {
    const tweet = { lang: 'en' };
    const maValeur = isTweetFr(tweet);

    expect(maValeur).toBe(false);
  });

  it('should return false for a tweet with no lang', () => {
    const tweet = { lang: undefined };
    const maValeur = isTweetFr(tweet);

    expect(maValeur).toBe(false);
  });

  it('should return true for a french canadian tweet', () => {
    const tweet = { lang: 'fr-ca' };
    const maValeur = isTweetFr(tweet);

    expect(maValeur).toBe(true);
  });

  it('should throw for no tweet', () => {
    expect(() => isTweetFr(null)).toThrow();
  });
});
