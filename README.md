Facebook Gallery Integration with Angular + Twitter bootstrap + oAuth.io
========================

About
========

This project is a clone of Facebook Gallery made in AngularJS and custom Twitter Bootstrap/Angular UI

A Sample is: https://facebookgallery.herokuapp.com

I also made a small expressjs app for local testing.

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
https://facebookgallery.herokuapp.com
