const express = require('express')
const userRouter = express.Router()

const Service = [
    {
        'Services' : 'gameDeveloper',
        'charge' : 2500,
        'Dur' : 'TwoWeeks'
    },
    {
        'Services' : 'webDesigner',
        'charge' : 4500,
        'Dur' : 'TwoWeeks'
    },
    {
        'Services' : 'backendDeveloper',
        'charge' : 3500,
        'Dur' : 'TwoWeeks'
    },
    {
        'Services' : 'FrontendDeveloper',
        'charge' : 5000,
        'Dur' : 'TwoWeeks'

    },
    {
        'Services' : 'UiDesigner',
        'charge' : 3500,
        'Dur' : 'TwoWeeks'
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
    Service.push({Services:request.body.Service,charge :request.body.Charges,Dur :request.body.time})
})
userRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(`${request.Serve.Services} with charges ${request.server.charge} duration ${request.body.Dur}`)

})
module.exports = userRouter;