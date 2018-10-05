---
layout: post
title:      "Render or Redirect "
date:       2018-10-05 03:53:30 +0000
permalink:  render_or_redirect
---

Just finished my Sinatra Assessment and I definitely feel like I had learned a lot and come a long way since the beginning. The labs prior to my project helped set me up for success. I had to live code during my project and it was extremely scary, but I was able to fix the issue!! The issue was that I was able to login to my account and still had the ability to access other user's information. The way I fixed it was to use binding.pry and figured out how to debug.  I think this was my proudest moment  because I didnt't expect myself to actually get the code to work. What I did was translate the code to English to help me fix the issue. And that was advice was given to me from the beginning and I think it really holds true to any problems I need to solve with coding.


How do we render a view and what does it mean? 
Rendering a view allows us to view embedded ruby and displays html on a web page. We render a view by creating an erb file and we can display or render the view by writing it in our controller. For example,
```
  get '/' do
    erb :welcome
  end
```

This allows us to see our erb file welcome which displays a welcome page to the users. In the '/' route of the Application Controller that's how our erb page gets rendered onto our web page. 

How do we redirect elsewhere and what does that mean?
Redirecting allows us to access different routes. We redirect by using the redirect method in the controller and specifying which route we want our current route to redirect to. One example is:
```
  get '/login' do
    if logged_in?
      redirect '/home'
    else
      erb :'/users/login'
    end
  end
```

This allows us to redirect to the homepage via the '/home' route if we are logged in. It allows us to store the data

When might you choose to redirect over rendering a view?
We would choose to redirect if we want to redirect us a certain route after submitting data. For example,
```
  post '/login' do
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect to '/home'
    else
      redirect '/login'
    end
  end
```

After logging in, if the user has put in the correct information, then we would redirect to the home page, if not it would be redirected to the login page if the login credentials didnt work. If the information has successfully logged them in, we want to store the data that they had submitted and force the browser to start a new request by redirecting to the homepage. If we do not redirect, it won't save the information and forcing the user to log in again.  

Why can't we access variables defined in one route after redirecting to another?
We can't access variables defined in one route after redirecting to another because only the route with the defined instance variable is accessible.When we redirect to another route, it doesn't have access to the previous one and we can only access what's in the current route. 
```
  get '/signup' do
    if !logged_in?
      @error = session[:error]
    erb :'/users/signup'
  else
    redirect '/routines'
    end
  end
```

For example this route has an instance variable @error defined in the sign up route and can't be accessed in the routines route. 
