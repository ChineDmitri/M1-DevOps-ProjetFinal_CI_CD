# Application basée sur NestJs et Angular avec une base de données MySQL

|   NodeJs : v. 18 |  MySQL : v. 8  | Docker v. 19 ou + |
| ------------ | ------------ | ------------ |
|  NestJs 8 | -  | - |
|  Angular 17 |  -  | - |
|  TypeORM 10 | - | - |


![WORKFLOW](https://github.com/ChineDmitri/M1-DevOps-ProjetFinal_CI_CD/blob/main/V.4.1.drawio.png)

Tout le développement se base sur les branches de fix, de feature et de release avec les noms de branche suivants :

    fix_..
    feature_..
    release_..

À partir de ces branches, le développement de l'application principale (*back-end*) et du client (*front-end*) peut être effectué.

Pour le nommage des branches de développement de l'application principale, les noms doivent strictement suivre le format :

- be_fix_..
- be_feature_..
- be_release_..

Pour le nommage des branches de développement du client, les noms doivent strictement suivre le format :

- fe_fix_..
- fe_feature_..
- fe_release_..

Les *worflows* utilise l'image ** Ubuntu 22.04 **

Lorsque vous poussez des branches commençant par ```be_..```, le *workflow* "**Test and Coverage**" exécute des tests et vérifie la couverture du code pour la partie back-end de l'application, puis envoie le rapport de test à Coveralls. 
> Il est important que la couverture de test soit au moins de 90%. 🧪📊

Lorsque vous poussez des branches commençant par ```fe_..```, le *workflow* "**Lint for front**" effectue des vérifications de linting sur le code front-end de votre projet.

⚠️☠️ Avant de créer une *Pull Request*, assurez-vous que tous les *workflows* sont ✔️ **valides** ❗

Lorsque *Pull Request* est fermée sur la branche **main**  le workflow **Version Bump and Merge** execute *job* hadolint pour verifier *Dockerfiles*  

Lorsqu'une *Pull Request* est fermée sur la branche **main**, le *workflow* "**Version Bump and Merge**" exécute d'abord le *job* ** hadolint** pour vérifier les Dockerfile à l'aide de Hadolint. Ensuite, il passe au *job* **version-bump** pour effectuer les opérations de mise à jour de version et création de tag pour ce version.

## ⚙️ Configuration côté back-end :
La configuration pour le développement et la production se trouve dans le fichier 📇 **.env**. Assurez-vous de configurer votre base de données dans le fichier **Dockerfile.bdd** ou le fichier **.env**.

*Création d'une image pour le développement local :*

```bash
docker image build --tag=bdd:dev --file=Dockerfile.bdd .
```

Lancement du conteneur à partir de l'image MySQL pour le développement :

```bash
docker container run --name=mysql-dev -p 3310:3306 bdd:dev
```

🛑 Arrêt / ▶️ Démarrage / 🔄 Redémarrage du conteneur *MySQL* :

```bash
docker stop mysql-dev
```
```bash
docker start mysql-dev
```
```bash
docker restart mysql-dev
```

👉 Passer dans le repertoire 📂 **client** :

🌟 Installation des dépendances du front-end : 

```bash
cd client
```

```bash
npm install
```

🌟 Installation des dépendances du back-end (pour assurer le bon fonctionement de l'ensembme de l'app) : 

```bash
cd ..
```

```bash
npm install
```

#### 🚀 Développement & Test 🧪📊  :

Lancement des tests avec Jest en local (conteneur mysql-dev démarré) :

```bash
npm run test 
```

Lancement des tests avec couverture (conteneur mysql-dev démarré) :

```bash
npm run test:coverage
```

Lancement en mode de developpement : 

```bash
npm run start:dev
```

------------


## ⚙️ Configuration côté front-end:

👉 Passer dans le repertoire 📂 **client** :

🌟 Installation des dépendances du front-end : 

```bash
cd client
```

```bash
npm install
```

🌟 Installation des dépendances du back-end (pour assurer le bon fonctionement de l'ensembme de l'app) : 

```bash
cd ..
```

```bash
npm install
```

Lorsque vous créez une branche **fix/feature/release**, le projet est construit dans un répertoire de volume Docker à l'aide de commande : 

```bash
npx ng build --configuration=production --output-path=../volume
```

#### 🚀 Développement & Test 🧪📊  :

Lancement en mode de developpement : 

```bash
npm run start
```

Linting du code : 
```bash
npm run lint
```


