# Node Project
This is a base node JS project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendation. Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

### Setup the project

 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev
 ```

## Set Up
- npm init 
- npm i express
- npm i dotenv
- npm i http-status-codes
- npm i nodemon
- npm i winston
- npm i sequelize
- npm i mysql2

- Create .env file

## Run Project
- node src/index.js

## Why index.js in each folder?
- to export all stuff from one file, so that no need write multiple imports. Makes clean code using module.exports

## API versioning
- Our project is API driven, so API versioning is important. So in routes we keep different folders(v1, v2) for different versions

## Nodemon
- Using node --watch, any changes in file is detected, it automatically restarts node project
- But in lower Node versions, this functionality is not present so you can use Nodemon instead
- Run project using 'npx nodemon src/index.js'
- To automate this, in script you can mention this command in package.json "dev": "npx nodemon src/index.js", and run "npm run dev"

## npx vs npm
- npx allows running package without installing

## Router
- Router is an express class that can help you to create modules for your routes

## ORM - Sequelize
- If you want to create new entry to User table, it can be entered using Object oriented manner, instead of using raw SQL query