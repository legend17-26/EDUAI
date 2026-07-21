/**
 * EDUPATH AI - CENTRAL API CLIENT
 */
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000/api'
  : '/api';

class ApiClient {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    const token = localStorage.getItem('edupath_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = await this.getHeaders();
    
    const config = {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API Execution Error');
      }
      return data;
    } catch (err) {
      console.error(`[API Error] ${endpoint}:`, err);
      throw err;
    }
  }

  // Domain & Roadmap APIs
  async getDomain(slug) { return this.request(`/domains/${slug}`); }
  async searchCareers(query) { return this.request(`/search?q=${encodeURIComponent(query)}`); }
  async getRoadmap(domainId) { return this.request(`/roadmaps/${domainId}`); }

  // AI Service APIs
  async askAI(prompt, context = {}) {
    return this.request('/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ prompt, context }),
    });
  }

  async generateStudyPlan(parameters) {
    return this.request('/ai/plan', {
      method: 'POST',
      body: JSON.stringify(parameters),
    });
  }
}

export const api = new ApiClient();