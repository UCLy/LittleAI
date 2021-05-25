# LittleAI
![License](https://img.shields.io/badge/license-MIT-green)

> Little AI is a pedagogical game aimed at presenting the founding concepts of **constructivist learning** and **developmental Artificial Intelligence**. It primarily targets students in computer science and cognitive science but it can also interest the general public curious about these topics. It requires no particular scientific background; even children can find it entertaining. Professors can use it as a pedagogical resource in class or in online courses (e.g., MOOCs). The player presses buttons to control a simulated “baby robot” from the robot’s perspective; she cannot see the robot from the outside. The only information she receives from the environment is feedback from her actions; she cannot directly see the environment. She must learn, at the same time, the functioning of the robot’s body and the structure of the environment from regularities in the stream of commands and feedback. *We argue that this situation is analogous to how infants engage in early-stage developmental learning (e.g., Piaget 1937)*.


## Prerequisites

Installer Node.js et `npm` avec `nvm` sur windows:

### Télécharger Node.js

Pour télécharger `Node.js` cliquez sur le lien ci-dessous: 
 
[Download Node.js](https://nodejs.org/en/)  
Choisissez la version "Current" (16.2.0)

Une fois node.js installer, il faut ensuite installer `nvm`. Répertoire par défaut, options par défaut.  

### Télécharger nvm

Cliquez sur le lien suivant pour accéder au dépôt git contenant `nvm`:  

[Download nvm](https://github.com/coreybutler/nvm-windows/releases)

Cliquer sur  le fichier dans le dépôt github: nvm-setup.zip
Ouvrer le fichier et lancer `nvm-setup.ex` et l'installation de nvm commence

##Vérifier si l'on utilise bien la bonne version de Node.js

Une fois `nvm` installer il faut vérifiez si vous utilisez bien la dernière version de `Node.js`

Aller dans votre barre de recherche windows, écrivez : `cmd`
Lancez l'invite de commande en faisant :
 
 `clique-droit`  
 `executer en tant qu'administrateur`
 
 Pour voir la version utiliser
```bash
nvm ls
```
Si le cmd n'affiche pas que vous utlisez la version `15.2.1`
faite :
```bash
npm install -g yarn

nvm use 15.2.1
```

Puis installer Parcel:

```bash
npm install -g parcel-bundler
```

##Télécharger Git

Installer git en cliquer sur le lien suivant:
  
[Download Git](https://git-scm.com/downloads)

## Getting Started

Cloner ce dépôt sur votre machine local en utlisant `Git Bash`:

```bash
git clone https://github.com/UCLy/LittleAI.git
```

This will create a folder named `LittleAI`. You can specify a different folder name like this:

```bash
git clone https://github.com/UCLy/LittleAI.git my-folder-name
```

Go into your new project folder and install dependencies:

```bash
cd LittleAI # or 'my-folder-name'
npm install
```

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```

Production files will be placed in the `dist` folder. Then upload those files to a web server. 🎉

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── public
    ├── src
    │   ├── scenes
    │   │   ├── GameScene  │   ├── index.html
    │   ├── main.js
    ├── package.json
```

This template assumes you will want to organize your code into multiple files and use modern JavaScript (or TypeScript).

JavaScript files are intended for the `src` folder. `main.js` is the entry point referenced by `index.html`.

Other than that there is no opinion on how you should structure your project. There is a `scenes` folder in `src` where the `gameScene.jss but you can do whatever you want.

## Static Assets

Any static assets like images or audio files should be placed in the `public` folder. It'll then be served at http://localhost:8000/images/my-image.png

Example `public` structure:

```
    public
    ├── images
    │   ├── my-image.png
    ├── music
    │   ├── ...
    ├── sfx
    │   ├── ...
```

They can then be loaded by Phaser with `this.image.load('my-image', 'images/my-image.png')`.

## Class Properties Support

This template includes class property support out of the box using `@babel/plugin-proposal-class-properties`.

A `.babelrc` is included as well as the use of `babel-eslint` as the parser for ESLint.

# ESLint

This template uses a basic `eslint` set up for code linting to help you find and fix common problems in your JavaScript code.

It does not aim to be opinionated.

[See here for rules to turn on or off](https://eslint.org/docs/rules/).


## Dev Server Port

You can change the dev server's port number by modifying the `start` script in `package.json`. We use Parcel's `-p` option to specify the port number.

The script looks like this:

```
parcel src/index.html -p 8000
```

Change 8000 to whatever you want.

## Useful links
  - Little AI website: http://little-ai.com/
  - The web version: https://github.com/pierreelliott/LittleAI-Web
  - Survey about your experience playing Litte AI: https://clarolineconnect.univ-lyon1.fr/survey/survey/145/answer/form

## Other Notes

[parcel-plugin-clean-easy](https://github.com/lifuzhao100/parcel-plugin-clean-easy) is used to ensure only the latest files are in the `dist` folder. You can modify this behavior by changing `parcelCleanPaths` in `package.json`.

[parcel-plugin-static-files](https://github.com/elwin013/parcel-plugin-static-files-copy#readme) is used to copy static files from `public` into the output directory and serve it. You can add additional paths by modifying `staticFiles` in `package.json`.

[phaser3 tutorial](https://blog.ourcade.co/posts/2020/make-first-phaser-3-game-modern-javascript-part1/) is used to ensure modern javascript coding best practices

## License

[MIT License](https://github.com/ourcade/phaser3-parcel-template/blob/master/LICENSE)

