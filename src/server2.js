const express = require('express');
const fetch = require('node-fetch');

const app = express();

const port = 4000;





console.log('2');
// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();

fetch("http://localhost:3000/cors").then(req => req.text()).then(console.log)


// console.log(data);
app.listen(port, () => console.log(`App listening at port:${port}`));