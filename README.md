# Tools

## Yarn workspaces

Notre repository Git contient plusieurs paquets npm, qui chacun auront leur propre dépendances. Certaines dépendances sont communes (TypeScript, Prettier...)

Pour installer une dépendance à la racine (au niveau Workspace root), on ajouter l'option `-W` à la commande `yarn add` :

```
yarn add typescript -D -W
```

Pour installer une dépenance dans un paquet du workspace, on se place d'abord dans le paquet :

```
yarn workspace @formation/server add express
```

Plus globalement n'importe quel commande peut s'exécuter au niveau d'un paquet du workspace, ex :

```
yarn workspace @formation/server remove express
```

Donc pour lancer un script au niveau d'un paquet :

```
yarn workspace @formation/server watch
yarn workspace @formation/server build
yarn workspace @formation/server start
yarn workspace @formation/client start:dev
```

Ou si conflit avec un commande Yarn :

```
yarn workspace @formation/server run watch
yarn workspace @formation/server run build
yarn workspace @formation/server run start
yarn workspace @formation/client run start:dev
```

Ou avec lerna :

```
yarn lerna run build --scope=@formation/client
```

Note : on peut aussi se placer d'abord au niveau du paquet :

```
cd packages/client
yarn add webpack -D
yarn build
```

Pour exécuter une commande commune de chaque workspace :

```
yarn workspaces run build
```

Au final comme dans Cube2, on utilise Lerna pour améliorer les workspaces
et notamment pouvoir lancer des commandes en parallèle.

Lance tous les scripts watch des paquets en parallèle :

```
lerna run --parallel watch
```

# Exercices Webpack

## Exercice 1

En vous inspirant de la doc sur BannerPlugin : https://webpack.js.org/plugins/banner-plugin/

Ajouter le copyright suivant aux fichiers buildés : Copyright STMicroelectronics

## Exercice 2

Ajouter un commentaire dans le fichier config.json

Le build échoue à présent.

Installer le paquet npm `json5` et changer la config webpack en vous inspirant de : https://github.com/webpack/webpack/tree/main/examples/custom-json-modules

Pour que le parseur d'un fichier dont l'extension est .json utilise la lib json5.

Bonus : faire fonctionner les extensions .json5
Voir : https://github.com/json5/json5/wiki/Using-JSON5-with-TypeScript


## Exercice 3

On veut remplacer les balises style par des balises link pour le CSS.

Vous inspirer de https://webpack.js.org/plugins/mini-css-extract-plugin/ pour ce faire.
