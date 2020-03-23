const express = require("express")
const userRouter = require("./routers/user")
const todoRouter = require("./routers/todo")
const cors = require("cors");
const port = 8000
require("./db/db")
const app = express()
// app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3000',
    // optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(userRouter)
app.use(todoRouter)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


