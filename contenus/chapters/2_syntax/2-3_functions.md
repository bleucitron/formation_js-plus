# [Fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)

> Définir des recettes de code

Les fonctions contiennent du code réutilisable. On peut les voir comme des recettes de cuisine.

```js
function chanter() {
  console.log("♪ LALALA ♬");
}
```

## Définir une fonction

Une fonction a:
- un nom (ou pas)
- un ou plusieurs arguments (ou pas)
- un corps
- une seule sortie

> Définir une fonction ne signifie pas l'exécuter.

```js
function calculer(arg1, arg2) { // définition
  // ...des calculs

  return resultat;
};

const a = calculer(1, 2) // exécution
```

**Si on ne précise pas de `return`, la fonction renvoie automatiquement
`undefined`**.

```js
function vide() {
  // ... des calculs
}; // renvoie undefined
```

> Il n'est pas toujours nécessaire de nommer une fonction.


## Callbacks

**Un callback est une fonction que l'on passe en argument à une autre fonction**, qui sera chargée de l'exécuter.

Si le callback a été défini en amont, il suffit de fournir son nom en argument, sans l'exécuter.

```js
function direBonjour() {
  console.log('COUCOU')
}

faireQqchAvec(direBonjour)

faireQqchAvec(direBonjour()) // ça ne fait pas du tout la même chose
```

Le cas classique d'utilisation de fonction anonymes est les callbacks. En effet, il est possible de définir le callback directement dans les arguments. Dans ce cas, il n'est pas nécessaire de la nommer.

```js
faireQqchAvec(function () { // ceci est un callback anonyme
  console.log('COUCOU')
})
```


## [Fonctions flèche](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)

On peut également définir des fonctions en utilisant la syntaxe
fléchée.

```js
const plus1 = x => x + 1;

const saluer = () => {
  console.log("Salut !");
};
```

---

## À retenir

- les fonctions permettent de réutiliser du code
- une fonction a en général un nom, une ou plusieurs entrées, des instructions, et une sortie
- les instructions d'une fonction ne sont pas exécutées tant que la fonction n'est pas exécutée
- pour exécuter une fonction, il faut utiliser les `()`
- on peut écrire une fonction sous sa forme fléchée

---

## Exos

- Ouvrir le dossier `/exos/2_syntax/2-4_functions`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `.js`, et vérifier les résultats dans
  votre navigateur

---

### _À suivre: [Tableaux](./2-4_arrays.md)_
