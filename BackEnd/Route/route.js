const express = require('express')

const usercontrollars = require('../Controller/controllar')
// multer file
const {photoUpload} = require('../fileUpload')

const route = express.Router()

route.post('/register-news', photoUpload,usercontrollars.adduser)

route.get('/findnews', usercontrollars.getuser)

route.get('/adminnews', usercontrollars.getAllUsersAdmin)

route.get('/findCategory', usercontrollars.getCategory)

route.put('/updatedata/:_id', photoUpload,usercontrollars.updateuser)

route.put('/deleteuser/:_id', usercontrollars.deleteuser)

route.put('/recoveruser/:_id', usercontrollars.recoverUser)

route.get('/get/:_id', usercontrollars.getdataOnebyid)

route.get('/news-by-category', usercontrollars.getNewsByCategory);

module.exports = route