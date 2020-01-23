const express = require('express')
require('./db/mongoose')
const userRouter  = require('./routers/user')
const taskRouter  = require('./routers/task')

const app = express()
const port = process.env.PORT


//how to add file upload using multer
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//      limits:{
//          fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)
//     }
//     //cb(new Error('File must be a PDF))
//     //cb(undefined, true)
//     //cb(undefined, false)
// })


// app.post('/upload',upload.single('upload'), (req,res) =>{
//     res.send()
// }, (error, req, res, next) =>{
//     res.status(400).send({ error: error.message})
// })

// app.use((req, res, next) =>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }
//     else{
//         next()
//     }
// })

// app.use((req,res,next) =>{
//     res.status(503).send('Server is under maintenance. Check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//
// Without middleware: new request -> run routehandler
//
// With middleware: new request-> do something -> run route handler
//

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})

// const jwt  = require('jsonwebtoken')
// const myFunction = async() =>{
//     const token  = jwt.sign({_id : 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//    const data =  jwt.verify(token, 'thisismynewcourse')
//    console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'hal'
// }

// pet.toJSON = function (){
//     return {}
// }

// console.log(JSON.stringify(pet))

const Task = require('./models/task')
const User = require('./models/user')

// const main = async() =>{
//     // const task = await Task.findById('5e258ea8239df838048929bc')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e258d4fe8aa0c0b883d6627')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks) 
// }

// main()