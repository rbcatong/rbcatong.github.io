---
layout: post
title:      "Javascript: Project Mode"
date:       2020-02-24 21:47:44 +0000
permalink:  javascript_project_mode
---


So I've been learning Javascript for a few months now and it's been pretty interesting. After learning Ruby on Rails, learning Javascript has made it a bit easier to learn. The syntax is definitely different, but I'm getting used to it. The idea for my project is to be able to track and budget things that you've purchased. I got this idea because I've been purchasing a lot of makeup products specifically and don't have the time to use them. 

The first things I've done was to create a Rails API. By typing this into the terminal: rails new makeup-api --api, this allowed me to create the backend for this project. API - application programming interface. This API allows us to connect to the internet and send data to a server. The server receives the data and proceeds with the correct actions and presents it back to the user. After doing creating the API, I had started started to work on the rails porition of the backend. By creating migrations I was able to develop a database for the products and reviews. I created routes so that JS knew where to grab data from. CORs is another feature that represents cross origin resources. It's important to know because it allows a HTTP request to execute a resource that has a different origin. 

In another folder I had created Javascript Front End to have HTML and JS connect with the backend. By running the backend server, this is how I got it connected with the front end of the project. We have to use a fetch in order to grab the information from a JSON file. It was interesting because every DOM element that is attached, I was able to see it happen right before my eyes. I also split the javascript files in order to have access to each separate class. 

I was having a huge issue with the reviews not showing up on my page. I had console.log all my variables and the reviews container to see if it was appending to the page. It showed in my console, but for some reason it wasn't showing on the page. I was able to discover why, it was because I needed to manually to display the container. It's amazing how console.log can be a great debugging tool. 

It took me a while to complete the styling of the website. It has taught me how HTML and CSS works collectively. It has been a while that I've used HTML and CSS, but I learned that you need to write the correct ID's and classes in order to show the styles on the page. 
