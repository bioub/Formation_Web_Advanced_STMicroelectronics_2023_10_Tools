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

Pour exécuter une commande commune de chaque workspace :

```
yarn workspaces run build
```

