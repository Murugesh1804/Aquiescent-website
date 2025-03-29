"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Filter, 
  MoreHorizontal, 
  Calendar, 
  User, 
  X 
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import api from '@/utils/axiosConfig'

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [blogToDelete, setBlogToDelete] = useState(null)
  const [newBlogDialogOpen, setNewBlogDialogOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const [newBlog, setNewBlog] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    categories: [],
    tags: "",
    status: "draft",
    featuredImage: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchBlogs()
    fetchCategories()
  }, [currentPage, statusFilter])

  // Generate slug from title
  useEffect(() => {
    if (newBlog.title) {
      const slug = newBlog.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-')
      setNewBlog(prev => ({ ...prev, slug }))
    }
  }, [newBlog.title])

  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories');
      setCategories(data.categories);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load categories",
        variant: "destructive",
      });
    }
  };

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      let url = `/blogs?page=${currentPage}&limit=10`;

      if (statusFilter !== "all") {
        url += `&status=${statusFilter}`;
      }

      if (searchTerm) {
        url += `&search=${encodeURIComponent(searchTerm)}`;
      }

      const { data } = await api.get(url);
      setBlogs(data.blogs);
      setTotalPages(data.totalPages);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    fetchBlogs()
  }

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value)
    setCurrentPage(1)
  }

  const handleDeleteBlog = async () => {
    try {
      await api.delete(`/blogs/${blogToDelete}`);
      
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });

      fetchBlogs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setBlogToDelete(null);
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!newBlog.title || !newBlog.slug || !newBlog.content) {
        throw new Error("Please fill in all required fields");
      }

      const tagsArray = newBlog.tags 
        ? newBlog.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : [];
      
      const blogData = {
        ...newBlog,
        tags: tagsArray,
        // Ensure categories is always an array
        categories: Array.isArray(newBlog.categories) ? newBlog.categories : []
      };

      const response = await api.post('/blogs/create', blogData);
      
      if (!response.data) {
        throw new Error("Failed to create blog post");
      }

      toast({
        title: "Success",
        description: "Blog post created successfully",
      });

      // Reset form
      setNewBlog({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        categories: [],
        tags: "",
        status: "draft",
        featuredImage: ""
      });
      setNewBlogDialogOpen(false);
      
      // Refresh the blog list
      await fetchBlogs();
    } catch (error) {
      console.error('Create blog error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create blog post",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const confirmDelete = (blogId) => {
    setBlogToDelete(blogId)
    setDeleteDialogOpen(true)
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Published</Badge>
      case "draft":
        return <Badge variant="outline">Draft</Badge>
      case "archived":
        return <Badge variant="secondary">Archived</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewBlog(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setNewBlog(prev => ({ ...prev, [name]: value }))
  }

  const handleMultiSelectChange = (name, value) => {
    setNewBlog(prev => {
      let newValues = [...prev[name]]
      
      if (newValues.includes(value)) {
        newValues = newValues.filter(v => v !== value)
      } else {
        newValues.push(value)
      }
      
      return { ...prev, [name]: newValues }
    })
  }

 

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <Button onClick={() => setNewBlogDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Post
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Management</CardTitle>
          <CardDescription>Create, edit, and manage your blog posts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={statusFilter} onValueChange={handleStatusFilterChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No blog posts found
                      </TableCell>
                    </TableRow>
                  ) : (
                    blogs.map((blog) => (
                      <TableRow key={blog._id}>
                        <TableCell>
                          <div className="w-12 h-12 relative rounded overflow-hidden">
                            <Image
                              src={blog.featuredImage || "/placeholder.svg?height=48&width=48"}
                              alt={blog.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="max-w-xs truncate">{blog.title}</div>
                          <div className="text-xs text-gray-500">{blog.slug}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{blog.author?.name || "Unknown"}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{formatDate(blog.createdAt)}</span>
                          </div>
                        </TableCell>
                        <TableCell>{blog.viewCount}</TableCell>
                        <TableCell>{getStatusBadge(blog.status)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => router.push(`/admin/blog/edit/${blog._id}`)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => router.push(`/blog/${blog.slug}`)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => confirmDelete(blog._id)}>
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-end space-x-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="text-sm">
                Page {currentPage} of {totalPages}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteBlog} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Add New Blog Dialog */}
      <Dialog open={newBlogDialogOpen} onOpenChange={setNewBlogDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Blog Post</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new blog post. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleCreateBlog} className="space-y-6 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="Blog post title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={newBlog.slug}
                  onChange={handleInputChange}
                  placeholder="blog-post-url-slug"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={newBlog.content}
                onChange={handleInputChange}
                placeholder="Write your blog post content here..."
                className="h-32"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={newBlog.excerpt}
                onChange={handleInputChange}
                placeholder="A short summary of your post"
                className="h-20"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image URL</Label>
                <Input
                  id="featuredImage"
                  name="featuredImage"
                  value={newBlog.featuredImage}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" value={newBlog.status} onValueChange={(value) => handleSelectChange("status", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Categories</Label>
                <span className="text-xs text-gray-500">Select one or more</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge 
                    key={category._id} 
                    variant={newBlog.categories.includes(category._id) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleMultiSelectChange("categories", category._id)}
                  >
                    {category.name}
                  </Badge>
                ))}
                {categories.length === 0 && (
                  <span className="text-sm text-gray-500">No categories available</span>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                name="tags"
                value={newBlog.tags}
                onChange={handleInputChange}
                placeholder="tag1, tag2, tag3"
              />
              <span className="text-xs text-gray-500">Separate tags with commas</span>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setNewBlogDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || !newBlog.title || !newBlog.content}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="mr-2">Saving...</span>
                  </span>
                ) : (
                  "Save Post"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}