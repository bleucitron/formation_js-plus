# Assignations

Assigner une variable à une valeur signifie que l'on demande à la variable de "regarder" la valeur. On dit également qu'il y a un câble qui part de la variable jusqu'à la valeur.

Assigner pour la première fois une variable crée le câble.

Réassigner une variable déplace le bout du câble d'une valeur vers une autre.

Historiquement, on assigne avec le mot-clé `var`:

```js
var a = 1;
```

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

`const` crée une variable **constante**, qui ne pourra jamais être réassignée.

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

## [Mode strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

Historiquement, Javascript est doté de largesses bien connues pouvant mener à des mauvaises habitudes, voire à des bugs.

Certaines de ces largesses sont considérées comme de très mauvaises pratiques et sont proscrites. Mais on a vu qu'on ne pouvait pas supprimer des comportements de Javascript.

```js
a = 1; // mauvaise idée
var undefined = 1; // mauvaise idée

function somme(a, a, c) { // mauvaise idée
  return a + b + c;
}
```

Plutôt que supprimer ces comportements, on rajoute des garde-fous.

Le mode strict permet de se prémunir de ces comportements proscrits. On l'active en ajoutant `"use strict";` en haut des fichiers concernés.

```js
"use strict";

a = 1; // ERROR
var undefined = 1; // ERROR
function somme(a, a, c) { // ERROR
  return a + b + c;
}

...
```

[Pourquoi il ne faut assigner une variable sans l'avoir déclarée ?](http://www.pixelstech.net/article/1320253282-How-One-Missing-%60var%60-Ruined-our-Launch)

#### _La suite: [Fonctions](./2-2_functions.md)_
