const express = require("express");
const router = express.Router();

const fs = require('fs/promises');

router.get('/parse', async (req, res) => {
    console.log('parsing....');
    const data = await fs.readFile('./db/users.json', 'utf8');
    // console.log(data);
    res.json(JSON.parse(data));
});

router.post('/save', async (req, res) => {
    console.log('save....', req.body);
    const data = await fs.readFile('./db/users.json', 'utf8');
    let newData = JSON.parse(data)

    await fs.writeFile(`./db/users.json`, JSON.stringify(newData))
    res.send(JSON.stringify())
 
    // fs.writeFile()
    // res.redirect('/');
    // res.send()


});

router.post('/login', async (req, res) => {
  try {
    const { name, surname } = req.body;
    const data = await fs.readFile('./db/users.json', 'utf8');
    const users = JSON.parse(data);
  
    const user = users.find((user) => user.name === name && user.surname === surname);
    if (user) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;