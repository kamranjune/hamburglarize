# hamburglar eat-dat-burger

Assignment completed.   I needed a lot of time for this assignment because it was a big step in the the class.

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

