    const express = require('express')
    const userRouter = express.Router()

    const listOfUsers = [
        {
            
            'name' :'Prethivee'
        },
        {
            
            'name' :'Jeggy'
        },
        {
            
            'name' :'Jeeva'
        },
        {
            
            'name' :'rajesh'
        },
        {
            
            'name' :'krishna'
        }
    ]
    userRouter.get('/',(request,response)=>{
        response.send('this is user page')
    })
    userRouter.param('id',(request,response,next,id)=>{
        request.user = listOfUsers[id-1]
        next()


    })

    userRouter.get('/new',(request,response)=>{
        response.render('users/new')
    })
    userRouter.post('/',(request,response)=>{
        // console.log(request.body.firstName)
        listOfUsers.push({name:request.body.firstName})
        response.redirect(`/users/${listOfUsers.length}`)
    })
    userRouter.get('/:id([0-9]{1})',(request,response)=>{
        response.send(`${request.user.name} with id ${request.params.id}`)
    })

    // userRouter.get('/html',(request,response)=>{
    //     response.render('contact')

    // })


    module.exports   =  userRouter;