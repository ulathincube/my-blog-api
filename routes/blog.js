import { Router } from 'express'
import { createBlog, showBlog, showBlogs } from '../controllers/blog.js'

const router = Router()

router.get('/:blogId', showBlog)
router.post('/', createBlog)
router.get('/', showBlogs)

export default router
