# UDACITY - Natural language processing (NLP) with Aylien News API

This project is a part of [Udacity](https://www.udacity.com/) Front End Developer Nanodegree program.

## Task
The aim of this project is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 

This tool gives us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

[Aylien api](https://aylien.com/) was used to build simple web interface to interact with their NLP system. Node and express are the webserver and routing, and webpack is the build tool of choice.

Requirements: 

* Be set up with Webpack, Express, Node, and Sass, and Service Workers

* Have separate dev and prod configurations for Webpack

* Have the developer environment set up with the Webpack dev server

* Have a minimum of one form field

* Make one request to the Aylien API

* Use Sass for styling

* Minify js and styles in the production environment

* Response from the API must be added to the view for a user to see 

* Be able to show content offline

Detailed project specifications available [here](https://review.udacity.com/#!/rubrics/2668/view)

## Run locally
* Sign up for [Aylien api](https://developer.aylien.com/signup) and get an API key.
* Create a new ```.env``` file in the root of the project
* Fill the .env file with your API keys like this
  ```
  API_ID=**************************
  API_KEY=**************************
  ```
* Install npm by running ```npm install```
* To view in develoment mode run ```npm run build-dev```, the window will open automatically
* To view in production mode run ```npm run build-prod```, then ```npm start``` and open [http://localhost:3000/](http://localhost:3000/) in your prefered browser