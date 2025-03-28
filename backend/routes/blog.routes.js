import express from "express"
import {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogCategoriesAndTags,
} from "../controllers/blog.controller.js"
import { protect, optionalAuth } from "../middleware/auth.middleware.js"

const router = express.Router()

// Public/Optional Auth routes
router.get("/", optionalAuth, getAllBlogs)
router.get("/slug/:slug", optionalAuth, getBlogBySlug)
router.get("/categories-tags", getBlogCategoriesAndTags)

// Protected routes
router.post("/", protect, createBlog)
router.put("/:id", protect, updateBlog)
router.delete("/:id", protect, deleteBlog)

export default router

