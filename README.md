# **UBC Data Science Club Website** 🌐

## **Overview** 📖
This repository holds the source code for the [UBC Data Science Club's website](https://ubcdsci.club/). \
Written in **TypeScript**, this website uses **React + Vite**, **Sass/SCSS**, and **Firebase**.

## **Getting Started** 🚀

### PREREQUISITES:
1. Install [Node.js + NPM](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (recommended package manager).
2. Set up a [Firebase](https://firebase.google.com/) project and enable **Authentication** and **Firestore**.
3. Create a `.env` file in the root directory of this project and add the following environment variables:

```bash
VITE_FIREBASE_API_KEY=<your-firebase-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
VITE_FIREBASE_PROJECT_ID=<your-firebase-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
VITE_FIREBASE_APP_ID=<your-firebase-app-id>
```

### DEVELOPMENT:
Install all the dependencies for this project by running the following command:

```bash
yarn install
```

To run locally, run the following command:

```bash
npm start
```

## **Tasks** 📝
Tasks will be added as issues on [GitHub](https://github.com/ubcdsci/ubcdsci_website_ts/issues). To claim a task, assign yourself to the issue. When you are ready to work on the task, create a new branch with the following naming convention:

```bash
DSC-<issue-number>
```

When you are ready to submit your changes, create a pull request and assign someone to review your code. Once your code has been reviewed, you can merge your branch into `main`.

## **Management** 📊
- [Firebase Console](https://console.firebase.google.com/)
- [ReCaptcha v3](https://www.google.com/recaptcha/admin/) (enforce reCAPTCHA v3 on Firebase App Check)

## **Resources** 📑
[TypeScript Docs](https://www.typescriptlang.org/docs/home.html) \
[React Docs](https://reactjs.org/docs/getting-started.html) \
[Firebase Docs](https://firebase.google.com/docs) \
[SASS/SCSS Docs](https://sass-lang.com/documentation)
