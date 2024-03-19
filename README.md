# Mio Group Front - Users management

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.
This application allows to create and manage users. The frontend is built in Angular, while the backend is an API developed with the Symfony framework. JWT authentication is used to ensure user security and authorization. Below are the instructions on how to install and use the application on the frontend.

## Requirements

Before you can run and install the application:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/)
- Make sure the back-end server https://github.com/MiguelUbeda/openhost-back is serving in localhost:8000/

## Dependencies
- `@angular/material` providing the modal used in form
- `@fortawesome/fontawesome-free` providing icons to the project

## Getting started

Install Node.js dependencies and build assets (Processes: Minify and Obfuscation):

- `npm install` to install node dependencies 
- `ng build --configuration production` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build

Run `http-server dist/my-app/ --gzip --proxy http://localhost:8080?` to deploy the build on http://localhost:8080.

## Using the application

### Registration: 
If you don't have an account, click on "Register" within the form. Fill out the new form with your user information and save it. You will be redirected to the authentication page.

### Authentication: 
Enter your user information and you will be redirected to the RSS/ATOM Sources page (From now on you will get data by using JWT token from local storage).

### Logout: 
When you're ready to log out, click on the "Logout" button in the navigation menu. You will be logged out of your account and redirected to the login page.
