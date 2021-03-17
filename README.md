# Uno-chan

![uno-chan image](https://imgur.com/EEYRqCS.png)

Uno-chan is a discord bot that lets you play uno on Discord!

# Current State

  - Card imaging composing and generation
  - Deck creation
  - Game creation


You can also:
  - Make uno-chan react to something
  - Say konichiwa to uno-chan
  - Be lucky with uno-chan's likes

### Tech

Uno-chan uses a number of projects to work properly:

* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Typescript](https://www.typescriptlang.org/) - JavaScript that scales.
* [Mongoose](https://github.com/Automattic/mongoose) - MongoDB object modeling designed to work in an asynchronous environment. 
* [Jimp](https://github.com/oliver-moran/jimp) - An image processing library written entirely in JavaScript for Node, with zero external or native dependencies. 
* [Discord.js](https://github.com/discordjs/discord.js) - A powerful JavaScript library for interacting with the Discord API

### Installation

Uno-chan requires [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) to run .

Install the dependencies and devDependencies and start the server.
```js
$ cd uno-chan
$ yarn
$ docker-compose up // if you have docker installed, this will create a mongoDB up and running
$ yarn dev
```

For production environments...

```sh
$ yarn install --prod
$ yarn tsc
$ NODE_ENV=production node src/index.js
```
