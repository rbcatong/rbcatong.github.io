---
layout: post
title:      "Active Record Associations"
date:       2019-08-07 23:21:08 +0000
permalink:  active_record_associations
---


In Ruby on Rails, we make associations to connect the models together. By associating these models together, it allows us to use methods to query or create objects for these models. When they are associated with either a belongs_to or has_many there are methods that are created for these models.

For example, when a model has a belongs_to association, it shows that it automatically receives 6 methods to this association. One method that we can explore and use is the build association.
```
@review = @makeup.reviews.build
```
 For example, I would use this when I create a review and I wanted to add this review to that particular makeup. 
 

When you have a has_many association, you'd gain 17 methods from this association. One method that we can explore and use is .where. I've used this a number of times in my project in order to help with my scoping. 
```
scope :top_reviews, -> {Review.where("rating = 5")}
```
This allows me to query which reviews have the rating of 5. I can show it on  a view and allow the user to see which makeup products are top rated. There are many other scoping methods that can be written such as .include or .order and it will have you query your data easier. 


