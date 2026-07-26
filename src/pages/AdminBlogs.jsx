import React, { useState } from "react";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([
    {
      _id: "1",
      title: "JWT Authentication in Node.js Explained",
      content: "JWT helps secure backend APIs...",
      image: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      slug: "jwt-authentication-in-nodejs-explained",
      createdAt: "2026-03-02T12:00:00.000Z",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    slug: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

      setFormData({ ...formData, title: value, slug });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      ...formData,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    setBlogs([newBlog, ...blogs]);

    setFormData({
      title: "",
      content: "",
      image: "",
      slug: "",
    });

    setIsOpen(false);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-white p-5 rounded-xl shadow-sm border border-indigo-100">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700">
            Blog Management
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and publish your blog content
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition shadow"
        >
          + Add Blog
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl border border-emerald-100">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-emerald-50 text-emerald-700 uppercase text-xs">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Slug</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr
                  key={blog._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">
                    <img
                      src={blog.image}
                      alt=""
                      className="w-14 h-14 object-cover rounded-md border"
                    />
                  </td>

                  <td className="p-3 font-medium max-w-[200px] truncate">
                    {blog.title}
                  </td>

                  <td className="p-3 text-gray-500">{blog.slug}</td>

                  <td className="p-3 text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-3 text-right space-x-3">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Edit
                    </button>
                    <button className="text-rose-600 hover:text-rose-800 font-medium">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No blogs found. Add your first blog 🚀
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 relative border border-indigo-100 shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-lg"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-indigo-700">
              Create New Blog
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <input
                type="text"
                name="title"
                placeholder="Blog title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />

              {/* Content */}
              <textarea
                name="content"
                placeholder="Blog content..."
                value={formData.content}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />

              {/* Image */}
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />

              {/* Slug */}
              <input
                type="text"
                name="slug"
                placeholder="Slug"
                value={formData.slug}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg shadow"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogs;