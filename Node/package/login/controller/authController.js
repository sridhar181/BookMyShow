const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/userSchema');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//list all user
router.get('/users', async (req, res) => {
    try {
        console.log('executing function');
      const users = await User.find({});
      console.log(users)
      res.send(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

//register user
router.post('/register', async (req, res) => {
    try {
      console.log("Function is running");
      
      // Hash the password
      let hashPassword = bcrypt.hashSync(req.body.password, 8);
  
      // Create user using async/await
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        phone: req.body.phone,
        role: req.body.role ? req.body.role : 'User',
      });
  
      res.status(200).send('Register Successful');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

//login user
router.post('/login', async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
          return res.status(201).send({ auth: false, token: 'No User Found. Register First' });
      }

      const passIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passIsValid) {
          return res.status(201).send({ auth: false, token: 'Invalid Password' });
      }

      const token = jwt.sign({ id: user._id }, config.secert, { expiresIn: 86400 });

      return res.status(200).send({ auth: true, token });
  } catch (err) {
      return res.status(500).send({ auth: false, token: 'There is a problem while login' });
  }
});


//userInfo
router.get('/userInfo', async (req, res) => {
  try {
      const token = req.headers['x-access-token'];

      if (!token) {
          return res.status(201).send({ auth: false, token: 'No Token Provided' });
      }

      const data = await jwt.verify(token, config.secert);

      if (!data) {
          return res.status(201).send({ auth: false, token: 'Invalid Token' });
      }

      const user = await User.findById(data.id);

      if (!user) {
          return res.status(201).send({ auth: false, token: 'User not found' });
      }

      res.send(user);
  } catch (err) {
      return res.status(500).send({ auth: false, token: 'Error fetching user information' });
  }
});


module.exports = router;