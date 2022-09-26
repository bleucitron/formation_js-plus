# [Tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

> Créer et manipuler des groupes ordonnés de valeurs

Un tableau est une collection ordonnée de valeurs que l'on manipuler.

### Aplatir

Parfois on a des tableaux imbriqués. On peut "aplatir" un tableau sur un niveau avec `.flat()`.

```js
const tableau = [[1, 2], 3, [4, 5]];
const tableauAplati = tableau.flat(); // [1, 2, 3, 4, 5]
```

> `.flat()` crée un nouveau tableau, et ne modifie pas le tableau d'origine.

## Itérer sur un tableau

Il y a plusieurs manières d'itérer sur un tableau.

```js
const array = [1, 2, 3];

// avec une boucle for classique
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// avec une boucle for...of
for (let element of array) {
  console.log(element);
}

// avec des méthodes fonctionelles
array.forEach(function (element) {
  console.log(element);
});
```

En termes de temps d'exécution, la boucle `for` classique sera la plus rapide. Mais elle est également très verbeuse et dure à maintenir.

En Javascript moderne, on utilise assez rarement les boucles `for`. En général on
utilise les méthodes fonctionnelles des tableaux pour itérer.

## Méthodes fonctionnelles

En Javascript, on aime bien manipuler les tableaux en utilisant l'**écriture
fonctionnelle**.

De manière illustrée, ça donne
[ça](https://twitter.com/steveluscher/status/741089564329054208).

- ### `a.forEach(f)`

**Exécute `f` pour chaque élément de `a`**. Ne renvoie rien.

```js
const array = [1, 2, 3, 4];

array.forEach(function (element, index, arr) {
  // les arguments index et arr sont optionnels
  console.log(element * index);
});

// 0
// 2
// 6
// 12
```

- ### `a.map(f)`

Ici `f` est une fonction qui renvoie quelque chose: `f: element => newElement`.

Exécute `f` pour chaque élément de `a`, et **range dans un nouveau tableau chaque valeur de retour**. Renvoie le nouveau tableau, de même taille. Le tableau original n'est pas modifié.

```js
const array = [1, 2, 3];

const array10 = array.map(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e * 10;
}); // [10, 20, 30]
```

- ### `a.filter(f)`

Ici `f` est une fonction qui renvoie une condition: `f: element => condition`.

Exécute `f` pour chaque élément de `a`, et **range dans un nouveau tableau l'élément seulement s'il satisfait la condition**. Renvoie le nouveau tableau, de même taille. Le tableau original n'est pas modifié.

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const pairs = array.filter(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e % 2 === 0;
}); // [2, 4, 6, 8]
```

- ### `a.find(f)`

Ici `f` est une fonction qui renvoie une condition: `f: element => condition`.

Exécute `f` pour chaque élément de `a`, et s'arrête dès qu'un élément satisfait la condition. **Renvoie le premier élément qui satisfait la condition.**

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const found = array.find(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e >= 4 && e % 4 === 2; // 6
});
```

---

## À retenir

- Un tableau est une liste ordonnées de valeurs
- Les valeurs d'un même tableau peuvent être de types différents, même si ce n'est pas recommandé
- Un tableau commence à l'indice 0, l'élément `n` est accessible avec `array[n-1]`
- On peut modifier un tableau avec `.pop()`, `.push()`, `.shift()`, `.unshift()`, `.sort()`
- On peut itérer sur un tableau avec des boucles `for` ou `for of`
- Souvent on préfère utiliser les méthodes fonctionnelles pour itérer


---

## [Exercices](./index.md)

---

### _À suivre: [Le navigateur](./3_browser/index.md)_
