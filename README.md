# Openhost Front - RSS/ATOM Article Reader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.
This application allows users to manage and read articles from different RSS/ATOM sources. The frontend is built in Angular, while the backend is an API developed with the Symfony framework. JWT authentication is used to ensure user security and authorization. Below are the instructions on how to install and use the application on the frontend.

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

### RSS/ATOM Sources CRUD

Create RSS/Atom sources: Navigate to the section where the RSS sources list is located and click on the "Create new RSS source" button. Fill out the form and save the new source.

Delete RSS/Atom sources: In the RSS sources list, click on the "Delete" button next to the source you want to remove. Confirm the action in the pop-up dialog.

Edit RSS/Atom sources: In the RSS sources list, click on the "Edit" button next to the source you want to modify. Update the information in the form and save the changes.

### RSS/ATOM Articles Reading

View available RSS/Atom sources: Navigate to the articles section and click on each RSS source to explore the titles of the available articles.

View articles from a set of RSS/Atom sources: In the articles section, click on the title of the article you want to read to see a simplified preview of the content.

Show all article information: In the simplified preview of the article, click on the link to read the complete article. A new page will open with all the article information, and it will be automatically marked as read.

### Bonus
The application uses the browser's localStorage to store articles and allows multiple selection for deletion and marking as read.
Icons can be displayed instead of buttons for CRUD and article reading actions.
The application displays the favicon of each RSS/Atom source.
Buttons for sharing articles on social media are included.
