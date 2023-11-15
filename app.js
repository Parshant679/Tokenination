const express = require('express');
const bodyParser = require('body-parser');
const tokenUtils = require('./tokenUtil');
const app = express();
const port = 3000;

app.use(bodyParser.json());
const secretKey = 'your-secret-key';
const TokenUtils = new tokenUtils(secretKey);

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];
app.post('/login',(req,res)=>{
  const {username,password} = req.body;
  const token = TokenUtils.
})
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});