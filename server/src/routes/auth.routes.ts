// Library imports.
import express from 'express';
import jwt from 'jsonwebtoken';

import { jwtSecret, jwtExpire, username as USER, password as PASS } from '../configs/env.configs';

import { User } from '../database/models/index.models';

export const router = express.Router();


const user1 = new User({ username: USER, password: PASS });
user1.save()
  .then(() => console.log('User created!'))
  .catch((err) => console.log('User already exists!'));

  
router.get('/', (req, res) => {
  res.send({ message: 'Welcome to the auth API!' });
});

router.post('/register', async (req, res) => {
  
});

router.post('/checkusername', (req, res) => {
  
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  await User.findOne({ username: username })
    .then((user) => {
      if (user && user.password === password) {
        const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: jwtExpire });
        res.status(200).send({ success: true, token: token, user: username, id: user.id });
      } else {
        res.status(401).send({ success: false, message: 'Invalid username or password' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ success: false, message: 'Internal server error' });
    });
});

router.post('/verify', (req, res) => {
  const { token } = req.body;

  jwt.verify(token, jwtSecret, (err : any, decoded : any) => {
    if (err) {
      res.status(401).send({ success: false, message: 'Invalid token' });
    } else {
      res.status(200).send({ success: true, message: 'Token is valid' });
    }
  });
});
