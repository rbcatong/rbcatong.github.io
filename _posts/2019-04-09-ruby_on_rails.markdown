---
layout: post
title:      "Ruby on Rails"
date:       2019-04-09 19:34:19 +0000
permalink:  ruby_on_rails
---

It's been pretty hard for me to write a blog post on rails. I think it's been difficult because I don't quite know where to start.
So I guess a few things for me to tell you guys is that Rails is very useful. When I was using Sinatra, I had to manually do most of the methods for CRUD, whereas with Rails I can just generate the methods. 
So the one command that we would be using is 
```
rails generate scaffold Book title:string author:string
```

The format would be --  rails generate model NAME [field[:type][:index] field[:type][:index]] [options]. This allow us to generate a few folders which are important in the application of Rails.  Some important folders that we are mostly using are - models, views, controllers, and db. They allow us to control the organization of Rails.  

The **models** allows us to maintain the relationship between the database. By using ActiveRecord, it allows us to save, edit, and delete data from our database. It also allows validations and assocaitions between the models. 

The **controllers** organizes the flow of the application. This is where all the methods live that help the webpage get what routes are necessary. 

The **views** allows you to design what is meant to be seen on the webpage. It uses a mix of HTML & Ruby and allows data to be rendered. 

The routes file allows us to use these CRUD features. 

For example, of how they work together is when you put your index method in the controller 

```
class BooksController < ApplicationController
    def index 
        books = Books.all
     end
end
```
This allows the Bookscontroller to get a hold of the Book model to access all the books in the database. 

Next we have CRUD methods to help update, save, and delete our data. 
**C** -- Create
**R** -- Read
**U** -- Update
**D** -- Delete

The routes file allows us to use these CRUD features. 
By writing 
```
resources :books
```
It allows us to have access to those routes without writing it one by one. The CRUD methods are based in the controller where they are handled and the way you name the methods is how it connects to the views of the application. 

This is the basis of the application and how it works. Thanks for reading and will write another post soon.  

