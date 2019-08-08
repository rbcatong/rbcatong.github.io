---
layout: post
title:      "Active Record Associations"
date:       2019-08-07 19:21:08 -0400
permalink:  active_record_associations
---


In Ruby on Rails, we make associations to connect the models together. By associating these models together, it allows us to use methods to query or create objects for these models. When they are associated with either a belongs_to or has_many there are methods that are created for these models.

For example, when a model has a belongs_to association, it shows that it automatically receives 6 methods to this association. One method that we can explore and use is the build association - build_association(attributes = {}).

class Review < ApplicationRecord
belongs_to :user
end

```
@user = @review.build(user: 1, user_name: "rebecca")
```
 For example, since the review belongs to a user, you can use the build method return a new object of this type. This object will be instantiated with the params, but the object wil not be saved. It allows it to build an association to have the review belong to the user. 
 

When you have a has_many association, you'd gain 17 methods from this association. One method that we can take a look at is the collection method.

class User < ApplicationRecord
has_many :reviews
end

```
@reviews = @user.reviews
```
This allows us to see all the reviews that is written by that specific user. And if it's empty, it would return an empty collection. 


The has_many also has a build method - collection.build(attributes = {},....). This is different than belongs_to because it would return a single or an array of new objects of the associated type. But it's the same whereas, they will not yet be saved. 
`@review = @makeup.reviews.build`


One method that we can explore and use is .where. I've used this a number of times in my project in order to help with my scoping. 
```
scope :top_reviews, -> {Review.where("rating = 5")}
```
This allows me to query which reviews have the rating of 5. I can show it on  a view and allow the user to see which makeup products are top rated. There are many other scoping methods that can be written such as .include or .order and it will have you query your data easier. 


