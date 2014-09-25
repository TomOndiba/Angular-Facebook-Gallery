Eversnap Project
========================

About
========

This project is a web assignment completed by Rakshit Shukla for their Summer Internship Application at Eversnap.

The application is made using AngularJS, Twitter Bootstrap and UI bootstrap as the front-end technologies and a small expressjs app for local testing.

The app incorporate's Facebook login via oauth.io

The galleries and the popup box with image are both designed to be responsive.

App Structure
========

The App is built using standard Angular directives, controllers and services and UI Router.

Service:
 FacebookService is responsible for integrating with and fetching data from Facebook Developer API.
 FacebookService is built primarily using Promises and oauth.io javascript callbacks.

Controllers:
 HomeCtrl connects to Facebook via oauth.io Javascript SDK
 GalleryCtrl fetching user's albums and album photos.
 GalleryDetailCtrl fetches the details of each album's gallery photos

Views:
 Home contains Facebook Login
 Gallery contains Album thumbnails
 Gallery detail contains thumbnails of each individual photo of the selected Album.


Running the App
========

The app can be run via 3 ways.
Running 'nodemon server.js' will host the app on localhost:3000
Running 'gulp' will also host the app on localhost:3000

(If the above two fail) :
Deployed app on heroku.
http://gentle-harbor-9841.herokuapp.com

I have tested this app through my facebook account and I'm able to retrieve all albums and their images.


Side Notes
=========

I sincerely hope that I completed all the requirements as I put my complete effort in building this project. 
I hope I get an opportunity to work with the team at Eversnap this summer.

PS: The app uses Eversnap's logo which is used only for demonstration purposes.





