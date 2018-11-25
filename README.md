# hamburglar-IZE eat-dat-burger

11/24/18:  hamburglar + Sequelize = HAMBURGLARIZE

Got everything working.  Pretty cool.   Here are some things still on my mind to explore about this coding project:

1.  What is the big deal about the "Post Model"  I tried making it follow the Post name and although it doesn't seem to matter in general the difference
of naming the tables Post rather than Burgers help me distinguish this assignment from the previous assignment.
2.  Why does Sequelize pluralize table names.  I think there is a command to make it stay singular, I don't recall if I used it.
3.  I incorporated Handlebars although none of the Sequelize activities were done with handlebars.
4.  I need an explanation of objects within objects,   e.g. res.render { index, hbsObject}   this code line in the api route causes there to be
    {Post: [Post {...   two layers of objects representing the same Post table name, for some reason I think this is necessary in Handlbars. 
    I have not tried it without the extra hbsObject { Post : dbPost} object.  It seems to be in a Post array with sequelize?  I have a console.log on this 
    so if you add a burger you will see it.   It is on ilne 33 of post-api-route.js
5.  req.body.id did not work for a put; although it seems to work with just static html routes?  I had to go back to req.params.id with an id added to the 
client side javascript route too.
6.  Another object within an object:  db.Post.update (.......{ where : { }}        )   I initially did not have where within an object, 
the predicate thing updated must be in a parameter too.
7.  why did res.json work this time much better with sequelize when compared to the home-made orm?  with the prior week's homework I was using res.redirect 
and res.status(200).end; along with location.reload in the javascript file.  I still have location.reload in the js file, which i don't like.  I might try to get rid of it.
8.  How to make the db persistent with sequelize.  Each time the server loads sequelize drops and creates which erases the prior data.  This was not the case with the 
homemade ORM
9.  I have data validation on the name len: [2, 15] meaning the length of the hamburger name must at least be 2 letters long and at least 15 characters long.
10.  Changing the CNAME of the herokuapp.com domain has a warning that git remotes have to be update.  I need to find out more about how git and heroku and github work together.  What is updating the remotes and how are heroku sites linked up in git and github?









##  Original Hamburglar Read me Below  
I got everything working and I added a regurgitate button

I need a better way of using the res/response for puts and posts because right now the page is reloaded to update the view 
and that interrupts the added youtube video if that is playing.  There must be an easier method for updating a page without reloading.

Here are the res methods from expressjs.com:

Method	Description
res.download()	Prompt a file to be downloaded.
res.end()	End the response process.
res.json()	Send a JSON response.
res.jsonp()	Send a JSON response with JSONP support.
res.redirect()	Redirect a request.
res.render()	Render a view template.
res.send()	Send a response of various types.
res.sendFile()	Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body.

redirect was used, but I was wondering about using render again with posts and puts somehow.


Also it is not clear if body-parser is completely integrated into express or not.  I have seen posts on the internet that say
body parser must still be installed as an npm package.

I spent a full half day stuck on the fact that I was calling burgerS.js rather than burger.js withouth the s.
The good part is that I learned that if there is no javascript, then the POST just works straight from the handlebars index page to the Router.

