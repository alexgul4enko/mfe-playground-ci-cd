const express = require('express')
const app = express()
const port = 3020
const fs = require('fs')

app.use('/mfe0-test-app', express.static('mfe0-test-app'))
app.use('/mfe0-test-home', express.static('mfe0-test-home'))
app.use('/mfe0-test-button', express.static('mfe0-test-button'))
app.use('/mfe0-test-lib', express.static('mfe0-test-lib'))
app.use('/mfe0-test-modal', express.static('mfe0-test-modal'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

