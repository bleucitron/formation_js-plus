import { isTweetFr } from './utils.js';

describe('isTweetFr', () => {
  it('doit renvoyer true pour un tweet français', () => {
    const result = isTweetFr({ lang: 'fr' });

    expect(result).toBe(true);
  });

  it('doit renvoyer true pour un tweet anglais', () => {
    const result = isTweetFr({ lang: 'en' });

    expect(result).toBe(false);
  });

  it('doit renvoyer false pour un tweet sans langue', () => {
    const resultA = isTweetFr({});
    const resultB = isTweetFr({ lang: null });
    const resultC = isTweetFr({ lang: undefined });

    expect(resultA).toBe(false);
    expect(resultB).toBe(false);
    expect(resultC).toBe(false);
  });

  it('doit renvoyer true pour un tweet en français canadien', () => {
    const result = isTweetFr({ lang: 'fr-ca' });

    expect(result).toBe(true);
  });

  it('doit lever une exception pour aucune entrée', () => {
    const cb = () => isTweetFr();
    expect(cb).toThrow();
  });
});
