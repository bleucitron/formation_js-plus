# Assignations

Assigner une variable à une valeur signifie que l'on demande à la variable de "regarder" la valeur. On dit également qu'il y a un câble qui part de la variable jusqu'à la valeur.

Assigner pour la première fois une variable crée le câble.

Réassigner une variable déplace le bout du câble d'une valeur vers une autre.

- `let a = 1;`
- `a = a + 5;`
  - `a += 5;`
- `a = a + 1;`
  - `a++;`

## Oublier `var`

`const` et `let` sont "block scoped", `var` est "function scoped".

```js
## Function scope

function() {
  const a = 1;
  let b = 2;
  var c = 3;

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // undefined
```

```js
## Block scope

if (true) {
  const a = 1;
  let b = 2;
  var c = 3;

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // 3
```

## `const` ou `let` ?

```js
const a = 1;
let b = 2;

a = 3; // Error
b = 4; // Ok
```

`const` n'empêche pas de muter ! (et tant mieux)

```js
const romain = { favoriteMovie: 'Les Tuche' };

romain.favoriteMovie = 'Les Tuche 2';

romain = { favoriteMovie: 'Les Tuche 3' }; // Error
```

### [Mode strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

Historiquement, Javascript est doté de largesses bien connues pouvant mener à des mauvaises habitudes, voire à des bugs.

Certaines de ces largesses sont considérées comme de très mauvaises pratiques et sont proscrites. Mais on a vu qu'on ne pouvait pas supprimer des comportements de Javascript.

```js
a = 1; // mauvaise idée
var undefined = 1; // mauvaise idée
var o = { a: 1, a: 2 }; // mauvaise idée
```

Plutôt que supprimer ces comportements, on rajoute des garde-fous.

Le mode strict permet de se prémunir de ces comportements proscrits. On l'active en ajoutant `"use strict";` en haut des fichiers concernés.

```js
"use strict";

a = 1; // ERROR
var undefined = 1; // ERROR
var o = { a: 1, a: 2 } // ERROR

...
```

[Pourquoi il ne faut assigner une variable sans l'avoir déclarée ?](http://www.pixelstech.net/article/1320253282-How-One-Missing-%60var%60-Ruined-our-Launch)

## À suivre: [Fonctions](./2-2_functions.md)
