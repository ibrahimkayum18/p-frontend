import React, { useState } from "react";

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    {
      _id: "1",
      title: "Product Page CRO Optimization",
      client: "Fashion Brand",
      beforeImage: "https://via.placeholder.com/150",
      afterImage: "https://via.placeholder.com/150",
      conversionRate: "+38%",
      revenueImpact: "+$12,000",
      description: "Improved product page layout, CTA, and trust signals.",
      createdAt: "2026-03-02T12:00:00.000Z",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    client: "",
    beforeImage: "",
    afterImage: "",
    conversionRate: "",
    revenueImpact: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...formData,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    setProjects([newProject, ...projects]);

    setFormData({
      title: "",
      client: "",
      beforeImage: "",
      afterImage: "",
      conversionRate: "",
      revenueImpact: "",
      description: "",
    });

    setIsOpen(false);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-white p-5 rounded-xl shadow-sm border border-indigo-100">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700">
            CRO Works / Case Studies
          </h1>
          <p className="text-gray-500 text-sm">
            Showcase your Shopify optimization results
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow"
        >
          + Add Work
        </button>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl shadow border border-emerald-100 overflow-hidden"
            >
              {/* Images */}
              <div className="grid grid-cols-2">
                <img
                  src={project.beforeImage}
                  alt="before"
                  className="h-32 w-full object-cover"
                />
                <img
                  src={project.afterImage}
                  alt="after"
                  className="h-32 w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h2 className="font-semibold text-lg">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {project.client}
                </p>

                {/* Metrics */}
                <div className="flex gap-2 flex-wrap mt-2">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
                    CR: {project.conversionRate}
                  </span>
                  <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">
                    Revenue: {project.revenueImpact}
                  </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-3">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                    Edit
                  </button>
                  <button className="text-rose-600 hover:text-rose-800 text-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No works added yet.</p>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-xl rounded-xl p-6 relative border border-indigo-100 shadow-lg">
            
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-indigo-700">
              Add New Work
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="title"
                placeholder="Project title"
                value={formData.title}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                type="text"
                name="client"
                placeholder="Client / Brand name"
                value={formData.client}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                type="text"
                name="beforeImage"
                placeholder="Before image URL"
                value={formData.beforeImage}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                type="text"
                name="afterImage"
                placeholder="After image URL"
                value={formData.afterImage}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                type="text"
                name="conversionRate"
                placeholder="Conversion Rate Increase (e.g. +35%)"
                value={formData.conversionRate}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                type="text"
                name="revenueImpact"
                placeholder="Revenue Impact (e.g. +$10,000)"
                value={formData.revenueImpact}
                onChange={handleChange}
                required
                className="input-style"
              />

              <textarea
                name="description"
                placeholder="What did you optimize?"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                required
                className="input-style"
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reusable Input Style */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          color: #1f2937;
          background: white;
          outline: none;
        }
        .input-style:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </div>
  );
}