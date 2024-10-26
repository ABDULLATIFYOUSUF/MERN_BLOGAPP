const express = require('express');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controllers/blogController')

const router = express.Router()

//get all blogs || get
router.get('/all-blogs', getAllBlogsController)

//createblogs || post
router.post('/create-blog', createBlogController)

//updateblogs || put
router.put('/update-blog/:id', updateBlogController)

//getsingleblog || get
router.get('/get-blog/:id', getBlogByIdController)

//deleteblog || delete
router.delete('/delete-blog/:id', deleteBlogController)

//userblog || get
router.get('/user-blog/:id', userBlogController)


module.exports = router;