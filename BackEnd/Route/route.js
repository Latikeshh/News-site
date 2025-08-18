const express = require('express')

const usercontrollars = require('../Controller/controllar')
// multer file
const {photoUpload} = require('../fileUpload')

const route = express.Router()

route.post('/register-news', photoUpload,usercontrollars.addNews)

route.get('/findnews', usercontrollars.getNews)

route.get('/adminnews', usercontrollars.getAllNewsAdmin)

route.get('/findCategory', usercontrollars.getCategory)

route.put('/updatedata/:_id', photoUpload,usercontrollars.updateNews)

route.put('/deleteNews/:_id', usercontrollars.deleteNews)

route.put('/recoveruser/:_id', usercontrollars.recoverUser)

route.get('/get/:_id', usercontrollars.getdataOnebyid)

route.get('/news-by-category', usercontrollars.getNewsByCategory);

route.get('/searchNews', usercontrollars.searchNews);

route.get('/authornews', usercontrollars.getNewsByAuthor);
// Admin route: get total news count (all)
route.get('/totalnewsadmin', usercontrollars.getTotalNewsCountAdmin);

// Author route: get total news count (by author, including deleted)
route.get('/totalnewsauthor', usercontrollars.getTotalNewsCountAuthor);

route.get('/news-by-date', usercontrollars.getNewsByDate);

module.exports = route