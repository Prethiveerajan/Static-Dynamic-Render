    const express = require('express')
    const app = express ()
    const userRouter = require('./users')
    const serviceRouter = require('./service')


    // app.use(express.static('public'))
    app.set('view engine','ejs')
    app.use(express.urlencoded({extend:true}))
    //component.http methods.(/path,(handlers))
    app.get('/',(request,response)=>{
        // response.send('from app.js')
        // response.sendStatus(200)
        // response.render('Land')
        response.render('index')
    }

    )
    app.use('/users',userRouter)
    app.use('/service',serviceRouter)

    app.listen(3500)