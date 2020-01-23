const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '   Abhishek  ',
//     email:'ABHI17@GMAIL.COM  ',
//     password: '  mypass007  '
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error) =>{
//     console.log('Error!', error)
// })

// const mytask = new Tasks({
//     description: '  Learn the mongoose library    ',
// })

// mytask.save().then(() =>{
//     console.log(mytask)
// }).catch((error) =>{
//     console.log(error)
// })