const passport = require('passport');

module.exports = (app) =>  {

  
  app.post('/login', passport.authenticate('local'),
   (req, res) => {
     res.send({ yes: 'success', id: req.user}); 
   });

   app.get('/', (req, res) => {
    res.send({ Hi: 'there people' })
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

  app.get('/hello', (req, res) => {
    res.send({ Hello: 'there' })
  })
  

  app.get('/profile', (req, res) => {
      res.send( { user: req.user });
    });

  app.get('/logout', (req, res) => {
    req.logout()
    res.send({ logged: 'out', name: req.user })
  })
}