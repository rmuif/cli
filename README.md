# CLI

This repository contains tools for managing your RMUIF app. It has three modules:

- user
- users
- roles

These are all separate programs, working independently.

## Setup
- Add `GOOGLE_APPLICATION_CREDENTIALS` environment variable as the [Google documentation explains](https://firebase.google.com/docs/admin/setup#initialize-sdk).
- Add the property `FIREBASE_DATABASE_URL` into the `.env` file pointing yo the Firebase URL.
  ```
  FIREBASE_DATABASE_URL=https://<firebase-project-name>.firebaseio.com
  ```
