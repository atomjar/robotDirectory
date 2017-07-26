const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js')
const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.get('/', (request, response) => {response.render('users', {users: data.users} )});

app.get('/user/:username', (request, response) => {
  let user = data.users.find( user => {
    return user.username === request.params.username;
  })
  response.render('user',  user);
});




app.use(express.static('public'));

app.listen(3000, () => {console.log('App listening on port 3000')});
