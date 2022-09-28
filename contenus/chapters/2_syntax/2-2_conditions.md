# Conditions

## Opérateur ternaire

On a souvent besoin de définir une variable en fonction d'une condition.

```js
let name;

if (isSpanish) {
  name = 'Roberto';
} else {
  name = 'Robert';
}
```

Plutôt que de passer par l'opérateur `if`, on peut utiliser l'opérateur ternaire.

```js
const name = isSpanish ? 'Roberto' : 'Robert';
```

> Dans ce cas, puisque je ne réassigne pas `name`, je peux utiliser `const`.


## Falsy values

Les "falsy" values sont équivalentes à `false` dans les contextes booléens (en gros, dans les `if`).


```js
if (maCondition) {
  // ne s'exécute que si maCondition est truthy
}

if ('') {
  console.log('String vide'); // non exécutée
}
if (3) {
  console.log('Le nombre trois'); // exécutée
}
```

Les valeurs "falsy" sont:
```js
false
0
-0
''
null
undefined
NaN
0n
-0n
```

Tout ce qui n'est pas "falsy" est "truthy".

On peut transformer une valeur en "vrai" booléen avec `!!`:

```js
const a = !!null; // false
const b = !!4; // true
```

On utilise le concept de truthy pour raccourcir la syntaxe lorsque l'on veut s'assurer qu'une valeur "existe":

```js
if (x !== null && x !== undefined) {}
// s'écrit souvent:
if (x) {}
```

---

### _À suivre: [Fonctions](./2-3_functions.md)_
