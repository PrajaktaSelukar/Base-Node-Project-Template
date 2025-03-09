# Node Project

## Set Up
- npm init 
- npm i express
- npm i dotenv
- npm i http-status-codes
- npm i nodemon
- npm i winston
- npm i sequelize

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