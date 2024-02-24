# **UBC Data Science Club Website** 🌐

## **Overview** 📖
This repository holds the source code for the [UBC Data Science Club's website](https://ubcdsci.club/home). \
Written in **TypeScript**, the frontend uses **React + Redux** and **Sass/SCSS**, while the backend uses **Node.js**, **Express** and **MongoDB**.

## **Getting Started** 🚀
### PREREQUISITES:
1. Install [Node.js + NPM](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (recommended package manager).
1. Install [MongoDB](https://www.mongodb.com/try/download/community).

### SETUP:
1. Install `concurrently` globally:
```bash
yarn global add concurrently
```
```bash
npm install -g concurrently
```
2. Install dependencies for both client and server:
```bash
npm run yarn-i
```
```bash
npm run npm-i
```

### RUN LOCALLY:
```bash
npm start
```

## **Useful Tools** 🛠️
> [Postman](https://www.postman.com/downloads/) for testing API endpoints.

> [MongoDB Compass](https://www.mongodb.com/try/download/compass) for viewing the database.

> [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for debugging React components.

> Some useful VS Code extensions [here](.vscode/extensions.json).

## **Development Tasks** 📝
> CLIENT:
- Create an admin dashboard for controlling event posts, etc.
- Create a search results page with pagination and filter

> SERVER:
- Set up and test admin dashboard and event posting
- Set up and test search results and pagination
- Include visitor analytics (if possible)

## **Docs & Resources** 📑
[TypeScript Docs](https://www.typescriptlang.org/docs/home.html)

> CLIENT:
1. [React Docs](https://reactjs.org/docs/getting-started.html)
1. [Redux Docs](https://redux.js.org/introduction/getting-started)
1. [SASS/SCSS Docs](https://sass-lang.com/documentation)

> SERVER:
1. [Node.js Docs](https://nodejs.org/en/docs/)
1. [Express Docs](https://expressjs.com/en/4x/api.html)
1. [Mongoose Docs](https://mongoosejs.com/docs/guide.html)

I would strongly recommend this [tutorial](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6P4dQUsoDatjEGpmBpcOW8V) for learning the MERN stack.

As for database design, and although MongoDB is not a relational database, I would recommend taking some UBC courses such as CPSC 304, CPSC 368, or COMM 335.
