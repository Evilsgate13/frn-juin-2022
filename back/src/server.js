const express = require('express')
const morgan = require('morgan')
const serveIndex = require("serve-index")
const api = require("./api")

const app = express()
const port = 3000

app.use(morgan("tiny"))
app.use(express.static("wwwDir"))
app.use(serveIndex("wwwDir", { icons: true }))

app.use("/api", api)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})