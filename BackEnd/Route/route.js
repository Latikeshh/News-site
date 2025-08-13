const express = require('express')

const usercontrollars = require('../Controller/controllar')
// multer file
const {photoUpload} = require('../fileUpload')

const route = express.Router()

route.post('/register-news', photoUpload,usercontrollars.adduser)

route.get('/findnews', usercontrollars.getuser)

route.get('/findCategory', usercontrollars.getCategory)

route.put('/updatedata/:_id', photoUpload,usercontrollars.updateuser)

route.delete('/deleteuser/:_id', usercontrollars.deleteuser)

route.get('/get/:_id', usercontrollars.getdataOnebyid)

module.exports = route