// src/services/api.js
const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  async createBlog(formData) {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      body: formData,
    });
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Server returned non-JSON response. Is the backend server running?');
    }

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create blog');
    }
    return data;
  },

  async getBlogs() {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return response.json();
  },

  async getBlogById(id) {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    return response.json();
  }
};