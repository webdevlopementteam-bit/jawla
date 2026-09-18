"use client";
import React from "react";
import { useState } from "react";
function BlogForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
    saveInfo: false,
  });

  const handleSubmit = () => {
    e.preventDefault();
    // Handle comment submission logic
    console.log("Form submitted:", formData);
  };
  return (
    <>
      {/* Comment Form Section */}
      <div className="pt-3 sm:pt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-[#111827] mb-2">
          Leave a Reply
        </h2>

        <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 mb-5 sm:mb-6">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-red-600">*</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Top Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm md:text-sm font-medium text-gray-700 mb-1"
              >
                Name <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 text-xs sm:text-sm md:text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm md:text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-600">*</span>
              </label>

              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 text-xs sm:text-sm md:text-sm"
              />
            </div>

            {/* Website Field */}
            <div>
              <label
                htmlFor="website"
                className="block text-xs sm:text-sm md:text-sm font-medium text-gray-700 mb-1"
              >
                Website
              </label>

              <input
                type="url"
                id="website"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 text-xs sm:text-sm md:text-sm"
              />
            </div>
          </div>

          {/* Add Comment Field */}
          <div>
            <label
              htmlFor="comment"
              className="block text-xs sm:text-sm md:text-sm font-medium text-gray-700 mb-1"
            >
              Add Comment <span className="text-red-600">*</span>
            </label>

            <textarea
              id="comment"
              rows={6}
              required
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 text-xs sm:text-sm md:text-sm resize-y"
            ></textarea>
          </div>

          {/* Save Info Checkbox */}
          <div className="flex items-start sm:items-center space-x-2">
            <input
              type="checkbox"
              id="saveInfo"
              checked={formData.saveInfo}
              onChange={(e) =>
                setFormData({ ...formData, saveInfo: e.target.checked })
              }
              className="h-4 w-4 mt-0.5 sm:mt-0 shrink-0 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />

            <label
              htmlFor="saveInfo"
              className="text-[11px] sm:text-xs md:text-sm text-gray-600 select-none"
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#d9383a] hover:bg-[#c02b2d] text-white font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded text-xs sm:text-sm md:text-sm transition-colors duration-150 shadow-sm"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BlogForm;
