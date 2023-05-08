const express = require('express')
const userRouter = express.Router()

const Service = [
    {
        'services' : 'gameDeveloper',
        'charge' : 2500,
        'Dur' : 2
    },
    {
        'services' : 'webDesigner',
        'charge' : 4500,
        'Dur' : 2
    },
    {
        'services' : 'backendDeveloper',
        'charge' : 3500,
        'Dur' : 2
    },
    {
        'services' : 'FrontendDeveloper',
        'charge' : 5000,
        'Dur' : 2

    },
    {
        'services' : 'UiDesigner',
        'charge' : 3500,
        'Dur' : 2
    }
    
]
userRouter.get('/',(request,response)=>{
    response.send('this is Service Page')
})
userRouter.param('id',(request,response,next,id)=>{
    request.serve = Service[id-1]
    next() 
})
userRouter.get('/serve',(request,response)=>{
    response.render('users/serve')
})
userRouter.post('/',(request,response)=>{
    console.log(request.body.Service,request.body.Charges,request.body.time)
    Service.push({services:request.body.Service,charge :request.body.Charges,Dur :request.body.time})
    response.redirect(`/service/${Service.length}`)
})
userRouter.get('/:id',(request,response)=>{
    response.send(`$ Service ={request.serve.services} charges =${request.serve.charge} duration =${request.serve.Dur} week`)

})
module.exports = userRouter;