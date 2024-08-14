import express from 'express'

import 'dotenv/config'


const app = express()
const port = process.env.PORT | 3000;

app.get('/', (req, res) => {
  
  res.json({
    id:1,
    name: "Amit Chandravadiya",
    email: "amitckn7@gmail.com"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})