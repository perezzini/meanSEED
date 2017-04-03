# meanSEED
A minimal client/server set-up for a MEAN project.

# What is MEAN?
MEAN stands for:
- (M) [MongoDB](https://www.mongodb.com): A NoSQL database implementation.
- (E) [Express.js](https://www.expressjs.com): A fast, unopinionated, minimalist web framework for Node.js. We use Express.js to set-up a minimal server application.
- (A) [Angular](https://www.angular.io): A framework to develop mobile and desktop apps using code reusability. In particular, meanSEED uses version 2 of Angular.
- (N) [Node.js](https://www.nodejs.org): A JavaScript runtime built on Chrome's V8 JavaScript engine.

MEAN is a stack of components, all of them written in JavaScript. So, we can write server-side and client-side applications in just one language.

# Requirements
Our basic requirements are Node.js, and a NoSQL database implementation (in this case, MongoDB).

In order to install Node.js (fundamental requirement to run a MEAN application), you can find installation guides [here](https://nodejs.org/en/). Once installed, test
```
node -v
```
Node.js comes along with a Node Package Manager ([NPM](https://www.npmjs.com/)) where you can find great JavaScript tools to enhance current projects. We'll use it a lot!.

Now, it's time to download and install MongoDB. [Here](https://docs.mongodb.com/manual/administration/install-on-linux/) you have an official and simplified guide to do it.

# Clone meanSEED
In order to begin to use and explore meenSEED, clone it:
```
git clone https://github.com/perezzini/meanSEED.git
```

# Software Structure
When studying how to develop MEAN applications, I founded kind of "tricky" how to structure a client/server project. I structured meanSEED in the most minimalist and simplier way I could. So, let's take a look at some important folders and files.

## Server-side
The server-side relies on Express.js. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
The server-side is basically configured in the `app.js` file. This sets up Express.js, among other packages. Express.js sets views (`views/`) and configures app routes (`routes/`). In this simple set-up seed are only configured two basic routes (feel free to add new ones!): the index route (`routes/index.js`) and the RESTful API route (`routes/api.js`).

The `models/` folder is considered part of the server-side structure. Here you'll add your own project's schemas definitions using [Mongoose](http://mongoosejs.com/). Mongoose is an elegant MongoDB object modeling for Node.js. Basically, a model is what you want a document to be inside a NoSQL database collection (learn more [here](http://mongoosejs.com/docs/index.html)).

We can consider the `views/` folder as part of the server-side structure too: It contains the files (EJS files, in this opportunity) which, let's say, explain how to render information the files in `routes/` contain. The `index.ejs` file in the `views/` folder requires stylesheets and Angular config files to use Angular components. The "root" component in meanSEED is `my-app`.

## Client-side
Here, all of our client-side logic are inside the `client/` folder: The `app/` folder is where all the Angular 2 "stuff happens". I've found appropriate to divide this folder into `components/` (other components that the "root" component -- the `app.component.ts`) and `services/` (here, `task.service.ts` is just a Angular service template).

Remember:
> TypeScript is a super set of JavaScript. Angular finds convinient to write TypeScript code. So, when we start the client-side app, TypeScript code must be compiled into JavaScript code for "browser rendering" using `tsc`. Don't worry, meanSEED does this automatically when starting it.

# Set-Up
meanSEED uses environmental variables to configure, basically, the database and server port.

Once cloned git repository, at the root folder, add a `.env` file with the following keys (add correspondent values of your choice, like `PORT=3000`):
```
PORT

DB_HOST
DB_PORT
DB_NAME
```

Node will automatically preload environmental variables at start, using [dontenv](https://www.npmjs.com/package/dotenv) library.

# Installation
Notice
> To execute the following commands you'll maybe need `sudo` permissions on Linux.

At the root folder, execute
```
sudo npm install
```
This will install dependencies (like Express.js, Mongoose.js, and more) declared in the `package.json`.

Then, to install client dependencies -- Angular dependencies --, execute the following command at the `client/` folder:
```
sudo npm install
```
meanSEED uses [Bootstrap](http://getbootstrap.com/) to enhance front-end UI. To set it up we will use [Bower](https://bower.io/), a front-end package manager. To install Bower globally:
```
sudo npm install bower -g
```
Now, redirect to the project's root folder and install Bootstrap using Bower
```
bower install bootstrap --save
```
The above command will locate a file called `.bowerrc` at the project's root folder to get the directory where to place modules (in this case, `client/bower_components/`).

# Start meanSEED
To start server and client processes, at the root folder, execute:
```
npm start
```
`npm start` will automatically run server and client modules in parallel, using [concurrently](https://www.npmjs.com/package/concurrently). When adding new server-side features, restart and then `npm start` again from the command line.

Now, open `localhost:PORT` (where `PORT` is the env variable defined lately) within your browser and should be able to see something like this:
<br>
![meanSEED index page](http://i.imgur.com/mwSPaJF.png)

# Feedback
Please, feel free to distribute this set-up project as well as bring new ideas and features!

Remember, this is just a *quickstart* seed for implementing a MEAN project.
