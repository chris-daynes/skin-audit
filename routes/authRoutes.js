const passport = require('passport');

module.exports = (app) =>  {

  
  app.post('/login', passport.authenticate('local'),
   (req, res) => {
     res.send({ yes: 'success'});
   });

   app.get('/', (req, res) => {
    res.send({ Hi: 'there people' })
  });
}