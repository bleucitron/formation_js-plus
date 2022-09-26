# [Syntaxes modernes]

> Écrire du JS neuf


## Fonctions fléchées

On peut également définir des fonctions en utilisant la syntaxe
fléchée.

```js
const saluer = () => {
  console.log("Salut !");
};
```

Les fonctions flèches ont des arguments tout comme les fonctions normales.

```js
const saluer = (nom) => {
  console.log("Je suis ", nom);
};

const saluer = (prenom, nom) => {
  console.log("Je suis ", prenom + " " + nom);
};

// si un seul argument, pas besoin des parenthèses
const saluer = nom => {
  console.log("Je suis ", nom);
};
```

Si la fonction flèche n'a qu'une seule instruction, alors on peut se passer du block. La fonction renvoie automatiquement alors le résultat de l'instruction.

```js
const additioner = (a, b) => a + b;
const getObject = (a, b) => ({a, b}); // pour renvoyer directement un objet
```


## Spreading / Destructuring

## Template string literals

## Classes

## Et bien d'autres

Un petit aperçu plus complet de ce qui est possible est disponible [ici](./5-X_es6%2B.md).

---

## À retenir



---

## Exercices

TODO

---

### _À suivre: [Modules](./5-2_scripts.md)_
