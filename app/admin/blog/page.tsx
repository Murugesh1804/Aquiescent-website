'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import AddPost from "./AddPost";

export default function BlogsManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  // Fetch all blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Authentication required. Please log in.");
        setLoading(false);
        return;
      }

      const response = await axios.get("https://api.acquiescent.in/api/blogs/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs(response.data.blogs);
      setError(null);
    } catch (err) {
      setError("Failed to fetch blogs. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a blog
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.post(`https://api.acquiescent.in/api/blogs/delete/${id}`);
      fetchBlogs();
    } catch (err) {
      setError("Failed to delete blog. Please try again.");
      console.error(err);
    }
  };

  // Edit a blog post
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setShowAddModal(true);
  };

  // Close modal and refresh blogs
  const handleModalClose = (refreshNeeded = false) => {
    setShowAddModal(false);
    setEditingBlog(null);
    if (refreshNeeded) {
      fetchBlogs();
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Manager</h1>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add New Blog
        </button>
      </div>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      {loading ? (
        <div className="text-center py-8">Loading blogs...</div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded">No blogs found. Create your first blog!</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured Image</th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-50">
  <td className="px-6 py-4 whitespace-nowrap">
    {blog.featuredImage ? (
      <img 
        src={`https://api.acquiescent.in/uploads/blogs/${blog.featuredImage}`} 
        alt={blog.title}
        className="h-16 w-24 object-cover rounded"
      />
    ) : (
      <div className="h-16 w-24 bg-gray-200 flex items-center justify-center rounded">
        No image
      </div>
    )}
  </td>
  <td className="px-6 py-4">
    <div className="font-medium text-gray-900">{blog.title}</div>
    <div className="text-sm text-gray-500 truncate max-w-xs">{blog.excerpt}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">{blog.author?.name || "Unknown"}</td>
  <td className="px-6 py-4 whitespace-nowrap">
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
      blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
    }`}>
      {blog.status}
    </span>
  </td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
    <button
      onClick={() => handleEdit(blog)}
      className="text-indigo-600 hover:text-indigo-900 mr-4"
    >
      Edit
    </button>
    <button
      onClick={() => handleDelete(blog._id)}
      className="text-red-600 hover:text-red-900"
    >
      Delete
    </button>
  </td>
</tr>

              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Blog Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">
                {editingBlog ? "Edit Blog Post" : "Add New Blog Post"}
              </h2>
              <button 
                onClick={() => handleModalClose()}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <AddPostModal 
                initialData={editingBlog} 
                onClose={handleModalClose} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Modified AddPost component to work as a modal
function AddPostModal({ initialData, onClose }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    content: initialData?.content || "",
    excerpt: initialData?.excerpt || "",
    author: initialData?.author || "",
    featuredImage: initialData?.featuredImage || "",
    categories: initialData?.categories || [],
    tags: initialData?.tags || [],
    status: initialData?.status || "draft",
    slug: initialData?.slug || ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
  
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Authentication required. Please log in.");
        return;
      }
  
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('excerpt', formData.excerpt);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('status', formData.status);
      formDataToSend.append('slug', formData.slug);
      
      if (selectedImage) {
        formDataToSend.append('featuredImage', selectedImage);
      } else if (formData.featuredImage) {
        formDataToSend.append('featuredImage', formData.featuredImage);
      }
  
      let response;
      
      if (initialData) {
        // Update existing blog
        response = await axios.put(
          `https://api.acquiescent.in/api/blogs/update/${initialData._id}`, 
          formDataToSend, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } else {
        // Create new blog
        response = await axios.post(
          "https://api.acquiescent.in/api/blogs/create", 
          formDataToSend, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      }
  
      setSuccess(response.data.message);
      
      // Close modal and refresh parent after a short delay
      setTimeout(() => {
        onClose(true);
      }, 1500);
      
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
      <div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
                {(imagePreview || formData.featuredImage) && (
                  <div className="mb-2">
                    <img 
                      src={imagePreview || `https://api.acquiescent.in/${formData.featuredImage}`} 
                      alt="Preview" 
                      className="h-32 w-48 object-cover rounded"
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={12}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>
          
          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
            <button
              type="button"
              onClick={() => onClose()}
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {initialData ? "Update Blog Post" : "Create Blog Post"}
            </button>
          </div>
        </form>
      </div>
    );
}