const express = require('express')
const app = express()
const port = 3022
const fs = require('fs')

app.use('/', express.static('dist'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

