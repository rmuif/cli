# CLI

This repository contains tools for managing your RMUIF app. It has three modules:

- user
- users
- roles

These are all separate programs, working independently.

## Quickstart
1. Add `GOOGLE_APPLICATION_CREDENTIALS` environment variable as the [Firebase documentation explains](https://firebase.google.com/docs/admin/setup#initialize-sdk).
2. Add the property `FIREBASE_DATABASE_URL` into the `.env` file pointing to the Firebase Database URL.
  ```
  FIREBASE_DATABASE_URL=https://<firebase-project-name>.firebaseio.com
  ```
